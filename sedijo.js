const Discord = require("discord.js")
const marsnpm = require("marsnpm")
module.exports = { 
    config: {
nombre: "sedijo",
alias: []
    },
  run: async (client, message, args, lang) => {  
    let user = message.mentions.users.first() || message.author;
    
    if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                                   .setDescription("Menciona a un usuario")
                                                   .setImage('https://cdn.discordapp.com/attachments/690547177054797825/742699711278088252/sedijo.png')
                                                   .setColor("RED"))
    
    if(!args.join(" ").length > 32) return message.channel.send(new Discord.MessageEmbed()
                                                               .setDescription("El texto no puede tener más de **32 Caracteres**")
                                                               .setColor("RED"))
    
        let img = await marsnpm.sedijo(args.join(" "))
        
message.channel.send(new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "sedijo.png"
  }])
  .setImage("attachment://sedijo.png")
  .setColor("GREEN"))
  }
}