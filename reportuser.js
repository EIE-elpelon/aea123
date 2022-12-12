const Discord = require("discord.js");
module.exports = { 
    config: {
nombre: "reportuser",
alias: []
    },
  run: async (client, message, args, lang) => {      
    
    let channel = client.channels.resolve("734966229839904797");
  let user = message.author;

    let imagen = args[0]
    let reporte = args.slice(1).join(" ")

const no_imagen = new Discord.MessageEmbed()
.setDescription("Escribe el link de la imagen del usuario\n\n`Ejemplo de uso:` **_reportuser https://i.imgur.com/eLRNmHt.png Prueba**")
.setColor("RED")
    if(!imagen) return message.channel.send(no_imagen)
      const chupame_la_verga_Velgaxd = new Discord.MessageEmbed()
  .setDescription("¡Al parecer el Link que colocaste es invalido!\n Escribe el link de la imagen del usuario\n\n`Ejemplo de uso:` **_reportuser https://i.imgur.com/eLRNmHt.png Prueba** ")
  .setColor("RED")
    if(!message.content.includes("https"))
      return message.channel.send(chupame_la_verga_Velgaxd) 

    const no_reporte = new Discord.MessageEmbed()
.setDescription("Escribe el reporte del user\n\n`Ejemplo de uso:` **_reportuser https://i.imgur.com/eLRNmHt.png Prueba**")
.setColor("RED")
if(!reporte) return message.channel.send(no_reporte)

    
var server = message.guild;


  const embed = new Discord.MessageEmbed()
    .setAuthor("Reporte Proveniente del Servidor "+ message.guild.name, message.guild.iconURL())
    .addField("Reporte:", reporte)
    .addField("Imagen:", imagen) 
    .setImage(imagen)
    .setColor("RANDOM")
    .addField(`<a:dnd:608808102698942464> Reporte de:`, `${message.author.tag} - (${message.author.id} -  [${message.author}]`) //Taba pendejo :v
    .setThumbnail(message.author.avatarURL())
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
  channel.send(embed).then(async function(message) {
    message.react("✅").then(() => 
                                                       message.react("❎"), 20000);
    
    
  })
  message.channel.send(new Discord.MessageEmbed()
                       .setDescription("<:Verified:635075337100853260> | Reporte enviado con éxito")
                       .setColor("GREEN"))
    
  }}