module.exports = async (client, guild) => {
const Discord = require("discord.js")
const db = require("megadb")
  let logs = new db.crearDB('setlogs', 'sets') 
let ax = new db.crearDB('antitoxicos', 'sets') 
let welcome = new db.crearDB("setwelcome", "welcomeleave");
let welcomeimagen = new db.crearDB("setwelcomeimg", "welcomeleave");  
let leave = new db.crearDB("setleave", "welcomeleave");
let leaveimagen = new db.crearDB("setleaveimg", "welcomeleave");
let antilinks = new db.crearDB('antilinks', 'sets') 
let welcomerole = new db.crearDB('setwelcomerole', 'welcomeleave')   


welcomerole.eliminar(`${guild.id}`)
antilinks.eliminar(`${guild.id}`)
leave.eliminar(`${guild.id}`)
leaveimagen.eliminar(`${guild.id}`)
welcomeimagen.eliminar(`${guild.id}`)
welcome.eliminar(`${guild.id}`)
ax.eliminar(`${guild.id}`)
logs.eliminar(`${guild.id}`)
  
let canal = client.channels.resolve("710256135046692924")
canal.send(new Discord.MessageEmbed()
.setTitle("Me han sacado de un servidor")
.addField("Miembros:", guild.memberCount, true)
.addField("Nombre:", guild.name, true)
.addField("ID:", guild.id, true)
.setThumbnail(guild.iconURL())
.addField("Owner:", guild.owner.user.tag, true)
.addField("Ahora tenemos:", client.guilds.cache.size.toLocaleString()+" servidores :(", true)
.setColor("#5b00ff"))

}