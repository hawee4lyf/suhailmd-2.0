const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163886828";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInY1THJyTGwrdE1vNmI2dGZ0NlYvd0NWd3FaMkxkT2xGYnFWZGhqbUcxSE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlpTVdWeGpPUU1hbTBUcG82bDBIaHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGNlMDI0YjEtNGI2Zi00ZDEyLWExNWUtNzI2NzU4OTgwYjQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMjE4LFxuICAgICAgMTA4LFxuICAgICAgNTQsXG4gICAgICAyNTEsXG4gICAgICA2MyxcbiAgICAgIDE4NSxcbiAgICAgIDE2OSxcbiAgICAgIDE4NCxcbiAgICAgIDQsXG4gICAgICA4MSxcbiAgICAgIDE2MixcbiAgICAgIDI5LFxuICAgICAgMTk2LFxuICAgICAgMTY3LFxuICAgICAgMTg4LFxuICAgICAgMTM2LFxuICAgICAgMjMwLFxuICAgICAgNDksXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA5NSxcbiAgICAgIDEwMCxcbiAgICAgIDE2MCxcbiAgICAgIDc4LFxuICAgICAgMzcsXG4gICAgICA2NSxcbiAgICAgIDE4MSxcbiAgICAgIDE4OCxcbiAgICAgIDEzNSxcbiAgICAgIDEzNSxcbiAgICAgIDE1MixcbiAgICAgIDE5OSxcbiAgICAgIDk5LFxuICAgICAgMTQxLFxuICAgICAgNDgsXG4gICAgICAyMjksXG4gICAgICAxMjYsXG4gICAgICAyMTgsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjc2Q0pXRzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM4ODY4Mjg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJoYXV3YW11aGFtbWFkNzI2XCIsXG4gICAgXCJsaWRcIjogXCIxODk0NzcxOTY2NjA4NzQ6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHlBc0pJR0VMM1VzTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNeHE5TXNEK2V2RExWSFhjVmplYW8vY09FL1NveGlKZExYcURrV21FaDNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxzWGpnakZjSU4yZEVUN0ZTekpLNE9hejl1SjZnWkNLMkJMSExLSWRtSWZRbU5zWDhZbkVidnhtYUdta2gwS1JOby9hVyt2Ynk1cTBrQ3U5ZDZoL0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInU2citoNTIxVllBUkxxZ2xxR1RxWkZSbGYxeVRycXRPTzY1SDkvZHROM2JrMWo1dDdVbHRYNzVPQUJJUm80NXVGdmdCOWFNQ3c4OThGYURHd2pqL0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM4ODY4Mjg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MTQxOTU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
