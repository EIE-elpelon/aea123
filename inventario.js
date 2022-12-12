const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "inventario",
    alias: ["mochila", "inventory"]
  },
  run: async (client, message, args, lang, queue) => {
    const db = require("megadb")
        const inventariodb = new db.crearDB("inventario", "tienda")
        let user = message.mentions.users.first() || message.author;
        let items = await inventariodb.get(`${message.guild.id}.${user.id}`)
        if(!inventariodb.has(`${message.guild.id}.${user.id}`)) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("No tienes ningun item en el inventario")
        .setColor("RED"))
        let i = 0
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(user.username, user.displayAvatarURL({dynamic: true}))
        .setDescription(items)
        .setColor("RED")
        .setFooter(message.guild.name, message.guild.iconURL({dynamic: true})))
  }
}