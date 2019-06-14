const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userhelp = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://i.ibb.co/mC2Ny48/arinand-av.png')
    .addField("Arinand's User Commands", "Use `a-help+s` to see staff commands.")
    .addField("a-userhelp", "Ya just did it.")
    .addField("a-8ball", "it's an 8ball command, duh")
    .addField("a-botinfo", "Displays the information of Arinand.")
    .addField("a-cat", "Displays a random image of a cat.")
    .addField("a-coin", "Tosses a coin.")
    .addField("a-dice", "Rolls a die.")
    .addField("a-dog", "Displays a random image of a dog.")
    .addField("a-ha", "Shows a reactionary GIF to any joke you or others crack.")
    .addField("a-ping", "Shows the response time between Arinand and Discord.")
    .addField("a-rate", "Rates anything on a 1-to-5 star scale.")
    .addField("a-serverinfo", "Displays the information of a guild.")
    .addField("a-wx", "Shows weather information for a specific area.")
    .addField("a-wx+c", "Shows weather information for a specific area with temperature information in Celcius.");
    
    message.channel.send(userhelp);
}

module.exports.help = {
    name: 'userhelp' 
}
