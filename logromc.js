
const request = require("request").defaults({ encoding: null });
let Discord = require('discord.js')
const superagent = require('superagent')

module.exports = { 
    config: {
nombre: "logromc",
alias: []
    },
  run: async (client, message, args, lang) => {     
      let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()

   const nologro = new Discord.MessageEmbed()
  .setAuthor(bot+" ┊ Logromc", botavatar)
  .setDescription ( "**Escribe un Logro que quieras desbloquear!**")
  .addField("Ejemplo : ", "**"+prefijo+"logromc** (logro)")
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp()
  .setThumbnail("https://images.vexels.com/media/users/3/153916/isolated/preview/c10e8d00b250c7051474d6b4c08ee3a6-trofeo-de-deportes-icono-de-trazo-coloreado-by-vexels.png")
  if(!args.join(" ")) return message.channel.send(nologro)
   
  let links = ["https://www.minecraftskinstealer.com/achievement/a.php?i=38", "https://www.minecraftskinstealer.com/achievement/a.php?i=1", "https://www.minecraftskinstealer.com/achievement/a.php?i=21", "https://www.minecraftskinstealer.com/achievement/a.php?i=20", "https://www.minecraftskinstealer.com/achievement/a.php?i=13", "https://www.minecraftskinstealer.com/achievement/a.php?i=18", "https://www.minecraftskinstealer.com/achievement/a.php?i=17", "https://www.minecraftskinstealer.com/achievement/a.php?i=9", "https://www.minecraftskinstealer.com/achievement/a.php?i=31", "https://www.minecraftskinstealer.com/achievement/a.php?i=22", "https://www.minecraftskinstealer.com/achievement/a.php?i=23", "https://www.minecraftskinstealer.com/achievement/a.php?i=2", "https://www.minecraftskinstealer.com/achievement/a.php?i=11", "https://www.minecraftskinstealer.com/achievement/a.php?i=19", "https://www.minecraftskinstealer.com/achievement/a.php?i=33", "https://www.minecraftskinstealer.com/achievement/a.php?i=34", "https://www.minecraftskinstealer.com/achievement/a.php?i=26", "https://www.minecraftskinstealer.com/achievement/a.php?i=35", "https://www.minecraftskinstealer.com/achievement/a.php?i=6", "https://www.minecraftskinstealer.com/achievement/a.php?i=7", "https://www.minecraftskinstealer.com/achievement/a.php?i=10", "https://www.minecraftskinstealer.com/achievement/a.php?i=39", "https://www.minecraftskinstealer.com/achievement/a.php?i=4", "https://www.minecraftskinstealer.com/achievement/a.php?i=5", "https://www.minecraftskinstealer.com/achievement/a.php?i=28"] //Links de los logros. (Yo solo añadí algunos, puedes seguir añadiendo más si quieres)
 
const { body } = await superagent
.get(links[Math.floor(Math.random() * links.length)])
.query({
  h: '¡Logro desbloqueado!',
  t: args.join(" ")
});
  
message.channel.send(new Discord.MessageEmbed()
  .attachFiles([{attachment: body, name: "logro.png"}])
  .setImage("attachment://logro.png")
  .setColor("GREEN"))
}
}