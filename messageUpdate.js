module.exports = async (client, oldMessage, newMessage) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

const a = new db.crearDB('antilinks', 'sets') 
let links = ["discord.gg","discord.me","discord.io/","discordapp.com/invite","https://",".com",".net","http://"
];
if(a.tiene(`${oldMessage.guild.id}`)) {
if(links.some(word => newMessage.content.toLowerCase().includes(word))) {
if(oldMessage.member.hasPermission("MANAGE_MESSAGES")) return;      
      newMessage.delete()
      newMessage.reply("No Se Permiten Links").then(response => {
      return response.delete({timeout: 6000})        
      })
    }
  }

const ax = new db.crearDB('antitoxicos', 'sets') 
let palabrotas = ["Puto","Pene","Vagina","Culo","pene","Put0","Pto","W T F","Puta","Putas","PUTITO","hdpl","Putito","puta","putas","pvtas","puto","putos",
"Cabron","coño","cabron","verga","Verga","Vergon","vergon","Maricon","maricon","Feo","feo","Gil","gil","Horrible","horribles","Sucio","Sucios","sucio",
"sucios","tonto","Tonto","zorra","zorra","cabrones","fuck","concha la madre","concha tu madre","Concha Tu Madre","Concha tu Mandre","jueputa","rata",
"raton","Rata","pvto","Raton","Rata Inmunda","hijo de puta","alv","Hijo de puta","hijo De puta","mierda","wtf","coma mierda"
];
if(ax.tiene(`${oldMessage.guild.id}`)) {
if(palabrotas.some(word => newMessage.content.toLowerCase().includes(word))) {
if(oldMessage.member.hasPermission("MANAGE_MESSAGES")) return;
      newMessage.delete()
      newMessage.reply("No Se Permiten Groserias").then(response => {
      return response.delete({timeout: 6000})
      })
    }
  }


if(!logs_db.tiene(`${oldMessage.guild.id}`)) return;
   if(!oldMessage.content) return;
   if(!newMessage.content) return;
 let logs = await logs_db.obtener(`${newMessage.guild.id}`)
 let botavatar = client.user.avatarURL()
 let bot = client.user.username
 const canalrendered = client.channels.resolve(logs)
 const logEmbed = new Discord.MessageEmbed()
 .setAuthor(bot+" | Mensaje editado", botavatar)
 .setDescription(" **Mensaje Editado**")
 .setColor("#c51515")
 .addField(" <:Staff:634625948091809802> Usuario/a:", `<@${oldMessage.author.id}>`, true)
 .addField("<:Info:608779678093803530> Viejo Mensaje:", oldMessage.content, true)
 .addField("<a:settings:670392976614096899> Nuevo Mensaje:", newMessage.content, true)
 canalrendered.send(logEmbed)
}