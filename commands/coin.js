const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["Heads", "Tails"];

let result = Math.floor((Math.random() * replies.length));

let coinembed = new Discord.RichEmbed()
.setThumbnail("https://i.ibb.co/pfqFq0j/download-1.jpg")
.setColor("#1e74ff")
.setTitle("Coin Toss")
.setDescription(`${message.author.tag}, you tossed a coin and it landed **${'Answer', replies[result]}**!`);

message.channel.send(coinembed);

}

module.exports.help = {
    name: "coin"
}