const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'bienvenida')

        if(welcomeChannel){
            welcomeChannel.send(`!Hola ${member.user.username}, bienvenido al canal!`)
        }
        

        const defaultRole = member.guild.roles.cache.find(role => role.name === 'mierda')
        member.roles.add(defaultRole)
	},
};