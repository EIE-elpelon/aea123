const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "serverinfo",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
  let server = message.guild
  let bot = client.user.username
  let botavatar = client.user.avatarURL()

          
 const embed = new Discord.MessageEmbed()
 
    .setColor("#c51515")    
    .setTimestamp()
    .setFooter ("Solicitado por "+message.author.username, message.author.avatarURL())
    .setAuthor(bot+" ┊ Serverinfo", botavatar)    
    .setTitle('Info del servidor ' + server.name)
    .setThumbnail(server.iconURL())
    .addField("<:Point:609158713332334592> Nombre del servidor:", message.guild, true)
    .addField("👤 Propietari@:", message.guild.owner, true)
    .addField("📆 Fecha de Creación:", message.guild.createdAt, true)
    .addField("🆔 ID:", message.guild.id, true)
    .addField("🌎 Region del Servidor:", message.guild.region, true)
    .addField("👥 Miembros:", message.guild.memberCount, true)
    .addField("<:online:635777670864568320> Miembros Online:", message.guild.members.cache.filter(m => m.presence.status === 'online').size || "¡No hay nadie Online!", true) 
    .addField('<:Staff:634625948091809802> Roles', server.roles.cache.size, true)
    .addField("🎲  Canales de Texto & Voz:", message.guild.channels.cache.size, true)
    .addField("<a:Iddle:608808116011663391> Canal AFK:", message.guild.afkChannel || "¡No tiene canal de AFK configurado!", true)
    .addField("<a:Iddle:608808116011663391> Tiempo de AFK:", message.guild.afkTimeout + " segundos" || "¡No tiene canal de AFK configurado!", true)
    .addField("✅ Nivel/es de Verificación:", message.guild.verificationLevel, true)
    .addField("😎 Cantidad de Emojis:", message.guild.emojis.cache.size || "¡No tiene emojis!", true)  
  
  message.channel.send(embed)

  }}