const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "f",
alias: []
    },
  run: async (client, message, args, lang) => {      

    let msg = await message.channel.send("**Press 🇫 to pay respects**");

msg.react("🇫");
    let a = 0
    msg.awaitReactions((reaction, user) => {
      if(user.bot) return;
      if(reaction.emoji.name === "🇫"){
        message.channel.send(` **${user.username}** Ha dado sus respetos. `)
        a++
      }   
      
    },{max: 1, time: 5000})
      .then(c => {
        if(a === 0){
          message.channel.send("Absolutamente nadie quiso dar sus respetos a **" + message.author.username + "**")
        }else if(a === 1){
          message.channel.send("Al final solo una persona dio sus respetos a **" +   message.author.username + "**"  )
        }else{
          message.channel.send("Al final " + a + " personas dieron sus respetos a **" + message.author.username + "**" )
        }
      })
}}