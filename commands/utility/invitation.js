const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('generate_link')
		.setDescription('Generates a link to use this bot in your channel'),
	async execute(interaction) {
        const inviteLink = "https://discord.com/oauth2/authorize?client_id=1212090034098937947&permissions=8&scope=bot"

		await interaction.reply(`El link para usar este bot en tu servidor es este: ${inviteLink}`);
	},
};