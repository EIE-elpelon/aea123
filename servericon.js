const Discord = require("discord.js")

module.exports = { 
    config: {
nombre: "servericon",
alias: []
    },
  run: async (client, message, args, lang) => {  
    
    let server = message.guild

      
const embed = new Discord.MessageEmbed()
  .setImage(server.iconURL())
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Avatar del servidor ${message.guild.name} solicitado por ${message.author.tag}`);
  
  
message.channel.send({embed: embed});
}

}