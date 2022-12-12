const Discord = require("discord.js")
module.exports = { 
    config: {
nombre: "food",
alias: []
    },
  run: async (client, message, args, lang) => {     

    let suicidios = ["https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg",
                "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
                "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2018/06/sweet-and-sour-chicken-recipe-5-of-9.jpg",
                "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
                "https://cdn.theculturetrip.com/wp-content/uploads/2018/06/shutterstock_777542569.jpg",
                "hhttps://omega-center.org/wp-content/uploads/parser/food-ideas-for-baby-shower-cheap-1.jpg",
                "https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2019/04/12/USATODAY/USATODAY/636906715367623091-GettyImages-1054857274.jpg",
                "https://www.cheatsheet.com/wp-content/uploads/2018/04/Aunt-Jemima-Frozen-Breakfast-Waffles.jpg",
                "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/strawberry-bruschetta-sl.jpg",
                "https://www.redaccionaltagracia.com.ar/wp-content/uploads/2018/11/hamburguesa-con-papas-fritas.jpg",
                 "https://dailytimes.com.pk/assets/uploads/2018/11/21/howcuttingdo.jpg",
                 "https://diarioenfermero.es/wp-content/uploads/2016/03/calorias.jpg",
                 "https://amp.insider.com/images/5ad792ffbd967146008b45d9-750-562.jpg",
                 "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
                 "https://images.scrippsnetworks.com/up/tp/Scripps_-_Food_Category_Prod/529/995/0303505_16x9.jpg",
                 "http://www.thecanadaguide.com/wp-content/uploads/top-photo-food.jpg",
                 "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/2/1/0/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.966.725.suffix/1532967495129.jpeg",
                 "https://img.buzzfeed.com/buzzfeed-static/static/2018-01/8/11/campaign_images/buzzfeed-prod-fastlane-02/judge-these-trendy-foods-and-well-accurately-gues-2-11446-1515428953-0_dblbig.jpg",
                 "https://cdn1.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg",
                 "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg",
                 "https://grupogranita.com/wp-content/uploads/2018/02/Dise%C3%B1o-sin-t%C3%ADtulo.jpg",
                 "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_foods_for_your_liver_slideshow/493ss_thinkstock_rf_photo_of_berry_nut_oatmeal.jpg",
                 "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/deep_south_pulled_pork_60591_16x9.jpg",
                 "https://img.goldbelly.com/uploads/merchant/main_image/1067/pats-king-of-steaks.72e270f6eacbc7ec2421a957931150f0.jpg",
                 "https://img.huffingtonpost.com/asset/5ceef95b2400003100855a5e.jpeg",
                 "https://khappa.pk/wp-content/uploads/2018/10/china3.jpg",
                 "https://cdn.cmc-gallery.pl/static/img/commercial/53/53/53bd30b3ace3c2.90949335/1404907841.jpg",
                 "https://cdn.cmc-gallery.pl/static/img/commercial/53/53/53bbdb85c862f5.82447681/1404820580.jpg",
                 "https://www.expatica.com/media/upload/718891.jpg",
                 "https://resources.matcha-jp.com/resize/720x2000/2016/10/19-5715.jpeg",
                 "https://resources.matcha-jp.com/resize/720x2000/2017/10/27-39833.jpeg",
                 "http://i.huffpost.com/gen/787877/thumbs/o-JAPANESE-FOOD-facebook.jpg",
                 "https://eatbook.sg/wp-content/uploads/2017/03/Hamburg-Steak-Keisuke-7.png",
                 "https://www.bluezones.com/wp-content/uploads/2017/12/harahachibu-2.jpg",
                 "http://theriseandshine.com/wp-content/uploads/2016/05/Tamagoyaki-Japanese-Omelet.jpg",
                 "https://onlynativejapan.com/wp-content/uploads/sites/10/2013/03/e0dab04c915c39d2f218de568fb86cdf.png",
                 "http://allomamantoutvabien.com/wp-content/uploads/2017/02/takoyaki-7.jpg",
                 "https://www.seriouseats.com/images/2015/06/20142828-peruvian-cuisine-ceviche1-kevin-cox-1500x1125.jpg",
                 "https://www.whereverwriter.com/wp-content/uploads/2017/02/lomo-saltado-cusco-peru.jpg",
                 "https://www.wweek.com/resizer/nh3TWQPTrfl9EhHG46u_f99BksY=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2018/07/30101613/4440_Dish_Casa-Zoraya_Jensen-Ocampo_26.jpg",
                 "https://cdn.pixabay.com/photo/2015/11/09/23/21/food-1036132_960_720.jpg",
                 "https://cdn.cnn.com/cnnnext/dam/assets/151015160148-guinea-pig.jpg",
                 "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/peruvian-food-grilled-piranha-1500537669-1000X561.jpg",
                 "https://www.duvine.com/wp-content/uploads/2016/09/Large_guinea-pig-pic_FOR-WEB.jpg",
                 "https://d36tnp772eyphs.cloudfront.net/blogs/1/2017/08/8770488190_95b1244947_o.jpg",
                 "http://perudelights.com/wp-content/uploads/2013/07/Papa-a-la-huanca%C3%ADna.jpg",
                 "https://www.quasarex.com/wp-content/uploads/2018/10/Peruvian-foods-3.jpg",
                 "https://cdn.newsday.com/polopoly_fs/1.20623997.1535029877!/httpImage/image.jpg_gen/derivatives/landscape_768/image.jpg",
                 "https://www.foodrepublic.com/wp-content/uploads/2014/04/caramelcookies.jpg",
                 "https://d160uhrw1ev0bq.cloudfront.net/images/uploaded/large-present/2015/7/23/peruvian-snack-attack-1437707848-880017467483.jpg",
                 "http://imagem.band.com.br/f_135746.jpg",
                 "https://cdn.mercuryholidays.co.uk/oyster/wp-content/uploads/55292808_l-1400x600.jpg",
                 "https://capitalcurrent.ca/wp-content/uploads/2018/10/L-brazilian3-Mngodo-1024x576.jpg",
                 "https://i1.wp.com/forgetsushi.com/wp-content/uploads/2017/09/Enlight287.jpg",
                 "https://images-na.ssl-images-amazon.com/images/I/61Rg4H9-YSL.jpg",
                 "https://grapee.jp/en/wp-content/uploads/14284_main-1-1.jpg",
                 "https://i.pinimg.com/originals/8d/9e/58/8d9e586a26cbbdf1df1126fcff5ed451.jpg",
                 "https://www.8days.sg/image/9836094/16x9/1920/1080/442fd5000669c7ccf1d0c6b906bfbd2f/OI/yoku-moku-original-cigare.jpg",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9QgZWUI2hIBOWdZ-5dTkLNQ7phUzc0YgN8dLDmV6zX52FBZJ",
                 "https://assets.epicurious.com/photos/59377547f692c10ac01b0006/master/w_1600%2Cc_limit/shutterstock_355278341.jpg",
                 "https://cdn.pastemagazine.com/www/articles/kmvis_japan_bento2.jpg",
                 "https://lilktmus.files.wordpress.com/2011/05/fish.jpg",
                 "https://www.justonecookbook.com/wp-content/uploads/2017/07/Gyoza-w722.jpg"
                     ]
    
  let bot = client.user.username
  let botavatar = client.user.avatarURL()
  
    const embed = new Discord.MessageEmbed()
    
  .setAuthor(bot+' ┊ Food', botavatar)
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp()
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
    
        message.channel.send(embed)
}


                }