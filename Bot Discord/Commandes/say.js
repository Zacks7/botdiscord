
const { PREFIX } = require("../config.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports.run = (client, message, args) => {
    message.delete();

    let content = args.join(" ")

    let user = message.author
    if (!args[0]) return message.channel.send("Vous n'avez pas écrits de message !")

    message.channel.send(`${content}`)


}


module.exports.help = {
    name: 'say',
};
