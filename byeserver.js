const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "byeserver",
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
  
message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Me fui del servidor que especificaste con la ID.")
                      .setColor("GREEN")
                      )  
  
 guild.owner.send("El bot ha sido removido de tu servidor **"+guild.name+"**").then(() => {
guild.leave();
  })}}