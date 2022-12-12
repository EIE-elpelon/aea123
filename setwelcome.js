module.exports = { 
    config: {
nombre: "setwelcome",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const welcome = new db.crearDB('setwelcome', 'welcomeleave')   
const welcomeimg = new db.crearDB('setwelcomeimg', 'welcomeleave')    



let canal = message.mentions.channels.first()
let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED")) 
    
if(!canal) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar un canal")
                                              .setColor("RED"))
  
  if (welcomeimg.tiene(`${message.guild.id}`)) {
    welcome.establecer(`${message.guild.id}`, canal.id)
    
    return message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo canal de welcome establecido. <#"+canal.id+">")
                         .setColor("GREEN"))
  }

        welcomeimg.establecer(`${message.guild.id}`, "https://cdn.discordapp.com/attachments/747629856652787754/749092239560671352/edificios-ciudad-de-noche_2560x1440_xtrafondos.com.jpg")
        welcome.establecer(`${message.guild.id}`, canal.id)
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo canal de welcome establecido. <#"+canal.id+">")
                         .setColor("GREEN"))
  }}