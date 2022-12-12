const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "cookie",
alias: []
    },
  run: async (client, message, args, lang) => {    
    
let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

if(!user) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | Debes mencionar a alguien")
                                              .setColor("RED"))  
    
if(!razon){
message.channel.send('**' + message.author.username +  '** Le dio una galleta a **' + message.mentions.users.first().username + '**\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ 🍪')
}else{
message.channel.send('**'+ user.username +',** tienes una :cookie: de **'+message.author.username+'**\n\n**Razón:** '+razon+'\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:'); 
 }
}}