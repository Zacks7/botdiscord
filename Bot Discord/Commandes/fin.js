
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Commande__**")
        .setDescription(`**Votre commande est finis merci de vouche !**`)
        .setThumbnail("https://media1.tenor.com/images/2f3768616a51fb758890c7bc78145bc3/tenor.gif?itemid=5508208")


    return message.channel.send(embed)

}


module.exports.help = {
    name: 'fin',
};
