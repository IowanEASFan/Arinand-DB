const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!args[2]) return message.reply("You didn't ask a proper question!");
let replies = ["Hell yeah!", "Yeah!", "Yeah, I guess...", "Maybe.", "It's a 50/50 shot, bud.", "Nah.", "Hell nah.", "FUCK NO!"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setThumbnail("https://i.ibb.co/jkdchNc/download-2.jpg")
.setColor("#1e74ff")
.addField("Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);

}

module.exports.help = {
    name: "8ball"
}
//
