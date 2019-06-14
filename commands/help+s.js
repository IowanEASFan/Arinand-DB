const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

	let serverembed = new Discord.RichEmbed()
    .setColor("#1e74ff")
    .setThumbnail('https://i.ibb.co/mC2Ny48/arinand-av.png')
	.addField("Arinand's Staff Commands", "Need help? Here it is!")
	.addField("a-kick", "Kicks a user. Requires a channel called #reports.")
	.addField("a-ban", "Bans a user. Requires a channel called #reports.")
	.addField("a-clear", "Clears a defined amount of messages. Example: 'a-clear 10' will clear 10 messages.")

	return message.channel.send(serverembed)

}
module.exports.help = {
    name: "help+s"
}
