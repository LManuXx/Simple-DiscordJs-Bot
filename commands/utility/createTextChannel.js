const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-new-text-channel')
		.setDescription('The persons with the correct role can create a text channel ')
        .addStringOption(option => option
            .setName('nombre_canal')
            .setDescription('Name for the text channel')
            .setRequired(true)),
	async execute(interaction) {
        if (!interaction.isCommand()) return;
        const nombreCanal = interaction.options.getString('nombre_canal')
        if(!interaction.member.permissions.has('ADMINISTRADOR')){
            return interaction.reply({
                content: 'No tienes permiso para crear canales'
            })
        }

        try{
            const canal = await interaction.guild.channels.create({
                name: nombreCanal,
                type: 0,})
            await interaction.reply(`Canal de voz ${canal.name} ha sido creado con exito`)
        }catch(error){
            console.log(error)
            await interaction.reply({content: 'Error al crear el canal de voz'})
        }

	},
};