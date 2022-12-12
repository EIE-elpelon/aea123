const Discord = require("discord.js")

module.exports = { 
    config: {
nombre: "avatar",
alias: []
    },
  run: async (client, message, args, lang) => {  

let user = message.mentions.users.first() || client.users.resolve(args[0]) || args[0] || message.author;

const embed = new Discord.MessageEmbed()
  .setImage(`${user.avatarURL({dynamic: true, size: 2048})}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Avatar de ${user.tag} solicitado por ${message.author.tag}`);
  
  
message.channel.send({embed: embed});
}

}