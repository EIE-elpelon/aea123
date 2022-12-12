const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "nickname",
alias: []
    },
  run: async (client, message, args, lang) => {

if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { 
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Necesito permisos para cambiar apodos")
                                              .setColor("RED")) 
}
  
if(!message.member.hasPermission("MANAGE_NICKNAMES")){ 
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Necesitas permisos de cambiar apodos")
                                              .setColor("RED"))  
}

let persona = message.mentions.members.first() 
if(!persona) {
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a una persona")
                                              .setColor("RED"))  
}else if(persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0){
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario tiene un rol más alto que yo y por lo tanto no puedo cambiarle el apodo")
                                              .setColor("RED"))  
}
let apodo = args.slice(1).join(' ') 
if(!apodo) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes escribir el apodo a cambiar")
                                              .setColor("RED"))  
persona.setNickname(apodo) 
 message.channel.send(new Discord.MessageEmbed()
                      .setDescription(`<:Verified:635075337100853260> | Listo, el nuevo apodo de ${persona} es **${apodo}**`)
                      .setColor("GREEN"))
}
}