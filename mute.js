const Discord = require("discord.js");
const ms = require("ms");

module.exports = { 
    config: {
        nombre: "mute",
        alias: []
    },
  run: async (client, message, args, lang) => {

  //!tempmute @user 1s/m/h/d
  let perms = message.member.hasPermission("MANAGE_MESSAGES");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.resolve(args[0]));
  
  if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))
  
  if(!tomute) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))  

  if(!message.guild.me.hasPermission("MANAGE_CHANNELS") && !message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tengo permisos de `Gestionar Roles` y de `Gestionar Canales`")
.setColor("RED"))

if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tengo permisos de `Gestionar Roles`!")
.setColor("RED"))

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("No tengo permisos de `Gestionar Canales`!")
.setColor("RED"))

if(message.member.roles.highest.comparePositionTo(tomute.roles.highest) <= 0) return message.channel.send(new Discord.MessageEmbed()
.setDescription("Este usuario tiene un ROL mayor o igual que tú!")
.setColor("RED"))

if(message.member.roles.highest.comparePositionTo(message.guild.me.roles.highest) <= 0) return message.channel.send(new Discord.MessageEmbed()
.setDescription("El usuario mencionado tiene un rol mayor que el mio!")
.setColor("RED"))

  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        data: {
        name: "muted",
        color: "#000000",
        permissions: []
        }
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.updateOverwrite([
          {
          id: muterole.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"]
          }
])
})
      
      
      await tomute.roles.add(muterole)
      
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  
  
  let razon = args.slice(2).join(" ") || "Razon no definida" 
  await(tomute.roles.add(muterole.id));
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(`<:Verified:635075337100853260> | <@${tomute.id}> ha sido muteado | **Razón:** ${razon}`)
                      .setColor("GREEN")).catch(err => {
                        message.channel.send(new Discord.MessageEmbed()
                        .setDescription("Al parecer ha ocurrido un error!")
                        .setColor("RED"))
                      })

}
}
