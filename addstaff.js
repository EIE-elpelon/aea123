const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
const devstag = new db.crearDB("devstags", "devs")

module.exports = { 
    config: {
nombre: "addstaff",
alias: []
    },
  run: async (client, message, args, lang) => {    
if(!["602698302164697098", "699379685401952287", "591470897911824384", "607620224732102717"].includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))

  
  let user = message.mentions.users.first() || client.users.resolve[0] || args[0]

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No has mencionado a nadie.")
                                              .setColor("RED"))
      if(!devs_db.tiene("devs")){
   devs_db.establecer("devs", [])
  }
    
    if(!devstag.tiene("devs")){
   devstag.establecer("devs", [])
  }
  
    
  const staff = await devs_db.obtener("devs")
  if(staff.includes(user.id) == true) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario ya está en el Staff")
                                              .setColor("RED"))

  
  await devstag.push("devs", "**"+user.tag+"**")
  await devs_db.push("devs", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario establecido correctamente como staff del bot.")
                      .setColor("GREEN")
                      )
}}