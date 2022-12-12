const Discord = require("discord.js") 
module.exports = {
  config: {
    nombre: "bal",
    alias: []
  },
  run: async (client, message, args, lang) => {
    const db = require("megadb");
    const balserver = new db.crearDB("balance_server", "tienda");
    const banco = new db.crearDB("banco_server", "tienda");
    let bot = client.user.username;
    let botavatar = client.user.avatarURL()
        let user = message.mentions.users.first() || client.users.resolve(args[0]) || args[0] || message.author;
    if(!banco.tiene(message.guild.id)) {
    banco.establecer(message.guild.id, {})
    }
    if(!banco.tiene(`${message.guild.id}.${user.id}`)){
      banco.establecer(`${message.guild.id}.${user.id}`, 500)
    }
    
        if(!balserver.tiene(message.guild.id)) {
    balserver.establecer(message.guild.id, {})
    }
    if(!balserver.tiene(`${message.guild.id}.${user.id}`)){
      balserver.establecer(`${message.guild.id}.${user.id}`, 0)
    }
    
    
    let dinero_banco = await banco.get(`${message.guild.id}.${user.id}`)
    let dinero_mano = await balserver.get(`${message.guild.id}.${user.id}`)
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(bot + " ┊ Economy", client.user.avatarURL())
    embed.setColor("RANDOM")
    embed.addField("🤚 En mano", dinero_mano, true)
    embed.addField("🏦 Banco", dinero_banco, true)
    embed.addField("💰 Total", parseInt(dinero_mano) + parseInt(dinero_banco), true)
    .setFooter(`Dinero de ${user.tag}`, user.avatarURL({dynamic: true}))
    embed.setThumbnail('https://www.infocannabis.org/wp-content/uploads/2017/08/money-printing.gif')
    message.channel.send(embed)
  }
}