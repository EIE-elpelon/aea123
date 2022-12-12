const Discord = require('discord.js');
module.exports = {
    config: {
nombre: "disconnect",
alias: ["desconectar", "leave", "quit"]
},
run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id)
const voicexd = message.member.voice.channel
if(!message.member.voice.channel) return message.reply("Debes unirte a un **Canal de Voz**")

if(serverQueue && serverQueue.voicexd.id !== message.member.voice.channel.id) {
message.channel.stopTyping()
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Ya me encuentro en otro canal de Voz!")
.setColor("RED"))
}

serverQueue.songs = [];
await serverQueue.connection.dispatcher.end();
message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Verified:635075337100853260> | Desconectado del canal de voz `" + serverQueue.voicexd.name + "` Correctamente! ")
.setColor('GREEN'))

}
}