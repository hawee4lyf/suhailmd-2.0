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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163886838";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || " SUHAIL_21_20_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRyLzVIbmpuYVBKbm9WNlFwb3JpMndNVEdKN2NaWGRFUGFXUG8vN0Q2VDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFqaFhzbkZvUlJ1cU5oc2lFRVA0b3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTEyMWExODYtZTgwOC00ZDRkLTlmNmQtMjY1MGMyY2RiODFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE1NCxcbiAgICAgIDkxLFxuICAgICAgMjM1LFxuICAgICAgMTcsXG4gICAgICAxMjksXG4gICAgICAyMjksXG4gICAgICA4LFxuICAgICAgNzIsXG4gICAgICA2NixcbiAgICAgIDU5LFxuICAgICAgNTksXG4gICAgICAxOTEsXG4gICAgICAyNTMsXG4gICAgICAxNTIsXG4gICAgICAxNzMsXG4gICAgICA4NSxcbiAgICAgIDE3OSxcbiAgICAgIDUxLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgODEsXG4gICAgICAyMjcsXG4gICAgICAyMDEsXG4gICAgICA4OSxcbiAgICAgIDE4NixcbiAgICAgIDEyOCxcbiAgICAgIDkzLFxuICAgICAgNTIsXG4gICAgICA3NCxcbiAgICAgIDM3LFxuICAgICAgODUsXG4gICAgICAyMTksXG4gICAgICA4NixcbiAgICAgIDQ1LFxuICAgICAgMTEyLFxuICAgICAgMjIzLFxuICAgICAgNzksXG4gICAgICAyMTcsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFFHRVk4RktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM4ODY4Mjg6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ3NzE5NjY2MDg3NDoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVGIvOElFRUl2Vnpib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitvRjM1SG1xRDRZVFpnNmtjRldadUJUdDUydjl0eXRZUmFDWG1JOG1XUVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibTlHNk1VWkNFZjZ4TnZMUlpMQUJvclE0WU1OWmVwcmdyWkEwdFBMSVFIMDYrVmpQVWd4L0pnQlJmMGNCUkJXVTZ2UWxCRmdDMU1HVXBPQ21WZjJFQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVJnci9tZlE4WGZzck1ZYUhuL1NBOGVVTlFCSVZ3bFNaUFQrK010OCsvcnM3OEFsSTcwNHJZQlIwVTdXVnRxRkVMS3cxREk4aUtSZmVPMC9FQk9ZREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Mzg4NjgyODoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzUyMDAxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN1VlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3VWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUhia1NyNGRUWjhiV2R0RjlteE0vbjF5NWh3bWl1TnBmbTJJS2NlMXR6UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjE0MjQ2Mjc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNTE4ODI4Njc2XCJ9Igp9"  // PUT your SESSION_ID 


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
