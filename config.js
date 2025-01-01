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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_17_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGF5WTFUeldyL2N5NVR5MHpyV2oyWkMzbDRHV1RwNWNYMkVaaGRuSGxLWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXBIZWlUTW5UdHlmY2NXMERkbGpfd1wiLFxuICBcInBob25lSWRcIjogXCI2MWVkYjkxNS1kNGJhLTQ0ZjctYjk2OC0xM2Y5OTJmY2Q3NWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAyMTAsXG4gICAgICAxMzcsXG4gICAgICAxMjYsXG4gICAgICAyOSxcbiAgICAgIDE4OCxcbiAgICAgIDIxMSxcbiAgICAgIDE4OSxcbiAgICAgIDE0NSxcbiAgICAgIDE0NixcbiAgICAgIDMzLFxuICAgICAgMTY4LFxuICAgICAgMTE3LFxuICAgICAgMjI3LFxuICAgICAgMTEzLFxuICAgICAgMTUsXG4gICAgICAyNDIsXG4gICAgICAyMTgsXG4gICAgICAyMTEsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAyNDYsXG4gICAgICAxNzksXG4gICAgICA0OCxcbiAgICAgIDE0MyxcbiAgICAgIDEzMixcbiAgICAgIDE3NixcbiAgICAgIDExMyxcbiAgICAgIDI1MixcbiAgICAgIDIzNyxcbiAgICAgIDEzMCxcbiAgICAgIDI5LFxuICAgICAgMTk5LFxuICAgICAgMTIsXG4gICAgICAxMjYsXG4gICAgICAxMjQsXG4gICAgICA1MSxcbiAgICAgIDE3MSxcbiAgICAgIDE2MixcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZBWDVIMUVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzODg2ODI4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSmlkZGFcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ3NzE5NjY2MDg3NDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK0FzSklHRVB6VTFic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk14cTlNc0QrZXZETFZIWGNWamVhby9jT0UvU294aUpkTFhxRGtXbUVoM0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFQ2VnkxZ0VRTURVU1c1OCt5L1RMejYvbGJybHF3V3dFOHZCL21kcVJwOWFreTdqS01WaFhXZ2lKd0N1NkdXVDd3cjYxUVFTcWptZWwwUHJmbVFqQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibklZQkpzWSswdlB0UWVrZDZ0dXd5UE1CM2NiajFYV3A2UjVaWW1ZVysxMkVMTytNak9KZVlaNWF1SVpOSVlzbkVMOENucU1JVHVhdFRqWnFCZkNlakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Mzg4NjgyODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3NDgyMzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
