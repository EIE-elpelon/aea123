const Discord = require("discord.js");
const ms = require("ms");
const { GiveawaysManager } = require("discord-giveaways");
module.exports = {
  config: {
    nombre: "giveawayxd",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("No tienes permisos de `Gestionar Mensajes` o `Administrador` como para usar este comando!")
    .setColor("RED"))

    let msg_canalsorteo = await message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("🎉 | Listo para crear un sorteo, primero mencione el canal.")
    .setFooter("Tienes 2 minutos para mencionar el canal. | Para cancelar escribe [cancel]."))
    
    const collector = msg_canalsorteo.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 120000});
    collector.on("collect", async collected => {
      collector.stop()
      if(collected.content.toLowerCase() === "cancel"){
        collector.stop()
        message.channel.send(new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("<:Cancel:635072844782370828> | Comando cancelado."))
      }

      let canalsorteo = collected.mentions.channels.first()
      if(!canalsorteo) return await message.channel.send(new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("<:Cancel:635072844782370828> | No ha mencionado ningun canal, comando cancelado."))

      let msg_cosasortearxd = await message.channel.send(new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setDescription("🎉 | **¡Perfecto!**, has elegido <#"+canalsorteo.id+">, ahora escribe lo que vas a sortear.")
       .setFooter("Tienes 2 Minutos para escribir. | Para cancelar escribe [cancel]."))

const collector2 = msg_canalsorteo.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 120000});

collector2.on("collect", async collected2 => {
   collector2.stop()
    if(collected2.content.toLowerCase() === "cancel"){
        collector2.stop()
        message.channel.send(new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("<:Cancel:635072844782370828> | Comando cancelado."))
      }
  let cosa_sorteo = collected2.content
  let msg = tiempo_sorteoxd = await message.channel.send(new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("🎉 | **¡Genial!**, vas a sortear `"+cosa_sorteo+"`, ahora escribe cuanto va a durar el sorteo. [ 1s (Segundo), 1m (Minuto) 1h, (1Hora) , 1d (1 Dia) ]")
  .setFooter("Tienes 2 Minutos para escribir. | Para cancelar escribe [cancel]."))


  const collector3 = tiempo_sorteoxd.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 120000});
  
  collector3.on("collect", async collected3 => {
    collector3.stop()
    if(collected3.content.toLowerCase() === "cancel"){
        collector3.stop()
        message.channel.send(new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("<:Cancel:635072844782370828> | Comando cancelado."))
      }
    let tiempogiveaway = collected3.content
    let cantidadwins = await message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("🎉 | **¡Increible!**, el sorteo va a durar `"+tiempogiveaway+"`, ahora ingresa la cantidad de ganadores."))

    const collector4 = cantidadwins.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 120000});
    collector4.on("collect", async collected4 => {
      collector4.stop()
      if(collected4.content.toLowerCase() === "cancel"){
        collector4.stop()
        message.channel.send(new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("<:Cancel:635072844782370828> | Comando cancelado."))
      }
    let winersxd = collected4.content
    message.channel.send(new Discord.MessageEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Increible!**, la cantidad de ganadores es de `"+winersxd+"`, el sorteo esta iniciando en <#"+canalsorteo.id+">."))

client.giveawaysManager.start(canalsorteo, {
            time: ms(tiempogiveaway),
            prize: cosa_sorteo,
            winnerCount: parseInt(winersxd),
            messages: {
        giveaway: "<a:GiveAway2:670392976278683679><a:GiveAway2:670392976278683679> **¡NUEVO SORTEO!** <a:GiveAway2:670392976278683679><a:GiveAway2:670392976278683679>",
        giveawayEnded: "<a:GiveAway2:670392976278683679><a:GiveAway2:670392976278683679> **SORTEO TERMINADO** <a:GiveAway2:670392976278683679>",
        timeRemaining: "Tiempo Restante: **{duration}**",
        inviteToParticipate: "Reacciona con 🎉 para Participar!",
        winMessage: "Felicidades! {winners} 🎉<a:GiveAway2:670392976278683679>, ¡¡Ganaron **{prize}**!!",
        embedFooter: "Xutur Sorteos",
        noWinner: "Sorteo cancelado, por falta de participantes.",
        hostedBy: "Hecho por: {user}",
        winners: "Ganador(es)",
        endedAt: "Termina el",
        units: {
            seconds: "segundos",
            minutes: "minutos",
            hours: "horas",
            days: "días",
            pluralS: false
        }
    }
        })
    })
  })
})
    })

    collector.on("end", async collected => {
      if(collected.size === 0) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("No hubo ninguna respuesta!")
      .setColor("RED"))
    })
        collector2.on("end", async collected2 => {
      if(collected2.size === 0) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("No hubo ninguna respuesta!")
      .setColor("RED"))
    })
        collector3.on("end", async collected3 => {
     if(collected3.size === 0) return  message.channel.send(new Discord.MessageEmbed()
      .setDescription("No hubo ninguna respuesta!")
      .setColor("RED"))
    })
        collector4.on("end", async collected4 => {
      if(collected4.size === 0) return  message.channel.send(new Discord.MessageEmbed()
      .setDescription("No hubo ninguna respuesta!")
      .setColor("RED"))
    })
  }
}