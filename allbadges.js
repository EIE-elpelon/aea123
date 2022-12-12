const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "allbadges",
alias: []
    },
  run: async (client, message, args, lang) => {    
  const embed = new Discord.MessageEmbed()
.addField('Badges', 'Bughunter <:Bughunter:634622408615133204> \n Early Supporter <:EarlySupporter:634623050087923712> \n HypeSquad <:HypeSquad:634624337768611861> \n Nitro <:Nitro:634625179196194816> \n Partner <:Partner:634625480879898625> \n Staff <:Staff:634625948091809802> \n Verified Bot Developer <:Developer:699640923235287151> \n HypeSquad Bravery <:Bravery:634624483000320000> \n HypeSquad Balance <:Balance:634624538788888577> \n HypeSquad Brilliance <:Brilliance:634624601002868747> \n BoostLvl1 <:Boostlvl1:634626935217192960> \n BoostLvl2 <:Boostlvl2:634626999133929472> \n BoostLvl3 <:Boostlvl3:634627060010057767> \n BoostLvl4 <:Boostlvl4:634627131409694720>')
.setColor(0x5b00ff)
 message.channel.send(embed)
  
}}