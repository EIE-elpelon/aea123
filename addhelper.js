const Discord = require('discord.js')
const db = require('megadb')
const helpers_db = new db.crearDB("helpers", "helpers")
const helpertags = new db.crearDB("helpertags", "helpers")
const devs_db = new db.crearDB("devs", "devs")

module.exports = { 
    config: {
nombre: "addhelper",
alias: []
    },
  run: async (client, message, args, lang) => {    
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))

  
  let user = message.mentions.users.first() || client.users.resolve[0] || args[0]

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No has mencionado a nadie.")
                                              .setColor("RED"))
      if(!helpers_db.tiene("helpers")){
   helpers_db.establecer("helpers", [])
  }
    
    if(!helpertags.tiene("helpers")){
   helpertags.establecer("helpers", [])
  }
  
    
  const helper = await helpers_db.obtener("helpers")
  if(helper.includes(user.id) == true) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario ya es Helper")
                                              .setColor("RED"))

  
  await helpertags.push("helpers", "**"+user.tag+"**")
  await helpers_db.push("helpers", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario establecido correctamente como staff del bot.")
                      .setColor("GREEN")
                      )
}}