const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = { 
    config: {
nombre: "clima",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (result === undefined || result.length === 0) { return message.channel.send( new Discord.MessageEmbed()
                                                                                     
  .setAuthor(bot+' ┊ Clima', botavatar)
  .setDescription("**Escribe el nombre de una Ciudad o País y te dire el tiempo que hace allí!**")
  .addField("Ejemplo :", "**"+prefijo+"clima** (país o ciudad)")
  .setThumbnail("https://image.flaticon.com/icons/png/512/129/129023.png")
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp())
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.MessageEmbed()
          .setAuthor(bot+' ┊ Clima', botavatar)
          .setDescription("**Mira el Clima que hace ahora!**")
          .addField(` Tiempo para **${current.observationpoint}**`, `Ahora mismo está **${current.skytext}**`)
          .setColor("RANDOM")
          .addField('``🔭`` Coordenadas',`${location.lat},`+` ${location.long}`, true)
          .addField('``🌎`` Zona Horaria',`UTC${location.timezone}`, true)
          .addField('``🌡️`` Temperatura',`${current.temperature} Grados`, true)
          .addField('``📡`` Tipo de Grado',`Grado Celsius (ºC) `, true)
          .addField('``📅`` Fecha',`${current.date}` + ` ${current.shortday}`, true)
          .addField('``➰`` Vientos',current.winddisplay, true)
          .addField('``⛲️`` Humedad', `${current.humidity}%`, true)
          .setFooter(message.author.tag)
          .setTimestamp()
          .setThumbnail("https://image.flaticon.com/icons/png/512/129/129023.png")
          message.channel.send({embed});
  })
  
}}