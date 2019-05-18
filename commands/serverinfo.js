const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let server_avi = message.guild.iconURL;
        let serverinfo = new Discord.RichEmbed()
        .setColor("#1e74ff")
        .setThumbnail(server_avi)
        .addField("Server/Guild Name:", message.guild.name)
        .addField("Guild Creation Date:", message.guild.createdAt)
        .addField("Member Join Date:", message.member.joinedAt)
        .addField('Total Member Count:', message.guild.memberCount);
    
    return message.channel.send(serverinfo);
    
}
module.exports.help = {
    name: "serverinfo"
}