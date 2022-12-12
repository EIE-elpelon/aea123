const Discord = require('discord.js')
const db = require('megadb')
const blacks = new db.crearDB("blacks", "blacks")
const blackstags = new db.crearDB("blackstags", "blacks")
const devs_db = new db.crearDB("devs", "devs")
const helpers_db = new db.crearDB("helpers", "helpers")


module.exports = { 
    config: {
nombre: "addblacklist",
alias: [] // 
    },
  run: async (client, message, args, lang) => {   
    let channel = client.channels.resolve("738959253842165810"); 
    
    let helpers = await helpers_db.obtener("helpers")
    const staff = await devs_db.obtener("devs")
    
if(!helpers.includes(message.author.id) && !staff.includes(message.author.id))
  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))

let imagen = args[1]
let reporte = args.slice(2).join(" ")
  
  let user = message.mentions.users.first() || client.users.resolve(args[0])

  if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No has mencionado a nadie.")
                                              .setColor("RED"))

                                              const no_imagen = new Discord.MessageEmbed()
.setDescription("Escribe el link de la imagen del bug\n\n`Ejemplo de uso:` **_addblacklist <mencion | ID> https://i.imgur.com/eLRNmHt.png (Razon de la sancion)**")
.setColor("RED")
    if(!imagen) return message.channel.send(no_imagen)
      const chupame_la_verga_Velgaxd = new Discord.MessageEmbed()
  .setDescription("¡Al parecer el Link que colocaste es invalido!\n Escribe el link de la imagen del usuario haciendo algo indevido\n\n`Ejemplo de uso:` **_addblacklist <mencion> https://i.imgur.com/eLRNmHt.png (Razon de la sancion)** ")
  .setColor("RED")
    if(!message.content.includes("https"))
      return message.channel.send(chupame_la_verga_Velgaxd) 

    const no_reporte = new Discord.MessageEmbed()
.setDescription("Escribe la razon de la sancion\n\nEjemplo de uso:` **_addblacklist https://i.imgur.com/eLRNmHt.png (Razon de la sancion)**")
.setColor("RED")
if(!reporte) return message.channel.send(no_reporte)

      if(!blacks.tiene("blacks")){
   blacks.establecer("blacks", [])
  }
    
    if(!blackstags.tiene("blacks")){
   blackstags.establecer("blacks", [])
  }
  
    
  const black = await blacks.obtener("blacks")
  if(black.includes(user.id) == true) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario ya está en la Black List")
                                              .setColor("RED"))
  
  
  // if(devs_db.tiene("devs".user.id)) 
var server = message.guild;

  const embed = new Discord.MessageEmbed()
    .setAuthor("Un usuario a entrado a la blacklist en "+ message.guild.name, message.guild.iconURL)
    .addField("Razon:", reporte)
    .addField("Imagen:", imagen)
  .addField("Usuario Agregado", `${user} [**${user.tag}**]`)
    .setImage(imagen) 
    .setColor("RANDOM")
    .addField(`<a:dnd:608808102698942464> Echo por:`, `[${message.author}]`) //Taba pendejo :v
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL)
  channel.send(embed)

  
  
  await blackstags.push("blacks", "**"+user.tag+"**")
  await blacks.push("blacks", user.id)
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Usuario establecido en la Black List del BOT.")
                      .setColor("GREEN")
                      )
    const mensaje_user = new Discord.MessageEmbed()
    .setDescription("¡Acabas de ser Metido a la Black List de Xutur!\n`Razón: `\n" + reporte + "\n`Por:` " + message.author.tag)
    
    .setColor("RED")
    user.send(mensaje_user)
}}
