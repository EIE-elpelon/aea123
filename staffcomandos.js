const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
const helpers_db = new db.crearDB("helpers", "helpers")
module.exports = { 
    config: {
nombre: "staffcomandos",
alias: []
    },
  run: async (client, message, args, lang) => {  
  
let helpers = await helpers_db.obtener("helpers")
if(!helpers.includes === message.author.id)
  return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))
  

  let bot = client.user.username
  let invite = "https://discordapp.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot"
  let servidores = client.guilds.cache.size.toLocaleString()
  let usuarios = client.users.cache.size.toLocaleString()
  let prefijo = process.env.PREFIX;
  let botavatar = client.user.avatarURL
  let ayarikito = process.env.OWNER;

  const embed = new Discord.MessageEmbed()

  .setColor("#5b00ff")
  .setTimestamp()
  .setFooter ("Solicitado por "+message.author.username, message.author.avatarURL)
  .setThumbnail(botavatar)
  .setAuthor(bot+" ┊ Comandos Staff", botavatar)
  .addField("Añadir-Eliminar del staff:", "<:Senseis:735969526080077827>, <:Creador:735969509764235415> -`addstaff`: Comando para agregar a un usuario al Staff del bot\n<:Senseis:735969526080077827>, <:Creador:735969509764235415> -`removestaff`: Comando para eliminar a un usuario del staff del bot.\n <:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658> -`addhelper`: Agrega como helper a el usuario mencionado\n<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658> -`removehelper`: Le quita helper al usuario mencionado")
  .addField('Moderacion:',
            '<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658>  -`staffban`: Comando para banear a cualquier user en cualquier servidor sin necesidad de permisos\n<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658> -`inviteserver`: Comando para crear una invitación del servidor que especificaste con una ID\n <:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658> -`byeserver`: Comando para que el bot salga del servidor que especificaste con una ID\n<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658> -`top10servers`: Te dice los 10 servidores mas grandes de Xutur')
  .addField('Interchat:',
            '<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658>, <:Helpers:735970486835609751> - `addblacklist`: Esta blacklist sirve para bloquear los usuarios en interchat\n <:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658>, <:Helpers:735970486835609751> -`removeblacklist`: Este comando sirve para quitar a un usuario de la blacklist.') 
  .addField('Extra:',
            '<:Senseis:735969526080077827>, <:Creador:735969509764235415>, <:JefeAdmins:735969768565243946>, <:Admins:735970078000152658>, <:Helpers:735970486835609751> -`staffbot`: Comando para ver el staff actual del bot.') 
  .addField('Medallas singinifado:',
           '**Creador** --> <:Creador:735969509764235415>\n **Sensei** --> <:Senseis:735969526080077827>\n **Admin Jefe** --> <:JefeAdmins:735969768565243946>\n **Admins** --> <:Admins:735970078000152658>\n **Helper** --> <:Helpers:735970486835609751>')
  message.channel.send(embed)
}}