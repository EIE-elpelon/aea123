const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "kick",
alias: []
    },
  run: async (client, message, args, lang) => {
    
let prefijo = process.env.PREFIX;
let user = message.mentions.users.first() || client.users.resolve(args[0])
let razon = args.slice(1).join(' ');
let perms = message.member.hasPermission("KICK_MEMBERS");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  
  
if(!user)  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))  
  
if(!razon) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba un razón, `"+prefijo+"kick @username [razón]`")
                                              .setColor("RED"))  
  
if (!message.guild.member(user).kickable) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario tiene un rol más alto que yo y por lo tanto no puedo banearle")
                                              .setColor("RED"))  
  
  

message.guild.member(user).kick(razon)
  
  const embed = new Discord.MessageEmbed()
  embed.setColor("GREEN")
  embed.setDescription('<:Verified:635075337100853260> | ' + user.username + " ha sido baneado por <@"+message.author.id+">")
  embed.addField("🗒 Razón:", razon)
  
message.channel.send(embed)
  }
}