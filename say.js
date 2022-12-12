const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = { 
    config: {
        nombre: "say",
        descripcion: ""
    },
  run: async (client, message, args) => {
   let say = args.join(" ")
   const no_say = new Discord.MessageEmbed()
   .setDescription("No has escrito el texto, que yo diré")
   .setColor("RED")
   if(!say) return message.channel.send(no_say)

   message.delete()
   message.channel.send(say) 
  }
}