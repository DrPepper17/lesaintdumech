/*
    0. ID
    1. Project Type: (category list)
        0. Doesn't meet categories
        1. Gundam
        2. Ship: Gundam
        3. Ship: Other Franchise
        4. Car / Automobiles
        5. Display
        6. Digimon
        7. Pokemon
        8. Transformer
        9. Zoid
        10. Haropla
        11. 

    // Gundams (1) //
    2. Short Name
    3. Full Name
    4. Serial Number
    5. Series
    6. EW Version (wing only) true/false
    7. Developed from
    8. Delovoped into
    9. Era
    10. Timeline (array) [integer,string,last year seen] 
    11. Pilot
    12. Secondary Pilots (array)
    13. Manufacturer
    14. Affiliation  (array)
    15. Height [integer,string]
    16. Weight [integer,string]
    17. Material
    18. Power Source
    19. Armaments (Array) (armaments are components integrated into the unit, that cannot be dropped in battle)
    20. Equipment (array)v(equipment are components separate from the suit, i.e. a beam saver or shield)
    21. Systems
    22. Designed by
    23. SDW Hero (true/false)
    24. Alternate Name
    25. Mobile Armor: true/false
    26. original photo (array): ['file path','photo name']
    27. 

    // Ship (fictional): Gundam (2) //
    2. Short Name
    3. Full Name
    4. Serial Number
    5. Series
    6. ...
    7. ...
    8. ...
    9. Era
    10. Timeline (array) [integer,string,last year seen]
    11. Pilot
    12. Secondary Pilots (array)
    13. Manufacturer
    14. Affiliation  (array)
    15. length [integer,string]
    16. ...
    17. ...
    18. ...
    19. Armaments (Array)
    20. Equipment (array)
    21. Units Onboard
    22. ...
    23. ...
    24. ...
    25. ...
    26. original photo (array): ['file path','photo name']
    27. title/classification
    28. 


    // Ship (fictional): Other (3) //
    2. Short Name
    3. Full Name
    4. Serial Number / series
    5. Franchise
    6. ...
    7. ...
    8. ...
    9. Era
    10. Creations (array) [integer,string]
    11. ...
    12. ...
    13. ...
    14. Affiliation  (array)
    15. Height [integer,string]
    16. Length [integer,string]
    17. Width [integer,string]
    18. Propulsion
    19. Armaments (Array)
    20. ...
    21. Defenses (array)
    22. ...
    23. ...
    24. ...
    25. ...
    26. original photo (array): ['file path','photo name']
    27. title/classification
    28. 

    // Car (4) //
    2. Short Name
    3. Full Name
    4. Manufacturer
    5. Model
    6. Year
    7. Type of Vehicle (Category List: Car, Truck, Van, Plane, ship, spaceship_
    8. Sedan (boolean) (ignore if not a car)
    9. timespan
    24. Nickname
    26. Photo

    // Display 5) //
    2. Name
    3. Kit
    4. Brand / Manufacturer

    // Digimon (6) //
    2. Name 
    3. Form (if applicable)
    4. Level
    5. Digivolve From
    6. Type
    7. Element

    // Pokemon (7) //
    2. Name
    3. Form (if applicable)
    4. Universal Dex no.

    // Transformer (8) //
    2. Name
    3.
    4. Canon 
    5. Vehicle forms
    6. Faction
    7. Rank
    8. Cybertron Name
    24. Nickname
    25. Other Canon
    26. Photo

    // Zoid (9) //
    2. Name
    3. Serial No.
    4. Animal / Type
*/

//Models Array
const models = [
    [0],
    [1,1,'Gundam Heavyarms',
        'XXXG-01H Gundam Heavarms EW',
        'XXXG-01H',
        'Mobile Suit Gundam Wing Endless Waltz: Glory of the Losers',
        true,
        'XXXG-00W0 Wing Gundam Proto Zero',
        'XXXG-01H2 Gundam Heavarms Custom',
        'After Colony',
        [195,'April 195 A.C.',195],
        'Trowa Barton',
        ['Heero Yuy'],
        'Barton Foundation',
        ['Colony Liberation Organization','Operation Meteor','Peacemillion'],
        [16.7,'16.7 Meters'],
        [7.7,'7.7 Metric Tons'],
        'Gundanium Alloy',
        'Ultracompact Fusion Reactor',
        ['Vulcan Guns (x2)',
            'Machine Cannons (x2)',
            'Chest Gatling Guns (x2)',
            'Homing Missiles (x44)',
            'Micro Missiles (x52)'
        ],
        [
            'Beam Gatling Gun',
            'Shield',
            'Army Knife',
            'Beam Saber',
            'Igel Unit',
            'Damselfly'
        ],
        [
            'Standard Gundam Operating System',
            'Self-Destruct System'
        ],
        'Hajime Katoki',
        false,
        false,
        false,
        ['img/models/heavyarmsew.jpeg','Gundam Heavyarms EW']
    ],
    [2,1,'Gundam Spiegel',
        'GF13-021NG Gundam Spiegel',
        'GF13-021NG',
        'Mobile Fighter G Gundam',
        false,
        false,
        false,
        'Future Century',
        [60,'60 F.C.',60],
        'Schwartz Bruder',
        ['Kyoji Kasshu'],
        'Neo Germany',
        ['Neo Germany','Shuffle Alliance','Dark Gundam','Kasshu Family','13th Gundam Fight'],
        [16.3,'16.3 Meters'],
        [7.3,'7.3 Metric Tons'],
        'Gundanium Alloy super ceramic composite',
        'Ultracompact Fusion Reactor',
        ['Spiegel Blades (x2)',
            'Iron Net',
            'Messergranz'
        ],
        ['Shiguru Blade','Corelander'],
        ['Mobile Trace System','Stealth Mode'],
        'Kunio Okawara',
        false,
        'Shadow Gundam',
        false,
        ['img/models/spiegel.jpeg','Spiegel Gundam']
    ],
    [3,4,'Chevy Bel-Air',
        'Chevrolet 1957 Bel-Air',
        'Chevrolet',
        'Bel-Air',
        1957,
        'Car',
        true,
        '1950-1957',
        'Harley Earl',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/57belair.jpeg']
    ],
    [4,4,'Volkswagen Beetle',
        'Volkswagen 1968 Beetle',
        'Volkswagen',
        'Beetle Type I',
        1968,
        'Car',
        false,
        '1938-2003',
        'Ferdinand Porsche',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        'Slug Bug',
        false,
        ['img/models/68beetle.jpeg']
    ],
    [5,8,'Bumblebee',
        'Warrior of Cybertron',
        'Live Action Film Franchise',
        [
            ['Volkswagen Beetle'],
            ['Jeep Wrangler'],
            ['Chevrolet Camaro']
        ],
        'Autobots',
        'Lieutenant, Second in Commond',
        'N.B.E.-02; B-127',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        'Bee',
        false,
        ['img/models/bumblebee.jpeg']
    ],
    [6,0,'South Park',
        'Come on down to South Park and meet some friends of mine',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/southpark.jpg','The South Park Gang'],
    ],
    [7,2,'Eternal',
        'ZAFT FFMH-Y101 Eternal',
        'FFMH-Y101',
        'Mobile Suit Gundam Seed',
        false,
        false,
        false,
        'Cosmic Era',
        [71,'71 C.E.','Present'],
        'Andrew Watfeld',
        ['Lacus Clyne'],
        'Zodiac Alliance of Freedom Treaty',
        ['Clyne Faction','Three Ship Alliance','Terminal'],
        [300,'300 Meters'],
        false,
        false,
        false,
        ['Main Cannon',
            'Twin Rail Gun',
            'Missile Launcher',
            'Small Beam Cannon',
            'Micro Missiles (x52)'],
        ['METEOR Unit 01','METEOR Unit 02'],
        ['ZGMF-X09A Justice Gundam',
            'ZGMF-X19A \u221e Justice Gundam',
            'ZGMF-X10A Freedom Gundam',
            'ZGMF-X20A Strike Freedom Gundam',
            'ZGMF-X88S Gaia Gundam',
            'ZGMF-XX09T DOM Trooper'
        ],
        false,
        false,
        false,
        false,
        ['img/models/eternal.jpeg','Warship Eternal'],
        'Warship'
    ],
    [8,3,'Andromeda Black',
        'StarBlazers Andromeda Black',
        'Andromeda Class',
        'StarBlazers',
        false,
        false,
        false,
        'Anno Domini',
        [2203,'May 2203 A.D.','Present'],
        false,
        false,
        false,
        ['Earth Federation Cosmo Navy'],
        [142,'142 Meters'],
        [444,'444 Meters'],
        [103,'103 Meters'],
        'Wave Motion Energy',
        ['Wave-motion gun','4 triple-barreled 40.6 cm positron shock cannon turrets','4 Quick firing torpedo launch tubes','4 Graviton launchers','2 Four barrel anti-battleship grenade launchers','4 Sub-space torpedo launchers','3 shock field cannons around conning tower','2 six-barrel multi-launch lateral beam cannons'],
        false,
        ['Wave Motion Shield'],
        false,
        false,
        false,
        false,
        ['img/models/andromedablack.jpeg','Andromeda Black Model'],
        'Battleship'
    ],
    [9,5,'City Area',
        '30 Minutes Missions #06 Customize Scene Base (City Area) Accessory Set',
        'Bandai',
        '30 Minute Missions',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/30minutecity.jpeg','30 Minute Mission City Display Kit'],
        false
    ],
    [10,6,'WarGreymon',
        'Figure-rise Standard Amplified WarGreymon',
        'Mega',
        ['Metal Greymon'],
        ['Omnimon'],
        'Dragon Man Warrior',
        'Vaccine',
        'Fire',
        'Greymon Family',
        false,
        'Tai Kamiya',
        [20,'20 GB'],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/wargreymon.jpeg','Wargreymon']
    ],
    [11,7,'Greninja',
        'Pokemon #47 Greninja Model Kit',
        '0658',
        'Water / Dark',
        '3rd Stage',
        ['Frogadier','lvl 36'],
        false,
        'Ninja Frog',
        'It appears and vanishes with a ninja\'s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water. When it spins these stars and throws them at high speed, these stars can split metal in two.',
        '4\'11\"',
        [88.2,'88.2 lbs'],
        'VII',
        'Pokemon X and Y',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/greninja.jpeg','Greninja']
    ],
    [12,10,'Red Haro',
        'HaroPla #02 Haro Diva Red Model Kit',
        'Red',
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        ['img/models/redharo.jpeg','Red Haro']
    ],
    [13,1,'Nu Gundam',
        'RX-93 \u03BD Gundam',
        'RX-93',
        'Mobile Suit Gundam: Char\'s Counterattack',
        false,
        'RX-78-2 Gundam',
        'RX-93ff \u03BD Gundam',
        'Universal Century',
        [93,'March 12, 0093 U.C.',93],
        'Amuro Ray',
        false,
        'Anaheim Electronics',
        ['Earth Federation','Londo Bell'],
        [23,'23 Meters'],
        [27.9,'27.9 Metric Tons'],
        'Luna Titanium (Gundarium Alloy',
        'Minovsky Ultracompact Fusion Reactor',
        ['60mm Vulcan Gun (x2)',
            'Fin Funnels (x6)',
            'Birdlime Launchers',
            'Dummy Launchers'
        ],
        [
            'Beam Saber',
            'Spare Beam Saber',
            'Beam Rifle',
            'New Hyper Bazooka',
            'Shield (w/ integrated 7.8 MW beam cannont and missile launchers)'
        ],
        [
            'Psycho-Frame Cockpit'
        ],
        'Yutaki Izubuchi',
        false,
        'NewType-Use Prototype Gundam',
        false,
        ['img/models/nugundam.jpeg','Nu Gundam']
    ]
];

/*
    Project Array:
    0. Name
    1. Model (inside an array) (position 0 is weight).      
                When project includes both a straight and a painted model, omit the straight build
    2. Grade
    3. Straight Build (true/false)
    4. P-Bandai (true/false)
    5. MGEX (true/false)
    6. Series (Age,G,IBO,Mercury,Recon,Seed,TurnA,UC,X,Wing,00)
    7. Stage:
         A: Out Of Inventory
         B: Not Started (Backlog)
         C: In Progress
         D: Constructed (Ready to Post)
         E: Posted
    8. Date started; Date ISO Format (YYYY-MM-DD, or YYYY-MM)
    9. Hours 
            when both straight and painted included on same project, omit straight build hours
    10. LEDS (true/false)
    11. URL // don't do invidivual pages for straightbuilds unless it's a p-bandai
    12. Paint List array. / Straight builds false
    13. Date Posted
    14. Model (link array)
    15. Photos (array of arrays)
        [
            ['file path','alt text',ID: 'img1'],
            ['file path','alt text',ID: 'img2']
        ]
    16. Profile photo (array) ['file path','photo name']
    17.Theme / Description
    18. Gifted? If yes, string of to whom; If no, false
    19. Links (array of arrays)
        [
            ['site name','url']
        ]
    20. Affiliated Projects (array: listing them by their name in Projects[0])
    21. available
    22. Ready to post to site (boolean)
    23. scale
    24.
*/

//Pojects
const projects = [
    //Ad Stella (Mercury)
    ['Aerial (?)',[1,'Aerial'],'FM',false,false,false,'Mercury','A'],
    ['Aerial [HG]',[1,'Aerial'],'HG',true,false,false,'Mercury','D','2023-05-30-09',2.75,false,false,false],
    ['PB Aerial Permet Six [HG]',[1,'Aerial'],'HG',true,true,false,'Mercury','A'],
    ['Ariel',[1.5,'Aerial','Mirasoul Flight Pack'],'HG',false,false,false,'Mercury','B'],
    ['Cherub',[1,'Aerial'],'SD',false,false,false,'Mercury','D','2023-01-03-10',4.91,false,'Builds/Cherub.html',['']],
    ['Azrael',[1,'Dilanza, Guel\'s'],'HG',false,false,false,'Mercury','E','2023-01-05',12.14,false,'Builds/Azrael.html',[''],'2023-02-27'],
    ['Adriel',[1,'LFrith'],'HG',false,false,false,'Mercury','B'],
    ['LFrith [HG]',[1,'LFrith'],'HG',true,false,false,'Mercury','D','2023-04-03-15',2.33,false,false,false],

    //Advanced Generation (Age)
    ['Uriel',[1,'Age-FX'],'SD',false,false,false,'Age','B'],
    ['Gamma Draconis',[1,'Danazine'],'HG',false,false,false,'Age','B'],

    //After Colony (Wing)
    ['Leo Army',[6,'Leo'],'LEO',false,false,false,'Wing','C','2021-10-03',37.42,false,'Builds/LeoArmy.html',['Tested every paint']],
    ['South Park',[6,'Tallgeese','Epyon','Heavy Arms','Shenlong','Deathscythe','Sandrock'],'SD',false,false,false,'Wing','E','2021-06-05',54.42,true,'Builds/uniqueTemplates/SouthPark.html',false,'2021-06-21',models[6],
        [
            ['../../img/projects/gundams/southpark/sparkStan.jpeg','South Park: Stan','img1'],
            ['../../img/projects/gundams/southpark/sparkKyle.jpeg','South Park: Kyle','img2'],
            ['../../img/projects/gundams/southpark/sparkCartman.jpeg','South Park: Cartman','img3'],
            ['../../img/projects/gundams/southpark/sparkKenny.jpeg','South Park: Kenny','img4'],
            ['../../img/projects/gundams/southpark/sparkButters.jpeg','South Park: Butters','img5'],
            ['../../img/projects/gundams/southpark/sparkWendy.jpeg','South Park: Wendy','img6'],
            ['../../img/projects/gundams/southpark/spark02.jpeg','South Park','img7'],
            ['../../img/projects/gundams/southpark/spark03.jpeg','South Park','img8'],
            ['../../img/projects/gundams/southpark/spark05.jpeg','South Park','img9'],
            ['../../img/projects/gundams/southpark/spark06.jpeg','South Park','img10'],
            ['../../img/projects/gundams/southpark/spark07.jpeg','South Park','img11'],
            ['../../img/projects/gundams/southpark/spark10.jpeg','South Park','img12'],
            ['../../img/projects/gundams/southpark/spark11.jpeg','South Park','img13'],
            ['../../img/projects/gundams/southpark/spark12.jpeg','South Park','img14'],
            ['../../img/projects/gundams/southpark/spark13.jpeg','South Park','img15'],
            ['../../img/projects/gundams/southpark/spark14.jpeg','South Park','img16'],
            ['../../img/projects/gundams/southpark/spark15.jpeg','South Park','img17'],
            ['../../img/projects/gundams/southpark/spark16.jpeg','South Park','img18'],
            ['../../img/projects/gundams/southpark/spark17.jpeg','South Park','img19'],
            ['../../img/projects/gundams/southpark/spark18.jpeg','South Park','img20'],
            ['../../img/projects/gundams/southpark/spark19.jpeg','South Park','img21'],
            ['../../img/projects/gundams/southpark/spark20.jpeg','South Park','img22'],
            ['../../img/projects/gundams/southpark/spark21.jpeg','South Park','img23'],
            ['../../img/projects/gundams/southpark/spark22.jpeg','South Park','img24'],
            ['../../img/projects/gundams/southpark/spark23.jpeg','South Park','img25'],
            ['../../img/projects/gundams/southpark/spark24.jpeg','South Park','img26'],
            ['../../img/projects/gundams/southpark/spark25.jpeg','South Park','img27'],
            ['../../img/projects/gundams/southpark/spark26.jpeg','South Park','img28'],
            ['../../img/projects/gundams/southpark/spark01.jpeg','South Park','img29'],
            ['../../img/projects/gundams/southpark/spark04.jpeg','South Park','img30'],
            ['../../img/projects/gundams/southpark/spark08.jpeg','South Park','img31'],
            ['../../img/projects/gundams/southpark/spark09.jpeg','South Park','img32']
        ],
        ['img/projects/gundams/southpark/spark01.jpeg','Profile Photo: South Park'],
        'After finishing the Bel-Air, I realized there was still a lot I had to learn about air brush painting. So before moving on to the larger projects I decided to do something fun on a much more small scale in order to get a little more practice. Looking for a theme I was inspired by the boys of South Park, plus the Operation Meteor lineup.',
        false,false,false,false,true,false],
    ['Gemini',[2,'Aquarius','Aquarius'],'SD',false,false,false,'Wing','E','2021-07-03-05',20.61,false,'Builds/Gemini.html',[''],'2022-01-24'],
    ['Pontus',[1,'Aquarius'],'SD',false,false,false,'Wing','B'],
    ['PB Deathscythe Hell (TV Version',[1,'Deathscythe Hell'],'HG',false,true,false,'Wing','A'],
    ['Epyon [RG]',[1,'Epyon'],'RG',true,false,false,'Wing','A'],
    ['Golden Ghidorah',[1,'Epyon'],'MG',false,false,false,'Wing','B'],
    ['Golden Ghidorah',[1,'Epyon'],'RG',false,false,false,'Wing','A'],
    ['PB Geminass 01 [HG]',[1.5,'Geminass 01','Geminass Assault Mobility Booster Expansion Pack'],'HG',true,true,false,'Wing','E','2022-12-07',6.5,false,'Builds/PBGeminassHG.html',false,'2023-04-27'],
    ['Major Tom',[1,'Geminass 01'],'SD',false,false,false,'Wing','E','2021-12-12',5.15,false,'Builds/MajorTom.html',[''],'2023-04-10'],
    ['Guerilla Arms',
        [1,'Heavy Arms'],
        'MG',
        false,
        false,
        false,
        'Wing',
        'E',
        '2021-04-03',
        60.07,
        false,
        'Builds/Gundams/GuerillaArms.html',
        false,
        '2021-05-22',
        models[1],
        [
            ['../../img/projects/gundams/guerilla_arms/gahamg19.JPG','Gundam Guerilla Arms','img19'],
            ['../../img/projects/gundams/guerilla_arms/gahamg20.JPG','Gundam Guerilla Arms','img20'],
            ['../../img/projects/gundams/guerilla_arms/gahamg21.JPG','Gundam Guerilla Arms','img21'],
            ['../../img/projects/gundams/guerilla_arms/gahamg22.JPG','Gundam Guerilla Arms','img22'],
            ['../../img/projects/gundams/guerilla_arms/gahamg23.JPG','Gundam Guerilla Arms','img23'],
            ['../../img/projects/gundams/guerilla_arms/gahamg24.JPG','Gundam Guerilla Arms','img24'],
            ['../../img/projects/gundams/guerilla_arms/gahamg25.JPG','Gundam Guerilla Arms','img25'],
            ['../../img/projects/gundams/guerilla_arms/gahamg26.JPG','Gundam Guerilla Arms','img26'],
            ['../../img/projects/gundams/guerilla_arms/gahamg27.JPG','Gundam Guerilla Arms','img27'],
            ['../../img/projects/gundams/guerilla_arms/gahamg28.JPG','Gundam Guerilla Arms','img28'],
            ['../../img/projects/gundams/guerilla_arms/gahamg29.JPG','Gundam Guerilla Arms','img29'],
            ['../../img/projects/gundams/guerilla_arms/gahamg30.JPG','Gundam Guerilla Arms','img30'],
            ['../../img/projects/gundams/guerilla_arms/gahamg31.JPG','Gundam Guerilla Arms','img31'],
            ['../../img/projects/gundams/guerilla_arms/gahamg01.JPG','Gundam Guerilla Arms','img1'],
            ['../../img/projects/gundams/guerilla_arms/gahamg02.JPG','Gundam Guerilla Arms','img2'],
            ['../../img/projects/gundams/guerilla_arms/gahamg03.JPG','Gundam Guerilla Arms','img3'],
            ['../../img/projects/gundams/guerilla_arms/gahamg04.JPG','Gundam Guerilla Arms','img4'],
            ['../../img/projects/gundams/guerilla_arms/gahamg05.JPG','Gundam Guerilla Arms','img5'],
            ['../../img/projects/gundams/guerilla_arms/gahamg06.JPG','Gundam Guerilla Arms','img6'],
            ['../../img/projects/gundams/guerilla_arms/gahamg07.JPG','Gundam Guerilla Arms','img7'],
            ['../../img/projects/gundams/guerilla_arms/gahamg08.JPG','Gundam Guerilla Arms','img8'],
            ['../../img/projects/gundams/guerilla_arms/gahamg09.JPG','Gundam Guerilla Arms','img9'],
            ['../../img/projects/gundams/guerilla_arms/gahamg10.JPG','Gundam Guerilla Arms','img10'],
            ['../../img/projects/gundams/guerilla_arms/gahamg11.JPG','Gundam Guerilla Arms','img11'],
            ['../../img/projects/gundams/guerilla_arms/gahamg12.JPG','Gundam Guerilla Arms','img12'],
            ['../../img/projects/gundams/guerilla_arms/gahamg13.JPG','Gundam Guerilla Arms','img13'],
            ['../../img/projects/gundams/guerilla_arms/gahamg14.JPG','Gundam Guerilla Arms','img14'],
            ['../../img/projects/gundams/guerilla_arms/gahamg15.JPG','Gundam Guerilla Arms','img15'],
            ['../../img/projects/gundams/guerilla_arms/gahamg16.JPG','Gundam Guerilla Arms','img16'],
            ['../../img/projects/gundams/guerilla_arms/gahamg17.JPG','Gundam Guerilla Arms','img17'],
            ['../../img/projects/gundams/guerilla_arms/gahamg18.JPG','Gundam Guerilla Arms','img18'],
            ['../../img/projects/gundams/guerilla_arms/gahamg32.JPG','Gundam Guerilla Arms','img32']
        ],
        ['img/projects/gundams/guerilla_arms/gahamg32.JPG','Profile Photo: Gundam Guerilla Arms'],
        'Camouflage. Commando. Jungle Warfare. Entirely hand brushed. First attempt at custom painting. Entirely Testors paints. Huge learning experience.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-gundam-heavyarms-ew-ver'],
            ['NewType','https://newtype.us/p/xyX3s81UEQTYgD2wfA49/h/mg-gundam-heavyarms-ew'],
            ['Amazon','https://a.co/d/03pIAks']
        ],
        false,
        false,
        true,
        '1/100'
    ],
    ['Phoebe',[1,'Maganac Corps'],'SD',false,false,false,'Wing','D','2022-04-11',8.42,false,'Builds/Phoebe.html',['']],
    ['Isaac',[1,'Proto-Zero'],'SD',false,false,false,'Wing','E','2023-02-06',14.14,false,'Builds/Isaac.html',[''],'2023-05-10'],
    ['Jericho',[1,'Proto-Zero'],'HG',false,false,false,'Wing','E','2023-01-09',12.79,false,'Builds/Jericho.html',[''],'2023-05-24'],
    ['King David',[1,'Proto-Zero'],'MG',false,false,false,'Wing','E','2023-03-08',52.11,true,'Builds/KingDavid.html',[''],'2023-05-15'],
    ['Metal Zero',[1,'Proto-Zero'],'SD',false,false,false,'Wing','E','2023-01-08',14.19,false,'Builds/MetalZero.html',[''],'2023-05-04'],
    ['Proto-Zero [SD]',[1,'Proto-Zero'],'SD',true,false,false,'Wing','E','2021-12-14',1.67,false,false,false,'2023-05-01'],
    ['Napoleon',[2,'Tallgeese','Ceramic Horse'],'MG',false,false,false,'Wing','B'],
    ['St Dominic',[1,'Tallgeese'],'RG',false,false,false,'Wing','E','2021-12-10',19,false,'Builds/StDominic.html',[''],'2022-06-08'],
    ['PB Fl\u00FCgel Sparkel',[1,'Tallgeese Fl\u00FCgel'],'MG',false,true,false,'Wing','B'],
    ['PB Tallgeese Fl\u00FCgel [MG]',[1,'Tallgeese Fl\u00FCgel'],'MG',true,true,false,'Wing','D','2022-05-08',20.17,false,'Builds/PBTallgeeseFlugelMG.html',false],
    ['Wild Wing',[1,'Wing Gundam'],'MG',false,false,false,'Wing','E','2021-07-06',60.48,true,'Builds/WildWing.html',[''],'2022-02-14'],
    ['Wing Gundam [RG]',[1,'Wing Gundam'],'RG',true,false,false,'Wing','E','2021-07',12.59,false,false,false,'2022-02-07'],
    ['PB Clear Wing Zero [RG]',[1,'Wing Zero'],'RG',true,true,false,'Wing','E','2021-11-10',6.15,false,'Builds/PBZeroRG',false,'2022-04-19'],
    ['Dark Zero',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Dark Zero',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Dark Zero',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Fiery Mothra',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Gold Dust Woman',[1,'Wing Zero'],'SD',false,false,false,'Wing','E','2021-09-09',8.37,false,'Builds/GoldDustWoman.html',[''],'2022-02-01'],
    ['Snow White',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Snow White',[1,'Wing Zero'],'RG',false,false,false,'Wing','B'],
    ['Snow White',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Wing Zero KA [MG]',[1,'Wing Zero','GFFMC Wings For MG Wing Zero'],'MG',true,false,false,'Wing','C','2022-06-05',10.83,false,false,false],
    ['Wing Zero [PG]',[1,'Wing GUndam'],'PG',true,false,false,'Wing','A'],
    ['Zero Traditional',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Zero Traditional',[1,'Wing Zero'],'RG',false,false,false,'Wing','B'],
    ['Zero Traditional',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Zero EW (mg)',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Zero EW (rg)',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Zero EW (sd)',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],

    //After War (X)
    ['Gaebora',[1,'Airmaster'],'SD',false,false,false,'X','E','2021-10-06',5.51,false,'Builds/Gaebora.html',[''],'2022-03-28'],
    ['Biohazard',[1,'Double X'],'SD',false,false,false,'X','E','2022-08-08',5.83,false,'Builds/Biohazard.html',[''],'2022-10-24'],
    ['Charlie Daniels',[1,'Double X'],'SD',false,false,false,'X','E','2021-10-08',4.51,false,'Builds/CharlieDaniels.html',[''],'2022-08-01'],
    ['Corona Virus',[1,'Double X'],'MG',false,false,false,'X','E','2022-09-05',36.08,false,'Builds/Corona.html',[''],'2022-10-31'],
    ['Double X [MG]',[1,'Double X'],'MG',true,false,false,'X','E','2022-09-10',7.58,false,false,false,'2022-10-10'],
    ['Double X [HG]',[1,'Double X'],'HG',true,false,false,'X','E','2022-08-10',2,false,false,false,'2022-09-26'],
    ['Guapo',[1,'Leopard'],'SD',false,false,false,'X','E','2021-10-05',6.2,false,'Builds/Guapo.html',[''],'2022-03-07'],
    ['Iron Maiden',[1,'X Gundam'],'SD',false,false,false,'X','E','2021-10-07',4.83,false,'Builds/IronMaiden.html',[''],'2023-03-20'],

    //Anno Domini (00)
    ['Gundam Umlaut \xD6\xD6',[1,'00 Gundam'],'SD',false,false,false,'00','E','2021-06-07',10.83,false,'Builds/Umlaut.html',[''],'2021-06-23'],
    ['Metatron',[1,'00 Raiser'],'SD',false,false,false,'00','B'],
    ['PB Trans-Am Clear 00 Raiser [RG]',[1,'00 Gundam Raiser'],'RG',true,true,false,'00','E','2021-12-09',12.67,false,'Builds/PBooraiserRG.html',false,'2022-06-15'],
    ['Silver \'n\' Gold',[1,'00 Gundam QAN[T]'],'RG',false,false,false,'00','B'],
    ['Thunder QAN[T]',[1,'00 Gundam QAN[T]'],'SD',false,false,false,'00','E','2021-06-12',11.68,true,'Builds/ThunderQ.html',[''],'2021-08-09'],
    ['PB Trans-Am Clear 00 QAN[T] [RG]',[1,'00 Gundam QAN[T]'],'RG',true,true,false,'00','E','2022-01-09',8.33,false,'Builds/PBOOQRG.html',false,'2022-07-28'],
    ['Nena',[1,'Exia'],'SD',false,false,false,'00','D','2021-12-07',4.95,false,'Builds/Nena.html',['']],
    ['PB Trans-Am Clear Exia [RG]',[1,'Exia'],'RG',true,true,false,'00','E','2021-12-08',6.58,false,'Builds/PBExiaRG.html',false,'2022-05-31'],
    ['PB Harute (Final Battle Version) [HG]',[1,'Harute'],'HG',true,true,false,'00','E','2022-03-08',5.75,false,'Builds/PBHaruteFinalHG.html',false,'2022-11-21'],
    ['Virtue/Nadlee [MG]',[3,'Virtue','Nadlee','VirtueStand'],'MG',true,false,false,'00','E','2022-02',20.08,true,'Builds/VirtueNadleeStand.html',false,'2023-01-16'],
    ['PB Zabanya (Final Battle Version) [HG]',[1,'Zabanya'],'HG',true,true,false,'00','E','2022-03-09',3,false,'Builds/PBZabanyaFinalHG.html',false,'2022-11-07'],

    //Correct Century (Turn A)
    ['John Wayne',[1,'Turn-A'],'SD',false,false,false,'TurnA','E','2021-09-10',6.62,false,'Builds/JohnWayne.html',[''],'2023-02-13'],

    //Cosmic Century (Seed) 
    ['Gundam Fluorescent',[1,'Aegis'],'SD',false,false,false,'Seed','E','2021-06-08',9.94,false,'Builds/Fluorescent.html',[''],'2021-06-24'],
    ['Bald Eagle',[1,'Astray Blue Frame'],'MG',false,false,false,'Seed','B'],
    ['Raphael',[1,'Astray Gold Frame'],'SD',false,false,false,'Seed','B'],
    ['Oowashi Akatsuki [HG]',[1,'Akatsuki, Oowsahi'],'HG',true,false,false,'Seed','E','2021-12-18',2.67,false,false,false,'2022-04-26'],
    ['Rising Sun',[1,'Akatsuki, Oowashi'],'HG',false,false,false,'Seed','E','2021-11-05',17.28,false,'Builds/RisingSun.html',[''],'2022-04-28'],
    ['King Mars',[1,'Akatsuki, Shiranui'],'HG',false,false,false,'Seed','D','2022-05-06',13.67,false,'Builds/KingMars.html',['']],
    ['Archangel',[2,'Archangel','Archangel'],'Ship',false,false,false,'Seed','E','2021-08-06',76.63,false,'Builds/ArchAngel.html',[''],'2022-01-10'],
    ['Dominion',[1,'Archangel'],'Ship',false,false,false,'Seed','E','2021-09-07',21.87,false,,'Builds/Dominion.html',[''],'2022-01-17'],
    ['Urban Commando',[1,'Buster'],'MG',false,false,false,'Seed','B'],
    ['Calamitous Godzilla',[1,'Calamity'],'FM',false,false,false,'Seed','B'],
    ['PB Armageddon',[2.5,'Dagger L','Dagger L','Dagger Expansion Pack'],'HG',false,true,false,'Seed','E','2022-03-06',28.5,false,'Builds/Armageddon.html',[''],'2022-05-23'],
    ['King Leir',[1,'Dagger L'],'HG',false,false,false,'Seed','E','2021-06-10',14.09,false,'Builds/KingLeir.html',[''],'2021-06-26'],
    ['Samus: Varia Suit',[1,'Dagger L'],'HG',false,false,false,'Seed','C','2023-06-13',3.58,false,'Builds/Gundams/VariaSuit.html',['Tamiya: Gold TS-21 Can','Testors: Sunflower 1191','Tamiya: Matt Black TS-6 Can','Vallejo Game Color: Fluorescent Green 72.104','Tamiya: Gun Metal TS-38 Can']],
    ['Charizard',[1,'Destiny'],'MG',false,false,false,'Seed','B'],
    ['Charizard X',[1,'Destiny'],'SD',false,false,false,'Seed','E','2021-10-10',8.13,false,'Builds/CharizardX.html',[''],'2022-05-16'],
    ['Iapetus',[1,'Destiny'],'SD',false,false,false,'Seed','B'],
    ['Thin Blue Line',[2,'Duel Gundam','Duel Gundam Assault Shroud'],'MG',false,false,false,'Seed','B'],
    ['Eclipse ???',[1,'Eclipse'],'MG',false,false,false,'Seed','B'],
    ['PB Eclipse [MG]',[1.5,'Eclipse','Eclipse Maneuver Striker'],'MG',true,true,false,'Seed','E','2022-02',17.75,false,'Builds/PBEclipseMG.html',false,'2023-01-30'],
    ['Eternal',[1,'Eternal'],'Ship',false,false,false,'Seed','E','2021-08-05',24.1,false,
        'Builds/Ships/eternal.html',['Vallejo Model Color: Sunset Red 70.802'],'2022-01-03',models[7],
        [
            ['../../img/projects/ships/eternal/eternal01.jpeg','Warship Eternal','img1'],
            ['../../img/projects/ships/eternal/eternal02.jpeg','Warship Eternal','img2'],
            ['../../img/projects/ships/eternal/eternal03.jpeg','Warship Eternal','img3'],
            ['../../img/projects/ships/eternal/eternal04.jpeg','Warship Eternal','img4'],
            ['../../img/projects/ships/eternal/eternal05.jpeg','Warship Eternal','img5'],
            ['../../img/projects/ships/eternal/eternal06.jpeg','Warship Eternal','img6'],
            ['../../img/projects/ships/eternal/eternal07.jpeg','Warship Eternal','img7'],
            ['../../img/projects/ships/eternal/eternal08.jpeg','Warship Eternal','img8'],
            ['../../img/projects/ships/eternal/eternal09.jpeg','Warship Eternal','img9'],
            ['../../img/projects/ships/eternal/eternal10.jpeg','Warship Eternal','img10'],
            ['../../img/projects/ships/eternal/eternal11.jpeg','Warship Eternal','img11'],
            ['../../img/projects/ships/eternal/eternal12.jpeg','Warship Eternal','img12'],
            ['../../img/projects/ships/eternal/eternal13.jpeg','Warship Eternal','img13'],
            ['../../img/projects/ships/eternal/eternal14.jpeg','Warship Eternal','img14'],
            ['../../img/projects/ships/eternal/eternal15.jpeg','Warship Eternal','img15'],
            ['../../img/projects/ships/eternal/eternal16.jpeg','Warship Eternal','img16'],
            ['../../img/projects/ships/eternal/eternal17.jpeg','Warship Eternal','img17'],
            ['../../img/projects/ships/eternal/eternal18.jpeg','Warship Eternal','img18'],
            ['../../img/projects/ships/eternal/eternal19.jpeg','Warship Eternal','img19'],
            ['../../img/projects/ships/eternal/eternal20.jpeg','Warship Eternal','img20'],
            ['../../img/projects/ships/eternal/eternal21.jpeg','Warship Eternal','img21'],
            ['../../img/projects/ships/eternal/eternal22.jpeg','Warship Eternal','img22'],
            ['../../img/projects/ships/eternal/eternal23.jpeg','Warship Eternal','img23'],
            ['../../img/projects/ships/eternal/eternal24.jpeg','Warship Eternal','img24'],
            ['../../img/projects/ships/eternal/eternal25.jpeg','Warship Eternal','img25'],
            ['../../img/projects/ships/eternal/eternal26.jpeg','Warship Eternal','img26'],
            ['../../img/projects/ships/eternal/eternal27.jpeg','Warship Eternal','img27'],
            ['../../img/projects/ships/eternal/eternal28.jpeg','Warship Eternal','img28'],
            ['../../img/projects/ships/eternal/eternal29.jpeg','Warship Eternal','img29'],
            ['../../img/projects/ships/eternal/eternal30.jpeg','Warship Eternal','img30']
        ],
        ['img/projects/ships/eternal/eternal28.jpeg','Profile Photo: Eternal'],
        'This was my first ship buid. And I am awfully quite attached to it. At the time I was in a Gundam Seed kick and rewatching that series so the ships and machines from that saga was on my mind. Seed is probably home to all my favorite vessels throughout the entire Gundam saga. Whether it be Eternal or Archangel they\'re all so cool. And Eternal is by my far the coolest one. For this I was trying to be as realistic and close to the source material as possible. So rather than do a custom design I painted it exactly as how it appears in the anime. So expect lots of pink and purples... Also..., it has got to be pointed out how cool and cute the METEOR units in this kit are. By far out of the whole ship, the METEORs I\'m most proud of. Inspired by these, I am going to be doing a much larger scale P-Bandai meteor kit paint real soon.',
        false,
        false,
        ['Archangel'],
        false,
        true,
        '1:1700'
    ],
    ['Orga',[1,'Forbidden'],'FM',false,false,false,'Seed','A'],
    ['Anthem',[1,'Freedom'],'MG',false,false,false,'Seed','E','2022-05-05',73.16,true,'Builds/Anthem.html',[''],'2022-07-04'],
    ['Freedom [MGSD]',[1,'Freedom'],'MGSD',true,false,false,'Seed','E','2023-03-05',8.5,false,false,false,'2023-06-28'],
    ['Liberty',[1,'Freedom'],'SD',false,false,false,'Seed','E','2022-04-09',18,false,'Builds/Liberty.html',[''],'2022-06-27'],
    ['Old Glory',[1,'Freedom'],'MGSD',false,false,false,'Seed','D','2023-05-06',30.33,false,'Builds/Gundams/OldGlory.html',['Mission Models: MMP-001 White','Testors: Red Grapefruit 1196','Testors: Cherry Red 1197','Vallejo Mecha Color: Gold 69.059','Vallejo Mecha Color: Electric Blue 60.020','Vallejo Model Air: Black 71.057','Vallejo Mecha Color: Metallic Blue 69.067','Vallejo Model Air: Metallic Signal Red 71.070','Vallejo Mecha Color: Sky Blue 69.017','Tamiya: Metallic BLue TS-19 Can','Tamiya: Gold TS-21 Can','Tamiya: Matt White TS-27 Can','Tamiya: Metallic Red PS-15 Can','Tamiya: Clear Red X-27']],
    ['Billy Blue Jay',[1,'Ginn'],'MG',false,false,false,'Seed','B'],
    ['PB Destiny Impulse (Regenes) [MG]',[1,'Impulse, Destiny'],'Seed','MG',true,true,false,'C','2023-05-05',6.5,false,'Builds/PBDesintyImpulseREgenesMG.html',false],
    ['PB Destiny Impulse [RG]',[1,'Impulse, Destiny'],'RG',true,true,false,'Seed','B'],
    ['Don\'t Tread On Ye',[1,'Justice'],'MG',false,false,false,'Seed','E','2022-06-06',51.75,true,'Builds/Ye.html',[''],'2022-09-06'],
    ['AntiJustice',[1,'Justice'],'SD',false,false,false,'Seed','B'],
    ['Pacifist',[1,'Justice'],'SD',false,false,false,'Seed','E','2022-04-10',14.58,false,'Builds/Pacifist.html',[''],'2022-08-29'],
    ['PB Clear \u221e Justice [RG]',[1,'Infinite Justice'],'RG',true,true,false,'Seed','E','2021-11-09',4.93,false,'Builds/PBInfiniJusticeRG.html',false,'2022-05-03'],
    ['Oppression',[1,'Infinite Justice'],'MG',false,false,false,'Seed','B'],
    ['Zoroaster',[1,'Legend'],'FM',false,false,false,'Seed','B'],
    ['PB Meteors',[1,'Meteor','Meteor I','Meteor II','Freedom','Infinite Justice'],'HG',false,true,false,'Seed','B'],
    ['Union Jack',[1,'Providence'],'MG',false,false,false,'Seed','A'],
    ['Raider [FM]',[1,'Raider'],'FM',true,false,false,'Seed','D','2023-01-06',9.75,false,false,false],
    ['Rodan',[1,'Raider'],'FM',false,false,false,'Seed','A'],
    ['Blue Angels',[3,'Skygrasper','Skygrasper','Skygrasper'],'RG',false,false,false,'Seed','E','2022-12-05',22,true,'Builds/BlueAngels.html',[''],'2022-12-26'],
    ['Skygrasper [PG]',[1,'Skygrasper'],'PG',true,false,false,'Seed','E','2022-10-06',6,false,'Builds/PGSkygasper.html',false,'2022-12-22'],
    ['Skygrasper [RG]',[2,'Skygrasper','Skygrasper','Skygrasper'],'RG',true,false,false,'Seed','E','2022-09-06',10,false,false,false,'2022-12-19'],
    ['PB Lightning Strike',[2,'Strike','Lightning Striker','Sword Launcher Striker Pack'],'MG',false,true,false,'Seed','B'],
    ['Metal Strike',[1,'Strike'],'SD',false,false,false,'Seed','B'],
    ['Strike Gundam [PG]',[1,'Strike'],'PG',true,false,false,'Seed','D','2023-05-07',14.58,true,'Builds/PGStrike.html',false],
    ['Perfect Strike [PG]',[1,'Strike, Perfect'],'PG',true,false,false,'Seed','A'],
    ['PB Perfect Strike [RG]',[1,'Strike, Perfect'],'RG',true,true,false,'Seed','E','2022-03-07',12.33,false,'Builds/PBPerfectStrikeRG.html',false,'2022-09-13'],
    ['S.A.T.O.',[1,'Strike, Perfect'],'SD',false,false,false,'Seed','D','2022-01-05',14.85,false,'Builds/SATO.html',['']],
    ['PB Strike Daggers',[2,'Strike Dagger','Strike Dagger','Strike Dagger'],'HG',false,true,false,'Seed','D','2023-03-07',20.41,false,'Builds/PBStrikeDagger.html',['']],
    ['AntiFreedom',[1,'Strike-Freedom'],'SD',false,false,false,'Seed','B'],
    ['Servitude',[1,'Strike-Freedom'],'MG',false,false,false,'Seed','B'],
    ['Strike-Freedom Full Burst [MG]',[1,'Strike-Freedom'],'MG',true,false,false,'Seed','E','2021-07-07',18.42,false,false,false,'2021-08-17'],
    ['Strike-Freedom MGEX',[1,'Strike-Freedom'],'MG',true,false,true,'Seed','C','2023-03-09',15.92,false,'Builds/MGEXStrikeFreedom.html',false],
    ['PB Strike-Freedom (Deactive) [RG]',[1,'Strike-Freedom'],'RG',true,true,false,'Seed','D','2023-03-06',4.75,false,'Builds/PBStrikeFreedomDeactiveRG.html',false],
    ['Battra',[1,'Strike Noir'],'MG',false,false,false,'Seed','B'],
    ['Strike Noir [SD]',[1,'Strike Noir'],'SD',true,false,false,'Seed','D','2021-09-06',2.233,false,false,false],
    ['Strike Verde',[1,'Strike Noir'],'SD',false,false,false,'Seed','D','2021-12',8,false,'Builds/StrikeVerde.html',['']],
    ['Oberon',[1,'Windam'],'HG',false,false,false,'Seed','E','2022-03-05',20.25,false,'Builds/Oberon.html',[''],'2022-05-09'],
    ['PB Slash Zaku Phantom (Yzak Jule Custom) [MG]',[1,'Zaku Phantom, Slash'],'MG',true,true,false,'Seed','D','2023-04-05',11.83,false,'Builds/PBPhantomZakuMG.html',false],
    
    //Future Century (G Gundam)
    ['PB Burning Gundam [RG]',[2,'Burning Gundam','Burning Gundam Expansion Pass','Burning Gundam LED lights'],'RG',true,true,false,'G','C','2022-09-07',15.5,true,'Builds/PBBurningGUndamRG.html',false],
    ['Michael',[1,'Burning Gundam'],'SD',false,false,false,'G','B'],
    ['Furcas',[1,'Dark Army'],'HG',false,false,false,'G','B'],
    ['Malphas',[1,'Dark Army'],'HG',false,false,false,'G','E','2022-09-08',5.83,false,'Builds/Malphas.html',[''],'2023-01-23'],
    ['Asmodeus',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Baal',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Balam',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Beleth',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Belial',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Dark Gundam [SD]',[1,'Dark Gundam'],'SD',true,false,false,'G','D','2022-08-07',1.75,false,false,false],
    ['Paimon',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['PB Gundam Rose [HG]',[1,'Rose Gundam'],'HG',true,true,false,'G','A'],
    ['Le Roi Soleil',[1,'Rose Gundam'],'HG',false,false,false,'G','E','2022-08-09',4.17,false,'Builds/RoiSoleil.html',[''],'2022-12-12'],
    ['Gabriel',[1,'Shining Gundam'],'SD',false,false,false,'G','B'],
    ['Red Baron',
        [1,'Spiegel, Gundam'],
        'MG',
        false,
        false,
        false,
        'G',
        'E',
        '2021-05-05',
        72.07,
        true,
        'Builds/Gundams/RedBaron.html',
        false,
        '2021-05-29',
        models[2],
        [
            ['../../img/projects/gundams/red_baron/rbaron03.jpg','Gundam Red Baron','img3'],
            ['../../img/projects/gundams/red_baron/rbaron01.JPG','Gundam Red Baron','img1'],
            ['../../img/projects/gundams/red_baron/rbaron02.jpg','Gundam Red Baron','img2'],
            ['../../img/projects/gundams/red_baron/rbaron04.jpg','Gundam Red Baron','img4'],
            ['../../img/projects/gundams/red_baron/rbaron05.jpg','Gundam Red Baron','img5'],
            ['../../img/projects/gundams/red_baron/rbaron06.jpg','Gundam Red Baron','img6'],
            ['../../img/projects/gundams/red_baron/rbaron07.jpg','Gundam Red Baron','img7'],
            ['../../img/projects/gundams/red_baron/rbaron08.jpg','Gundam Red Baron','img8'],
            ['../../img/projects/gundams/red_baron/rbaron09.jpg','Gundam Red Baron','img9'],
            ['../../img/projects/gundams/red_baron/rbaron10.jpg','Gundam Red Baron','img10'],
            ['../../img/projects/gundams/red_baron/rbaron11.jpg','Gundam Red Baron','img11'],
            ['../../img/projects/gundams/red_baron/rbaron12.jpg','Gundam Red Baron','img12'],
            ['../../img/projects/gundams/red_baron/rbaron13.jpg','Gundam Red Baron','img13'],
            ['../../img/projects/gundams/red_baron/rbaron14.jpg','Gundam Red Baron','img14'],
            ['../../img/projects/gundams/red_baron/rbaron15.jpg','Gundam Red Baron','img15'],
            ['../../img/projects/gundams/red_baron/rbaron16.jpg','Gundam Red Baron','img16'],
            ['../../img/projects/gundams/red_baron/rbaron17.jpg','Gundam Red Baron','img17'],
            ['../../img/projects/gundams/red_baron/rbaron18.jpg','Gundam Red Baron','img18'],
            ['../../img/projects/gundams/red_baron/rbaron19.jpg','Gundam Red Baron','img19'],
            ['../../img/projects/gundams/red_baron/rbaron20.jpg','Gundam Red Baron','img20'],
            ['../../img/projects/gundams/red_baron/rbaron21.jpg','Gundam Red Baron','img21'],
            ['../../img/projects/gundams/red_baron/rbaron22.jpg','Gundam Red Baron','img22'],
            ['../../img/projects/gundams/red_baron/rbaron23.jpg','Gundam Red Baron','img23'],
            ['../../img/projects/gundams/red_baron/rbaron24.jpg','Gundam Red Baron','img24'],
            ['../../img/projects/gundams/red_baron/rbaron25.jpg','Gundam Red Baron','img25'],
            ['../../img/projects/gundams/red_baron/rbaron26.jpg','Gundam Red Baron','img26'],
            ['../../img/projects/gundams/red_baron/rbaron27.jpg','Gundam Red Baron','img27'],
            ['../../img/projects/gundams/red_baron/rbaron28.jpg','Gundam Red Baron','img28'],
            ['../../img/projects/gundams/red_baron/rbaron29.jpg','Gundam Red Baron','img29'],
            ['../../img/projects/gundams/red_baron/rbaron30.jpg','Gundam Red Baron','img30'],
            ['../../img/projects/gundams/red_baron/rbaron31.jpg','Gundam Red Baron','img31'],
            ['../../img/projects/gundams/red_baron/rbaron32.jpg','Gundam Red Baron','img32'],
            ['../../img/projects/gundams/red_baron/rbaron33.jpg','Gundam Red Baron','img33'],
            ['../../img/projects/gundams/red_baron/rbaron34.jpg','Gundam Red Baron','img34'],
            ['../../img/projects/gundams/red_baron/rbaron35.jpg','Gundam Red Baron','img35'],
            ['../../img/projects/gundams/red_baron/rbaron36.jpg','Gundam Red Baron','img36'],
            ['../../img/projects/gundams/red_baron/rbaron37.jpg','Gundam Red Baron','img37'],
            ['../../img/projects/gundams/red_baron/rbaron38.jpg','Gundam Red Baron','img38'],
            ['../../img/projects/gundams/red_baron/rbaron39.jpg','Gundam Red Baron','img39'],
            ['../../img/projects/gundams/red_baron/rbaron40.jpg','Gundam Red Baron','img40'],
            ['../../img/projects/gundams/red_baron/rbaron41.jpg','Gundam Red Baron','img41'],
            ['../../img/projects/gundams/red_baron/rbaron42.jpg','Gundam Red Baron','img42']
        ],
        ['img/projects/gundams/red_baron/rbaron42.jpg','Profile Photo: Gundam Red Baron'],
        'Old Prussia. Red Baron. World War One. Pizza. Nietzche book titles. Nose ring helmet spike. First attempt at custom decals. Hand Brushed, First attempt with LEDs.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-gf13_021ng-gundam-spiegel?variant=33023432527'],
            ['NewType','https://newtype.us/p/RQuAYgB4XXkOwgZaWLOi/h/mg-gf13-021ng-gundam-spiegel'],
            ['Amazon','https://a.co/d/1tZmaYO']
        ],
        false,
        false,
        true,
        '1/100'
    ],
    ['Red Baron 2',[1,'Spiegel, Gundam'],'MG',false,false,false,'G','A','',0,false,'Builds/RedBaron2.html',[''],'',models[2]],

    //Post Disaster (IBO)
    ['Thorn',[1,'Barbatos'],'MG',false,false,false,'IBO','B'],
    ['War Pig',[1,'Barbatos'],'SD',false,false,false,'IBO','E','2021-12-13',4.15,false,'Builds/WarPig.html',[''],'2023-04-18'],
    ['Deep Purple',[1,'Barbatos Lupus'],'SD',false,false,false,'IBO','D','2021-12-14',4.36,false,'Builds/DeepPurple.html',['']],
    ['Sealiah',[1,'Barbatos Lupus'],'HG',false,false,false,'IBO','E','2023-02-05',12.51,false,'Builds/Gundams/Sealiah.html',[''],'2023-06-13'],
    ['Nephilim',[1,'Barbatos Lupus Rex'],'HG',false,false,false,'IBO','E','2021-06-11',23.11,false,'Builds/Nephilim.html',[''],'2021-07-26'],
    ['Queen Venus',[1,'Gremory'],'HG',false,false,false,'IBO','B'],
    ['Vine',[1,'Hashmal'],'HG',false,false,false,'IBO','E','2023-01-07',19.64,false,'Builds/Gundams/Vine.html',[''],'2023-06-05'],
    ['\u00dcbermensch',[1,'Vidar'],'FM',false,false,false,'IBO','B'],

    //Universal Century
    ['Dew Drop',[1,'Acguy'],'HG',false,false,false,'UC','E','2023-05-29-08',5.75,false,'Builds/Gundams/DewDrop.html',['Vallejo Model Air: Underside Blue 71.332','Vallejo Model Air: French Blue 71.088','Vallejo Model Air: Steel Blue 71.087','Vallejo Mecha Color: Metallic Blue 69.067','Tamiya: Gold TS-21 Can','Tamiya: Metallic Red PS-15 Can'],'2023-06-19'],
    ['Fantomas',[1,'Banshee Norn'],'SD',false,false,false,'UC','E','2021-06-12',15.02,true,'Builds/Fantomas.html',[''],'2021-08-03'],
    ['King Uranus',[1,'Banshee Norn'],'RG',false,false,false,'UC','B'],
    ['Gundam ARRRgent',[1,'Crossbone X-1'],'SD',false,false,false,'UC','E','2021-06-09',14.09,false,'Builds/arrrgent.html',[''],'2021-06-25'],
    ['Crossbone [RG]',[1,'Crossbone X-1'],'RG',true,false,false,'UC','D','2022-05-07',9.08,false,false,false],
    ['King Neptune',[1,'Crossbone X-1'],'RG',false,false,false,'UC','B'],
    ['Jackie-O',[1,'Delta Plus'],'SD',false,false,false,'UC','E','2022-01-07',11.17,false,'Builds/JackieO.html',[''],'2022-07-11'],
    ['Interstellar',[1,'Dom Test Type'],'HG',false,false,false,'UC','E','2022-08-06',14.07,false,'Builds/Interstellar.html',[''],'2022-11-14'],
    ['Rhea',[1,'RX-75 Guntank'],'SD',false,false,false,'UC','B'],
    ['Theia',[1,'Kshatriya'],'SD',false,false,false,'UC','D','2022-12-08',12.03,false,'Builds/Theia.html',['']],
    ['Der Kommissar',[1,'Lightning Gundam'],'SD',false,false,false,'UC','E','2021-12-11',4.05,false,'Builds/DerKommissar.html',[''],'2023-04-03'],
    ['Nachtigall',[1,'Nightingale'],'SD',false,false,false,'UC','B'],
    ['Mnemosyne',[1,'Neue Ziuel'],'SD',false,false,false,'UC','B'],
    ['\u03C0 (pi)',[1,'Nu Gundam'],'SD',false,false,false,'UC','E','2021-06-06',15.66,false,'Builds/Gundams/pi.html',false,'2021-06-22',models[13],
        [
            ['../../img/projects/gundams/pi/pi01.jpeg','Pi Gundam','img1'],
            ['../../img/projects/gundams/pi/pi02.jpeg','Pi Gundam','img2'],
            ['../../img/projects/gundams/pi/pi03.jpeg','Pi Gundam','img3'],
            ['../../img/projects/gundams/pi/pi04.jpeg','Pi Gundam','img4'],
            ['../../img/projects/gundams/pi/pi05.jpeg','Pi Gundam','img5'],
            ['../../img/projects/gundams/pi/pi06.jpeg','Pi Gundam','img6'],
            ['../../img/projects/gundams/pi/pi07.jpeg','Pi Gundam','img7'],
            ['../../img/projects/gundams/pi/pi08.jpeg','Pi Gundam','img8'],
            ['../../img/projects/gundams/pi/pi09.jpeg','Pi Gundam','img9'],
            ['../../img/projects/gundams/pi/pi10.jpeg','Pi Gundam','img10'],
            ['../../img/projects/gundams/pi/pi11.jpeg','Pi Gundam','img11'],
            ['../../img/projects/gundams/pi/pi12.jpeg','Pi Gundam','img12'],
            ['../../img/projects/gundams/pi/pi13.jpeg','Pi Gundam','img13'],
            ['../../img/projects/gundams/pi/pi14.jpeg','Pi Gundam','img14'],
            ['../../img/projects/gundams/pi/pi15.jpeg','Pi Gundam','img15'],
            ['../../img/projects/gundams/pi/pi16.jpeg','Pi Gundam','img16'],
            ['../../img/projects/gundams/pi/pi17.jpeg','Pi Gundam','img17']
        ],
        ['img/projects/gundams/pi/pi06.jpeg','Profile Photo: Pi Gundam'],
        'No particular theme here for this one. Well... initially. This I was still in the practicing phase with the airbrush so this started out as purely experimental. Since the original Gundam\'s name is \u039D, that\'s the Greek letter Nu, I was like well what is the next letter in the Greek Alphabet that I can name this after. Well the next few letters sequentially were already claimed by other main canon Gundams so I could not use those. Anyhow the next avaible letter turned out to be \u03C0 (pi). And if I\'m wrong, well so help me God. Anyhow, pi lead to pie and it all went downhill from there. So introducing my pi, pie, tasty dessert themed Gundam.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-gundam-ex-standard-16-nu-gundam?variant=32162603204644'],
            ['NewType','https://newtype.us/p/e7WxX8kuxy5xRyggnSXC/h/sdex-standard-16-nu-gundam']
        ],
        false,true,true,false
    ],   //pi gundam
    ['PB BB Senshi RX-93ff \u03bd Gundam [SD]',[1,'Nu Gundam, ff'],'SD',true,true,false,'UC','E','2023-03-13',2.83,false,'Builds/PBRX93ff.html',false,'2023-04-24'],
    ['PB RX-93ff \u03bd Gundam [RG]',[1,'Nu Gundam, ff'],'RG',true,true,false,'UC','E','2023-03-14',14.5,false,'Builds/PBRX93ff.html',false,'2023-04-25'],
    ['Milos',[1,'Nu Gundam, Hi'],'SD',false,false,false,'UC','B'],
    ['PB Umbrella Corp',[2,'Nu Gundam, Hi','Hi Nu Expansion Pack','Hi Nu Hyper Bazooka'],'RG',false,true,false,'UC','A'],
    ['Bella Donna',[2,'Phenex','Phenex'],'SD',false,false,false,'UC','E','2021-12-06',14.37,false,'Builds/BellaDonna.html',[''],'2023-04-16'],
    ['Phenex [SD]',[1,'Phenex'],'SD',true,false,false,'UC','E','2021-10-11',4.17,false,false,false,'2023-03-13'],
    ['Sovereign',[1,'Phenex'],'SD',false,false,false,'UC','E','2021-11-08',5.93,false,'Builds/Sovereign.html',[''],'2023-04-15'],
    ['Titan',[1,'Phenex'],'SD',false,false,false,'UC','E','2021-11-07',6.63,false,'Builds/Titan.html',[''],'2023-03-14'],
    ['LunchTime Solutions',[1,'RX-78-2'],'RG',false,false,false,'UC','B'],
    ['Starman',[1,'Sazabi'],'SD',false,false,false,'UC','D','2021-12-16',5.03,false,'Builds/Starman.html',['']],
    ['Ziggy',[1,'Sazabi'],'SD',false,false,false,'UC','D','2022-03-10',5.75,false,'Builds/Ziggy.html',['']],
    ['Dynamo',[1,'Sinanju'],'MG',false,false,false,'UC','B'],
    ['Stardust',[1,'Sinanju'],'SD',false,false,false,'UC','D','2021-12-15',4.56,false,'Builds/Stardust.html',['']],
    ['PB Shin Musha [MG]',[1,'Shin Musha Gundam'],'MG',true,true,false,'UC','E','2022-08-05',10.58,false,'Builds/PBShinMushaMG.html',false,'2022-12-05'],
    ['Blue Monday',[1,'Sisquiede'],'SD',false,false,false,'UC','D','2022-01-06',6.76,false,'Builds/BlueMonday.html',['']],
    ['Rocket Man',[1,'Xi Gundam'],'SD',false,false,false,'UC','D','2022-01-08',6.5,false,'Builds/RocketMan.html',['']],
    ['MK Ultra',[1,'Zaku II'],'RG',false,false,false,'UC','B'],
    ['Zeong [RG]',[1,'Zeong'],'RG',true,false,false,'UC','E','2021-08-07',8.25,false,false,false,'2022-03-14'],
    ['Starrider',[1,'Zeta Gundam'],'SD',false,false,false,'UC','E','2021-09-08',6.83,false,'Builds/Starrider.html',[''],'2023-03-08'],
    ['Zeta [MG]',[1,'Zeta Gundam'],'MG',true,false,false,'UC','C','2023-04-12',8,false,false,false],

    //Regild Century (Reconguista)


    //Build Divers (BD)
    ['PB Trans-Am Clear 00 Diver [HG]',[1,'00 Gundam Diver'],'HG',true,true,false,'BD','E','2022-01',2.75,false,'Builds/PBooDiverHG.html',false,'2022-08-08'],
    ['King Milky Way',[1,'Astray Rebake'],'HG',false,false,false,'BD','B'],
    ['Four Horsemen',[4,'Barbataurus','Barbataurus','Barbataurus','Barbataurus'],'HG',false,false,false,'BD','B'],
    ['King Sol',[1,'Helios'],'HG',false,false,false,'BD','B'],
    ['King Jupiter',[1,'Livelance'],'HG',false,false,false,'BD','B'],
    ['King Pluto',[1,'QAN[T], Command'],'HG',false,false,false,'BD','B'],
    ['Queen Luna',[1,'QAN[T], Shia'],'HG',false,false,false,'BD','B'],
    ['King Earth',[1,'Strike Freedom, Perfect'],'HG',false,false,false,'BD','B'],
    ['Constellation',[1,'Strike Full Package'],'RG',false,false,false,'BD','E','2021-11-05',37.52,true,'Builds/Constellation.html',[''],'2022-02-28'],
    ['Moonage Daydream',[1,'Strike Full Package'],'SD',false,false,false,'BD','E','2021-11-06',7.27,false,'Builds/MoonageDaydream.html',[''],'2022-02-21'],
    ['King Saturn',[1,'Transient'],'HG',false,false,false,'BD','B'],
    ['King Mercury',[1,'Try Age Magnum'],'HG',false,false,false,'BD','B'],
    
    //SD Heroes 
    ['Artemis',[1,'00, Zhao Yun'],'SD',false,false,false,'Heroes','A'],
    ['Oceanus',[1,'Altron, Zhang He'],'SD',false,false,false,'Heroes','D','2022-04-06',5.42,false,'Builds/Oceanus.html',['']],
    ['Eurybia',[1,'Akatsuki, Zhou Yu'],'SD',false,false,false,'Heroes','B'],
    ['Pallas',[1,'Burning Gundam, Huang Zhang Fei'],'SD',false,false,false,'Heroes','B'],
    ['Perses',[1,'Deathscythe, Xu Huang'],'SD',false,false,false,'Heroes','A'],
    ['Azalea',[1,'Delta, Sasuki'],'SD',false,false,false,'Heroes','E','2021-10-09',6.5,false,'Builds/Azalea.html',[''],'2022-06-22'],
    ['Sasuki Delta [SD]',[1,'Delta, Saskui'],'SD',true,false,false,'Heroes','E','2021-09-05',1.5,false,false,false,'2022-06-20'],
    ['Quetzalcaotl',[1,'Dragon, Dark Grasper'],'SD',false,false,false,'Heroes','B'],
    ['Pharaoh',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Tiamat',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Cronus',[1,'Epyon, Nobunaga'],'SD',false,false,false,'Heroes','A'],
    ['Helios',[1,'Freedom, Zhuge Liang'],'SD',false,false,false,'Heroes','D','2022-03-11',9.25,false,'Builds/Helios.html',['']],
    ['Themis',[1,'Legend, Caesar'],'SD',false,false,false,'Heroes','A'],
    ['Crius',[1,'Sazabi, Zhang Liao'],'SD',false,false,false,'Heroes','B'],
    ['Clymene',[1,'Strike, Knight'],'SD',false,false,false,'Heroes','A'],
    ['Prometheus',[1,'Strike Noir, Xun Yu'],'SD',false,false,false,'Heroes','B'],
    ['Selene',[1,'Strike-Freedom, Qiongqi'],'SD',false,false,false,'Heroes','B'],
    ['Corona Australis',[1,'Tallgeese, Xiahou Yuan'],'SD',false,false,false,'Heroes','D','2022-04-07',7.75,false,'Builds/CoronaAustralis.html',['']],
    ['Corona Borealis',[1,'Tallgeese III, Xiahou Dun'],'SD',false,false,false,'Heroes','D','2022-04-08',8.67,false,'Builds/CoronaBorealis.html',['']],
    ['Coeus',[1,'Unicorn, Long Zun Liu Vei'],'SD',false,false,false,'Heroes','A'],
    ['Bastiat',[1,'Verde Buster, Sergeante'],'SD',false,false,false,'Heroes','E','2021-10-17',8.3,false,'Builds/Bastiat.html',[''],'2022-08-22'],
    ['Mighty Morphin Power Rangers',[7.5,'Trinity Bike','Verde Buster, Sergeant DX','Verde Buster, Sergeant DX','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member'],'SD',false,false,false,'Heroes','E','2022-12-06',39.63,false,'Builds/mmpr.html',[''],'2023-02-20'],
    ['Eos',[1,'Wing, Cao Cao'],'SD',false,false,false,'Heroes','A'],
    ['Tethys',[1,'Wing Isei, Cao Cao'],'SD',false,false,false,'Heroes','D','2022-04-05',8.67,false,'Builds/tethys.html',['']],
    ['Hyperion',[1,'Wing Zero, Tian Ba Cao Cao'],'SD',false,false,false,'Heroes','B'],

    //Haro
    ['Haro Blue',[1,'Haropla #05 Control Blue'],'Haro',false,false,false,'','D','2023-04-07',2.55,false,'Builds/hblue.html',['']],
    ['Haro Cloud',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-14',3.27,false,'Builds/hcloud.html',['']],
    ['Haro Green',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-08',2.75,false,'Builds/hgreen.html',['']],
    ['Haro Lime',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-13',3.34,false,'Builds/hlime.html',['']],
    ['Haro Orange',[1,'Haropla #11 Zakrello'],'Haro',false,false,false,'','D','2023-04-11',4.08,false,'Builds/horange.html',['']],
    ['Haro Pink',[1,'Haropla #04 Momo Pink'],'Haro',false,false,false,'','D','2023-04-09',2.68,false,'Builds/hpink.html',['']],
    ['Haro Purple',[1,'Haropla #07 Ball Haro'],'Haro',false,false,false,'','D','2023-04-10',2.65,false,'Builds/hpurple.html',['']],
    ['Haro Red',[1,'Haropla #02 Diva Red'],'Haro',false,false,false,false,'E','2023-04-06',2.78,false,'Builds/Haro/hred.html',['Vallejo Model Air, Metallic: Signal Red 71.070'],'2023-05-30',models[12],
        [
            ['../../img/projects/haro/redharo/redharo01.jpeg','Red Haro','img1'],
            ['../../img/projects/haro/redharo/redharo02.jpeg','Red Haro','img2'],
            ['../../img/projects/haro/redharo/redharo03.jpeg','Red Haro','img3'],
            ['../../img/projects/haro/redharo/redharo04.jpeg','Red Haro','img4'],
            ['../../img/projects/haro/redharo/redharo05.jpeg','Red Haro','img5'],
            ['../../img/projects/haro/redharo/redharo06.jpeg','Red Haro','img6'],
            ['../../img/projects/haro/redharo/redharo07.jpeg','Red Haro','img7'],
            ['../../img/projects/haro/redharo/redharo08.jpeg','Red Haro','img8'],
            ['../../img/projects/haro/redharo/redharo09.jpeg','Red Haro','img9'],
            ['../../img/projects/haro/redharo/redharo10.jpeg','Red Haro','img10'],
            ['../../img/projects/haro/redharo/redharo11.jpeg','Red Haro','img11'],
            ['../../img/projects/haro/redharo/redharo12.jpeg','Red Haro','img12']
        ],
        ['img/projects/haro/redharo/redharo10.jpeg','Profile Photo: Red Haro'],
        'Easter was coming up and I wanted to do something different than those annoying damn eggs again. So I thought about it and I realized you know what, those Haros sure are pretty round like eggs. So to celebrate the holiday I made a whole basket of them, each a different color, to spread the Easter Joy. Theme for this one was a metallic red color.',
        'Zack #TheLunchDude, Iowa',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gundam-build-divers-haropla-02-haro-diva-red-model-kit?variant=5411672064036'],
            ['NewType','https://newtype.us/p/oMxTGi7TfGH9P6EGgPxH/h/haropla-haro-diva-red']
        ],
        ['Haro Blue','Haro Cloud','Haro Green','Haro Lime','Haro Orange','Haro Pink','Haro Purple'],
        false,true,false
    ],
    
    //Car
    ['Hud Air',
        [1,'Chevy Bel Air, 57'],'Car',false,false,false,'Chevy','E','2021-05-06',23.05,true,'Builds/Automobiles/HudAir.html',false,'2021-06-09',models[3],[['../../img/projects/automobiles/hud_air/hudair01.jpg','Hudson Bel-Air','img1'],['../../img/projects/automobiles/hud_air/hudair02.jpg','Hudson Bel-Air','img2'],['../../img/projects/automobiles/hud_air/hudair03.jpg','Hudson Bel-Air','img3'],['../../img/projects/automobiles/hud_air/hudair04.jpg','Hudson Bel-Air','img4'],['../../img/projects/automobiles/hud_air/hudair05.jpg','Hudson Bel-Air','img5'],['../../img/projects/automobiles/hud_air/hudair06.jpg','Hudson Bel-Air','img6'],['../../img/projects/automobiles/hud_air/hudair07.jpg','Hudson Bel-Air','img7'],['../../img/projects/automobiles/hud_air/hudair08.jpg','Hudson Bel-Air','img8'],['../../img/projects/automobiles/hud_air/hudair09.jpg','Hudson Bel-Air','img9'],['../../img/projects/automobiles/hud_air/hudair10.jpg','Hudson Bel-Air','img10'],['../../img/projects/automobiles/hud_air/hudair11.jpg','Hudson Bel-Air','img11'],['../../img/projects/automobiles/hud_air/hudair12.jpg','Hudson Bel-Air','img12'],['../../img/projects/automobiles/hud_air/hudair13.jpg','Hudson Bel-Air','img13'],['../../img/projects/automobiles/hud_air/hudair14.jpg','Hudson Bel-Air','img14'],['../../img/projects/automobiles/hud_air/hudair15.jpg','Hudson Bel-Air','img15'],['../../img/projects/automobiles/hud_air/hudair16.jpg','Hudson Bel-Air','img16'],['../../img/projects/automobiles/hud_air/hudair17.jpg','Hudson Bel-Air','img17'],['../../img/projects/automobiles/hud_air/hudair18.jpg','Hudson Bel-Air','img18'],['../../img/projects/automobiles/hud_air/hudair19.jpg','Hudson Bel-Air','img19'],['../../img/projects/automobiles/hud_air/hudair20.jpg','Hudson Bel-Air','img20'],['../../img/projects/automobiles/hud_air/hudair21.jpg','Hudson Bel-Air','img21']],['img/projects/automobiles/hud_air/hudair16.jpg','Profile Photo: Hud-Air'],'First attempt at an air brush. Testors paints. Jennifer Hudson. The Nanny. Feeling very purple with this one.','Nick, Nevada',[['Wikipedia','https://en.wikipedia.org/wiki/Chevrolet_Bel_Air'],['Hobby Town','https://www.hobbytown.com/amt-1-24-57-bel-air-model-kit-amt638/p39219'],['Hobby Lobby','https://www.hobbylobby.com/Crafts-Hobbies/Model-Kits/Cars-Trucks-Motorcycles/1957-Chevy-Bel-Air-Model-Kit/p/26172']],false,false,true,'1:25'
    ],
    ['Wilbur',
        [1,'Volkswagen Beetle, 68'],'Car',false,false,false,'Volkswagen','E','2022-11-05',27.08,true,'Builds/Automobiles/wilbur.html',false,'2023-01-02',models[4],[['../../img/projects/automobiles//wilbur/wilbur01.jpeg','Wilbur the Beetle','img1'],['../../img/projects/automobiles//wilbur/wilbur02.jpeg','Wilbur the Beetle','img2'],['../../img/projects/automobiles//wilbur/wilbur03.jpeg','Wilbur the Beetle','img3'],['../../img/projects/automobiles//wilbur/wilbur04.jpeg','Wilbur the Beetle','img4'],['../../img/projects/automobiles//wilbur/wilbur05.jpeg','Wilbur the Beetle','img5'],['../../img/projects/automobiles//wilbur/wilbur06.jpeg','Wilbur the Beetle','img6'],['../../img/projects/automobiles//wilbur/wilbur07.jpeg','Wilbur the Beetle','img7'],['../../img/projects/automobiles//wilbur/wilbur08.jpeg','Wilbur the Beetle','img8'],['../../img/projects/automobiles//wilbur/wilbur09.jpeg','Wilbur the Beetle','img9'],['../../img/projects/automobiles//wilbur/wilbur10.jpeg','Wilbur the Beetle','img10'],['../../img/projects/automobiles//wilbur/wilbur11.jpeg','Wilbur the Beetle','img11'],['../../img/projects/automobiles//wilbur/wilbur12.jpeg','Wilbur the Beetle','img12'],['../../img/projects/automobiles//wilbur/wilbur13.jpeg','Wilbur the Beetle','img13'],['../../img/projects/automobiles//wilbur/wilbur14.jpeg','Wilbur the Beetle','img14'],['../../img/projects/automobiles//wilbur/wilbur15.jpeg','Wilbur the Beetle','img15'],['../../img/projects/automobiles//wilbur/wilbur16.jpeg','Wilbur the Beetle','img16'],['../../img/projects/automobiles//wilbur/wilbur17.jpeg','Wilbur the Beetle','img17'],['../../img/projects/automobiles//wilbur/wilbur18.jpeg','Wilbur the Beetle','img18'],['../../img/projects/automobiles//wilbur/wilbur19.jpeg','Wilbur the Beetle','img19'],['../../img/projects/automobiles//wilbur/wilbur20.jpeg','Wilbur the Beetle','img20'],['../../img/projects/automobiles//wilbur/wilbur21.jpeg','Wilbur the Beetle','img21'],['../../img/projects/automobiles//wilbur/wilbur24.jpeg','Wilbur the Beetle','img24'],['../../img/projects/automobiles//wilbur/wilbur25.jpeg','Wilbur the Beetle','img25'],['../../img/projects/automobiles//wilbur/wilbur26.jpeg','Wilbur the Beetle','img26'],['../../img/projects/automobiles//wilbur/wilbur27.jpeg','Wilbur the Beetle','img27'],['../../img/projects/automobiles//wilbur/wilbur28.jpeg','Wilbur the Beetle','img28'],['../../img/projects/automobiles//wilbur/wilbur29.jpeg','Wilbur the Beetle','img29'],
        ['../../img/projects/automobiles//wilbur/wilbur30.jpeg','Wilbur the Beetle','img30'],['../../img/projects/automobiles//wilbur/wilbur31.jpeg','Wilbur the Beetle','img31'],['../../img/projects/automobiles//wilbur/wilbur32.jpeg','Wilbur the Beetle','img32'],['../../img/projects/automobiles//wilbur/wilbur33.jpeg','Wilbur the Beetle','img33'],['../../img/projects/automobiles//wilbur/wilbur34.jpeg','Wilbur the Beetle','img34'],['../../img/projects/automobiles//wilbur/wilbur35.jpeg','Wilbur the Beetle','img35'],['../../img/projects/automobiles//wilbur/wilbur36.jpeg','Wilbur the Beetle','img36'],['../../img/projects/automobiles//wilbur/wilbur37.jpeg','Wilbur the Beetle','img37'],['../../img/projects/automobiles//wilbur/wilbur38.jpeg','Wilbur the Beetle','img38'],['../../img/projects/automobiles//wilbur/wilbur39.jpeg','Wilbur the Beetle','img39'],['../../img/projects/automobiles//wilbur/wilbur40.jpeg','Wilbur the Beetle','img40'],['../../img/projects/automobiles//wilbur/wilbur41.jpeg','Wilbur the Beetle','img41'],['../../img/projects/automobiles//wilbur/wilbur42.jpeg','Wilbur the Beetle','img42'],['../../img/projects/automobiles//wilbur/wilbur43.jpeg','Wilbur the Beetle','img43'],['../../img/projects/automobiles//wilbur/wilbur44.jpeg','Wilbur the Beetle','img44'],['../../img/projects/automobiles//wilbur/wilbur45.jpeg','Wilbur the Beetle','img45'],['../../img/projects/automobiles//wilbur/wilbur46.jpeg','Wilbur the Beetle','img46'],['../../img/projects/automobiles//wilbur/wilbur47.jpeg','Wilbur the Beetle','img47'],['../../img/projects/automobiles//wilbur/wilbur22.jpeg','Wilbur the Beetle','img22'],['../../img/projects/automobiles//wilbur/wilbur23.jpeg','Wilbur the Beetle','img23']],
        ['img/projects/automobiles//wilbur/wilbur46.jpeg','Profile Photo: Wilbur'],
        'Was an attempt at a recreation for an actual old 68 beetle we\'re in the middle of trying to restore. Incorporating our love of Germany and all things German, most particularly the cute little Dachshund. Made this as a christmas present',
        'Zack #TheLunchDude, Iowa',
        [
            ['Video','https://www.instagram.com/p/Cm64DaTI43G/'],
            ['Wiki','https://en.wikipedia.org/wiki/Volkswagen_Beetle'],
            ['Volkswagen','https://www.vw.com/en.html'],
            ['Hobby Town','https://www.hobbytown.com/revell-germany-1-24-60s-beetle-type-1-rmx854192/p609173']
        ],['Wilbee'],false,true,'1:24'
    ],
    
    //Pokemon
    ['Obelix',[1,'Bulbasaur'],'Pokemon',false,false,false,'','B'],
    ['Asterix',[1,'Charmander'],'Pokemon',false,false,false,'','D','2023-03-12',3.85,false,'Builds/asterix.html',['']],
    ['Vercingetorix',[1,'Charizard'],'Pokemon',false,false,false,'','D','2023-03-10',5.99,false,'Builds/vercingetorix.html',['']],
    ['Boudica',[1,'Dragonite'],'Pokemon',false,false,false,'','D','2023-03-11',3.47,false,'Builds/boudica.html',['']],
    ['Granfrog',[1,'Greninja'],'Pokemon',false,false,false,false,'E','2021-11-11',5.68,false,'Builds/Pokemon/granfrog.html',false,'2022-08-17',models[11],
        [
            ['../../img/projects/pokemon/granfrog/granfrog01.jpeg','Granfrog the Greninja','img1'],
            ['../../img/projects/pokemon/granfrog/granfrog02.jpeg','Granfrog the Greninja','img2'],
            ['../../img/projects/pokemon/granfrog/granfrog03.jpeg','Granfrog the Greninja','img3'],
            ['../../img/projects/pokemon/granfrog/granfrog04.jpeg','Granfrog the Greninja','img4'],
            ['../../img/projects/pokemon/granfrog/granfrog05.jpeg','Granfrog the Greninja','img5'],
            ['../../img/projects/pokemon/granfrog/granfrog06.jpeg','Granfrog the Greninja','img6'],
            ['../../img/projects/pokemon/granfrog/granfrog07.jpeg','Granfrog the Greninja','img7'],
            ['../../img/projects/pokemon/granfrog/granfrog08.jpeg','Granfrog the Greninja','img8'],
            ['../../img/projects/pokemon/granfrog/granfrog09.jpeg','Granfrog the Greninja','img9'],
            ['../../img/projects/pokemon/granfrog/granfrog10.jpeg','Granfrog the Greninja','img10'],
            ['../../img/projects/pokemon/granfrog/granfrog11.jpeg','Granfrog the Greninja','img11']
        ],
        ['img/projects/pokemon/granfrog/granfrog10.jpeg'],
        'So inspiration for this piece is I was looking for a Christmas present idea for a particularly grandmother of mine who is aboslutely obsessed with frogs. I knew I wanted to make her something from scratch, but the hobby stores don\'t just have generic model kits of plain regular animals lying around that creating her a custom painted model frog was a no go. So after much consideration I realized the closest I could do was a pokemon frog. So anyhow, for the color scheme on this one, I didn\'t want to go with the traditional blue that Greninja is known for, but instead respecting my grandmother\'s love for the animal, wanted to keep it as close to the traditional frog colors as possible. Particularly the tropical rainforest frogs you see from South America with the bright colors on their backs.','Mary, Nebraska',
        [
            ['Bulbapedia','https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pokémon)'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pokemon-47-greninja-model-kit?variant=40332069765317'],
            ['NewType','https://newtype.us/p/dwk8jzQtdPBUWYb5VxT3/h/pokemon-greninja']
        ],false,false,true,false],
    ['Brennus',[1,'Groudon'],'Pokemon',false,false,false,'','A'],
    ['Unhygienix',[1,'Magikarp'],'Pokemon',false,false,false,'','A'],
    ['Lutetia',[1,'Lucario'],'Pokemon',false,false,false,'','A'],
    ['Chanticleerix',[1,'Lugia'],'Pokemon',false,false,false,'','A'],
    ['Cacofonix',[1,'Metagross'],'Pokemon',false,false,false,'','B'],
    ['Getafix',[1,'Rayquaza'],'Pokemon',false,false,false,'','B'],
    ['Dogmatix',[1,'Riolu'],'Pokemon',false,false,false,'','A'],
    ['Cassivellaunus',[1,'Gyrados'],'Pokemon',false,false,false,'','A'],
    
    //Digimon
    ['Heimdall',[1,'Alphamon'],'Digimon',false,false,false,'','A'],
    ['Loki',[1,'Beelzemon'],'Digimon',false,false,false,'','A'],
    ['Thor',[1,'Gallantmon'],'Digimon',false,false,false,'','E','2022-10-05',22.5,false,'Builds/thor.html',[''],'2022-11-28'],
    ['Jormungandr',[1,'Imperialdramom'],'Digimon',false,false,false,'','A'],
    ['Nidhogg',[1,'Machinedramon'],'Digimon',false,false,false,'','A'],
    ['Fenrir',[1,'Metal Garurumon'],'Digimon',false,false,false,'','E','2022-07-07',20.58,false,'Builds/fenrir.html',[''],'2022-09-21'],
    ['T\u00FDr',[1,'Metal Greymon'],'Digimon',false,false,false,'','A'],
    ['Odin',[1,'Shine Greymon',],'Digimon',false,false,false,'','A'],
    ['Ragnarok',[1,'Omnimon'],'Digimon',false,false,false,'','E','2022-07-05',19.65,false,'Builds/ragnorok.html',[''],'2022-10-17'],
    ['Revelation',[1,'Omnimon X'],'Digimon',false,false,false,'','A'],
    ['Fafnir',[1,'War Greymon'],'Digimon',false,false,false,'','E','2022-07-08',20.7,false,'Builds/Digimon/fafnir.html',false,'2022-10-04',models[10],
        [['../../img/projects/digimon/fafnir/fafnir01.jpeg','Fafnir','img1'],
            ['../../img/projects/digimon/fafnir/fafnir02.jpeg','Fafnir','img2'],
            ['../../img/projects/digimon/fafnir/fafnir03.jpeg','Fafnir','img3'],
            ['../../img/projects/digimon/fafnir/fafnir04.jpeg','Fafnir','img4'],
            ['../../img/projects/digimon/fafnir/fafnir05.jpeg','Fafnir','img5'],
            ['../../img/projects/digimon/fafnir/fafnir06.jpeg','Fafnir','img6'],
            ['../../img/projects/digimon/fafnir/fafnir07.jpeg','Fafnir','img7'],
            ['../../img/projects/digimon/fafnir/fafnir08.jpeg','Fafnir','img8'],
            ['../../img/projects/digimon/fafnir/fafnir09.jpeg','Fafnir','img9'],
            ['../../img/projects/digimon/fafnir/fafnir10.jpeg','Fafnir','img10'],
            ['../../img/projects/digimon/fafnir/fafnir11.jpeg','Fafnir','img11'],
            ['../../img/projects/digimon/fafnir/fafnir12.jpeg','Fafnir','img12'],
            ['../../img/projects/digimon/fafnir/fafnir13.jpeg','Fafnir','img13'],
            ['../../img/projects/digimon/fafnir/fafnir14.jpeg','Fafnir','img14'],
            ['../../img/projects/digimon/fafnir/fafnir15.jpeg','Fafnir','img15'],
            ['../../img/projects/digimon/fafnir/fafnir16.jpeg','Fafnir','img16'],
            ['../../img/projects/digimon/fafnir/fafnir17.jpeg','Fafnir','img17'],
            ['../../img/projects/digimon/fafnir/fafnir18.jpeg','Fafnir','img18'],
            ['../../img/projects/digimon/fafnir/fafnir19.jpeg','Fafnir','img19'],
            ['../../img/projects/digimon/fafnir/fafnir20.jpeg','Fafnir','img20'],
            ['../../img/projects/digimon/fafnir/fafnir21.jpeg','Fafnir','img21'],
            ['../../img/projects/digimon/fafnir/fafnir22.jpeg','Fafnir','img22']
        ],
        ['img/projects/digimon/fafnir/fafnir16.jpeg','Profile Photo: Fafnir'],
        'So I loved the show Digimon as a kid growing up, and WarGreymon plus his evolution Omnimon I always thought they were just the coolest. When I saw the amplified kit of him and all its extra details, I was just completedly sold. It came out great. My use of the Vallejo Ferarri Red looked better than the typical yellow-orange of the original plastic. This was just rad as ever.',false,[
            ['Video','https://www.instagram.com/reel/CjUMt3eP1lk/'],
            ['Fandom','https://digimon.fandom.com/wiki/WarGreymon'],
            ['Digmon Cybersleuth','https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/228-wargreymon'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/digimon-adventure-figure-rise-standard-amplified-wargreymon-model-kit'],
            ['NewType','https://newtype.us/p/dGkX8wc4OgATMVVeqW5A/h/figure-rise-wargreymon-amplified']
        ],['Fenrir','Ragnarok'],false,true,false],

    //Display
    ['Diurnum',
        [1,'City Area, 30 Minute Missions'],'Display',false,false,false,false,'E','2022-01-10',9.67,false,'Builds/Displays/diurnum.html',false,'2022-03-21',models[9],
        [
            ['../../img/projects/displays/diurnum/diurnum01.jpeg','City of Diurnum','img1'],
            ['../../img/projects/displays/diurnum/diurnum02.jpeg','City of Diurnum','img2'],
            ['../../img/projects/displays/diurnum/diurnum03.jpeg','City of Diurnum','img3'],
            ['../../img/projects/displays/diurnum/diurnum04.jpeg','City of Diurnum','img4'],
            ['../../img/projects/displays/diurnum/diurnum05.jpeg','City of Diurnum','img5'],
            ['../../img/projects/displays/diurnum/diurnum06.jpeg','City of Diurnum','img6'],
            ['../../img/projects/displays/diurnum/diurnum07.jpeg','City of Diurnum','img7'],
            ['../../img/projects/displays/diurnum/diurnum08.jpeg','City of Diurnum','img8'],
            ['../../img/projects/displays/diurnum/diurnum09.jpeg','City of Diurnum','img9'],
            ['../../img/projects/displays/diurnum/diurnum11.jpeg','City of Diurnum','img10'],
            ['../../img/projects/displays/diurnum/diurnum11.jpeg','City of Diurnum','img11'],
            ['../../img/projects/displays/diurnum/diurnum12.jpeg','City of Diurnum','img12'],
            ['../../img/projects/displays/diurnum/diurnum13.jpeg','City of Diurnum','img13'],
            ['../../img/projects/displays/diurnum/diurnum14.jpeg','City of Diurnum','img14'],
            ['../../img/projects/displays/diurnum/diurnum15.jpeg','City of Diurnum','img15'],
            ['../../img/projects/displays/diurnum/diurnum16.jpeg','City of Diurnum','img16'],
            ['../../img/projects/displays/diurnum/diurnum17.jpeg','City of Diurnum','img17'],
            ['../../img/projects/displays/diurnum/diurnum18.jpeg','City of Diurnum','img18']
        ],
        ['img/projects/displays/diurnum/diurnum07.jpeg','Profile Photo: Diurnum'],
        'Diurnum; Latin for the City of Light. Now though just relics in the dust bowl of the desert. I had went to a plastic modeling convention recently and I was fascinated by all the people who built dioramas. They were so realistic and looked so cool. It had me inspired to want to create my own scenery pieces to show off my own models in. This was my first dabble and attemp. I\'m real proud of how this turned out and not going to lie this little building came out so cute.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/1-144-customized-scene-base-city-area-ver?variant=37444255678661'],
            ['NewType','https://newtype.us/p/CB9RI7xIzfUuV7wIFaYw/h/30mm-customize-scene-base-06-city-area-ver']
        ],false,false,true,false],
    ['Battlefield Earth',[2,'Energy Ring Emitter'],'Display',false,false,false,'','A'],
    ['Kataluma',[1,'Hangar Bay'],'Display',false,false,false,'','E','2022-02',16.96,true,'Builds/kataluma.html',[''],'2022-04-04'],
    ['Stratle',[1,'Maintenance Bay'],'Display',false,false,false,'','E','2022-02-11',27.12,true,'Builds/stratle.html',[''],'2022-04-11'],

    //Ship
    ['Libeccio',[0.2,'Andromeda Black'],'Ship',false,false,false,'StarBlazer','E','2022-09-09',4.42,false,'Builds/Ships/libeccio.html',false,'2023-02-06',models[8],
        [
            ['../../img/projects/ships/libeccio/libeccio01.jpeg','Libeccio Andromeda Class Battleship','img1'],
            ['../../img/projects/ships/libeccio/libeccio02.jpeg','Libeccio Andromeda Class Battleship','img2'],
            ['../../img/projects/ships/libeccio/libeccio03.jpeg','Libeccio Andromeda Class Battleship','img3'],
            ['../../img/projects/ships/libeccio/libeccio04.jpeg','Libeccio Andromeda Class Battleship','img4'],
            ['../../img/projects/ships/libeccio/libeccio05.jpeg','Libeccio Andromeda Class Battleship','img5'],
            ['../../img/projects/ships/libeccio/libeccio06.jpeg','Libeccio Andromeda Class Battleship','img6'],
            ['../../img/projects/ships/libeccio/libeccio07.jpeg','Libeccio Andromeda Class Battleship','img7'],
            ['../../img/projects/ships/libeccio/libeccio08.jpeg','Libeccio Andromeda Class Battleship','img8'],
            ['../../img/projects/ships/libeccio/libeccio09.jpeg','Libeccio Andromeda Class Battleship','img9'],
            ['../../img/projects/ships/libeccio/libeccio10.jpeg','Libeccio Andromeda Class Battleship','img10']
        ],
        ['img/projects/ships/libeccio/libeccio10.jpeg','Profile Photo: Libbeccio'],
        'Named after the Mediterranean SouthWest wind, I present to you the Libeccio. I had, had way too much fun building the Eternal, Archangel and Dominion, that I ached to build another ship model again. Granted there are not many other ships in the Gundam lineup to build, and also that Bandai is currently not manufacturing new ones, I had no choice but to branch out and try another franchise. And luckly enough at the time, there were lots of StarBlazers kits floating around in rotation to take advantavge of. I know nothing about the StarBlazer though of course. But the kits were cool enough that they seemed worth giving them a try.',
        false,
        [
            ['Video','https://www.instagram.com/reel/CoVMgaLMyp5/?igshid=YzcxN2Q2NzY0OA=='],
            ['StarBlazer Wiki','https://yamato.fandom.com/wiki/Andromeda_Black']
        ],['Ostro'],false,true,'1:1000'],
    ['Ostro',[0.2,'Cosmo Falcon'],'Ship',false,false,false,'StarBlazer','E','2022-07-06',6.33,false,'Builds/ostro.html',[''],'2022-07-18'],
    ['Ponente',[1,'Cosmo Zero'],'Ship',false,false,false,'StarBlazer','B'],
    ['Levante',[1,'Nagato'],'Ship',false,false,false,'Space Rengo Kantai','B'],

    //Transformer
    ['Wilbee',[1,'Bumblebee'],'Transformer',false,false,false,false,'E','2022-11-06',9.33,false,'Builds/Transformers/wilbee.html',false,'2023-01-09',models[5],
        [
            ['../../img/projects/transformers/wilbee/wilbee01.jpeg','Wilbee','img1'],
            ['../../img/projects/transformers/wilbee/wilbee02.jpeg','Wilbee','img2'],
            ['../../img/projects/transformers/wilbee/wilbee03.jpeg','Wilbee','img3'],
            ['../../img/projects/transformers/wilbee/wilbee04.jpeg','Wilbee','img4'],
            ['../../img/projects/transformers/wilbee/wilbee05.jpeg','Wilbee','img5'],
            ['../../img/projects/transformers/wilbee/wilbee06.jpeg','Wilbee','img6'],
            ['../../img/projects/transformers/wilbee/wilbee07.jpeg','Wilbee','img7'],
            ['../../img/projects/transformers/wilbee/wilbee08.jpeg','Wilbee','img8'],
            ['../../img/projects/transformers/wilbee/wilbee09.jpeg','Wilbee','img9'],
            ['../../img/projects/transformers/wilbee/wilbee10.jpeg','Wilbee','img10'],
            ['../../img/projects/transformers/wilbee/wilbee11.jpeg','Wilbee','img11'],
            ['../../img/projects/transformers/wilbee/wilbee12.jpeg','Wilbee','img12'],
            ['../../img/projects/transformers/wilbee/wilbee13.jpeg','Wilbee','img13'],
            ['../../img/projects/transformers/wilbee/wilbee14.jpeg','Wilbee','img14'],
            ['../../img/projects/transformers/wilbee/wilbee15.jpeg','Wilbee','img15'],
            ['../../img/projects/transformers/wilbee/wilbee16.jpeg','Wilbee','img16'],
            ['../../img/projects/transformers/wilbee/wilbee17.jpeg','Wilbee','img17'],
            ['../../img/projects/transformers/wilbee/wilbee18.jpeg','Wilbee','img18'],
            ['../../img/projects/transformers/wilbee/wilbee19.jpeg','Wilbee','img19'],
            ['../../img/projects/transformers/wilbee/wilbee20.jpeg','Wilbee','img20'],
            ['../../img/projects/transformers/wilbee/wilbee21.jpeg','Wilbee','img21'],
            ['../../img/projects/transformers/wilbee/wilbee22.jpeg','Wilbee','img22'],
            ['../../img/projects/transformers/wilbee/wilbee23.jpeg','Wilbee','img23'],
            ['../../img/projects/transformers/wilbee/wilbee24.jpeg','Wilbee','img24'],
            ['../../img/projects/transformers/wilbee/wilbee25.jpeg','Wilbee','img25'],
            ['../../img/projects/transformers/wilbee/wilbee26.jpeg','Wilbee','img26'],
            ['../../img/projects/transformers/wilbee/wilbee27.jpeg','Wilbee','img27'],
            ['../../img/projects/transformers/wilbee/wilbee28.jpeg','Wilbee','img28'],
            ['../../img/projects/transformers/wilbee/wilbee29.jpeg','Wilbee','img29'],
            ['../../img/projects/transformers/wilbee/wilbee30.jpeg','Wilbee','img30'],
            ['../../img/projects/transformers/wilbee/wilbee31.jpeg','Wilbee','img31'],
            ['../../img/projects/transformers/wilbee/wilbee32.jpeg','Wilbee','img32'],
            ['../../img/projects/transformers/wilbee/wilbee33.jpeg','Wilbee','img33'],
            ['../../img/projects/transformers/wilbee/wilbee34.jpeg','Wilbee','img34'],
            ['../../img/projects/transformers/wilbee/wilbee35.jpeg','Wilbee','img35'],
            ['../../img/projects/transformers/wilbee/wilbee36.jpeg','Wilbee','img36'],
            ['../../img/projects/transformers/wilbee/wilbee37.jpeg','Wilbee','img37']
        ],
        ['img/projects/transformers/wilbee/wilbee37.jpeg','Profile Photo: Wilbee'],
        'Was working on the Volkswagen Beetle model Wilbur and train of thought on this led me to considering the Transformer\'s 2018 Bumblebee film Volkswagen bug version of the eponymous \'Bumblebee\'. So this lead me to immediately buying the eqivalent Trumpeter brand model Bumblebee kit and painting him the same colors as Wilbur... thus \u00E0 la Wil-Beeeee!!!! I like to imagine him being my Wilbur transformed into robot mode. Oh and unlike Captain Bumble, Wilbee is a total Predacon.',
        false,
        [
            ['Video','https://www.instagram.com/p/CnM23e9IV7k/'],
            ['USA Gundam','https://www.usagundamstore.com/products/transformers-bumblebee-smart-model-kit?variant=41383099105477'],
            ['NewType','https://newtype.us/p/TgNnMiuDbvcowmHCougQ/h/trumpeter-bumblebee-smart-kit'],
            ['Amazon','https://a.co/d/a6lagxe']
        ],['Wilbur'],false,true,false],
    
    //Zoid
    ['Dash Hound',[1,'Shadow Fox'],'Zoid',false,false,false,'','C','2023-06-12',11.67,false,'Builds/Zoids/DashHound.html',['Tamiya: Gold TS-21 Can','Tamiya: Matt Black TS-6 Can','Tamiya: Copper PS-14 Can','Vallejo Model Air: US Earth Red 71.293','Vallejo Model Air: USAF Brown 71.125','Vallejo Model Air: Rust 71.069','Vallejo Model Air: Armor Brown 71.041','Vallejo Mecha Color: Dark Steel 69.065','Vallejo Model Air: Silver 71.063','Vallejo Model Air: Ivory 71.075','Testors: Brass 1182','Vallejo Model Air: Wood 71.077','Vallejo Model Air: US Desert Sand 71.140','Vallejo Mecha Color: Gun Metal 69.058','Vallejo Model Air: Camouflage Gray 71.280']],
    ['Shere Khan',[1,'Blade Liger'],'Zoid',false,false,false,'','B'],
    ['Akela',[1,'Konig Wolf Heavy Arms'],'Zoid',false,false,false,'','A'],
    ['Kipling',[1,'Liger Zero X'],'Zoid',false,false,false,'','B']
];

//Initialize Arrays
let outOfInventoryArray = [];
let backlogArray = [];
let inProgressArray = [];
let constructedArray = [];
let postedArray = [];
let finishedArray = [];
let pgBacklogArray = [];
let mgBacklogArray = [];
let fmBacklogArray = [];
let rgBacklogArray = [];
let hgBacklogArray = [];
let mgsdBacklogArray = [];
let sdBacklogArray = [];
let pbBacklogArray = [];
let sbBacklogArray = [];
let carBacklogArray = [];
let digiBacklogArray = [];
let dispBacklogArray = [];
let haroBacklogArray = [];
let pokeBacklogArray = [];
let shipBacklogArray = [];
let transBacklogArray = [];
let zoidBacklogArray = [];
let pgFinishedArray = [];
let mgFinishedArray = [];
let fmFinishedArray = [];
let rgFinishedArray = [];
let hgFinishedArray = [];
let mgsdFinishedArray = [];
let sdFinishedArray = [];
let pbFinishedArray = [];
let sbFinishedArray = [];
let carFinishedArray = [];
let digiFinishedArray = [];
let dispFinishedArray = [];
let haroFinishedArray = [];
let pokeFinishedArray = [];
let shipFinishedArray = [];
let transFinishedArray = [];
let zoidFinishedArray = [];
let pbUndeliveredArray = [];
let backlogListArray = [pgBacklogArray,mgBacklogArray,fmBacklogArray,rgBacklogArray,hgBacklogArray,mgsdBacklogArray,sdBacklogArray,pbBacklogArray,sbBacklogArray,carBacklogArray,digiBacklogArray,dispBacklogArray,haroBacklogArray,pokeBacklogArray,shipBacklogArray,transBacklogArray,zoidBacklogArray];
let statsArray = [];
let projectArray = [];
let modelArray = [];

//Initialize Counts
let init = 0;
let outOfInventoryCount = 0;
let backlogCount = 0;
let inProgressCount = 0;
let constructedCount = 0;
let postedCount = 0;
let finishedCount = 0;

//data
    //average hours
    let mgAve = 0;
    let mgStrAve = 0;
    let pgAve = 0;
    let pgStrAve = 0;
    let fmAve = 0;
    let fmStrAve = 0;
    let rgAve = 0;
    let rgStrAve = 0;
    let hgAve = 0;
    let hgStrAve = 0;
    let mgsdAve = 0;
    let mgsdStrAve = 0;
    let sdAve = 0;
    let sdStrAve = 0;
    let haroAve = 0;
    let haroStrAve = 0;
    let carAve = 0;
    let carStrAve = 0;
    let digiAve = 0;
    let digiStrAve = 0;
    let dispAve = 0;
    let dispStrAve = 0;
    let pokeAve = 0;
    let pokeStrAve = 0;
    let shipAve = 0;
    let shipStrAve = 0;
    let transAve = 0;
    let transStrAve = 0;
    let zoidAve = 0;
    let zoidStrAve = 0;
    let paintedAverage = 0;
    let straightAverage = 0;

    //weights
    let pgWt = 0;
    let fmWt = 0;
    let rgWt = 0;
    let hgWt = 0;
    let mgsdWt = 0;
    let sdWt = 0;
    let haroWt = 0;
    let carWt = 0;
    let digiWt = 0;
    let dispWt = 0;
    let pokeWt = 0;
    let shipWt = 0;
    let transWt = 0;
    let zoidWt = 0;
    let straightWeight = 0;

    //counts
    let mgCount = 0;
    let mgStrCount = 0;
    let pgCount = 0;
    let pgStrCount = 0;
    let fmCount = 0;
    let fmStrCount = 0;
    let rgCount = 0;
    let rgStrCount = 0;
    let hgCount = 0;
    let hgStrCount = 0;
    let mgsdCount = 0;
    let mgsdStrCount = 0;
    let sdCount = 0;
    let sdStrCount = 0;
    let haroCount = 0;
    let haroStrCount = 0;
    let carCount = 0;
    let carStrCount = 0;
    let digiCount = 0;
    let digiStrCount = 0;
    let dispCount = 0;
    let dispStrCount = 0;
    let pokeCount = 0;
    let pokeStrCount = 0;
    let shipCount = 0;
    let shipStrCount = 0;
    let transCount = 0;
    let transStrCount = 0;
    let zoidCount = 0;
    let zoidStrCount = 0;

    //PBandai Count
    let mgCountPB = 0;
    let pgCountPB = 0;
    let fmCountPB = 0;
    let rgCountPB = 0;
    let hgCountPB = 0;
    let mgsdCountPB = 0;
    let sdCountPB = 0;
    let haroCountPB = 0;
    let shipCountPB = 0;
    let dispCountPB = 0;

    //Remaining Count
    let mgRemain = 0;
    let pgRemain = 0;
    let fmRemain = 0;
    let rgRemain = 0;
    let hgRemain = 0;
    let mgsdRemain = 0;
    let sdRemain = 0;
    let haroRemain = 0;
    let carRemain = 0;
    let digiRemain = 0;
    let dispRemain = 0;
    let pokeRemain = 0;
    let shipRemain = 0;
    let transRemain = 0;
    let zoidRemain = 0;

    //hours
    let mgHours = 0;
    let pgHours = 0;
    let fmHours = 0;
    let rgHours = 0;
    let hgHours = 0;
    let mgsdHours = 0;
    let sdHours = 0;
    let haroHours = 0;
    let carHours = 0;
    let digiHours = 0;
    let dispHours = 0;
    let pokeHours = 0;
    let shipHours = 0;
    let transHours = 0;
    let zoidHours = 0;
    let totalProjectCDEHours = 0;
    let totalProjectCDEWeights = 0;

//Functions
function addConstructed() {   
    let constructOne = [];
    let constructTwo = [];
    let constructThree = [];
    let loop = 1;

    for (let i=0;i<constructedArray.length;i++) {
        if (loop === 1) {
            constructOne.push(constructedArray[i][0]);
            loop++;
        }
        else if (loop === 2) {
            constructTwo.push(constructedArray[i][0]);
            loop++;
        }
        else {
            constructThree.push(constructedArray[i][0]);
            loop = 1;
        }
    }

    for (let i=0;i<constructOne.length;i++) {
        insertLine(constructOne[i],'constOne');
    }
    for (let i=0;i<constructTwo.length;i++) {
        insertLine(constructTwo[i],'constTwo');
    }
    for (let i=0;i<constructThree.length;i++) {
        insertLine(constructThree[i],'constThree');
    }

    const readyCountNode = document.getElementById('readyCountID');
    const readyCountTextNode = document.createTextNode(constructedCount);
    readyCountNode.appendChild(readyCountTextNode);
}

function addInProgress() {
    let progressOne = [];
    let progressTwo = [];
    let progressThree = [];
    let loop = 1;

    for (let i=0;i<inProgressArray.length;i++) {
        if (loop === 1) {
            progressOne.push(inProgressArray[i][0]);
            loop++;
        }
        else if (loop === 2) {
            progressTwo.push(inProgressArray[i][0]);
            loop++;
        }
        else {
            progressThree.push(inProgressArray[i][0]);
            loop = 1;
        }
    }

    for (let i=0;i<progressOne.length;i++) {
        insertLine(progressOne[i],'progOne');
    }
    for (let i=0;i<progressTwo.length;i++) {
        insertLine(progressTwo[i],'progTwo');
    }
    for (let i=0;i<progressThree.length;i++) {
        insertLine(progressThree[i],'progThree');
    }

    const progCountNode = document.getElementById('progCountID');
    const progCountTextNode = document.createTextNode(inProgressCount);
    progCountNode.appendChild(progCountTextNode);
}

function addTable() {
    //Post Finished
    for (let i=0;i<pgFinishedArray.length;i++) {
        insertLine(pgFinishedArray[i],'pgF');
    }
    for (let i=0;i<mgFinishedArray.length;i++) {
        insertLine(mgFinishedArray[i],'mgF');
    }
    for (let i=0;i<fmFinishedArray.length;i++) {
        insertLine(fmFinishedArray[i],'fmF');
    }
    for (let i=0;i<rgFinishedArray.length;i++) {
        insertLine(rgFinishedArray[i],'rgF');
    }
    for (let i=0;i<hgFinishedArray.length;i++) {
        insertLine(hgFinishedArray[i],'hgF');
    }
    for (i=0;i<mgsdFinishedArray.length;i++) {
        insertLine(mgsdFinishedArray[i],'mgsdF');
    }
    for (let i=0;i<sdFinishedArray.length;i++) {
        insertLine(sdFinishedArray[i],'sdF');
    }
    for (let i=0;i<pbFinishedArray.length;i++) {
        insertLine(pbFinishedArray[i],'pbF');
    }
    for (let i=0;i<sbFinishedArray.length;i++) {
        insertLine(sbFinishedArray[i],'sbF');
    }
    for (let i=0;i<carFinishedArray.length;i++) {
        insertLine(carFinishedArray[i],'carF');
    }
    for (let i=0;i<digiFinishedArray.length;i++) {
        insertLine(digiFinishedArray[i],'dgF');
    }
    for (let i=0;i<dispFinishedArray.length;i++) {
        insertLine(dispFinishedArray[i],'dspF');
    }
    for (let i=0;i<haroFinishedArray.length;i++) {
        insertLine(haroFinishedArray[i],'haroF');
    }
    for (let i=0;i<pokeFinishedArray.length;i++) {
        insertLine(pokeFinishedArray[i],'pokeF');
    }
    for (let i=0;i<shipFinishedArray.length;i++) {
        insertLine(shipFinishedArray[i],'shipF');
    }
    for (let i=0;i<transFinishedArray.length;i++) {
        insertLine(transFinishedArray[i],'transF');
    }
    for (let i=0;i<zoidFinishedArray.length;i++) {
        insertLine(zoidFinishedArray[i],'zoidF');
    }

    //Post Backlog
    for (let i=0;i<pgBacklogArray.length;i++) {
        insertLine(pgBacklogArray[i],'pgBL');
    }
    for (let i=0;i<mgBacklogArray.length;i++) {
        insertLine(mgBacklogArray[i],'mgBL');
    }
    for (let i=0;i<fmBacklogArray.length;i++) {
        insertLine(fmBacklogArray[i],'fmBL');
    }
    for (let i=0;i<rgBacklogArray.length;i++) {
        insertLine(rgBacklogArray[i],'rgBL');
    }
    for (let i=0;i<hgBacklogArray.length;i++) {
        insertLine(hgBacklogArray[i],'hgBL');
    }
    for (i=0;i<mgsdBacklogArray.length;i++) {
        insertLine(mgsdBacklogArray[i],'mgsdBL');
    }
    for (let i=0;i<sdBacklogArray.length;i++) {
        insertLine(sdBacklogArray[i],'sdBL');
    }
    for (let i=0;i<pbBacklogArray.length;i++) {
        insertLine(pbBacklogArray[i],'pbBL');
    }
    for (let i=0;i<sbBacklogArray.length;i++) {
        insertLine(sbBacklogArray[i],'sbBL');
    }
    for (let i=0;i<carBacklogArray.length;i++) {
        insertLine(carBacklogArray[i],'carBL');
    }
    for (let i=0;i<digiBacklogArray.length;i++) {
        insertLine(digiBacklogArray[i],'dgBL');
    }
    for (let i=0;i<dispBacklogArray.length;i++) {
        insertLine(dispBacklogArray[i],'dspBL');
    }
    for (let i=0;i<haroBacklogArray.length;i++) {
        insertLine(haroBacklogArray[i],'haroBL');
    }
    for (let i=0;i<pokeBacklogArray.length;i++) {
        insertLine(pokeBacklogArray[i],'pokeBL');
    }
    for (let i=0;i<shipBacklogArray.length;i++) {
        insertLine(shipBacklogArray[i],'shipBL');
    }
    for (let i=0;i<transBacklogArray.length;i++) {
        insertLine(transBacklogArray[i],'transBL');
    }
    for (let i=0;i<zoidBacklogArray.length;i++) {
        insertLine(zoidBacklogArray[i],'zoidBL');
    }

    //Post Out of Stock
    for (let i=0;i<outOfInventoryArray.length;i++) {
        insertLine(outOfInventoryArray[i][0],'OOS');
    }
    for (let i=0;i<pbUndeliveredArray.length;i++) {
        insertLine(pbUndeliveredArray[i],'OOSPB');
    }
    
    const finishNode = document.getElementById('FP').parentNode;
    const totalFinishedNode = document.createTextNode(postedCount); 
    finishNode.appendChild(totalFinishedNode); 
}

function arrayAverage(array) {
    let hours = 0;
    let count = 0;
    for (let i=0;i<array.length;i++) {
        if (array[i]>0) {
            hours = hours + array[i];
            count++;
        }
    }

    let averageHr = count / hours;
    return averageHr;
}

function calculateStats() {
    //average hours
    mgAve = projectAverage('MG',false);
    mgStrAve = projectAverage('MG',true);
    pgAve = projectAverage('PG',false);
    pgStrAve = projectAverage('PG',true);
    fmAve = projectAverage('FM',false);
    fmStrAve = projectAverage('FM',true);
    rgAve = projectAverage('RG',false);
    rgStrAve = projectAverage('RG',true);
    hgAve = projectAverage('HG',false);
    hgStrAve = projectAverage('HG',true);
    mgsdAve = projectAverage('MGSD',false);
    mgsdStrAve = projectAverage('MGSD',true);
    sdAve = projectAverage('SD',false);
    sdStrAve = projectAverage('SD',true);
    haroAve = projectAverage('Haro',false);
    haroStrAve = projectAverage('Haro',true);
    carAve = projectAverage('Car',false);
    carStrAve = projectAverage('Car',true);
    pokeAve = projectAverage('Pokemon',false);
    pokeStrAve = projectAverage('Pokemon',true);
    digiAve = projectAverage('Digimon',false);
    digiStrAve = projectAverage('Digimon',true);
    dispAve = projectAverage('Display',false);
    dispStrAve = projectAverage('Display',true);
    shipAve = projectAverage('Ship',false);
    shipStrAve = projectAverage('Ship',true);
    transAve = projectAverage('Transformer',false);
    transStrAve = projectAverage('Transformer',true);
    zoidAve = projectAverage('Zoid',false);
    zoidStrAve = projectAverage('Zoid',true);

    //weights
    pgWt = pgAve / mgAve;
    mgWt = 1;
    fmWt = fmAve / mgAve;
    rgWt = rgAve / mgAve;
    hgWt = hgAve / mgAve;
    mgsdWt = mgsdAve / mgAve;
    sdWt = sdAve / mgAve;
    haroWt = haroAve / mgAve;
    carWt = carAve / mgAve;
    pokeWt = pokeAve / mgAve;
    digiWt = digiAve / mgAve;
    dispWt = dispAve / mgAve;
    shipWt = shipAve / mgAve;
    transWt = transAve / mgAve;
    zoidWt = zoidAve / mgAve;

    paintedAverage = arrayAverage([mgAve,pgAve,fmAve,rgAve,hgAve,mgsdAve,sdAve,haroAve,carAve,pokeAve,digiAve,dispAve,shipAve,transAve,zoidAve]);
    straightAverage = arrayAverage([mgStrAve,pgStrAve,fmStrAve,rgStrAve,hgStrAve,mgsdStrAve,sdStrAve,haroStrAve,carStrAve,pokeStrAve,digiStrAve,dispStrAve,shipStrAve,transStrAve,zoidStrAve]);
    straightWeight = straightAverage / paintedAverage;

    //counts
    mgCount = projectCount('MG',false);
    mgStrCount = projectCount('MG',true);
    pgCount = projectCount('PG',false);
    pgStrCount = projectCount('PG',true);
    fmCount = projectCount('FM',false);
    fmStrCount = projectCount('FM',true);
    rgCount = projectCount('RG',false);
    rgStrCount = projectCount('RG',true);
    hgCount = projectCount('HG',false);
    hgStrCount = projectCount('HG',true);
    mgsdCount = projectCount('MGSD',false);
    mgsdStrCount = projectCount('MGSD',true);
    sdCount = projectCount('SD',false);
    sdStrCount = projectCount('SD',true);
    haroCount = projectCount('Haro',false);
    haroStrCount = projectCount('Haro',true);
    carCount = projectCount('Car',false);
    carStrCount = projectCount('Car',true);
    pokeCount = projectCount('Pokemon',false);
    pokeStrCount = projectCount('Pokemon',true);
    digiCount = projectCount('Digimon',false);
    digiStrCount = projectCount('Digimon',true);
    dispCount = projectCount('Display',false);
    dispStr = projectCount('Display',true);
    shipCount = projectCount('Ship',false);
    shipStrCount = projectCount('Ship',true);
    transCount = projectCount('Transformer',false);
    transStrCount = projectCount('Transformer',true);
    zoidCount = projectCount('Zoid',false);
    zoidStrCount = projectCount('Zoid',true);

    //PBandai Count
    mgCountPB = projectCountPB('MG');
    pgCountPB = projectCountPB('PG');
    fmCountPB = projectCountPB('FM');
    rgCountPB = projectCountPB('RG');
    hgCountPB = projectCountPB('HG');
    mgsdCountPB = projectCountPB('MGSD');
    sdCountPB = projectCountPB('SD');
    haroCountPB = projectCountPB('Haro');
    shipCountPB = projectCountPB('Ship');
    dispCountPB = projectCountPB('Display');

    //Remaining Count
    mgRemain = projectRemaining('MG');
    pgRemain = projectRemaining('PG');
    fmRemain = projectRemaining('FM');
    rgRemain = projectRemaining('RG');
    hgRemain = projectRemaining('HG');
    mgsdRemain = projectRemaining('MGSD');
    sdRemain = projectRemaining('SD');
    haroRemain = projectRemaining('HARO');
    carRemain = projectRemaining('Car');
    digiRemain = projectRemaining('Digimon');
    dispRemain = projectRemaining('Display');
    pokeRemain = projectRemaining('Pokemon');
    shipRemain = projectRemaining('Ship');
    transRemain = projectRemaining('Transformer');
    zoidRemain = projectRemaining('Zoid');

    //hours
    mgHours = projectHours('MG');
    pgHours = projectHours('PG');
    fmHours = projectHours('FM');
    rgHours = projectHours('RG');
    hgHours = projectHours('HG');
    mgsdHours = projectHours('MGSD');
    sdHours = projectHours('SD');
    haroHours = projectHours('Haro');
    carHours = projectHours('Car');
    pokeHours = projectHours('Pokemon');
    digiHours = projectHours('Digimon');
    dispHours = projectHours('Display');
    shipHours = projectHours('Ship');
    transHours = projectHours('Transformer');
    zoidHours = projectHours('Zoid');
}

function cleanupArrays(array,context) {
    if(array.length<1) {
        if (context==='fin') {
            array=['...Pending...'];
        }
        if (context==='out') {
            array=['.....Out of Stock.....'];
        }
    }
    return array;
}

function composeStatsArray () {
    let wt=0;
    let statData = [];

    for (let i=0;i<projects.length;i++) {
        if (projects[i][3]===false && (projects[i][7]=='C' || projects[i][7]=='D' || projects[i][7]=='E')) {
            if (projects[i][2]=='MG') {
                wt=1;
            } 
            else if (projects[i][2]=='FM') {
                wt=fmWt;
            } 
            else if (projects[i][2]=='RG') {
                wt=rgWt;
            } 
            else if (projects[i][2]=='HG') {
                wt=hgWt;
            } 
            else if (projects[i][2]=='MGSD') {
                wt=mgsdWt;
            } 
            else if (projects[i][2]=='SD') {
                wt=sdWt;
            } 
            else if (projects[i][2]=='Haro') {
                wt=haroWt;
            } 
            else if (projects[i][2]=='Car') {
                wt=carWt;
            } 
            else if (projects[i][2]=='Pokemon') {
                wt=pokeWt;
            } 
            else if (projects[i][2]=='Digimon') {
                wt=digiWt;
            } 
            else if (projects[i][2]=='Display') {
                wt=dispWt;
            } 
            else if (projects[i][2]=='Ship') {
                wt=shipWt;
            } 
            else if (projects[i][2]=='Transformer') {
                wt=transWt;
            } 
            else if (projects[i][2]=='Zoid') {
                wt=zoidWt;
            } 

            let weightedHours = projects[i][9]*wt;
            statData=[projects[i][0],projects[i][2],projects[i][9],wt,weightedHours,projects[i][7]];
            statsArray.push(statData);

            totalProjectCDEHours = totalProjectCDEHours + projects[i][9];
            totalProjectCDEWeights = totalProjectCDEWeights + weightedHours;
        }
    }

    for (let j=0;j<statsArray.length;j++) {
        statsArray[j].push(statsArray[j][2]/totalProjectCDEHours*100);
        statsArray[j].push(statsArray[j][4]/totalProjectCDEWeights*100);
    }

    statsArray.sort((a,b) => b[6] - a[6]);
}

function convertDate() {
    for (let i=0;i<projects.length;i++) {
        if (!projects[i][8]) {
            projects[i][8] = new Date('2099-12-25');
        } 
        else {
            projects[i][8] = new Date(projects[i][8]);
        }

        if (!projects[i][13]) {
            projects[i][13] = new Date('2099-12-25');
        } 
        else {
            projects[i][13] = new Date(projects[i][13]);
        }
    }
} 

function generateLists() {
    //Alphabetize everything
    projects.sort();
    
    for (let i=0;i<projects.length;i++) {
        if (projects[i][7] == 'A' && projects[i][4]) {
            pbUndeliveredArray.push(projects[i][0]);
        }
        else if (projects[i][7] == 'A') {
            outOfInventoryArray.push(projects[i]);
        }
        else if (projects[i][7] == 'B') {
            backlogArray.push(projects[i]);
        }
        else if (projects[i][7] == 'C') {
            inProgressArray.push(projects[i]);
        }
        else if (projects[i][7] == 'D') {
            constructedArray.push(projects[i]);
        }
        else if (projects[i][7] == 'E') {
            postedArray.push(projects[i]);
        }
    }
    outOfInventoryCount = outOfInventoryArray.length;
    backlogCount = backlogArray.length;
    inProgressCount = inProgressArray.length;
    constructedCount = constructedArray.length;
    postedCount = postedArray.length;
    inProgressArray = sortByDate(inProgressArray,'start');
    constructedArray = sortByDate(constructedArray,'start');
    postedArray = sortByDate(postedArray,'start');

    //Backlog by Grade
    for (let i=0;i<backlogArray.length;i++) {
        if (backlogArray[i][4]) {
            pbBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='PG') {
            pgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][3]) {
            sbBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='MG') {
            mgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='FM') {
            fmBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='RG') {
            rgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='HG') {
            hgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='MGSD') {
            mgsdBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='SD') {
            sdBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Car') {
            carBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Digimon') {
            digiBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Display') {
            dispBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Haro') {
            haroBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Pokemon') {
            pokeBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Ship') {
            shipBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Transformer') {
            transBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=='Zoid') {
            zoidBacklogArray.push(backlogArray[i][0]);
        }
    }

    //Finished by Grade
    for (let i=0;i<postedArray.length;i++) {
        if (postedArray[i][4]) {
            pbFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='PG') {
            pgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][3]) {
            sbFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='MG') {
            mgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='FM') {
            fmFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='RG') {
            rgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='HG') {
            hgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='MGSD') {
            mgsdFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='SD') {
            sdFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Car') {
            carFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Digimon') {
            digiFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Display') {
            dispFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Haro') {
            haroFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Pokemon') {
            pokeFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Ship') {
            shipFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Transformer') {
            transFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=='Zoid') {
            zoidFinishedArray.push(postedArray[i][0]);
        }
    }

    //Clean up in backlog lists
    pgBacklogArray = cleanupArrays(pgBacklogArray,'out');
    mgBacklogArray = cleanupArrays(mgBacklogArray,'out');
    fmBacklogArray = cleanupArrays(fmBacklogArray,'out');
    rgBacklogArray = cleanupArrays(rgBacklogArray,'out');
    hgBacklogArray = cleanupArrays(hgBacklogArray,'out');
    mgsdBacklogArray = cleanupArrays(mgsdBacklogArray,'out');
    sdBacklogArray = cleanupArrays(sdBacklogArray,'out');
    pbBacklogArray = cleanupArrays(pbBacklogArray,'out');
    sbBacklogArray = cleanupArrays(sbBacklogArray,'out');
    carBacklogArray = cleanupArrays(carBacklogArray,'out');
    digiBacklogArray = cleanupArrays(digiBacklogArray,'out');
    dispBacklogArray = cleanupArrays(dispBacklogArray,'out');
    haroBacklogArray = cleanupArrays(haroBacklogArray,'out');
    pokeBacklogArray = cleanupArrays(pokeBacklogArray,'out');
    shipBacklogArray = cleanupArrays(shipBacklogArray,'out');
    transBacklogArray = cleanupArrays(transBacklogArray,'out');
    zoidBacklogArray = cleanupArrays(zoidBacklogArray,'out');

    //Clean up in finish lists
    pgFinishedArray = cleanupArrays(pgFinishedArray,'fin');
    mgFinishedArray = cleanupArrays(mgFinishedArray,'fin');
    fmFinishedArray = cleanupArrays(fmFinishedArray,'fin');
    rgFinishedArray = cleanupArrays(rgFinishedArray,'fin');
    hgFinishedArray = cleanupArrays(hgFinishedArray,'fin');
    mgsdFinishedArray = cleanupArrays(mgsdFinishedArray,'fin');
    sdFinishedArray = cleanupArrays(sdFinishedArray,'fin');
    pbFinishedArray = cleanupArrays(pbFinishedArray,'fin');
    sbFinishedArray = cleanupArrays(sbFinishedArray,'fin');
    carFinishedArray = cleanupArrays(carFinishedArray,'fin');
    digiFinishedArray = cleanupArrays(digiFinishedArray,'fin');
    dispFinishedArray = cleanupArrays(dispFinishedArray,'fin');
    haroFinishedArray = cleanupArrays(haroFinishedArray,'fin');
    pokeFinishedArray = cleanupArrays(pokeFinishedArray,'fin');
    shipFinishedArray = cleanupArrays(shipFinishedArray,'fin');
    transFinishedArray = cleanupArrays(transFinishedArray,'fin');
    zoidFinishedArray = cleanupArrays(zoidFinishedArray,'fin');

    //Clean UP PB Undelivered
    pbUndeliveredArray = cleanupArrays(pbUndeliveredArray,'fin');
}

function generateRandomBuild() {
    const nextBuildNode = document.getElementById('nextBuildID');
    const nextGradeNode = document.getElementById('nextGradeID');
    const nextBacklogNode = document.getElementById('backlogID');
    nextBuildNode.removeChild(nextBuildNode.firstChild);
    nextGradeNode.removeChild(nextGradeNode.firstChild);
    nextBacklogNode.removeChild(nextBacklogNode.firstChild);

    let randomNum = Math.floor(Math.random()*backlogArray.length);
    let randomSelection = backlogArray[randomNum];
    let selectedBuild = randomSelection[0];
    let selectedGrade = gradeEdifier(randomSelection);

    const buildNode = document.createTextNode(selectedBuild);
    const gradeNode = document.createTextNode(selectedGrade);
    const backlogNode = document.createTextNode(backlogCount);
    nextBuildNode.appendChild(buildNode);
    nextGradeNode.appendChild(gradeNode);
    nextBacklogNode.appendChild(backlogNode);

}

function gradeEdifier(array) {
    let grade = '';
    
    if (array[2] == 'PG') {
        grade = 'Perfect Grade';
    }
    else if (array[2] == 'MG') {
        grade = 'Master Grade';
    }
    else if (array[2] == 'FM') {
        grade = 'Full Mechanics';
    }
    else if (array[2] == 'RG') {
        grade = 'Real Grade';
    }
    else if (array[2] == 'HG') {
        grade = 'High Grade';
    }
    else if (array[2] == 'SD') {
        grade = 'Super Deformed';
    }
    else if (array[3]) {
        grade = 'Straight Build';
    }
    else if (array[4]) {
        grade = 'P-Bandai';
    }
    else if (array[5]) {
        grade = 'MGEX';
    }
    else {
        grade = array[2];
    }

    return grade;
}

function initialize() {
    convertDate();
    generateLists();
    addTable();
    addInProgress();
    addConstructed();
    
}

function insertLine (text,ID) {
    const listNode = document.getElementById(ID);
    const lineItemNode = document.createElement('li');
    const textNode = document.createTextNode(text);
    listNode.appendChild(lineItemNode);
    lineItemNode.appendChild(textNode);
}

function populateBuildsPage() {
    convertDate();
    generateLists();
    postedArray = sortByDate(postedArray,'post');

    let buildColumnsNode = document.getElementById('buildColumns');
    for (let i=0;i<postedArray.length;i++) {
        if(postedArray[i][22])
        {
            let divNode = document.createElement('div');
            let divClass = document.createAttribute('class');
            divClass.value = 'col-6 col-sm-6 col-md-4 col-xl-3 mx-0 text-center';
            divNode.setAttributeNode(divClass);

            let aNode = document.createElement('a');
            let hrefNode = document.createAttribute('href');
            hrefNode.value = postedArray[i][11];
            aNode.setAttributeNode(hrefNode);
            let aClass = document.createAttribute('class');
            aClass.value = 'mx-0';
            aNode.setAttributeNode(aClass);

            divNode.appendChild(aNode);

            let profilePhotoNode = document.createElement('img');
            let imgSRC = document.createAttribute('src');
            imgSRC.value = postedArray[i][16][0];
            profilePhotoNode.setAttributeNode(imgSRC);
            let imgClass = document.createAttribute('class');
            imgClass.value = 'img-fluid img-thumbnail';
            profilePhotoNode.setAttributeNode(imgClass);

            aNode.appendChild(profilePhotoNode);

            let pNode = document.createElement('h4');
            let pClass = document.createAttribute('class');
            pClass.value = 'font-weight-bold text-danger ml-5';
            pNode.setAttributeNode(pClass);
            let pTextNode = document.createTextNode(postedArray[i][0]);
            pNode.appendChild(pTextNode);

            aNode.appendChild(pNode);

            buildColumnsNode.appendChild(divNode);
        }
    }
}

function populateStat(stat,id,cap) {
    const locationNode = document.getElementById(id);
    const statNode = document.createTextNode(stat.toFixed(cap));
    locationNode.appendChild(statNode);
}

function poststats() {
    //Load stats
    calculateStats();
    composeStatsArray();

    //Populate 
    populateStat(pgCount,'pgPrj',0);
    populateStat(pgStrCount,'pgStrPrj',0);
    populateStat(pgCountPB,'pgPB',0);
    populateStat(pgRemain,'pgRM',0);
    populateStat(pgHours,'pgHR',2);
    populateStat(pgAve,'pgAHR',2);
    populateStat(pgStrAve,'pgSHR',2);
    populateStat(pgWt,'pgWT',2);

    populateStat(mgCount,'mgPrj',0);
    populateStat(mgStrCount,'mgStrPrj',0);
    populateStat(mgCountPB,'mgPB',0);
    populateStat(mgRemain,'mgRM',0);
    populateStat(mgHours,'mgHR',2);
    populateStat(mgAve,'mgAHR',2);
    populateStat(mgStrAve,'mgSHR',2);
    populateStat(mgWt,'mgWT',2);

    populateStat(fmCount,'fmPrj',0);
    populateStat(fmStrCount,'fmStrPrj',0);
    populateStat(fmCountPB,'fmPB',0);
    populateStat(fmRemain,'fmRM',0);
    populateStat(fmHours,'fmHR',2);
    populateStat(fmAve,'fmAHR',2);
    populateStat(fmStrAve,'fmSHR',2);
    populateStat(fmWt,'fmWT',2);

    populateStat(rgCount,'rgPrj',0);
    populateStat(rgStrCount,'rgStrPrj',0);
    populateStat(rgCountPB,'rgPB',0);
    populateStat(rgRemain,'rgRM',0);
    populateStat(rgHours,'rgHR',2);
    populateStat(rgAve,'rgAHR',2);
    populateStat(rgStrAve,'rgSHR',2);
    populateStat(rgWt,'rgWT',2);

    populateStat(hgCount,'hgPrj',0);
    populateStat(hgStrCount,'hgStrPrj',0);
    populateStat(hgCountPB,'hgPB',0);
    populateStat(hgRemain,'hgRM',0);
    populateStat(hgHours,'hgHR',2);
    populateStat(hgAve,'hgAHR',2);
    populateStat(hgStrAve,'hgSHR',2);
    populateStat(hgWt,'hgWT',2);

    populateStat(mgsdCount,'mgsdPrj',0);
    populateStat(mgsdStrCount,'mgsdStrPrj',0);
    populateStat(mgsdCountPB,'mgsdPB',0);
    populateStat(mgsdRemain,'mgsdRM',0);
    populateStat(mgsdHours,'mgsdHR',2);
    populateStat(mgsdAve,'mgsdAHR',2);
    populateStat(mgsdStrAve,'mgsdSHR',2);
    populateStat(mgsdWt,'mgsdWT',2);

    populateStat(sdCount,'sdPrj',0);
    populateStat(sdStrCount,'sdStrPrj',0);
    populateStat(sdCountPB,'sdPB',0);
    populateStat(sdRemain,'sdRM',0);
    populateStat(sdHours,'sdHR',2);
    populateStat(sdAve,'sdAHR',2);
    populateStat(sdStrAve,'sdSHR',2);
    populateStat(sdWt,'sdWT',2);

    populateStat(shipCount,'shipPrj',0);
    populateStat(shipStrCount,'shipStrPrj',0);
    populateStat(shipCountPB,'shipPB',0);
    populateStat(shipRemain,'shipRM',0);
    populateStat(shipHours,'shipHR',2);
    populateStat(shipAve,'shipAHR',2);
    populateStat(shipStrAve,'shipSHR',2);
    populateStat(shipWt,'shipWT',2);

    populateStat(haroCount,'haroPrj',0);
    populateStat(haroStrCount,'haroStrPrj',0);
    populateStat(haroCountPB,'haroPB',0);
    populateStat(haroRemain,'haroRM',0);
    populateStat(haroHours,'haroHR',2);
    populateStat(haroAve,'haroAHR',2);
    populateStat(haroStrAve,'haroSHR',2);
    populateStat(haroWt,'haroWT',2);

    populateStat(dispCount,'dispPrj',0);
    populateStat(dispStrCount,'dispStrPrj',0);
    populateStat(dispCountPB,'dispPB',0);
    populateStat(dispRemain,'dispRM',0);
    populateStat(dispHours,'dispHR',2);
    populateStat(dispAve,'dispAHR',2);
    populateStat(dispStrAve,'dispSHR',2);
    populateStat(dispWt,'dispWT',2);

    populateStat(pokeCount,'pokePrj',0);
    populateStat(pokeStrCount,'pokeStrPrj',0);
    populateStat(pokeRemain,'pokeRM',0);
    populateStat(pokeHours,'pokeHR',2);
    populateStat(pokeAve,'pokeAHR',2);
    populateStat(pokeStrAve,'pokeSHR',2);
    populateStat(pokeWt,'pokeWT',2);

    populateStat(digiCount,'digiPrj',0);
    populateStat(digiStrCount,'digiStrPrj',0);
    populateStat(digiRemain,'digiRM',0);
    populateStat(digiHours,'digiHR',2);
    populateStat(digiAve,'digiAHR',2);
    populateStat(digiStrAve,'digiSHR',2);
    populateStat(digiWt,'digiWT',2);

    populateStat(carCount,'carPrj',0);
    populateStat(carStrCount,'carStrPrj',0);
    populateStat(carRemain,'carRM',0);
    populateStat(carHours,'carHR',2);
    populateStat(carAve,'carAHR',2);
    populateStat(carStrAve,'carSHR',2);
    populateStat(carWt,'carWT',2);

    populateStat(transCount,'transPrj',0);
    populateStat(transCount,'transStrPrj',0);
    populateStat(transRemain,'transRM',0);
    populateStat(transHours,'transHR',2);
    populateStat(transAve,'transAHR',2);
    populateStat(transStrAve,'transSHR',2);
    populateStat(transWt,'transWT',2);

    populateStat(zoidCount,'zoidPrj',0);
    populateStat(zoidCount,'zoidStrPrj',0);
    populateStat(zoidRemain,'zoidRM',0);
    populateStat(zoidHours,'zoidHR',2);
    populateStat(zoidAve,'zoidAHR',2);
    populateStat(zoidStrAve,'zoidSHR',2);
    populateStat(zoidWt,'zoidWT',2);

    populateStat(paintedAverage,'paintAve',2);
    populateStat(straightAverage,'straightAve',2);
    populateStat(straightWeight,'straightWeight',2);
}

function projectAverage(grade,straight) {
    let hour = 0;
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if (projects[i][2]==grade && projects[i][3]===straight && (projects[i][7]=='C' || projects[i][7]=='D' || projects[i][7]=='E')) {
            hour = hour + projects[i][9];
            count = count + projects[i][1][0];
        }
    }

    let averageHr = hour / count;
    return averageHr;
}

function projectCount(grade,straight) {
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if (projects[i][2] == grade && projects[i][3] === straight && (projects[i][7] === 'C' || projects[i][7] === 'D' || projects[i][7] === 'E')) {
            count++;
        }
    }

    return count;
}

function projectCountPB(grade) {
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if (projects[i][2] == grade && projects[i][4] && (projects[i][7] == 'C' || projects[i][7] == 'D' || projects[i][7] == 'E')) {
            count++;
        }
    }

    return count;
}

function projectHours(grade) {
    let hours = 0;

    for (let i=0;i<projects.length;i++) {
        if ((projects[i][7]=='C' || projects[i][7]=='D' || projects[i][7]=='E') && projects[i][2]==grade) {
            hours = hours + projects[i][9];
        }
    }

    return hours;
}

function projectRemaining(grade) {
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if ((projects[i][7]=='A' || projects[i][7]=='B') && projects[i][2]==grade) {
            count++;
        }
    }

    return count;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sortByDate(array,sort) {
    if (sort == 'post')
    {
        array.sort((a,b) => a[13] - b[13]);
    }
    else {
        array.sort((a,b) => a[8] - b[8]);
    }

    return array;
}

function stageCount(array,stage) {
    let count = 0;
    for (let i=0;i<array.length;i++) {
        if (array[i][7]===stage) {
            count++;
        }
    }
    return count;
}

function suggestNextPost () {
    const suggestPostNode = document.getElementById('toPost');
    removeAllChildNodes(suggestPostNode);
    
    let decisionNumber = Math.floor(Math.random()*constructedCount)
    let tempArray = constructedArray[decisionNumber];
    const suggestTextNode = document.createTextNode(tempArray[0]);
    suggestPostNode.appendChild(suggestTextNode);
}

//Project Functions
function buildProjectPage(string) {
    for (let i=0;i<projects.length;i++) {
        if (projects[i][0] === string) {
            projectArray = projects[i];
            break;
        }
    }
    modelArray = projectArray[14];

    generateModalFrame();
    for (let i=0;i<projectArray[15].length;i++) {
        insertPhotoColumn(projectArray[15][i],'photoGallery');
    }
    for (let i=0;i<projectArray[15].length;i++) {
        photoModalPopup(i);
    }  

    popNode(projectArray[0]+' \u269C','title');
    popNode(projectArray[0],'jumboNode');
    popNode(projectArray[0],'breadcrumbNode');

    if (modelArray[1] === 1) {
        popNode('Gundam ','projectTitle');
        popNode('Gundam ','projectTitleMb');
    }
    if (modelArray[1] === 2 || modelArray[1] === 3) {
        popNode(modelArray[27]+' ','projectTitle');
        popNode(modelArray[27]+' ','projectTitleMb');
    }
    popNode(projectArray[0],'projectTitle');
    popNode(projectArray[0],'projectTitleMb');

    popNode(modelArray[3],'modelFullName');
    popNode(projectArray[0],'projectName');
    popNode(modelArray[3],'modelName');

    if (projectArray[1][0]>1) {
        unhide('.projectOtherModelsHD');

        let projectOtherModelsN = document.getElementById('projectOtherModels');
        let textGrade = projectArray[2];
        for (let i=1;i<projectArray[1].length;i++) {
            let projectOtherModelsLi = document.createElement('li');
            let projectOtherModelsLiCl = document.createAttribute('class');
            projectOtherModelsLiCl.value = 'font-weight-normal';
            projectOtherModelsLi.setAttributeNode(projectOtherModelsLiCl);
            let projectOtherModelsT = document.createTextNode(textGrade+' '+projectArray[1][i]);
            projectOtherModelsLi.appendChild(projectOtherModelsT);
            projectOtherModelsN.appendChild(projectOtherModelsLi);
        }
    }

    let startStamp = new Date(projectArray[8]);
    let startMonth = convertMonth(startStamp.getMonth());
    let startYear = startStamp.getFullYear();
    
    let postStamp = new Date(projectArray[13]);
    let postMonth = convertMonth(postStamp.getMonth());
    let postDay = postStamp.getDate();
    let postYear = postStamp.getFullYear();

    if (projectArray[8]) {
        unhide('.projectStartDateHD');
        popNode(startMonth+' '+startYear,'projectStartDate');
    }

    if (projectArray[13]) {
        unhide('.projectPostDateHD');
        popNode(postMonth+' '+postDay+' '+postYear,'projectPostDate');
    }

    if (projectArray[9]) {
        unhide('.projectHoursHD');
        popNode(projectArray[9]+' hrs','projectHours');
    }

    let ledQ = 'No';
    if (projectArray[10]) {
        ledQ = 'Yes';
    }
    popNode(ledQ,'projectLED');

    insertPhoto(projectArray[16],'projectProfilePhoto','../../',325);

    if (projectArray[17]) {
        unhide('.projectDescriptionHD');
        popNode(projectArray[17],'projectDescription');
    }

    if (projectArray[12]) {
        unhide('.projectPaintsHD');
        createList(projectArray[12],'projectPaints');
    }

    if (projectArray[18]) {
        unhide('.projectCurrentOwnerHD');
        popNode(projectArray[18],'projectCurrentOwner');
    }

    if (projectArray[21]) {
        unhide('.projectAvailableHD');
    }

    if (projectArray[20]) {
        unhide('.projectAffProjectsHD');

        let affilatesArray = [];
        for (let i=0;i<projectArray[20].length;i++) {
            for (let j=0;j<projects.length;j++) {
                if (projectArray[20][i] === projects[j][0] && projects[j][22]===true) {
                    affilatesArray.push(projects[j]);
                }
            }
        }

        projectLinks(affilatesArray.sort(),'projectAffProjects');
    }

    let otherArray = [];
    for (let i=0;i<projects.length;i++) {
        if ((projectArray[14] === projects[i][14]) && (!projectArray[0] === projects[i][0]) && projects[i][22]===true) {
            otherArray.push(projects[i])
        }
    }
    if (otherArray.length>0) {
        unhide('.modelOtherSameModelHD');

        projectLinks(otherArray.sort(),'modelOtherSameModel');
    }

    if (projectArray[19]) {
        unhide('.projectOutsideLinksHD');

        let destinationNode = document.getElementById('projectOutsideLinks')
        for (let i=0;i<projectArray[19].length;i++) {
            let liNode = document.createElement('li');
            let aNode = document.createElement('a');
            let aHref = document.createAttribute('href');
            let aTarget = document.createAttribute('target');
            aTarget.value = '_blank';
            aHref.value = projectArray[19][i][1];
            aNode.setAttributeNode(aHref);
            aNode.setAttributeNode(aTarget);
            let aTextNode = document.createTextNode(projectArray[19][i][0]);
            aNode.appendChild(aTextNode);
            liNode.appendChild(aNode);
            destinationNode.appendChild(liNode);
        }
    }

    if (modelArray[23]) {
        buildSDWHero();
    }
    else if (modelArray[1] === 1) {
        buildGundam();
    } 
    else if (modelArray[1] === 2) {
        buildShipGundam();
    }
    else if (modelArray[1] === 3) {
        buildShipOther();
    }
    else if (modelArray[1] === 4) {
        buildCarAuto();
    }
    else if (modelArray[1] === 5) {
        buildDisplay();
    }
    else if (modelArray[1] === 6) {
        buildDigimon();
    }
    else if (modelArray[1] === 7) {
        buildPokemon();
    }
    else if (modelArray[1] === 8) {
        buildTransformer();
    }
    else if (modelArray[1] === 9) {
        buildZoid();
    } 
    else if (modelArray[1] === 10) {
        buildHaro();
    }
}

function buildGundam() {
    unhide('.GundamPage');
    insertPhoto(modelArray[26],'gModelPhoto','../../',300);

    if (projectArray[4]) {
        unhide('.projectPBandaiHD');

        let projectPBandaiN = document.getElementById('projectPBandai');
        let text = 'Build';
        if (projectArray[3]) {
            text = 'Straight Build';
        }
        popNode(text,'projectPBandai');
    }

    if (projectArray[2]) {
        unhide('.projectGradeHD');

        let projectGradeN = document.getElementById('projectGrade');
        let projectGradeT = document.createTextNode(gradeEdifier(projectArray));
        if (projectArray[5]) {
            let projectGradeSpan = document.createElement('span');
            let projectGradeSpanCl = document.createAttribute('class');
            projectGradeSpanCl.value = 'font-weight-bold text-danger ';
            projectGradeSpan.setAttributeNode(projectGradeSpanCl);
            projectGradeT = document.createTextNode('Master Grade Extreme (MGEX)');
            projectGradeSpan.appendChild(projectGradeT);
            projectGradeN.appendChild(projectGradeSpan);
        }
        else {
            projectGradeN.appendChild(projectGradeT);
        }
    }

    if (modelArray[2]) {
        unhide('.gShortNameHD');
        popNode(modelArray[2],'gShortName');
    }

    if (modelArray[4]) {
        unhide('.gSerialHD');
        popNode(modelArray[4],'gSerial');
    }

    if (modelArray[6]) {
        unhide('.gEWHD');
    }

    if (modelArray[25]) {
        unhide('.gMobileArmorHD');
    }

    if (modelArray[24]) {
        unhide('.gAltNameHD');
        popNode(modelArray[24],'gAltName');
    }

    if (modelArray[11]) {
        unhide('.gPilotHD');
        popNode(modelArray[11],'gPilot');
    }

    if (modelArray[12]) {
        unhide('.gPilot2HD');
        popNode(modelArray[12][0],'gPilot2');

        if (modelArray[12].length>1) {
            for (let i=1;i<modelArray[12].length;i++) {
                popNode(', '+modelArray[12][i],'gPilot2');
            }
        }
    }

    if (modelArray[5]) {
        unhide('.gSeriesHD');
        popNode(modelArray[5],'gSeries');
    }

    if (modelArray[9]) {
        unhide('.gEraHD');
        popNode(modelArray[9],'gEra');
    }

    if (modelArray[10]) {
        unhide('.gCreatedHD');
        popNode(modelArray[10][1],'gCreated');
        
        let fYear = modelArray[10][0];
        let lYear = modelArray[10][2];
        let timespan = '';
        if (fYear===lYear) {
            timespan = 1;
        } else if (lYear != 'Present') {
            timespan = lYear-fYear;
        }

        popNode(fYear+'-'+lYear,'gTimeline');
        if (lYear != 'Present') {
            popNode('; '+timespan+' year(s)','gTimeline');
        }
    }

    if (modelArray[13]) {
        unhide('.gManufacturerHD');
        popNode(modelArray[13],'gManufacturer');
    }

    if (modelArray[14]) {
        unhide('.gAffiliationHD');
        createList(modelArray[14],'gAffiliation');
    }

    if (modelArray[7]) {
        unhide('.gFromHD');
        popNode(modelArray[7],'gFrom');
    }

    if (modelArray[8]) {
        unhide('.gToHD');
        popNode(modelArray[8],'gTo');
    }

    if (modelArray[15]) {
        unhide('.gHeightHD');
        popNode(modelArray[15][1],'gHeight');
    }

    if (modelArray[16]) {
        unhide('.gWeightHD');
        popNode(modelArray[16][1],'gWeight');
    }

    if (modelArray[17]) {
        unhide('.gMaterialHD');
        popNode(modelArray[17],'gMaterial');
    }

    if (modelArray[22]) {
        unhide('.gDesignedHD');
        popNode(modelArray[22],'gDesigned');
    }

    if (modelArray[18]) {
        unhide('.gPowerHD');
        popNode(modelArray[18],'gPower');
    }

    if (modelArray[21]) {
        unhide('.gSystemsHD');
        createList(modelArray[21],'gSystems');
    }

    if (modelArray[19]) {
        unhide('.gArmamentsHD');
        createList(modelArray[19],'gArmaments');
    }

    if (modelArray[20]) {
        unhide('.gEquipmentHD');
        createList(modelArray[20],'gEquipment');
    }
}

function buildShipGundam() {
    unhide('.GundamShipPage');
    insertPhoto(modelArray[26],'gsModelPhoto','../../',450);

    if (modelArray[2]) {
        unhide('.gsShortNameHD');
        popNode(modelArray[2],'gsShortName');
    }

    if (modelArray[24]) {
        unhide('.gsAltNameHD');
        popNode(modelArray[24],'gsAltName');
    }

    if (modelArray[4]) {
        unhide('.gsSerialHD');
        popNode(modelArray[4],'gsSerial');
    }

    if (modelArray[11]) {
        unhide('.gsCaptainHD');
        popNode(modelArray[11],'gsCaptain');
    }

    if (modelArray[12]) {
        unhide('.gsCaptain2HD');
        popNode(modelArray[12],'gsCaptain2');

        if (modelArray[12].length>1) {
            for (let i=1;i<modelArray[12].length;i++) {
                popNode(', '+modelArray[12][i],'gsCaptain2');
            }
        }
    }

    if (modelArray[5]) {
        unhide('.gsSeriesHD');
        popNode(modelArray[5],'gsSeries');
    }

    if (modelArray[9]) {
        unhide('.gsEraHD');
        popNode(modelArray[9],'gsEra');
    }

    if (modelArray[10]) {
        unhide('.gsCreatedHD');
        popNode(modelArray[10][1],'gsCreated');
        
        let fYear = modelArray[10][0];
        let lYear = modelArray[10][2];
        let timespan = '';
        if (fYear===lYear) {
            timespan = 1;
        } else if (lYear != 'Present') {
            timespan = lYear-fYear;
        }

        popNode(fYear+'-'+lYear,'gsTimeline');

        if (lYear != 'Present') {
            popNode('; '+timespan+' year(s)','gsTimeline');
        }
    }

    if (modelArray[15]) {
        unhide('.gsLengthHD');
        popNode(modelArray[15][1],'gsLength');
    }

    if (modelArray[13]) {
        unhide('.gsManufacturerHD');
        popNode(modelArray[13],'gsManufacturer');
    }

    if (modelArray[14]) {
        unhide('.gsAffiliationHD');
        createList(modelArray[14],'gsAffiliation');
    }

    if (modelArray[19]) {
        unhide('.gsArmamentsHD');
        createList(modelArray[19],'gsArmaments');
    }

    if (modelArray[20]) {
        unhide('.gsEquipmentHD');
        createList(modelArray[20],'gsEquipment');
    }

    if (modelArray[21]) {
        unhide('.gsOnboardHD');
        createList(modelArray[21],'gsOnboard');
        const gsOnboardHD = document.querySelector('.gsOnboardHD');
        gsOnboardHD.style.display = 'block';
    }
}

function buildShipOther() {
    unhide('.OtherShipPage');
    insertPhoto(modelArray[26],'osModelPhoto','../../',450);

    if (modelArray[2]) {
        unhide('.osShortNameHD');
        popNode(modelArray[2],'osShortName');
    }

    if (modelArray[24]) {
        unhide('.osAltNameHD');
        popNode(modelArray[24],'osAltName'); 
    }

    if (modelArray[4]) {
        unhide('.osSerialHD');
        popNode(modelArray[4],'osSerial'); 
    }

    if (modelArray[11]) {
        unhide('.osCaptainHD');
        popNode(modelArray[11],'osCaptain'); 
    }

    if (modelArray[12]) {
        unhide('.osCaptain2HD');
        popNode(modelArray[12][0],'osCaptain2'); 

        if (modelArray[12].length>1) {
            for (let i=1;i<modelArray[12].length;i++) {
                popNode(modelArray[12][i],'osCaptain2'); 
            }
        }
    }

    if (modelArray[5]) {
        unhide('.osFranchiseHD');
        popNode(modelArray[5],'osFranchise'); 
    }

    if (modelArray[9]) {
        unhide('.osEraHD');
        popNode(modelArray[9],'osEra'); 
    }

    if (modelArray[10]) {
        unhide('.osCreatedHD');
        popNode(modelArray[10][1],'osCreated'); 
        
        let fYear = modelArray[10][0];
        let lYear = modelArray[10][2];
        let timespan = '';
        if (fYear===lYear) {
            timespan = 1;
        } else if (lYear != 'Present') {
            timespan = lYear-fYear;
        }
        popNode(fYear+'-'+lYear,'osTimeline');
        if (lYear != 'Present') {
            popNode('; '+timespan+' year(s)','osTimeline');
        }
    }

    if (modelArray[15]) {
        unhide('.osHeightHD');
        popNode(modelArray[15][1],'osHeight'); 
    }

    if (modelArray[16]) {
        unhide('.osLengthHD');
        popNode(modelArray[16][1],'osLength'); 
    }

    if (modelArray[17]) {
        unhide('.osWidthHD');
        popNode(modelArray[17][1],'osWidth'); 
    }

    if (modelArray[13]) {
        unhide('.osManufacturerHD');
        popNode(modelArray[13],'osManufacturer'); 
    }

    if (modelArray[14]) {
        unhide('.osAffiliationHD');
        createList(modelArray[14],'osAffiliation'); 
    }

    if (modelArray[18]) {
        unhide('.osPropulsionHD');
        popNode(modelArray[18],'osPropulsion'); 
    }

    if (modelArray[19]) {
        unhide('.osArmamentsHD');
        createList(modelArray[19],'osArmaments'); 
    }

    if (modelArray[20]) {
        unhide('.osEquipmentHD');
        createList(modelArray[20],'osEquipment'); 
    }

    if (modelArray[21]) {
        unhide('.osDefensesHD');
        popNode(modelArray[21],'osDefenses'); 
    }

    if (modelArray[22]) {
        unhide('.osOnboardHD');
        createList(modelArray[22],'osOnboard'); 
    }
}

function buildCarAuto() {
    unhide('.AutomobilePage');
    insertPhoto(modelArray[26],'caModelPhoto','../../',450);

    popNode(modelArray[2],'caShortName');

    if (modelArray[24]) {
        unhide('.caNicknameHD');
        popNode(modelArray[24],'caNickname');
    }

    if (modelArray[4]) {
        unhide('.caManufacturerHD');
        popNode(modelArray[4],'caManufacturer');
    }

    if (modelArray[5]) {
        unhide('.caModelHD');
        popNode(modelArray[5],'caModel');
    }

    if (modelArray[6]) {
        unhide('.caYearHD');
        popNode(modelArray[6],'caYear');
    }

    if (modelArray[10]) {
        unhide('.caDesignerHD');
        popNode(modelArray[10],'caDesigner');
    }

    if (modelArray[9]) {
        unhide('.caProductionHD');
        popNode(modelArray[9],'caProduction');
    }
}

function buildDisplay() {
    unhide('.DisplayPage');
    insertPhoto(modelArray[26],'dpModelPhoto','../../',350);

    if (modelArray[2]) {
        unhide('.dpShortNameHD');
        popNode(modelArray[2],'dpShortName');
    }

    if (modelArray[4]) {
        unhide('.dpBrandHD');
        popNode(modelArray[4],'dpBrand');
    }

    if (modelArray[5]) {
        unhide('.dpSeriesHD');
        popNode(modelArray[5],'dpSeries');
    }
}

function buildDigimon() {
    unhide('.DigimonPage');
    insertPhoto(modelArray[26],'dgModelPhoto','../../',400);
    popNode(modelArray[2],'dgShortName');

    if (modelArray[4]) {
        unhide('.dgLevelHD');
        popNode(modelArray[4],'dgLevel');
    }
    if (modelArray[5]) {
        unhide('.dgFromHD');
        popNode(modelArray[5],'dgFrom');
    }
    if (modelArray[6]) {
        unhide('.dgToHD');
        createList(modelArray[6],'dgTo');
    }
    if (modelArray[7]) {
        unhide('.dgTypeHD');
        popNode(modelArray[7],'dgType');
    }
    if (modelArray[8]) {
        unhide('.dgAttributeHD');
        popNode(modelArray[8],'dgAttribute');
    }
    if (modelArray[9]) {
        unhide('.dgElementHD');
        popNode(modelArray[9],'dgElement');
    }
    if (modelArray[10]) {
        unhide('.dgSpeciesHD');
        popNode(modelArray[10],'dgSpecies');
    }
    if (modelArray[11]) {
        unhide('.dgSizeHD');
        popNode(modelArray[11][1],'dgSize');
    }
    if (modelArray[12]) {
        unhide('.dgPartnerHD');
        popNode(modelArray[12],'dgPartner');
    }
    if (modelArray[13]) {
        unhide('.dgMemoryHD');
        popNode(modelArray[13][1],'dgMemory');
    }
    if (modelArray[14]) {
        unhide('.dgFormHD');
        popNode(modelArray[14],'dgForm');
    }
}

function buildPokemon() {
    unhide('.PokemonPage');
    insertPhoto(modelArray[26],'pkModelPhoto','../../',300);
    popNode(modelArray[2],'pkShortName');

    if (modelArray[4]) {
        unhide('.pkDexNoHD');
        popNode(modelArray[4],'pkDexNo');
    }
    if (modelArray[5]) {
        unhide('.pkTypeHD');
        popNode(modelArray[5],'pkType');
    }
    if (modelArray[6]) {
        unhide('.pkStageHD');
        popNode(modelArray[6],'pkStage');
    }
    if (modelArray[7]) {
        unhide('.pkFromHD');
        let pkFromN = document.getElementById('pkFrom');
        let pkFromLi = document.createElement('li');
        let pkFromLiCl = document.createAttribute('class');
        pkFromLiCl.value = 'font-weight-normal';
        pkFromLi.setAttributeNode(pkFromLiCl);
        let pkFromT = document.createTextNode(modelArray[7][0]+', '+modelArray[7][1]);
        pkFromLi.appendChild(pkFromT);
        pkFromN.appendChild(pkFromLi);
    }
    if (modelArray[8]) {
        unhide('.pkToHD');
        let pkToN = document.getElementById('pkTo');
        for (let i=0;i<modelArray[8].length;i++) {
            let pkToLi = document.createElement('li');
            let pkToLiCl = document.createAttribute('class');
            pkToLiCl.value = 'font-weight-normal';
            pkToLi.setAttributeNode(pkToLiCl);
            let pkToT = document.createTextNode(modelArray[8][i][0]+', '+modelArray[8][i][1]);
            pkToLi.appendChild(pkToT);
            pkToN.appendChild(pkToLi);
        }
    }
    if (modelArray[9]) {
        unhide('.pkCategoryHD');
        popNode(modelArray[9],'pkCategory');
    }
    if (modelArray[10]) {
        unhide('.pkDexHD');
        popNode(modelArray[10],'pkDex');
    }
    if (modelArray[11]) {
        unhide('.pkHeightHD');
        popNode(modelArray[11],'pkHeight');
    }
    if (modelArray[12]) {
        unhide('.pkWeightHD');
        popNode(modelArray[12][1],'pkWeight');
    }
    if (modelArray[13]) {
        unhide('.pkGenerationHD');
        popNode(modelArray[13],'pkGeneration');
    }
    if (modelArray[14]) {
        unhide('.pkFirstGameHD');
        popNode(modelArray[14],'pkFirstGame');
    }
    if (modelArray[15]) {
        unhide('.pkFormHD');
        popNode(modelArray[15],'pkForm');
    }
    if (modelArray[24]) {
        unhide('.pkNicknameHD');
        popNode(modelArray[15],'pkNickname');
    }
}

function buildTransformer() {
    unhide('.TransformerPage');
    insertPhoto(modelArray[26],'tsModelPhoto','../../',300);

    if (modelArray[2]) {
        unhide('.tsEarthHD');
        popNode(modelArray[2],'tsEarth');
    }
    if (modelArray[4]) {
        unhide('.tsCanonHD');
        popNode(modelArray[4],'tsCanon');
    }
    if (modelArray[5]) {
        unhide('.tsVehicleHD');
        createList(modelArray[5],'tsVehicle');
    }
    if (modelArray[6]) {
        unhide('.tsFactionHD');
        popNode(modelArray[6],'tsFaction');
    }
    if (modelArray[7]) {
        unhide('.tsRankHD');
        popNode(modelArray[7],'tsRank');
    }
    if (modelArray[8]) {
        unhide('.tsCybertronHD');
        popNode(modelArray[8],'tsCybertron');
    }
    if (modelArray[24]) {
        unhide('.tsNicknameHD');
        popNode(modelArray[24],'tsNickname');
    }

}

function buildHaro() {
    unhide('.HaroPage');
    insertPhoto(modelArray[26],'hpModelPhoto','../../',300);

    if (modelArray[2]) {
        unhide('.hpShortNameHD');
        let hpShortNameN = document.getElementById('hpShortName');
        let hpShortNameStyle = document.createAttribute('style');
        hpShortNameStyle.value = 'color:'+modelArray[4];
        let lethpShortNameT = document.createTextNode(modelArray[2]);
        hpShortNameN.setAttributeNode(hpShortNameStyle);
        hpShortNameN.appendChild(lethpShortNameT);
    }
    if (modelArray[3]) {
        unhide('.hpKitHD');
        popNode(modelArray[3],'hpKit');
    }
    if (modelArray[4]) {
        unhide('.hpColorHD');
        popNode(modelArray[4],'hpColor');
    }
    if (modelArray[5]) {
        unhide('.hpEquipmentHD');
        createList(modelArray[5],'hpEquipment');
    }
    if (modelArray[6]) {
        unhide('.hpSpecialFeaturesHD');
        createList(modelArray[6],'hpSpecialFeatures');
    }
}

function convertMonth(n) {
    let month = 'Month';
    if (n==0) {
        month = 'January'
    }
    else  if (n==1) {
        month = 'February'
    }
    else  if (n==2) {
        month = 'March'
    }
    else  if (n==3) {
        month = 'April'
    }
    else  if (n==4) {
        month = 'May'
    }
    else  if (n==5) {
        month = 'June'
    }
    else  if (n==6) {
        month = 'July'
    }
    else  if (n==7) {
        month = 'August'
    }
    else  if (n==8) {
        month = 'September'
    }
    else  if (n==9) {
        month = 'Otober'
    }
    else  if (n==10) {
        month = 'November'
    }
    else {
        month = 'December'
    }
    return month;
}

function createList(array,ID,extraText,BorE) {
    let node = document.getElementById(ID);
    for (let i=0;i<array.length;i++) {
        let nodeLI = document.createElement('li');
        let liCLASS = document.createAttribute('class');
        liCLASS.value = 'font-weight-normal';
        nodeLI.setAttributeNode(liCLASS);
        let text = document.createTextNode(array[i]);
        if (extraText && BorE === 'before') {
            text = document.createTextNode(extraText+array[i]);
        }
        if (extraText && BorE === 'after') {
            text = document.createTextNode(array[i]+extraText);
        }
        nodeLI.appendChild(text);
        node.appendChild(nodeLI);
    }
}

function generateModalFrame() {
    let anchorNode = document.getElementById('modalAnchor');

    for (let i=0;i<projectArray[15].length;i++) {
        let count=i+1;

        let div1Node = document.createElement('div');
        let div1ID = document.createAttribute('id');
        div1ID.value = 'photoModal'+count;
        let div1Class = document.createAttribute('class');
        div1Class.value = 'modal';
        let div1Role = document.createAttribute('role');
        div1Role.value = ('dialog');
        div1Node.setAttributeNode(div1Class);
        div1Node.setAttributeNode(div1Role);
        div1Node.setAttributeNode(div1ID);

        let div2Node = document.createElement('div');
        let div2Class = document.createAttribute('class');
        div2Class.value = 'modal-dialog modal-lg';
        let div2Role = document.createAttribute('role');
        div2Role.value = ('document');
        div2Node.setAttributeNode(div2Class);
        div2Node.setAttributeNode(div2Role);
        div1Node.appendChild(div2Node);

        let div3Node = document.createElement('div');
        let div3Class = document.createAttribute('class');
        div3Class.value = 'modal-content';
        div3Node.setAttributeNode(div3Class);
        div2Node.appendChild(div3Node);

        let div4Node = document.createElement('div');
        let div4Class = document.createAttribute('class');
        div4Class.value = 'modal-header bg-secondary text-white';
        div4Node.setAttributeNode(div4Class);
        div3Node.appendChild(div4Node);

        let h3_1Node = document.createElement('h3');
        let h3_1Class = document.createAttribute('class');
        h3_1Class.value = 'modal-title';
        let h3_1ID = document.createAttribute('id');
        h3_1ID.value = 'caption'+count;
        h3_1Node.setAttributeNode(h3_1Class);
        h3_1Node.setAttributeNode(h3_1ID);
        div4Node.appendChild(h3_1Node);

        let button1Node = document.createElement('button');
        let button1Type = document.createAttribute('type');
        button1Type.value = 'button';
        let button1Class = document.createAttribute('class');
        button1Class.value = 'close';
        let button1DataDismiss = document.createAttribute('data-dismiss');
        button1DataDismiss.value = 'modal';
        let button1ID = document.createAttribute('id');
        button1ID.value = 'close'+count;
        let button1Text = document.createTextNode('X');
        button1Node.setAttributeNode(button1Type);
        button1Node.setAttributeNode(button1Class);
        button1Node.setAttributeNode(button1DataDismiss);
        button1Node.setAttributeNode(button1ID);
        button1Node.appendChild(button1Text);
        div4Node.appendChild(button1Node);

        let div5Node = document.createElement('div');
        let div5Class = document.createAttribute('class');
        div5Class.value = 'modal-body';
        div5Node.setAttributeNode(div5Class);
        div3Node.appendChild(div5Node);

        let div6Node = document.createElement('div');
        let div6Class = document.createAttribute('class');
        div6Class.value = 'container-fluid';
        div6Node.setAttributeNode(div6Class);
        div5Node.appendChild(div6Node);

        let img1Node = document.createElement('img');
        let img1Class = document.createAttribute('class');
        img1Class.value = 'img-fluid';
        let img1ID = document.createAttribute('id');
        img1ID.value = 'modImg'+count;
        img1Node.setAttributeNode(img1Class);
        img1Node.setAttributeNode(img1ID);
        div6Node.appendChild(img1Node);

        anchorNode.appendChild(div1Node);
    }
}

function insertPhoto(array,id,dots,maxWidth) {
    let imgNode = document.createElement('img');
    let srcAttribute = document.createAttribute('src');
    srcAttribute.value = dots+array[0];
    let altAttribute = document.createAttribute('alt');
    altAttribute.value = array[1];
    let imgClassAttribute = document.createAttribute('class');
    imgClassAttribute.value = 'img-fluid img-thumbnail';
    let styleAttribute = document.createAttribute('style');
    let maxWidthText = 'width:100%;max-width:'+maxWidth+'px';
    styleAttribute.value = maxWidthText;
    imgNode.setAttributeNode(styleAttribute);
    imgNode.setAttributeNode(srcAttribute);
    imgNode.setAttributeNode(altAttribute);
    imgNode.setAttributeNode(imgClassAttribute);

    let locationNode = document.getElementById(id);
    locationNode.appendChild(imgNode);
}

function insertPhotoColumn(array,id) {
    let divColNode = document.createElement('div');
    let classColAttribute = document.createAttribute('class');
    classColAttribute.value = 'col-6 col-sm-6 col-md-4 col-xl-3 mx-0 mb-3 text-center';
    divColNode.setAttributeNode(classColAttribute);
    
    let imgNode = document.createElement('img');
    let srcAttribute = document.createAttribute('src');
    srcAttribute.value = array[0];
    let altAttribute = document.createAttribute('alt');
    altAttribute.value = array[1];
    let imgClassAttribute = document.createAttribute('class');
    imgClassAttribute.value = 'img-fluid modImage';
    let idAttribute = document.createAttribute('id');
    idAttribute.value = array[2];
    let styleAttribute = document.createAttribute('style');
    styleAttribute.value = 'width:100%;max-width:300px'
    imgNode.setAttributeNode(srcAttribute);
    imgNode.setAttributeNode(altAttribute);
    imgNode.setAttributeNode(imgClassAttribute);
    imgNode.setAttributeNode(idAttribute);
    imgNode.setAttributeNode(styleAttribute);

    divColNode.appendChild(imgNode);

    let locationNode = document.getElementById(id);
    locationNode.appendChild(divColNode);
}

function photoModalPopup(i) {
    count=i+1;

    let modal = document.getElementById('photoModal'+count);
    let image = document.getElementById('img'+count);
    let modalImage = document.getElementById('modImg'+count);
    let captionText = document.getElementById('caption'+count);
    image.onclick = function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    }
    let span = document.getElementById('close'+count);
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

function popNode(insert,ID) {
    let node = document.getElementById(ID);
    let text = document.createTextNode(insert);
    node.appendChild(text);
}

function projectLinks(prArray,ID) {
    let destinationNode = document.getElementById(ID);
    for (let i=0;i<prArray.length;i++) {
        let liNode = document.createElement('li');
        let aNode = document.createElement('a');
        let aSrc = document.createAttribute('href');
        aSrc.value = '../../'+prArray[i][11];
        aNode.setAttributeNode(aSrc);
        let aTextNode = document.createTextNode(prArray[i][0]);
        aNode.appendChild(aTextNode);
        liNode.appendChild(aNode);
        destinationNode.appendChild(liNode);
    }
}

function unhide(ID) {
    const section = document.querySelector(ID);
    section.style.display = 'block';
}