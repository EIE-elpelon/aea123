
const Discord = require('discord.js')
const db = require('megadb')
const blacks = new db.crearDB("blacks", "blacks")
const blackstags = new db.crearDB("blackstags", "blacks")

module.exports = { 
    config: {
nombre: "removeblacklist",
alias: []
    },
  run: async (client, message, args, lang) => {      
if(!["602698302164697098", "699379685401952287", "591470897911824384", "607620224732102717"].includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  

  
  let user = message.mentions.users.first() || client.users.resolve(args[0])

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escribe la ID, o menciona al usuario.")
                                              .setColor("RED"))
  
    
  const black = await blacks.obtener("blacks")
  if(black.includes(user.id) == false) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario no esta en la Black List")
                                              .setColor("RED"))
  
  
  // if(devs_db.tiene("devs".user.id)) 

  if(!blacks.tiene("blacks")){
   await blacks.establecer("blacks", [])
  }
  
      if(!blackstags.tiene("blacks")){
   blackstags.establecer("blacks", [])
  }
  
  await blackstags.extract("blacks", "**"+user.tag+"**")
  await blacks.extract("blacks", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario removido correctamente del Black List del bot.")
                      .setColor("GREEN")
                      )
}}