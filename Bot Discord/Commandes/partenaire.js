
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Partenaire__**")
        .setDescription(`*Pour faire Partis de nos Partenaire, il vous suffit d'envoyer un message privé à Zacks ou à Bylkus !*`)
        .setImage("https://images-ext-2.discordapp.net/external/m-2mid5Ukd5S8RilS9WZ_jL_JNhd4ui7LXXriojSGzg/https/images-ext-2.discordapp.net/external/pa98e6fDEB_BXyjmyC9Aih3H2SXEc0Hd2aUGx_kmOiA/%253Fwidth%253D550%2526height%253D262/https/images-ext-2.discordapp.net/external/ueJGDeC4gjHxIcKo8XgNCXanyIgEMr4mt4Ijho_l2l8/https/static.wixstatic.com/media/cef2f6_892c1599633d7644212bb44ac2ce96c1.gif")
        .setFooter('Le Staff de Cash Money')

    return message.channel.send(embed)

}


module.exports.help = {
    name: 'part',
};
