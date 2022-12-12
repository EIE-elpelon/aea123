module.exports = { 
config: {
nombre: "pacman-guia",
alias: []
    },
run: async (client, message, args, lang) => {
  const Discord = require("discord.js")
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
const embed = new Discord.MessageEmbed()
.setAuthor(bot+" ┊ Love", botavatar)
.setDescription("`ᗧ`Eres tú \n`▣` Son paredes la cual no te dejan mover\n`◇` Son las monedas la cual debes recolectar\n`ᗣ` Son enemigos, si los tocas te matan.")
.setColor("GREEN")
//message.channel.send("`ᗧ`Eres tú \n`▣` Son paredes la cual no te dejan mover\n`◇` Son las monedas la cual debes recolectar\n`ᗣ` Son enemigos, si los tocas te matan.") 
  
}
}