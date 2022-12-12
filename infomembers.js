const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "infomembers",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
 let bot = client.user.username
 let botavatar = client.user.avatarURL() 
 let estadouser = {
   
   
   "online":"<a:On:608808102606798848>", //pon un emoji <:emojis:id123123213>
   "idle":"<a:iddle:608808116011663391>",
   "dnd":"<a:dnd:608808102698942464>",
   "invisible":"<a:Off:608808102719914010>",
 } 
 
 const embed = new Discord.MessageEmbed()
 .setColor("#c51515")
 .setTimestamp()
 .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)
 .setThumbnail("https://cdn.discordapp.com/attachments/686422460744204332/727021898319265815/5cc15dfcae5a1_1.png")
 .setAuthor(bot+' ┊ Infomembers', client.user.avatarURL)
 .addField('👥 **__Miembros__**', `**${message.guild.memberCount}**` + " **Miembros en Total**", true)
 .addField("**__Estados de miembros__**", `**${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** Online <a:On:608808102606798848>  \n **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** Idle <a:iddle:608808116011663391>  \n **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** Dnd  <a:dnd:608808102698942464> \n **${message.guild.members.cache.filter(o => o.presence.status === 'offline').size}** Offline <a:Off:608808102719914010> `)
 
 message.channel.send(embed);
  
}}