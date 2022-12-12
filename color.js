const marsnpm = require("marsnpm");
const Discord = require('discord.js')

module.exports = { 
    config: {
nombre: "color",
alias: []
    },
  run: async (client, message, args, lang) => { 
    
    
    let color2 = args.slice(0).join(' ')
    let texto = args.join(" ");
let bot = client.user.username
let botavatar = client.user.avatarURL()
let embas = new Discord.MessageEmbed()
        
            .setAuthor(bot+' ┊ Color', client.user.avatarURL())
            .setDescription("Debes escribir el color que quieres y te mandamos una imagen de ese color (Los nombres de los colores debe ser en Ingles)")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/avatars/597957157509398539/e15135decdfb13e17187489bb3f3420d.png?size=2048")
            .setFooter(message.author.tag)
            .setTimestamp()

if(!color2) return message.channel.send(embas)
    try {
        let img = await marsnpm.color(color2)

        let embed = new Discord.MessageEmbed()
            .attachFiles([{
                attachment: img,
                name: "color.png"
            }])
            .setColor("RANDOM")
            .setFooter(message.author.tag)
            .setImage("attachment://color.png")

        message.channel.send(embed)
    } catch (error) {
        error => console.log(error);
        
        let embud = new Discord.MessageEmbed()
        
            .setAuthor(bot+' ┊ Color', client.user.avatarURL())
            .setDescription("Debes escribir el color que quieres y te mandamos una imagen de ese color (Los nombres de los colores debe ser en Ingles)")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/avatars/597957157509398539/e15135decdfb13e17187489bb3f3420d.png?size=2048")
            .setFooter(message.author.tag)
            .setTimestamp()
      
        message.channel.send(embud)
    }
}
}