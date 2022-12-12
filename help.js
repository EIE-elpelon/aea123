const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "help",
alias: ["h"]
    },
  run: async (client, message, args, lang) => { 
  let bot = client.user.username
  let invite = "https://discordapp.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot"
  let servidores = client.guilds.cache.size.toLocaleString()
  let usuarios = client.users.cache.size.toLocaleString()
  let prefijo = process.env.PREFIX;
  let botavatar = client.user.avatarURL()
  let ayarikito = process.env.OWNER;

  const embed = new Discord.MessageEmbed()

  .setColor("#c51515")
  .setTimestamp()
  .setFooter("By "+ayarikito, botavatar)
  .setThumbnail(botavatar)
  .setAuthor(bot+" ┊ Help", botavatar)
  .setDescription("**"+bot+"** Actualmente es un bot verificado por la comunidad de discord y tambien un bot seguro con una gran variedad de comandos y facil de usar para cualquier persona en el cual estos bots sirven para mdoerar, divertirse, buscar, etc.")
  .addField("**"+bot+"** tiene actualmente:","**"+usuarios+"** Usuarios <a:GiveAway3:670392977117413416>")
  .addField("Y esta en :","**"+servidores+"** Servidores <a:GiveAway2:670392976278683679>")
  .addField("<a:verifiedxdxd:715405717561016400> ¿Buscas mis comandos?", "•Para ver todos mis comandos usa: ``_comandos``")
  .addField("<:Info:608779678093803530> ¿Buscas informacion de mi?", "•Para ver informacion de mi en general usa: ``_infobot``")
  .addField("<a:Beer:719552210790252594> ¿Quieres ser **VIP**?", "•Para saber como tener **VIP** usa: ``_vip``")
  .addField("<a:HypeSquad2:670392975410462720> ¿Quieres invitar el bot o entrar a nuestro servidor de soporte?", "•Para entrar a nuestro servidor de soporte o invitar el bot usa: ``_invite``")
  .addField("<a:dnd:608808102698942464> ¿Encontrastes un bug o un fallo en el bot?", "•Para reportar un bug usa: ``_reportbug``")
  .addField("<a:On:608808102606798848> ¿Quieres darnos una sugerencia?", "•Para darnos tu sugerencia usa: ``_sugerencia``")
  //.addField('-----------------------------------------------------------------------------',
            //'**-----------------------------------------------------------------------------**')
  
  message.channel.send(embed)
  
}}