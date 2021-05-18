exports.wait = () => {
	return`⌛ carregando... se eu não enviar tente novamente em 10s⌛`

}

exports.succes = () => {
	return`*Sucesso✅...*`
}

exports.daftarB = () => {
	return`Digite daftar kratos|12`
}


exports.lvlon = () => {
	return`*LEVELING ATIVADO COM SUCESSO✅*`
}

exports.lvloff = () => {
	return`LEVELING DESATIVADO COM SUCESSO✅`
}

exports.premium = () => {
	return`*Este recurso é especial para membros premium❌..*`
}

exports.lvlnul = () => {
	return`Nível 0, mano ...`
}

exports.lvlnoon = () => {
	return`*O recurso de nível está desativado❌...*`
}

exports.noregis = () => {
	return`*Usúario não Registrado!*\n*digiter ${prefix}daftar nome|idader* \n\n*exemplo ${prefix}daftar kratos|18*`
}

exports.baned = () => {
	return`LUH NO PNEU LOL, COMENDO BOTS QUE SÃO CÉREBROS SÃO INCRÍVEIS🛐`
}

exports.rediregis = () => {
	return`*「✔」*\n\n*LUH SUDAH DAFTAR GAN...*`
}

exports.stikga = () => {
	return`*ERRO MANO...❌*`
}

exports.linkga = () => {
	return`*o link que você enviou é inválido .. * ❌`
}

exports.groupo = () => {
	return`*𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙎𝙊 𝙋𝙊𝘿𝙀 𝙎𝙀 𝙐𝙎𝘼𝘿𝙊 𝙀𝙈 𝙂𝙍𝙐𝙋𝙊 ❌ *`
}

exports.ownerb = () => {
	return`* 「❗」 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙋𝙊𝘿𝙀 𝙎𝙀𝙍 𝙐𝙎𝘼𝘿𝙊 𝙎𝙊 𝙋𝙀𝙇𝙊 𝙆𝙍𝘼𝙏𝙊𝙎!*  `
}

exports.ownerg = () => {
	return`silencio manoKKK`
}

exports.admin = () => {
	return`❌SELENCIO APENAS ADMERS PODEM USAR ISSO😎`
}

exports.badmin = () => {
	return`[❗] ESTE COMANDO SO PODE SER USADO QUANDO BOT VIRA ADM`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW LIGADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios fake / main2 não serão respondidos*`
}

exports.wrongf = () => {
	return`*Masukkan text nya gan..*`
}

exports.clears = () => {
	return`*「🚮」Todos Os Chats Foram Limpos✅*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`「𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢 」\nUntuk Informações! :\n\n*➸ Nome : ${namaUser}*\n*➸ Wame : wa.me/${sender.split("@")[0]}*\n*➸ Idade : ${umurUser}*\n*➸ Data e Hora : ${time}*\n\n*「NOTA」: ${serialUser}*\n_Esse Número e Inutil!Kkkj`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}*COMANDO NÃO ENCONTRADO \DIGITI MENU PARA VER OS COMANDOS(: *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 LEVEL UP 」*
➸ *Nome* : ${pushname}
➸ *wame* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
*sisa limit anda :* _${limitCounts}_

_Upgrade premium bosku, biar bebas gunain bot_`
}

exports.satukos = () => {
	return`*Menghidupkan enable,mematikan disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}