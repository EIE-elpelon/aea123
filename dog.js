const superagent = require('superagent')
const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "dog",
alias: []
    },
  run: async (client, message, args, lang) => {     
    
    
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(bot+' ┊ Dog', botavatar)
    .setImage(body.message)
    .setFooter(message.author.tag)
    .setTimestamp()
    
    message.channel.send({embed})
    

}}