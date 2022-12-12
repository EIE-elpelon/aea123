const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "esay",
alias: []
    },
  run: async (client, message, args, lang) => {  
    
    
    if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes escribir un mensaje a enviar")
                                              .setColor("RED"))  
    
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(args.join(" "))
 message.channel.send(embed)
     message.delete()
  }}