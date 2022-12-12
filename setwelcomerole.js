module.exports = { 
    config: {
nombre: "setwelcomerole",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const welcome = new db.crearDB('setwelcomerole', 'welcomeleave')   



let role = message.mentions.roles.first()
let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED")) 
    
if(!role) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar un rol")
                                              .setColor("RED"))
  

  

        welcome.establecer(`${message.guild.id}`, role.id)
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo role de welcome establecido. <@&"+role.id+">")
                         .setColor("GREEN"))
  }}