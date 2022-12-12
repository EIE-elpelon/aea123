module.exports = { 
    config: {
nombre: "testbye",
alias: []
    },
  run: async (client, message, args, lang) => { 
    const Discord = require("discord.js")
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
}