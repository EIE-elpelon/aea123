const { Canvas } = require('canvas');
const { createCanvas, loadImage } = require("canvas")
const snekfetch = require('snekfetch');
const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "invite",
alias: []
    },
  run: async (client, message, args, lang) => {  


  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let ayarikito = process.env.OWNER;
  let invite = "https://discordapp.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot"
    const embed = new Discord.MessageEmbed()

  .setColor("#c51515")
  .setTimestamp()
  .setFooter("By "+ayarikito, botavatar)
  .setAuthor(bot+" ┊ Invite", botavatar)
  .setThumbnail("https://cdn.discordapp.com/attachments/707026211146039360/726320091897004112/2139631.png")
  .setDescription("Hola este comandos sirve para que puedas invitar al bot o unirte a nuestro servidor de soporte de Xutur.")
  .addField("<a:verifiedxdxd:715405717561016400> Invitar bot:", '"**[[Invítame]]('+invite+')**"') 
  .addField("<a:cerveza:717533549141688323> Server Support:", '"**[[Server Support]](https://discord.gg/nQZMzFh)**"')
    
    message.channel.send(embed)
    
    
    
    
    
  }}