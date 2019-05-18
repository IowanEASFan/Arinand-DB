const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get('https://random.dog/woof.json');
    
    let dog = new Discord.RichEmbed()
    .setColor("#1e74ff")
    .setTitle(":dog: Have a random dog! :dog:")
    .setImage(body.url);

message.channel.send(dog);

}
module.exports.help = {
    name: "dog"
}