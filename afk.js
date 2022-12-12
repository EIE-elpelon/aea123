const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "afk",
alias: []
    },
  run: async (client, message, args, lang) => { 
    const Discord = require("discord.js");
    const db = require("megadb");
    const afkreason = new db.crearDB("razones", "afk");
    const afkdb = new db.crearDB("afks", "afk")
    let razonxd;
    razonxd = args.join(" ")
    if(!args.join(" ")){
    razonxd = "Sin razón"
    }
    if(!afkdb.tiene(message.guild.id)){
      afkdb.establecer(message.guild.id, [])
    }
    afkreason.establecer(message.author.id, razonxd)
    afkdb.push(message.guild.id, message.author.id)
    message.channel.send(new Discord.MessageEmbed()
                         .setDescription("<@"+message.author.id +"> Se fue afk\n**Razón:** "+razonxd)
                        .setColor("GREEN"))
    }}