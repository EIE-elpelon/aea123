const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const ytsr = require("ytsr");

module.exports = {
    config: {
nombre: "play",
alias: ["reproducir","p"]
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

const permisosxd = voicexd.permissionsFor(message.client.user)
if(!permisosxd.has("CONNECT")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | No tengo permisos para conectarme a un canal de voz")
.setColor("RED"))  


if(!permisosxd.has("SPEAK")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | No tengo permisos para conectarme a un canal de voz")
.setColor("RED"))

if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("<:Cancel:635072844782370828> | Escribe la musica que quieres buscar en youtubeo pon una URL")
.setColor("RED"))

 message.channel.send(new Discord.MessageEmbed()
 .setDescription("🔎 Buscando la canción `" + args.join(" ") + "` <:youtubeicon:746569571376562186>")
 .setColor("GREEN"))

let filter1;
const filters = await ytsr.getFilters(args.join(" "))

filter1 = filters.get("Type").find(o => o.name === "Video")
let options = {
limit: 50,
nextpageRef: filter1.ref
}

const searchResults = await ytsr(null, options);
if(!searchResults) {
  message.channel.stopTyping()
  return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:Cancel:635072844782370828> | No he podido encontrar la canción **${args.join(" ")}**`)
.setColor("RED"))
}
if(!searchResults.items[0]) {
  message.channel.stopTyping()
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<:Cancel:635072844782370828> | No he podido encontrar la canción **${args.join(" ")}**`)
.setColor("RED"))
}

  message.channel.startTyping()

 let i = 0;
  let data = await ytdl.getInfo(searchResults.items[i].link)

const song = {
    title: searchResults.items[i].title,
    url: searchResults.items[i].link,
    author: message.author.tag,
    visitas: parseInt(searchResults.items[i].views),
    duracion: searchResults.items[i].duration,
    thumbnail: searchResults.items[i].thumbnail,
    canal: searchResults.items[i].author.name,
    likes: parseInt(data.videoDetails.likes),
    dislikes: parseInt(data.videoDetails.dislikes),
    seektime: 0
  }

if(!serverQueue){
const queueObject = {
 textChannel: message.channel,
 voicexd: voicexd,
 connection: null,
 songs: [],
 volume: 5,
 playing: true,
 loop: false
}

  queue.set(message.guild.id, queueObject)
  queueObject.songs.push(song)
   var connection = await voicexd.join()
  queueObject.connection = connection;
    message.channel.stopTyping()
try {
  message.guild.me.voice.setDeaf(true)
    message.channel.stopTyping()
  play(message.guild, queueObject.songs[0])

} catch(err) {
  queue.delete(message.guild.id)
  console.log(err)
    message.channel.stopTyping()
  return message.channel.send("Ha ocurrido un error al conectarme al canal de voz! ⚠️")
}

} else {

    serverQueue.songs.push(song)
      message.channel.stopTyping()
    return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`La canción **${song.title}**.\n- A sido añadida a la queue`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`Agregada por ${message.author.tag}`))
}


async function play(guild, song) {
const serverQueue = queue.get(guild.id);

if (!song) {
  serverQueue.voicexd.leave();
  queue.delete(guild.id);
  serverQueue.textChannel.stopTyping()
  return serverQueue.textChannel.send(new Discord.MessageEmbed()
  .setDescription("La **queue** a concluido")
  .setColor('GREEN'))
 }

const dispatcher = serverQueue.connection.play(ytdl(song.url, { filter: "audioonly", highWaterMark: 1 << 25 }))
.on("finish", async () => {
 let cancion = serverQueue.songs.shift();
if(serverQueue.loop){ 
  serverQueue.songs.push(cancion)
}

await play(guild, serverQueue.songs[0]);
})
.on("error", error => {
  console.log(error)
  return serverQueue.textChannel.send(new Discord.MessageEmbed()
  .setDescription("Música no encontrada!")
  .setColor('RED'))
  serverQueue.textChannel.stopTyping()
})

dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(new Discord.MessageEmbed()
.setTitle(song.title)
.setURL(song.url)
.setAuthor("Reproduciendo ahora", "https://cdn.discordapp.com/emojis/746943202829008977.gif?v=1")
.addField("⏰ Duración", song.duracion, true)
.addField("👥 Visitas", song.visitas.toLocaleString()  != null ? song.visitas.toLocaleString(): "Error", true)
.addField("🔰 Canal", song.canal, true)
.addField("👍 Likes", song.likes.toLocaleString() != null ? song.likes.toLocaleString(): "Error", true)
.addField("👎 DisLikes", song.dislikes.toLocaleString() != null ? song.dislikes.toLocaleString(): "Error", true)
.setThumbnail(song.thumbnail)
.setColor("GREEN"))
  serverQueue.textChannel.stopTyping()
}
}
}