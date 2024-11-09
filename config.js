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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_37_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyMERhOU5zVU5HWWczeU5IWGhaOWc5OEhRZVNrNC9xVEtueWd2SkNTU01JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1WmNJQXdtMFQ1YUtHSHFTdk5haWN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0NjYyZmI1LWQ2YWItNGI0Mi1hZTJjLWYwYTRmMmI1ZDM2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMzgsXG4gICAgICAxNDUsXG4gICAgICAyMzgsXG4gICAgICAyNDQsXG4gICAgICAxMTMsXG4gICAgICAxNzEsXG4gICAgICAyNTUsXG4gICAgICAyMDYsXG4gICAgICAxMzYsXG4gICAgICAxMSxcbiAgICAgIDI0MSxcbiAgICAgIDk0LFxuICAgICAgMjUzLFxuICAgICAgNjcsXG4gICAgICAxNDksXG4gICAgICAxMTIsXG4gICAgICAyMjQsXG4gICAgICAxODQsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxOTksXG4gICAgICAxMzgsXG4gICAgICAxMzAsXG4gICAgICA2LFxuICAgICAgOCxcbiAgICAgIDI0MSxcbiAgICAgIDYzLFxuICAgICAgMTg0LFxuICAgICAgMjA2LFxuICAgICAgMTQ2LFxuICAgICAgOSxcbiAgICAgIDgwLFxuICAgICAgMixcbiAgICAgIDI0NyxcbiAgICAgIDc1LFxuICAgICAgMTEwLFxuICAgICAgMTQsXG4gICAgICAxMDMsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjNCSlFYODdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM4ODY4Mjg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ3NzE5NjY2MDg3NDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeVVsNDRFRVByWHZya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBlZTVkdEt2MERaYUtzZTVJTnFXeTZxTE93Y1l1RDhIUmswY0tSSHNmbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWY0dnBxVUJ2L29vR2FmcjdpMFREcFQzdnFZNFY5OEwwdER1aGJUUFduNzU1cVVkdy80NjMySTgvRTdDUG5ZZTA0bFRON3lvSWxqY2N5c0RhQnlBQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNWl6VW03U2Rxenl6a255OGNiNjNpeXhzSGdFRlFSNTRxUGxwSkk4bjIrYTgrZ1lNc3JOKzF5OFppZ1h3QVlMZlNWMkhvTFk1VG5iVllvQXVJRGRVQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Mzg4NjgyODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTE3NzQ3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZBYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkFhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTFFMzU3MXIwNTgrMTJHTG85akMvRHFuYUZWNzBNVEIrb0hoRVpXZVRpUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTAzNDgxMzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
