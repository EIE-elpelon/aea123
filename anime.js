const Discord = require("discord.js")
const malScraper = require('mal-scraper')
let translate = require('google-translate-api');

module.exports = { 
    config: {
nombre: "anime",
alias: []
    },
  run: async (client, message, args, lang) => {     
    
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
    const search = args.join(' ')
  
    if (!args.join(" ")) return message.channel.send( new Discord.MessageEmbed()
                                                     
   .setAuthor(bot+' ┊ Anime', botavatar)
  .setDescription("**Escribe el anime que quieres buscar!**")
  .addField("Ejemplo :", "**"+prefijo+"anime** (anime)")
  .setThumbnail("https://i.pinimg.com/originals/ed/e3/7f/ede37f0f8ed12306b61eb24538be8ed2.gif")
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp())
  
  const dembed = new Discord.MessageEmbed()
  .setAuthor('🔰Buscando el anime "' + args.join(' ') + '"',"https://i.imgur.com/EwVXYmf.gif")
  .setDescription("Por favor, espera mientras busco la informacion del anime que pediste")
  .setThumbnail('https://cdn.dribbble.com/users/483592/screenshots/2402509/blue-2.gif')
  .setColor("RANDOM")
  
  
message.channel.send(dembed).then(m => {
  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      
      .setAuthor(bot+' ┊ Anime', botavatar)
      .setDescription("Informacion del Anime que buscaste!")
      .addField("``🔎`` Resultado de tu Busqueda **" + args.join(' ') + "**", "** **")
      .addField('``🎌`` Título en Japonés', data.japaneseTitle, true)
      .addField('``📅`` Fecha de transmisión', data.aired, true)
      .addField("** **", "** **")
      .addField('``📺`` Tipo', " " + data.type, true)
      .addField('``🔞`` Edad', data.rating, true)
      .addField("** **", "** **")
      .addField("``🌀`` Género", data.genres, true)
      .addField('``💾`` Capítulos', data.episodes, true)
      .addField("** **", "** **")
      .addField('``🌟`` Calificación Media', data.score, true)
      .addField('``✨`` Calificaciones Totales', data.scoreStats, true)
      .setThumbnail(data.picture)
      .addField("** **", "** **")
      .addField('``📲`` Ver Anime', '[» Click Aquí «](' + data.url + ')', true)
      .addField("``📟`` Trailer del Anime", data.trailer || "¡No hay ningún trailer disponible!" , true)
      .setColor("RANDOM")
      .setFooter(message.author.tag)
      .setTimestamp(message.createdAt)

      m.edit(malEmbed);
    


}).catch((err) => {
    const error = new Discord.MessageEmbed()
    .setAuthor("🔰Anime")
    .setDescription('<:Cancel:635072844782370828> | Lo siento **' + message.author.tag + "** pero no hay resultado para el Anime  **" + args.join(' ') + "** el nombre esta mal o no existe")
    .setThumbnail("https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif")
    .setColor('#ff0000')
    m.edit(error)
}) 
});  

}}