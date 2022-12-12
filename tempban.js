const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "tempban",
alias: []
    },
  run: async (client, message, args, lang) => {
const ms = require("ms");
let prefijo = process.env.PREFIX;
let user = message.mentions.users.first() || client.users.resolve(args[0])
let razon = args.slice(2).join(" ")
let tiempo = args[1]
let perms = message.member.hasPermission("BAN_MEMBERS");
const db = require("megadb")
    
const logs_db = new db.crearDB("logs", "sets");
if (!logs_db.tiene(`${message.guild.id}`)) return;
  let logs = await logs_db.obtener(`${message.guild.id}`);
  const canal = client.channels.resolve(logs);


if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  
  
if(!user)  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))  
  
if(!razon) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba el tiempo de baneo, `"+prefijo+"tempban @username [1s/m/h/d] [razón]`")
                                              .setColor("RED")) 
if(!razon) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba un razón, `"+prefijo+"tempban @username [1s/m/h/d] [razón]`")
                                              .setColor("RED")) 
  
if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario tiene un rol más alto que yo y por lo tanto no puedo banearle")
                                              .setColor("RED"))  
  
  
user.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Fuiste baneado en " + message.guild.name + " por " + razon + " durante "+ tiempo
          )
          .setColor("BLUE")
      )
      .catch(() => null);
    
message.guild.member(user).ban({reason: razon});
  
  const embed = new Discord.MessageEmbed()
  embed.setColor("GREEN")
  embed.setDescription('<:Verified:635075337100853260> | ' + user.username + " ha sido baneado por "+message.author+" durante "+tiempo)
  embed.addField("🗒 Razón:", razon)
  
    const log_banxd = new Discord.MessageEmbed()
    .setAuthor(client.user.username+" ┊ Ban", client.user.avatarURL())
      .setColor("#c51515")
      .setDescription(
        `<a:dnd:608808102698942464> **Usuario baneado:** \n<@${user.id}> \n🆔 **ID**: \n${user.id}\n<:Staff:634625948091809802> **Por**: \n<@${message.author.id}>`
      )
    canal.send(log_banxd)
message.channel.send(embed)
     setTimeout(function() {
      
      message.guild.members.unban(user)
       const log_banxd2 = new Discord.MessageEmbed()
    .setAuthor(client.user.username+" ┊ UnBan", client.user.avatarURL())
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `<a:On:608808102606798848> **Usuario desbaneado:** \n<@${user.id}> \n🆔 **ID**:\n ${user.id})\n <:Staff:634625948091809802> **Por:**\n <@${message.author.id}>`
      )
       canal.send(log_banxd2)

    }, ms(tiempo))
  }
}