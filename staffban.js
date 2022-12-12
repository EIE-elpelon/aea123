const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "staffban",
alias: []
    },
  run: async (client, message, args, lang) => {  
  
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))  
let prefijo = process.env.PREFIX;
let user = message.mentions.users.first() || client.users.resolve(args[0])
let razon = args.slice(1).join(' ');

  
if(!user)  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Coloca el ID, o menciona al usuario")
                                              .setColor("RED"))  
  
if(!razon) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba un razón, `"+prefijo+"staffban @username [razón]`")
                                              .setColor("RED"))  
  
if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario tiene un rol más alto que yo y por lo tanto no puedo banearle")
                                              .setColor("RED"))  
  
  

message.guild.member(user).ban(razon);
  
   let embed = new Discord.MessageEmbed()
  embed.setColor("GREEN")
  embed.setDescription('<:Verified:635075337100853260> | ' + user.user + " ha sido baneado por "+message.author)
  embed.addField("🗒 Razón:", razon)
  
message.channel.send(embed)
}
}