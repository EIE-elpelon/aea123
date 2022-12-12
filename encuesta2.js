const Discord = require("discord.js");

module.exports = { 
    config: {
nombre: "encuesta2",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
    
  
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
                                                               .setDescription("<:Cancel:635072844782370828> | No tengo permisos para hacerlo")
                                              .setColor("RED"))   
     let bot = client.user.username
     let botavatar = client.user.avatarURL()
     if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                                               .setDescription("<:Cancel:635072844782370828> | Debes añadir argumentos a la encuesta")
                                                               .setColor("RED"))  
const embed = new Discord.MessageEmbed()

      .setAuthor(bot+" ┊ Encuesta2", botavatar)
      .setDescription(args.join(' ')+'\n▔▔▔▔▔▔▔▔▔▔▔▔')
      .addField('Opcion 1', '``1️⃣`` Sí')
      .addField('Opcion 2', '``2️⃣`` No')
      .setColor("#RANDOM")
      .setThumbnail("https://cdn.dribbble.com/users/822468/screenshots/3034859/switch.gif")
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL)
  message.channel.send(embed).then(async m => {
await m.react("1\u20e3")
await m.react("2\u20e3");
        

});
}
}