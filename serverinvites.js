const Discord = require('discord.js')
const db = require('megadb')
const devs_db = new db.crearDB("devs", "devs")
module.exports = { 
    config: {
nombre: "serversinvites",
alias: []
    },
  run: async (client, message, args, lang) => {  

let staff = await devs_db.obtener("devs")
if(!staff.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription("<:Cancel:635072844782370828> | No tienes permisos para usar este comando.")
                                              .setColor("RED"))


    let invites = ["ignorame"], ct = 0;
    client.guilds.cache.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[invites.length + 1] = (g + " | Invites: " + guildInvites.array().join(", "));
            ct++;

            if(ct >= client.guilds.cache.size) {
                invites.forEach((invite, i) => {
                    if(invite == undefined)
                        invites.splice(i, 1);
                }); 

                invites.shift();
                invites.forEach((invite, i) => invites[i] = "- " + invite);
                invites = invites.join("\n\n");

            /*    let embed = new Discord.RichEmbed()
                .setTitle("All Invites:")
                .setDescription(invites);

                message.channel.send(embed);*/
              console.log(invites)
              message.channel.send(new Discord.MessageEmbed()
                      .setDescription("<:Verified:635075337100853260> | Ya envié todas las invitaciones de todos los servidores donde está el bot a la consola.")
                      .setColor("GREEN")
                      )            }
        })
    });
}
}