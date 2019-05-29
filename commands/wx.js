const Discord = require("discord.js");
var weather = require('weather-js');


module.exports.run = async (bot, message, args) => {
	weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
		
		try {
			var current = result[0].current;
			var location = result[0].location;
			
			const embed = new Discord.RichEmbed()
				.setAuthor(`Weather for ${current.observationpoint}`)
				.setTitle(`**${current.skytext}**`)
				.setThumbnail(current.imageUrl)
				.setColor('#1e74ff')
				.addField('Current temperature:', `${current.temperature}°`, true)
				.addField('Timezone:', `UTC${location.timezone}`, true)
				.addField("Feels Like:", `${current.feelslike}°`, true)
				.addField("Wind:", current.winddisplay, true)
				.addField("°F or °C:", `°${location.degreetype}`, true)
				.addField("Humidity:", `${current.humidity}%`, true);

			message.channel.send((embed))
		}
		  
		catch(err) {
			
			let wxerr = new Discord.RichEmbed()
    		.setColor('#ff0000')
    		.addField("Weather Error", "The location you entered does not exist!")
    	
			message.channel.send(wxerr);
			
		}
        
    });
}

module.exports.help = {
    name: "wx"
}
