const Discord = require("discord.js");
const ms = require("ms");

module.exports = { 
    config: {
        nombre: "unmute",
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
  
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");

  await(tomute.roles.remove(muterole.id));
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(`<:Verified:635075337100853260> | <@${tomute.id}> ha sido desmuteado`)
                      .setColor("GREEN"))

}
}
