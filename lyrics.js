const Discord = require("discord.js");

module.exports = { 
    config: {
nombre: "lyrics",
alias: []
    },
  run: async (client, message, args, lang) => { 
    let musica = args.slice(0).join('+');

  let link = `https://www.musica.com/letras.asp?q=` + musica;
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
          const error1 = new Discord.MessageEmbed()
   .setAuthor(bot+' ┊ Lyrics', botavatar)
   .setDescription("**Necesitas escribir el nombre de una canción para ver su letra!**")
   .addField("Ejemplo :","**"+prefijo+"lyrics** [nombre de la canción]")
   .setColor("RANDOM")
   .setThumbnail("https://image.flaticon.com/icons/png/512/122/122320.png")
   .setFooter(message.author.tag)
   .setTimestamp()
  
if(!musica)return message.channel.send(error1)
  
        if(!link)return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Ha habido un problema al buscar las letras de esa canción")
                                              .setColor("RED"))  
    
        let embed = new Discord.MessageEmbed()
	
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(bot+' ┊ Lyrics', botavatar)
    .setDescription("En el enlace esta la letra de la canción que buscaste!")
    .setFooter(message.author.tag)
    .setTimestamp()
    .setThumbnail("https://image.flaticon.com/icons/png/512/122/122320.png")
  	.addField("``🎵`` | Canción:", `${args.slice(0).join(' ')}`, true)
    .addField('``📎`` | Link:', `${link}`, true)
          
	message.channel.send(embed);
  
}}