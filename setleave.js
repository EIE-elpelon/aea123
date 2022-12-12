module.exports = { 
    config: {
nombre: "setleave",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const leave = new db.crearDB('setleave', 'welcomeleave')   
const leaveimg = new db.crearDB('setleaveimg', 'welcomeleave')    



let canal = message.mentions.channels.first()
let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))
    
if(!canal) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar un canal")
                                              .setColor("RED"))
    
 if (leaveimg.tiene(`${message.guild.id}`)) {
    leave.establecer(`${message.guild.id}`, canal.id)
    
    return message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo canal de leave establecido. <#"+canal.id+">")
                         .setColor("GREEN"))
  }
    

        leaveimg.establecer(`${message.guild.id}`, "https://cdn.discordapp.com/attachments/747629856652787754/749092239560671352/edificios-ciudad-de-noche_2560x1440_xtrafondos.com.jpg")
        leave.establecer(`${message.guild.id}`, canal.id)
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo canal de leave establecido. <#"+canal.id+">")
                         .setColor("GREEN"))
  }}