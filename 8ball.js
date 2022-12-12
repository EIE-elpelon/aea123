const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "8ball",
alias: []
    },
  run: async (client, message, args, lang) => {      
    
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let mensaje = args.join(" ")
  let prefijo = process.env.PREFIX;

  

var rpts = ["Es cierto.", 
            "Es decididamente así.", 
            "Sin duda.", 
            "Sí definitivamente.", 
            "Puedes confiar en ello.",
						"Como yo lo veo, sí",
						"Lo más probable.",
						"¡Claro!",
						"Sí.",
						"Las señales apuntan a que sí.",
						"Respuesta confusa, intenta otra vez.",
						"Pregunta de nuevo más tarde.",
						"Mejor no quiero decirte ahora.",
						"No se puede predecir ahora.",
						"Concéntrate y pregunta otra vez.",
						"No cuentes con ello.",
						"Mi respuesta es no.",
						"Mis fuentes dicen que no.",
						"La perspectiva no es tan buena.",
						"Muy dudoso."];

//var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí "," No "," ¡Por supuesto! "," Por supuesto que no "];
  
     const embed = new Discord.MessageEmbed()
    
   .setAuthor(bot+" ┊ 8ball", botavatar)
   .setDescription('**Para ver tu futuro debes enviar una pregunta!**')
   .addField("Ejemplo : ","**"+prefijo+"8ball** (pregunta)")
   .setFooter(message.author.tag)
   .setTimestamp()
   .setThumbnail("https://image.flaticon.com/icons/png/512/1482/premium/1482970.png")
   .setColor("RANDOM")
   if (!mensaje) return message.channel.send(embed)
    //message.channel.send(message.member.user+' a su pregunta `'+mensaje+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  const ballEmb = new Discord.MessageEmbed()

    .setAuthor(bot+" ┊ 8ball", botavatar)
    .addField('``❔`` Pregunta:', mensaje)
    .addField('``🌀`` Respuesta:', rpts[Math.floor(Math.random() * rpts.length)])
    .setColor("RANDOM")
    .setThumbnail("https://image.flaticon.com/icons/png/512/1482/premium/1482970.png")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
			message.channel.send({embed: ballEmb})
}}