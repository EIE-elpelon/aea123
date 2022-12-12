const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "comandos",
alias: []
    },
  run: async (client, message, args, lang) => {   
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let prefijo = process.env.PREFIX;
  let invite = "https://discordapp.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot"

 
  const embed = new Discord.MessageEmbed()
  
  .setColor("#c51515")
  .setTimestamp()
  .setFooter("Usa "+prefijo+"help para saber más sobre el bot", botavatar)
  .setThumbnail(botavatar)
  .setAuthor(bot+" ┊ Comandos", botavatar)
  .setDescription("Hola aqui tienes mis comandos, por favor usalos con moderacion y diversion para que disfrutes del bot al 100% <a:verificaoooxdd:690547833195069471>")
  .addField("<:Info:608779678093803530> **Informacion**:",
            "`help`**, ** `userinfo`**, **`avatarbot`**, **`avatar`**,**`botping`**, **`infobot`**, **`infomembers`**, **`roles`**, **`serveremojis`**, **`servericon`**, **`serverinfo`**, **`vip`**. **")
            
  .addField("<a:nocxd:717585193417834526> **Utilidad**:",
            "`afk`**, **`addrole`**, **`allbadges`**, **`antilinks`**, **`antitoxicos`**, **`ban`**, **`blockchat`**, **`clear`**, **`color`**, **`cookie`**, **`crearinv`**, **`encuesta`**, **`encuesta2`**, **`esay`**, **`giveaway`**, **`idban`**, **`invite`**, **`kick`**, **`mute`**, **`nickname`**, **`removerole`**, **`rolecolor`**, **`slowmode`**, **`status`**, **`tempban`**, **`tempmute`**, **`unblockchat`**, **`unmute`**, **`unwarn`**, **`warn`**, **`warnlist`**. **")
  
  .addField("<a:On:608808102606798848>-<a:dnd:608808102698942464> Sets",
            "`cancelleave`**, **`cancellogs`**, **`cancelwelcomerole`**, **`levelup`**, **`setleave(mantenimiento)`**, **`setleaveimg`**, **`setlogs`**, **`setwelcome(mantenimiento)`**, **`setwelcomeimg`**, **`setwelcomerole`**, **`testwel`**. **")
  
  .addField("<a:Beer:719552210790252594> **Diversión**:",
            "`8ball`**, **`ascii`**, **`buscaminas`**, **`calculo`**, **`cookie`**, **`f`**, **`fish`**, **`howgay`**, **`logromc`**, **`love`**, **`meme(mantenimiento)`**, **`pacman-guia`**, **`roll`**, **`say`**, **`sedijo`**, **`tictoe`**. **")
              
  .addField("<a:discord:699095765200535623> **Busqueda**:",
            "`anime`**, **`cat`**, **`clima`**, **`covid-19`**, **`dog`**, **`food`**, **`fornite`**, **`img`**, **`lyrics`**, **`minecraft`**, **`minecraftserver`**, **`osu`**, **`translate`**. **")
  
  .addField("<a:settings:670392976614096899> **Manipulacion de imagenes**:",
            "**MANTENIMIENTO**")
  
  .addField("<a:Streaming:608808102770245643> **Social**:",
            "`profile`**, ** `xp`**, ** `monedas`**, ** `setinfo`**, ** `setcolor`**, ** `rep`**, ** `daily`**, ** `top`**, ** `marry`**, ** `divorce`**, ** `work-global`**, ** `shop`**, ** `buy`**, ** `sell`**. **")
            
  .addField("<:interchat2:726664450408710165> **Interchat**:",
            "`interchat`**, **`reportuser`**. **")
       
  .addField("<a:verifiedxdxd:715405717561016400> **Musica**:",
            "`disconnect`**, **`loop`**, **`nowplay`**, **`pause`**, **`play`**, **`queue`**, **`remove`**, **`resume`**, **`skip`**, **`volume`**. **")
  
  .addField("<a:Prisma2:740567464869625866> **Economia**:",
            "`addwork`**, **`bal`**, **`buy`**, **`create-item`**, **`dar-dinero`**, **`delete-item`**, **`deposit`**, **`inventario`**, **`setitem`**, **`setrol-item`**, **`shop`**, **`setdescripcion-item`**, **`work`**. **")
  
  .addField('-----------------------------------------------------------------------------',
            '**-----------------------------------------------------------------------------**')
            
  .addField('<a:si:726313361968594984> **Invitame Ahora** <a:si:726313361968594984> ',
            '[[Invítame]]('+invite+')')
  
  .addField('<a:nocxd:717585193417834526> Suscribete al canal de los creadores <a:nocxd:717585193417834526>',
            '[[YouTube Ayarikito]](https://www.youtube.com/channel/UCkOxAS2XUV2rRVMnDzoKh3A?view_as=subscriber)')
  
  .addField('<a:cerveza:717533549141688323> Vota por mi <a:cerveza:717533549141688323>',
            '[[Discord Boats]](https://discord.boats/bot/707006024896217128/vote)**, ** [[Top.gg]](https://top.gg/bot/707006024896217128/vote)')
            
            
  message.channel.send(embed)
  
  
  
}}