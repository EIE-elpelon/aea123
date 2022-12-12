module.exports = { 
    config: {
nombre: "pacman",
alias: []
    },
run: async (client, message, args, lang) => { 
const game = require("pacman-djs");
const Discord = require('discord.js');
 
let mapa = [
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
  "▣▩◇◇◇▩▩▩ᗣ▩▩▩◇◇◇▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣◇▩▩▩▩▩▩ᗣ▩▩▩▩▩▩◇▣",
  "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩◇▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩◇◇◇▩▩▩ᗧ▩▩▩◇◇◇▩▣",
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
]
 
let start = new game.PacGame(mapa, 3, {
  win_text: message.author.username + " ganaste!",
  to_lose_text: message.author.username + " perdiste!",
  time_out_text: "Se acabo el tiempo!",
  coin_points: 20,
  coin_text: "💰",
  time_text: "⏲"
})
 
start.start_game(message)
 
start.on("end", (type, monedas, tiempo) => {
  if(type == "ghost") {
    //haz algo
  }
  else if(type == "player") {
    //haz algo
  }
  else if(type == "time") {
    //haz algo
  }
  else if(type == "error") {
    //haz algo
  }
})
}
}