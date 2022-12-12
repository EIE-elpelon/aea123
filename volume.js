const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "volume",
    alias: ["setvolume", "volumen"]
  },
 run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id)
const voicexd = message.member.voice.channel
if(!voicexd) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Debes unirte a un canal de voz")
.setColor("RED"))

if(serverQueue && serverQueue.voicexd.id !== message.member.voice.channel.id) {
message.channel.stopTyping()
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Ya me encuentro en otro canal de Voz!")
.setColor("RED"))
}

if(serverQueue && serverQueue.voicexd.id !== message.member.voice.channel.id) {
message.channel.stopTyping()
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Ya me encuentro en otro canal de Voz!")
.setColor("RED"))
}

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Escribe el volume a establecer de **1% a 200%**")
.setColor("RED"))

let volumen = parseInt(args[0])
if(!volumen) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Número invalido!")
.setColor("RED"))

const dispatcher = serverQueue.connection.dispatcher

if(volumen < 201){
  await dispatcher.setVolume(Math.min((dispatcher.volume = volumen / 50)))

message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:Verified:635075337100853260> | Volumen establecido a **${Math.round(dispatcher.volume*50)}%** Correctamente!`)
.setColor("GREEN"))

} else {

  message.channel.send(new Discord.MessageEmbed()
  .setDescription("<:Cancel:635072844782370828> | El volumen debe ser entre **1% a 200%**")
  .setColor("RED"))
}
  }
}