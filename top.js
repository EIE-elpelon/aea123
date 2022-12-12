module.exports = {
  config: {
    nombre: "top",
    alias: []
  },
  run: async (client, message, args, lang) => {
 const db = require('megadb') 
const level = new db.crearDB('levels', 'level') 
const Discord = new require("discord.js")
  
    let bot = client.user.username
    let botavatar = client.user.avatarURL()
    let usuario = message.mentions.members.first() || client.users.resolve(args[0]) || message.author; 
let datos = await level.datos()
let usuarios = await level.ordenar(false, 'nivel')

usuarios.map((v, index) => usuarios[index] = `${index+1}.- <@${v.clave}> | Nivel: **${v.valor.nivel}** | XP: **${v.valor.xp}**`)
  //console.log(usuarios)
usuarios.splice(10, false)
usuarios.sort((a, b) => a.nivel - b.nivel)
let top = usuarios.findIndex(x => x.includes(`<@${message.author.id}>`))
    //let top = usuarios.findIndex(v => v.usuario === message.author.id);    
  let cantidad = 10
  let paginas = []


  while(usuarios.length > 0){
    paginas.push(usuarios.splice(0, cantidad))
  }
      console.log(paginas)
        //console.log(usuarios)

  if(!args[0]){
  return message.channel.send(new Discord.MessageEmbed()
  .setAuthor("LeaderBoard de Xutur", message.guild.iconURL())
  .setDescription(paginas[0])
  .setTimestamp()
  .setFooter (`Pagina 1 de ${paginas.length} | Tu pocisión es #${( top + 1 ) || "Sin pocisión"}`)
  .setColor("#5b00ff"))
  }

  let seleccion = parseInt(args[0])

  if(seleccion <= 0 || seleccion > paginas.length) return message.channel.send("La pagina `"+seleccion+"` No existe")

  let number = args[0]
    if (isNaN(number)) return message.reply("Sólo Numeros!")

message.channel.send(new Discord.MessageEmbed()
.setAuthor("LeaderBoard de Xutur", message.guild.iconURL())
  .setDescription(paginas[seleccion-1])
  .setTimestamp()
  .setFooter (`Pagina ${seleccion} de ${paginas.length} | Tu pocisión es #${( top + 1 ) || "Sin pocisión"}`)
  .setColor("#5b00ff"))
  }
}