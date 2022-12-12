const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "top10servers",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
    const Discord = require("discord.js") 
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
     let datos = await client.guilds.cache.map(r => r.name)
     let id = await client.guilds.cache.map(r => r.id)
     let member = await client.guilds.cache.map(r => r.memberCount)
     let servidores = new Array()
     let botavatar = client.user.avatarURL()
     let bot = client.user.username
     
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
    
for(var key in datos) servidores.push({key: key, nombre: datos[key], id: id[key], memberCount: member[key]})
 servidores.splice(10, false)
 servidores.sort((a, b) => b.memberCount - a.memberCount)
    //servidores.map((l, i) => `${i+1}: Servidor: ${l.nombre} | Usuarios: ${l.id}`).slice(false, 10).join("\n")
    const embed = new Discord.MessageEmbed()
  .setColor("#5b00ff")
  .setTimestamp()
  .setFooter("El bot tiene en total "+client.guilds.cache.size.toLocaleString()+" servidores.")
  .setThumbnail(botavatar)
  .setAuthor(bot+" ┊ Top 10 Servers Más Grandes", botavatar)
  .setDescription(servidores.map((l, i) => `**${i+1}**: Servidor: **${l.nombre}** | Usuarios: **${l.memberCount}** | ID: **${l.id}**`).slice(false, 10).join("\n"))
  
  message.channel.send(embed)    
    

    
    
  }}
