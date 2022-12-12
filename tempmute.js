const Discord = require("discord.js");
const ms = require("ms");

module.exports = { 
    config: {
        nombre: "tempmute",
        alias: []
    },
  run: async (client, message, args, lang) => {
    const db = require("megadb")
  //!tempmute @user 1s/m/h/d
  let perms = message.member.hasPermission("MANAGE_MESSAGES");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.resolve(args[0]));
  
  if(!perms) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar ese comando")
                                              .setColor("RED"))  
  
  if(!tomute) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))  
  
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | A él no le puedo mutear")
                                              .setColor("RED")) 
  
    if(message.author.id == tomute.id) return message.channel.send(new Discord.MessagEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No te puedes mutear a ti mismo")
                                              .setColor("RED")) 
    
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");
   await message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.updateOverwrite([
          {
          id: muterole.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"]
          }
])
      });
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        data: {
        name: "muted",
        color: "#000000",
        permissions:[]
        }
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions([
          {
          id: muterole.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"]
          }
])
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Especifica el tiempo del muteo y la razón")
                                              .setColor("RED")) 
  
  let razon = args.slice(2).join(" ") || "Razon no definida" 
  await(tomute.roles.add(muterole.id));
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(`<:Verified:635075337100853260> | <@${tomute.id}> ha sido muteado por ${ms(ms(mutetime))} | **Razón:** ${razon}`)
                      .setColor("GREEN"))

    setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(new Discord.MessageEmbed()
                      .setDescription(`<:Verified:635075337100853260> | <@${tomute.id}> ha sido desmuteado! | **Razón:** ${razon}`)
                      .setColor("GREEN"))
  }, ms(mutetime));

  }
}
