module.exports = { 
    config: {
nombre: "work-global",
alias: []
    },
  run: async (client, message, args, lang) => {  
const Discord = require("discord.js");
const db = require("megadb"); 
const balance = new db.crearDB('balance', 'level')
const vips_db = new db.crearDB("vips", "vips")
const cooldown2 = new db.crearDB("cooldown3", 'level')
const color = new db.crearDB('color', 'level')
var ms = require('parse-ms'); 
const user = message.author; 

  const vip = await vips_db.obtener("vips")
  if(vip.includes(user.id) == false) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No eres VIP y por lo tanto no puedes ejecutar este comando")
                                              .setColor("RED"))
let usuario = message.author
let colorxd = await color.obtener(`${usuario.id}`)
let bal = await balance.obtener(`${usuario.id}`)
let random = Math.floor(Math.random() * (1001 - 100)) + 100   
  Math.floor(Math.random() * (1001 - 100)) + 100   
if (!balance.tiene(`${user.id}`)) {
  balance.establecer(`${user.id}`, 0);}
  balance.sumar(`${user.id}`, random);



let tiempo = 20000000
  if(!cooldown2.tiene(`${message.author.id}`)) { 
    cooldown2.establecer(`${message.author.id}`, Date.now() + tiempo)
    if(!balance.tiene(`${message.author.id}`)) balance.establecer(`${message.author.id}`, 0) 
    balance.sumar(`${message.author.id}`, 800)
    
    var rpts = ["⛏️ Minero ⛏️", 
            "💋 Estreeper 💋", 
            "🚕 Chofer 🚕", 
            "👨‍🍳 Cocinero/@ 👩‍🍳", 
            "✈️ Piloto de Avion ✈️",
						"👮 Policia 👮",
						"🌟 Estrella Porno 🔞",
						"📏 Maestro 📏",
						"⚕️ Medico ⚕️",
						"🗡️ Ladron 🗡️",
						"🧨Terrorista🧨",
						];
    
    return message.channel.send( new Discord.MessageEmbed()
  .setColor(colorxd)
  .setTitle("El usuario: **" + user.username + "**")
  .setThumbnail('https://cdn.videoplasty.com/gif/black-corporate-man-serious-at-work-stock-gif-4714-640x360.gif?1574048511')
  .addField("Trabajo de:",rpts[Math.floor(Math.random() * rpts.length)])
  .addField("**Y le pagaron:**", "<:Coin:660424723854786584> **"+random+"**"))

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
  
   var rpts = ["⛏️ Minero ⛏️", 
            "💋 Estreeper 💋", 
            "🚕 Chofer 🚕", 
            "👨‍🍳 Cocinero/@ 👩‍🍳", 
            "✈️ Piloto de Avion ✈️",
						"👮 Policia 👮",
						"🌟 Estrella Porno 🔞",
						"📏 Maestro 📏",
						"⚕️ Medico ⚕️",
						"🗡️ Ladron 🗡️",
						"🧨 Terrorista 🧨",
            "👨 Actor 👨"
						];
    return message.channel.send(new Discord.MessageEmbed()
      .setColor(colorxd)
  .setTitle("El usuario: **" + user.username + "**")
  .addField("Trabajo de:",rpts[Math.floor(Math.random() * rpts.length)])
  .addField("**Y le pagaron:**", "<:Coin:660424723854786584> **"+random+"**"))

  
}
  }

      
      
}}

