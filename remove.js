const Discord = require('discord.js');
module.exports = {
    config: {
nombre: "remove",
alias: ["remover"],
descripcion: ""
    },
run: async (client, message, args, lang, queue) => {
  let serverQueue = queue.get(message.guild.id)
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
.setDescription("<:Cancel:635072844782370828> | Escribe el número de la canción a remover, puedes verlo en el comando `queue`")
.setColor('RED'))
let number = parseInt(args[0])

if(!number) return message.reply(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Sólo números!")
.setColor('RED'))

if(args[0] === "1") return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | No puedes remover la canción que se está reproduciendo, usa el comando `skip`")
.setColor('RED'))

if(args[0] < 1) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Número `" +args[0]+ "` Invalido!")
.setColor('RED'))
if(serverQueue.songs.length < number) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Número `" +args[0]+ "` Invalido!")
.setColor('RED'))
message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:Verified:635075337100853260> | La canción **#${number}** ha sido removida de la **queue**`)
.setColor("GREEN"))

const removesong = number - 1
serverQueue.songs.splice(removesong, 1)
}
}