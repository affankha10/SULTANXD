 const fs = require("fs");
module.exports.config = {
	name: "sultan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "sultan", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Sultan") || 
react.includes("mahtab")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n Sultan✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦  ✦ \n𝗝𝗼𝗶𝗻 𝗠𝘆 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗜𝗱 \n Sultan 😋https://https://www.facebook.com/SULTANXDBRAND`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Screenshot_20250814_124812.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
