module.exports = { 
    config: {
nombre: "daily",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
const Discord = require('discord.js')
const db = require('megadb')
const balance = new db.crearDB('balance', 'level')
const cooldown2 = new db.crearDB("cooldown2", 'level')
var ms = require('parse-ms');     
    
    
    
    
     let tiempo = 834000000
  if(!cooldown2.tiene(`${message.author.id}`)) { 
    cooldown2.establecer(`${message.author.id}`, Date.now() + tiempo)
    if(!balance.tiene(`${message.author.id}`)) balance.establecer(`${message.author.id}`, 0) 
    balance.sumar(`${message.author.id}`, 200)
    return message.channel.send( new Discord.MessageEmbed()
                                .setDescription("Has recogido tus 200 monedas <:Coin:660424723854786584>")
                                .setColor("GREEN"))
  }
  else{
    let time = await cooldown2.obtener(`${message.author.id}`)
      let timeObj = ms(time - (Date.now()))
    if(Date.now() < time) return message.channel.send(new Discord.MessageEmbed()
                                                      .setDescription("Necesitas esperar"+` ${timeObj.hours}h y ${timeObj.minutes}m`+" ⏰")
                                                      .setColor("RED"))
    else {
      cooldown2.establecer(`${message.author.id}`, Date.now() + tiempo)
    balance.sumar(`${message.author.id}`, 200)
    return message.channel.send(new Discord.MessageEmbed()
                                .setThumbnail('https://cdn.discordapp.com/attachments/690547177054797825/727023966421778442/Daily-vs-monthly-SIPs.gif')
                                .setDescription("Has recogido tus 200 monedas <:Coin:660424723854786584>")
                                .setColor("GREEN"))
    
    }
  }
}
    
    
    
    
}