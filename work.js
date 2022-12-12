const Discord = require("discord.js")
module.exports = {
  config: {
    nombre: "work",
    alias: []
  },
  run: async (client, message, args, lang) => {
        let tiempo = 43200000
        const db = require("megadb");
    const balserver = new db.crearDB("balance_server", "tienda");
    const banco = new db.crearDB("banco_server", "tienda");
    const mensajeswork = new db.crearDB("work_mensajes", "tienda")
    const cooldown = new db.crearDB("cooldowns_works", "tienda")
    const emoji_economia = new db.crearDB("emoji_economia", "tienda")

    var ms = require('parse-ms');

    let dinerorandom = Math.floor(Math.random() * 1265)

    let mensajes_array = mensajeswork.has(message.guild.id) ? await mensajeswork.get(message.guild.id): [`Trabajaste como médico y conseguiste {dinero}`, `Trabajaste de policía y conseguiste {dinero}`, `Limpiaste una parte de la ciudad y ganaste {dinero}`, `Ayudaste con las labores de la casa y te dieron {dinero}`]

    if(!banco.tiene(message.guild.id)){
      banco.establecer(message.guild.id, {})
    }

        if(!banco.tiene(`${message.guild.id}.${message.author.id}`)){
      banco.establecer(`${message.guild.id}.${message.author.id}`, 500)
    }
    
        if(!balserver.tiene(message.guild.id)) {
    balserver.establecer(message.guild.id, {})
    }
    if(!balserver.tiene(`${message.guild.id}.${message.author.id}`)){
      balserver.establecer(`${message.guild.id}.${message.author.id}`, 0)
    }

    if(!emoji_economia.tiene(message.guild.id)){
      emoji_economia.establecer(message.guild.id, "💰")
    }
    let emoji = await emoji_economia.get(message.guild.id)

let mensaje = mensajes_array[Math.floor(mensajes_array.length * Math.random())]

mensaje = mensaje.split("{dinero}").join(`${dinerorandom} ${emoji} `)
mensaje = mensaje.split("{userTag}").join(message.author.tag)
mensaje = mensaje.split("{userID}").join(message.author.id)
mensaje = mensaje.split("{userMention}").join(`<@${message.author.id}>`)

    if(!cooldown.tiene(`${message.author.id}`)) { 
    cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
    if(!balserver.tiene(`${message.author.id}.${message.guild.id}`)) balserver.establecer(`${message.author.id}.${message.guild.id}`, 0) 

   balserver.sumar(`${message.guild.id}.${message.author.id}`, dinerorandom)
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription(mensaje)
      .setColor("GREEN"))
    } else {
       let time = await cooldown.obtener(`${message.author.id}`)
      let timeObj = ms(time - (Date.now()))
   if(Date.now() < time) return message.channel.send(new Discord.MessageEmbed()
   .setDescription(`Debes esperar ${timeObj.hours}h, ${timeObj.minutes}m y ${timeObj.seconds}s para volver a trabajar!`)
   .setColor("GREEN"))
      
else {
cooldown.establecer(`${message.author.id}`, Date.now() + tiempo)
balserver.sumar(`${message.guild.id}.${message.author.id}`, dinerorandom)
        return message.channel.send(new Discord.MessageEmbed()
      .setDescription(mensaje)
      .setColor("GREEN"))
      }
    }

  }
}