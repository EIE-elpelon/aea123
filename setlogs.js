module.exports = { 
    config: {
nombre: "setlogs",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const logs = new db.crearDB('logs', 'sets')    


let canal = message.mentions.channels.first()
let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              
                                              .setColor("RED")) 
    
if(!canal) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar un canal")
                                              .setColor("RED"))
    
if(!message.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permisos de ver el registro de auditoria")
                                              .setColor("RED"))

        logs.establecer(message.guild.id, canal.id)
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nuevo canal de logs establecido. <#"+canal.id+">")
                         .setColor("GREEN"))
  }}