const Discord = require('discord.js')
module.exports = { 
    config: {
nombre: "rolecolor",
alias: []
    },
  run: async (client, message, args, lang) => {
    
const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
    
    if(!message.member.hasPermission("ADMINISTRATOR")){
      return message.channel.send("Perdon, pero no tienes el permiso de: `ADMINISTRATOR`")
    } 
    
    const embed1 = new Discord.MessageEmbed()
    .setDescription(`Debes mencionar al Rol al cual cambiar de color`)
    .setColor("RED")
    .setTimestamp(new Date());
    
    const embed2 = new Discord.MessageEmbed()
    
    .setDescription(`Debes ingresar un color HEX válido, sin #!\n(Sino sabes como obtener un color HEX, puedes visitar esta pagina: [HTML Color Codes](https://html-color-codes.info/codigos-de-colores-hexadecimales/) y seleccionar tu color e introducirlo aqui).`)
    .setColor("RED")
  
    .setTimestamp(new Date());
    
    const embedColor = new Discord.MessageEmbed()
    .setDescription(`El Color del Rol ${role} Acaba de ser cambiado a \`#${args[1]}\``)
    .setThumbnail(`https://dummyimage.com/1000/${args[1]}/&text=%20`)
    .setColor(`#${args[1]}`)
    .setTimestamp(new Date());
    
    if(!args[0]) return message.channel.send(embed1);
    if(!args[1]) return message.channel.send(embed2);
    var isOk = /^[0-9A-F]{6}$/i.test(args[1])
    if (isOk === false) return message.reply(embed2);
    
    role.setColor(`#${args[1]}`)
      .then(updated => message.channel.send(embedColor))
      .catch(console.error);

  }
}