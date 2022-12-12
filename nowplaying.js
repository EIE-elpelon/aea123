const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")
module.exports = {
    config: {
nombre: "nowplaying",
alias: ["np", "now", "nowp"],
descripcion: ""
    },
run: async (client, message, args, lang, queue) => {
const serverQueue = queue.get(message.guild.id);
const voicexd = message.member.voice.channel
if(!message.member.voice.channel) return message.reply(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Debes unirte a un **Canal de Voz**")
.setColor('RED'))

if(!serverQueue) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | La **queue** se encuentra vacia")
.setColor('RED'))

if(serverQueue && serverQueue.voicexd.id !== message.member.voice.channel.id) {
message.channel.stopTyping()
return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Ya me encuentro en otro canal de Voz!")
.setColor("RED"))
}

message.channel.send(new Discord.MessageEmbed()
.setAuthor("Reproduciendo ahora", client.user.avatarURL())
.setDescription(`<a:discomusic:746943202829008977> **Música:** ${serverQueue.songs[0].title}\n⏰ **Duración:** ${moment.duration(serverQueue.connection.dispatcher.streamTime + (serverQueue.songs[0].seektime * 1000), "ms").format()} `+ "`-`" + ` ${serverQueue.songs[0].duracion}\n<a:loading:746569619757727805> **Puesta por:** ${serverQueue.songs[0].author}`)
.setThumbnail('https://cdn.discordapp.com/attachments/748732784100507758/748737335969054901/giphy.gif')
.setColor("RANDOM")

.setFooter(message.author.username, message.author.avatarURL())
.setTimestamp()).catch(e => {
  console.log(e)
  return;
})
}
}