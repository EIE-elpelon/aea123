module.exports = { 
    config: {
nombre: "cancel-lvlup",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
const Discord = require("discord.js") 
const db = require('megadb') 
const level = new db.crearDB('levels', 'level') 
const levelac = new db.crearDB('levelac', 'level')
let perms = message.member.hasPermission("ADMINISTRATOR");

    if (!perms)
      return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos")
                                              .setColor("RED"))
     
    if (levelac.tiene(`${message.guild.id}`)) {
      levelac.eliminar(`${message.guild.id}`);
      return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Verified:635075337100853260> | Level-UP activado")
                                              .setColor("GREEN"))
    }
    levelac.establecer(`${message.guild.id}`, "activado");
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Verified:635075337100853260> | Level-UP desactivado")
                                              .setColor("GREEN"))

  }}