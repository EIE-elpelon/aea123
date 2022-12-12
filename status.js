const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "status",
alias: []
    },
  run: async (client, message, args, lang) => { 
let color = {
      "online": "#00c903",
      "idle": "#ff9a00",
      "dnd": "#ff0000",
      "offline": "#d8d8d8"
};
let estados = {
      "online": "<:online:635777670864568320> En Línea",
      "idle": "<:idle1:635777501389520907> Ausente",
      "dnd": "<:dnd1:635777246401134593> No molestar",
      "offline": "<:offline1:635777291322130434> Desconectado/invisible"
};

let user = message.mentions.users.first() || message.author
if(!user) return message.reply(`¡Mencione a un usuario!`);

const embed = new Discord.MessageEmbed()
    .setColor(color[user.presence.status])
    .addField(`Estado de ${user.username}`, `${estados[user.presence.status]}`)
  
message.channel.send(embed)}
}