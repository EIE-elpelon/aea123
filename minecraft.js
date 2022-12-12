const Discord = require ('discord.js')
const MCAPI = require("minecraft-lib")
const request = require("request")
const momonet = require("moment")
module.exports = { 
    config: {
nombre: "minecraft",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
var text = args[0];     
var apiURL = `https://api.mojang.com/users/profiles/minecraft/${text}`;
request(apiURL, function(err, resp, body) {
body = JSON.parse(body);

  let id = body.id;
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL() 
  let usernamexd = args[0]
  let avatarURL = `https://crafatar.com/avatars/${id}.png/`
  let texto = args.join(" "); 
  let bodyURL = `https://minotar.net/armor/body/${text}/100.png`;
  if (!args[0]) 
    var uwu = new Discord.MessageEmbed()
   .setAuthor(bot+' ┊ Minecraft', botavatar)
   .setDescription("**Necesitas escribir el nombre de usuario que quieres ver!**")
   .addField("Ejemplo :","**"+prefijo+"minecraft** [nombre del user]")
   .setColor("RANDOM")
   .setThumbnail("https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_960_720.png")
   .setFooter(message.author.tag)
   .setTimestamp()
    
   if(!texto)  return message.channel.send(uwu)

    
    MCAPI.players.get(usernamexd)
.then(player => {
  const embed = new Discord.MessageEmbed()
 
  .setAuthor(bot+' ┊ Minecraft', botavatar)
  .setDescription("Estas son las stats del usuario **"+player.username+"**!")
  .addField('``💬`` | Nombre', player.username, true)
  .addField('``📟`` | UUID', player.uuid, true)
  //.addField('``🔷`` | Skin', '[Skin URL]('+player.textures.skin_url+')')
  .addField('``🔷`` | Skin Cabeza', `[Skin Cabeza URL](https://api.mojang.com/users/profiles/minecraft/{text})`, true)
  .addField('<a:maikraaxdxd:690547831185997904> | Skin Cuerpo', `[Skin Cuerpo URL](https://minotar.net/armor/body/${text}/100.png)`, true)
  .setThumbnail(avatarURL)
  .setImage(bodyURL)
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp()

  message.channel.send(embed)
});
})}}