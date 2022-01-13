const {Client, Intents} = require('discord.js');
const {channelId, token} = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', async () => {
    console.log('Ready!');
});

client.on("messageCreate", msg => {
    if (msg.content.trim() === "!ping") {
        const channel = client.channels.cache.get(channelId)
        channel.send("pong!");
    }
})

client.login(token);