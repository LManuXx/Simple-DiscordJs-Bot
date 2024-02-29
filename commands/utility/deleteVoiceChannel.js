const { SlashCommandBuilder, Channel } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('delete-channel')
    .setDescription('Elimina un canal de voz o de texto')
    .addStringOption(option =>
      option
        .setName('nombre_canal')
        .setDescription('Nombre del canal a eliminar')
        .setRequired(true)
    ),
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const nombreCanal = interaction.options.getString('nombre_canal');
    const canalBorrar = interaction.guild.channels.cache.find(
      channel => channel.name === nombreCanal);


    if (!interaction.member.permissions.has('MANAGE_CHANNELS')) { // Puedes usar 'ADMINISTRADOR' si lo prefieres
      return interaction.reply({ content: 'No tienes permiso para eliminar canales de voz.' });
    }

    try {
      await canalBorrar.delete();
      await interaction.reply(`Canal de voz **${nombreCanal}** eliminado con éxito!`);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'Error al eliminar el canal de voz.' });
    }
  },
};
