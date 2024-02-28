const { SlashCommandBuilder } = require('discord.js');
const moment = require('moment')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hour')
		.setDescription('Write the hour in the server'),
	async execute(interaction) {
        const hour = moment().format('DD/MM/YYYY  HH:mm:ss')
		await interaction.reply(`La fecha y hora actual es: ${hour}`);
	},
};