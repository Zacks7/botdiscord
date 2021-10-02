
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports.run = (client, message, args) => {
    message.delete();
    let content = args.join(" ")

    let user = message.author
    if (!args[0]) return message.channel.send("**Vous n'avez pas mis de message | white please !**")


    if (content) {
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${content}**`)
            .setThumbnail("https://images-ext-1.discordapp.net/external/-q_iEJ8U6YPVj1-x1qAeeRhLbeeDiWnV9B5vqNKhUSs/https/www.soptle.com/wp-content/uploads/2020/08/pravas.gif")
            .setFooter('Cash Money')

        return message.channel.send(embed)

    }
}

module.exports.help = {
    name: 'boutique',
};
