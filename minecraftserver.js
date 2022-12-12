const Discord = require('discord.js');
const request = require('request');

module.exports = { 
    config: {
nombre: "minecraftserver",
alias: ["minecraftsv"]
    },
  run: async (client, message, args, lang) => {  
    
let prefijo = process.env.PREFIX;
let mcIP = args.join(" ");
const ping = require('minecraft-server-util') // Instala el NPM antes
var port = args[1] 
if(!port) {
  port = `25565` 
}
let bot = client.user.username
let botavatar = client.user.avatarURL()
    
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + port;
    request(url, function (err, response, body) {
      if (err) {
        console.log(err);
        return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Hubo un error al obtener el status del servidor")
                                              .setColor("RED"))  
      }
      
      body = JSON.parse(body);
      let status = "Offline"
      if (body.online) {
        status = "Online";
      }
      let players = 0
      if (body.players.now) {
        players += body.players.now;
      }
      else {
        players += 0
      }
      
       var uwu = new Discord.MessageEmbed()
   .setAuthor(bot+' ┊ Minecraftserver', client.user.avatarURL)
   .setDescription("**Necesitas escribir la IP del servidor que quieres ver!**")
   .addField("Ejemplo :","**"+prefijo+"minecraftserver** [IP del server]")
   .setColor("RANDOM")
   .setThumbnail("https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png")
   .setFooter(message.author.tag)
   .setTimestamp()
    
    
 if(!mcIP)  return message.channel.send(uwu)
let pingURL = `https://api.minetools.eu/ping/${args}`
request(pingURL, function(err, resp, body){
    if(err) return message.channel.send(err.message);
  body = JSON.parse(body);
    if(body.error) return message.channel.send(new Discord.MessageEmbed()
                                               .setDescription("<:Cancel:635072844782370828> | Servidor fuera de línea o no disponible")
                                               .setColor("RED"))
  let motd = `http://status.mclive.eu/MinecraftServer/${args[0]}/25565/banner.png`
  ping(args[0], parseInt(port), (error, reponse) =>{
    if(error) return message.channel.send(new Discord.MessageEmbed()
                                               .setDescription("<:Cancel:635072844782370828> | No puedo encontrar este servidor")
                                               .setColor("RED"))
          let icon = `https://api.minetools.eu/favicon/${mcIP}`;
          let descReplace = /§\w/g;
      const embed = new Discord.MessageEmbed()
        
      .setAuthor(bot+' ┊ Minecraftserver', botavatar)
      .setDescription("Aquí estan los stats del servidor que pusiste!")
      .setFooter(message.author.tag)
      .addField("**Descripción del servidor:**", body.description.replace(descReplace, ""))
      .setThumbnail(icon)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("💻 | Status", status, true)
      .addField("👥 | Players Online", reponse.onlinePlayers + "/" + reponse.maxPlayers, true)
      .addField("📟 | IP", mcIP, true)
      .addField("🏓 | Ping", body.latency, true)
      .addField("<:Info:608779678093803530> | Versión", reponse.version, true)
      .setImage(motd)
        
      message.channel.send(embed)
  })
    });
  }
)}}