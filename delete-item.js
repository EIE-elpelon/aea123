const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "delete-item",
    alias: ["eliminar-item", "deleteitem", "eliminaritem"]
  },
  run: async (client, message, args, lang, queue) => {
    const db = require("megadb")
    const objetosdb = new db.crearDB("Objetos_Economia", "tienda")

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))
    
    let objeto = args.join(" ")
    if(!objeto) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Escribe el nombre del Objeto que eliminarás")
    .setColor("RED"))

    if(!objetosdb.tiene(`${message.guild.id}.${objeto}`)) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("El objeto `"+objeto+"` No existe!")
    .setColor("RED"))

    objetosdb.eliminar(`${message.guild.id}.${objeto}`)
    message.channel.send("Item `"+objeto+"` Elimiando correctamente!")
  }
}