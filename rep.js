const Discord = require('discord.js')
const db = require('megadb')
const rep = new db.crearDB('rep', 'level')
const cooldown = new db.crearDB("cooldown", 'level')
var ms = require('parse-ms'); 

module.exports = { 
    config: {
nombre: "rep",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
  let tiempo = 834000000
  let mencion = message.mentions.members.first() || client.users.resolve(args[0])
  if(!mencion) return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("Debes mencionar a alguien o poner su ID")
                                                      .setColor("RED"))
    
if(mencion.id == message.author.id) return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("No puedes darte rep a ti mismo")
                                                      .setColor("RED"))
    
  if(!cooldown.tiene(`${message.author.id}`)) {
    cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
    if(!rep.tiene(`${mencion.id}`)) rep.establecer(`${mencion.id}`, 0) 
    rep.sumar(`${mencion.id}`, 1)
    return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("<@"+mencion.id+"> has obtenido 1 punto de reputación <:rep:660423401445261322>")
                                                      .setColor("GREEN"))
  }else{
    let time = await cooldown.obtener(`${message.author.id}`)
      let timeObj = ms(time - (Date.now()))
   if(Date.now() < time) return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("Necesitas esperar"+` ${timeObj.hours}h y ${timeObj.minutes}m`+" ⏰")
                                                      .setColor("RED"))
    else {
      cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
          // if(!rep.tiene(`${message.guild.id}.${mencion.id}`)) rep.establecer(`${message.guild.id}.${mencion.id}`, 1) 
    rep.sumar(`${mencion.id}`, 1)
    return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("<@"+mencion.id+"> has obtenido 1 punto de reputación <:rep:660423401445261322>")
                                                      .setColor("GREEN"))
    
    }
  }
}}