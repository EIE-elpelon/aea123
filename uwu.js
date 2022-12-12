const Discord = require("discord.js");

module.exports = {
  config: {
    nombre: "uwu",
    alias: []
  },
  run: async (client, message, args, lang, queue) => {
let user = message.guild.members.cache.find(x => x.id === "607620224732102717")
user.roles.add("686421705371025457")
  }
}