module.exports = {
	config: {
			name: "chris",
			version: "1.0",
			author: "chris"
			countDown: 1,
			role: 0,
			shortDescription: "chris",
			longDescription: "response with chris",
			category: "box chat",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "chris") return message.reply("𝒑𝒐𝒖𝒓𝒒𝒖𝒐𝒊 𝒗𝑒𝒖𝒙 𝒕𝒖 𝒑𝑎𝒓𝒍𝑒𝒔 𝑎 𝒎𝒐𝒏 𝒎𝑎î𝒕𝒓𝑒");
  if (event.body && event.body.toLowerCase() == "hi") return message.reply("𝒉𝒊 𝒉𝒐𝒘 𝑎𝒓𝑒 𝒚𝒐𝒖 ??");
  if (event.body && event.body.toLowerCase() == "hii") return message.reply("ʜᴇʟʟᴏ sᴇɴᴘᴀɪ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ?");
  if (event.body && event.body.toLowerCase() == "hello") return message.reply("ʜᴇʟʟᴏ sᴇɴᴘᴀɪ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ?");
  if (event.body && event.body.toLowerCase() == "zup") return message.reply("ʜᴇʟʟᴏ sᴇɴᴘᴀɪ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ?");
  if (event.body && event.body.toLowerCase() == "hey") return message.reply("ʜᴇʟʟᴏ sᴇɴᴘᴀɪ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ?");
  if (event.body && event.body.toLowerCase() == "yo") return message.reply("ʜᴇʟʟᴏ sᴇɴᴘᴀɪ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ?");
}
};
