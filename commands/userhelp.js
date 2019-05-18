const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userhelp = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://i.ibb.co/mC2Ny48/arinand-av.png')
    .addField("Arinand's User Commands", "Need help? Here it is!")
    .addField("a-userhelp", "Ya just did it.")
    .addField("a-ping", "Shows the response time between Arinand and Discord.")
	.addField("a-serverinfo", "Displays the information of a guild.")
	.addField("a-botinfo", "Displays the information of Arinand.")
	.addField("a-8ball", "it's an 8ball command, duh")
	.addField("a-cat", "Displays a random image of a cat.")
    .addField("a-dog", "Displays a random image of a dog.")
    .addField("a-dice", "Rolls a die.")
    .addField("a-coin", "Tosses a coin.")
    
    message.channel.send(userhelp);
}

module.exports.help = {
    name: 'userhelp' 
}