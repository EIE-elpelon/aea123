module.exports = { 
    config: {
        nombre: "tatsu",
        alias: []
    },
  run: async (client, message, args, lang) => {
    
const Discord = require("discord.js");
const db = require('megadb') 
 const balserver = new db.crearDB("balance_server", "tienda");
const banco = new db.crearDB("banco_server", "tienda");
const rep = new db.crearDB('rep', 'level') 
const level = new db.crearDB('levels', 'level') 
const texto = new db.crearDB('textopersonal', 'level') 
const balance = new db.crearDB('balance', 'level')
const color = new db.crearDB('color', 'level')
const marry = new db.crearDB('marry', 'level')
const Canvas = require("canvas");
const canvas = Canvas.createCanvas(474, 474);
  Canvas.registerFont("verdana.ttf", {family: "verdana"})
  
const ctx = canvas.getContext('2d');
const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/609475921472258056/759677478800195616/En_mano1.png');
const user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author
const member = message.mentions.members.first() || message.member
//const wea = await Canvas.loadImage("https://cdn.discordapp.com/attachments/609475921472258056/759677478800195616/En_mano1.png");
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: "png"}))
const applyText = (canvas, text) => {

    let fontSize = 100;
    do {
    ctx.font = `${fontSize -= 10}px verdana`;
    } while (ctx.measureText(text).width > canvas.width - 400);
      return ctx.font;};
    
    let botavatar = client.user.displayAvatarURL({format: "png"})
    
    let usuario = message.mentions.members.first() || client.users.resolve(args[0]) || message.author; 
    let { nivel, xp } = await level.obtener(`${usuario.id}`) 
    let subirlvl = 5 * (nivel ** 2) + 50 * nivel + 100 
    let levelxd = `${nivel}`
    let skere = `${xp}/${subirlvl}`
    let bal = await balance.obtener(`${usuario.id}`)
    let personal = await texto.obtener(`${usuario.id}`)
    let colorxd = await color.obtener(`${usuario.id}`)
    let reps;
    reps = await rep.obtener(`${usuario.id}`)
    let marryxd; 
    if(marry.tiene(usuario.id)){
    marryxd = marry.obtener(`${usuario.id}.usertag`)
    }
    marryxd = "No está casado@"
if(!level.tiene(`${usuario.id}`)) return message.channel.send('Este usuario no esta en la base de datos') 

  
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
   // ctx.drawImage(wea, canvas.width / 4.5, canvas.height / 4.5)
    ctx.beginPath();
    ctx.arc(70, 300, 300, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.fillText(`${banco}`, 230, 163)
    ctx.fillText(`${balserver}`, 222, 208)
    
    ctx.font="bold 15px verdana";
    //ctx.fillText(`${nivel}`, 125, 200);
    //ctx.fillStyle = '#FFFFFF';
    //ctx.font="bold 18px verdana";
    //ctx.fillText(`+${reps}rep`, 34, 160);
    ctx.fillText(`${user.tag}`, 180, 128);
    ctx.fillStyle = `${colorxd}`;
    ctx.font="bold 10px verdana";
    //ctx.fillText(`${personal}`, 110, 270);

    
    ctx.drawImage(avatar, 20, 73, 70, 70)
    
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "balXutur.png");
 
    message.channel.send(attachment)

}} 