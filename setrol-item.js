const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "setrol-item",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {
    const db = require("megadb")
    const objetosdb = new db.crearDB("Objetos_Economia", "tienda")
    const rolesBuydb = new db.crearDB("Roles_Buy", "tienda")
    const rolesBuyNamesdb = new db.crearDB("Roles_Buy_Names", "tienda")
    let items = await objetosdb.obtener(message.guild.id)
  
    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))
    
    let xd = args.join(" ").split(" | ")
    if(!xd[0]) return message.channel.send("Escribe el nombre del Objeto, que le establecerás el rol al momento de comprarlo\n**Ejemplo de uso:** `_setitem-descripcion <nombre item> | <rol>`")

    if(!objetosdb.tiene(`${message.guild.id}.${xd[0].toLowerCase()}`)) return message.channel.send("Objeto `"+xd[0]+"` no existe!")
    
    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send("Menciona el rol que le establecerás al Objeto al momento de comprarlo\n**Ejemplo de uso:** `_setrol-item <nombre item> | <rol>`")
    let item = items[xd[0].toLowerCase()]
    if(!rolesBuydb.tiene(`${message.guild.id}.${xd[0].toLowerCase()}`)){
      rolesBuydb.establecer(`${message.guild.id}.${xd[0]}`, [])
    }

      if(!rolesBuyNamesdb.tiene(`${message.guild.id}.${xd[0]}`)){
      rolesBuyNamesdb.establecer(`${message.guild.id}.${xd[0]}`, [])
    }
    objetosdb.establecer(`${message.guild.id}.${xd[0].toLowerCase()}`, {name: item.name, minuscula: item.name.toLowerCase(), price: item.price, descripcion: item.descripcion})
    rolesBuydb.push(`${message.guild.id}.${xd[0]}`, rol.id)
    rolesBuyNamesdb.push(`${message.guild.id}.${xd[0]}`, rol.name)

    message.channel.send(new Discord.MessageEmbed()
    .setDescription("Rol establecido a la hora de comprar el objeto **"+item.name+"** correctamente! :white_check_mark:\n\nAsegurate de que mi rol este arriba del Rol, o no podré dar el rol")
    .setColor("GREEN"))
    
  }
}