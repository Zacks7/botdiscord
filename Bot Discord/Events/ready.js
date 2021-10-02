module.exports = async (client, data) => {
    client.user.setActivity(`Cash Money`, {
        type: "STREAMING",
        url: "https://www.twitch.tv"
    });
}