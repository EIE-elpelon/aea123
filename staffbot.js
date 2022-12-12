const Discord = require('discord.js')
const db = require('megadb')
const devstag = new db.crearDB("devstags", "devs")
const helpertags = new db.crearDB("helpertags", "helpers")
const devs_db = new db.crearDB("devs", "devs")

module.exports = { 
    config: {
nombre: "staffbot",
alias: []
    },
  run: async (client, message, args, lang) => {    
  
    
const staffes = await devstag.obtener(`devs`).catch(e => console.log(e))
const helpers = await helpertags.obtener(`helpers`).catch(e => console.log(e))

  

  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Lista Del Staff:")
                      .addField('<:Admins:735970078000152658> Administradores <:JefeAdmins:735969768565243946>:', staffes, true)
                      .addField('<:Helpers:735970486835609751> Helpers <:Helpers:735970486835609751>:', helpers, true) 
                      .setColor("RANDOM")
                      )
}}