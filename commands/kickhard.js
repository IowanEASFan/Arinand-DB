const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let help = new Discord.RichEmbed()
    .setColor("#1e74ff")
	.addField("Klubbheads in the house causin' a heart attack", "https://open.spotify.com/track/2Fp7r5LzICMCNcbtR7PCPc")

return message.channel.send(help);

}

module.exports.help = {
    name: "kickhard"
}