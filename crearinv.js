const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "crearinv",
alias: []
    },
  run: async (client, message, args, lang) => {
    let id = message.channel.id;
    message.guild.channels.resolve(id).createInvite({
    maxAge: 0       //maxAge: 0 significa que el link sera permanente

}).then(invite =>  
    message.channel.send('**Aquí está la invitación de este servidor:** \n \n' + invite.url)
).catch(e => {
      message.channel.send("No tengo permiso para crear invtación")
    })
  }
}