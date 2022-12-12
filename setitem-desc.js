const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "setitem-descripcion",
    alias: ["setdescripcion-item", "setitem-desc", "setdesc-item"]
  },
  run: async (client, message, args, lang, queue) => {
    const db = require("megadb")
    const objetosdb = new db.crearDB("Objetos_Economia", "tienda")
    let items = await objetosdb.obtener(message.guild.id)

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))

    let xd = args.join(" ").split(" | ")
    if(!xd[0]) return message.channel.send("Escribe el nombre del Objeto, que le establecerás la descripción")

    if(!objetosdb.tiene(`${message.guild.id}.${xd[0].toLowerCase()}`)) return message.channel.send("Objeto `"+xd[0]+"` no existe!")
    
    if(!xd[1]) return message.channel.send("Escribe la nueva descripción que le establecerás al Objeto\n**Ejemplo de uso:** `_setitem-descripcion <nombre> | <nueva descripcion>`")
    let item = items[xd[0].toLowerCase()]

    objetosdb.establecer(`${message.guild.id}.${xd[0].toLowerCase()}`, {name: item.name, minuscula: item.name.toLowerCase(), price: item.price, descripcion: xd[1]})
    
    message.channel.send(new Discord.MessageEmbed()
    .setDescription("Descripción establecida correctamente")
    .setColor("GREEN"))
  }
}