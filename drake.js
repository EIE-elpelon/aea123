const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "drake",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
var Weez = require("weez");
var weez = new Weez.WeezAPI("pCDIyDQESqqe8y1QHyM7U1K83gZzWKWJ6Zn2");
  
let member = message.mentions.users.first()
let bot = client.user.username 
let texto = args.join(" ");           
    
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Drake', client.user.avatarURL())
                        .setDescription("Debes mencionar a alguien")
                        .setImage("https://cdn.discordapp.com/attachments/707026211146039360/710216171072258068/bart.png")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
  
if(!texto) return message.channel.send({embed})
    
    let img = await weez.drake(message.author.avatarURL(), member.avatarURL())

    
  let embed2 = new Discord.MessageEmbed()
  .attachFiles([{
    attachment: img,
    name: "drake.png"
  }])
  .setFooter(message.author.tag)
  .setImage("attachment://drake.png")
  .setColor("RANDOM")
  
  message.channel.send(embed2);
  }}