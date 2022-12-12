module.exports = async (client, emoji) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

  if (!logs_db.tiene(`${emoji.guild.id}`)) return;
  let logs = await logs_db.obtener(`${emoji.guild.id}`);
  let botavatar = client.user.avatarURL();
  let bot = client.user.username;
  const canalrendered = client.channels.resolve(logs);
  const embed = new Discord.MessageEmbed()
    .setAuthor(bot + " | Emoji", botavatar)
    .setDescription("**Emoji Eliminado**")
    .setColor("#c51515")
    .addField("<:Staff:634625948091809802> Emoji:", emoji, true);
  canalrendered.send(embed);
}