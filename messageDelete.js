module.exports = async (client, message) => {
  if(!message.content) return;
  const db = require("megadb")
    const Discord = require("discord.js")
const logs_db = new db.crearDB("logs", "sets");

client.snipes.set(message.guild.id, {
      content: message.content,
      delete: message.author,
      canal: message.channel
})

if (!logs_db.tiene(`${message.guild.id}`)) return;
  if(message.channel.name === "interchat") return;
  let logs = await logs_db.obtener(`${message.guild.id}`);
  let botavatar = client.user.avatarURL;
  let bot = client.user.username;
  const canalrendered = client.channels.resolve(logs);

const embed = new Discord.MessageEmbed()
    .setAuthor(bot + " | Mensaje eliminado", botavatar)
    .setDescription(" **Mensaje Eliminado**")
    .setColor("#c51515")
    .addField(
      "<:Staff:634625948091809802> Usuario/a:",
      `<@${message.author.id}>`,
      true
    )
    .addField("<:Info:608779678093803530> Contenido:", message.content, true)
    .addField("<a:settings:670392976614096899> Canal:", message.channel, true);
canalrendered.send(embed);

if(message.attachments.size > 0){
  if (!logs_db.tiene(`${message.guild.id}`)) return;
  if(message.channel.name === "interchat") return;
  let logs = await logs_db.obtener(`${message.guild.id}`);
  let botavatar = client.user.avatarURL;
  let bot = client.user.username;
  const canalrendered2 = client.channels.resolve(logs);

    let Attachs = (message.attachments).array()
    Attachs.forEach(m => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(bot + " | Imagen eliminada", botavatar)
  .setDescription(" **Imagen a sido eliminada**")
  .setColor("#c51515")
    .addField(
      "<:Staff:634625948091809802> Usuario/a:",
      `<@${message.author.id}>`,
      true
    )
  .addField("<a:settings:670392976614096899> Canal:", message.channel, true)
  
  .setImage(m.proxyURL);
  canalrendered2.send(embed);
    })
  }
}