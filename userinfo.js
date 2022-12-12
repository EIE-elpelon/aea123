const Discord = require("discord.js")
const moment = require("moment");
module.exports = { 
    config: {
nombre: "userinfo",
alias: []
    },
  run: async (client, message, args, lang) => {      
  let bot = client.user.username
  let botavatar = client.user.avatarURL  ()
  let user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author
  const member = message.guild.member(user)
  let estadouser = { 
   
   "online":"<a:On:608808102606798848>   Online",
   "idle":"<a:Iddle:608808116011663391>  Ausente",
   "dnd":"<a:dnd:608808102698942464>  No Molestar",
   "invisible":"<a:Off:608808102719914010>  Invisible/Desconectado",
 } 
   
let badges = {
  DISCORD_EMPLOYEE: "<:Staff:634625948091809802> `->` Staff de Discord",
  DISCORD_PARTNER: "<:Partner:634625480879898625> `->` Partner",
  HYPESQUAD_EVENTS: "<:HypeSquad:634624337768611861> `->` HypeSquad Eventos",
  BUGHUNTER_LEVEL_1: "<:Bughunter:634622408615133204> `->` Big Hunter **(Nivel 1)**",
  HOUSE_BRAVERY: "<:Bravery:634624483000320000> `->` HypeSquad Bravery",
  HOUSE_BRILLIANCE: "<:Brilliance:634624601002868747> `->` HypeSquad Brillance",
  HOUSE_BALANCE: "<:Balance:634624538788888577> `->` HypeSquad Balance",
  EARLY_SUPPORTER: "<:EarlySupporter:634623050087923712> `->` Partidiario Inicial",
  BUGHUNTER_LEVEL_2: "`->` Big Hunter **(Nivel 2)**",
  VERIFIED_BOT: "<:BotVerified:735402711641489409> `->` Bot Verificado",
  VERIFIED_DEVELOPER: "<:Developer:699640923235287151> `->` Desarrollador de Bots Verificado"
}

const embed = new Discord.MessageEmbed() // Es para traducir
 
    .setColor("#c51515")    
    .setTimestamp()
    .setFooter ("Solicitado por "+message.author.username, message.author.avatarURL())
    .setThumbnail(user.avatarURL({dynamic: true}))
    .setAuthor(bot+" ┊ Userinfo", botavatar)
    .setTitle("Info de "+user.username)
    .addField('🤠 Nombre', user.username, true)
    .addField('📟 Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
    .addField('🆔 ID', user.id, true)
    .addField("🤖 ¿Es un BOT?", `${user.bot ? 'Si' : 'No'}`, true)
    .addField("🙎‍♂️ Url del Avatar", `[Avatar](${user.avatarURL()})`, true)
    .addField('☠ Apodo', member.nickname != null ? member.nickname : "No tiene alias.", true)
    .addField('📆 Cuenta Creada', user.createdAt.toDateString(), true)
    .addField('🗓 Fecha de Ingreso', member.joinedAt.toDateString(), true) 
    .addField('🚩 Roles', member.roles.cache.map(roles => `\`${roles.name}\``).join(', '), true) 
    .addField("🏅 Badges", user.flags.toArray().length > 0 ? user.flags.toArray().map(flag => badges[flag]) : "No tiene badges", true)
    .addField("💡 Estado", user.presence.activities.find(x => x.type === 'CUSTOM_STATUS') ? user.presence.activities.find(x => x.type === 'CUSTOM_STATUS').state : 'No tiene estado Personalizado', true)

//ke es el url 
  //url es el enlace weon
// console.log(user.flags.length > 0 ? user.flags.map(flag => badges[flag]) : "No tiene badges")

  message.channel.send(embed)
}}
