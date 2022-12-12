const Discord = require('discord.js');
module.exports = {
    config: {
nombre: "resume",
alias: ["resumir", "reanudar"],
descripcion: ""
    },
run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id);
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

if(serverQueue.playing)
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> |  La música ya se encuentra en Reproducción!")
.setColor('RED'))

serverQueue.playing = true;
await serverQueue.connection.dispatcher.resume();
message.channel.send(new Discord.MessageEmbed()("<:Verified:635075337100853260> | La **queue** sigue en reproducción!")
.setDescription('')
.setColor('GREEN'))
}
}