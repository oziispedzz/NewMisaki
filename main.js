require('./src/settings')
const {
  default: newWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore, 
  PHONENUMBER_MCC,
  jidNormalizedUser,
  delay,
  Browsers,
  getContentType, 
  downloadContentFromMessage,
  jidDecode,
} = require(`@whiskeysockets/baileys`)

const axios = require('axios');
const pino = require('pino');
const { fileURLToPath } = require("url");
const { Boom } = require('@hapi/boom');
const readline = require("readline");
const { parsePhoneNumber } = require("libphonenumber-js");
const NodeCache = require("node-cache");
const path = require("path");
const fs = require('fs');
const chalk = require('chalk');
const FileType = require("file-type");
const fetch = require("node-fetch");
const yargs = require('yargs/yargs')
const _ = require('lodash')
const PhoneNumber = require("awesome-phonenumber");

const {
  smsg,
  sleep,
  getBuffer, 
  fetchJson, 
  TelegraPh 
} = require("./src/lib/simple");
const { 
  toAudio, 
  toPTT, 
  toVideo 
} = require("./src/lib/converter");
const { 
  color
} = require("./src/lib/color");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExif,
} = require("./src/lib/exif");

function nocache(module, cb = () => {}) {
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

// LowDb
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./src/lib/lowdb')
}

// MongoDb
const { Low, JSONFile } = low
const mongoDB = require('./src/lib/mongoDB') 

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database/data.json`)
)

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    allcommand: [],
    banned: [],
    antispam: [],
    dashboard: [],
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// Save Data
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

let phoneNumber = global.owner;
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const store = makeInMemoryStore({ 
  logger: pino({ 
    level: "silent", 
    stream: "store" 
  })
});

async function Botstarted() {
  const { version, isLatest } = await fetchLatestBaileysVersion()
  const { state, saveCreds } = await useMultiFileAuthState(`./src/database/session`);
  const msgRetryCounterCache = new NodeCache()
  const conn = newWASocket({
  logger: pino({ level: 'silent' }),
    printQRInTerminal: !pairingCode,
    mobile: useMobile,
    browser: ['Chrome (Linux)', '', ''],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      let jid = jidNormalizedUser(key.remoteJid)
      let msg = await store.loadMessage(jid, key.id)
      return msg?.message || ""
    },
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined,
  });
  
  const getMessage = async (key) => {
  if(store) {
  const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
  return msg?.message || undefined
  }
  return {
  conversation: 'hallo'
 }
 }
 
  store.bind(conn.ev);
  
  require("./src/misaki");
  nocache("./src/misaki", (module) => console.log(` "${module}" Telah diupdate!`));
  nocache("./src/settings", (module) =>
    console.log(` "${module}" Telah diupdate!`)
  );

  if(pairingCode && !conn.authState.creds.registered) {
    if(useMobile) throw new Error('Cannot use pairing code with mobile api')
    let phoneNumber
    if(!!phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
      if(!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
        console.log(chalk.bgBlack(chalk.redBright(`Start with country code of your WhatsApp Number, example: +628xxxx`)))
        process.exit(0)
      }
    } else {
      phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFor example: +628xxxx: `)))
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
      if(!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
        console.log(chalk.bgBlack(chalk.redBright(`Start with country code of your WhatsApp Number, example: +628xxxx`)))
        phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFor example: +628xxxx : `)))
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
        rl.close()
      }
    }
    setTimeout(async () => {
      let code = await conn.requestPairingCode(phoneNumber)
      code = code?.match(/.{1,4}/g)?.join("-") || code
      console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
    }, 3000)
  }
  
  conn.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
      //mek = chatUpdate.messages[0]
      for (let mek of chatUpdate.messages) {
        if (!mek.message) return;
        const m = smsg(conn, mek, store);
        const isCreator = [
          "6289528652225@s.whatsapp.net",
          "6289528652225@s.whatsapp.net",
          ...global.owner,
        ]
          .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
          .includes(m.sender);
        mek.message =
          Object.keys(mek.message)[0] === "ephemeralMessage"
            ? mek.message.ephemeralMessage.message
            : mek.message;
        if (mek.key && mek.key.remoteJid === "status@broadcast") return;
        if (
          !conn.public &&
          !isCreator &&
          !mek.key.fromMe &&
          chatUpdate.type === "notify"
        )
          return;
        if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
        require("./src/misaki")(conn, m, chatUpdate, mek, store);
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  conn.ev.on("groups.update", async (json) => {
    console.log(json)
    try {
    const res = json[0];
      if (res.announce == true) {
	    await sleep(2000)
		let a = `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admin can send messages !`
		await conn.sendMessage(res.id, { text: a } );
	  } else if (res.announce == false) {
		await sleep(2000)
		let a = `「 Group Settings Change 」\n\nGroup has been opened by admin, Now participants can send messages !`
		await conn.sendMessage(res.id, { text: a, });
	  } else if (res.restrict == true) {
		await sleep(2000)
		let a = `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`
		await conn.sendMessage(res.id, { text: a, });
	  } else if (res.restrict == false) {
		await sleep(2000)
		let a = `「Group Settings Change 」\n\nGroup info has been opened, Now participant can edit group info !`
		await conn.sendMessage(res.id, { text: a, });
	  } else if(!res.desc == ''){
		await sleep(2000)
		let a = `「Group Settings Change 」\n\n*Group desk has been changed to*\n\n${res.desc}`
		await conn.sendMessage(res.id, { text: a,});
      } else {
	    await sleep(2000)
		let a = `「Group Settings Change 」\n\n*Group Subject has been changed to*\n\n*${res.subject}*`
		await conn.sendMessage(res.id, { text: a, });
			}
		} catch (err) {
		  console.log(err)
		}
     }
  );
  
  conn.ev.on('group-participants.update', async (anu) => {
    console.log(anu)
      try {
        let metadata = await conn.groupMetadata(anu.id);
        let participants = anu.participants;
          for (let num of participants) {
          let nameUser = await conn.getName(num)
          let membr = metadata.participants.length 
            if ( anu.action === 'add' ) {
              conn.sendMessage(anu.id, { mentions: [num], text: `Hello @${num.split("@")[0]} Welcome To *${metadata.subject}*` })
            } else if ( anu.action === 'remove' ) {
              conn.sendMessage(anu.id, { mentions: [num], text: `Goodbye @${num.split("@")[0]} I Hope You Don't Come Back` }) 
            } else if ( anu.action === 'promote' ) {
              conn.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Congratulations, Now you are a Group Admin` })
            } else if ( anu.action === 'demote' ) {
              conn.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Hahaha You are in demote` })
            }
          }
      } catch (err) {
      console.log(`ERROR DIBAGIAN ` + err)
    }
  });
  
    // Setting
  conn.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  conn.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = conn.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = {
          id,
          name: contact.notify,
        };
    }
  });

  conn.getName = (jid, withoutContact = false) => {
    id = conn.decodeJid(jid);
    withoutContact = conn.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === conn.decodeJid(conn.user.id)
          ? conn.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  conn.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await conn.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await conn.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      });
    }
    conn.sendMessage(
      jid,
      {
        contacts: {
          displayName: `${list.length} Kontak`,
          contacts: list,
        },
        ...opts,
      },
      {
        quoted,
      }
    );
  };

  conn.public = true;

  conn.serializeM = (m) => smsg(conn, m, store);
  
  conn.ev.on("connection.update", async (update) => {
  const { connection } = update;
    if(connection === 'close') {
        console.log('Connection Closed: Reconnecting...');
        await Botstarted();
      } else if(connection === 'open') {
        console.log('Connected!');
        const creds = fs.readFileSync('./src/database/session/creds.json');
        await delay(1000 * 2) 
        const replied = await conn.sendMessage(conn.user.id, { document: creds, mimetype: `application/json`, fileName: `creds.json` })
        await conn.sendMessage(conn.user.id, { text: `Ini adalah file Sesi anda, Jangan bagikan file ini dengan siapa pun.` }, { quoted: replied });
      }
  });
  
  conn.ev.on("creds.update", saveCreds);
  
  conn.sendText = (jid, text, quoted = "", options) =>
    conn.sendMessage(
      jid,
      {
        text: text,
        ...options,
      },
      {
        quoted,
        ...options,
      }
    );
    
  conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

  conn.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
  };

  conn.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;

    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };
  conn.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    conn.sendMessage(
      jid,
      {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        ),
        ...options,
      },
      {
        quoted,
      }
    );
  conn.getFile = async (PATH, returnAsFilename) => {
    let res, filename;
    const data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (res = await fetch(PATH)).buffer()
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    if (!Buffer.isBuffer(data)) throw new TypeError("Result is not a buffer");
    const type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    if (data && returnAsFilename && !filename)
      (filename = path.join(
        __dirname,
        "./src/media/" + new Date() * 1 + "." + type.ext
      )),
        await fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      ...type,
      data,
      deleteFile() {
        return filename && fs.promises.unlink(filename);
      },
    };
  };

  conn.sendFile = async (
    jid,
    path,
    filename = "",
    caption = "",
    quoted,
    ptt = false,
    options = {}
  ) => {
    let type = await conn.getFile(path, true);
    let { res, data: file, filename: pathFile } = type;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw {
          json: JSON.parse(file.toString()),
        };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let opt = {
      filename,
    };
    if (quoted) opt.quoted = quoted;
    if (!type) options.asDocument = true;
    let mtype = "",
      mimetype = type.mime,
      convert;
    if (
      /webp/.test(type.mime) ||
      (/image/.test(type.mime) && options.asSticker)
    )
      mtype = "sticker";
    else if (
      /image/.test(type.mime) ||
      (/webp/.test(type.mime) && options.asImage)
    )
      mtype = "image";
    else if (/video/.test(type.mime)) mtype = "video";
    else if (/audio/.test(type.mime))
      (convert = await (ptt ? toPTT : toAudio)(file, type.ext)),
        (file = convert.data),
        (pathFile = convert.filename),
        (mtype = "audio"),
        (mimetype = "audio/ogg; codecs=opus");
    else mtype = "document";
    if (options.asDocument) mtype = "document";

    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;

    let message = {
      ...options,
      caption,
      ptt,
      [mtype]: {
        url: pathFile,
      },
      mimetype,
    };
    let m;
    try {
      m = await conn.sendMessage(jid, message, {
        ...opt,
        ...options,
      });
    } catch (e) {
      //console.error(e)
      m = null;
    } finally {
      if (!m)
        m = await conn.sendMessage(
          jid,
          {
            ...message,
            [mtype]: file,
          },
          {
            ...opt,
            ...options,
          }
        );
      file = null;
      return m;
    }
  };
  conn.sendMedia = async (jid, path, filename, quoted = "", options = {}) => {
    let { ext, mime, data } = await conn.getFile(path);
    messageType = mime.split("/")[0];
    pase = messageType.replace("application", "document") || messageType;
    return await conn.sendMessage(
      jid,
      {
        [`${pase}`]: data,
        mimetype: mime,
        fileName: filename + ext ? filename + ext : getRandom(ext),
        ...options,
      },
      {
        quoted,
      }
    );
  };
  conn.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
    let { ext, mime, data } = await conn.getFile(path);
    let media = {};
    let buffer;
    media.data = data;
    media.mimetype = mime;
    if (options && (options.packname || options.author)) {
      buffer = await writeExif(media, options);
    } else {
      buffer = /image/.test(mime)
        ? await imageToWebp(data)
        : /video/.test(mime)
        ? await videoToWebp(data)
        : "";
    }
    await conn.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      }
    );
    return buffer;
  };
  conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await (await fetch(path)).buffer()
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }

    await conn.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      }
    );
    return buffer;
  };

  conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }

    await conn.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      }
    );
    return buffer;
  };
  conn.sendButtonText = (
    jid,
    buttons = [],
    text,
    footer,
    quoted = "",
    options = {}
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
    conn.sendMessage(jid, buttonMessage, {
      quoted,
      ...options,
    });
  };
  conn.send1ButMes = (
    jid,
    text = "",
    footer = "",
    butId = "",
    dispText = "",
    quoted,
    ments
  ) => {
    let but = [
      {
        buttonId: butId,
        buttonText: {
          displayText: dispText,
        },
        type: 1,
      },
    ];
    let butMes = {
      text: text,
      buttons: but,
      footer: footer,
      mentions: ments ? ments : [],
    };
    conn.sendMessage(jid, butMes, {
      quoted: quoted,
    });
  };

  conn.sendButImage = async (
    jid,
    link,
    but = [],
    text = "",
    footer = "",
    ments = [],
    quoted
  ) => {
    let dlimage;
    try {
      dlimage = await getBuffer(link);
    } catch {
      dlimage = await getBuffer(
        "https://telegra.ph/file/ca0234ea67c9a8b8af9a1.jpg"
      );
    }
    const buttonMessage = {
      image: dlimage,
      caption: text,
      footer: footer,
      buttons: but,
      headerType: "IMAGE",
      mentions: ments,
    };

    conn.sendMessage(jid, buttonMessage, quoted);
  };
  conn.sendFakeLink = (jid, text, salam, pushname, quoted) =>
    conn.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          externalAdReply: {
            title: `Selamat ${salam} ${pushname}`,
            body: footer_text,
            previewType: "PHOTO",
            thumbnail: pp_bot,
            sourceUrl: myweb,
          },
        },
      },
      {
        quoted,
      }
    );

  return conn;
}

Botstarted()
 