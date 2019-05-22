const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bot_avi = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor('#1e74ff')
    .setThumbnail(bot_avi)
    .addField("Name", bot.user.username)
    .addField("Description", "Arinand is a Discord bot made by Ferry Corsten > Marshmello as a clone of AniMaLa (made by FCM). Arinand is a bot made to do simple stuff, like roll dice, kick people, and show random cat images. I'm sure more stuff will be added when FCM learns more about JavaScript.")
    .addField("Prefix", "-a")
    .addField("Created on", bot.user.createdAt)
    .addField("Creeator's website:", "http://fcmsite.rf.gd")
    .addField("Created using a template by Derpy Canadian", "https://github.com/Derpy-Canadian/Example-JS-Discord-Bot")
    .addField("Open Source on Github!", "https://github.com/MarshmelloSUCKS/Arinand-DB/");

        return message.channel.send(botembed);
    }
module.exports.help = {
    name: "botinfo"
}
