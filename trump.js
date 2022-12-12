const Discord = require('discord.js')
let marsnpm = require("marsnpm")
module.exports = { 
    config: {
nombre: "trump",
alias: []
    },
  run: async (client, message, args, lang) => {     

let bot = client.user.username
let botavatar = client.user.avatarURL()
let escribir = args.join(' ')               
const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Trump', client.user.avatarURL())
                        .setDescription("Escribe lo que quieras que diga Donald Trump")
                        .setImage("https://media.discordapp.net/attachments/647686572896157696/653199236883677184/file.jpg?width=400&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag)
                        .setTimestamp()
                  
                  if(!escribir) return message.channel.send({embed})
  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  
let member = message.mentions.users.first()
let img = await marsnpm.trump(args.join(" "))
message.channel.send( new Discord.MessageEmbed()
                     .attachFiles([{
                     attachment: img,
                     name: "img.jpg"
                      }])
                    .setColor("RANDOM")
                    .setImage("attachment://img.jpg")
                    .setFooter(message.author.tag))
}}