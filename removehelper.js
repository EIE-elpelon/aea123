const Discord = require('discord.js')
const db = require('megadb')
const helpers_db = new db.crearDB("helpers", "helpers")
const helpertags = new db.crearDB("helpertags", "helpers")
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "removehelper",
alias: []
    },
  run: async (client, message, args, lang) => {      
    let helpers = await helpers_db.obtener("helpers")
if(!helpers.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  
  let user = message.mentions.users.first() || client.users.resolve(args[0])

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No has mencionado a nadie.")
                                              .setColor("RED"))
  
    
  if(helpers.includes(user.id) == false) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario no es helper")
                                              .setColor("RED"))
  
  
  // if(devs_db.tiene("devs".user.id)) 

  if(!helpers_db.tiene("helpers")){
   await helpers_db.establecer("helpers", [])
  }
  
      if(!helpertags.tiene("helpers")){
   helpertags.establecer("helpers", [])
  }
  
//  await helpertags.extract("helpers", "**"+user.tag+"**")
  await helpers_db.extract("helpers", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario removido correctamente del staff del bot.")
                      .setColor("GREEN")
                      )
}}