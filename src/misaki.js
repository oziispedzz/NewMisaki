/**
  * Created by FauziDevID
  * Contact me on WhatsApp wa.me/6289528652225 
  * Subscribe me on Youtube : https://youtube.com/@fauzijayawardana

SCRIPT ORI BUATAN FAUZII!!
*/
require('../src/settings');
require('../src/FauziDev')
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const similarity = require("similarity");
const threshold = 0.72;
const path = require("path");
const os = require("os");
const nou = require("node-os-utils");
const fetch = require("node-fetch")
const youtube = require("yt-search");
const cheerio = require('cheerio')
const { exec, spawn } = require("child_process")
const { translate } = require('@vitalets/google-translate-api')
const { jadibot, conns } = require('../jadibot')

const {
    smsg,
    fetchJson,
    getBuffer,
    getRandom,
    getGroupAdmins,
    TelegraPh,
    msToDate,
    isUrl,
    sleep,
    hitungmundur,
    checkBandwidth,
    runtime,
    parseMention
} = require('../src/lib/simple')
const {
    clockString, 
    jsonformat, 
} = require('../src/lib/myfunc.js')

const anon = require('../src/lib/menfess.js')
const _spam = require('../src/lib/antispam.js')
const uploadImage = require('../src/lib/uploadImage')
const { menu } = require('../src/help')
const scp1 = require('../src/scrape/scraper')
const photooxy = require('../src/scrape/photooxy')

let mess = JSON.parse(fs.readFileSync('./src/mess.json'));
let { 
    wait,
    error, 
    mgroup, 
    mprivate, 
    admin, 
    botadmin, 
    owner, 
    prem, 
    done 
} = mess;

let toxic = JSON.parse(fs.readFileSync('./src/database/antitoxic.json'))
let bad = JSON.parse(fs.readFileSync('./src/database/bad.json'))
let _user = JSON.parse(fs.readFileSync('./src/database/user.json'))
let _prem = JSON.parse(fs.readFileSync('./src/database/premium.json'))


module.exports = conn = async (
    conn,
    m,
    chatUpdate,
    mek,
    store,
    antiToxic
) => {

try {
let ppuser = await conn.profilePictureUrl(sender, 'image')
}catch {
let pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

    try {
        var body =
            m.mtype === "conversation" ?
            m.message.conversation :
            m.mtype == "imageMessage" ?
            m.message.imageMessage.caption :
            m.mtype == "videoMessage" ?
            m.message.videoMessage.caption :
            m.mtype == "extendedTextMessage" ?
            m.message.extendedTextMessage.text :
            m.mtype == "buttonsResponseMessage" ?
            m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype == "listResponseMessage" ?
            m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype == "templateButtonReplyMessage" ?
            m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "messageContextInfo" ?
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
            m.text :
            ""; //omzee
        var budy = typeof m.text == "string" ? m.text : "";
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const prefix = isCmd ? budy[0] : "";
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const text = (q = url = args.join(" "));
        const type = Object.keys(mek.message)[0];
        const pushname = m.pushName || "No Name";
        const botNumber = await conn.decodeJid(conn.user.id);
        const tanggal = moment().tz("Asia/jakarta").format("dddd, ll");
        const jam = moment(Date.now()).tz("Asia/jakarta").locale("id").format("HH:mm:ss z");
        const wita = moment(Date.now()).tz("Asia/makassar").locale("id").format("HH:mm:ss z");
        const salam = moment(Date.now()).tz("Asia/jakarta").locale("id").format("a");
        const isCreator = [botNumber, ...global.owner, '6289528652225@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const quoted = m.quoted ? m.quoted : m;
        const from = m.chat;
        const sender = m.sender;
        const mime = (quoted.msg || quoted).mimetype || "";
        const isMedia = /image|video|sticker|audio/.test(mime);
        const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
        const {senderNumber} = m
        
        //group
        const isGroup = m.key.remoteJid.endsWith("@g.us");
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = m.isGroup ? await groupMetadata.participants : "";
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const antiToxic = m.isGroup ? toxic.includes(from) : false;
        const isUser = _user.includes(sender)
        const isPremium = isCreator || _prem.includes(m.sender) || false
        const banUser = await conn.fetchBlocklist()
        
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./src/misaki.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        } 
        
        const totalUser = () => {
        var mytext = JSON.parse(fs.readFileSync('./src/database/user.json'))
        var numUpper = (mytext.match(/62 '/g) || []).length;
        rerunUpper
        }
        
        const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
        } 
        
        const reply = (text) => {
            conn.sendFakeLink(m.chat, text, salam, pushname)
        }
       
        
        const math = (teks) => {
        return Math.floor(teks)
        }  
        
        // Public & Self
       if (!conn.public) {
         if (!m.key.fromMe && !isPremium && !isCreator) return
       }
       
       if (command && isCmd && !isUser) {
       _user.push(sender)
       fs.writeFileSync('./src/database/user.json', JSON.stringify(_user, null, 2))
       }
       
       //AUTO REACT
       const AntiSpam = db.data.antispam
       let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
       for (let i of regex){
       if (!_spam.check("NotCase",sender, AntiSpam) && budy.toLowerCase().includes(i)){ 
     //  _spam.add("NotCase",sender, "10s", AntiSpam)
       let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
       conn.sendMessage(from, { react: { text: emot, key: m.key } })	
       }
       }
       
       // Limit
       let isNumber = x => typeof x === 'number' && !isNaN(x)
       let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
       let gameLimit = isPremium ? global.gcount.premium : global.gcount.free
       let user = global.db.data.users[m.sender]
       let chat = global.db.data.chats[m.sender]
       if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
       if (typeof user !== 'object') global.db.data.users[m.sender] = {}
       
        if (chat) {
        if (!('welcome' in chat)) chat.welcome = true
        if (!('detect' in chat)) chat.detect = false
        if (!('antiToxic' in chat)) chat.antiToxic = false
        } else global.db.data.chats[m.chat] = {
        welcome: true,
        detect: false,
        antiToxic: true,
        }

       //Afk
       if (user) {
       if (!('name' in user)) user.name = m.pushname
       if (!('id' in user)) user.id = m.senderNumber
       if (!isNumber(user.afkTime)) user.afkTime = -1
       if (!isNumber(user.balance)) user.balance = 50
       if (!isNumber(user.exp)) user.exp = 1000
       if (!isNumber(user.level)) user.level = 0
       if (!isNumber(user.atm)) user.atm = 0
       if (!isNumber(user.bank)) user.bank = 0
       if (!isNumber(user.ojekk)) user.ojekk = 0
       if (!isNumber(user.lastngojek)) user.lastngojek = 0
       if (!('autolevelup' in user)) user.autolevelup = true
       if (!('pasangan' in user)) user.pasangan = ''
       if (!('afkReason' in user)) user.afkReason = ''
       if (!('registered' in user)) user.registered = false
       if (!isNumber(user.limit)) user.limit = limitUser
       if (!isNumber(user.glimit)) user.glimit = gameLimit
       } else global.db.data.users[m.sender] = {
       afkTime: -1,
       afkReason: '',
       limit: limitUser,
       glimit: gameLimit,
       pasangan: '',
       level: 0,
       autolevelup: true,
       atm: 0,
       bank: 0,
       registered: false,
       ojekk: 0,
       lastngojek: 0
       }
       
       if (!user.registered) {
       if (!('name' in user)) user.name = this.getName(m.sender)
       if (!isNumber(user.age)) user.age = -1
       if (!isNumber(user.premiumDate)) user.premiumDate = -1
       if (!isNumber(user.regTime)) user.regTime = -1
       }
       
       
       // Reset Limit
       let cron = require('node-cron')
       cron.schedule('00 12 * * *', () => {
       let user = Object.keys(global.db.data.users)
       let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
       for (let jid of user) global.db.data.users[jid].limit = limitUser
       console.log('Reseted Limit')
       }, {
       scheduled: true,
       timezone: "Asia/Jakarta"
       })
       
       //reset balance
      /* cron.schedule('00 12 * * *', () => { 
       let orang = Object.keys(global.db.data.users)
       let balanceUser = user.balance
       for (let jid of orang) global.db.data.users[jid].balance = 50
       console.log('reseted balance')
       }, {
       scheduled: true,
       timezone: "Asia/Jakarta"
       })*/
       
       let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	   for (let jid of mentionUser) {
	   let user = global.db.data.users[jid]
       if (!user) continue
       let afkTime = user.afkTime
       if (!afkTime || afkTime < 0) continue
       let reason = user.afkReason || ''
       m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
       }

       if (db.data.users[m.sender].afkTime > -1) {
       let user = global.db.data.users[m.sender]
       conn.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
       user.afkTime = -1
       user.afkReason = ''
       }
      
       //SLOT
       const rslot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
       

       //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang! Dan Membawa $5 Balance` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    db.data.users[winner].balance += 5
	    await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    
	    //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
       if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
         const jawab = [
            'Wa\'alaikumusalam',
            'Wa\'alaikumusalam wb',
            'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
         ]
         const salam = jawab[Math.floor(Math.random() * jawab.length)]
         return reply(salam)
       }
       
       //let komn = /^(bang|hai|hi|halo|hei|halow|p|pp|ppp)/i
    /*   let konm = ["Halo", "Hai", "Hi", "Haloww😎", "Apa???🤔", "apaan"]
       let knmo = konm[Math.floor(Math.random() * konm.length)]
       if (/^(bang|hai|hi|halo|hei|halow|p|pp|ppp)/.test(budy?.toLowerCase())) {
       return m.reply(knmo)
       } */
        
       if (m.message) {
         conn.readMessages([m.key]);
           console.log(
             chalk.black(chalk.greenBright("[ DATE ]")),
             chalk.black(chalk.bgGreen(new Date())) + "\n" +
             chalk.black(chalk.greenBright("[ MESSAGE ]")),
             chalk.black(chalk.bgBlue(budy || m.mtype)) +
             "\n" +
             chalk.magenta("=> From"),
             chalk.green(pushname),
             chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
             chalk.green(m.isGroup ? pushname : "Chat Pribadi", m.chat)
            );
       }
       
async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds + " Segundo(s)"
}


async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}
       
       async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}
       
       async function rmbg(buffer) {
        let form = new FormData
        form.append("size", "auto")
        form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
        let res = await axios({
          url: "https://api.remove.bg/v1.0/removebg",
          method: "POST",
          data: form,
          responseType: "arraybuffer",
          headers: {
            "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
            ...form.getHeaders()
          }
        })
        return res.data
        }
       
       if (antiToxic)
       if (bad.includes(command)) {
       if (m.text) {
       bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
       if (isAdmins) return m.reply(bvl)
       if (m.key.fromMe) return m.reply(bvl)
       if (isCreator) return m.reply(bvl)
       await conn.sendMessage(m.chat,
       {
       delete: {
       remoteJid: m.chat,
       fromMe: false,
       id: m.key.id,
       participant: m.key.participant
       }
       })
       await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       conn.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
        }
        
        const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
       
       //FAKE
       const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": pp_bot},"title": footer_text, "description": `${namabot}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": footer_text, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
       const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': footer_text, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6289512545999:6289512545999\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}} 
       
        
       switch (command) {
        case 'jadibot': {
        if (m.isGroup) return reply(mess.mprivate)
        if (!isPremium) return reply(mess.prem)
        jadibot(conn, m, from)
        }
        break
        case 'jadibotlist': 
        case 'listjadibot':
        try {
        let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
        te = "*FauziBot List*\n\n"
        for (let i of user){
        y = await conn.decodeJid(i.id)
        te += " × User : @" + y.split("@")[0] + "\n"
        te += " × Name : " + i.name + "\n\n"
        }
        conn.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
        } catch (err) {
        reply(`There are no users who have fauzi the bot yet`)
        }
        break
        case 'shutdown':
        if (!isCreator) return reply(mess.owner)
        reply(`Ba bye...`)
        await sleep(3000)
        process.exit()
        break
        
       case 'runtime': {
       reply('Bot Active during ' + runtime(process.uptime()))
       }
       break
       
       case 'totalfitur': {
       reply(`Misaki Memiliki *${totalFitur()}* Fitur`)
       }
       break
       
       case 'test':
       let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
       conn.sendMessage(from, { react: { text: emot, key: m.key } }),
       await conn.sendMessage(from, { text: `bot siap digunakan`}, { quoted: ftoko })	
       break
       
       case 'req': case 'request': {
       if (!text) return reply(`Example : ${prefix + command} Fitur Min`)
       let ownernya = global.owner + '@s.whatsapp.net'
       let me = m.sender
       let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
       let ments = [ownernya, me]
       await conn.sendMessage(ownernya, { text: pjtxt, mentions: parseMention(pjtxt)}, {quoted: ftoko})
       let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
       await conn.sendMessage(m.chat, { text: akhji, mentions: parseMention(akhji)}, { quoted: m })
       }
       break
       
       case 'getcase':
       if (!q) return reply('masukan query')
       if (!isCreator) return reply(mess.owner)
       const getCase = (cases) => {
       return "case"+`'${cases}'`+fs.readFileSync("src/misaki.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
       }
       reply(`${getCase(q)}`)
       break
       
       case 'join': {
       if (!text) return reply(`nyari case apa?`)
       if (!isCreator) return reply(mess.owner)
       if (!text) return reply(`Contoh ${prefix+command} linkgc`)
       if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
       let result = args[0].split('https://chat.whatsapp.com/')[1]
       await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       }
       break
       
       case 'leavegc': {
       if (!isCreator) return reply(mess.owner)
       await conn.groupLeave(m.chat).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
       }
       break
       
       case 'block': {
	   if (!isCreator) return reply(mess.owner)
	   let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'block').then((res) => reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	   }
	   break
	   
	   case 'listgc': {
	   if (!isCreator) return reply(mess.owner)
	   let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
	   let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
	   tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
	   for (let e of anu) {
	   let metadata = await conn.groupMetadata(e)
	   tekslistgc += `${s1}\n${s2}📛 *Nama :* ${metadata.subject}\n`
	   tekslistgc += `${s2} 👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
	   tekslistgc += `${s2} 🌱 *ID :* ${metadata.id}\n`
	   tekslistgc += `${s2} ⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
	   tekslistgc += `${s2} 👥 *Member :* ${metadata.participants.length}\n`
	   tekslistgc += `${s3}\n\n`
	   }
	   reply(tekslistgc)
	   }
       break
        
       case 'unblock': {
    	if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock').then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
    	}
    	break
        
       case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
    	const lisben = "Total Block: " + banUser.length
    	reply(lisben)
    	}
    	break
       
       case 'addprem':
        if (!isCreator) return reply(mess.owner)
        if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
        prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
        let ceknya = await conn.onWhatsApp(prrkek)
        if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
        _prem.push(prrkek)
        fs.writeFileSync('./src/database/premium.json', JSON.stringify(_prem))
        reply(`The Number ${prrkek} Has Been Premium!`)
        break
        case 'delprem':
        if (!isCreator) return reply(mess.owner)
        if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
        ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
        unp = _prem.indexOf(ya)
        _prem.splice(unp, 1)
        fs.writeFileSync('./src/database/premium.json', JSON.stringify(_prem))
        reply(`The Number ${ya} Has Been Removed Premium!`)
        break
       
       case 'listpremium': case 'listprem':
        teks = `${s1} *Premium List*`
        for (let Misaki of _prem) {
        teks += `\n${s2} ${Misaki.split("@")[0]}`
        }
        teks += `\n${s3}\n *Total : ${_prem.length}*`
        let aha = teks.trim()
        conn.sendMessage(m.chat, { text: teks.trim(), mentions: parseMention(aha)}, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": _prem } })
        break
       
       case  'clearsesi':{
        if (!m.key.fromMe && !isCreator) return reply(mess.owner)
        fs.readdir("./src/database/session", async function (err, files) {
        if (err) {
        console.log('Unable to scan directory: ' + err);
        return reply('Unable to scan directory: ' + err);
        } 
        let filteredArray = await files.filter(item => item.startsWith("pre-key") || 
        item.startsWith("sender-key") || item.startsWith("session-")
           )
        console.log(filteredArray.length); 
        let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
        if(filteredArray.length == 0) return reply(teks)     
        reply(teks) 
        await sleep(2000)
        reply("Menghapus file sampah...")
        await filteredArray.forEach(function (file) {
        fs.unlinkSync(`./src/database/session/${file}`)
        });
        await sleep(2000)
        reply("Berhasil menghapus semua sampah di folder session")     
        });
        
        }
        break
        
       case 'reg':
       case 'regist':
       case 'daftar':
       case 'register': {
       const { createHash } = require('crypto')
       let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
          let user = global.db.data.users[m.sender]
          if (user.registered === true) return reply(`Anda sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SN|SERIAL NUMBER>`)
          if (!Reg.test(text)) return reply(`Format salah\n*${prefix}daftar nama.umur*`)
          let [_, name, splitter, age] = text.match(Reg)
          if (!name) return reply('Nama tidak boleh kosong (Alphanumeric)')
          if (!age) return reply('Umur tidak boleh kosong (Angka)')
          age = parseInt(age)
          if (age > 120) return reply('Umur terlalu tua 😂')
          if (age < 5) return reply('Bayi bisa ngetik sesuai format bjir ._.')
          user.name = name.trim()
          user.age = age
          user.regTime = + new Date
          user.registered = true
          let sn = createHash('md5').update(m.sender).digest('hex')
          reply(`Daftar berhasil!\n${s1} *INFO*\n${s2} Nama: ${name}\n${s2} Umur: ${age} tahun\n${s3}\nSerial Number: \n${sn}`.trim())
       }
       break
       
       case 'unreg': {
       const { createHash } = require('crypto')
       if (!args[0]) return reply('Masukan Serial Nomor, Kalau Gatau Ketik .ceksn')
       let user = global.db.data.users[m.sender]
       let sn = createHash('md5').update(m.sender).digest('hex')
       if (args[0] !== sn) return reply('Serial Nomor Salah')
       user.registered = false
       m.reply('```Sukses Unreg !```') 
       }
       break
       
       case 'balasreq': {
        if (m.isGroup) return reply(mess.mprivate)
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        var mon = args.join(' ')
        var m1 = mon.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        var m2 = mon.split("|")[1]
        var m3 = mon.split("|")[2]
        let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: pp_bot}}}
        let mq1 = m1 + '@s.whatsapp.net'
        let kawk = ('Ciee ada yang ngirim pesan nihh\n© FauziDevID')
        let ownernya = global.owner + '@s.whatsapp.net'
        let me = m.sender
        let ments = [mq1, ownernya, me]
        let ivg = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`
        let pjtxt = `Hai kak ada Balasan Dari Owner nih\nRequest:${m2} \nBalasan: ${m3}\n\n© ${namaowner}`
        await conn.sendMessage(m1,{ text: pjtxt, contextInfo: { externalAdReply: {
        showAdAttribution: true,
        title: namabot,
        thumbnailUrl: ``,
        thumbnail: pp_bot,
        mediaType: 1,
        sourceUrl: gc
        }}},{quoted:kafloc})
        let akhji = `Pesan Telah Terkirim\nDari @${me.split("@")[0]}\nKe @${m1.split('@')[0]}`
        await conn.sendMessage(from, { mentions: parseMention(akhji), text: akhji})
       }
       break
        
       case 'owner':
       case 'creator': {
       conn.sendContact(m.chat, global.owner, m)}
       break
        
       case 'help':
       case 'menu': {
       conn.sendMessage(from, { mentions: [sender], text: menu( tanggal, jam, runtime, prefix, pushname, sender, totalFitur, s1, s2, s3, s4, s5, conn, _user, isPremium ) }, { quoted: fkontak })
       }
       break
       
       case 'sc':
       case 'esceh':
       case 'script':
       case 'soucecode': {
       let textnya = `Hai kak *( @${sender.split("@")[0]} )* ${namabot} Menggunakan Base Dari:\n*https://github.com/oziispedzz/Misaki*\n\n*「 PEMBUAT BASE 」*\n*_FauziDev_*`
       conn.sendMessage(from, { text: textnya, contextInfo:{
       mentionedJid: [sender],
       externalAdReply:{
       title: namaowner,
       body: namabot,
       thumbnail: fs.readFileSync('./src/media/reply.jpeg'),
       mediaType: 1,
       renderLargerThumbnail: true,
       sourceUrl: gc
       }}}, { quoted: m})
       let esceh = fs.readFileSync('./src/media/esce.jpg')
       let encmedia = await conn.sendImageAsSticker(m.chat, esceh, m, { packname: global.packname, author: global.author })
	   await fs.unlinkSync(encmedia)
       }
       break
       
       //Case Ga Berpaedah
       case 'misaki':
       case 'bot':
       case 'fauzi': {
        conn.sendMessage(from, { mentions: [sender], text: `@${sender.split("@")[0]} Ada apa kak manggil ${command}`
       }, { quoted: m })
       }
       break
       
       case 'cekpacar': {
       let me = sender 
       let user = m.mentionedJid[0]
       let orang = "Orang yang kamu tag"
       
       if (global.db.data.users[user].pasangan == "") {
       let no = `*${orang} Tidak memiliki pasangan*\n\n*Ketik .Tembak @user untuk menembak seseorang*\n*_Semoga ga nt:v_*`
       conn.sendMessage(from, {text: no, mentions: parseMention(no) }, { quoted:m })
       } else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
       let ditolak = `*${orang} sedang digantung oleh @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak*\n\n*Ketik .ikhlasin untuk menghapus nama dia dari hatimu*`
       conn.sendMessage(from, {text: ditolak, mentions: parseMention(ditolak) }, { quoted:m })
       } else {
       let udhada = `*${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} 🥳🥳*`
       conn.sendMessage(from, {text: udhada, mentions: parseMention(udhada) }, { quoted:m })
       if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
       return m.reply("*Pacar/gebetan target tidak terdaftar di Misaki bot.*")
       }
       if (typeof global.db.data.users[user] == "undefined") {
       reply(`orang yang kamu tag tidak terdaftar di database`)
       }
       }
       }
       break
       
       case 'tembak': {
       //if (!m.mentionJid) return reply(`tag seseorang`)
       var tag = m.mentionedJid[0];
       if (global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != tag ) {
             var pacar = global.db.data.users[user].pasangan;
      if (global.db.data.users[pacar].pasangan == user) {
       let satu = `Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split("@")[0]}\n\nSilahkan putus dulu ${prefix}putus @user untuk menembak @${user.split("@")[0]}\n\nsetia dong!`
       conn.sendMessage(from, { text: satu, mentions: parseMention(satu) }, { quoted: m })
       } else if (global.db.data.users[user].pasangan != "") {
      var pacar = global.db.data.users[user].pasangan; 
      if (global.db.data.users[pacar].pasangan == tag) 
      return 
       conn.sendMessage(from, { text: `Tau sopan santun dikit teman\n@${
            tag.split("@")[0]
          } sudah berpacaran dengan @${
            pacar.split("@")[0]
          }\n\nSilahkan cari pasangan lain aja!`, mentions: parseMention(text) }, { quoted: m })
       } else {
       global.db.data.users[m.sender].pasangan = tag; 
       let dua = `Kamu baru saja mengajak @${tag.split("@")[0]} berpacaran\n\nSilahkan menunggu jawabannya saja ya!\nKetik ${prefix}terima @user atau ${prefix}tolak @user`
        conn.sendMessage(from, { text: dua, mentions: parseMention(dua) }, { quoted: m })
       }
       } else if (global.db.data.users[tag].pasangan == m.sender) {
      global.db.data.users[m.sender].pasangan = tag;
      let tiga = `Selamat anda resmi berpacaran dengan @${tag.split("@")[0]}\n\nSemoga langgeng dan bahagia selalu`
      conn.sendMessage(from, { text: tiga, mentions: parseMention(tiga)}, { quoted: m })
       } 
       }
       break
       
/*case 'terima': {
    if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  const format = (num) => {
    const n = String(num),
      p = n.indexOf(".");
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
      p < 0 || i < p ? `${m},` : m
    );
  };

  if (!text && !m.quoted)
    return conn.reply(m.chat, `Berikan nomor, tag atau reply chat target`, m);
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if (isNaN(number)) return conn.reply(m.chat, `Nomor tidak valid!`, m);
  if (number.length > 15) return conn.reply(m.chat, `Format tidak valid!`, m);
  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    let participants = m.isGroup ? groupMetadata.participants : [];
    let users = m.isGroup ? participants.find((u) => u.jid == user) : {};
    if (!user)
      return conn.reply(
        m.chat,
        `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini`,
        m
      );
    if (user === m.sender)
      return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri`, m);
    //if (user === conn.user.jid)
    //return conn.reply(m.chat, `Tidak bisa berpacaran dengan bot`, m);

    if (typeof global.db.data.users[user] == "undefined")
      return m.reply("Tidak terdaftar di database");

    if (
      global.db.data.users[m.sender].pasangan != "" &&
      global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan ==
        m.sender &&
      global.db.data.users[m.sender].pasangan != user
    ) {
      var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
      global.db.data.users[m.sender].exp -= denda;
      conn.reply(
        m.chat,
        `Kamu sudah berpacaran dengan @${
          global.db.data.users[m.sender].pasangan.split("@")[0]
        }\n\nSilahkan putus dulu ${usedPrefix}putus @user untuk menembak @${
          user.split("@")[0]
        }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
        m,
        {
          contextInfo: {
            mentionedJid: [user, global.db.data.users[m.sender].pasangan],
          },
        }
      );
    } else if (global.db.data.users[user].pasangan != "") {
      var pacar = global.db.data.users[user].pasangan;
      if (global.db.data.users[pacar].pasangan == user) {
        var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
        global.db.data.users[m.sender].exp -= denda;
        if (
          m.sender == pacar &&
          global.db.data.users[m.sender].pasangan == user
        )
          return conn.reply(
            m.chat,
            `Kamu sudah berpacaran dengan @${
              beb.split("@")[0]
            }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
            m,
            {
              contextInfo: {
                mentionedJid: [beb],
              },
            }
          );
        conn.reply(
          m.chat,
          `Tau sopan santun dikit teman\n@${
            user.split("@")[0]
          } sudah berpacaran dengan @${
            pacar.split("@")[0]
          }\n\nSilahkan cari pasangan lain aja!\ndenda : ${format(
            denda
          )} (10%)*`,
          m,
          {
            contextInfo: {
              mentionedJid: [user, pacar],
            },
          }
        );
      } else {
        global.db.data.users[m.sender].pasangan = user;
        conn.reply(
          m.chat,
          `Kamu baru saja mengajak @${
            user.split("@")[0]
          } berpacaran\n\nSilahkan menunggu jawabannya saja ya!\nKetik ${usedPrefix}terima @user atau ${usedPrefix}tolak @user`,
          m,
          {
            contextInfo: {
              mentionedJid: [user],
            },
          }
        );
      }
    } else if (global.db.data.users[user].pasangan == m.sender) {
      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Selamat anda resmi berpacaran dengan @${
          user.split("@")[0]
        }\n\nSemoga langgeng dan bahagia selalu `,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    } else {
      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Kamu baru saja mengajak @${
          user.split("@")[0]
        } berpacaran\n\nSilahkan menunggu jawabannya saja ya!\nKetik ${usedPrefix}terima @user atau ${usedPrefix}tolak @user`,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    }
  }
} 
break */
      
       //bank
       case 'nabung': {
       if (!text) return reply(`Example:\n${prefix +command} 2`)
       const xpperlimit = 1
       let user = global.db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].balance / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  //if (user.atm == 0) return m.reply('Kamu Belum Punya ATM, Bikin Dulu Sana\nCaranya Ketik .bikin atm')
  if (user.bank > user.fullatm) return m.reply('Uang Dibank Kamu Sudah Penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnmu Udah Terlalu Banyak Di Bank')
  if (global.db.data.users[m.sender].balance >= xpperlimit * count) {
    global.db.data.users[m.sender].balance -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    reply(`Sukses Menabung Uang Sebesar ${count}`)
  } else reply(`Uang Kamu Tidak Mencukupi Untuk Menabung Uang Sebesar ${count}`)
       }
       break
       
       case 'bank': {
       let user = global.db.data.users[m.sender]
       const caption = `
${s1} *B A N K  U S E R* 
${s2} *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
${s2} *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'Tidak Punya'}
${s2} *Bank:* $${user.bank}
${s2} *Money:* $${user.balance} 
${s2} *Status:* ${isPremium ? 'Premium' : 'Free'}
${s2} *Registered:* ${user.registered ? 'Ya':'Tidak'}
${s3} 
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://en.pimg.jp/071/200/649/1/71200649.jpg' }, caption: caption }, {quoted: m }) 
       }
       break
       
       case 'bikinatm': {
       global.db.data.users[m.sender].atm += 1
       reply(`berhasil membuat atm`)
       }
       break
       
       case 'tarik': {
       if (!text) return reply(`mau narik berapa?`)
       const xpperlimit = 1
       let user = global.db.data.users[m.sender]
  let count = command.replace(/^tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Kamu Belum Punya ATM, Bikin Dulu Sana\nCaranya Ketik: .bikin atm')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].balance += count
    reply(`Sukses Menarik Uang Sebesar ${count}`)
  } else reply(`Uang Kamu Tidak Mencukupi Untuk Menarik ${count}`)
       }
       break
       
      
       case 'tf':
       case 'transfer': {
       if (!text) return reply(`Example : ${prefix + command} @pauji | nominal`)
       var mon = args.join(' ')
       var m1 = mon.split("|")[0].replace(/[^0-9]/g, '')
       var m2 = mon.split("|")[1]
       if (m2.includes('-')) return reply(`Jangan menggunakan -`)
       if (isNaN(m2)) return reply(`Harus berupa angka`) 
       let ane = Number(math(m2))
       if (db.data.users[sender].balance < ane) return reply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
       db.data.users[sender].balance -= ane
       db.data.users[m.mentionedJid[0]].balance += math(m2)
       let sukses = `berhasil mengirim ${m2} Balance Kepada ${m.mentionedJid[0]}`
       conn.sendMessage(from, { text: sukses }, { quoted: m })
       await conn.sendMessage(m.mentionedJid[0], { text: `Kamu mendapat kiriman ${m2} Balance`})
       }
       break
       
       case 'resetbalance': {
       if (!isCreator) return reply(mess.owner)
       let orang = Object.keys(global.db.data.users)
       let balanceUser = user.balance
       for (let jid of orang) global.db.data.users[jid].balance = 50
       reply('reseted balance')
       }
       break
       
       case 'buylimit':{
        if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $10`)
        if (q.includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(q)) return reply(`Harus berupa angka`)
        let ane = Number(math(q) * 10)
        if (db.data.users[sender].balance < ane) return reply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
        db.data.users[sender].balance -= ane
        db.data.users[sender].limit += math(q)
        reply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : $${db.data.users[sender].balance}\nSisa Limit : ${db.data.users[sender].limit}`)
        }
        break
        
        case 'buyglimit':{
        if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $10`)
        if (q.includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(q)) return reply(`Harus berupa angka`)
        let ane = Number(math(q) * 10)
        if (db.data.users[sender].balance < ane) return reply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
        db.data.users[sender].balance -= ane
        db.data.users[sender].glimit += math(q)
        reply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp${db.data.users[sender].balance}\nSisa Limit : ${db.data.users[sender].glimit}`)
        }
        break
        
        case 'addbalance':{
        if (!isCreator) return reply(mess.owner)
        if (!q) return reply(`mau add brp?`)
        if (q.includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(q)) return reply(`Harus berupa angka`)
        db.data.users[sender].balance += math(q)
        reply(mess.done)
        }
        break
      
        //owner
        case 'addsewa':
        case 'expired': {
        function msToDate(ms) {
        temp = ms
        days = Math.floor(ms / (24 * 60 * 60 * 1000));
        daysms = ms % (24 * 60 * 60 * 1000);
        hours = Math.floor((daysms) / (60 * 60 * 1000));
        hoursms = ms % (60 * 60 * 1000);
        minutes = Math.floor((hoursms) / (60 * 1000));
        minutesms = ms % (60 * 1000);
        sec = Math.floor((minutesms) / (1000));
        return days + " hari " + hours + " jam " + minutes + " menit";
        // +minutes+":"+sec;
        }
        

        
         if (!args[0] || isNaN(args[0])) return reply(`Masukkan angka mewakili jumlah hari !\n*Misal : ${prefix + command} 30*`)

        let who
        if (m.isGroup) who = args[1] ? args[1] : m.chat
        else who = args[1]
    
        var jumlahHari = 86400000 * args[0]
        var now = new Date() * 1
        if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
        else global.db.data.chats[who].expired = now + jumlahHari
        m.reply(`Berhasil menetapkan hari kadaluarsa untuk Grup ini selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[who].expired - now)}`)
        if (!m.isGroup) return 
        let chats = global.db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
        await m.reply(`It\'s time *${this.user.name}* to leave the group 👋`)
        setTimeout(() => {
        conn.groupLeave(m.chat)
        },10000)
        }
        }
        break
        
        
       case 'creategc': case 'creategroup': {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`Use ${prefix+command} groupname`)
        try {
        let cret = await conn.groupCreate(text, [])
        let response = await conn.groupInviteCode(cret.id)
        teks = `     「 Create Group 」
        
        ▸ Name : ${cret.subject}
        ▸ Owner : @${cret.owner.split("@")[0]}
        ▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
        
        https://chat.whatsapp.com/${response}
               `
       await conn.sendMessage(m.chat, { text:teks, mentions: await conn.parseMention(teks)}, {quoted:m})
        } catch (err) {
        reply(err)
        }
        }
        break
        
       case 'setppbot': case 'setbotpp': {
        if (!isCreator) return reply(mess.owner)
        if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
        if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
        var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
        if (args[0] == `/panjang`) {
        var { img } = await generateProfilePicture(medis)
        await conn.query({
        tag: 'iq',
        attrs: {
        to: botNumber,
        type:'set',
        xmlns: 'w:profile:picture'
        },
        content: [
        {
        tag: 'picture',
        attrs: { type: 'image' },
        content: img
        }
        ]
        })
        fs.unlinkSync(medis)
        reply(`Success`)
        } else {
        var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
        fs.unlinkSync(medis)
        reply(`Success`)
        }
        }
        break
        
       case 'restart': {
       if (!m.key.fromMe && !isCreator) return reply(mess.owner)
       reply('restartingg....')
       await reply()
       }
       break
       
       case 'public': {
       if (!m.key.fromMe && !isCreator) return reply(mess.owner)
       conn.public = true
       reply(`Successfully move to public mode`)
       }
       break
       
       case 'cekapi':
       case 'restapi': {
       if(!text) throw(`Masukan Apikeynya`)
       let f = await fetch(`https://api.betabotz.org/api/checkkey?apikey=${text}`)
       let p = await f.json()
       m.reply(util.format(p))
       }
       break
       
       case 'self': {
       if (!m.key.fromMe && !isCreator) return reply(mess.owner)
       conn.public = false
       reply(`Successfully move to self mode`)
       }
       break
       
       case 'tqto':
       case 'thanksto': {
       let p = `${s5} *Thanks To*\nFauziDev _Author_\nPenyedia Package\nAdmin Betabotz\nKaze _Pemilik Api_\nPemakai Base Misaki:)\nSubscriber`
       conn.sendMessage(from, { text: p }, { quoted: ftoko })
       }
       break
       
       case 'bcgc': 
       case 'bcgroup': {
       if (!isCreator) return reply(mess.owner)
       if (!text) return reply(`Which text?\n\nExample : ${prefix + command} FauziGanteng`)
       let getGroups = await conn.groupFetchAllParticipating()
       let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
       let anu = groups.map(v => v.id)
       m.reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
       for (let i of anu) {
       await sleep(1500)
       conn.sendMessage(i, {text: `${text}`}, {quoted: fkontak})
       }
       m.reply(`Successfully send broadcast to ${anu.length} group`)
       }
       break 
       
       case 'addbadword':{
       if (!isCreator) return reply(mess.owner)
       if (args.length < 1) return reply('Whats the word?')
       if (bad.includes(q)) return reply("The word is already in use")
       bad.push(q)
       fs.writeFileSync('./src/database/bad.json', JSON.stringify(bad))
       reply(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
       }
       break
       
       case 'delbadword':{
       if (!bad) return reply(mess.owner)
       if (args.length < 1) return reply('Enter the word')
       if (!bad.includes(q)) return reply("The word does not exist in the database")
       let wanu = bad.indexOf(q)
       bad.splice(wanu, 1)
       fs.writeFileSync('./src/database/bad.json', JSON.stringify(bad))
       reply(`Success deleting bad word ${q}`)
       }
       break
       
       case 'listbadword':{
       let teks = '「 *BadWord List* 」\n\n'
       for (let x of bad) {
       teks += `• ${x}\n`
       }
       teks += `\n*Totally there are : ${bad.length}*`
       reply(teks)
       }
       break
       
       //CHATGPT
       case 'openai': case 'ai': {
        if (!text) return reply(`👋🏻 Halo Kak, Butuh Bantuan?\nExample:  ${prefix + command} Misaki Cantik Banget Kan?`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        const ChatGPTRequest = async (text) => {
        
        const result = {
        success: false,
        data: "Aku gak tau",
        message: [],
        }
        
        return await axios({
        method: 'post',
        url: 'https://api.openai.com/v1/completions',
        data: {
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 1000,
        temperature: 0
        },
        headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Accept-Language": "in-ID",
        "Authorization": `Bearer ${keyai}`,
        },
        })
        .then((response) => {
        if (response.status == 200) {
        
        const { choices } = response.data;
        
        if (choices && choices.length) {
        result.success = true;
        result.data = choices[0].text;
        }
        
        } else {
        result.message = "Failed response";
        }
        
        return result;
        })
        .catch((error) => {
        result.message = "Error : " + error.message;
        return result;
        });
        }
        
        const response = await ChatGPTRequest(text)
        
        if (!response.success) {
        return reply(response.message);
        }
        
        return reply(response.data);
        }
        break
        
        case "nino": {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Nino&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'gptmiku': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'paimon': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Paimon&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'klee': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Klee&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'erza': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Erza&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'luffy': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Luffy&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break
        
        case 'robin': {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Robin&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl.message)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
        break 
        
       
       
       //group
       case 'group':
       case 'grup': {
       if (!m.isGroup) return m.reply(mgroup)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (!isBotAdmins) return m.reply(botadmin)
       if (args[0] === 'close') {
       await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`successfully closed the group`)).catch((err) => reply(err))
       } else if (args[0] === 'open') {
       await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`successfully opened the group`)).catch((err) => reply(err))
       } else {
       reply(`Example:\n${prefix + command} close`)
       }
       }
       break
       
       case 'kick': {
       if (!m.isGroup) return reply(mgroup)
       if (!isBotAdmins) return reply(botadmin)
       if (!isAdmins) return reply(mess.admin)
       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
       await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(mess.done)).catch((err) => reply('error'))
       }
       break
       
	   case 'add': {
	   if (!m.isGroup) return reply(mgroup)
       if (!isBotAdmins) return reply(botadmin)
       if (!isAdmins) return reply(mess.admin)
	   let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
       await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(mess.done)).catch((err) => reply("erorr"))
       }
       break
	   
	   case 'promote': {
	   if (!m.isGroup) return reply(mgroup)
       if (!isBotAdmins) return reply(botadmin)
       if (!isAdmins) return reply(mess.admin)
	   let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await conn.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(`Successfully`)).catch((err) => m.reply(err))
	   }
	   break
	   
	   case 'demote': {
	   if (!m.isGroup) return reply(mgroup)
       if (!isBotAdmins) return reply(botadmin)
       if (!isAdmins) return reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await conn.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(`Successfully`)).catch((err) => m.reply(err))
	   }
	   break 
	   
	   case "revoke": {
       if (!m.isGroup) return reply(mess.mgroup);
       if (!isCreator) return reply(mess.owner);
       if (isBotAdmins) return reply(botadmin);
       if (!isAdmins && !isCreator) return reply(mess.admin);
       try {
       let link = await conn.groupRevokeInvite(from);
       await reply("dahhh" +
       `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`
       );
       } catch (err) {
       reply(botadmin)
       }
       }
       break;
       
       case "h":
       case "hidetag": {
       if (!m.isGroup) return reply(mess.mgroup);
       if (!isAdmins && !isCreator) return reply(mess.admin);
       let tek = m.quoted ? quoted.text : text ? text : "";
       conn.sendMessage(
       m.chat, {
       text: tek,
       mentions: participants.map((a) => a.id),
       }, {quoted: ftoko}
       );
       }
       break;
       
       case "tagall":
       case "infoall": {
       if (!m.isGroup) return reply(mess.mgroup);
       if (!isAdmins && !isCreator)
       return reply(mess.admin);
       let tekss = `*Mention All*\n\n• *Message : ${
       q ? q : "empty"
       }*\n\n`;
       for (let mem of participants) {
       tekss += `@${mem.id.split("@")[0]}\n`;
       }
       tekss += `\n*${namabot}*`;
       conn.sendMessage(m.chat, { text: tekss, mentions: participants.map((a) => a.id), }, { quoted: fkontak }
       );
       }
       break;
       
       case 'getpp':
       case 'getprofile':
       case 'getppuser': {
       try {
       let who
       reply(mess.wait) 
       if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
       else who = m.quoted.sender ? m.quoted.sender : m.sender
       let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
       conn.sendFile(m.chat, pp, "nih bang.png", 'Here you go', m, {jpegThumbnail: await(await fetch(pp)).buffer()})
       } catch {
       let sender = m.sender
       let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
       conn.sendFile(m.chat, pp, 'ppsad.png', "Here you go", m, {jpegThumbnail: await(await fetch(pp)).buffer()})
       }
       }
       break
       
       case 'delete': case 'del': {
       if (!m.quoted) throw false
       let { chat, fromMe, id, isBaileys } = m.quoted
       if (!isBaileys) return reply('The message was not sent by a bot!')
       conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
       }
       break
       
       case 'setnamegroup': case 'setsubject': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (!isAdmins) return reply(mess.admin)
       if (!text) return reply('Text ?')
       await conn.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
       }
       break
          
       case 'setdesc': case 'setdesk': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (!isAdmins) return reply(mess.admin)
       if (!text) return reply('Text ?')
       await conn.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
       }
       break
       
       case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
        if (!m.isGroup) return reply(mess.mgroup)
        if (!isAdmins && !isCreator) return reply(mess.admin)
        if (!isBotAdmins) return reply(mess.botadmin)
        if (!quoted) return reply(`Where is the picture?`)
        if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
        if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
        var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
        if (args[0] == `/panjang`) {
        var { img } = await generateProfilePicture(mediz)
        await conn.query({
        tag: 'iq',
        attrs: {
        to: m.chat,
        type:'set',
        xmlns: 'w:profile:picture'
        },
        content: [
        {
        tag: 'picture',
        attrs: { type: 'image' },
        content: img
        }
        ]
        })
        fs.unlinkSync(mediz)
        reply(`Success`)
        } else {
        var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
        fs.unlinkSync(mediz)
        reply(`Success`)
        }
        }
        break

       case 'totag': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (!isAdmins) return reply(mess.admin)
       if (!m.quoted) return `Reply message with caption ${prefix + command}`
       conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id)})
       }
       break
       
       case 'getlink':
       case 'linkgroup':
       case 'linkgrup':
       case 'linkgc': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isAdmins && !isCreator) return reply(mess.admin)
       if (!isBotAdmins) return reply(mess.botadmin)
       let response = await conn.groupInviteCode(m.chat)
       conn.sendText(m.chat, `*INFO LINK GROUP*\n*Name :* ${groupMetadata.subject}\n*Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n*ID :* ${groupMetadata.id}\n*Link Chat :* https://chat.whatsapp.com/${response}\n*Member :* ${groupMetadata.participants.length}\n`, ftoko,  {
       detectLink: true
       })
       }
       break 
       
       case 'close':
       case 'closetime': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isAdmins && !isCreator) return reply(mess.admin)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (args[1] == 'second') {
       var timer = args[0] * `1000`
       } else if (args[1] == 'minute') {
       var timer = args[0] * `60000`
       } else if (args[1] == 'hour') {
       var timer = args[0] * `3600000`
       } else if (args[1] == 'day') {
       var timer = args[0] * `86400000`
       } else {
       return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
       }
       reply(`Close Time ${q} Starting from now`)
       setTimeout(() => {
       var nomor = m.participant
       const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
       conn.groupSettingUpdate(from, 'announcement')
       reply(close)
       }, timer)
       }
       break
       
       case 'open':
       case 'opentime': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isAdmins && !isCreator) return reply(mess.admin)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (args[1] == 'second') {
       var timer = args[0] * `1000`
       } else if (args[1] == 'minute') {
       var timer = args[0] * `60000`
       } else if (args[1] == 'hour') {
       var timer = args[0] * `3600000`
       } else if (args[1] == 'day') {
       var timer = args[0] * `86400000`
       } else {
       return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
       }
       reply(`Open time ${q} Startting from now`)
       setTimeout(() => {
       var nomor = m.participant
       const open = `*On time* Group Open By Admin\nNow all participants can send messages` 
       conn.groupSettingUpdate(from, 'not_announcement')
       reply(open)
       }, timer)
       }
       break
       
       case 'antitoxic': {
       if (!m.isGroup) return reply(mess.mgroup)
       if (!isBotAdmins) return reply(mess.botadmin)
       if (!isAdmins && !isCreator) return reply(mess.admin)
       if (args[0] === "on") {
       if (antiToxic) return reply('Already activated')
       toxic.push(from)
       fs.writeFileSync('./src/database/antitoxic.json', JSON.stringify(toxic))
       reply('Success in turning on antitoxic in this group')
       var groupe = await conn.groupMetadata(from)
       var members = groupe['participants']
       var mems = []
       members.map(async adm => {
       mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
       })
       conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
       } else if (args[0] === "off") {
       if (!antiToxic) return reply('Already deactivated')
       let off = toxic.indexOf(from)
       toxic.splice(off, 1)
       fs.writeFileSync('./src/database/antitoxic.json', JSON.stringify(toxic))
       reply('Success in turning off antitoxic in this group')
       } else {
       await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
       }
       }
       break
       
       //TOOLS
       case 'lirik':
	   case 'liriklagu': {
	   const fg = require('api-dylux')
       let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
       if (!teks) return reply(`Want to Find What Song Lyrics?`)
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       reply(mess.wait)
       try {
       let res = await fg.lyrics(text);
       let mes = `
• *${res.title}*
• *${res.artist}*      
${res.lyrics}`;
       conn.sendFile(m.chat, res.thumb, 'img.png', mes, m);
       } catch (e) {
       reply(mess.lv)
       } 
       }
       break
       
       case 'ss': case 'ssweb': {
        if (!q) return reply(`Example ${prefix+command} link`)
        reply(mess.wait)
        let krt = await scp1.ssweb(q)
        conn.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
        }
       break
       
       case 'git': case 'gitclone':
        if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/oziispedzz/Misaki`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, user, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
        break
        case 'spotify':
        if (!text) return reply(`Where is the link?`)
                const Spotify = require('../src/lib/spotify')
                const spotify = new Spotify(text)
                const info = await spotify.getInfo()
                if ((info).error) return reply(`The link you provided is not spotify link`)
                const { name, artists, album_name, release_date, cover_url } = info
                const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
                    ','
                )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
               const response = await conn.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
                const bufferpotify = await spotify.download()
                await conn.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        break
       
       case 'mediafire':
        if (!q) return reply(`Where is the link?`)
        if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('The link you sent is not a mediafire link or the link is invalid!')
        reply(mess.wait)
        let medfr = await scp1.mediafire(q)
        await conn.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : pp_bot, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
        break
        case 'google': {
        if (!q) return reply(`Example : ${prefix + command} ${botname}`)
        reply(mess.wait)
        let google = require('google-it')
        google({'query': text}).then(res => {
        let teks = `Google Search From : ${text}\n\n`
        for (let g of res) {
        teks += `⭔ *Title* : ${g.title}\n`
        teks += `⭔ *Description* : ${g.snippet}\n`
        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
        } 
        reply(teks)
        })
        }
        break
        
        case 'remini':
        case 'tohd':{
        try {
        const uploadImage = require('../src/lib/uploadImage.js')
        const q = m.quoted ? m.quoted : m;
        reply(mess.wait)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        if (/^image/.test(mime)) {
        const img = await q.download();
        const out = await uploadImage(img);
        const api = await fetch(`https://api.betabotz.org/api/tools/remini?url=${out}&apikey=${apikey}`);
         const image = await api.json();
         const { url } = image 
         conn.sendFile(m.chat, url, null, `here you go`, m);
         } else {
         m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim.`);
         }
         } catch (e) {
         console.error(e);
         m.reply(`Identifikasi gagal. Silakan coba lagi.`);
         }
         }
         break
       
       case 'nobg':
       case 'removebg': {
       try {
       const q = m.quoted ? m.quoted : m;
       if (/^image/.test(mime)) {
     m.reply(mess.wait)
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(`https://api.betabotz.org/api/tools/removebg?url=${out}&apikey=${apikey}`);
       const image = await api.json();
       const url = image.url.result
       conn.sendFile(m.chat, url, null, `Here you go`, m);
       } else {
         m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim.`);
        }
      } catch (e) {
        console.error(e);
       m.reply(`Identifikasi gagal. Silakan coba lagi.`);
       }
       }
       break
       
       case 'ttp': {
       if (!text) return reply(`Masukan Textnya`)
       reply(mess.wait)
       let api = await fetch(`https://api.betabotz.org/api/maker/ttp?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${apikey}`)
       conn.sendImageAsSticker(m.chat, api, m, { packname: global.packname, author: global.author })
      // conn.sendMessage(from, {image: api, caption: `Here you go`}, {quoted:m})
       }
       break
       
       case 'text2img':
       case 'txt2img':
       case 'aiimg': {
		if (!text) return reply(`Example: ${prefix + command} owl`)
		reply(mess.wait)
		let buffer = await fetch(`https://api.betabotz.org/api/maker/text2img?text=${encodeURIComponent(text.substring(0, 151))}&apikey=${apikey}`)
		conn.sendMessage(from, { image: buffer, caption:`Here you go`}, { quoted:m })
		//conn.sendFile(m.chat, buffer, null, `Here you go`, m)
		}
		break 
       
        case 'stikernobg':
        case 'snobg': {
        if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
	    reply(mess.wait)
        if (/image/.test(mime)) {
        let media = await conn.downloadAndSaveMediaMessage(quoted)
        let encmedia = await conn.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
        } else {
        reply(`Send/Reply Images With Captions ${prefix+command}`)
        }
        }
        break
        
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('../src/lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('../src/lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('../src/lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
           
            case 'toqr':{
          if (!q) return reply(' Please include link or text!')
           const QrCode = require('qrcode-reader')
           const qrcode = require('qrcode')
           let qyuer = await qrcode.toDataURL(q, { scale: 35 })
           let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
           let buff = getRandom('.jpg')
           await fs.writeFileSync('./'+buff, data)
           let medi = fs.readFileSync('./' + buff)
          await conn.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
           setTimeout(() => { fs.unlinkSync(buff) }, 10000)
          }
          break
       
       case "s":
       case "sticker":
       case 'stiker':
       case 'swm':
       case 'take':
       case 'wm': {
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       if (!quoted) return reply('mana?')
       if (quoted.isAnimated) {
       let media = await conn.downloadAndSaveMediaMessage(quoted)
       let webpToMp4 = await webp2mp4File(media)
       let encmedia = await conn.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
       packname: text.split('|')[0] ? text.split('|')[0] : pushname,
       author: text.split('|')[1] ? text.split('|')[1] : ''
       })
       await fs.unlinkSync(encmedia)
       } else if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
       packname: text.split('|')[0] ? text.split('|')[0] : pushname,
       author: text.split('|')[1] ? text.split('|')[1] : ''
       })
       await fs.unlinkSync(encmedia)
       } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
       let media = await quoted.download()
       let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
       packname: text.split('|')[0] ? text.split('|')[0] : pushname,
       author: text.split('|')[1] ? text.split('|')[1] : ''
       })
       await fs.unlinkSync(encmedia)
       } else {
       reply('Reply Photo Or Video You Want to Be Used as a Sticker')
       }
       }
       break
       
       case 'emojimix': {
	   let [emoji1, emoji2] = text.split`+`
    	if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
        let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
       
       case 'smeme': {
	   let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`
	   if (!/image/.test(mime)) return m.reply(respond)
       if (!text) return m.reply(respond)
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       m.reply(mess.wait)
       atas = text.split('|')[0] ? text.split('|')[0] : '-'
       bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	   let dwnld = await conn.downloadAndSaveMediaMessage(quoted)
	   let connCans = await TelegraPh(dwnld)
	   let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${connCans}`
	   let Fauzi = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	   await fs.unlinkSync(Fauzi)
       }
	   break
	  
       case 'qc': {
       const { quote } = require('../src/lib/quote.js')
       if (!q) return reply('Enter text')
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       let ppnyauser = await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
       const rest = await quote(q, pushname, ppnyauser)
       reply(mess.wait)
       await conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
       }
       break
            
       case 'qcimg': {
       const { quote } = require('../src/lib/quote.js')
       if (!q) return reply('Text Input')
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       let ppnyauser = await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
       const rest = await quote(q, pushname, ppnyauser)
       reply(mess.wait)
       //conn.sendMessage(m.chat, { image: { url: rest.result }, caption: `Done?`}, {quoted: m})
       await conn.sendFile(m.chat, rest.result, 'img.jpg', `Don't forget to donate to support me`, ftoko)
       }
       break
	   
	   case 'toonce': case 'toviewonce': {
        if (!quoted) return reply(`Reply Image/Video`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        if (/image/.test(mime)) {
        anuan = await conn.downloadAndSaveMediaMessage(quoted)
        conn.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
        conn.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
        } else { 
        reply(`Reply Image/Video`)
        }
        }
        break
	   
	   //DOWNLOADER
       case 'ytmp4': case 'ytvideo': {
       if (args.length == 0) return reply('Enter Title / Link From YouTube!')
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       reply(mess.wait)
       await axios.get(`https://api.azz.biz.id/api/play?q=${args[0]}&key=global`).then(({ data}) => {
       conn.sendMessage(from, { video: { url: data.mp4 }, caption:`here you go`}, {quoted: m}).catch(console.error)
       })
       }
       break
        
	   
        case 'search':
        case 'yts': case 'ytsearch': {
        if (!text) return reply(`Example : ${prefix + command} story wa anime`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
	    reply(mess.wait)
        let yts = require("yt-search")
        let search = await yts(text)
        let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
        let no = 1
        for (let i of search.all) {
        teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
        conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
        break
        
      
	   
	   case 'play':
	   case 'ytmp3':
	   case 'song': {
       if (!text) return reply('Enter Title / Link From YouTube!')
       relly(mess.wait)
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       reply(mess.wait) 
       try {
       var search = await youtube(text);
       var convert = search.videos[0];
       if (!convert) return reply('Video/Audio not found')
       if (convert.seconds >= 3600) {
       return reply('Video is longer than 1 hour!');
       } else {
       var audioUrl
       try {
       audioUrl = `https://aemt.me/downloadAudio?URL=${convert.url}&videoName=ytdl`
       } catch (e) {
       audioUrl = `https://yt.tioo.eu.org/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
       }
       var build = await fetch(convert.image)
       var buffer = await build.buffer()
       var image = await uploadImage(buffer)
       var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail: ${image}`;
       var pesan = conn.relayMessage(m.chat, { extendedTextMessage:{ text: caption, contextInfo: { externalAdReply: { title: "Powered by", mediaType: 1, previewType: 0, renderLargerThumbnail: true,thumbnailUrl: image, sourceUrl: `${convert.url}` }}, mentions: [m.sender]}}, {})
       conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', }, { quoted: fkontak });
       }
       } catch (e) {
       reply(`*Error:* ` + e);
       } 
       }
       break
	   
	   case 'tiktoknowm':
	   case 'ttmp4':
	   case 'tikokmp4':
	   case 'ttdl':
	   case 'tiktok':{ 
       if (!text) return reply( `Example : ${prefix + command} link`)
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
       reply(mess.wait)
       require('../src/lib/tiktok').Tiktok(q).then( data => {
       conn.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
       })
       }
       break
       
       case 'ttmp3':
       case 'tiktokmp3':
       case 'tiktokaudio':{
       if (!text) return reply( `Example : ${prefix + command} link`)
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
       if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
       reply(mess.wait)
       require('../src/lib/tiktok').Tiktok(q).then( data => {
       conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m }
       )})
       }
        break 
       
       //GAME
       case 'ttc': case 'ttt': case 'tictactoe': {
       let TicTacToe = require("../src/lib/tictactoe")
       this.game = this.game ? this.game : {}
       if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('Kamu masih didalam game')
       let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
       if (!isPremium && global.db.data.users[m.sender].glimit < 1) return reply(messs.endglimit)
	   db.data.users[m.sender].glimit -= 1 // -1 limit
       if (room) {
       m.reply('Partner ditemukan!')
       room.o = m.chat
       room.game.playerO = m.sender
       room.state = 'PLAYING'
       let arr = room.game.render().map(v => {
       return {
       X: '❌',
       O: '⭕',
       1: '1️⃣',
       2: '2️⃣',
       3: '3️⃣',
       4: '4️⃣',
       5: '5️⃣',
       6: '6️⃣',
       7: '7️⃣',
       8: '8️⃣',
       9: '9️⃣',
       }[v]
       })
       let str = `Room ID: ${room.id}

       ${arr.slice(0, 3).join('')}
       ${arr.slice(3, 6).join('')}
       ${arr.slice(6).join('')}

       Menunggu @${room.game.currentTurn.split('@')[0]}

       Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
       if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
       await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
       } else {
       room = {
       id: 'tictactoe-' + (+new Date),
       x: m.chat,
       o: '',
       game: new TicTacToe(m.sender, 'o'),
       state: 'WAITING'
       }
       if (text) room.name = text
       m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
       this.game[room.id] = room
       }
       }
       break
       
       case 'delttc': case 'delttt': {
       let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
       if (!roomnya) return reply(`Kamu sedang tidak berada di room tictactoe !`)
       delete this.game[roomnya.id]
       m.reply(`Berhasil delete session room tictactoe !`)
       }
       break
       
       case 'slot': {
       let reg = 40
       let fa = `
Berapa banyak yang ingin Anda pertaruhkan? 

📌 Contoh :
*${prefix + command}* 20`.trim()
    if (!args[0]) return reply(fa)
    if (isNaN(args[0])) return reply(fa)
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 10000
    if (new Date - users.lastslot < 10000) return reply(`⏳ Tunggu *${msToTime(time - new Date())}* Untuk menggunakan lagi`)
    if (apuesta < 10) return reply('✳️ Untuk menggunakan lagi')
    if (users.balance < apuesta) {
        return reply(`Anda tidak memiliki cukup *Saldo*`)
    }

    let emojis = ["🕊️", "🦀", "🦎"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `🎁 WON\n *+$${apuesta + apuesta}*`
        users.balance += apuesta + apuesta
    } else if (a == b || a == c || b == c) {
        end = `🔮 Anda hampir membuatnya terus mencoba :) \nAda *+$${reg}*`
        users.balance += reg
    } else {
        end = `😔 Hilang *-$${apuesta}*`
        users.balance -= apuesta
    }
    users.lastslot = new Date * 1
    return await m.reply(
        `
       🎰 ┃ *SLOTS* 
     ───────────
       ${x[0]} : ${y[0]} : ${z[0]}
       ${x[1]} : ${y[1]} : ${z[1]}
       ${x[2]} : ${y[2]} : ${z[2]}
     ───────────
        🎰┃🎰┃ 🎰
        
${end}`)
       }
       break
       
       case 'slot2': {
       if (!text) return reply('mau taruhan brp?')
       db.data.users[m.sender].balance -= `${text}`
       if (!isPremium && global.db.data.users[m.sender].glimit < 1) return reply(messs.endglimit)
	   db.data.users[m.sender].glimit -= 1 // -1 limit
       const somtoy = rslot[Math.floor(Math.random() * rslot.length)]
       let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
       let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
           // await conn.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
       await conn.sendMessage(from, { text: sloth }, { quoted: m})
       }
       break
       
       case 'suit': {
       let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${prefix}suit gunting\n\nkasih spasi!`
        if (!text) return reply(salah)
        var astro = Math.random()
    
        if (astro < 0.34) {
            astro = 'batu'
        } else if (astro > 0.34 && astro < 0.67) {
            astro = 'gunting'
        } else {
            astro = 'kertas'
        }
    
        //menentukan rules
        if (text == astro) {
            m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
        } else if (text == 'batu') {
            if (astro == 'gunting') {
                global.db.data.users[m.sender].balance += 100
                m.reply(`Kamu menang! +$100\nKamu: ${text}\nBot: ${astro}`)
            } else {
                m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
            }
        } else if (text == 'gunting') {
            if (astro == 'kertas') {
                global.db.data.users[m.sender].balance += 100
                m.reply(`Kamu menang! +$100\nKamu: ${text}\nBot: ${astro}`)
            } else {
                m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
            }
        } else if (text == 'kertas') {
            if (astro == 'batu') {
                global.db.data.users[m.sender].balance += 100
                m.reply(`Kamu menang! +$100\nKamu: ${text}\nBot: ${astro}`)
            } else {
                m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
            }
        } else {
            throw salah
        }
       }
       break
       
       case 'suitpvp': {
       this.suit = this.suit ? this.suit : {}
       let poin = 10
       let poin_lose = 10
       let timeout = 60000
       if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
       if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
       if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
       if (!isPremium && global.db.data.users[m.sender].glimit < 1) return reply(messs.endglimit)
	   db.data.users[m.sender].glimit -= 1 // -1 limit
       if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
       let id = 'suit_' + new Date() * 1
       let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
       this.suit[id] = {
       chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
       id: id,
       p: m.sender,
       p2: m.mentionedJid[0],
       status: 'wait',
       waktu: setTimeout(() => {
       if (this.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
       delete this.suit[id]
       }, 60000), poin, poin_lose, timeout
       }
       }
       break
       
        case 'leave':{
        if (m.isGroup && isCreator && command == "leave") return conn.groupLeave(from)
        if (m.isGroup) return reply("Only private chat")
        var rooms = Object.values(anon.anonymous).find(p => p.check(sender))
        if (!room) return reply("You are not in the room")
        reply("Bye...")
        var other = room.other(sender)
        delete anon.anonymous[room.id]
        if (other != "") conn.sendMessage(other, {
        text: "Bye..."
        })
        if (command == "leave") break;
        }
        
        case 'pushcontact': {
        if (!isCreator) return reply(mess.owner)
        if (!m.isGroup) return reply(`The feature works only in grup`)
        if (!text) return reply(`text?`)
        let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        reply(`Success in pushing the message to contacts`)
        for (let pler of mem) {
        conn.sendMessage(pler, { text: q})
        }  
        reply(`Done`)
        }
        break
        
        case 'friend':
        case 'searchfriend':{
        let teman = pickRandom(_user)
        setTimeout(() => {
        reply(mess.wait)
        }, 1000)
        setTimeout(() => {
        reply('Managed to Get One Person')
        }, 5000)
        setTimeout(() => {
        conn.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
        }, 9000)
        }
        break
        
        case 'report':
        case 'bug':{
        if (!text) return reply('Silahkan masukkan laporan')
        if (text.length > 300) return reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks!')
        const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
        m.reply(laporan, jid)
        m.reply(laporan, m.sender) // Mwehehehehe
        m.reply('✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!')
        }
        break
        
        case 'confes':
        case 'confess':
        case 'menfess':
        case 'menfes': {
        if (m.isGroup) return reply(mess.mprivate)
        if (!text) return reply(`Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`)
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(messs.endlimit)
	    db.data.users[m.sender].limit -= 1 // -1 limit
        var mon = args.join(' ')
        var m1 = mon.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        var m2 = mon.split("|")[1]
        var m3 = mon.split("|")[2]
        let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: pp_bot}}}
        let mq1 = m1 + '@s.whatsapp.net'
        let kawk = ('Ciee ada yang ngirim pesan nihh\n© FauziDevID')
        let ownernya = global.owner + '@s.whatsapp.net'
        let me = m.sender
        let ments = [mq1, ownernya, me]
        let ivg = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`
        let pjtxt = `Hai kak ada Menfess nih!!\n\n👤 Dari: ${m2}\n💌 Pesan: ${m3}\n\n© ${namaowner}`
        await conn.sendMessage(m1,{ text: pjtxt, contextInfo: { externalAdReply: {
        showAdAttribution: true,
        title: namabot,
        thumbnailUrl: ``,
        thumbnail: pp_bot,
        mediaType: 1,
        sourceUrl: gc
        }}},{quoted:kafloc})
        if ((m.text === 'BALAS' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.\nKetik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke target balas pesan.");
        let akhji = `Pesan Telah Terkirim\nDari @${me.split("@")[0]}\nKe @${m1.split('@')[0]}`
        await conn.sendMessage(from, { mentions: [m1], text: akhji})
        }
        break
 	    
 	   case 'afk': {
       let user = global.db.data.users[m.sender]
       user.afkTime = + new Date
       user.afkReason = text
       m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
       }
       break
       
       case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
conn_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: conn_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break 

case 'dare':
const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Fauzi through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Fauzidare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              conn.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ Fauzidare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Fauzi?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Fauzitruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              conn.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Fauzitruth }, {quoted:m})
              break
              
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPremium) return reply(mess.prem)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
        
        case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return reply(mess.mgroup)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.namabot}`,
"body": `${namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": pp_bot,
"sourceUrl": `${gc}`}}},
{ quoted: m})
}
break
case 'quotes': {
const quotefauzibot = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes =  `*${themeemoji} Quote:* ${quotefauzibot.data.quote.body}\n\n*${themeemoji} Author:* ${quotefauzibot.data.quote.author}`
       // let textquotes1 = await textquotes()
        //let result = await translate(textquotes1, { to: 'id', autoCorrect: true }).catch(_ => null) 
return reply(textquotes)
}
break


case 'style': case 'styletext': {
		let { styletext } = require('../src/lib/scraper')
		if (!text) return reply('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example : ${prefix+command} conn`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.done}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example : ${prefix+command} conn`) 
reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
conn.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.done}` }, { quoted: m })
}
break 
              
case 'tiktokgirl':
reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break

case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await conn.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return reply("What wallpaper are you looking for??")
		let { wallpaper } = require('../src/lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
reply(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await conn.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPremium) return reply(mess.prem)
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
conn.sendMessage(m.chat, { image: { url: yeha }, caption : mess.done }, { quoted: m })
}
break

case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
try {
ppuser = await conn.profilePictureUrl(sender, 'image')
}catch {
pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
					buff = await getBuffer(ppuser)
conn.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break

case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.mgroup)
if (!isPremium) return reply(mess.prem)
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
conn.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.mgroup)

                m.reply(mess.wait)
                const { hentai } = require('../src/lib/scraper.js')
                anu = await hentai.json()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return reply(mess.mgroup)

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return reply(mess.mgroup)

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return reply(mess.mgroup)
 
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return reply(mess.mgroup)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return m.reply(mess.mgroup)

m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return reply(mess.mgroup)
	 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return reply(mess.mgroup)
	
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return reply(mess.mgroup)
	
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return reply(mess.mgroup)
	
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return reply(mess.mgroup)

reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return reply(mess.mgroup)

reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync( './src/HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await conn.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return reply(mess.mgroup)

reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
conn.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case 'ojek':
case 'grab':
case 'gojek': {
let { MessageType } = require('@adiwajshing/baileys')
    let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = m.sender
    let user = global.db.data.users[m.sender]
    let buttons = [
{buttonId: '.inv', buttonText: {displayText: 'Inventory'}, type: 1}, 
]
const buttonMessage =  `\nSepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 `
    if (new Date - global.db.data.users[m.sender].lastngojek > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 100)
let rbrb5 = (randomaku5 * 120)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵


✔️ Mendapatkan orderan....
`

dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`

dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan....
`

dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  


➕ 💹Menerima gaji....
`

hsl = `
*—[ Hasil Ngojek ${name.vnmae || name.notify || name.name || ('+' + name.split(`@`)[0])} ]—*

 ➕ 💰 Uang = [ $${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1

➕  📥Total Order Sebelumnya : ${order}

${footer_text}
`



global.db.data.users[m.sender].balance += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari pelanggan.....')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendMessage(m.chat, { text: buttonMessage}, {quoted:m} )
}
break

 	   case 'limit':    
       case 'ceklimit':{
       let teks = `👤 *Name :* ${pushname}\n\n💳 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}\n💰 Saldo : *$${db.data.users[sender].balance}*\n🎮 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}\n\njika kamu ingin membeli limit langsung kirim balik perintah :\n.buylimit\n\nNote: Harga 1 limit = $10`
        
        conn.sendMessage(from, {text: teks}, {quoted: m})
        }
        break
 	   
       default:
       if ( isCmd && m.isGroup ) {
	    reply(`Command Belum Tersedia Silahkan *.req* agar owner segera menyediakan command Tersebut, *.Report* Jika ada bug`)
	   }
       if (budy.startsWith(">")) {
       if (!isCreator) return;
       try {
          let evaled = await eval(budy.slice(2));
             if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
                    await reply(evaled);
                } catch (err) {
                    await m.reply(util.format(err));
                }
            }
        }
    } catch (err) {
        console.log(err)
    }
}

/**
  * Created by FauziDevID
  * Contact me on WhatsApp wa.me/6289528652225 
  * Subscribe me on Youtube : https://youtube.com/@fauzijayawardana

SCRIPT ORI BUATAN FAUZII!!
*/