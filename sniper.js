const marsnpm = require("marsnpm");
const Discord = require ('discord.js')

module.exports = { 
    config: {
nombre: "sniper",
alias: []
    },
  run: async (client, message, args, lang) => {     
    
    
    let bot = client.user.username
    let botavatar = client.user.avatarURL()

const user = message.mentions.users.first() || message.author
  let img = await marsnpm.sniper(user.avatarURL())     
  
  let texto = args.join(" ");
  



  
      let embud = new Discord.MessageEmbed()
      
  .setAuthor(bot+' ┊ Sniper', client.user.avatarURL())
  .setDescription ("Debes mencionar a un usuario")
  .setColor("RANDOM")
  .setTimestamp()
  .setImage("https://cdn.discordapp.com/attachments/605148508911042604/660217228574064651/sniper.png")
  

  if(!texto)  return  message.channel.send(embud);
  
let embed = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "sniper.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://sniper.png")
    .setFooter(message.author.tag)

message.channel.send(embed)
}}