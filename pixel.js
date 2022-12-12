module.exports = { 
    config: {
nombre: "pixel",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
    
  const marsnpm = require("marsnpm");
const Discord = require ('discord.js')
const user = message.mentions.users.first() || message.author
  let img = await marsnpm.pixel(user.avatarURL())     
  let bot = client.user.username
let botavatar = client.user.avatarURL()
  let texto = args.join(" ");

  let embud = new Discord.MessageEmbed()
  
  .setAuthor(bot+' ┊ Pixel', client.user.avatarURL())
  .setDescription ("Debes mencionar a alguien")
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(message.author.tag)
  .setImage("https://cdn.discordapp.com/attachments/605148508911042604/660206578473107456/pixel.png")
  

  if(!texto)  return  message.channel.send(embud);
  
let embed = new Discord.MessageEmbed()
     .attachFiles([{
    attachment: img,
    name: "pixel.png"
  }])
    .setColor("RANDOM")
    .setImage("attachment://pixel.png")
    .setFooter(message.author.tag)

message.channel.send(embed)
}}