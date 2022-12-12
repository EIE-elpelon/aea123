const Discord = require("discord.js")
const db = new (require("megadb")).crearDB("warns", "warns")
const razones = new(require("megadb")).crearDB("razones", "warns")
module.exports = { 
    config: {
        nombre: "unwarn",
        alias: []
    },
  run: async (client, message, args, lang) => {

    
    let bot = client.user.username
  let botavatar = client.user.avatarURL()
    const user = message.mentions.users.first() || client.users.resolve(args[0])
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    let reason = args.slice(1).join(" ")    

 
    if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para hacer esto")
                                              .setColor("RED"))  
    
    if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Menciona a alguien o escribe su ID para quitarle un warn")
                                              .setColor("RED"))
    
        let casos = await razones.obtener(`${message.guild.id}.${user.id}`).catch(e => console.log(e))
    
        if(!reason) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes escribir el nombre del warn que quieres quitar")
                                              .setColor("RED"))  
    
         if(!casos.includes(reason)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No existe esa razón")
                                             .setColor("RED")) 
    
    if(user.id == message.author.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No puedes quitarte un warn a ti mismo")
                                              .setColor("RED"))  
    
    if(user.id == client.user.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | A mi no me puedes quitar warns porque no tengo")
                                              .setColor("RED"))  
    
    if(!db.tiene(`${message.guild.id}.${user.id}`)){
    db.establecer(`${message.guild.id}.${user.id}`, {conteo: 0, id: user.id}).catch(e => console.log(e))
    }
        console.log(casos)
    if(casos.includes(reason)){
      razones.extract(`${message.guild.id}.${user.id}`, reason).catch(e => console.log(e))
    }
    if(!razones.tiene(`${message.guild.id}.${user.id}`)){
      razones.establecer(`${message.guild.id}.${user.id}`, []).catch(e => console.log(e))
    }
        if(await db.obtener(`${message.guild.id}.${user.id}.conteo`) < 0) return message.channel.send("El usuario tiene 0 warneos.")
    db.restar(`${message.guild.id}.${user.id}.conteo`, 1)
    
    
    let staff = client.emojis.resolve("634625948091809802")
    const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(bot+" ┊ Unwarn", botavatar)
    .setDescription(`<a:settings:670392976614096899> ${user.tag} \n \n <:CancelCircle:618191473338351652> **Te han quitado una advertencia** \n \n ${staff} **Quitada por**: ${message.author}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/651455911239352331/694566700900942006/warn_1292523.png")
    .setFooter(message.author.tag)
    
    message.channel.send(embed)
}}