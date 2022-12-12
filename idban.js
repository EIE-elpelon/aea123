const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "idban",
alias: []
    },
  run: async (client, message, args, lang) => {
  
let prefijo = process.env.PREFIX;
let user = args[0]
let razon = args.slice(1).join(' ');
let perms = message.member.hasPermission("BAN_MEMBERS");
let usuario = client.users.resolve(user)
console.log(user)
    
if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  
  
if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permiso para banear miembros!")
                                              .setColor("RED"))
    
if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes especificar una ID a alguien")
                                              .setColor("RED"))  
  
if(!razon) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba un razón, `"+prefijo+"idban [id] [razón]`")
                                              .setColor("RED"))  
  
message.guild.members.ban(user, {reason: razon})
  
   const embed = new Discord.MessageEmbed()
  embed.setColor("GREEN")
  embed.setDescription('<:Verified:635075337100853260> | ' + usuario.username + " ha sido baneado por <@"+message.author.id + ">")
  embed.addField("🗒 Razón:", razon)
  
message.channel.send(embed)
}}