const Discord = require('discord.js')
const db = require('megadb')
const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
const devs_db = new db.crearDB("devs", "devs")


module.exports = { 
    config: {
nombre: "addvip",
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
      if(!vips_db.tiene("vips")){
   vips_db.establecer("vips", [])
  }
    
    if(!vipstag.tiene("vips")){
   vipstag.establecer("vips", [])
  }
  
    
  const vip = await vips_db.obtener("vips")
  if(vip.includes(user.id) == true) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario ya tiene VIP")
                                              .setColor("RED"))
  
  
  // if(devs_db.tiene("devs".user.id)) 


  
  
  await vipstag.push("vips", "**"+user.tag+"**")
  await vips_db.push("vips", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario establecido correctamente como VIP del bot.")
                      .setColor("GREEN")
                      )
}}