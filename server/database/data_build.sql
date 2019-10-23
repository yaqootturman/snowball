BEGIN;

Insert into "user" (first_name,last_name,email,password) values ('rand','inaim','rand@gmail.com',123),
('duaa','halayqa','duaa@gmail.com',147);




Insert into category (name,img,description ,number_of_pledges) values
('Transport',
'https://i.imgur.com/VpuEoWi.png',
'Transport accounts for about a third of the UKs carbon dioxide emissions and is the largest contributing sector in the country. Plus emissions from transport across the EU are getting bigger. See what you can do below.',
 1329
),
(
'Household',
'https://i.imgur.com/PjXoyF2.png',
'In the UK, around 30% of our personal emissions come from energy used in the home. But reducing your home energy use can be surprisingly cheap and easy.',
2000
),
(
'Shopping',
'https://i.imgur.com/jC8Lx9b.png.png',
'It’s estimated that the things we buy, from food to trainers, account for 60% of global emissions. As consumers, we can lower emissions and change the way companies operate, with our everyday buying decisions.',
1477
),
('Food',
'https://i.imgur.com/scVf8SP.png',
'The food and drink we consume typically accounts for 20%-25% of our individual greenhouse gas emissions (approx 2.2tns of CO2). We look at how small dietary changes can have a big impact on the planet.',
1500
)

;

 Insert into pledge
    (category_id,order_id,pledge_short_description,title,description,number_of_enrollement, img ,banner_img, importance ,further_info)
  values
 (1,5,'Fly less','Flying','I will take no more than one return flight each year. When I do fly, I will offset my emissions.',4545,'https://i.imgur.com/dd6lk8b.jpg','https://i.imgur.com/dd6lk8b.jpg','Flying is very carbon intensive. Large planes burn over a gallon of fuel every second..

A return flight from London to New York generates 1 tonne of Co2 per passenger - around 10% of the average British person''s annual carbon footprint.. 

Only around 3% of the world''s population fly each year, yet it accounts for around 2% of global annual emissions..
','Flights produce greenhouse gases - mainly carbon dioxide (CO2) - from burning fuel. These contribute to global warming when released into the atmosphere..

An economy-class return flight from London to New York emits an estimated 0.96 tonnes of CO2 per passenger..

That''s equivalent to 13% of the average annual emissions for someone in the UK or about the same as those caused by someone living in Ghana over a year..

Aviation contributes about 2% of the world''s global carbon emissions, according to the International Air Transport Association (IATA). It predicts passenger numbers will double to 8.2 billion in 2037..

And as other sectors of the economy become greener - with more wind turbines, for example - aviation''s proportion of total emissions is set to rise..

By carbon offsetting you are reducing the emissions of greenhouse gasses elsewhere in the world, to compensate for the emissions of your flight. There is a regulated offset market and most vendors give you the option to choose how you would like to offset your emissions..
'),
(1,8,'Use Public transport','Public transport','I will take public transport instead of driving whenever I''m able to',7536,'https://i.imgur.com/G2nwFZT.jpg','https://i.imgur.com/G2nwFZT.jpg','Transport accounts for about a third of the UK''s carbon dioxide emissions and is the largest contributing sector in the country. Passenger cars and vans alone contribute around 17% of our emissions.. 

The emissions from driving on your own are typically over 4 times higher than catching the train..

It''s often not possible to leave the car at home. This pledge is asks you to choose public transport for all or part of your journey, when it''s feasible to do so..
','In the EU, 44% of all transport emissions are from cars, 28% are from other road transportation (mostly heavy duty trucks), 14% from water navigation, 13% from aviation and less than 1% from rail travel..'

'Carbon dioxide emissions from diesel cars are similar to emissions from petrol cars. However, diesel cars emit more of the toxic gas nitrogen dioxide and more fine particulate matter, which increases the risk of respiratory problems and cancer respectively..

Driving a car on your own can have larger emissions than flying the same distance, so fitting as many people in the car as possible has a big impact. Driving with 4 people in the car creates similar emissions to catching the train..
'),
(1,10,'Cycle or walk more','Walking & Cycling','I will walk or cycle more often and will try to incorporate it more into my commute or journey to and from school',4568,'https://i.imgur.com/1SNejKn.jpg','https://i.imgur.com/iizQeXI.jpg','Whether you take public transport or drive a car, your travel has a carbon footprint. Cycling and walking are completely carbon neutral.. 

With transport making up around 30% of our individual emissions, choosing to walk or cycle instead of drive is a simple, impactful way to take action.. 

Whilst it''s not always practical to cycle or walk, swapping just 2 miles of your daily commute with walking or cycling can reduce your annual emissions by 200kg of CO2 - the same amount as can be absorbed by 8 trees..
','In 2014 in the UK, 42% of people agreed with the statement: ‘Many of the journeys of less than 2 miles that I now make by car I could just as easily walk’..

Making short journeys by car is particularly polluting as the catalytic converters that reduce these pollutants don''t work effectively on trips under 5 miles..

See the 9 reasons why bike commuting is better than driving [Link - https://www.bikeradar.com/features/9-reasons-why-bike-commuting-is-better-than-driving/] for more information..')
,(2,1,'Switch to green energy','Green energy','I will switch my electricity and gas supply to a green energy tariff',4253,'https://i.imgur.com/8xyEj34.jpg','https://i.imgur.com/Kggda0Q.jpg','The energy used to heat our homes, cook our food and power our appliances accounts for approximately 30% of the average person''s carbon footprint. A green tariff means that the electricity you buy is ''matched'' by purchases of renewable energy that your energy supplier makes on your behalf, significantly reducing the emissions you create..

For households that rely on gas for heating and cooking, many clean energy providers offset the carbon emissions associated with any continued gas provision..
','In the UK, our electricity comes from a range of sources see the breakdown of the last 24 hours [link: https://windeurope.org/about-wind/daily-wind/electricity-mix?utf8=%E2%9C%93&areas=GB&commit=Apply+filters]).. 

In 2018 one third (33%) of the UK’s electricity came from renewable sources, up from 29.7% in 2017. Only around 3% of our electricity comes from coal today – compared to around 30% ten years ago. Despite these significant improvements, around 80% of the world''s energy is still generated from burning fossil fuels..

When you switch to a green energy provider, it does not mean that all your electricity then comes from renewable sources. There is no unused capacity in renewable energy facilities in the UK, so the energy you consume may still be generated by burning fossil fuels. However, good green energy providers ensure that for every unit of energy you use, a unit is produced and put on the grid by a renewable source. This helps compensate your emissions and drives the industry towards renewable energy.. 
') ,(2,9,'Reduce home energy use','Reduce energy use','I will reduce my home energy use',5961,'https://i.imgur.com/7J0ZMp5.jpg','https://i.imgur.com/Ngsupoc.jpg','With household energy accounting for 30% of individual emissions, reducing your consumption is a simple way to reduce emissions and save you money..

Household energy consumption in the UK is one of the highest in the world. On average we use over 3 times as much electricity as Chinese households and over 5 times as much as Indian households..

How we behave in our homes has a significant impact on the emissions that we are directly responsible for and can have a huge influence on the action of  the people we live with..
','Replacing light bulbs. LEDs are now the most efficient bulbs on the market. They use around 20% as much energy as traditional halogen light bulbs and around 67% of the energy of low energy fluorescent light bulbs. They also last for an average..

Switching off appliances at the plug and switching off lights is easy and saves you money. In the UK, around 9%-16% of our energy bills are spent powering appliances on ''standby'' mode. Do you know which household appliance uses the most energy in a year? Your plasma TV. About twice as much as your oven..

Washing a load of clothes at 40 degrees and then tumble drying it uses 4 times as much energy as washing at 30 degrees and line drying it..

Turning your thermostat down by one degree can prevent 320kg of CO2 emissions and save you £80, each year..

Installing a smart meter gives you all the information you need to reduce your home energy use and they are free to have installed. Contact your energy supplier to request one..'),
(3,3,'Reject fast fashion','Fast Fashion','I will reject fast fashion - buying less, higher quality or second-hand clothes',9654,'https://i.imgur.com/c768SrT.jpg','https://i.imgur.com/STflxKT.jpg','The fashion industry contributes around 10% of global greenhouse gas emissions - consuming more energy than the aviation and shipping industries combined.. 

If it continues on its current path, the fashion industry could use more than 26% of the global carbon budget by 2050..

The most common clothing material is polyester, which is a plastic, derived from oil. Polyester clothes are not biodegradable.. 

Approximately 85% of textiles go to landfill or are incinerated..','A polyester shirt has more than double the carbon footprint of a cotton shirt. Switching from polyster to recycled polyester clothing can save 80% in toxins, around 60% in energy consumption, and up to 40% of CO2 emissions.. 

Switching from conventional to organic cotton can cut emissions by 46%, as nitrogen waste from fertilisers is eliminated. Currently though, less than one per cent of all cotton is organic. Consumers play a major role in driving this change to organic, sustainable fibres..

The production of textiles also uses a huge amount of water. It takes about 8,000 litres of water to make one pair of jeans and 2,700 litres to make a single T-shirt..
'),
(3,7,'Avoid a single-use','Single use','I will try to avoid single-use products and overly packaged products',1556,'https://i.imgur.com/xPl7vIa.jpg','https://i.imgur.com/Rlk5r7Q.jpg','Single use products have an extremely high carbon footprint compared to the utility they provide. The way in which we have come to use single-use products, even when they are recycled, is unsustainable and will change in the future..

The extraction of raw materials, refining, manufacturing, transporting, packaging and disposing of these goods, all have an impact on our planet. The future will be built around consumer habits that do not include the intensive use of single use products - how quickly we get there could play a defining role in the battle on climate change..','Plastics perfectly represent our single use culture. They are made out of fossil fuels, have a carbon intensive life cycle and degrade extremely slowly. They have a significant impact on our climate and on the natural environment more broadly.. 

Whilst plastic is the symbol of our single use society, cardboard, aluminium cans, paper and glass bottles also have a very real carbon footprint. Our attitude towards discardable products and packaging drives business practices around the world and dictates the future of commerce..

These changes may seem small, but the way we consume these items at the moment is not sustainable and will change in the future. The speed at which we, as consumers, reject these products for re-usable, sustainable alternatives can have a big impact on the future of our planet..'),

(4,2,'Eat less meat','Meat eating','I will have more meat free days than meat eating days each week and will eat red meat no more than once a week
',5674,'https://i.imgur.com/w5is92j.jpg','https://i.imgur.com/yOkUldo.jpg','Livestock accounts for around 15% of all man made emissions..

Approximately 70 billion farm animals are reared each year for food. They produce vast amounts of harmful greenhouse gasses like methane (around 30x more potent than CO2) and need a lot of space and food. Around a sixth of the habitable land on earth is used for livestock feed production and a further sixth to graze and rear the animals.. 

Going vegetarian just a few days a week can prevent 600kg of carbon dioxide emissions a year - the same amount that''s absorbed by around 25 trees.. ','Meat eating facts:.. 

Global emissions from livestock exceed emissions emissions from transport..

Around 70%-80% of deforestation in the Amazon is to make space for cattle ranching.. 

Replacing beef with chicken can cut your dietary carbon footprint in half..

Per gram of protein, beef uses 20 times the land and has 20 times the emissions of beans..

Farmed shellfish often have a higher carbon footprint than lamb..

Emissions from beef farmed in South America are typically 3 times higher than emission from European beef..
'),
(4,4,'Eat local and seasonal','Local, seasonal food','I will eat locally produced, seasonal food wherever I can',4562,'https://i.imgur.com/vGUvrQX.jpg','https://i.imgur.com/U9jjmaZ.jpg','Only 23% of fruit and vegetables eaten in Britain are grown in the UK.. 

The transportation of food accounts for around 11% of its total footprint, and the energy required to grow it out of season in hothouses or keep it cool for long periods can be far higher.. 

By eating local, seasonal food, you can reduce the carbon footprint of each meal by 1.3kg..','Whilst the transportation of food has a clear and important carbon footprint, it is not the case that food thats grown locally is always better for the planet than food thats grown abroad. The production or farming of the food typically accounts for the vast majority of that food''s total emissions. Food grown sustainably, in natural conditions, overseas, often has a far lower overall footprint than food grown in artificial greenhouses locally..

An important distinction should also be drawn between food that''s shipped and food that''s flown. Air freight emissions per mile can be hundreds of times higher than sea freight. For example, apples, oranges and bananas almost always travel on boats, whereas imported asparagus, avocados, tomatoes and strawberries are often flown..

It''s therefore important to consider the seasonality of the food you buy as well as place it was grown, before being able to decide what you should be buying. But as people reject packaging and goods that have been transported overseas (Link: https://www.telegraph.co.uk/news/2018/11/30/greengrocers-claim-millennial-backlash-against-plastic-has-sparked/), we can support local industries and eat better food, all whilst significantly reducing carbon emissions..'),
(4,6,'Eat and drink sustainably','Sustainable food & drink','I will make an effort to buy sustainably sourced food and drink',7226,'https://i.imgur.com/U8HDadB.jpg','https://i.imgur.com/ei5KO77.jpg','Food that''s irresponsibly produced drives deforestation, soil degradation, emissions from harmful pesticides, desertification, overfishing and species loss.. 

Most of our food is intensively farmed, a practice that comes with a big carbon footprint and lacks resilience to changing temperatures..

This dangerous cycle threatens global food supplies and with a population expected to reach 9 billion by 2040, what we eat and how we farm will have a significant and growing impact on climate change.. ','Industrial agriculture typically involves growing one type of food in a field or farming system and is how the majority of our food is produced. These farming practices deplete the soil''s ability to store carbon, increase acidification, use harmful pesticides and fertilisers, destroy biodiversity and are more vulnerable to changes in temperature..  

Essentially, the way we farm is a key driver of climate change and it''s a system that''s badly equipped to deal with its consequences. As consumers we can drive the transition to sustainable agriculture by buying goods that are sustainably sourced..

Fish has a similar footprint to chicken. Line and net caught fish have far lower emissions than dredged or trawled fish. Shellfish has a high carbon footprint. Shellfish fisheries account for over 20% of the fishing industry’s carbon emissions, but make up only 6% of all the fish we eat. Sustainable fishing practices mean healthy ocean ecosystems, which is vitally important in the fight against climate change..

Chocolate & coffee that are un-sustainably produced have a significant impact on deforestation. Countries like Ivory Coast have had their forests decimated, largely to create space for cocoa plantations. By checking for FairTrade or Rainforest Alliance accreditation, we can all play a part in moving to sustainable production..');

 Insert into pledge_pros_cons
    (pledge_id,statement,color)
  values
    (1, 'Significant, measureable emissions reduction', 'green'),
    (1, 'Significant cost saving when not flying', 'green'),
    (1, 'Low cost of offset (c.5% of flight cost)', 'amber' ),
    (1, 'Reduced flexibility when not flying', 'red'),

    (2, 'Significantly reduced carbon footprint', 'cyan'),
    (2, 'More time to read or work during your journey', 'cyan'),
    (2, 'Reduced contribution to localised pollution', 'cyan'),
    (2, 'Often cheaper than driving', 'yellow' ),
    (2, 'Less flexibility when travelling', 'red'),
    
    (3, 'Improved health and fitness', 'cyan'),
    (3, 'Significantly cheaper', 'cyan'),
    (3, 'More time spent outdoors', 'cyan'),
    (3, 'Not always practical', 'red'),

    (4, 'Potential reduction in monthly energy costs', 'green'),
    (4, 'Reduced air pollution from clean energy production', 'green'),
    (4, 'Reduced dependence on foreign oil, gas and coal', 'green'),
    (4, 'Ease of switching - only deal with your new provider', 'green'),

    (5, 'Reduced cost of energy provision', 'cyan'),
    (5, 'Reduced carbon emissions', 'cyan'),
    (5, 'Spend less time with technology', 'cyan'),
    (5, 'Cost of buying energy efficient replacements (typically recouped in short space of time)', 'yellow'),

    (6, 'It''s cheaper', 'cyan'),
    (6, 'You support charity shops', 'cyan'),
    (6, 'You keep clothes out of land-fill', 'cyan'),
    (6, 'You won''t be supporting child labour', 'cyan'),
    (6, 'You will be preventing microplastic pollution', 'cyan'),

    (7, 'Save money on coffee cups and water bottles', 'cyan'),
    (7, 'Protect land and marine life from plastic pollution', 'cyan'),
    (7, 'Reduce your individual consumption', 'cyan'),
    (7, 'Planning required to bring alternative containers', 'red'),
    (7, 'Small initial cost of food and drink containers', 'red'),

    (8, 'Cheaper food shops', 'cyan'),
    (8, 'Lower your cholesterol and risk of heart disease', 'cyan'),
    (8, 'Significant reduction in personal emissions', 'cyan'),
    (8, 'Protect rainforests and biodiversity', 'cyan'),
    (8, 'Reduced contribution to animal cruelty', 'cyan'),
    (8, 'Challenge of changing diet', 'red'),

    (9, 'Support local businesses', 'cyan'),
    (9, 'Eat fresher food', 'cyan'),
    (9, 'Eat healthier food', 'cyan'),
    (9, 'Eat tastier food', 'cyan'),
    (9, 'Reduced range of food options', 'red'),

    (10, 'Avoid contributing to rainforest deforestation', 'cyan'),
    (10, 'Support responsible, environmentally conscious businesses', 'cyan'),
    (10, 'Protect the rights and living conditions of farmers', 'cyan'),
    (10, 'Eat tastier food', 'cyan'),
    (10, 'Increased cost in some instances', 'red'),
    (10, 'Inconvenience of researching the sustainability of food', 'red');

Insert into pledge_references (pledge_id,description) values
(1,'https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year'),
(1,'https://www.dw.com/en/to-fly-or-not-to-fly-the-environmental-cost-of-air-travel/a-42090155'),
(1,'https://co2.myclimate.org/en/flight_calculators/new'),
(2,'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/790626/2018-provisional-emissions-statistics-report.pdf'),
(2,'https://www.theccc.org.uk/wp-content/uploads/2015/09/Impact-of-real-world-driving-emissions-for-UK-cars-and-vans.pdf'),
(2,'https://www.energysavingtrust.org.uk/blog/planes-trains-and-automobiles-%E2%80%93-carbon-emissions-compared-between-london-and-edinburgh'),
(2,'https://www.bbc.co.uk/news/science-environment-49349566'),
(2,'http://www.europarl.europa.eu/news/en/headlines/society/20190313STO31218/co2-emissions-from-cars-facts-and-figures-infographics'),
(2,'https://theconversation.com/fact-check-are-diesel-cars-really-more-polluting-than-petrol-cars-76241'),(3,'https://www.cyclinguk.org/statistics'),
(3,'https://projects.ncsu.edu/project/treesofstrength/treefact.htm'),
(3,'https://www.ons.gov.uk/economy/environmentalaccounts/articles/fivefactsaboutcars/2016-09-22'),
(3,'https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle'),
(4,'https://www.carbonindependent.org/16.html'),
(4,'https://data.worldbank.org/indicator/eg.use.comm.fo.zs'),
(4,'https://www.energysavingtrust.org.uk/home-energy-efficiency/switching-utilities/buying-green-electricity'),
(5,'https://robinhoodenergy.co.uk/news/energy-saving-light-bulbs/'),
(5,'http://www.energysavingtrust.org.uk/sites/default/files/reports/PoweringthenationreportCO332.pdf'),
(5,'http://www.cecenergy.co.uk/2017/10/do-you-know-how-much-your-appliances-cost-to-run/'),
(5,'https://www.theguardian.com/environment/green-living-blog/2010/nov/25/carbon-footprint-load-laundry'),
(5,'http://www.energysavingtrust.org.uk/In-your-home/Heating-and-hot-water/Thermostats-and-controls'),
(5,'https://i2.wp.com/shrinkthatfootprint.com/wp-content/uploads/2013/02/household1.gif'),
(6,'https://unfccc.int/news/un-helps-fashion-industry-shift-to-low-carbon'),
(6,'https://www.peta.org.uk/wp-content/uploads/2019/03/Pulse_of_the_fashion_industry_report_2018-1.pdf'),
(6,'https://publications.parliament.uk/pa/cm201719/cmselect/cmenvaud/1952/report-files/195206.htm'),
(6,'https://www.ellenmacarthurfoundation.org/assets/downloads/publications/A-New-Textiles-Economy_Full-Report.pdf'),
(7,'https://www.sciencedirect.com/science/article/pii/S0921344915301245'),
(7,'https://www.ciel.org/wp-content/uploads/2019/05/Plastic-and-Climate-FINAL-2019.pdf'),
(8,'https://www.nationalgeographic.co.uk/environment/2019/06/choosing-chicken-over-beef-cuts-our-carbon-footprints-surprising-amount'),
(8,'https://www.onegreenplanet.org/animalsandnature/beef-production-is-killing-the-amazon-rainforest/'),
(8,'https://globalforestatlas.yale.edu/amazon/land-use/cattle-ranching'),
(8,'https://www.bbc.co.uk/news/science-environment-46459714'),
(8,'http://www.fao.org/news/story/en/item/197623/icode/'),
(8,'https://www.onegreenplanet.org/environment/livestock-feed-and-habitat-destruction/'),
(8,'https://www.sciencedaily.com/releases/2014/03/140327111724.htm'),
(8,'https://link.springer.com/article/10.1007%2Fs10584-014-1169-1'),
(8,'https://projects.ncsu.edu/project/treesofstrength/treefact.htm'),
(9,'https://www.thegrocer.co.uk/fruit-and-veg/three-quarters-of-fruit-and-veg-eaten-in-uk-is-imported/548771.article'),
(9,'https://www.sciencedaily.com/releases/2008/04/080421161338.htm'),
(9,'http://shrinkthatfootprint.com/food-miles'),
(9,'https://www.wearedonation.com/do-actions/eat-seasonably/#climate-change'),
(10,'https://www.oecd.org/agriculture/ministerial/background/notes/4_background_note.pdf'),
(10,'https://www.independent.co.uk/environment/seafood-greenhouse-gas-emissions-lobsters-demand-climate-change-shrimp-crustaceans-a8286821.html'),
(10,'https://www.pewresearch.org/fact-tank/2019/06/17/worlds-population-is-projected-to-nearly-stop-growing-by-the-end-of-the-century/
'),
(10,'http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf');


Insert into pledge_resources (pledge_id , description,link) values
(1,'Loco2 - Trains and busses across Europe','https://loco2.com/en-gb'),
(1,'Guardian - 50 best no-fly holidays',' https://www.theguardian.com/travel/2007/mar/18/ethicalholidays.green.escape'),
(1,'GoldStandard - Highest standard carbon offsets',' https://www.goldstandard.org/'),
(1,'BBC offsetting article - Should I offset my summer holiday flights?','https://www.bbc.co.uk/news/business-48657582'),

(2,'Citimapper - Public transport planner in large cities','https://citymapper.com/?lang=en'),
(2,'Megabus -Low cost bus and train travel','https://uk.megabus.com/'),
(2,'The Trainline - Search and book train tickets','https://www.thetrainline.com/'),

(3,'Cyclescheme - Save money and spread the cost of a new bike','https://www.cyclescheme.co.uk/'),

(4,'Energy saving trust - Greenest energy tariffs','https://www.energysavingtrust.org.uk/home-energy-efficiency/switching-utilities/buying-green-electricity'),

(5,'Smart Energy GB - How to get a smart meter','https://www.smartenergygb.org/en/get-a-smart-meter/how-to-get-a-smart-meter'),
(6,'ASOS Eco Womens -  Womens eco brands','https://www.asos.com/women/eco-brands/cat/?affid=10607&cid=10062&cr=6&pubref=1171&transaction_id=10247fc5a99d5951e5ed0173e91888'),
(6,'ASOS Responsible Mens - Responsibly sourced mens clothes','https://www.asos.com/men/the-responsible-edit/cat/?cid=28982&page=1'),
(6,'Eluxe Magazine - List of sustainable','https://eluxemagazine.com/fashion/best-sustainable-fashion-stores-online/'),
(6,'online fashion stores - online fashion stores','https://www.patatam.co.uk/women-clothes/cheap'),
(7,'Chillys - Reusable bottles and coffee cups','https://www.chillysbottles.com/uk/'),
(7,'Zero Waste Near Me - UK platform for finding zero waste shops','https://www.zerowastenear.me/'),
(8,'Jamie Oliver - Vegetarian recipes',' https://www.jamieoliver.com/recipes/category/special-diets/vegetarian/'),
(8,'BBC Good Food -  Quick vegetarian recipes','https://www.bbcgoodfood.com/recipes/collection/quick-veggie'),
(9,'Eat Seasonably - Seasonal eating calendar','https://www.finerminds.com/eat-seasonably/'),
(9,'Abel & Co - Local, organic food boxes','https://www.abelandcole.co.uk/fruit-veg/fruit-veg-boxes'),
(9,'Big Barn - Local food outlets near you','https://www.bigbarn.co.uk/'),
(10,'BBC - Climate impact of different foods','https://www.bbc.co.uk/news/science-environment-46459714');


Insert into pledge_instructions (pledge_id,description) values
(1,'Plan staycations with family and friends'),
(1,'Use the resources below to offset when you fly'),
(1,'Use public transport to go on holiday'),
(1,'Use video conferencing for international meetings'),
(2,'Find your best public transport options using the resources below'),
(4,'Use the resources below to find the right provider'),
(4,'Let the new provider deal with your existing provider'),
(5,'Replace light bulbs with LEDs'),
(5,'Turn off lights and appliances when not in use'),
(5,'Wash your clothes at 30 degrees and air dry them'),
(5,'Reduce your thermostat by one degree'),
(5,'Get a smart energy meter to see where you are using energy (they are free)
(more information on each below)'),
(6,'Buy second-hand clothes'),
(6,'Buy fewer clothes'),
(6,'Buy higher quality, ethically produced items that will last longer'),
(6,'Buy clothes made from natural fibres'),
(6,'Buy clothes made from recycled polyester'),
(7,'Buy a reusable coffee cup and water bottle'),
(7,'Consider the packaging that comes with your shopping and where it will go'),
(7,'Buy direct from grocers'),
(7,'Say no to straws and plastic bags'),
(8,'Learn simple vegetarian recipes'),
(9,'Buy food from local grocers and butchers'),
(9,'Print out a seasonal food map using the resource below'),
(9,'Sign up to a veg box delivery'),
(10,'Buy fair trade products'),
(10,'Buy products with the Rainforest Alliance frog mark'),
(10,'Buy local, seasonal food'),
(10,'Ask the source of fish, meat, coffee, tea and chocolate'),
(10,'Eat less shellfish');

Insert into pledge_to_user (pledge_id,user_id,pledge_name) values
(1,1,'Flying'),
(2,1,'Green energy');

  COMMIT;