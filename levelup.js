module.exports = { 
    config: {
nombre: "levelup",
alias: []
    },
  run: async (client, message, args, lang) => { 
    const Discord = require("discord.js")
    const db = require("megadb")
    const lvlup_db = new db.crearDB("LevelUps", "sets")
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(new Discord.MessageEmbed()
                                 .setDescription("No tienes permisos para usar este comando")
                                 .setColor("RED"))
    
    
      if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
                                                     .setDescription("Escribe si activaras o desactivaras la subida de nivel\n**Ejemplo de uso:** `_levelup desactivar`")
                                                     .setColor("RED"))
    if (!args[0]) {
} else if (args[0].toLowerCase() == "desactivar") {
lvlup_db.establecer(message.guild.id, false)
message.channel.send(new Discord.MessageEmbed()
                    .setDescription("Mensaje de Subida de nivel Desactivado")
                    .setColor("GREEN"))
} else if (args[0].toLowerCase() == "activar") {
lvlup_db.establecer(message.guild.id, true)
message.channel.send(new Discord.MessageEmbed()
                    .setDescription("Mensaje de Subida de nivel Activado")
                    .setColor("GREEN"))
} else if (args[0]) return; // Me lo borraste en la cara >:v
  }//zhi :3
//te metere pito horita uwu xxdxdxd
  
} // QUE RICO >:3
// Vamos a niveles.js, xddddd