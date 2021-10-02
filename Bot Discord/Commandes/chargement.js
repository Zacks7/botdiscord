const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Chargement__**")
        .setDescription(`*le bot est prets a être utiliser ! console.error = 0*`)
        .setThumbnail("https://images-ext-2.discordapp.net/external/hTfaUq3JGmELEQspSvdcINuI0PsP7wgrquadwPVfwGs/https/i.imgur.com/82JImKP.mp4")

    return message.channel.send(embed)

}


module.exports.help = {
    name: 's',
};
