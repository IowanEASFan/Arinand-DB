const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [":star:", ":star::star:", ":star::star::star:", ":star::star::star::star:", ":star::star::star::star::star:"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let rate_embed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setThumbnail("https://i.ibb.co/bKzQNjX/e4d52f4d69d7bba67e5fd70ffe26b70d.png")
.setColor("#1e74ff")
.addField(`Arinand gives ${question} a(n)...`, replies[result]);

message.channel.send(rate_embed);

}

module.exports.help = {
    name: "rate"
}