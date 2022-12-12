const Discord = require('discord.js');
module.exports = {
    config: {
nombre: "loop",
alias: [],
descripcion: ""
    },
run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id);
const voicexd = message.member.voice.channel
if(!message.member.voice.channel) return message.reply(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Debes unirte a un **Canal de Voz**")
.setColor('RED'))

if(!serverQueue) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | La queue esta vacia")
.setColor('RED'))

if(serverQueue && serverQueue.voicexd.id !== message.member.voice.channel.id) {
message.channel.stopTyping()
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Ya me encuentro en otro canal de Voz!")
.setColor("RED"))
}

if(!serverQueue.loop){
serverQueue.loop = true
return serverQueue.textChannel.send(new Discord.MessageEmbed()
.setDescription("<:Verified:635075337100853260> | La repetición de canciones a sido activado.")
.setColor('GREEN'))

} else {

serverQueue.loop = false
return serverQueue.textChannel.send(new Discord.MessageEmbed()
.setDescription("<:Verified:635075337100853260> | La repetición de canciones a sido desactivado.")
.setColor('GREEN'))
}
}
}