const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!bannedUser) return message.channel.send("```Error 404 - User Not Found```");
		let BanReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Unable to ban member.")
		if(bannedUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Sorry, but this user has the **MANAGE_MESSAGES** role, therefore they are unbanable.")
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
		if(!banChannel) return message.channel.send('Error: channel named **reports** not found!')

message.guild.member(bannedUser).ban(BanReason);
banChannel.send(banEmbed);

	return;
}

module.exports.help = {
    name: "ban"
}
