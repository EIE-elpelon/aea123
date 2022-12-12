const Discord = require('discord.js')
const marsnpm = require("marsnpm")

module.exports = { 
    config: {
nombre: "blur",
alias: []
    },
  run: async (client, message, args, lang) => {     

    let bot = client.user.username
    let botavatar = client.user.avatarURL()
                  let user = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Blur', botavatar)
                        .setDescription("Debes mencionar a un usuario")
                        .setImage("https://cdn.discordapp.com/attachments/605148508911042604/660213549486047245/file.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                    
                    if(!user) return message.channel.send(embed)
let img = await marsnpm.blur(user.avatarURL())
    
        const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "blur.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://blur.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
}}