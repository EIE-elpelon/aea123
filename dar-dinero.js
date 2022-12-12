const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "dar-dinero",
    alias: ["give-money", "dardinero"]
  },
  run: async (client, message, args, lang) => {
    
    const db = require("megadb");
    const balserver = new db.crearDB("balance_server", "tienda");
    const banco = new db.crearDB("banco_server", "tienda");
    let bot = client.user.username;
    let botavatar = client.user.avatarURL()
        let user = message.mentions.users.first();
    
    if(!banco.tiene(message.guild.id)) {
    banco.establecer(message.guild.id, {})
    }
    
    
  /* AUTOR */
    if(!banco.tiene(`${message.guild.id}.${message.author.id}`)){
      banco.establecer(`${message.guild.id}.${message.author.id}`, 500)
    }
    
        if(!balserver.tiene(message.guild.id)) {
    balserver.establecer(message.guild.id, {})
    }
    
    let autor_dinero_banco = await banco.get(`${message.guild.id}.${message.author.id}`)
    let autor_dinero_mano = await balserver.get(`${message.guild.id}.${message.author.id}`)
    
     let tepasaswe = parseInt(args[1]);
    
    if(!user) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription("<:Cancel:635072844782370828> | Menciona al usuario, el cual le darás de tu dinero.")
                                         .setColor("RED"))
    
    /* USUARIO MENCIONADO */
    if(!banco.tiene(`${message.guild.id}.${user.id}`)){
      banco.establecer(`${message.guild.id}.${user.id}`, 500)
    }
    
        if(!balserver.tiene(message.guild.id)) {
    balserver.establecer(message.guild.id, {})
    }
    if(!balserver.tiene(`${message.guild.id}.${user.id}`)){
      balserver.establecer(`${message.guild.id}.${user.id}`, 0)
    }

    
    if(!balserver.tiene(`${message.guild.id}.${user.id}`)){
      balserver.establecer(`${message.guild.id}.${user.id}`, 0)
    }
    
    let dinero_banco = await banco.get(`${message.guild.id}.${user.id}`)
    let dinero_mano = await balserver.get(`${message.guild.id}.${user.id}`)
    
    let dinero_mano_autor = await balserver.get(`${message.guild.id}.${message.author.id}`)
    
    if(!args[1]) {
      message.channel.send(new Discord.MessageEmbed()
                          .setDescription("<:Cancel:635072844782370828> | Escribe la cantidad de dinero que le darás al usuario")
                          .setColor("RED"))
      
    } else if(args[1].toLowerCase() == "all"){
if(dinero_mano_autor === 0) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tienes dinero en mano!")
.setColor("RED"))
    
      balserver.sumar(`${message.guild.id}.${user.id}`, dinero_mano_autor)
      balserver.restar(`${message.guild.id}.${message.author.id}`, dinero_mano_autor)
      message.channel.send(new Discord.MessageEmbed()
                          .setDescription("**" + message.author.tag + "** Le dió `" + dinero_mano_autor + "` a **" + user.tag + "**")
                          .setColor("GREEN"))
    } else {
    if(tepasaswe > autor_dinero_mano) return message.channel.send(new Discord.MessageEmbed()
                                                            .setDescription("<:Cancel:635072844782370828> | No tienes dinero suficiente en mano")
                                                            .setColor("RED"))
      
            message.channel.send(new Discord.MessageEmbed()
                          .setDescription("<:Verified:635075337100853260> | **" + message.author.tag + "** Le dió `" + args[1] + "` a **" + user.tag + "**")
                          .setColor("GREEN"))
      balserver.sumar(`${message.guild.id}.${user.id}`, args[1])
      balserver.restar(`${message.guild.id}.${message.author.id}`, args[1])
    }
  }
}