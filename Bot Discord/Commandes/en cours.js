
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Commande__**")
        .setDescription(`*Votre commande est en cours ! Merci de bien vouloire patienter*`)
        .setThumbnail("https://thumbs.gfycat.com/ExcellentIdleHaddock-size_restricted.gif")


    return message.channel.send(embed)

}


module.exports.help = {
    name: 'cours',
};
