module.exports = { 
    config: {
nombre: "osu",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
    
const Discord = require ('discord.js')
const color = 'RANDOM';
const osu = require('node-osu');
const api = new osu.Api("6f55a47fd3af51e5efa1046a50697503442df67b" , {
    notFoundAsError: true,
    completeScores: false 
})

  let username = args[0]
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let texto = args.join(" "); 
    
  if (!args[0]) 
    var uwu = new Discord.MessageEmbed()
   .setAuthor(bot+' ┊ Osu', botavatar)
   .setDescription("**Necesitas escribir el nombre de usuario que quieres ver!**")
   .addField("Ejemplo :","**"+prefijo+"osu** [nombre del user]")
   .setColor("RANDOM")
   .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/e/e3/Osulogo.png")
   .setFooter(message.author.tag)
   .setTimestamp()
    
    
 if(!texto)  return message.channel.send(uwu)
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Osu', botavatar)
  .setDescription("Este es el perfil de **" + user.name + "** en Osu del usuario!")
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor(color)
  .addField('``💬`` | Nombre', user.name, true)
  .addField('``🔷`` | PP', Math.round(user.pp.raw), true)
  .addField('``🏆`` | Rank', user.pp.rank, true)
  .addField('``🆙`` | Nivel', Math.round(user.level), true)
  .addField('``🌁`` | Pais', user.country, true)
  .addField('``🏰`` | Ranking De Ciudad', user.pp.countryRank, true)
  .addField('``📟`` | Cuenta De Juego', user.counts.plays, true)
  .addField('``🎯`` | Puntería', `${user.accuracyFormatted}`, true)
  .setFooter(message.author.tag)
  .setTimestamp()
  message.channel.send(embed)
  
})

}
}