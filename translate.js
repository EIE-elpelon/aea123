const Discord = require('discord.js');
const translator = require("yandex-translate")
("trnsl.1.1.20190502T135603Z.ebd196644805c129.def1b42612afe8094a12b4638ea0dc51c33a259e");
module.exports = { 
    config: {
nombre: "translate",
alias: []
    },
  run: async (client, message, args, lang) => {   
  
  let busqueda = args.join(' ');
  let prefijo = process.env.PREFIX;
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
   const embed = new Discord.MessageEmbed()
   .setAuthor(bot+' ┊ Translate', botavatar)
   .setDescription("**Necesitas ingresar el idioma al cual se traducirá tu mensaje!**")
   .addField("Ejemplo :","**"+prefijo+"translate** [lenguaje a traducir] [mensaje]")
   .addField("Idiomas Ejemplos :","en (Ingles),es (español) y otros..")
   .setColor("RANDOM")
   .setThumbnail("https://cdn.dribbble.com/users/502247/screenshots/5624935/final_composition_option_4_.gif")
   .setFooter(message.author.tag)
   .setTimestamp()
if (!busqueda) return message.channel.send(embed);
  
    let langxd = args[0]; // Obtendra el languaje en el argumento 0 que seria el texto despues del comando
    let msg = args.slice(1).join(' '); // Aca obtendra el mensaje a traducir despues del argumento 0.
    
    translator.translate(msg, { to: langxd}, function(err, res) { 
      const era = new Discord.MessageEmbed()
        if(err) return message.channel.send( new Discord.MessageEmbed()
                                            .setDescription(`<:Cancel:635072844782370828> | Ocurrió un error al tratar de traducir el mensaje, Error: ${err}`)
                                            .setColor("RED"))
                             
        const Trad = new Discord.MessageEmbed()
        .setAuthor(bot+' ┊ Translate', botavatar)
        .setDescription(`${message.member}`+" Aquí la traducion ``=>``"+` ${res.text}`)
        .setColor("RANDOM")
        .setFooter(message.author.tag)
        .setTimestamp()
        .setThumbnail('https://cdn.dribbble.com/users/865730/screenshots/5333886/translate.gif')
      message.channel.send(Trad)
     })
     return;
}
}