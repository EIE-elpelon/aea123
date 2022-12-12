const Discord = require('discord.js')
const db = require('megadb')
const vipstag = new db.crearDB("blackstags", "blacks")
const devs_db = new db.crearDB("devs", "devs")

module.exports = { 
    config: {
nombre: "blacklist",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
    
const staffes = await vipstag.obtener(`blacks`).catch(e => console.log(e))

  
  
  
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Lista De blacklist:")
                      .setDescription(staffes)
                      .setColor("RANDOM")
                      )
}}