var cheerio = require("cheerio"); 
const Discord = require("discord.js");
var request = require("request"); 
module.exports = { 
    config: {
nombre: "img",
alias: []
    },
  run: async (client, message, args, lang) => {
    
var parts = message.content.split(" ");    
var search = parts.slice(1).join(" ");
    
 let bot = client.user.username 
 let prefijo = process.env.PREFIX;
 let botavatar = client.user.avatarURL()
 
if(!search) return message.channel.send(new Discord.MessageEmbed()
  .setAuthor(bot+' ┊ Imagen', botavatar)
  .setDescription("**Escribe el nombre de la imagen que quieres buscar!**")
  .addField("Ejemplo :","**"+prefijo+"imagen** [nombre de la imagen]")
  .setColor("RANDOM")
     .setThumbnail("https://media.discordapp.net/attachments/710234350595342356/714855618367979540/Screenshot_1.png?width=499&height=454")
   .setFooter(message.author.tag)
   .setTimestamp())
    
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
    request(options, function(error, response, responseBody) {
        if (error) {
       
            return;
        }
 
        $ = cheerio.load(responseBody); 
      
        var links = $(".image a.link"); 
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }

      
     
      
const embed = new Discord.MessageEmbed()
.setImage(urls[0]) 
.setFooter(message.author.tag)
.setColor("RANDOM")
message.channel.send(embed);
    });
}
}