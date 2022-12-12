const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = { 
    config: {
nombre: "cat",
alias: []
    },
  run: async (client, message, args, lang) => {  
        
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  const catembed = new Discord.MessageEmbed()
  
    .setColor("RANDOM")
    .setAuthor(bot+' ┊ Cat', botavatar)
    .setImage(body.file)
    .setFooter(message.author.tag)
    .setTimestamp()
  message.channel.send(catembed);

}
}