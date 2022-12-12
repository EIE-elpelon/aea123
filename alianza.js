const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "alianza",
alias: []
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
  .setAuthor("Buscas un bot facil de usar y organizado?")
  .setDescription("Pues Xutur es la mejor eleccion, un bot con muchos comandos y variacion de ellos en el cual puede ser usado de muchas maneras tanto para moderar como para divertirse")
  .addField("⚠️ 100% Comunidad no toxica","•Xutur tiene una comunidad no toxica gracias a los comandos del mismo bot y de los admins.")
  .addField("😂 100% Activo y divertido", "•Xutur te ofrece una gran variedad de comandos tanto para divertirse solo o con amigos")
  .addField("<a:settings:670392976614096899> 100% Sistema de moderacion facil de usar", "•Xutur puede ayudarte en sistema de logs y tambien evitar toxicos y spam con solo un comando")
  .addField("<a:Loading:670392975372582932> Constantes actualizaciones", "•El bot recibe actualizacioes contantemente para tener un bot fresco.")
  .addField("<:enlace:660397361024991259> Invites", '[[Invítame]]('+invite+') ┊ [[Server Support]](https://discord.gg/nQZMzFh)')
  message.channel.send(embed)
  message.delete()
}}