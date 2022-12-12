const Discord = require("discord.js")
module.exports = {
  config: {
    nombre: "depositar",
    alias: ["dep", "deposit"]
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
                                            .setDescription("<:Cancel:635072844782370828> | Escribe la cantidad de dinero a depositar")
                                            .setColor("RED"))
                 
      } else if(args[0].toLowerCase() == "0"){
      message.channel.send(new Discord.MessageEmbed()
                                                            .setDescription("<:Cancel:635072844782370828> |  No tienes dinero suficiente en mano, para depositar")
                                                            .setColor("RED"))
    } else if(args[0].toLowerCase() == "all"){
      if(dinero_mano === 0) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tienes dinero en mano!")
.setColor("RED"))

      balserver.restar(`${message.guild.id}.${message.author.id}`, dinero_mano)
      banco.sumar(`${message.guild.id}.${message.author.id}`, dinero_mano)
      message.channel.send(new Discord.MessageEmbed()
                          .setDescription("<:Verified:635075337100853260> | Acabas de depositar ** " + dinero_mano + "** correctamente!")
                          .setColor("GREEN"))
    } else {
    
    let tepasaswe = parseInt(args[0]);
    
    if(tepasaswe > dinero_mano) return message.channel.send(new Discord.MessageEmbed()
                                                            .setDescription("<:Cancel:635072844782370828> | No tienes dinero suficiente en mano, para depositar")
                                                            .setColor("RED"))
    
    balserver.restar(`${message.guild.id}.${message.author.id}`, args[0])
    banco.sumar(`${message.guild.id}.${message.author.id}`, args[0])
    message.channel.send(new Discord.MessageEmbed()
                        .setDescription("<:Verified:635075337100853260> | Depositaste **" + args[0] + "** al Banco")
                        .setColor("GREEN")) 
    }
  }
}