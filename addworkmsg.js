const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "addworkmsg",
    alias: ["addmsgwork"]
  },
  run: async (client, message, args, lang) => {
    const db = require("megadb")
        const mensajeswork = new db.crearDB("work_mensajes", "tienda")
    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))
    
        if(!mensajeswork.tiene(message.guild.id)){
          mensajeswork.establecer(message.guild.id, [])
        }

    if(!args.join(" ")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Escribe el mensaje a agregar en el comando `_work`\n**Ejemplo:** `_addworkmsg {user} a ganado {dinero} de Dinero!`\n\n**Codigos:** \n`{userTag}` -> Tag del usuario que gano el Dinero\n`{userMention}` -> Mencion del usuario que gano el dinero\n`{userID}` -> ID del Usuario que gano el dinero\n`{dinero}` -> El dinero que gano el usuario que uso el comando")
    .setColor("RED"))

    mensajeswork.push(message.guild.id, args.join(" "))
    message.channel.send(new Discord.MessageEmbed()
    .setDescription("Mensaje agregado correctamente :White_check_mark:")
    .setColor("GREEN"))

  }
}