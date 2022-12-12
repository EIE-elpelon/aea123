const Discord = require('discord.js')
const marsnpm = require('marsnpm')

module.exports = { 
    config: {
nombre: "mind",
alias: []
    },
  run: async (client, message, args, lang) => {     

let bot = client.user.username
let botavatar = client.user.avatarURL()
let escribir = args.join(' ')               
 const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Mind', botavatar)
                        .setDescription("Escribe una palabra corta")
                        .setImage("https://cdn.discordapp.com/attachments/680568391404093457/695326068344750090/mind.png")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                  
                  if(!escribir) return message.channel.send({embed})
  
let member = message.mentions.users.first() 
let img = await marsnpm.mind(args.join(' '))
    
            const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "mind.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://mind.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
}}