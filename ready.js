const Discord = require("discord.js")
module.exports = async client => {

let servidores = client.guilds.cache.size.toLocaleString()
let usuarios = client.users.cache.size.toLocaleString()
let prefijo = process.env.PREFIX
const estados = ["Somos "+usuarios+" users", "Estoy en "+servidores+" servidores", "Usa "+prefijo+"help"]
console.log(client.user.tag+" ¡Está Listo! con "+usuarios+" Usuarios y "+servidores+" Servidores");
setInterval(function(){ 

client.user.setPresence({
  status: "online",
  browser: "DISCORD IOS",
  activity: {
    name: estados[Math.floor(Math.random() * estados.length)],
    type: 3
  }
});

  }, 5000)

setInterval(() => {
let canal = client.channels.cache.filter(c => c.name == "interchat-prueba");
const embed1 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("Recuerda respetar las Reglas de Xutur!\nPara Poder verlas usa `_reglas`")
.setColor("RED")

const embed2 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("Si ves a un usuario incumpliendo las reglas, reportalo con `_reportuser`")
.setColor("RED")

const embed3 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("Para ver mis **Actualizaciones Recientes** usa `_update`")
.setColor("RED")

const embed4 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("Para invitarme a tu servidor, usa `_invite`!!")
.setColor("RED")

const embed5 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("¿Tienes una sugerencia para mí?, usa `_sugerencia`")
.setColor("RED")

const embed6 = new Discord.MessageEmbed()
.setAuthor("Xutur Recordatorio", client.user.displayAvatarURL())
.setDescription("¿Viste algun fallo o bug mio?, usa `_reportbug`, para reportarlo!!")
.setColor("RED")

let embeds = [embed1, embed2, embed3, embed4, embed5, embed6]
let pito = embeds[Math.floor(Math.random() * embeds.length)]

canal.forEach(m => {
client.channels.resolve(m.id).send(pito)
 })
 }, 14400000)
}