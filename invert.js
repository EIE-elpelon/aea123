const Discord = require('discord.js')
const marsnpm = require("marsnpm")

module.exports = { 
    config: {
nombre: "invert",
alias: []
    },
  run: async (client, message, args, lang) => {     

    let bot = client.user.username
    let botavatar = client.user.avatarURL()    
let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Invert', botavatar)
                        .setDescription("Debes mencionar a un usuario")
                        .setImage("https://cdn.discordapp.com/avatars/689964573696327687/2c56422feea49febb7b4bb963e576674.webp?size=2048")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                    
                    if(!member1) return message.channel.send({embed})
  
let member = message.mentions.users.first() 
let img = await marsnpm.invert(member.avatarURL())
    
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