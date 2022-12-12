const megadb = require('megadb')
const db = new megadb.crearDB('color', 'level')
const Discord = require("discord.js") 


module.exports = { 
    config: {
nombre: "setcolor",
alias: []
    },
  run: async (client, message, args, lang) => {    

  let bot = client.user.username;
  let x = args.join(" ") 
  if(!x) return message.channel.send( new Discord.MessageEmbed()
                                     .setDescription('Debes escribir un color')
                                     .setThumbnail('https://3.bp.blogspot.com/-Z98yRDmqELA/WyO9Q-a67wI/AAAAAAAAAHk/J0XnrCj9u8AwesKu6uCnZg-lN-_HrXISwCLcBGAs/s1600/e0435fd452bbed155b5b3c5128b4f7c5.gif')
                                     .addField("Ejemplo :", "#5b00ff")
                                     .addField("**¿No sabes donde sacar los codigos de colores?**:", "[colores HTML](https://discord.boats/bot/707006024896217128)")
                                     .setColor("RED"))
    
    
  if(!message.content.includes("#")) return message.channel.send(new Discord.MessageEmbed()
                                     .setDescription('Debes escribir un color que empieze con #')
                                     .addField("Ejemplo :", "#5b00ff")
                                     .setColor("RED"))
    
  db.establecer(`${message.author.id}`, x) 
  // }
  message.channel.send(new Discord.MessageEmbed()
                                     .setAuthor(bot + " ┊ Set color", client.user.avatarURL())
                                     .setThumbnail('https://3.bp.blogspot.com/-Z98yRDmqELA/WyO9Q-a67wI/AAAAAAAAAHk/J0XnrCj9u8AwesKu6uCnZg-lN-_HrXISwCLcBGAs/s1600/e0435fd452bbed155b5b3c5128b4f7c5.gif')
                                     .setDescription('Nuevo color establecido a **'+ x+"**")
                                     .setColor("GREEN"))
}

}