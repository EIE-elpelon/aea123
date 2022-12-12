const Discord = require("discord.js")

module.exports = { 
    config: {
nombre: "avatarbot",
alias: []
    },
  run: async (client, message, args, lang) => {  

    
const user = client.users.resolve(client.user.id)      
const embed = new Discord.MessageEmbed()
  .setImage(user.avatarURL({dynamic: true, size: 2048}))
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Avatar de ${user.tag} solicitado por ${message.author.tag}`);
  
  
message.channel.send({embed: embed});
}

}