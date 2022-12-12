const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")

module.exports = { 
    config: {
nombre: "setlvl",
alias: []
    },
  run: async (client, message, args, lang) => {    
const level = new db.crearDB('levels', 'level')
let user = message.mentions.users.first() || client.users.resolve(args[0]) 
let nivelxd = args.slice(1).join(' ');
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  
  
if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escribe una ID.")
                                              .setColor("RED"))

//let nivel = await level.obtener(`${message.author.id}.nivel`)



message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("Ahora **"+user.username+"** es nivel **"+nivelxd+"**")
                                              .setColor("GREEN"))
    
   level.establecer(`${user.id}`, {xp: 0, nivel: nivelxd})

    
}}