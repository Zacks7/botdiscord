
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports.run = (client, message, args) => {
    message.delete();


    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Commande__**")
        .setDescription(`**le paiment a été effectué avec succés ! **`)
        .setThumbnail("https://files.helpdocs.io/zqc32mkmew/articles/77ygqpmzuc/1564414767607/behavioral-contactless.gif")


    return message.channel.send(embed)

}


module.exports.help = {
    name: 'buy',
};
