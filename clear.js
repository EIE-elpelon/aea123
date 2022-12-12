
const Discord = require("discord.js")

module.exports = { 
    config: {
nombre: "clear",
alias: []
    },
  run: async (client, message, args, lang) => {

if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
  
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permisos para hacerlo")
                                              .setColor("RED")) 
}

if(!message.member.hasPermission("MANAGE_MESSAGES")){
    return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  
}

if(!args) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escriba la cantidad de mensajes a eliminar")
                                              .setColor("RED"))  
let cantidadm = parseInt(args[0])

if(!cantidadm) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Introduce un número por favor")
                                              .setColor("RED"))  

if(cantidadm > 98){
    message.channel.send(new Discord.MessageEmbed()
                             .setDescription("<:Cancel:635072844782370828> | El máximo de mensajes que puedo borrar es 100, por lo tanto establecere la cantidad ahi")
                             .setColor("RED"))  
    cantidadm = 98
}

message.channel.send(new Discord.MessageEmbed()
                     .setDescription("Voy a borrar **"+cantidadm+"** mensajes")
                     .setColor("GREEN"))  
setTimeout(() => {
    message.channel.bulkDelete(cantidadm + 2).then(() => {
        message.channel.send(new Discord.MessageEmbed()
                             .setDescription(`<:Verified:635075337100853260> | Listo, borre los **${cantidadm}** mensajes :ok_hand:`)
                             .setColor("GREEN"))
    }).catch(e => {
        console.log(e)
       message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No pude borrar los mensajes")
                                              .setColor("RED")) 
    })
}, 3000)
} }