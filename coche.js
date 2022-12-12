const Discord = require('discord.js')
const marsnpm = require("marsnpm")

module.exports = { 
    config: {
nombre: "coche",
alias: []
    },
  run: async (client, message, args, lang) => {     

  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  //8
let bot = client.user.username
let botavatar = client.user.avatarURL()
let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.MessageEmbed()
             
                        .setAuthor(bot+' ┊ Coche', botavatar)
                        .setDescription("Debes mencionara un usuario")
                        .setImage("https://i.ytimg.com/vi/5NkJ8Hmxo-Q/hqdefault.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                  
                  if(!member) return message.channel.send({embed})

                  let img = await marsnpm.coche(message.author.displayAvatarURL(), member.avatarURL())

                  
  
                  
    const embes = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "coche.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://coche.png")
    .setFooter(message.author.tag)

message.channel.send(embes)
  }
}