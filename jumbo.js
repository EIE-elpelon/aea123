const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "jumbo",
    alias: []
  },
  run: async (client, message, args, lang) => {
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Escribe el emoji!")
    .setColor("RED"))

    let emoji = message.emojis.cache.first()
    if(!emoji) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("El emoji introducido es invalido o no lo encontre.")
      .setColor("RED"))

    message.channel.send({files: [emoji.url]})
  }
}