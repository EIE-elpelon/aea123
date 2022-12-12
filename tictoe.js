const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "tictoe",
alias: []
    },
  run: async (client, message, args, lang) => {  

    const tresenraya = require('tresenraya');
 
const usuario = message.mentions.users.first();
const no_mencion = new Discord.MessageEmbed()
.setDescription("Menciona al usuario, con el cual jugaras Tres en Raya")
.setColor("RED")
if(!usuario) return message.channel.send(no_mencion);
  
const partida = new tresenraya.partida({ jugadores: [message.author.id, usuario.id] })
  
partida.on('ganador', (jugador, tablero, paso) => { // cuando encuentra a algún ganador se emite el evento 'ganador'

const win = new Discord.MessageEmbed()
.setDescription('¡Ha ganado ' + client.users.resolve(jugador).username + ' en esta partida! Después de `' + paso + ' pasos.`\n\n' + tablero.string + '\n\nLo siento, ' + client.users.resolve(partida.perdedor).username + '... 😦')
.setColor("RANDOM")
    
  message.channel.send(win);
    
});
  
partida.on('empate', (jugadores, tablero, paso) => { // si se produce un empate se emite el evento 'empate'
    
    const empate = new Discord.MessageEmbed()
    .setDescription('¡Ha habido un empate entre ' + jugadores.map(x => client.users.resolve(x).username).join(' y ') + '!')
    .setColor("RANDOM")
  message.channel.send(empate);
    
});
  
  const empieza = new Discord.MessageEmbed()
  .setDescription("Empieza " + client.users.resolve(partida.turno.jugador).username + ", Escribe un número del 1 al 9 [`" + partida.turno.ficha + "`]\n\n" + partida.tablero.string)
  .setColor("GREEN")
message.channel.send(empieza)
 
const colector = message.channel.createMessageCollector(msg => msg.author.id === partida.turno.jugador && !isNaN(msg.content) && (Number(msg.content) >= 1 && Number(msg.content) <= 9) && partida.disponible(msg.content) && !partida.finalizado);
 
colector.on('collect', (msg) => {
      
  partida.elegir(msg.content); // elegir la posición dependiendo del contenido del mensaje recolectado
  
  if(partida.finalizado) {
    
    colector.stop();
    return;
    
  } // si la partida ya ha finalizado (ya sea por que alguien ha ganado o ha habido un empate), para el colector y retorna nada
      
      const sin_ideas = new Discord.MessageEmbed()
      .setDescription('Turno de ' + client.users.resolve(partida.turno.jugador).username + ' [`' + partida.turno.ficha + '`]\n\n' + partida.tablero.string)
      .setColor("GREEN")

  message.channel.send(sin_ideas);
      
});

  }
}