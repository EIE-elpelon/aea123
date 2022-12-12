module.exports = async (client, channel) => {
const Discord = require("discord.js")
const db = require("megadb")

const logs_db = new db.crearDB("logs", "sets");
let logs = new db.crearDB('logs', 'sets')
let logsc = await logs.obtener(`${channel.guild.id}`).catch( () => null)
if(channel.id == logsc) return logs.eliminar(`${channel.guild.id}`)
let welcome_db = new db.crearDB("setwelcome", "welcomeleave");
let imagen_db = new db.crearDB("setwelcomeimg", "welcomeleave");
let welcome_dbc = await welcome_db.obtener(`${channel.guild.id}`).catch( () => null)
let imagen_dbxd = await imagen_db.obtener(`${channel.guild.id}`).catch( () => null)
if(channel.id == welcome_dbc) return welcome_db.eliminar(`${channel.guild.id}`)
if(channel.id == welcome_dbc) return imagen_db.eliminar(`${channel.guild.id}`)
let leave_db = new db.crearDB("setleave", "welcomeleave");
let imagen_db2 = new db.crearDB("setleaveimg", "welcomeleave");
let leave_dbc = await leave_db.obtener(`${channel.guild.id}`).catch( () => null)
let imagen_dbxd2 = await imagen_db2.obtener(`${channel.guild.id}`).catch( () => null)
if(channel.id == leave_dbc) return leave_db.eliminar(`${channel.guild.id}`)
if(channel.id == leave_dbc) return imagen_db2.eliminar(`${channel.guild.id}`)
}