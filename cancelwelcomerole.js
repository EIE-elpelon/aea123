module.exports = { 
    config: {
nombre: "cancelwelcomerole",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const welcome = new db.crearDB('setwelcomerole', 'welcomeleave')    

let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED")) 

        welcome.eliminar(`${message.guild.id}`)
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Ya no hay welcomerole en este servidor")
                         .setColor("GREEN"))
  }}