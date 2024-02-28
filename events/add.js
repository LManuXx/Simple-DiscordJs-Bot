const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const welcomeChanner = member.guild.channels.cache.find(channel => channel.name === 'bienvenida')

        if(welcomeChanner){
            welcomeChanner.send(`!Hola ${member.user.username}, bienvenido al canal!`)
        }

        const defaultRole = member.guild.roles.cache.find(role => role.name === 'mierda')
        member.roles.add(defaultRole)
	},
};