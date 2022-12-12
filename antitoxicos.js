module.exports = { 
    config: {
nombre: "antitoxicos",
alias: []
    },
  run: async (client, message, args, lang) => { 
const db = require("megadb")
const Discord = require("discord.js")
const ax = new db.crearDB('antitoxicos', 'sets') 
let perms = message.member.hasPermission("ADMINISTRATOR");

    if (!perms)
      return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos")
                                              .setColor("RED"))
     
    if (ax.tiene(`${message.guild.id}`)) {
      ax.eliminar(`${message.guild.id}`);
      return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Verified:635075337100853260> | Anti-Toxicos desactivada")
                                              .setColor("GREEN"))
    }
    ax.establecer(`${message.guild.id}`, "activado");
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Verified:635075337100853260> | Anti-Toxicos activada")
                                              .setColor("GREEN"))
    }
  }
