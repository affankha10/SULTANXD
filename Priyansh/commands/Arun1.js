 const fs = require("fs");
module.exports.config = {
	name: "mahtab",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "mahtab", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Mahtab") || 
react.includes("mahtab")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝟒𝟏||𝐘𝟒✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦  ✦ \n𝗝𝗼𝗶𝗻 𝗠𝘆 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗜𝗱 \n 𝗠𝗮𝗵𝘁𝗮𝗯 𝗔𝗵𝗺𝗮𝗱 😋https://www.facebook.com/mahtab.ahmad.985178`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
