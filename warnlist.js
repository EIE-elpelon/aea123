const db = new (require("megadb")).crearDB("warns", "warns")
const razones = new(require("megadb")).crearDB("razones", "warns")

const Discord = require("discord.js")

module.exports = { 
    config: {
        nombre: "warnlist",
        alias: []
    },
  run: async (client, message, args, lang) => {
    
    let bot = client.user.username
    let botavatar = client.user.avatarURL  
    const user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author
    const reason = args.slice(1).join(" ")
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
const razons = await razones.obtener(`${message.guild.id}.${user.id}`).catch(e => console.log(e)) || "No tiene razones"
const totalwarns = await db.obtener(`${message.guild.id}.${user.id}.conteo`).catch(e => console.log(e)) || "No tiene warns"




    if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para hacer esto")
                                              .setColor("RED"))  
  
    

const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(bot+" ┊ Warnlist", botavatar)
    .setDescription("<:Staff:634625948091809802> **Lista de Avisos de**:"+"\n <a:settings:670392976614096899> " + user.username + "\n \n <:Point:609158713332334592> **Advertencias**: \n "+totalwarns+"\n\n<:Info:608779678093803530> **Razones**:\n"+razons)
    .setThumbnail("  ")
    .setFooter(message.author.tag)
    
    message.channel.send(embed)
  }}