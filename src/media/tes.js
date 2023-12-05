let ppbot = fs.readFileSync('./media/ppbot.mp3')

case 'menu': {
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
conn.sendMessage(m.chat, { video: mnn, caption: allMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix), gifPlayback: true }, { quoted: m })
}

const pp_bot = fs.readFileSync('./media/pp_bot.jpg')