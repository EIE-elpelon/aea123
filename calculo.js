
module.exports = { 
    config: {
nombre: "calculo",
alias: []
    },
  run: async (client, message, args, lang) => {  
    const math = require("math-expression-evaluator");
    const Discord = require('discord.js')
    
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
      .addField("**Signo** `+`", "Singificado: **Suma**")
      .addField("**Signo** `-`", "Singificado: **Resta**")
      .addField("**Signo** `*`", "Significado: **Multiplicación**")
      .addField("**Signo** `/`", "Significado: **División**")
      .addField("**Uso**", "`2+5` | `2-5` | `2*5` | `2/6`")
      .addField("Ejemplo :","**"+prefijo+"calculo** [tu calculo]")               
      .setAuthor(bot+' ┊ Calculo', botavatar)
      .setDescription("**Necesitas escribir el nombre de usuario que quieres ver!**")
      .setColor("RANDOM")
      .setThumbnail("https://images.vexels.com/media/users/3/127358/isolated/preview/736663fe6f9e03fcb39ace9020c42b4c-icono-estacionario-de-la-calculadora-by-vexels.png")
      .setFooter(message.author.tag)
      .setTimestamp())
  
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); 
  } catch (e) {
    resultado = "Syntax Error 404"; 
  }
    const embed = new Discord.MessageEmbed()
  .addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) 
  .setTitle("📊 Calculadora")
  .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
    
  await message.channel.send(embed);
}}