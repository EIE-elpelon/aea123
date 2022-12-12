const superagent = require('superagent')
const Discord = require('discord.js')

module.exports = { 
    config: {
nombre: "covid-19",
alias: []
    },
  run: async (client, message, args, lang) => { 

let bot = client.user.username 
 let prefijo = process.env.PREFIX;
 let botavatar = client.user.avatarURL()

let pais = args[0]
if(!pais) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Covid.19', botavatar)
  .setDescription("**Escribe un pais!**")
  .addField("Ejemplo :","**"+prefijo+"covid.19** [nombre del pais]")
  .setColor("RANDOM")
     .setThumbnail("https://media.giphy.com/media/MCAFTO4btHOaiNRO1k/giphy.gif")
   .setFooter(message.author.tag)
   .setTimestamp())

superagent
.get(`https://corona.lmao.ninja/v2/countries/${pais}`)
.end((err,res) => {
  let body = res.body
  
  if(body.message) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Covid.19', botavatar)
  .setDescription("**Escribe un pais valido!**")
  .addField("Ejemplo :","**"+prefijo+"covid.19** [nombre del pais]")
  .setColor("RANDOM")
     .setThumbnail("https://media.giphy.com/media/MCAFTO4btHOaiNRO1k/giphy.gif")
   .setFooter(message.author.tag)
   .setTimestamp())

  
  var embed = new Discord.MessageEmbed()
  .setTitle('<a:nocxd:717585193417834526> Casos de COVID-19 en: '+pais)
  .addField('<:advertencia:715405630432608338>Casos Totales', `${body.cases}`, true)
  .addField("<a:advertencia:715405594424770560> Casos Criticos:", `${body.critical}`, true)
  .addField("<a:DownGif:670392977495162900> Casos de Hoy", `${body.todayCases}`, true)
  .addField("<a:dnd:608808102698942464> Muertes Totales:", `${body.deaths}`, true)
  .addField(":skull: Muertes de Hoy", `${body.todayDeaths}`, true)
  .addField("<a:ok:715405717561016400> Recuperados:", `${body.recovered}`, true)
  .setThumbnail("https://media.giphy.com/media/MCAFTO4btHOaiNRO1k/giphy.gif")
  .setFooter(message.author.tag)
  .setTimestamp(message.createdAt)

  message.channel.send(embed)
  
})
  }}