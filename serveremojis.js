const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "serveremojis",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
 const emojiList = message.guild.emojis.cache.map((e  => `${e} ` + `|` + ` ${e.id} ` + `|` + ` ${e.name}` + "\n")).join('');
 for(let i = 0; i < emojiList.length; i += 2000) {
 const splitList = emojiList.substring(i, Math.min(emojiList.length, i + 2000));
let bot = client.user.username // ESTOY LOCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ke :v
let botavatar = client.user.avatarURL()
let id = message.guild.id;

 const embed = new Discord.MessageEmbed()
    .setTitle('**Lista de emojis de:** '+ message.guild.name)
    .setAuthor(bot+" ┊ Emojis", botavatar)
    .setColor("#c51515")
    .setDescription(splitList)
    .setTimestamp()
	  .setFooter("Solicitado por "+message.author.username, message.author.avatarURL)
    .setThumbnail(message.guild.iconURL())
  message.channel.send(embed)
      }
    

  
}}