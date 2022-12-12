const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "buy",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {
    const db = require("megadb")
    const objetosdb = new db.crearDB("Objetos_Economia", "tienda")
    const balserver = new db.crearDB("balance_server", "tienda");
    const banco = new db.crearDB("banco_server", "tienda");
    const inventariodb = new db.crearDB("inventario", "tienda")
    const rolesBuydb = new db.crearDB("Roles_Buy", "tienda")
    const rolesBuyNamesdb = new db.crearDB("Roles_Buy_Names", "tienda")
    const dinerobal = await balserver.obtener(`${message.guild.id}.${message.author.id}`)

    let items = await objetosdb.obtener(message.guild.id)

    if(!args.join(" ")) return message.channel.send("Escribe el nombre del item que vas a comprar")
    let item = items[args.join(" ")]
    
    if(!objetosdb.tiene(`${message.guild.id}.${args.join(" ").toLowerCase()}`)) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("El objeto `"+args.join(" ")+"` No existe!")
    .setColor("RED"))

    if(args.join(" ") === item.name){
      if(!inventariodb.tiene(`${message.guild.id}.${message.author.id}`)){
        inventariodb.establecer(`${message.guild.id}.${message.author.id}`, [])
      }
inventariodb.find(`${message.guild.id}.${message.author.id}`, (b) => b === args.join(" ").toLowerCase()).then(async obj => {

if(obj == undefined) {

      if(item.price > dinerobal) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("No tienes dinero suficiente en mano, como para comprar este objeto!")
      .setColor("RED"))

      let rolBuy = await rolesBuydb.get(`${message.guild.id}.${item.name}`)
      let rolBuyName = await rolesBuyNamesdb.get(`${message.guild.id}.${item.name.toLowerCase()}`)
      if(rolBuy){
        message.member.roles.add(rolBuy)
              if(!inventariodb.tiene(`${message.guild.id}.${message.author.id}`)){
        inventariodb.establecer(`${message.guild.id}.${message.author.id}`, [])
      }
        inventariodb.push(`${message.guild.id}.${message.author.id}`, item.name)
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Item comprado correctamente y conseguiste el rol ${rolBuyName.join(", ")} correctamente! :white_check_mark:`)
        .setColor("GREEN"))
        balserver.restar(`${message.guild.id}.${message.author.id}`, item.price)
      }
      if(!inventariodb.tiene(`${message.guild.id}.${message.author.id}`)){
        inventariodb.establecer(`${message.guild.id}.${message.author.id}`, [])
      }
        inventariodb.push(`${message.guild.id}.${message.author.id}`, item.name)
        balserver.restar(`${message.guild.id}.${message.author.id}`, item.price)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Item comprado correctamente! :white_check_mark:")
        .setColor("GREEN"))

} else {
message.channel.send(new Discord.MessageEmbed()
.setDescription("Ya tienes el objeto `"+args.join(" ")+"` en tu inventario!")
.setColor("RED"))
}
})
    }
  }
}