const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kickedUser) return message.channel.send("```Error 404 - User Not Found```");
	let kickReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Unable to kick member.")
	if(kickedUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Sorry, but this user has the **MANAGE_MESSAGES** role, therefore they are unkickable.")
	if (!kickReason) {
	        kickReason = "Unstated";
	    }

	let kickEmbed = new Discord.RichEmbed()
	.addField("User was kicked!", `Log created at ${message.createdAt}`)
	.setColor("#FF0000")
	.addField("Kicked User:", `${kickedUser}, ${kickedUser.id}`)
	.addField("Kicked by:", `<@${message.author.id}>`)
	.addField("Reason for kick:", kickReason);

	let kickChannel = message.guild.channels.find('name', 'reports')
	if(!kickChannel) kickedUser.kick() + message.channel.send (`User was kicked by command of **${message.author.tag}** due to "**${kickReason}**".`);
	if(kickChannel) kickChannel.send(kickEmbed);
	kickedUser.kick()

}

module.exports.help = {
    name: "kick"
}
