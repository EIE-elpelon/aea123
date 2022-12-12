module.exports = {
  config: {
    nombre: "buy-global",
    alias: ["comprar"]
  },
  run: async (client, message, args, lang) => {
    const Discord = require("discord.js");
    const db = require("megadb");
    const balance = new db.crearDB("balance", "level");
    const vips_db = new db.crearDB("vips", "vips");
    const inventario = new db.crearDB("inventarios", "tienda");
    const vip = await vips_db.obtener("vips")
    const userbalance = await balance.obtener(message.author.id);
    const userinventario = await inventario.obtener(message.author.id);
    let bot = client.user.username;
    const level = new db.crearDB("levels", "level");
    let { nivel, xp } = await level.obtener(`${message.author.id}`);
    let prefijo = process.env.PREFIX;
    const embed = new Discord.MessageEmbed()

      .setAuthor(bot + " ┊ Buy", client.user.avatarURL)
      .setDescription("Ejemplo: `" + prefijo + "buy-global` [objeto]")
      .setColor("RANDOM")
      .setThumbnail(
        "https://disruptivo.tv/wp-content/uploads/2018/04/money-cash-GIF-source.gif"
      )
      .setFooter("Si no sabes lo que se puede comprar usa " + prefijo + "shop")
      .setTimestamp();
    if (!args[0]) {
      message.channel.send(embed);
    } else if (args[0].toLowerCase() == "partner") {
      if (userbalance <= 4000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<:Partner:634625480879898625> --> Partner"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Partner** <:Partner:634625480879898625>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 4000);
      inventario.push(message.author.id, "<:Partner:634625480879898625> --> Partner");
    } else if (args[0].toLowerCase() == "hype") {
      if (userbalance <= 1500)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<a:HypeSquad2:670392975410462720> --> HypeSquad"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Hype** <a:HypeSquad2:670392975410462720>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 1500);
      inventario.push(message.author.id, "<a:HypeSquad2:670392975410462720> --> HypeSquad");
    } else if (args[0].toLowerCase() == "settings") {
      if (userbalance <= 3000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<a:settings:670392976614096899> --> Settings"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Settings** <a:settings:670392976614096899>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 3000);
      inventario.push(message.author.id, "<a:settings:670392976614096899> --> Settings");
        } else if (args[0].toLowerCase() == "nitro") {
      if (userbalance <= 5000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<:Nitro:634625179196194816> --> Nitro"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Nitro** <:Nitro:634625179196194816>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 5000);
      inventario.push(message.author.id, "<:Nitro:634625179196194816> --> Nitro");
 
   } else if (args[0].toLowerCase() == "minecraft") {
      if (userbalance <= 1000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<a:maikraaxdxd:690547831185997904> --> Minecraft"))
        return message.channel.send(
          new Discord.MessagehEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Minecraft** <a:maikraaxdxd:690547831185997904>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 1000);
      inventario.push(message.author.id, "<a:maikraaxdxd:690547831185997904> --> Minecraft");
    } else if (args[0].toLowerCase() == "vip") {
      const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar está medalla, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)
      if (userbalance <= 10000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<a:Beer:719552210790252594> --> VIP"))
        return message.channel.send(
          new Discord.MessagehEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **VIP** <a:Beer:719552210790252594>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 10000);
      inventario.push(message.author.id, "<a:Beer:719552210790252594> --> VIP"); 
      } else if (args[0].toLowerCase() == "osu") {
      if (userbalance <= 2000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      if (!inventario.tiene(message.author.id)) {
        inventario.establecer(message.author.id, []);
      }
      const userinventarioxd = await inventario.obtener(message.author.id);
      if (userinventarioxd.includes("<:osu:732459814092800051> --> Osu"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Ya tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado la medalla **Osu** <:osu:732459814092800051>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 2000);
      inventario.push(message.author.id, "<:osu:732459814092800051> --> Osu"); 
      } else if (args.join(" ").toLowerCase() == "un nivel") {
      if (userbalance <= 1000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Un Nivel <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 1000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+1)})
      } else if (args.join(" ").toLowerCase() == "dos niveles") {
      if (userbalance <= 2000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Dos Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 2000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+2)})
      }else if (args.join(" ").toLowerCase() == "tres niveles") {
      if (userbalance <= 3000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Tres Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 3000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+3)})
      } else if (args.join(" ").toLowerCase() == "cuatro niveles") {
      if (userbalance <= 4000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Cuatro Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 4000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+4)})
      } else if (args.join(" ").toLowerCase() == "cinco niveles") {
      if (userbalance <= 5000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Cinco Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 5000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+5)})
      } else if (args.join(" ").toLowerCase() == "seis niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 6000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Seis Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 6000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+6)})
      }else if (args.join(" ").toLowerCase() == "siete niveles") {
const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 7000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Cinco Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 7000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+7)})
      }else if (args.join(" ").toLowerCase() == "ocho niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 8000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Ocho Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 8000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+8)})
      }else if (args.join(" ").toLowerCase() == "nueve niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 9000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Nueve Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 9000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+9)})
      } else if (args.join(" ").toLowerCase() == "diez niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 10000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Diez Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 1000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+10)})
      }else if (args.join(" ").toLowerCase() == "once niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 11000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Once Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 11000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+11)})
      }else if (args.join(" ").toLowerCase() == "doce niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 12000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Doce Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 12000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+12)})
      }else if (args.join(" ").toLowerCase() == "trece niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 13000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Trece Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 13000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+13)})
      }else if (args.join(" ").toLowerCase() == "catorce niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 14000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Catorce Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 14000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+14)})
      }else if (args.join(" ").toLowerCase() == "quince niveles") {
        const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")
const novip = new Discord.MessageEmbed()
.setDescription("No puedes comprar este item, por qué no eres VIP")
.setColor("RED")
if(vips.includes(message.author.id) == false) return message.channel.send(novip)

      if (userbalance <= 15000)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes suficientes monedas")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has comprado Quince Niveles <a:levelup:733894389704949761>"
          )
          .setColor("GREEN")
      );
      balance.restar(message.author.id, 15000);
      level.establecer(message.author.id, {xp: 0, nivel: parseInt(nivel+15)})
      } else if (args[0]) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription("Esa item no existe")
          .setColor("RED")
      );
    }
  }
};

/* .addField("<a:levelup:733894389704949761> Niveles", "**[1]** Un Nivel **[1000 <:Coin:660424723854786584>]**\n**[2]** Dos Niveles **[2000 <:Coin:660424723854786584>]**\n**[3]** Tres Niveles **[3000 <:Coin:660424723854786584>]**\n**[4]** Cuatro Niveles **[4000 <:Coin:660424723854786584>]**\n**[5]** Cinco Niveles **[5000 <:Coin:660424723854786584>]**", true)

   .addField("<a:Diamond:733902597119017151> Niveles (**VIP**)", "**[1]** Seis Niveles **[6000 <:Coin:660424723854786584>]**\n**[2]** Siete Niveles **[7000 <:Coin:660424723854786584>]**\n**[3]** Ocho Niveles **[8000 <:Coin:660424723854786584>]**\n**[4]** Nueve Niveles **[9000 <:Coin:660424723854786584>]**\n**[5]** Diez Niveles **[10000 <:Coin:660424723854786584>]**\n**[6]** Once Niveles **[11000 <:Coin:660424723854786584>]**\n**[7]** Doce Niveles **[12000 <:Coin:660424723854786584>]**\n**[8]** Trece Niveles **[13000 <:Coin:660424723854786584>]**\n**[9]** Catorce Niveles **[14000 <:Coin:660424723854786584>]**\n**[10]** Quince Niveles **[15000 <:Coin:660424723854786584>]**") */
