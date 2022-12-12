module.exports = { 
    config: {
nombre: "cancelleave",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const leave = new db.crearDB('setleave', 'welcomeleave')    
const leaveimg = new db.crearDB('setleaveimg', 'welcomeleave')    

let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED")) 

        leave.eliminar(`${message.guild.id}`)
        leaveimg.eliminar(`${message.guild.id}`)

  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Ya no hay leave en este servidor")
                         .setColor("GREEN"))
  }}