const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let botmessage = args.join(" ");
message.delete().catch();

let sayembed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} says...`)
.setThumbnail("https://i.ibb.co/cYFyyds/download-2.png")
.setColor('#0099ff')
.setDescription(botmessage);

message.channel.send(sayembed);

}
module.exports.help = {
    name: "say"
}
