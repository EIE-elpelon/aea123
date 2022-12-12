const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "inviteserver",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  
  
if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Escribe una ID.")
                                              .setColor("RED"))

let guild = client.guilds.resolve(args.join(" "))
if (!guild) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | El bot no está en ese servidor.")
                                              .setColor("RED"))
  

let invitechannels = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
if(!invitechannels) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tengo permisos de crear invitaciones en ese servidor.")
                                              .setColor("RED"))

invitechannels.random().createInvite()
   .then(invite=> message.channel.send('**Aquí la invitación:**\n\ndiscord.gg/' + invite.code))
    
}}