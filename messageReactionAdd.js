module.exports = async (client, reaction, user) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.guild.id !== "707691884675465268") return;
    
    if(reaction.message.channel.id === "751169163938234448") {
      if(reaction.emoji.name === "✅"){
await reaction.message.guild.members.cache.get(user.id).roles.add("722576245535015015")
      }
    }

}