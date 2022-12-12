const db = require("megadb")
const objetosdb = new db.crearDB("Objetos_Economia", "tienda")
const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "shop",
    alias: []
  },
  run: async (client, message, args, lang) => {
if(!objetosdb.tiene(message.guild.id)) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No hay ningun objeto en la Tienda, crealo con el comando `_create-item`")
.setColor("RED"))

let objetos = Object.values(await objetosdb.obtener(message.guild.id));

let xd = objetos.map(x => `**${x.name} - ${x.price}** 💰\n${x.descripcion}`).join("\n\n")
 message.channel.send(new Discord.MessageEmbed()
 .setAuthor("Tienda del Servidor " + message.guild.name)
 .setDescription(xd)
 .setColor("GREEN")
 .setFooter(`Solicitada por ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 .setTimestamp())
  }
}