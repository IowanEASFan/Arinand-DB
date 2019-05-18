const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const ping = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Response Time')
	.setThumbnail('https://i.ibb.co/mC2Ny48/arinand-av.png')
    .setDescription(`The response time between Arinand and\nDiscord is **${bot.ping}** milleseconds.`);

    message.channel.send(ping);
}

module.exports.help = {
    name: 'ping' 
}


