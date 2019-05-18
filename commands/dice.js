const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["1", "2", "3", "4", "5", "6"];

let result = Math.floor((Math.random() * replies.length));

let ballembed = new Discord.RichEmbed()
.setThumbnail("https://i.ibb.co/0ZWdMjQ/download.jpg")
.setColor("#1e74ff")
.setTitle("Dice :game_die:")
.setDescription(`${message.author.tag}, you rolled a ${'Answer', replies[result]}!`);

message.channel.send(ballembed);

}

module.exports.help = {
    name: "dice"
}