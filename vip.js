const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "vip",
alias: []
    },
  run: async (client, message, args, lang) => {  
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let ayarikito = process.env.OWNER;
    let prefijo = process.env.PREFIX;

    const embed = new Discord.MessageEmbed()

  .setColor("#c51515")
  .setTimestamp()
  .setFooter("By "+ayarikito, botavatar)
  .setThumbnail("https://image.flaticon.com/icons/png/512/1968/1968781.png")
  .setAuthor(bot+" ┊ VIP", botavatar)
  .setDescription("Aquí tienes las formas de conseguir VIP de diferentes maneras te lo dejare aquí abajo.")
  .addField("1.- <a:Money:670392976232546305> Donación", "**0,50$/1€**")
  .addField("2.- <:Boostlvl4:634627131409694720> Boost", "**1 Boost Server**")
  .addField("3.- <:Developer:699640923235287151> Donacion de codes", "**Dar códigos que el bot no tenía anteriormente**")
  .addField("<a:nocxd:717585193417834526> Ventajas:", "Todos los comandos en el comando **"+prefijo+"comandos** que tengan (vip) en el nombre son comandos que solo los VIP pueden usar")
    
    message.channel.send(embed)
    
    
    
    
    
  }}