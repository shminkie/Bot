import { SlashCommandBuilder } from '@discordjs/builders'

export class Ping {
	public data: any =  new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!');

	public async execute(interaction) {
		return interaction.reply('Pong!');
	}
};