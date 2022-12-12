const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "removerole",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permisos para hacer eso")
                                              .setColor("RED")) 


if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  

let persona = message.mentions.members.first()
if(!persona) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien para quitarle un rol")
                                              .setColor("RED")) 

let nombrerol = args.slice(1).join(' ')
if(!nombrerol) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar un rol")
                                              .setColor("RED")) 

let rol = message.mentions.roles.first()
if(!rol){
  
  let embed = new Discord.MessageEmbed()
  embed.setColor("RED")
  embed.setDescription('<:Cancel:635072844782370828> | Rol no encontrado en el servidor.')
  
  return message.channel.send(embed)
}else if(!rol.editable){
  
    let embed = new Discord.MessageEmbed()
  embed.setColor("RED")
  embed.setDescription("<:Cancel:635072844782370828> | Lo siento, pero no puedo quitarle ese rol a nadie, debido a que esta mas alto que mi rol.")
  
  return message.channel.send(embed)
}else if(rol.comparePositionTo(message.member.roles.highest) > 0){
  
    let embed = new Discord.MessageEmbed()
  embed.setColor("RED")
  embed.setDescription("<:Cancel:635072844782370828> | Ese rol es mas alto que tu rol mas alto (en lo que a jerarquia se refiere), asi no puedes quitarselo a nadie.")
  
  return message.channel.send(embed)
}

  let error = new Discord.MessageEmbed()
  error.setColor("RED")
  error.setDescription("<:Cancel:635072844782370828> | Ocurrio un **error**.")
  
persona.roles.remove( rol.id).catch(e => message.reply(error))
  
  let si = new Discord.MessageEmbed()
  si.setColor("GREEN")
  si.setDescription(`<:Verified:635075337100853260> | Listo, le quite el rol **${rol.name}** a **${persona.user.username}**`)

  
message.channel.send(si)
}
}