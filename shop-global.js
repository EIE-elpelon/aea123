const Discord = require("discord.js")
const db = require('megadb') 
module.exports = { 
    config: {
nombre: "shop-global",
alias: ["tienda"]
    },
  run: async (client, message, args, lang) => { 

const balance = new db.crearDB('balance', 'level')
    
  let bot = client.user.username
  let servidores = client.guilds.cache.size.toLocaleString()
  let usuarios = client.users.cache.size.toLocaleString()
  let prefijo = process.env.PREFIX;
  let botavatar = client.user.avatarURL()
  let ayarikito = process.env.OWNER;
  let usuario = message.mentions.members.first() || client.users.resolve(args[0]) || message.author; 
  let bal = await balance.obtener(`${usuario.id}`)


  const embed = new Discord.MessageEmbed()

  .setColor("#5b00ff")
  .setTimestamp()
  .setFooter("Usa "+prefijo+"buy [objeto] para comprar")
  .setThumbnail("https://cdn.discordapp.com/attachments/686422460744204332/727017735036338257/tenor.gif")
  .setAuthor(bot+" ┊ Shop", botavatar)
  .setDescription("Tienda:")
  .addField("🏅 Medallas:", "**[1]** <:Partner:634625480879898625>(Partner) **[4000 <:Coin:660424723854786584>]** \n **[2]** <a:HypeSquad2:670392975410462720>(Hype) **[1500 <:Coin:660424723854786584>]**\n **[3]** <a:settings:670392976614096899>(Settings) **[3000 <:Coin:660424723854786584>]** \n**[4]** <:Nitro:634625179196194816>(Nitro) **[5000<:Coin:660424723854786584>]**\n **[5]** <:osu:732459814092800051>(Osu) **[2000<:Coin:660424723854786584>]**\n **[6]** <a:maikraaxdxd:690547831185997904>(Minecraft) **[1000 <:Coin:660424723854786584>]**\n **[7]** <a:Beer:719552210790252594>(**VIP**) **[10000 <:Coin:660424723854786584>]**", true)

  .addField('------------------------------------------------------------------------',
  '**------------------------------------------------------------------------**')
  
  .addField("<a:levelup:733894389704949761> Niveles", "**[1]** Un Nivel **[1000 <:Coin:660424723854786584>]**\n**[2]** Dos Niveles **[2000 <:Coin:660424723854786584>]**\n**[3]** Tres Niveles **[3000 <:Coin:660424723854786584>]**\n**[4]** Cuatro Niveles **[4000 <:Coin:660424723854786584>]**\n**[5]** Cinco Niveles **[5000 <:Coin:660424723854786584>]**")

  .addField('------------------------------------------------------------------------',
  '**------------------------------------------------------------------------**')

   .addField("<a:Diamond:733902597119017151> Niveles (**SOLO VIP's**)", "**[1]** Seis Niveles **[6000 <:Coin:660424723854786584>]**\n**[2]** Siete Niveles **[7000 <:Coin:660424723854786584>]**\n**[3]** Ocho Niveles **[8000 <:Coin:660424723854786584>]**\n**[4]** Nueve Niveles **[9000 <:Coin:660424723854786584>]**\n**[5]** Diez Niveles **[10000 <:Coin:660424723854786584>]**\n**[6]** Once Niveles **[11000 <:Coin:660424723854786584>]**\n**[7]** Doce Niveles **[12000 <:Coin:660424723854786584>]**\n**[8]** Trece Niveles **[13000 <:Coin:660424723854786584>]**\n**[9]** Catorce Niveles **[14000 <:Coin:660424723854786584>]**\n**[10]** Quince Niveles **[15000 <:Coin:660424723854786584>]**")
  .addField('<:Coin:660424723854786584> **Tu dinero actual:**', bal)
  //<a:Beer:719552210790252594>
  // <:Coin:660424723854786584>
  
  message.channel.send(embed)


}} 
