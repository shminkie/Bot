import * as fs from 'fs';
import { Client, Collection, Intents } from 'discord.js'
// import token from '@config';

const client: any = new Client({ intents: [
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_INVITES,
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
],
});
// Command Handling
client.commands = new Collection();
console.log("client.commands: ", client.commands)
// const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts'));

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	client.commands.set(command.data.name, command);
// }

// // Event handling
// const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

// for (const file of eventFiles) {
// 	const event = require(`./events/${file}`);
// 	if (event.once) {
// 		client.once(event.name, (...args) => event.execute(...args));
// 	}
// 	else {
// 		client.on(event.name, (...args) => event.execute(...args));
// 	}
// }

// client.login(token);