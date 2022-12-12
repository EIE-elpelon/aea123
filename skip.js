const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = {
    config: {
nombre: "skip",
alias: ["skipear"],
descripcion: ""
    },
run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id);
const voicexd = message.member.voice.channel
if(!serverQueue) return message.channel.send(new Discord.MessageEmbed()
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

await serverQueue.connection.dispatcher.end()
message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:Verified:635075337100853260> | Música skipeada correctamente por **${message.author.tag}**`)
.setColor('GREEN'))

}
}