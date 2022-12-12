const megadb = require('megadb')
const db = new megadb.crearDB('textopersonal', 'level')
const Discord = require("discord.js") 


module.exports = { 
    config: {
nombre: "setinfo",
alias: []
    },
  run: async (client, message, args, lang) => {    

  
  let x = args.join(" ") 
  if(!x) return message.channel.send( new Discord.MessageEmbed()
                                     .setDescription('Escribe lo que vas a colocar en tu descripción')
                                     .setColor("RED"))
    
  db.establecer(`${message.author.id}`, x) 
  message.channel.send(new Discord.MessageEmbed()
                                     .setDescription('Nuevo texto establecido a **'+ x+"**")
                                     .setColor("GREEN"))
}

}