const Discord = require("discord.js");
module.exports = { 
    config: {
nombre: "sugerencia",
alias: []
    },
  run: async (client, message, args, lang) => {      
    
    let channel = client.channels.resolve("734966229839904795");
  let user = message.author;
  let sugerencia = args.join(" ");
  if (!sugerencia)
    return message.channel.send(new Discord.MessageEmbed()
                                .setDescription("<:Cancel:635072844782370828> | Debes decir la sugerencia")
                                .setColor("RED"))


  const embed = new Discord.MessageEmbed()
    .setAuthor("Sugerencia:")
    .setDescription(`⠀\n${sugerencia} \n ⠀`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`<a:On:608808102606798848> Sugerenia de:`, `${message.author.tag}`) 
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
  channel.send(embed).then(async function(message) {
    message.react("✅").then(() => 
                                                       message.react("❎"), 20000);
  });
  message.channel.send(new Discord.MessageEmbed()
                       .setDescription("<:Verified:635075337100853260> | Sugerencia enviado con éxito")
                       .setColor("GREEN"))
    
  }}