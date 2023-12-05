const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const moment = require('moment-timezone')

exports.menu = ( tanggal, jam, runtime, prefix, pushname, sender, totalFitur, s1, s2, s3, s4, s5, conn, _user, isPremium) => { return (
`Hi @${sender.split("@")[0]}

*INFO BOT*
${s5} Mode: ${conn.public ? 'public' : 'self'}
${s5} Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
${s5} Time: ${jam}
${s5} Runtime: ${runtime(process.uptime())}
${s5} Total User: 1${Object.keys(db.data.users).length}
${s5} Total Feature: ${totalFitur()} 

*INFO USER*
${s5} User: ${isPremium ? 'Premium' : 'Gratisan'}
${s5} Limit: ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
${s5} Balance: $${db.data.users[sender].balance}
${s5} Exp: +${db.data.users[sender].exp}
${s5} Register: ${registered? 'yes' : 'not'}

`+ readmore +`
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

${s1} *CHATGPT* ${s4}
${s2} ${prefix}ai 🅕 
${s2} ${prefix}nino 🅕 
${s2} ${prefix}gptmiku  🅕 
${s2} ${prefix}erza 🅕 
${s2} ${prefix}klee 🅕 
${s2} ${prefix}robin 🅕 
${s2} ${prefix}luffy 🅕 
${s2} ${prefix}paimon 🅕 
${s3}

${s1} *GAME* ${s4}
${s2} ${prefix}tictactoe 🅖
${s2} ${prefix}suitpvp 🅖
${s2} ${prefix}slot 🅕 
${s2} ${prefix}suit 
${s3}

${s1} *DOWNLOADER* ${s4}
${s2} ${prefix}play 🅕 
${s2} ${prefix}ttmp4 🅕 
${s2} ${prefix}ttmp3 🅕 
${s2} ${prefix}mediafire 🅕 
${s2} ${prefix}gitclone 🅕 
${s2} ${prefix}spotify 🅕 
${s2} ${prefix}ytmp3 🅕
${s2} ${prefix}ytmp4 🅕 
${s2} ${prefix}getpp 🅕
${s3}

${s1} *TOOLS* ${s4}
${s2} ${prefix}stiker 🅕 
${s2} ${prefix}smeme 🅕 
${s2} ${prefix}swm 🅕 
${s2} ${prefix}stikernobg 🅕 
${s2} ${prefix}qc 🅕 
${s2} ${prefix}qcimg 🅕 
${s2} ${prefix}emojimix 🅕 
${s2} ${prefix}google 🅕 
${s2} ${prefix}tomp3 🅕 
${s2} ${prefix}toptt 🅕 
${s2} ${prefix}toaud 🅕 
${s2} ${prefix}toqr 🅕 
${s2} ${prefix}remini 🅕 
${s2} ${prefix}text2img 🅕 
${s2} ${prefix}ttp 🅕 
${s3}

${s1} *GROUP* ${s4}
${s2} ${prefix}setppgroup 🅖
${s2} ${prefix}setnamegroup 🅖
${s2} ${prefix}setdesk 🅖
${s2} ${prefix}antitoxic 🅖
${s2} ${prefix}delete 🅖
${s2} ${prefix}add 🅖 
${s2} ${prefix}kick 🅖
${s2} ${prefix}promote 🅖
${s2} ${prefix}demote 🅖
${s2} ${prefix}group 🅖
${s2} ${prefix}opentime 🅖
${s2} ${prefix}closetime 🅖
${s2} ${prefix}revoke 🅖
${s2} ${prefix}hidetag 🅖
${s2} ${prefix}tagall 🅖
${s2} ${prefix}totag 🅖
${s2} ${prefix}getlink 🅖
${s3}

${s1} *RPG* ${s4}
${s2} ${prefix}transfer 🅕 
${s2} ${prefix}ceklimit 🅕 
${s2} ${prefix}buylimit 🅕 
${s2} ${prefix}buyglimit 🅕 
${s2} ${prefix}Nabung 🅕 
${s2} ${prefix}Bank 🅕 
${s2} ${prefix}tarik 🅕 
${s2} ${prefix}bikinatm 🅕 
${s2} ${prefix}gojek 🅕 
${s3}

${s1} *OTHER* ${s4}
${s2} ${prefix}listbadword  🅕 
${s2} ${prefix}menfes  
${s2} ${prefix}toonce 🅕 
${s2} ${prefix}searchfriend
${s2} ${prefix}afk 
${s2} ${prefix}lirik 
${s2} ${prefix}sound1-161 🅕 
${s2} ${prefix}listprem
${s2} ${prefix}jadibot 🅟 
${s2} ${prefix}tqto
${s3}

${s1} *OWNER* ${s4}
${s2} ${prefix}self 🅞
${s2} ${prefix}public 🅞
${s2} ${prefix}bcgc 🅞
${s2} ${prefix}addbadword 🅞
${s2} ${prefix}delbadword 🅞
${s2} ${prefix}addbalance 🅞
${s2} ${prefix}setppbot 🅞
${s2} ${prefix}getcase 🅞
${s2} ${prefix}addprem 🅞
${s2} ${prefix}delprem 🅞
${s2} ${prefix}creategc 🅞
${s2} ${prefix}block 🅞
${s2} ${prefix}unblock 🅞
${s3}

${s1} Random Video ${s4} 
${s2} ${prefix} tiktokgirl 🅟
${s2} ${prefix} tiktoknukthy 🅟
${s2} ${prefix} tiktokkayes 🅟
${s2} ${prefix} tiktokpanrika 🅟
${s2} ${prefix} tiktoknotnot 🅟
${s2} ${prefix} tiktokghea 🅟
${s2} ${prefix} tiktoksantuy 🅟
${s2} ${prefix} tiktokbocil 🅟
${s3}

${s1} Random Photo ${s4} 
${s2} ${prefix} aesthetic 🅟
${s2} ${prefix} coffee 🅟
${s2} ${prefix} wikimedia 🅟
${s2} ${prefix} wallpaper 🅟
${s2} ${prefix} art 🅟
${s2} ${prefix} bts 🅟
${s2} ${prefix} woof 🅕
${s2} ${prefix} meow 🅕
${s2} ${prefix} lizard 🅕
${s2} ${prefix} cosplay 🅟
${s2} ${prefix} hacker 🅟
${s2} ${prefix} cyber 🅟
${s2} ${prefix} gamewallpaper 🅟
${s2} ${prefix} islamic 🅟
${s2} ${prefix} jennie 🅟
${s2} ${prefix} jiso 🅟
${s2} ${prefix} satanic 🅟
${s2} ${prefix} justina 🅟
${s2} ${prefix} cartoon 🅟
${s2} ${prefix} pentol 🅟
${s2} ${prefix} cat 🅕
${s2} ${prefix} kpop 🅕
${s2} ${prefix} exo 🅟
${s2} ${prefix} lisa 🅟
${s2} ${prefix} space 🅟
${s2} ${prefix} car 🅟
${s2} ${prefix} technology 🅟
${s2} ${prefix} bike 🅟
${s2} ${prefix} shortquote 🅟
${s2} ${prefix} antiwork 🅕
${s2} ${prefix} hacking 🅕
${s2} ${prefix} boneka 🅕
${s2} ${prefix} rose 🅕
${s2} ${prefix} ryujin 🅕
${s2} ${prefix} ulzzangboy 🅕
${s2} ${prefix} ulzzanggirl 🅕
${s2} ${prefix} wallml 🅕
${s2} ${prefix} wallphone 🅕
${s2} ${prefix} mountain 🅟
${s2} ${prefix} goose 🅕
${s2} ${prefix} profilepic 🅕
${s2} ${prefix} couplepic 🅕
${s2} ${prefix} programming 🅟
${s2} ${prefix} pubg 🅕
${s2} ${prefix} blackpink 🅕
${s2} ${prefix} randomboy 🅕  
${s2} ${prefix} randomgirl 🅕
${s2} ${prefix} hijab 🅕  
${s2} ${prefix} chinese 🅕
${s2} ${prefix} indo 🅕
${s2} ${prefix} japanese 🅕
${s2} ${prefix} korean 🅕
${s2} ${prefix} malay 🅕
${s2} ${prefix} thai 🅕
${s2} ${prefix} vietnamese 🅕
${s3}

${s1} Anime ${s4} 
${s2} ${prefix} akira 🅟
${s2} ${prefix} akiyama 🅟
${s2} ${prefix} ana 🅟
${s2} ${prefix} asuna 🅟
${s2} ${prefix} ayuzawa 🅟
${s2} ${prefix} boruto 🅟
${s2} ${prefix} chiho 🅟
${s2} ${prefix} chitoge 🅟
${s2} ${prefix} cosplayloli 🅟
${s2} ${prefix} cosplaysagiri 🅟
${s2} ${prefix} deidara 🅟
${s2} ${prefix} doraemon 🅟
${s2} ${prefix} elaina 🅟
${s2} ${prefix} emilia 🅟
${s2} ${prefix} erza 🅟
${s2} ${prefix} gremory 🅟
${s2} ${prefix} hestia 🅟
${s2} ${prefix} hinata 🅟
${s2} ${prefix} husbu 🅟
${s2} ${prefix} inori 🅟
${s2} ${prefix} isuzu 🅟
${s2} ${prefix} itachi 🅟
${s2} ${prefix} itori 🅟
${s2} ${prefix} kaga 🅟
${s2} ${prefix} kagura 🅟
${s2} ${prefix} kakasih 🅟
${s2} ${prefix} kaori 🅟
${s2} ${prefix} keneki 🅟
${s2} ${prefix} kotori 🅟
${s2} ${prefix} kurumi 🅟
${s2} ${prefix} loli 🅟
${s2} ${prefix} madara 🅟
${s2} ${prefix} megumin 🅟
${s2} ${prefix} mikasa 🅟
${s2} ${prefix} mikey 🅟
${s2} ${prefix} miku 🅟
${s2} ${prefix} minato 🅟
${s2} ${prefix} naruto 🅟
${s2} ${prefix} neko 🅟
${s2} ${prefix} neko2 🅟
${s2} ${prefix} nekonime 🅟
${s2} ${prefix} nezuko 🅟
${s2} ${prefix} onepiece 🅟
${s2} ${prefix} pokemon 🅟
${s2} ${prefix} randomnime 🅟
${s2} ${prefix} randomnime2 🅟
${s2} ${prefix} rize 🅟
${s2} ${prefix} sagiri 🅟
${s2} ${prefix} sakura 🅟
${s2} ${prefix} sasuke 🅟
${s2} ${prefix} shina 🅟
${s2} ${prefix} shinka 🅟
${s2} ${prefix} shinomiya 🅟
${s2} ${prefix} shizuka 🅟
${s2} ${prefix} shota 🅟
${s2} ${prefix} tejina 🅟
${s2} ${prefix} toukachan 🅟
${s2} ${prefix} tsunade 🅟
${s2} ${prefix} waifu 🅟
${s2} ${prefix} animewall 🅟
${s2} ${prefix} yotsuba 🅟
${s2} ${prefix} yuki 🅟
${s2} ${prefix} yulibocil 🅟
${s2} ${prefix} yumeko 🅟
${s2} ${prefix} 8ball 🅕
${s2} ${prefix} tickle 🅕
${s2} ${prefix} gecg 🅕
${s2} ${prefix} feed 🅕
${s3}

${s1} PhotoOxy Maker ${s4}
${s2} ${prefix}shadow 🅟 
${s2} ${prefix}write 🅟 
${s2} ${prefix}romantic 🅟 
${s2} ${prefix}burnpaper 🅟
${s2} ${prefix}smoke 🅟 
${s2} ${prefix}narutobanner 🅟 
${s2} ${prefix}love 🅟 
${s2} ${prefix}undergrass 🅟
${s2} ${prefix}doublelove 🅟 
${s2} ${prefix}coffecup 🅟
${s2} ${prefix}underwaterocean 🅟
${s2} ${prefix}smokyneon 🅟
${s2} ${prefix}starstext 🅟
${s2} ${prefix}rainboweffect 🅟
${s2} ${prefix}balloontext 🅟
${s2} ${prefix}metalliceffect 🅟
${s2} ${prefix}embroiderytext 🅟
${s2} ${prefix}flamingtext 🅟
${s2} ${prefix}stonetext 🅟
${s2} ${prefix}writeart 🅟
${s2} ${prefix}summertext 🅟
${s2} ${prefix}wolfmetaltext 🅟
${s2} ${prefix}nature3dtext 🅟
${s2} ${prefix}rosestext 🅟
${s2} ${prefix}naturetypography 🅟
${s2} ${prefix}quotesunder 🅟
${s2} ${prefix}shinetext 🅟
${s3}

${s1} Ephoto360 Maker ${s4}
${s2} ${prefix}glitchtext 🅟
${s2} ${prefix}writetext 🅟
${s2} ${prefix}advancedglow 🅟
${s2} ${prefix}typographytext 🅟
${s2} ${prefix}pixelglitch 🅟
${s2} ${prefix}neonglitch 🅟
${s2} ${prefix}flagtext 🅟
${s2} ${prefix}flag3dtext 🅟
${s2} ${prefix}deletingtext 🅟
${s2} ${prefix}blackpinkstyle 🅟
${s2} ${prefix}glowingtext 🅟
${s2} ${prefix}underwatertext 🅟
${s2} ${prefix}logomaker 🅟
${s2} ${prefix}cartoonstyle 🅟
${s2} ${prefix}papercutstyle 🅟
${s2} ${prefix}watercolortext 🅟
${s2} ${prefix}effectclouds 🅟
${s2} ${prefix}blackpinklogo 🅟
${s2} ${prefix}gradienttext 🅟
${s2} ${prefix}summerbeach 🅟
${s2} ${prefix}luxurygold 🅟
${s2} ${prefix}multicoloredneon 🅟
${s2} ${prefix}sandsummer 🅟
${s2} ${prefix}galaxywallpaper 🅟
${s2} ${prefix}1917style 🅟
${s2} ${prefix}makingneon 🅟
${s2} ${prefix}royaltext 🅟
${s2} ${prefix}freecreate 🅟
${s2} ${prefix}galaxystyle 🅟
${s2} ${prefix}lighteffects 🅟
${s3}

${s1} Fun Menu ${s4}
${s2} ${prefix}define 🅕
${s2} ${prefix}truth 🅕
${s2} ${prefix}dare 🅕
${s2} ${prefix}couple 🅕
${s2} ${prefix}soulmate 🅕
${s2} ${prefix}stupidcheck 🅕
${s2} ${prefix}handsomecheck 🅕
${s2} ${prefix}uncleancheck 🅕
${s2} ${prefix}hotcheck 🅕
${s2} ${prefix}smartcheck 🅕
${s2} ${prefix}greatcheck 🅕
${s2} ${prefix}evilcheck 🅕
${s2} ${prefix}dogcheck 🅕
${s2} ${prefix}coolcheck 🅕
${s2} ${prefix}waifucheck 🅕
${s2} ${prefix}awesomecheck 🅕
${s2} ${prefix}gaycheck 🅕
${s2} ${prefix}cutecheck 🅕
${s2} ${prefix}lesbiancheck 🅕
${s2} ${prefix}hornycheck 🅕
${s2} ${prefix}prettycheck 🅕
${s2} ${prefix}lovelycheck 🅕
${s2} ${prefix}uglycheck 🅕
${s2} ${prefix}hot 🅕
${s2} ${prefix}sexy 🅕
${s2} ${prefix}kind 🅕
${s2} ${prefix}idiot 🅕
${s2} ${prefix}handsome 🅕
${s2} ${prefix}beautiful 🅕
${s2} ${prefix}cute 🅕
${s2} ${prefix}pretty 🅕
${s2} ${prefix}lesbian 🅕
${s2} ${prefix}noob 🅕
${s2} ${prefix}bastard 🅕
${s2} ${prefix}foolish 🅕
${s2} ${prefix}nerd 🅕
${s2} ${prefix}asshole 🅕
${s2} ${prefix}gay 🅕
${s2} ${prefix}smart 🅕
${s2} ${prefix}stubble 🅕
${s2} ${prefix}doggo 🅕
${s2} ${prefix}horny 🅕
${s2} ${prefix}cunt 🅕
${s2} ${prefix}wibu 🅕
${s2} ${prefix}noobra 🅕
${s2} ${prefix}nibba 🅕
${s2} ${prefix}nibbi 🅕
${s2} ${prefix}comrade 🅕
${s2} ${prefix}mumu 🅕
${s2} ${prefix}rascal 🅕
${s2} ${prefix}scumbag 🅕 
${s2} ${prefix}nuts 🅕
${s2} ${prefix}fagot 🅕
${s2} ${prefix}scoundrel 🅕
${s2} ${prefix}ditch 🅕
${s2} ${prefix}dope 🅕
${s2} ${prefix}gucci 🅕
${s2} ${prefix}lit 🅕
${s2} ${prefix}dumbass 🅕
${s2} ${prefix}crackhead 🅕
${s2} ${prefix}mf 🅕
${s2} ${prefix}motherfucker 🅕
${s2} ${prefix}sucker 🅕
${s2} ${prefix}fuckboy 🅕
${s2} ${prefix}playboy 🅕
${s2} ${prefix}fuckgirl 🅕
${s2} ${prefix}playgirl 🅕
${s2} ${prefix}quotes 🅕
${s2} ${prefix}can 🅕
${s2} ${prefix}is 🅕
${s2} ${prefix}when 🅕
${s2} ${prefix}where 🅕
${s2} ${prefix}what 🅕
${s2} ${prefix}how 🅕
${s2} ${prefix}rate 🅕
${s2} ${prefix}cry 🅟
${s2} ${prefix}kill 🅟
${s2} ${prefix}hug 🅟
${s2} ${prefix}pat 🅟
${s2} ${prefix}lick 🅟 
${s2} ${prefix}kiss 🅟
${s2} ${prefix}bite 🅟
${s2} ${prefix}yeet 🅟
${s2} ${prefix}bully 🅟
${s2} ${prefix}bonk 🅟
${s2} ${prefix}wink 🅟
${s2} ${prefix}poke 🅟
${s2} ${prefix}nom 🅟
${s2} ${prefix}slap 🅟
${s2} ${prefix}smile 🅟 
${s2} ${prefix}wave 🅟
${s2} ${prefix}awoo 🅟
${s2} ${prefix}blush 🅟
${s2} ${prefix}smug 🅟
${s2} ${prefix}glomp 🅟 
${s2} ${prefix}happy 🅟
${s2} ${prefix}dance 🅟
${s2} ${prefix}cringe 🅟
${s2} ${prefix}cuddle 🅟
${s2} ${prefix}highfive 🅟 
${s2} ${prefix}shinobu 🅟
${s2} ${prefix}handhold 🅟
${s2} ${prefix}horny 🅕
${s2} ${prefix}checkme 🅕
${s2} ${prefix}confess 🅕
${s2} ${prefix}leave 🅕
${s3}

${s1} Anime NSFW ${s4}
${s2} ${prefix}hentai 🅕
${s2} ${prefix}gifhentai 🅕
${s2} ${prefix}gifblowjob 🅕
${s2} ${prefix}hentaivid 🅕
${s2} ${prefix}hneko 🅕
${s2} ${prefix}nwaifu 🅕
${s2} ${prefix}animespank 🅕
${s2} ${prefix}trap 🅕
${s2} ${prefix}gasm 🅕
${s2} ${prefix}ahegao 🅕
${s2} ${prefix}ass 🅕
${s2} ${prefix}bdsm 🅕
${s2} ${prefix}blowjob 🅕
${s2} ${prefix}cuckold 🅕
${s2} ${prefix}cum 🅕
${s2} ${prefix}milf 🅕
${s2} ${prefix}eba 🅕
${s2} ${prefix}ero 🅕
${s2} ${prefix}femdom 🅕
${s2} ${prefix}foot 🅕
${s2} ${prefix}gangbang 🅕
${s2} ${prefix}glasses 🅕
${s2} ${prefix}jahy 🅕
${s2} ${prefix}masturbation 🅕
${s2} ${prefix}manga 🅕
${s2} ${prefix}neko-hentai 🅕
${s2} ${prefix}neko-hentai2 🅕
${s2} ${prefix}nsfwloli 🅕
${s2} ${prefix}orgy 🅕
${s2} ${prefix}panties 🅕 
${s2} ${prefix}pussy 🅕
${s2} ${prefix}tentacles 🅕
${s2} ${prefix}thights 🅕
${s2} ${prefix}yuri 🅕
${s2} ${prefix}zettai 🅕
${s3}

Created By : FauziDevID
`
)
}