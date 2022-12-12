const Discord = require("discord.js")
const db = new (require("megadb")).crearDB("warns", "warns")
const razones = new(require("megadb")).crearDB("razones", "warns")
module.exports = { 
    config: {
        nombre: "warn",
        alias: []
    },
  run: async (client, message, args, lang) => {

    
    let bot = client.user.username
    let botavatar = client.user.avatarURL()
    const user = message.mentions.users.first() || client.users.resolve(args[0])
    const reason = args.slice(1).join(" ")
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    
    if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para hacer esto")
                                              .setColor("RED"))  
    
    if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Menciona a alguien o escribe su ID para warnearle")
                                              .setColor("RED"))  
    
    if(!reason) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes dar una razón para warnear")
                                              .setColor("RED"))  
    
    if(user.id == message.author.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No puedes warnearte a ti mismo")
                                              .setColor("RED"))  
    
    if(user.id == client.user.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | A mi no me puedes warnear")
                                              .setColor("RED"))  
    
    if(!db.tiene(`${message.guild.id}.${user.id}`)){
    db.establecer(`${message.guild.id}.${user.id}`, {conteo: 0, id: user.id, nickname: user.tag})
    }
        db.sumar(`${message.guild.id}.${user.id}.conteo`, 1)
    if(!razones.tiene(`${message.guild.id}.${user.id}`)){
      razones.establecer(`${message.guild.id}.${user.id}`, [])
    }
    razones.push(`${message.guild.id}.${user.id}`, args.slice(1).join(" "))
    
    
    let staff = client.emojis.resolve("634625948091809802")
    const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(bot+" ┊ Warn", botavatar)
    .setDescription(`<a:settings:670392976614096899> ${user.tag} \n \n <:CancelCircle:618191473338351652> **Has sido advertido** \n \n ${staff} **Advertido por**: ${message.author}` + " \n \n <:Point:609158713332334592> **Razón**: \n"+reason)
    .setThumbnail("https://cdn.discordapp.com/attachments/651455911239352331/694566700900942006/warn_1292523.png")
    .setFooter(message.author.tag)
    
    message.channel.send(embed)
}}