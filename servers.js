const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "servers",
alias: []
    },
  run: async (client, message, args, lang) => {  

if(!["602698302164697098", "699379685401952287", "591470897911824384", "607620224732102717"].includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))

  
        message.channel.send(`__**Estoy en ${client.guilds.cache.size.toLocaleString()} servidores**__ (Las IDs y la cantidad de miembros están en la consola)`)
        console.log(`Servidores:`, client.guilds.cache.map(r => r.name +`  |  `+ ` ${r.memberCount} `+ `| `+` ${r.id}`).join("\n"))
        message.channel.send(client.guilds.cache.map(r => r.name).join("\n"))

            
  }}