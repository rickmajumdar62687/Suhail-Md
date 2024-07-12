const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_23_02_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyclk5elJvQy9nZTdiN2lOUEJJZUF2Y05RQmUrdXlISWc2TU9KMi9kOVFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODM4ODg5MjI3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjM3MzZDRkJEN0MxRDJFNjJGMDE2NDNBMzNDMjVGNENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODI1MzQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRRWVpER3d4UzJleVQ1T25LMjRfOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVhZjA2MjMtY2MxMC00NmU0LTg5YWYtZDk5YzM4Nzk3MmJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDI3LFxuICAgICAgNTUsXG4gICAgICAxNDEsXG4gICAgICA2MyxcbiAgICAgIDE3NCxcbiAgICAgIDI1MixcbiAgICAgIDE5LFxuICAgICAgMTYsXG4gICAgICA3OSxcbiAgICAgIDEyNixcbiAgICAgIDE0NixcbiAgICAgIDY1LFxuICAgICAgMjQwLFxuICAgICAgMjI2LFxuICAgICAgMjMsXG4gICAgICA4OCxcbiAgICAgIDE1MixcbiAgICAgIDIwNCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNjksXG4gICAgICAxNjgsXG4gICAgICAxNDEsXG4gICAgICAxNDAsXG4gICAgICAxNDQsXG4gICAgICAxMTcsXG4gICAgICAzOSxcbiAgICAgIDk4LFxuICAgICAgMTY0LFxuICAgICAgMTk0LFxuICAgICAgMTA1LFxuICAgICAgMTYyLFxuICAgICAgMSxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDIxNyxcbiAgICAgIDIzMCxcbiAgICAgIDQ1LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlgxOEZFQUNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgzODg4OTIyNzk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2ODM3NDAxMTkwNDU3OjI2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkILwnZCu8J2QrfCdkJ4g8J2QgfCdkKjwnZCyIPCdkJHwnZCi8J2QnPCdkKTwn5ir4p2k77iP4oCN8J+pufCfmYxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR3FrWklHRVBycnhyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZYUGRIWDQrb0xXcEdRT3hSRnFJTTY4OTQ5eHk5UlBRZ2RDL0EyODMrbVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM1AzUFhyRDA5eWxBQ3hmYS80NE5JZjlaOEJvelJFYm00UnE0VUpaYndXZVhYZmV1dnJJenp2TFR6UGpTdnlkOXBCYy8vSkpnSUVoUEttREN0VmJUQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDFLT1h6ekRSSmhYUlhOUWtiYkpXb0UzckRPOFpjZ0MrVWhwZnBvL2JyT1g1ay83bUt1QThadXZRSzF5MUFTaU1TeTVkNlhBZHZYVGZIbFk3aEY0QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4Mzg4ODkyMjc5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgyNTM0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtXU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1dTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXdqUkZkVUI3R0N1SDFWTUlBN2JvWEg3VEJoNWdqQkgrL0dwWmJLS000QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ4NjQ1NDI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MjUzNDQ0MTBcIn0iCn0=|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
