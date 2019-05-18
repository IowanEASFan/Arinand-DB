const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!bUser) return message.channel.send("```Error 404 - User Not Found```");
		let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Unable to ban member.")
		if(bUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Sorry, but this user has the **MANAGE_MESSAGES** role, therefore they are unbanable.")
		if (!bReason) {
		        bReason = "No reason provided";
		    }

		let banEmbed = new Discord.RichEmbed()
		.setTitle("Someone made the mods mad...")
		.setColor("#FF0000")
		.addField("Banned User:", `${bUser}, ${bUser.id}`)
		.addField("Banned by:", `<@${message.author.id}>`)
		.addField("Banned at:", message.createdAt)
		.addField("Reason for ban:", bReason);

		let banChannel = message.guild.channels.find('name', 'reports')
		if(!banChannel) return message.channel.send('Error: channel named **reports** not found!')

message.guild.member(bUser).ban(bReason);
banChannel.send(banEmbed);

	return;
}

module.exports.help = {
    name: "ban"
}