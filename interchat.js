module.exports = { 
    config: {
nombre: "interchat",
alias: []
    },
  run: async (client, message, args, lang) => {     
    
const Discord = require('discord.js')

let perms = message.member.hasPermission("MANAGE_MESSAGES");
let bot = client.user.username
  let botavatar = client.user.avatarURL()

if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription(" No tienes permisos para usar ese comando")
                                              .setColor("RED"))  

 let interchat = message.guild.channels.cache.find(interchat => interchat.name === "interchat");
   await message.guild.channels.cache.forEach(async (channel, id) => {
      });
  //start of create role
  if(!interchat){
    try{
      interchat = await message.guild.channels.create('interchat', { type: 'text' })
        
      message.guild.channels.cache.forEach(async (channel, id) => {
      });
    }catch(e){
      console.log(e.stack);
    }
  }
    
    const embed = new Discord.MessageEmbed()
                              .setAuthor(bot+" ┊ Interchat", botavatar)
                              .setDescription("Hola acabas de ejcutar el comando interchat en el cual este servira para tu poder enviar mensajes a los usuarios desde otros server por el canal <#"+interchat.id+"> para enviar un mensaje solo escribe el mensaje y el bot enviara ese mensaje a todos los interchat que esten activos en los servidores <a:nocxd:717585193417834526>")
                              .addField("<a:noc:715405756370780220> **Nota:**", "No cambiar el nombre del canal <#"+interchat.id+"> ya que si lo haces no servira el canal y no recibiras y enviaras mensajes de otros servidores")
                              .setFooter("PD:Ya he creado el canal, si ya esta el canal creado desde antes solo se enviara este mensaje")
                              .setThumbnail("https://globalconnectivity.net/wp-content/uploads/2019/09/imed-clipart-globe-1.gif")
                              .setColor("#5b00ff")

message.channel.send(embed)
}}