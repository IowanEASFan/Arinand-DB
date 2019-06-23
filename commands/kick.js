const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kickedUser) return message.channel.send("```Error 404 - User Not Found```");
	let kickReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("KICK_MEMBERS")) {
		let InsufficientPerms = new Discord.RichEmbed()
		.addField("Insufficient Permissions!", "You do not have the `Kick Members` permission.")
		.setColor("#FF0000");

		return message.channel.send(InsufficientPerms);
	}
	if(kickedUser.hasPermission('KICK_MEMBERS')) {
		let UnableToKick = new Discord.RichEmbed()
		.addField("Unable to kick!", "The member you are trying to kick has the `Kick Members` permission. I would suggest a demotion. :shrug:")
		.setColor("#FF0000");

		return message.channel.send(UnableToKick); 
		}

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
