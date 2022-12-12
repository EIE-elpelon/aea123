const { Canvas } = require('canvas');
const { createCanvas, loadImage } = require("canvas")
const snekfetch = require('snekfetch');
const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "prueba",
alias: []
    },
  run: async (client, message, args, lang) => { 
/*const server = client.guilds.resolve("605148508911042602")
Canvas.registerFont('Plunge.ttf', { family: 'Plunge' })
Canvas.registerFont('arial.ttf', { family: 'Arial' })
Canvas.registerFont('arial-bold.ttf', { family: 'Arial Bold' })
const totales = parseInt(message.guild.members.cache.filter(u => u.presence.status == "online").size) + parseInt(message.guild.members.cache.filter(u => u.presence.status == "dnd").size) + parseInt(message.guild.members.cache.filter(u => u.presence.status == "idle").size) + parseInt(message.guild.members.cache.filter(u => u.presence.status == "streaming").size)

  const canvas = Canvas.createCanvas(393, 74)
    const ctx = canvas.getContext("2d");
    const { body: b } = await snekfetch.get(
      "https://images-ext-1.discordapp.net/external/2JrqcK9-pWUlheQhJNssEHy3sP56VbNIcgG7_PE1tWc/https/i.imgur.com/aYwBwj6.png"
    );

    const fondo = await Canvas.loadImage(b);
    ctx.drawImage(fondo, 0, 0, 393, 74);

    ctx.font = "12px Arial Bold"
    ctx.fillStyle = "#AFB6B1";
    ctx.fillText(`${totales.toLocaleString()} conectados`, 84, 54);


    ctx.font = "12px Arial Bold"
    ctx.fillStyle = "#AFB6B1";
    ctx.fillText(`${message.guild.members.cache.size.toLocaleString()} miembros totales`, 184, 54)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "archivo.png"); //creamos un attachment.

message.channel.send(new Discord.MessageEmbed()
.setAuthor("Usuarios de la Aldea de Misa!", client.user.avatarURL())
  .setDescription(`ðŸ‘¤ **Miembros**: ${message.guild.members.cache.filter(xd => !xd.user.bot).size}\n<:bot:743288511582437429> **Bots**: ${message.guild.members.cache.filter(xd => xd.user.bot).size}\n<:usersxd:743288506020921414> **Miembros Totales**: ${message.guild.members.cache.size.toLocaleString()}\n<a:online:742934011130806292> **Online**: ${message.guild.members.cache.filter(u => u.presence.status == "online").size}\n<a:dnd:742933998501625917> **No Molestar**: ${message.guild.members.cache.filter(u => u.presence.status == "dnd").size}\n<a:idle:742933968084664340> **Ausente**: ${message.guild.members.cache.filter(u => u.presence.status == "idle").size}\n<a:streaming:742934010828947478> **Stremeando**: ${message.guild.members.cache.filter(u => u.presence.status == "streaming").size}\n<a:offline:742934010023641178> **Desconectado**: ${message.guild.members.cache.filter(u => u.presence.status == "offline").size}`)
  .setColor("GREEN")
  .setThumbnail("https://cdn.discordapp.com/avatars/607620224732102717/fa06ec2543dc09880354688dce86f42a.webp")
  .setTimestamp()
  .setFooter("Server Y BOT hecho por EIE#7444")
  .attachFiles(attachment)
   .setImage("attachment://archivo.png")
  .setColor("GREEN"))*/


/*const Zeew = require('zeew');
let wel = new Zeew.Bienvenida()
.token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzZXJuYW1lIjoi5LmH776J5LmHIiwiaWREaXNjb3JkIjoiNjA3NjIwMjI0NzMyMTAyNzE3In0sImlhdCI6MTU5NTQ2MTk3NX0.4JmEjaBJiuqV1iHSiw0UVKT007egFxFqVmZKSCA6sDs")
.estilo("classic")
.avatar(member.user.displayAvatarURL({format: "png"}))
.fondo(imagen)
.colorTit("#fff")
.titulo(`Bienvenido a ${member.guild.name}, ${member.user.tag}`)
.colorDesc("#fff")
.descripcion(`¡Disfruta tu estadía en el Servidor!`)
 
let img = await Zeew.WelcomeZeew(wel)*/

const db = require("megadb")
let welcome_db = new db.crearDB("setwelcome", "welcomeleave");
let imagen_db = new db.crearDB("setwelcomeimg", "welcomeleave");
if(!welcome_db.tiene(`${message.guild.id}`)) return;
if(!imagen_db.tiene(message.guild.id)) return;
let fondo = await imagen_db.obtener(`${message.guild.id}`)
let welcome = await welcome_db.obtener(`${message.guild.id}`);
if (!welcome_db.tiene(`${message.guild.id}`)) return;
const canalrendered = message.guild.channels.resolve(welcome)

const Canvas = require("canvas")
const canvas = Canvas.createCanvas(800, 360)
const ctx = canvas.getContext("2d")
const background = await Canvas.loadImage(fondo)
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
Canvas.registerFont("verdana.ttf", {family: "Verdana"})

ctx.font = "26px Verdana"
ctx.fillStyle = "#fff"
ctx.textAlign = "center"
ctx.textBaselin = "hanging"
ctx.fillText(`Bienvenido a ${message.guild.name}, ${message.author.tag}`, canvas.width/2, 300)

ctx.font = "22px Verdana"
ctx.fillStyle = "#fff"
ctx.textAlign = "center"
ctx.textBaselin = "hanging"
ctx.fillText(`¡Disfruta tu estadía en el Servidor!`, canvas.width/2, 333)

const y= 100, radio= 85, x=canvas.width/2-radio

ctx.beginPath()
ctx.arc(x+radio, y+radio, radio +5, 0, Math.PI * 2, true)
ctx.fillStyle = "#101010"
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.save()
ctx.beginPath()
ctx.arc(x+radio, y+radio, radio, 0, Math.PI * 2, true)
ctx.closePath()
ctx.clip()

const imagen = await Canvas.loadImage(message.author.displayAvatarURL({dynamic: false, size:256, format:"png"}))
ctx.drawImage(imagen, x, y, radio*2, radio*2)

const attach = new Discord.MessageAttachment(canvas.toBuffer(),"bienvenida.png")

canalrendered.send(attach);
}
}