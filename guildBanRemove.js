module.exports = async (client, guild, user) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

  if (!logs_db.tiene(`${guild.id}`)) return;
  let logs = await logs_db.obtener(`${guild.id}`);
  let botavatar = client.user.avatarURL();
  let bot = client.user.username;
  const canalrendered = client.channels.resolve(logs);
  // verificamos si nuestro bot tiene permisos de ver el log de auditoria de un servidor
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  // Solicitamos los datos del logs de la auditoria registrado en un servidor
  guild.fetchAuditLogs().then(logs => {
    // Obtenemos el id de usuario autor del log
    let userID = logs.entries.first().executor.id;
    // Obtenemos el avatar de usuario autor del log
    //let userAvatar = logs.entries.first().executor.avatarURL();

    // Verificamos si el autor de la acción no sea un bot
    if (userID === client.user.id) return;
    let msgChannel = new Discord.MessageEmbed()
      .setAuthor(bot+" ┊ Ban", botavatar)
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `<a:On:608808102606798848> **Usuario desbaneado:** \n<@${user.id}> \n🆔 **ID**:\n ${user.id}\n <:Staff:634625948091809802> **Por:**\n <@${userID}>`)
    canalrendered.send(msgChannel);
})
}