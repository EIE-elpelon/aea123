const Discord = require("discord.js");
module.exports = { 
    config: {
nombre: "fish",
alias: []
    },
  run: async (client, message, args, lang) => {   
    
let rollfish = Math.floor(Math.random() * 7) +1;
if(rollfish === 1){
    message.channel.send('Felicitaciones, **' + message.author.username + '**! pescaste: :tropical_fish:');

}else if(rollfish === 2){
    message.channel.send('Felicitaciones, **' + message.author.username + '**! pescaste: :fish:');

}else {
     
    message.channel.send('Felicitaciones, **' + message.author.username + '**! pescaste: :shopping_cart:');
}
}}