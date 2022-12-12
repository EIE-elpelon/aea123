const Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
let Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "triggered",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
let bot = client.user.username
let botavatar = client.user.avatarURL()
  let miembro = message.mentions.users.first()
  let mbed = new Discord.MessageEmbed()
  
                        .setAuthor(bot+' ┊ Triggered', client.user.avatarURL())
                        .setDescription("Debes mencionar a alguien")
                        .setImage('https://images.squarespace-cdn.com/content/53af2f79e4b037526d8c1fcb/1524139072012-ZLBU3082T71TA6JBK9KX/triggered.jpg?format=1000w&content-type=image%2Fjpeg')
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()

  
  if (!miembro) return message.channel.send(mbed)
    let img = await weez.triggered(miembro.displayAvatarURL);
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
         .setFooter(message.author.tag)

      .attachFiles([{
        attachment: img,
        name: "img.gif"
      }])
      .setImage("attachment://img.gif")
    message.channel.send(embed); 
    
    
}}