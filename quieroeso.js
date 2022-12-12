const Discord = require('discord.js')
const marsnpm = require('marsnpm')

module.exports = { 
    config: {
nombre: "quieroeso",
alias: []
    },
  run: async (client, message, args, lang) => {     

    
    let bot = client.user.username
    let botavatar = client.user.avatarURL()   
let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Quieroeso', client.user.avatarURL())
                        .setDescription("Debes mencionar a un usuario")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653164494146633749/file.jpg?width=240&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                  
                  if(!member1) return message.channel.send({embed})

  
let member = message.mentions.users.first() 
let img = await marsnpm.eso(member.avatarURL())
    
        const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "quieroeso.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://quieroeso.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
}}