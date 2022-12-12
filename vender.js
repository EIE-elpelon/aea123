module.exports = {
  config: {
    nombre: "vender",
    alias: ["sell"]
  },
  run: async (client, message, args, lang) => {
    const Discord = require("discord.js");
    const db = require("megadb");
    const balance = new db.crearDB("balance", "level");
    const inventario = new db.crearDB("inventarios", "tienda");
    const userbalance = await balance.obtener(message.author.id);
    const userinventario = await inventario.obtener(message.author.id);
    let bot = client.user.username;
    const level = new db.crearDB("levels", "level");
    let { nivel, xp } = await level.obtener(`${message.author.id}`);
    let prefijo = process.env.PREFIX;
    const embed = new Discord.MessageEmbed()

      .setAuthor(bot + " ┊ Sell", client.user.avatarURL())
      .setDescription("Ejemplo: `" + prefijo + "sell` [objeto]")
      .setColor("RANDOM")
      .setThumbnail(
        "https://lh3.googleusercontent.com/proxy/ZvTO67F4dYfiu5wh5CQQghUpxyWt9zoUF7to7qfiwltHEKIOyTJgOHjOgNT6UwmFK3pjYY16rYUyx_sLXm-Y7G2Rd8PISgr3KhBBlaVI5It5JME2tHnnvloyMlPp5mbu06GxXbSn7Zuhfo2GXJUw-DI1"
      )
      .setFooter("Si no sabes el nombre de lo que has comprado usa " + prefijo + "shop")
      .setTimestamp();
    if (!args[0]) {
      message.channel.send(embed);
    } else if (args[0].toLowerCase() == "partner") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<:Partner:634625480879898625>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Partner** <:Partner:634625480879898625>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 1000);
      inventario.extract(message.author.id, "<:Partner:634625480879898625>");
    } else if (args[0].toLowerCase() == "hype") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<a:HypeSquad2:670392975410462720>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Hype** <a:HypeSquad2:670392975410462720>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 1000);
      inventario.extract(message.author.id, "<a:HypeSquad2:670392975410462720>");
    } else if (args[0].toLowerCase() == "beta") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<a:settings:670392976614096899>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Beta** <a:settings:670392976614096899>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 1000);
      inventario.extract(message.author.id, "<a:settings:670392976614096899>");
        } else if (args[0].toLowerCase() == "nitro") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<a:NitroEmojiGif:657216628856979494>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Nitro** <a:NitroEmojiGif:657216628856979494>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 1000);
      inventario.extract(message.author.id, "<a:NitroEmojiGif:657216628856979494>");
    } else if (args[0].toLowerCase() == "osu") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<:osu:732459814092800051>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Osu!** <:osu:732459814092800051>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 2000);
      inventario.extract(message.author.id, "<:osu:732459814092800051>");
    } else if (args[0].toLowerCase() == "minecraft") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<a:maikraaxdxd:690547831185997904>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **Minecraft** <a:maikraaxdxd:690547831185997904>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 1000);
      inventario.extract(message.author.id, "<a:maikraaxdxd:690547831185997904>");
    } else if (args[0].toLowerCase() == "vip") {

      const userinventarioxd = await inventario.obtener(message.author.id);
      if (!userinventarioxd.includes("<a:Beer:719552210790252594>"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("No tienes esta medalla")
            .setColor("RED")
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Has vendido la medalla **VIP** <a:Beer:719552210790252594>"
          )
          .setColor("GREEN")
      );
      balance.sumar(message.author.id, 10000);
      inventario.extract(message.author.id, "<a:Beer:719552210790252594>");
    } else if (args[0]) {
      message.channel.send(
        new Discord.RichEmbed()
          .setDescription("Esa medalla no existe")
          .setColor("RED")
      );
    }
  }
};
