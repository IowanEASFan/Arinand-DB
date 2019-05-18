const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("the MANAGE_MESSAGES permission is required to execute this action.");
if(!args[0]) return message.channel.send("```Please specify a number of messages to purge.```");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`${args[0]} message(s) were deleted.`).then(msg => msg.delete(3000));
});

}
module.exports.help = {
    name: "clear"
}