module.exports = { 
    config: {
nombre: "marry",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
const megadb = require('megadb')
const db = new megadb.crearDB('marry', 'level')
const marrytags = new megadb.crearDB('marrytags', 'level')
const Discord = require("discord.js")     


let usuario = message.mentions.users.first() || client.users.resolve(args[0])
    
if(!usuario)  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))

if(usuario.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No te puedes casar contigo mismo!")
                                              .setColor("RED"))

if(usuario.id ===client.user.id) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription(":flushed: | Ya tengo pareja")
                                              .setColor("RED"))
                                            
if(usuario.bot) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No te puedes casar con un BOT!")
                                              .setColor("RED"))
    
if(db.tiene(usuario.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Este usuario ya está casado")
                                              .setColor("RED")) 
    
if(db.tiene(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Ya estás casado con otro usuario")
                                              .setColor("RED"))

  const propuesta = new Discord.MessageEmbed()
   .setDescription(`O por dios...${usuario}, ¡<@${message.author.id}> Te esta pidiendo matrimonio!.\n Tienes que decir **si** si quieres acceptar <a:cerveza:717533549141688323>. \n Si no quieres aceptar solo escribe **no** 😭`)
                      .setColor("#5b00ff")
                      .setThumbnail('https://lh3.googleusercontent.com/-zrmi_2anlWY/VVIOIteJJFI/AAAAAAAACxM/pRSDxgDT3T8/s640/tumblr_ms0nqxBNpR1qcdozto1_500.gif')
                      .setFooter("Tienes un tiempo limitado para decir si o no")

 message.channel.send(propuesta) 

    const collector = message.channel.createMessageCollector(m => m.author.id === usuario.id && m.channel.id === message.channel.id, {time : 20000}); 
    
    collector.on("collect", collected => {
    if (collected.content.toLowerCase() === "si"){
      collector.stop()
      const exito = new Discord.MessageEmbed()
      .setDescription("Los declaro **Marido** y **Mujer**")
      .setColor("RANDOM")
        message.channel.send(exito) 
        db.establecer(usuario.id, message.author.id)
        db.establecer(message.author.id, usuario.id)

        marrytags.establecer(usuario.id, message.author.tag)
        marrytags.establecer(message.author.id, usuario.tag)

    } else if (collected.content.toLowerCase() === "no"){
      collector.stop()
      const no = new Discord.MessageEmbed()
      .setDescription("Está ceremonia a terminado.")
      .setColor("RED")
        message.channel.send(no) 
    }
})
collector.on("end", collected => {
    if(collected.size === 0) return message.channel.send("Lamentablemente la persona con la que se pensaba casar no llego a tiempo a la iglesia, lo sentimos pero esto no puede llevarse a cabo. :rolling_eyes:");  
      })
  }
  }
