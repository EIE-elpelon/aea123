var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

module.exports = { 
    config: {
nombre: "bart",
alias: []
    },
  run: async (client, message, args, lang) => {    

    let bot = client.user.username
    let botavatar = client.user.avatarURL()   
       let texto = args.join(" ");           
    
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Bart', botavatar)
                        .setDescription("Debes mencionar a alguien")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653186720703053849/bart.png?width=201&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
  
if(!texto) return message.channel.send({embed})
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.bart(member.avatarURL())


  let embed2 = new Discord.MessageEmbed()
  .attachFiles([{
    attachment: img,
    name: "bart.png"
  }])
  .setFooter(message.author.tag)
  .setImage("attachment://bart.png")
  .setColor("RANDOM")
  
  message.channel.send(embed2);
}}