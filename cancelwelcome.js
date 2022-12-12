module.exports = { 
    config: {
nombre: "cancelwelcome",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const welcome = new db.crearDB('setwelcome', 'welcomeleave')    
const welcomeimg = new db.crearDB('setwelcomeimg', 'welcomeleave')    

let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando")
                                              .setColor("RED")) 

        welcome.eliminar(`${message.guild.id}`)
        welcomeimg.eliminar(`${message.guild.id}`)

  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Ya no hay welcome en este servidor")
                         .setColor("GREEN"))
  }}