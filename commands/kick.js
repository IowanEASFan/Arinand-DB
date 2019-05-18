const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kUser) return message.channel.send("```Error 404 - User Not Found```");
	let kReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Unable to kick member.")
	if(kUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Sorry, but this user has the **MANAGE_MESSAGES** role, therefore they are unkickable.")
	if (!kReason) {
	        kReason = "No reason provided";
	    }

	let kickEmbed = new Discord.RichEmbed()
	.setTitle("User has recieved the boot!")
	.setColor("#FF0000")
	.addField("Kicked User:", `${kUser}, ${kUser.id}`)
	.addField("Kicked by:", `<@${message.author.id}>`)
	.addField("Kicked at:", message.createdAt)
	.addField("Reason for kick:", kReason);

	let kickChannel = message.guild.channels.find('name', 'reports')
	if(!kickChannel) return message.channel.send('Error: channel named **reports** not found!')
	kickChannel.send(kickEmbed);
	kUser.kick()

}

module.exports.help = {
    name: "kick"
}