const Discord = require('discord.js')
const db = require('megadb')
const vips_db = new db.crearDB("vips", "vips")
const devs_db = new db.crearDB("devs", "devs")
const vipstag = new db.crearDB("viptags", "vips")

module.exports = { 
    config: {
nombre: "removevip",
alias: []
    },
  run: async (client, message, args, lang) => {      
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  

  
  let user = message.mentions.users.first() || client.users.resolve[0] || args[0]

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escribe la ID, o menciona al usuario.")
                                              .setColor("RED"))
  
    
  const vips = await vips_db.obtener("vips")
  if(staff.includes(user.id) == false) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario no es VIP")
                                              .setColor("RED"))
  
  
  // if(devs_db.tiene("devs".user.id)) 

  if(!vips_db.tiene("vips")){
   await vips_db.establecer("vips", [])
  }
  
      if(!vipstag.tiene("vips")){
   vipstag.establecer("vips", [])
  }
  
  await vipstag.extract("vips", "**"+user.tag+"**")
  await vips_db.extract("vips", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario removido correctamente del VIP del bot.")
                      .setColor("GREEN")
                      )
}}