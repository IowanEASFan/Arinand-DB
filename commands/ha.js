const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://i.giphy.com/media/Q1D2YJnWHX20w/giphy.webp", "https://i.giphy.com/media/l4JyTJ5xhpU2PZGQU/giphy.webp", "https://i.giphy.com/media/l2SpOMwc4caGbwojm/giphy.webp", "https://i.giphy.com/media/3o85xGMTQw0Ou69ML6/giphy.webp", "https://i.giphy.com/media/5ntQv6mV9azOPv5nq1/giphy.webp", "https://i.giphy.com/media/bmQLgRV0aXiOk/giphy.webp", "https://i.giphy.com/media/26xBMBMkeuXMn6xmE/giphy.webp", "https://i.giphy.com/media/9S5rl57C2dgIpfUU3r/giphy.webp", "https://i.giphy.com/media/26tk1yzDgj5i5vR1m/giphy.webp"];

let result = Math.floor((Math.random() * replies.length));

return message.channel.send(replies[result])
}

    module.exports.help = {
    name: "ha"}
    