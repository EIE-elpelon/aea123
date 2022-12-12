const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat")
module.exports = { 
    config: {
nombre: "infobot",
alias: ["bot"]
    },
  run: async (client, message, args, lang) => {  
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let ayarikito = process.env.OWNER;
  let cpuLol;
cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
              return console.log(err);
        } 
  
  
const embed = new Discord.MessageEmbed()

.setAuthor(bot+" ┊ Infobot", botavatar)
.setThumbnail(botavatar)
.setColor("#c51515")
.addField('<a:cerveza:717533549141688323> **Dueños del bot:**','**'+ayarikito+'**', true)
.addField(`<a:nocxd:717585193417834526> **Memoria:**`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`<:cpu:707034533534629920> **CPU Usada:**`, `${percent.toFixed(2)} %`, true)
.addField(`<a:carga2:715405557049196544> **Version:**`, `1.9.6`, true)
.addField(`📚 **Libreria:**`, `Discord ^12.2.0(Js)`, true)
.addField(`📡 **Servidores:**`, `${client.guilds.cache.size.toLocaleString()}`, true)
.addField(`👥 **Usuarios:**`, `${client.users.cache.size.toLocaleString()}`, true)
.addField(`🚩 **Canales:**`, `${client.channels.cache.size.toLocaleString()}`, true)
.setTimestamp()
.setFooter("Usa "+prefijo+"help para saber más sobre el bot", botavatar)
.addField(`🗣 **Conexiones a voz:**`, `${client.voice.connections.size.toLocaleString()}`, true)

message.channel.send(embed)
        
    
      
      
})
  }}