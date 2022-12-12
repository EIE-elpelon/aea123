const Discord = require('discord.js')
const marsnpm = require('marsnpm')

module.exports = { 
    config: {
nombre: "boton",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
let bot = client.user.username
let botavatar = client.user.avatarURL()   
let prefijo = process.env.PREFIX;
let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Boton', botavatar)
                        .setDescription("Ejemplo: `"+prefijo+"boton Texto-1, Texto-2` \n \nRecuerda separar los textos con una coma")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653179838601101312/file.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
  
    let texto = args.join(' ');
     let opt = texto.split(', ');
     if(!opt[0]) return message.channel.send({embed})
     if(!opt[1]) return message.channel.send({embed}) 
  
let url = await marsnpm.boton(opt[0], opt[1])
     
    
    
    const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: url,
    name: "boton.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://boton.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
}}