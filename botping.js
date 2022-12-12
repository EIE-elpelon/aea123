const Discord = require("discord.js");
module.exports = { 
    config: {
nombre: "botping",
alias: []
    },
  run: async (client, message, args, lang) => { 
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
const embed = new Discord.MessageEmbed()
      .setColor("#5b00ff")
      .setTimestamp()
	    .setFooter("Solicitado por "+message.author.username, message.author.avatarURL())
      .setAuthor(bot+" ┊ Botping", botavatar)
      .setDescription("**Comprueba la latencia del bot de la API de Discord!** ``📡``")
      .addField("Ping:", "Actualmente la conexión con la API de Discord es de **" + `${Math.round(message.client.ws.ping)}` + "** ms")
      .setThumbnail("https://support.discordapp.com/hc/en-us/article_attachments/206303208/eJwVyksOwiAQANC7sJfp8Ke7Lt15A0MoUpJWGmZcGe-ubl_eW7zGLmaxMZ80A6yNch-rJO4j1SJr73Uv6Wwkcz8gMae8HeXJBOjC5NEap42dokUX_4SotI8GVfBaYYDldr3n3y_jomRtD_H5ArCeI9g.zGz1JSL-9DXgpkX_SkmMDM8NWGg.gif")

message.channel.send(embed)

            
}}