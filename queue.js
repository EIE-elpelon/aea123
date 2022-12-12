const Discord = require('discord.js');
const moment = require("moment")
module.exports = {
    config: {
nombre: "queue",
alias: ["q", "cola", "lista"],
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

let queuexd = serverQueue.songs
queuexd.map((m, index) => m[index] = "**"+`${index+1}`+".-** "+ m.title + " `-` "+ "**" + m.author + "**").slice(0, 2).join("\n")
        let cantidad = 2
        let paginas = []

for(let i = 0; i < queuexd.length; i += 2){
  paginas.push(queuexd.slice(i, i+2))
}

     let time = Math.trunc(serverQueue.connection.dispatcher.streamTime / 1000)

if(!args[0]){
     return message.channel.send(new Discord.MessageEmbed()
     .setAuthor("Lista de canciones de "+message.guild.name, "https://cdn.discordapp.com/emojis/746943202829008977.gif?v=1")
     .setDescription(`${queuexd.map((m, index) => m[index] = "**"+`${index+1}`+".-** "+ m.title + " `-` "+ "**" + m.author + "**").slice(0, 2).join("\n")}\n\n${serverQueue.songs.length}/15 Canciones`)
     .setColor("RANDOM")
     .setThumbnail('https://cdn.discordapp.com/attachments/737021471406424115/747639277265092728/long-list.gif')
     .setTimestamp()
     .setFooter(`Página 1 de ${paginas.length}`))
}

let seleccion = parseInt(args[0])

 if(seleccion <= 0 || seleccion > paginas.length) return message.channel.send(new Discord.MessageEmbed()
 .setDescription("<:Cancel:635072844782370828> | La pagina `"+seleccion+"` No existe")
 .setColor('RED'))

  let number = parseInt(args[0])
    if (!number) return message.reply(new Discord.MessageEmbed()
    .setDescription("<:Cancel:635072844782370828> | Sólo Numeros!")
    .setColor('RED'))

     message.channel.send(new Discord.MessageEmbed()
     .setAuthor("Lista de canciones de "+message.guild.name, "https://cdn.discordapp.com/emojis/746943202829008977.gif?v=1")
     .setDescription(`${queuexd.map((m, index) => m[index] = "**"+`${index+1}`+".-** "+ m.title + " `-` "+ "**" + m.author + "**").join("\n")}\n\n${serverQueue.songs.length}/15 Canciones`)
     .setColor("RANDOM")
     .setThumbnail('https://cdn.discordapp.com/attachments/737021471406424115/747639277265092728/long-list.gif')
     .setTimestamp()
     .setFooter(`Página ${seleccion} de ${paginas.length}`))

}
}