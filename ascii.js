const Discord = require("discord.js")

module.exports = { 
    config: {
nombre: "ascii",
alias: []
    },
  run: async (client, message, args, lang) => {  
    
const figlet = require('figlet');
    
    if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes escribir un texto")
                                              .setColor("RED")) 
    
    if(!args.join(" ") > 15) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | El texto no puede contener más de 15 carácteres")
                                              .setColor("RED")) 
    

    

                                                               
 figlet(args.join(" "), (err, data) => message.channel.send("```" + data + "```"))

        }}