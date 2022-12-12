module.exports = { 
    config: {
nombre: "divorce",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
const megadb = require('megadb')
const marrydb = new megadb.crearDB('marry', 'level')
const marrytags = new megadb.crearDB('marrytags', 'level')
const Discord = require("discord.js")     

const usuario = message.mentions.users.first() ||  client.users.resolve(args[0]);

if(!usuario)  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a una persona para poder divorciarte!")
                                              .setColor("RED"))
    const propuesta = new Discord.MessageEmbed()
  .setDescription(`${usuario} aceptas el divorcio con ${message.author} `)
  .setColor("RANDOM")
    message.channel.send(propuesta) 

    const collector = message.channel.createMessageCollector(m => m.author.id === usuario.id && m.channel.id === message.channel.id, {time : 20000}); 
    
    collector.on("collect", collected => { 
    if (collected.content.toLowerCase() === "si"){
      collector.stop()
      const si = new Discord.MessageEmbed()
      .setDescription("Los declaro **Divorciados**")
      .setColor("RED")

      message.channel.send(si) 
        marrydb.eliminar(usuario.id, message.author.id)
        marrydb.eliminar(message.author.id, usuario.id)

        marrytags.eliminar(usuario.id, message.author.tag)
        marrytags.eliminar(message.author.id, usuario.tag)

    } else if (collected.content.toLowerCase() === "no"){
      collector.stop()
      const no = new Discord.MessageEmbed()
      .setDescription("El(la) te sigue queriendo 7u7")
      .setColor("GREEN")
        message.channel.send(no) 
    }
})
  }
}