const { Client, Intents, Collection } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { TOKEN, PREFIX } = require("./config.js");
const fs = require('fs');

client.login(TOKEN);

client.commands = new Collection();
fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);
        client.commands.set(commande.help.name, commande);

    });
});

fs.readdir("./Events/", (error, f) => {
    if (error) console.log(error);
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));


    });
});
