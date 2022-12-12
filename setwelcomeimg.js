module.exports = { 
    config: {
nombre: "setwelcomeimg",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
const Discord = require('discord.js')
const db = require('megadb')
const welcomeimg = new db.crearDB('setwelcomeimg', 'welcomeleave')    



let perms = message.member.hasPermission("MANAGE_GUILD");


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED")) 
    
if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes especificar el enlace de una imagen")
                                              .setColor("RED"))
    
if(!message.content.includes("http")) return message.channel.send(new Discord.MessageEmbed()
                                     .setDescription("<:Cancel:635072844782370828> | Debes ser un enlace")
                                              .setColor("RED"))

        welcomeimg.establecer(`${message.guild.id}`, args.join(" "))
  
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("Nueva imagen de welcome establecida.")
                         .setFooter("Si la imagen no funciona es porque el enlace está mal puesto o la imagen es privada")
                         .setImage(args.join(""))
                         .setColor("GREEN"))
  }}