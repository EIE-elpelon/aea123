module.exports = { 
    config: {
nombre: "fortnite",
alias: []
    },
  run: async (client, message, args, lang) => {  
        const fnt = require('fortnitetracker-7days-stats');
        const Discord = require("discord.js")
let bot = client.user.username
let botavatar = client.user.avatarURL()  
let prefijo = process.env.PREFIX;

                  
                    const embed = new Discord.MessageEmbed()
                       
                        .setAuthor(bot+' ┊ Fortnite', botavatar)
                        .setDescription("Ejemplo: `"+prefijo+"fortnite [Usuario], [Consola-PC]` \n \nRecuerda separar los textos con una coma")
                        .setColor("RANDOM")
                        .setFooter("Las consolas pueden ser: pc - psn - xbl | "+message.author.tag)
                        .setTimestamp()
  
    let texto = args.join(' ');
     let opt = texto.split(', ');
     if(!opt[0]) return message.channel.send({embed})
     if(!opt[1]) return message.channel.send({embed}) 
   const dembed = new Discord.MessageEmbed()
  .setAuthor('🔰Buscando el jugador "' + args.join(' ') + '"',"https://i.imgur.com/EwVXYmf.gif")
  .setDescription("Por favor, espera mientras busco la informacion del usuario que pediste")
  .setColor("RANDOM")

  const eembed = new Discord.MessageEmbed()
  .setDescription("No se ha podido encontrar al jugador")
                             .setColor("RED")
    const eembed2 = new Discord.MessageEmbed()
  .setDescription("Las plataformas solo pueden ser: 'pc', 'psn', 'xbl'")
                             .setColor("RED")
    
message.channel.send(dembed).then(m => {
fnt.getStats(opt[0], opt[1].toLowerCase(), (err, result) => {

    if(err){
      if(err.message == "Player not found") return m.edit(eembed)
      if(err.message == "Platform must be one of: 'pc', 'psn', 'xbl'") m.edit(eembed2)
    
    }else{
      
    const embed = new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Fortnite', botavatar)
  .setDescription("Estos son los stats de **" + result.accountName + "** en los últimos 7 días!")
  .setThumbnail(result.skinUrl)
  .setColor("RANDOM")
  .addField('``💬`` | Nombre', result.accountName, true)
  .addField('``🔷`` | Plataforma', result.platform, true)
  .addField('``🏆`` | Score', result.score, true)
  .addField('``🆙`` | Victorias', result.wins, true)
  .addField('``💎`` | Partidas Jugadas', result.matches, true)
  .addField('``🎯`` | Kills', result.kills, true)
  // .addField('``X`` | X', result.kd, true) //No se que es esto xD
  // .addField('``X`` | X', result.wr, true) //Tampoco se que es esto xd
  .addField('``⏲️`` | Minutos Jugados', result.minutesPlayed, true)
 .addField('``👤`` | Skin URL', "[[SkinURL]]("+result.skinUrl+")", true)
  .setFooter(message.author.tag)
  .setTimestamp()
      m.edit(embed);
    }})
})
  }}