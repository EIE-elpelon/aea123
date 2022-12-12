module.exports = async (client, oldRole, newRole) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

 if (!logs_db.tiene(`${oldRole.guild.id}`)) return;
  let logs = await logs_db.obtener(`${newRole.guild.id}`);
  let botavatar = client.user.avatarURL();
  let bot = client.user.username;
  const canalrendered = client.channels.resolve(logs);

  // Solicitamos los datos del logs de la auditoria registrado en un servidor
  oldRole.guild.fetchAuditLogs().then(logs => {
    // Obtenemos el id de usuario autor del log
    let userID = logs.entries.first().executor.id;
    // Obtenemos el avatar de usuario autor del log
    //let userAvatar = logs.entries.first().executor.avatarURL();

    // Verificamos que se haya actualizado el nombre de un rol
    if (oldRole.name !== newRole.name) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(bot+" ┊ Rol", botavatar)
        .setDescription("**Rol editado**")
        .setColor("#c51515")
         .addField("<a:dnd:608808102698942464> Nombre anterior:", oldRole.name, true)

         .addField("<a:On:608808102606798848> Nuevo nombre:", newRole.name, true)
      canalrendered.send(embed);
    }
  })
}