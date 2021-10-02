
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports.run = (client, message, args) => {
    message.delete();
    let content = args.join(" ")

    let user = message.author
    if (!args[0]) return message.channel.send("``Vous n'avez pas mis de message !``")


    if (content) {
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`||${user}|| *vient d'écrire :*  **${content}**`)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter('Cash Money')


        return message.channel.send(embed)

    }
}

module.exports.help = {
    name: 'say-embed',
};
