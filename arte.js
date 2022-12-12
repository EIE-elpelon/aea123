var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

module.exports = { 
    config: {
nombre: "arte",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
    let bot = client.user.username
    let botavatar = client.user.avatarURL()  
let user = message.mentions.users.first();
                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Arte', botavatar)
                        .setDescription("Debes mencionar a un usuario")
                        .setImage("https://media.discordapp.net/attachments/647686572896157696/653192108836126729/arte.png")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                    
                    if(!user) return message.channel.send(embed)
  
let img = await weez.arte(user.avatarURL())
  
  let embed1 = new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Arte', botavatar)
  .attachFiles([{
    attachment: img,
    name: "arte.png"
  }])
  .setImage("attachment://arte.png")
  .setColor("RANDOM")
  .setFooter(message.author.tag)

  //
  //message.channel.send({files: [img]});
  message.channel.send(embed1);
}}