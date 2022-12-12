const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "unblockchat",
alias: []
    },
  run: async (client, message, args, lang) => {
    
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
  
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permisos para hacerlo")
                                              .setColor("RED")) 
}

        let alluser = message.guild.roles.cache.find(aus => aus.name === '@everyone')

        if(!message.member.hasPermission("ADMINISTRATOR") )return message.reply('<:Cancel:635072844782370828> | No tienes permisos Suficientes!**');

        message.channel.updateOverwrite(alluser, { READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true });


        const desblockcanal = new Discord.MessageEmbed()

            .setDescription("<:Verified:635075337100853260> | Chat desbloquado")

            .setColor('#4bbf5c')

        message.channel.send(desblockcanal);



    }
}