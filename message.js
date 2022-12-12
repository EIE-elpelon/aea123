module.exports = async (client, message) => {
  const queue = client.queue
  
  const { GiveawaysManager } = require("discord-giveaways");
  const Discord = require("discord.js")
  const db = new(require("megadb")).crearDB("idiomas")
  const megadb = require("megadb")
let lang_sv = db.tiene(message.guild.id) ? await db.get(message.guild.id) : "es";

  let lang = require(`../../langs/${lang_sv}`);//c me fue el net weeeeeeeeee y no em carga discord :'v'
  const prefix = process.env.PREFIX;//mensaje de ecor :v
  const { interchat } = require(`../../interchat.js`)
  const { conexionlevel, toprango } = require("../../niveles.js")
//CUANDO EL BOT ES MENCIONADO
 let bot = client.user.username
  let invite = "https://discordapp.com/api/oauth2/authorize?client_id="+client.user.id+"&permissions=8&scope=bot"
  let servidores = client.guilds.cache.size.toLocaleString()
  let usuarios = client.users.cache.size.toLocaleString()
  let prefijo = process.env.PREFIX;
  let botavatar = client.user.avatarURL
  let ayarikito = process.env.OWNER;


if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
  if(message.guild.id == "732787608685379931") return ;message.channel.send(new Discord.MessageEmbed()
  .setDescription("**"+bot+"** Actualmente es un bot verificado por la comunidad de discord y tambien un bot seguro con una gran variedad de comandos y facil de usar para cualquier persona en el cual estos bots sirven para mdoerar, divertirse, buscar, etc.")
  .addField("**"+bot+"** tiene actualmente:","**"+usuarios+"** Usuarios <a:GiveAway3:670392977117413416>", )
  .addField("Y esta en :","**"+servidores+"** Servidores <a:GiveAway2:670392976278683679>",) 
  .setThumbnail(botavatar)
  .addField('Si buscas mi prefix es:', '`'+prefix+'`', true)
  .addField('Para saber mas de mi usa:', '`_help`')
  .setColor("#c51515"))
}

  if(message.author.bot || message.channel.type === "dm") return; //Si el mensaje es por DM devuelve FALSE (O si es de un bot)
  let args = message.content.slice(prefix.length).trim().split(/ +/g); //Argumentos
  let cmd = args.shift().toLowerCase();//Cmd ejecutado

  if(!message.content.startsWith(prefix)) {
    interchat(client, message, args)
    conexionlevel(client, message)

 const afkdb = new megadb.crearDB("afks", "afk")
    const afkreason = new megadb.crearDB("razones", "afk");
   if(afkdb.tiene(message.guild.id)){
     let lista = await afkdb.get(message.guild.id);
if(lista.includes(message.author.id)) {
  afkreason.eliminar(message.author.id);
  afkdb.extract(message.guild.id, message.author.id);
  message.channel.send("El usuario <@"+message.author.id+"> ha vuelto de su estado afk");
}
   }
if(message.mentions.users.first() && afkdb.tiene(message.guild.id)){
let xd = await afkdb.get(message.guild.id);
let estadosunidos = []
message.mentions.users.forEach(async x => {
if(xd.includes(x.id)){
estadosunidos.push(x.tag)
}
})
if(estadosunidos.length >= 1){
  let razon = await afkreason.get(message.mentions.users.first().id)
let decideteputa = estadosunidos.length > 1 ? 'están' : 'esta' 
message.channel.send(new Discord.MessageEmbed()
.setDescription('El usuario **'+estadosunidos.join(' ')+'** '+decideteputa+' afk! `-` Razón: **'+razon+"**")
.setColor("GREEN"))
}
}
return
}

 if(cmd){
     let canal = client.channels.cache.get("738969506667560992")
     canal.send("Comando **_"+cmd+"** usado por **"+message.author.username+"** en el servidor **"+message.guild.name+"**", {
disableMentions: "all"
})
   }

const ax = new megadb.crearDB('antitoxicos', 'sets') 
let palabrotas = ["Puto","Pene","Vagina","Culo","pene","Put0","Pto","W T F","Puta","Putas","PUTITO","hdpl","Putito","puta","putas","pvtas","puto","putos",
"Cabron","coño","cabron","verga","Verga","Vergon","vergon","Maricon","maricon","Feo","feo","Gil","gil","Horrible","horribles","Sucio","Sucios","sucio",
"sucios","tonto","Tonto","zorra","zorra","cabrones","fuck","concha la madre","concha tu madre","Concha Tu Madre","Concha tu Mandre","jueputa","rata",
"raton","Rata","pvto","Raton","Rata Inmunda","hijo de puta","alv","Hijo de puta","hijo De puta","mierda","wtf","coma mierda"
];
if(ax.tiene(`${message.guild.id}`)) {
if(palabrotas.some(word => message.content.toLowerCase().includes(word))) {
if(message.member.hasPermission("MANAGE_MESSAGES")) return;
      message.delete()
      message.reply("No Se Permiten Groserias").then(response => {
      return response.delete({timeout: 6000})      
      })
    }
  }

const a = new megadb.crearDB('antilinks', 'sets') 
let links = ["discord.gg","discord.me","discord.io/","discordapp.com/invite","https://",".com",".net","http://"
];
if(a.tiene(`${message.guild.id}`)) {
if(links.some(word => message.content.toLowerCase().includes(word))) {
if(message.member.hasPermission("MANAGE_MESSAGES")) return;      
      message.delete()
      message.reply("No Se Permiten Links").then(response => {
      return response.delete({timeout: 6000})        
      })
    }
  }
  
  let commandfile = client.commands.get(cmd) || client.commands.get(client.alias.get(cmd))
    //obtenemos el contenido commands de la colección clie(nt para que se a su alias)
  

  if(commandfile) commandfile.run(client, message, args, lang, queue)//SI tiene todo devolvera true ejecutado el cliente, mensaje y los argumentos
  
}