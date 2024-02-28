const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play') // Nombre del comando
    .setDescription('Reproduce una canción.')
    .addStringOption(option =>
      option.setName('song') // Nombre de la opción
            .setDescription('La canción que quieres reproducir')
            .setRequired(true) // La opción es obligatoria
    ),
  async execute(interaction, client) {
    const voiceChannel = interaction.member.voice.channel; // Obtener el canal de voz del usuario
    if (!voiceChannel) return interaction.reply('Debes estar en un canal de voz para usar este comando.');

    const song = interaction.options.getString('song'); // Obtener la canción del argumento

    // Utiliza Distube para reproducir la canción en el canal de voz
    const queue = distube.getQueue(interaction);
    if (queue) {
      queue.play(voiceChannel, song);
    } else {
      distube.play(voiceChannel, song, {
        textChannel: interaction.channel,
        member: interaction.member,
      });
    }

    await interaction.reply('¡Reproduciendo la canción!');
  },
};
