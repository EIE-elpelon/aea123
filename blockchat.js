const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "blockchat",
alias: []
    },
  run: async (client, message, args, lang) => {
    var permisos = message.member.hasPermission("ADMINISTRATOR")

if(!permisos) return message.channel.send("<:Cancel:635072844782370828> | No tienes permisos para ejecutar este comando") 

        let alluser = message.guild.roles.cache.find(aus => aus.name === '@everyone')

        if(!message.member.hasPermission("ADMINISTRATOR") )return message.reply('<:Cancel:635072844782370828> | No tienes permisos Suficientes!**');

        message.channel.updateOverwrite(alluser, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });

        const canalblock = new Discord.MessageEmbed()

            .setDescription("<:Verified:635075337100853260> | Chat bloqueado")

            .setColor('#4bbf5c')

        message.channel.send(canalblock);

    }
}