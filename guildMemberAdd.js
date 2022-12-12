module.exports = async (client, member) => {
const Discord = require("discord.js")
const db = require("megadb")
let welcome_db = new db.crearDB("setwelcome", "welcomeleave");
let imagen_db = new db.crearDB("setwelcomeimg", "welcomeleave");
if(!welcome_db.tiene(`${member.guild.id}`)) return;
if(!imagen_db.tiene(member.guild.id)) return;
let fondo = await imagen_db.obtener(`${member.guild.id}`)
let welcome = await welcome_db.obtener(`${member.guild.id}`);
if (!welcome_db.tiene(`${member.guild.id}`)) return;
const canalrendered = member.guild.channels.resolve(welcome)

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
ctx.fillText(`Bienvenido a ${member.guild.name}, ${member.user.tag}`, canvas.width/2, 300)

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

const imagen = await Canvas.loadImage(member.user.displayAvatarURL({dynamic: false, size:256, format:"png"}))
ctx.drawImage(imagen, x, y, radio*2, radio*2)

const attach = new Discord.MessageAttachment(canvas.toBuffer(),"bienvenida.png")

canalrendered.send(attach);
}