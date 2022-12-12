const Discord = require("discord.js")
module.exports = {
  config: {
    nombre: "retire",
    alias: ["with"]
  },
  run: async (client, message, args, lang) => {
    const db = require("megadb");
    const balserver = new db.crearDB("balance_server", "tienda");
    const banco = new db.crearDB("banco_server", "tienda");
        
    if(!banco.tiene(message.guild.id)) {
    banco.establecer(message.guild.id, {})
    }
    if(!banco.tiene(`${message.guild.id}.${message.author.id}`)){
      banco.establecer(`${message.guild.id}.${message.author.id}`, 500)
    }
    
        if(!balserver.tiene(message.guild.id)) {
    balserver.establecer(message.guild.id, {})
    }
    if(!balserver.tiene(`${message.guild.id}.${message.author.id}`)){
      balserver.establecer(`${message.guild.id}.${message.author.id}`, 0)
    }
    
    
    let dinero_banco = await banco.get(`${message.guild.id}.${message.author.id}`)
    let dinero_mano = await balserver.get(`${message.guild.id}.${message.author.id}`)
    
        if(!args[0]){
      message.channel.send(new Discord.MessageEmbed()
                                            .setDescription("Escribe la cantidad de dinero a retirar")
                                            .setColor("RED"))
                 
      } else if(args[0].toLowerCase() == "0"){
      message.channel.send(new Discord.MessageEmbed()
                                                            .setDescription("No tienes dinero suficiente en el banco, para retirar")
                                                            .setColor("RED"))
    } else if(args[0].toLowerCase() == "all"){
      if(dinero_banco === 0) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tienes dinero en banco!")
.setColor("RED"))

      balserver.sumar(`${message.guild.id}.${message.author.id}`, dinero_banco)
      banco.restar(`${message.guild.id}.${message.author.id}`, dinero_banco)
      message.channel.send(new Discord.MessageEmbed()
                          .setDescription("Acabas de retirar del banco ** " + dinero_banco + "** correctamente!")
                          .setColor("GREEN"))
    } else { 
    let tepasaswe = parseInt(args[0]);
    
    if(tepasaswe > dinero_banco) return message.channel.send("No tienes dinero suficiente en el banco, para retirar")
    
    balserver.sumar(`${message.guild.id}.${message.author.id}`, args[0])
    banco.restar(`${message.guild.id}.${message.author.id}`, args[0])
    message.channel.send(new Discord.MessageEmbed()
                        .setDescription("Retiraste **" + args[0] + "** del Banco")
                        .setColor("GREEN"))
    }
  }
}