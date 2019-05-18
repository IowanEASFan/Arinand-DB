const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let help = new Discord.RichEmbed()
    .setColor("#1e74ff")
    .setThumbnail('https://i.ibb.co/mC2Ny48/arinand-av.png')
	.addField("Arinand's Commands", "Need help? Here it is!")
	.addField("a-userhelp", "Shows user commands.")
	.addField("a-staffhelp", "Shows staff commands.")

return message.channel.send(help);

}

module.exports.help = {
    name: "help"
}