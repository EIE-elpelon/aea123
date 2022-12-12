const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "snipe",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {

const msg = client.snipes.get(message.guild.id)
    if (!msg){
	 message.channel.send(new Discord.MessageEmbed()
   .setDescription("No se encuentra borrado un mensaje recientemente.")
   .setColor("RED"))
       .then(m => m.delete({timeout: 5000}));  
	}else{

 const main = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(msg.delete.tag, msg.delete.displayAvatarURL())
 .addField("Canal", `<#${msg.canal.id}>`, true)
 .addField("Mensaje", `${msg.content}`)
 message.channel.send(main);
  }
  }
}