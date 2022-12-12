module.exports = async (client, role) => {
const Discord = require("discord.js")
const db = require("megadb")
const logs_db = new db.crearDB("logs", "sets");

let welcome = new db.crearDB('setwelcomerole', 'welcomeleave')   
let welcomer = await welcome.obtener(`${role.guild.id}`).catch( () => null)
if(role.id == welcomer) return welcome.eliminar(`${role.guild.id}`)

  if (!logs_db.tiene(`${role.guild.id}`)) return;
  let logs = await logs_db.obtener(`${role.guild.id}`);
  let botavatar = client.user.avatarURL();
  let bot = client.user.username;
  const canalrendered = client.channels.resolve(logs);
  const embed = new Discord.MessageEmbed()
    .setAuthor(bot + " | Rol", botavatar)
    .setDescription("**Rol Eminado**")
    .setColor("#c51515")
    .addField("<:Info:608779678093803530> Rol:", role.name, true);
  canalrendered.send(embed);
}