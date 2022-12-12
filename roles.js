const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "roles",
alias: []
    },
  run: async (client, message, args, lang) => {  
  let bot = client.user.username
  let botavatar = client.user.avatarURL
  let id = message.guild.id;
    let MI_PITO = client.guilds.resolve(message.guild.id)
  const embed = new Discord.MessageEmbed()
    .setColor("#5b00ff")
    .setAuthor(bot+" ┊ Roles", botavatar)
    .setTitle('**Lista de roles de:** '+ message.guild.name)
    .setDescription(`Hay ${message.guild.roles.cache.size} Roles en Total:\n\n${MI_PITO.roles.cache.map(r => r.name).join(", ")}`)
	  .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL())
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
  message.channel.send(embed)
}
}