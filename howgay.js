const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "howgay",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            let mencionado = message.mentions.members.first();
		if(!mencionado) {
      const embed = new Discord.MessageEmbed()
    .setDescription("Eres un "+random+"% Gay 🏳️‍🌈")
    .setColor("RANDOM")
      message.channel.send(embed)

    } else {
      
      
const embed = new Discord.MessageEmbed()
    .setDescription(mencionado+" es un "+random+"% Gay 🏳️‍🌈")
    .setColor("RANDOM")

message.channel.send(embed);

  


}}}