var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

module.exports = { 
    config: {
nombre: "meme",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let meme = await weez.randomMeme()
  
  let embed = new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Meme', botavatar)
  .setImage(meme)
  .setFooter(message.author.tag)
  .setTimestamp()
  .setColor("RANDOM")
  .setTimestamp()
  
  message.channel.send(embed)
  
}}