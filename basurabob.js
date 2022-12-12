const Discord = require('discord.js')
const marsnpm = require('marsnpm')

module.exports = { 
    config: {
nombre: "basurabob",
alias: []
    },
  run: async (client, message, args, lang) => {     

    let bot = client.user.username
    let botavatar = client.user.avatarURL()
let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
                    
                        .setAuthor(bot+' ┊ Basurabob', botavatar)
                        .setDescription("Debes mencionar a un usuario")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653189587279151122/file.jpg?width=248&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                    
                    if(!member1) return message.channel.send({embed})
  
let member = message.mentions.users.first() 
let img = await marsnpm.basura(member.avatarURL())
    
    
     const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "basurabob.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://basurabob.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
    
}}