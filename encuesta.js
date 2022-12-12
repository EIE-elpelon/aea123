const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "encuesta",
alias: []
    },
  run: async (client, message, args, lang) => {  
    
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
                                                               .setDescription("<:Cancel:635072844782370828> | No tengo permisos para hacerlo")
                                                               .setColor("RED")) 
     let bot = client.user.username
     let botavatar = client.user.avatarURL()
     let encuesta = args.join(" ")
     if(!encuesta) return message.channel.send(new Discord.MessageEmbed()
                                                               .setDescription("<:Cancel:635072844782370828> | Debes añadir argumentos a la encuesta")
                                                               .setColor("RED"))  

  message.delete()
 const embed = new Discord.MessageEmbed()
  .setAuthor(bot+" ┊ Encuesta", botavatar)
 .addField("▔▔▔▔▔▔▔▔▔▔▔▔", ` \n ${encuesta}`)
 .setFooter("Reacciona para aportar a la encuesta.")
 .setColor("RANDOM")
 .setThumbnail("https://cdn.dribbble.com/users/822468/screenshots/3034859/switch.gif")
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  message.channel.send(embed).then(async m => {
await m.react("✅")
await m.react("❌")
});
  
 }}