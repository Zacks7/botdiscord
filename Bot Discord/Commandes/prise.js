const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
        .setColor('#00FF66')
        .setTitle("**__Commande__**")
        .setDescription(`*Bonjour quel est votre commande !*`)
        .setThumbnail("https://img.freepik.com/vecteurs-libre/prise-commandes-par-telephone-centre-contact-magasin-support-client-commande-facile-livraison-rapide-service-commercial-personnage-dessin-anime-operateur-centre-appels_335657-2564.jpg?size=338&ext=jpg")


    return message.channel.send(embed)

}


module.exports.help = {
    name: 'sta',
};