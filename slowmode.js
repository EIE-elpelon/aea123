const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "slowmode",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(new Discord.MessageEmbed()
                                 .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando")
                                 .setColor("RED"))
    
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escribe el tiempo del slowmode")
                                              .setColor("RED"))  
message.channel.setRateLimitPerUser(args[0])
const embed = new Discord.MessageEmbed()
.setDescription('Slowmode establecido a **'+args[0]+'**')
.setColor("RANDOM")
message.channel.send(embed)
    
    
    
  }}