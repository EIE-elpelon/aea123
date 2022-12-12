const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "create-item",
    alias: ["additem", "createitem", "add-item", "agregar-item", "agregaritem"]
  },
  run: async (client, message, args, lang) => {
    const db = require("megadb")
    const objetosdb = new db.crearDB("Objetos_Economia", "tienda")

    let objeto = args.join(" ")
    let item = objeto.split(" | ")

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))

    if(!item[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Escribe el nombre del Item a crear, debe tener un `|` de separación el nombre y el precio del objeto.\n\n**Ejemplo:** `_create-item <nombre> | <precio>`")
    .setColor("RED"))

    if(!item[1]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Escribe el precio del Item a crear, debe tener un `|` de separación el nombre y el precio del objeto.\n\n**Ejemplo:** `_create-item <nombre> | <precio>`"))

    if(isNaN(item[1])) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("El precio es invalido, asegurate de que sólo tenga números, y no comas, puntos, etc.!")
    .setColor("RED"))

    if(objetosdb.tiene(`${message.guild.id}.${item[0]}`)) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("El objeto `"+item[0]+"` Ya existe!")
    .setColor("RED"))

    if(!objetosdb.tiene(message.guild.id)){
    objetosdb.establecer(message.guild.id, {})
    }
    if(!objetosdb.tiene(`${message.guild.id}.${item[0].toLowerCase()}`)){
    objetosdb.establecer(`${message.guild.id}.${item[0].toLowerCase()}`, {name: item[0], minuscula: item[0].toLowerCase(), price: item[1], descripcion: "<:invisible:748964970519199905>"})
    }

    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Item Creado correctamente :white_check_mark:\n\n**Nombre:** ${item[0]}\n**Precio:** ${item[1]}`)
    .setColor("GREEN"))
  }
}