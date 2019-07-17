const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bannedUser) {
		let NotFound = new Discord.RichEmbed()
		.addField("User not found!", `Sorry, but ${bannedUser} wasn't found.`)
		.setColor("#FF0000");

		return message.channel.send(NotFound);
	}
	
	let BanReason = args.join(" ").slice(22);
	
	if(!message.member.hasPermission("BAN_MEMBERS")) {
		let InsufficientPerms = new Discord.RichEmbed()
		.addField("Insufficient Permissions!", "You do not have the `Ban Members` permission.")
		.setColor("#FF0000");

		return message.channel.send(InsufficientPerms);
	}
	if(bannedUser.hasPermission('BAN_MEMBERS')) {
		let UnableToBan = new Discord.RichEmbed()
		.addField("Unable to ban!", "The member you are trying to kick has the `Ban Members` permission. I would suggest manually doing so, or strip their roles and try again. :shrug:")
		.setColor("#FF0000");

		return message.channel.send(UnableToBan);
	}
		if (!BanReason) {
		        BanReason = "Unstated";
		    }

	let banEmbed = new Discord.RichEmbed()
		.addField("User was banned!", `Log created at ${message.createdAt}`)
		.setColor("#FF0000")
		.addField("Banned User:", `${bannedUser}, ${bannedUser.id}`)
		.addField("Banned by:", `<@${message.author.id}>`)
		.addField("Reason for ban:", BanReason);

		let banChannel = message.guild.channels.find('name', 'reports')
		if(!banChannel) message.guild.member(bannedUser).ban(BanReason) + 
		message.channel.send (`User was banned by command of **${message.author.tag}** due to "**${BanReason}**".`);

	message.guild.member(bannedUser).ban(BanReason);
	if(banChannel) banChannel.send(banEmbed);

	return;
}

module.exports.help = {
    name: "ban"
}
