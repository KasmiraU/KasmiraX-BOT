// π You Can change this your choice
// π You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// π You Can change this your choice
global.emoji01 = ['βοΈ'] // π Enter your Emoji 
global.emoji02 = ['π‘'] //π Enter your Emoji
global.notice = ` Hi β I m
Kasmira Lachintha
I am 14 years old Student πΏ...
From Sri Lanka π
I am a Learning.
Not more..
Also I am Student`  // π Enter Your details and Social Media Links and Anything
global.owner =  ['+94779391333'] //π  Enter Your number
global.premium =  ['+94779391333'] //π  Enter Your number
global.ownernomer = '+94779391333' //π  Enter Your number
global.ownername = 'Kasmira Lachintha' //π Enter Your name
global.botname = 'οΌ‘οΌ¬οΌ°οΌ¨οΌ‘ οΌ’οΌ―οΌ΄' //π Enter Your Bot name
global.footer = 'Β© π―πππΎππΎπ½ π‘π π¦πΊππΏππΎππ½ π‘ππ' //π Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // π You Can change this your choice
global.region = 'India, South India, Kerala' // π You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Message Now π' // π Enter (Subscribe/Follow/Like now)
global.myweb = 'http://Wa.me//+94779391333?text=Menu'// π Enter your Social media link to follow now button
global.welcome = 'Welcome To The Group π¦' // π You Can change this your choice
global.bye = 'Bye bye Mother fucker πΌ' // π You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // π You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // π You Can change this your choice 
global.sessionName = 'session' // π You Can change this your choice
global.prefa = ['','!','.','π°οΈ','β','π'] // π You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/hL0qfs7/3023222.jpg' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = 'β­'
global.mess = {
    success: 'ΰ·ΰΆ»ΰ· π¦', // π You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // π You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // π You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // π You Can change this your choice
    group: 'Feature Used Only For Groups!', // π You Can change this your choice
    private: 'Features Used Only For Private Chat!', // π You Can change this your choice
    bot: 'This Feature Is Only For Bot', // π You Can change this your choice
    wait: 'ΰΆ§ΰ·ΰΆΰΆΰ· ΰΆΰΆ±ΰ·ΰΆ± π π...', // π You Can change this your choice
    error: 'Error! Maybe Api Key Is Expiredπ€!', // π You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // π You Can change this your choice
// Do Not Change π 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
