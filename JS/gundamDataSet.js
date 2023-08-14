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
    23. SDW Hero (list model based on)
    24. Alternate Name
    25. Mobile Armor: true/false
    26. original photo (array): ['file path','photo name']
    27. 

    // Ship (fictional): Gundam (2) //
    2. Short Name
    3. Full Name
    4. Serial Number
    5. Series
    6. Class
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
        ['XXXG-00W0 Wing Gundam Proto Zero'],
        ['XXXG-01H2 Gundam Heavarms Custom'],
        'After Colony',
        [195,'April 195 A.C.',195],
        'Trowa Barton',
        ['Heero Yuy'],
        'Barton Foundation',
        ['Colony Liberation Organization','G Team','Operation Meteor','Peacemillion'],
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
            'OS: Standard Gundam Operating System',
            'Self-Destruct System'
        ],
        'Hajime Katoki',
        false,
        'Gundam 03',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/heavyarmsew.jpeg','Gundam Heavyarms EW'],
        true
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
        'Gundanium Alloy Super Ceramic Composite',
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/spiegel_pvRFRZsKNqpmuxQ7DdZaoA.jpeg','Spiegel Gundam'],
        true
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/57belair.jpeg','Chevy Bel Air']
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/68beetle.jpeg','68 Volkswagen Beetle']
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/bumblebee.jpeg','Bumblebee']
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/southpark.jpg','The South Park Gang'],
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
        ['Large Thruster (x4)','Small Thruster (x6'],
        ['Main Cannon',
            'Twin Rail Gun',
            'Missile Launcher',
            'Small Beam Cannon',
            'Micro Missiles (x52)'],
        ['METEOR Unit 01','METEOR Unit 02'],
        ['ZGMF-X09A Justice Gundam',
            'ZGMF-X19A \u221e Justice Gundam',
            'ZGMF-X10A Freedom Gundam',
            'ZGMF-X20A Strike-Freedom Gundam',
            'ZGMF-X88S Gaia Gundam',
            'ZGMF-XX09T DOM Trooper'
        ],
        1,
        2,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal.jpeg','Warship Eternal'],
        'Warship',
        false,
        false,
        'Custom Support Space Ship'
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/andromedablack.jpeg','Andromeda Black Model'],
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/30minutecity.jpeg','30 Minute Mission City Display Kit'],
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wargreymon.jpeg','Wargreymon']
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/greninja.jpeg','Greninja']
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo.jpeg','Red Haro']
    ],
    [13,1,'Nu Gundam',
        'RX-93 \u03BD Gundam',
        'RX-93',
        'Mobile Suit Gundam: Char\'s Counterattack',
        false,
        ['RX-78-2 Gundam'],
        ['RX-93ff \u03BD Gundam','RX-0 Unicorn Gundam'],
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/nugundam.jpeg','Nu Gundam'],
        true
    ],
    [14,1,'Freedom Gundam',
        'ZGMF-X10A Freedom Gundam',
        'ZGMF-X10A',
        'Mobile Suit Gundam SEED',
        false,
        ['YMF-X000A Dreadnought Gundam'],
        ['ZGMF-X20A Strike-Freedom Gundam'],
        'Cosmic Era',
        [71,'May 71 C.E.',74],
        'Kira Yamato',
        false,
        'Integrated Design Bureau',
        ['Three Ships Alliance','Archangel Corps','Clyne Faction','Orb Union'],
        [18.03,'18.03 Meters'],
        [71.5,'71.5 Metric Tons'],
        false,
        'Ultracompact Nuclear Fission Reactor',
        [
            'MMI-GAU2 "Picus" 76mm CIWS (x2)',
            'M100 "Balaena" Plasma Beam Cannon (x2)',
            'MMI-M15 "Xiphias" Railgun (x2)'
        ],
        [
            'MA-M01 "Lacerta" Beam Saber (x2)',
            'MA-M20 "Lupus" High-energy Beam Rifle',
            'Laminated Anti-beam Shield',
            'METEOR Unit'
        ],
        [
            'OS: Generation Unsubdued Nuclear Drive Assault Module Complex',
            'Phase Shift Armor',
            'High Mobility Aerial Tactics (HiMAT) Mode',
            'Multi Lock-on System',
            'Full Burst Mode',
            'Neutron Jammer Canceller'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/freedom.jpeg','Freedom Gundam'],
        true
    ],
    [15,2,'Archangel',
        'LCAM-01XA Archangel',
        'LCAM-01XA',
        'Mobile Suit Gundam Seed',
        'Archangel Class',
        false,
        false,
        'Cosmic Era',
        [71,' January 71 C.E.','Present'],
        'Murrue Ramius',
        false,
        'Morgenroete Inc.',
        ['Earth Alliance','Three Ship Alliance','Archangel Corps','Terminal','Orb'],
        [420,'420 Meters'],
        false,
        false,
        ['Large Thruster (x6)','Small Thruster (x12'],
        ['"Gottfried Mk.71" 225cm Dual High-energy Beam Cannon (x2)','"Igelstellung" 75mm Automatic Multi-barrel CIWS (x16)','"Lohengrin" Positron Blaster Cannon (x2)','Surface-to-air Missile Launcher (x16)','Surface-to-ship Missile Launcher (x24)',
        '"Valiant Mk.8" 110cm Linear Cannon (x2)','Torpedo Launcher (X4)','Laminated Armor'],
        ['Ablative Gel','Anti-Beam Depth Charge','Plasma Booster'],
        ['FX-550 Skygrasper','GAT-X105 Strike Gundam','GAT-X103 Buster Gundam','MAW-01 Mistral','TS-MA2mod.00 Moebius Zero','ZGMF-X109A Justice Gundam','ZGMF-X10A Freedom Gundam','MBF-02 Strike Rouge','MVF-M11C Murasame','ORB-01 Akatsuki','ZGMF-X19A Infinite Justice Gundam','ZGMF-X20A Strike-Freedom Gundam'],
        2,
        false,
        'The Legged Ship',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel.jpeg','Assault Battleship Archangel'],
        'Battleship',
        ['Izumo Class'],
        false,
        'Limited Production Mobile Assault Battleship'
    ],
    [16,2,'Dominion',
        'LCAM-01XB Dominino',
        'LCAM-01XB',
        'Mobile Suit Gundam Seed',
        'Archangel Class',
        false,
        false,
        'Cosmic Era',
        [71,'71 C.E.',71],
        'Natarle Badgirue',
        false,
        'Earth Alliance',
        ['Earth Alliance','7th Space Fleet','Blue Cosmos'],
        [420,'420 Meters'],
        false,
        false,
        ['Large Thruster (x6)','Small Thruster (x12'],
        ['"Gottfried Mk.71" 225cm Dual High-energy Beam Cannon (x2)','"Igelstellung" 75mm Automatic Multi-barrel CIWS (x16)','"Lohengrin" Positron Blaster Cannon (x2)','Surface-to-air Missile Launcher (x16)','Surface-to-ship Missile Launcher (x24)',
        '"Valiant Mk.8" 110cm Linear Cannon (x2)','Laminated Armor'],
        ['Ablative Gel','Anti-Beam Depth Charge','Plasma Booster'],
        ['GAT-01 Strike Dagger','GAT-X131 Calamity Gundam','GAT-X252 Forbidden Gundam','Gat-X370 Raider Gundam'],
        2,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion.jpeg','Assault Battleship Dominion'],
        'Battleship',
        ['Izumo Class'],
        false,
        'Limited Production Mobile Assault Battleship'
    ],
    [17,1,'SD Sasuke Delta',
        'SD Sasuke Delta',
        false,
        'SDW Heroes',
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
        'MSN-001 Delta Gundam',
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/sasukedelta.jpeg','SD Sasuke Delta'],
        true
    ],
    [18,1,'Crossbone Gundam',
        'XM-X1 Crossbone Gundam X-1',
        'XM-X1',
        'Mobile Suit Crossbone Gundam',
        false,
        ['F90Y Gundam F90 Youngstar Type'],
        false,
        'Universal Century',
        [133,'0133 U.C.','Present'],
        'Kincada Nau',
        ['Tobia Arronax','Umon Samon'],
        'Strategic Naval Research Institute',
        ['Earth Federation','Crossbone Vanguard'],
        [15.9,'15.9 Meters'],
        [24.8,'24.8 Metric Tons'],
        'Gundarium Alloy Ceramic Composite',
        'Minovsky Ultracompact Fusion Reactor',
        [
            'Vulcan Gun (x2)',
            'Heat Radion Face Open'
        ],
        [
            'Core Fighter',
            'Anti-Beam Coating Cloak',
            'Beam Saber (x2)',
            'Heat Dagger (x2)',
            'Scissor Anchor (x2)',
            'Beam Shield / Brand Marker',
            'Dummy Launcher'

        ],
        [
            'Bio-Computer'
        ],
        'Hajime Katoki & Yuuichi Hasegawa',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/crossbonex1.jpeg','Crossbone Gundam X-1'],
        true
    ],
    [19,1,'Aegis Gundam',
        'GAT-X303 Aegis Gundam',
        'GAT-X303',
        'Mobile Suit Gundam SEED',
        false,
        false,
        ['GAT-333 Raider','YMF-X000A Dreadnought Gundam','ZGMF-600 GuAIZ','ZGMF-X11A Regenerate Gundam'],
        'Cosmis Era',
        [71,'January 0071 A.C.',71],
        'Athrun Zala',
        false,
        'Morgenroete Inc.',
        ['Zodiac Alliance of Freedom Treaty','Le Creuset Team'],
        [18.66,'18.86 Meters'],
        [79.6,'79.6 Metric Tons'],
        false,
        'Ultracompact Energy Battery',
        [
            '"Igelstellung" 75mm Multi-barrel CIWS (x2)',
            'Beam Saber (X4)',
            '"Scylla" 580mm Multi-phase Energy Cannon'
        ],
        [
            '60mm High Energy Beam Rifle',
            'Shield',
            'Lancher'
        ],
        [
            'OS: General Unilateral Neuro-Link Dispersive Autonomic Maneuver Synthesis System',
            'Phase Shift Armor'
        ],
        false,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/aegis.jpeg','Aegis Gundam'],
        true
    ],
    [20,1,'Banshee Norn',
        'RX-0[N] Unicorn Gundam 02 Banshee Norn',
        'RX-0[N]',
        'Mobile Suit Gundam Unicorn',
        false,
        ['RX-0 Unicorn Gundam 02 Banshee'],
        false,
        'Universal Century',
        [96,'0096 U.C.','Present'],
        'Riddhe Marcenas',
        false,
        'Anaheim Electronics',
        ['Vist Foundation'],
        [21.7,'21.7 Meters'],
        [48.8,'48.8 Metric Tons'],
        'Luna Titanum (Gundarium Alloy)',
        'Minovsky Ultracompact Fusion Reactor',
        [
            '60mm Vulcan Guns (x2)',
            'Beam Saber (x4)',
            'Beam Tonfa (x2)'
        ],
        [
            'Beam Magnum',
            'Revolving Launcher',
            'Beam Jutte',
            'BOP Missile',
            'MGaAp',
            'Micro Hide Bomb',
            'Armed Armor DE',
            'I-Field Generator',
            'Mega Cannon'
        ],
        [
            'NT-D (Anti-NewType) Operating System'
        ],
        'Hajime Katoki',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/bansheenorn.jpeg','Banshee Norn'],
        true
    ],
    [21,1,'00 Qan[T]',
        'GNT-0000 00 Qan[T]',
        'GNT-0000',
        'Mobile Suit Gundam 00 The Movie: Awakening of the Trailblazer',
        false,
        ['GN-0000+GNR-010 00 Raiser'],
        ['ELS Qan[T]'],
        'Anno Domini',
        [2314,'2314 A.D.','Present'],
        'Setsuna F. Seisei',
        false,
        'Celestial Being',
        ['Celestial Being'],
        [18.3,'18.3 Meters'],
        [63.5,'63.5 Metric Tons'],
        'E-Carbon',
        'Double GN Drives',
        [
            'GN Sword Bit A (x2)',
            'GN Sword Bit B (x2)',
            'GN Sword Bit C (x2)'
        ],
        [
            'GN Sword V'
        ],
        [
            'Veda-Linked Operating System',
            'Twin Drive System',
            'Bit Control System',
            'GN Field',
            'Miniature Veda Terminal',
            'Quantum System',
            'Quantum Teleportation System',
            'Trans-Am System'
        ],
        'Kanetake Ebikawa',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/qant.jpeg','Gundam QAN[T]'],
        true
    ],
    [22,1,'00 Gundam',
        'GN-0000 00 Gundam',
        'GN-0000',
        'Mobile Suit Gundam 00',
        false,
        ['GN-001 Gundam Exia'],
        ['GN-0000+GNR-010 00 Raiser','CB-0000G/C Reborns Gundam'],
        'Anno Domini',
        [2312,'2312 A.D.',2314],
        'Setsuna F. Seisei',
        ['Tieria Erde'],
        'Celestial Being',
        ['Celestial Being'],
        [18.3,'18.3 Meters'],
        [54.9,'54.9 Metric Tons'],
        'E-Carbon',
        'Double GN Drives',
        false,
        [
            'GN Beam Saver (x2)',
            'GN Shield (X2)',
            'GN Sword II (x2)',
            'GN Sword III',
            'Seven Swords Pack'
        ],
        [
            'Veda-Linked Operating System',
            'Twin Drive System',
            'GN Field',
            'Trans-Am System'
        ],
        'Kanetake Ebikawa',
        false,
        'Double O',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/doubleo.jpeg','00 Gundam'],
        true
    ],
    [23,1,'Dagger L',
        'GAT-02L2 Dagger L',
        'GAT-02L2',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['GAT-01A1 Dagger'],
        ['GAT-04 Windam'],
        'Cosmic Era',
        [71,'71 C.E.','Present'],
        'Earth Alliance Soldiers',
        false,
        'Earth Alliance',
        ['Earth Alliance','Atlantic Federation','OMNI Enforcer'],
        [18.4,'18.4 Meters'],
        [55.05,'55.05 Metric Tons'],
        false,
        'Ultracompact Energy Battery',
        [
            'M2M5 "Todesschrecken" 12.5mm Automatic CIWS (x4)',
        ],
        [
            'ES04B Beam Saber (x2)',
            'Mk315 "Stiletto" Rocket-Propelled Anti-Armor Penetrator (X2)',
            'Shield',
            'Mk39 Low-Recoil Cannon'
        ],
        [
            'Striker Pack System'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/daggerl.jpeg','Dagger L'],
        false
    ],
    [24,1,'Windam',
        'GAT-04 Windam',
        'GAT-04',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['GAT-02L2 Dagger L'],
        false,
        'Cosmic Era',
        [73,'October 73 C.E.','Present'],
        'Noa Roanoke',
        ['Earth Alliance Soldiers'],
        'Earth Alliance',
        ['Earth Alliance','Atlantic Federation','OMNI Enforcer'],
        [18.67,'18.67 Meters'],
        [58.2,'58.2 Metric Tons'],
        false,
        'Ultracompact Energy Battery',
        [
            'M2M5 "Todesschrecken" 12.5mm Automatic CIWS (x4)'
        ],
        [
            'ES04B Beam Saber (x2)',
            'Mk315 "Stiletto" Rocket-Propelled Anti-Armor Penetrator (x2)',
            'Shield',
            'Mk39 Low-Recoil Cannon',
            'Aile Strike Pack'
        ],
        [
            'Striker Pack System'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/windam.jpeg','Windam'],
        false
    ],
    [25,1,'Doppelhorn Dual Recoilless Cannon and Nuclear Multi-Launcher Pack',
        'AQM/E-M11 Doppelhorn Dual Recoilless Cannon and Nuclear Multi-Launcher Pack',
        false,
        'Mobile Suit Gundam SEED',
        false,
        false,
        false,
        'Cosmic Era',
        false,
        false,
        false,
        false,
        ['Earth Alliance'],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/daggerexp.jpeg','Dagger DoppleHorn Multi-Launcher Expansion Pack'],
        false
    ],
    [26,1,'Guel\'s Dilanza',
        'MD-0032G Guel\'s Dilanza',
        'MD-0032G',
        'Mobile Suit Gundam the Witch from Mercury',
        false, 
        ['MD-0021 Desultor','MD-0031 Dilanza'],
        ['MD-0064 Darilbalde'],
        'Ad Stella',
        [122,'122 A.S.',122],
        'Guel Jeturk',
        false,
        'Jeturk Heavy Machinery',
        ['Jeturk House'],
        [18.2,'18.2 Meters'],
        [89.4,'89.4 Metric Tons'],
        false,
        false,
        [
            'Beam Vulcan (x2)',
            'Spike Shield (X2)'
        ],
        [
            'Beam Rifle',
            'Beam Torch',
            'Beam Partizan'
        ],
        false,
        'Ippei Gyoubu',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gueldilanza.jpeg','Guel\' Dilanza'],
        false
    ],
    [27,1,'SD Sergeante Verde Buster',
        'SD Sergeante Verde Buster',
        false,
        'SDW Heroes',
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
        'GAT-X103AP Verde Buster Gundam',
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/sergeantverdebuster.jpeg','SD Sergeante Verde Buster'],
        false
    ],
    [28,1,'Phenex Gundam',
        'RX-0 Unicorn Gundam 03 Phenex',
        'RX-0[P]',
        'Mobile Suit Gundam UC: One of Seventy Two',
        false,
        ['RX-0 Unicorn Gundam','RX-0 Unicorn Gundam 02 Banshee'],
        ['CAMS-RX0 G-Phenex'],
        'Universal Era',
        [95,'December 3, 0095 U.C.','Present'],
        'Rita Bernal',
        ['Jona Bashta','Jolion Day'],
        'Earth Federation Forces',
        ['Earth Federation Forces'],
        [21.7,'21.7 Meters'],
        [52.4,'52.4 Metric Tons'],
        'Luna Titanium (Gundarium Alloy)',
        'Energy / Power Source',
        [
            '60mm Vulcan Gun (x2)',
            'Armed Armor DE (equipped with I-Field Generator and Mega Cannon) (x2)'
        ],
        [
            'Beam Saber (x4)',
            'Beam Magnum'
        ],
        [
            'NT-D (Anti-NewType) Operating System'
        ],
        'Hajime Katoki',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/phenex.jpeg','Phenex Gundam'],
        false
    ],
    [29,1,'Gundam Double X',
        'GX-9901-DX Gundam Double X',
        'GX-9901-DX',
        'After War Gundam X',
        false,
        ['GX-9900 Gundam X'],
        false,
        'After War',
        [15,'July 0015 A.W.',15],
        'Garrod Ran',
        false,
        'New United Nations Earth',
        ['New United Nations Earth','Vulture'],
        [17,'17 Meters'],           //Height
        [7.8,'7.8 Metric Tons'],        //Weight
        'Luna Titanium (Gundarium Alloy',
        false,
        [
            'Head Vulcan (x2)',
            'Breast Launcher (x4)',
            'Hyper Beam Sword (x2)',
            'Twin Satellite Cannon (X2)'
        ],
        [
            'Buster Rifle',
            'Defense Plate'
        ],
        [
            'Satellite Systems Mk-II',
            'Flash System'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/doublex.jpeg','Gundam Double X'],
        true
    ],
    [30,1,'Skygrasper',
        'FX-550 Skygrasper',
        'FX-550',
        'Mobile Suit Gundam SEED',
        false,
        ['F-7D Spearhead'],
        false,
        'Cosmic Era',
        [71,'February 16, 71 C.E.',74],
        'Earth Alliance Soldiers',
        ['Mu La Flaga Pilots','Cagalli Yula Athha','Tolle Koenig'],
        'Propulsion & Machinery Progress',
        ['Earth Alliance','Archangel Corps'],
        [16.7,'16.7 Meters'],           //Height
        [7.7,'7.7 Metric Tons'],        //Weight
        false,
        false,
        [
            '20mm Machine Gun (x4)',
            'Medium Caliber Cannon (x2)',
            'Beam Cannon',
            'Anti-Ship Missiles'
        ],
        [
            'AQM/E-X01 Aile Striker',
            'AQM/E-X02 Sword Striker',
            'AQM/E-X03 Launcher Striker',
            'P204QX Lightning Striker'
        ],
        [
            'Striker Pack Docking System'
        ],
        'Kimitoshi Yamane',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/skygrasper.jpeg','Skygrasper'],
        false,
    ],
    [31,1,'Gundam Proto-Zero',
        'XXXG-00W0 Wing Gundam Proto-Zero',
        'XXXG-00W0',
        'Mobile Suit Gundam Wing',
        false,
        ['OZ-00MS Tallgeese'],
        [
            'XXXG-01D Gundam Deathscythe',
            'XXXG-01H Gundam Heavyarms',
            'XXXG-01S Shenlong Gundam',
            'XXXG-01SR Gundam Sandrock',
            'XXXG-01W Wing Gundam',
            'XXXG-00W0 Wing Gundam Zero'
        ],
        'After Colony',
        [195,'September 27, 195 A.C.',196],
        'Heero Yuy',
        [
            'Quatre Raberba Winner',
            'Trant Clark',
            'Duo Maxwell',
            'Zechs Merquise',
            'Chang Wufei',
            'Trowa Barton'
        ],
        'Winner Corporation',
        ['G Team','Organization of the Zodiac','Sanc Kingdom','Peacemillion'],
        [16.7,'16.7 Meters'],           //Height
        [8,'8 Metric Tons'],        //Weight
        'Gundanium Alloy',
        false,
        [
            'Machine Cannon (x2)'
        ],
        [
            'Twin Buster Rifle',
            'Beam Saber (x2)',
            'Shield (w/ 2 Wing Vulcans)'
        ],
        [
            'Neo Bird Mode',
            'ZERO System',
            'Search Eye',
            'Self-Destruct System'
        ],
        'Kunio Okawara',
        false,
        'Zero',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/protozero.jpeg','Wing Gundam Proto Zero'],
        true
    ],
    [32,1,'Gundam Wing Zero',
        'XXXG-00W0 Wing Gundam Zero EW',
        'XXXG-00W0',
        'Mobile Suit Gundam Wing Endless Waltz',
        true,
        ['XXXG-00W0 Wing Gundam Proto Zero'],
        [
            'Wing Gundam Zero Lucifer',
            'XXXG-00YSW Wing Gundam Snow White Prelude'
        ],
        'After Colony',
        [195,'September 27, 195 A.C.',196],
        'Heero Yuy',
        [
            'Zechs Merquise'
        ],
        'Peacemillion',
        ['G Team','Sanc Kingdom','Peacemillion'],
        [16.7,'16.7 Meters'],           //Height
        [8,'8 Metric Tons'],        //Weight
        'Gundanium Alloy',
        false,
        [
            'Machine Cannon (x2)'
        ],
        [
            'Twin Buster Rifle',
            'Beam Saber (x2)',
            'Shield (w/ 2 Wing Vulcans)',
            'Drei Zwerg'
        ],
        [
            'Neo Bird Mode',
            'ZERO System',
            'Search Eye',
            'Self-Destruct System'
        ],
        'Hajime Katoki',
        false,
        'Zero',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wingzero.jpeg','Wing Gundam Zero'],
        true
    ],
    [33,1,'Destiny Gundam',
        'ZGMF-X42S Destiny Gundam',
        'ZGMF-X42S',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['ZGMF-X56S Impulse Gundam'],
        false,
        'Cosmic Era',
        [74,'74. C.E.',74],
        'Shinn Asuka',
        false,
        'Zodiac Alliance of Freedom Treaty',
        ['Zodiac Alliance of Freedom Treaty'],
        [18.08,'18.08 Meters'],
        [79.44,'79.44 Metric Tons'],
        false,
        'Hyper-Deuterion Engine',
        [
            'M2000GX high-energy long-range beam cannon',
            'MMI-714 "Arondight" beam sword',
            'MMI-GAU26 17.5mm CIWS (x2)',
            'MMI-X340 "Palma Fiocina" palm beam cannon (x2)',
            'MX2351 "Solidus Fulgor" beam shield generator (x2)',
            'RQM60F "Flash-Edge 2" beam boomerang (x2)'
        ],
        [
            'MA-BAR73/S high-energy beam rifle',
            'Shield'
        ],
        [
            'Variable Phase Shift Armor',
            'Neutron Jammer Canceller',
            'Voiture Lumiere propulsion system'
        ],
        'Kunio Okawara',
        false,
        'Alternate/nickname',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/destinygundam.jpeg','Destiny Gundam'],
        true
    ],
    [34,1,'Build Strike Gundam Full Package',
        'GAT-X105B/FP Build Strike Gundam Full Package',
        'GAT-X105B/FP',
        'Gundam Build Fighters',
        false,
        ['GAT-X105B Build Strike Gundam'],
        ['GAT-X105B/ST Star Build Strike Gundam'],
        false,
        false,
        'Sei Lori',
        ['Reiji'],
        'Sei Lori',
        false,
        [17.7,'17.7 Meters'],
        [96.3,'96.3 Metric Tons'],
        'Material / Armor',
        'Energy / Power Source',
        [
            'Vulcan Gun (x4)',
            'Build Booster - Beam Cannons (x2)'
        ],
        [
            'Beam Saber (x2)',
            'Beam Rifle',
            'Enhanced Beam Rifle',
            'Chobham Shielf',
            'BB-01 Build Booster'
        ],
        false,
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/buildstrikefullpackage.jpeg','Build Strike Full Package'],
        true
    ],
    [35,1,'Lightning Gundam',
        'LGZ-91 Lightning Gundam',
        'LGZ-91',
        'Gundam Build Fighters Try',
        false,
        ['RGZ-91 Re-GZ'],
        ['Developed LGZ-91Fb Lightning Gundam Full Burnern','LGZ-91St Lightning Gundam Strider'],
        false,
        false,
        'Yuuma Kousaka',
        ['Meijin Kawaguchi'],
        'Yuuma Kousaka',
        false,
        false,
        [50.2,'50.2 Metric Tons'],
        false,
        false,
        [
            'Vulcan (x2)',
            'Lightning Back Weapon System'
        ],
        [
            'Beam Saber (x2)',
            'Hand Gun',
            'Beam Rifle'
        ],
        false,
        'Kanetake Ebikawa',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/lightningg.jpeg','Lightning Gundam'],
        true
    ],
    [36,1,'AcGuy',
        'MSM-04 AcGuy',
        'MSM-04',
        'Mobile Suit Gundam',
        false,
        ['MSM-04-1 Prototype Acguy'],
        ['EMS-13 Aggjin'],
        'Universal Century',
        [79,'0079 U.C.','Present'],
        'Zeon Soldiers',
        false,
        'Zeonic Company',
        ['Principality of Zeon'],
        [19.2,'19.2 Meters'],
        [129,'129 Metric Tons'],
        false,
        'Minovsky Ultracompact Fusion Reactor (x2)',
        [
            '105mm Vulcan Gun (x4)',
            '6-tube Missile Launcher',
            'Mega Particle Cannon',
            'Vulcan Gun',
            'Iron Nail'
        ],
        false,
        [
            'Interchangeable Forearms'
        ],
        'Kunio Okawara ',
        false,                //boolean
        'Alternate/nickname',
        false,            //boolean
        ['https://hosting.photobucket.com/images/i/lesaintdumech/acguy.jpeg','Acguy'],
        false
    ],
    [37,3,'Cosmo Falcon',
        'StarBlazers Cosmo Falcon',
        'Type-99',
        'StarBlazers',
        false,
        false,
        false,
        'Anno Domini',
        false,
        false,
        false,
        false,
        ['United Nations Cosmo Navy'],
        false,
        [15.9,'15.9 Meters'],
        [6.8,'6.8 Meters'],
        'Meteor Type 35 Composite Radial Flow Cosmo-Engine',
        ['Machine Guns (x2)','Cannons (x6)','Anti-Air/Anti-Ship Missiles (x8)'],
        false,
        false,
        false,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/cosmofalcon.jpeg','Andromeda Black Model'],
        'Type-99 space attack fighter aircraft'
    ],
    [38,1,'Gundam Airmaster',
        'GW-9800 Gundam Airmaster',
        'GW-9800',
        'After War Gundam X',
        false,
        false,
        ['GW-9800-B Gundam Airmaster Burst'],
        'After War',
        [1,'0001 A.W.',15],
        'Witz Sou',
        false,
        'New United Nations Earth',
        ['New United Nations Earth','Vulture'],
        [17.2,'17.2 Meters'],
        [6.9,'6.9 Metric Tons'],
        'Luna Titanium (Gundarium Alloy)',
        'Ultracompact Fusion Reactor',
        [
            'Head Vulcan (x2)',
            'Nose Vulcan (x2)',
            'Shoulder Missile (x2)'
        ],
        [
            'Buster Rifle (x2)'
        ],
        [
            'Flash System',
            'Trans System'
        ],
        false,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/airmaster.jpeg','Gundam Airmaster'],
        true
    ],
    [39,1,'Gundam Leopard',
        'GT-9600 Gundam Leopard',
        'GT-9600',
        'After War Gundam X',
        false,
        false,
        ['GT-9600-D Gundam Leopard Destroy'],
        'After War',
        [1,'0001 A.W.',15],
        'Roybea Loy',
        false,
        'New United Nations Earth',
        ['New United Nations Earth','Vulture'],
        [17.2,'17.2 Meters'],
        [6.9,'6.9 Metric Tons'],
        'Luna Titanium (Gundarium Alloy)',
        'Ultracompact Fusion Reactor',
        [
            'Inner Arm Gatling',
            'Breast Gatling (x2)',
            'Hornet Missile (x2)',
            'Shoulder Missiles (x11)',
            'Head Vulcan (x2)',
            'Head Cannot (x2)',
            'Grenade Launcher (x6)',
            'Separate Missile Pod',
            'Inner Arm Torpedo Launcher'
        ],
        [
            'Beam Knife',
            'S-1 Unit (Torpedo Launcher)',
            'Snow Dasher (x2)'
        ],
        [
            'Flash System'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/leopard.jpeg','Gundam Leopard'],
        true
    ],
    [40,1,'Gundam Aquarius',
        'OZ-14MS Gundam Aquarius',
        'OZ-14MS',
        'SD Gundam G Generation games',
        false,
        ['OZ-00MS Tallgeese'],
        false,
        'After Colony',
        [195,'195 A.C.','Present'],
        'Lady Une',
        false,
        'Treize Khushrenada',
        ['Treize Faction'],
        [17.6,'17.6 Meters'],
        [9.4,'9.4 Metric Tons'],
        'Gundanium Alloy',
        'Ultracompact Fusion Reactor',
        [
            'Heat Rod (x2)'
        ],
        [
            'Dober Gun',
            '105mm Rifle',
            'Shield'
        ],
        [
            'Mobile Doll Jamming Pods'
        ],
        'Junya Ishigaki',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/aquarius.jpeg','Gundam Aquarius'],
        true
    ],
    [41,1,'Gundam X',
        'GX-9900 Gundam X',
        'GX-9900',
        'After War Gundam X',
        false,
        false,
        ['GX-9901-DX Gundam Double X'],
        'After War',
        [1,'0001 A.W.',15],
        'Garrod Ran',
        ['Jamil Neate','Kai','Rick Aller','Mana'],
        'New United Nations Earth',
        ['New United Nations Earth','Vulture'],
        [17.1,'17.1 Meters'],
        [7.5,'7.5 Metric Tons'],
        'Luna Titanium (Gundarium Alloy)',
        'Rechargeable Energy Conductors',
        [
            'Satellite Cannon',
            'Large Beam Sword',
            'Shoulder Vulcan',
            'Breast Vulcan (x4)'
        ],
        [
            'Shield Buster Rifle'
        ],
        [
            'Satellite System',
            'Reflector Unit',
            'Flash System'
        ],
        'Kunio Okawara',
        false,
        'GX',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gundamx.jpeg','Gundam X'],
        true
    ],
    [42,1,'Delta Plus',
        'MSN-001A1 Delta Plus',
        'MSN-001A1',
        'Mobile Suit Gundam Unicorn',
        false,
        ['MSN-001 Delta Gundam'],
        false,
        'Universal Century',
        [90,'0090 U.C.',97],
        'Riddhe Marcenas',
        ['Piko Altidore'],
        'Anaheim Electronics',
        ['Earth Federation Forces','Londo Bell'],
        [19.6,'19.6 Meters'],
        [27.2,'27.2 Metric Tons'],
        'Luna Titanium (Gundarium Alloy)',
        'Minovsky Ultracompact Fusion Reactor',
        [
            '60mm Vulcan Gun (x2)'
        ],
        [
            'Long Mega Buster',
            'Shield (w/ 2-Barrel Grenade Launcher, Beam Cannon)'
        ],
        [
            'Bio-Sensor'
        ],
        'Hajime Katoki',
        false,
        'AlternateNickname',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/deltaplus.jpeg','MSN-001A1 Delta Plus'],
        false
    ],
    [43,1,'\u2200 Gundam',
        'System-\u220099 \u2200 Gundam',
        'System-\u220099',
        'Turn A Gundam',
        false,
        ['Concept-X 6-1-2 Turn X'],
        false,
        'Correct Century',
        [1,'0001 C.C.',2345],
        'Loran Cehack',
        ['Sochie Heim','Teteh Halleh','Merrybell Gadget','Joseph Yaht'],
        'Unknown Previous Human Civilizatino',
        ['Inglessa Militia'],
        [20,'2o Meters'],
        [28.6,'28.6 Metric Tons'],
        'FE Type',
        'Discontinuous Hyperoscillation Gauge Collapsing Pile',
        [
            'Abdomen Beam Cannon (x2)',
            'Chest Multi-Purpose Silo (x6)'
        ],
        [
            'Beam Saber (x2)',
            'Beam Rifle',
            'Shield',
            'Gundam Hammer',
            'Minchi Drill'
        ],
        [
            'Core Block System',
            'Moonlight Butterfly',
            'Spine Pulse Sensor',
            'VR Helmet',
            'I-Field Barrier',
            'Nanomachine Regeration System',
            'I-Field Beam Drive System',
            'Teleportation'
        ],
        'Syd Mead',
        false,
        'Turn-A, White Doll, Mustache',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/turna.jpeg','Turn A Gundam'],
        true
    ],
    [44,1,'Gundam Geminass 01',
        'OZX-GU01A Gundam Geminass 01',
        'OZX-GU01A',
        'SeriNew Mobile Report Gundam Wing Dual Story: G-Unites',
        false,
        false,
        ['OZX-GU01LOB Gundam L.O. Booster'],
        'After Colony',
        [195,'195 A.C.',195],
        'Odin Bernett',
        false,
        'MO-V',
        ['MO-V'],
        [17.3,'17.3 Meters'],
        [7.9,'7.9 Metric Tons'],
        'Gundanium Alloy, Luna Ceramic, Fine Kevlar',
        'Ultracompact Fusion Reactor',
        false,
        [
            'Beam Sword (x2)',
            'Accelerated Rifle',
            'G-UNIT Shield',
            'Optional Equipment: High Mobility Unit',
            'Optional Equipment: Assault Unit',
            'Optional Equipment: Space Unit'
        ],
        [
            'Laser COmmunication System',
            'A.I.-Equipped Fire Control System',
            '3D Mosotronics',
            'Mass Reaction Search System',
            'PX System'
        ],
        'Koichi Tokita',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/geminass01.jpeg','Gundam Geminass 01'],
        true
    ],
    [45,1,'Zeta Gundam',
        'MSZ-006 Zeta Gundam',
        'MSZ-006',
        'Mobile Suit Zeta Gundam',
        false,
        [
            'MSZ-006-X Prototype Z Gundam',
            'RX-178 Gundam Mk-II'
        ],
        [
            'MSU-010 Zeta Gundam Mk-II',
            'MSZ-007 Mass Production Type Z Gundam',
            'MSZ-007 Z Rapier I',
            'MSZ-008 ZII',
            ['MSZ-009 Prototype ZZ Gundam']
        ],
        'Universal Century',
        [87,'July, 0087 U.C.',100],
        'Kamille Bidan',
        ['Reccoa Londe','Apolly Bay','Judau Ashta','Roux Louka'],
        'Anaheim Electronics',
        ['Anti Earth Union Group','Gundam Team'],
        [19.85,'19.85 Meters'],
        [28.7,'28.7 Metric Tons'],
        'Gundarium \u03b3 (Gamma) Alloy',
        'Minovsky Ultracompact Fusion Reactor',
        [
            'Sealant Launchers',
            'MU-86G 60mm Vulcan Gun (x2)',
            '2-tube Grenade Launch (x2)',
            'Anchor Wire (x2)'
        ],
        [
            'A.E.BLASH XB-G-35/Du.105 Beam Saber (Beam Gun) (x2)',
            'XBR-M87A2 Beam Rifle',
            'H-Baz-87-A*E/Ver.004 Hyper Bazooka'

        ],
        [
            'Wave Rider Mode',
            'Bio-Sensor'
        ],
        'Kazumi Fujita ',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/zeta.jpeg','Zeta Gundam'],
        true
    ],
    [46,1,'Gundam Barbatos',
        'ASW-G-08 Gundam Barbatos',
        'ASW-G-08',
        'Mobile Suit Gundam IRON-BLOODED ORPHANS',
        false,
        false,
        ['ASW-G-08 Gundam Barbatos Lupus','ASW-G-11 Gundam Gusion Rebake'],
        'Post Disaster',
        false,
        'Mikazuki Augus',
        false,
        'Gjallarhorn',
        ['Gjallarhorn','Tekkadan','Teiwaz'],
        [18.8,'18.8 Meters'],           //Height
        [30.5,'30.5 Metric Tons'],        //Weight
        'Nanolaminate Armor, High Hardness Rare Alloy',
        'Twin Ahab Reactors',
        [
            '170mm Autocannon (x2)',
            'Arm Mortar (x4)'
        ],
        [
            'Large Special Mace',
            'GR-H019.8m Battle Axe',
            'Long Range Rifle'
        ],
        [
            'Alaya-Vijnana System'
        ],
        'Naohiro Washio',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/barbatos.jpeg','Gundam Barbatos'],
        true
    ],
    [47,1,'Tallgeese',
        'OZ-00MS Tallgeese',
        'OZ-00MS',
        'Mobile Suit Gundam Wing',
        false,
        false,
        [
            'XXXG-00W0 Wing Gundam Proto-Zero',
            'OZ-06MS Leo',
            'OZ-07AMS Aries',
            'OZ-00MSVa Tallgeese Valkyrie',
            'OZ-00MS Tallgeese Flugel',
            'OZ-00MS2 Tallgeese II',
            'OZ-13MS Gundam Epyon'
        ],
        'After Colony',
        [175,'175 A.C.',195],
        'Zechs Merquise',
        ['Otto'],
        'Organization of the Zodiac',
        ['United Earth Sphere Alliance','Organization of the Zodiac','Sanc Kingdom','Peacemillion'],
        [17.4,'17.4 Meters'],
        [8.8,'8.8 Metric Tons'],
        'Titanium Alloy',
        'Ultracompact Fusion Reactor',
        false,
        [
            'Dober Gun',
            'Shield',
            'Beam Saber (x2)',
            'Booster Unit'
        ],
        [
            'Self-Destruct System'
        ],
        'Hajime Katoki',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/tallgeesei.jpeg','Tallgeese I'],
        false
    ],
    [48,1,'Gundam Barbatos Lupus',
        'ASW-G-08 Gundam Barbatos Lupus',
        'ASW-G-08',
        'Mobile Suit Gundam IRON-BLOODED ORPHANS',
        false,
        ['ASW-G-08 Gundam Barbatos'],
        ['ASW-G-08 Gundam Barbatos Lupus Rex'],
        'Post Disaster',
        false,
        'Mikazuki Augus',
        false,
        'Teiwaz',
        ['Tekkadan','Teiwaz'],
        [19,'19 Meters'],
        [31.2,'31.2 Metric Tons'],
        'Nanolaminate Armor',
        'Twin Ahab Reactors',
        [
            'Arm Rocket Launcher (x2)',
            '200mm sub-arm Gun (x2)',
            '20mm sub-arm Machine Gun (x2)'
        ],
        [
            'Sword Mace',
            'Twin Mace (x2)',
            'New Long Sword',
            'Large Railgun',
            'Valkyrja Buster Sword'
        ],
        [
            'Alaya-Vijnana System'
        ],
        'Naohiro Washio',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/barbatoslupus.jpeg','Barbatos Lupus'],
        true
    ],
    [49,1,'Gundam Barbatos Lupus Rex',
        'ASW-G-08 Gundam Barbatos Lupus Rex',
        'ASW-G-08',
        'Mobile Suit Gundam IRON-BLOODED ORPHANS',
        false,
        ['ASW-G-08 Gundam Barbatos Lupus'],
        false,
        'Post Disaster',
        false,
        'Mikazuki Augus',
        false,
        'Teiwaz',
        ['Tekkadan','Teiwaz'],
        [19,'19 Meters'],
        [31.2,'31.2 Metric Tons'],
        'Nanolaminate Armor',
        'Twin Ahab Reactors',
        [
            'Tail Blade',
            'Red Nail (x10)',
            '200mm sub-arm Gun (x2)',
            'Heel Bunker (x2)'
        ],
        [
            'Ultra Large Mace',
            'GR-H01 9.8m Battle Axe',
            'Anti-Ship Lance mace'
        ],
        [
            'Alaya-Vijnana System'
        ],
        'Naohiro Washio',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/barbatoslupusrex.jpeg','Barbatos Lupus Rex'],
        true
    ],
    [50,1,'Hashmal',
        'Mobile Armor Hashmal',
        false,
        'Mobile Suit Gundam IRON-BLOODED ORPHANS',
        false,
        false,
        ['ASW-G-08 Gundam Barbatos Lupus Rex'],
        'Post Disaster',
        false,
        'Self-Autonomous',
        false,
        'Manufacturer',
        ['Affiliations'],
        [35.2,'35.2 Meters'],           //Height
        [49.8,'49.8 Metric Tons'],        //Weight
        'Nanolaminate Armor',
        'Ahab Reactor',
        [
            'Beam Cannon',
            'Twin Kinetic Energy Shot Launchers',
            'Wire Blade'
        ],
        [
            'Autonomous Army of Plumas',
            'Energy Supply System'
        ],
        [
            'Pluma Manufacturing'
        ],
        'Naohiro Washio',
        false,
        false,
        true,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/hashmal.jpeg','Mobile Armor Hashmal'],
        false
    ],
    [51,1,'Gundam Strike Noir',
        'GAT-X105E Strike Noir Gundam',
        'GAT-X105E',
        'Mobile Suit Gundam SEED C.E. 73: STARGAZER',
        false,
        [
            'GAT-X105E Strike E',
            'GAT-X105+AQM/E-M1 Strike Gundam IWSP'
        ],
        false,
        'Cosmic Era',
        [73,'73 C.E.',74],
        'Sven Cal Bayang',
        false,
        'Actaeon Inudstries',
        ['OMNI Enforcer','Phantom Pain'],
        [17.72,'17.72 Meters'],
        [90.51,'90.51 Metric Tons'],
        false,
        'Ultracompact Energy Battery',
        [
            'M2M5 "Todesschrecken" 12.5mm Automatic CIWS (x2)',
            'EQS1358 Rocket Anchor (x6)'
        ],
        [
            'M8F-SB1 Beam Rifle Shorty (x2)',
            'MR-Q10 "Fragarach 3" Beam Blade (x2)',
            'MAU-M3E4 Twin Linear Gun (x2)',
            '57mm High-Energy Beam Rifle w/ 175mm Grenade Launcher (x2)'
        ],
        [
            'Variable Phase Shift armor',
            'Striker Pack System',
            'Power Extender'
        ],
        false,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/strikenoir.jpeg','Stike Noir'],
        true
    ],
    [52,1,'Justice Gundam',
        'ZGMF-X09A Justice Gundam',
        'ZGMF-X09A',
        'Mobile Suit Gundam SEED',
        false,    //boolean
        [
            'YFX-600R GuAIZ Experimental Firearms Type',
            'YMF-X000A Dreadnought Gundam'
        ],
        ['ZGMF-X19A \u221e Justice Gundam'],
        'Cosmic Era',
        [71,'May 17, 71 C.E.',71],
        'Athrun Zala',
        false,
        'Integrated Design Bureau',
        [
            'Zodiac Alliance of Freedom Treaty',
            'Orb Union',
            'Three Ships Alliance'
        ],
        [18.56,'18.56 Meters'],
        [75.4,'75.4 Metric Tons'],
        false,
        'Ultracompact Nuclear Fission Reactor',
        [
            'MMI-GAU1 "Sagittus" 20mm CIWS (x4)',
            'Shoulders: RQM51 "Bassel" Beam Boomerang (x2)'
        ],
        [
            'MA-M20 "Lupus" Beam Rifle',
            'Laminated Anti-Beam Shield',
            'MA-M01 "Lacerta" Beam Saber (x2)',
            'Fatum-00',
            'Fatum: MA-4B "Fortis" Beam Cannon (x2)',
            'Fatum: M9M9 "Cervus" Turret Machine Gun (x2)',
            'Fatum: GAU5 "Volucris" Machine Gun (x4)',
            'METEOR Unit'
        ],
        [
            'OS: Generation Unsubdued Nuclear Drive Assault Module Complex',
            'Multi Lock-On System',
            'Phase Shift Armor',
            'Neutron Jammer Canceler'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/justice.jpeg','Justice Gundam'],
        true
    ],
    [53,1,'Infinite Justice Gundam',
        'ZGMF-X19A \u221e Justice Gundam',
        'ZGMF-X19A',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['ZGMF-X09A Justice Gundam'],
        false,
        'Cosmic Era',
        [74,'74 C.E.','Present'],
        'Athrun Zala',
        ['Lacus Clyne'],
        'Terminal',
        ['Three Ships Alliance','Terminal','Orb Union','Archangel Corps'],
        [18.9,'18.9 Meters'],
        [79.67,'79.g7 Metric Tons'],
        false,
        'Hyper-Deuterion Engine',
        [
            'MMI-GAU26 17.5mm CIWS (x4)',
            'MMI-M19L 14mm Twin CIWS (x2)',
            'Legs: MR-Q15A "Griffon" Beam Blade (x2)'
        ],
        [
            'MA-M1911 High-energy Beam Rifle',
            'MX2002 Carrier Beam Shield',
            'Shield: RQM55 "Shining Edge" Beam Boomerang',
            'Shield Mounted: EEQ8 Grapple Stinger',
            'MA-M02G "Super Lacerta" Beam Saber (x2)',
            'Fatum-01',
            'Fatum: MA-6J "Hyper Fortis" Beam Cannon (x2)',
            'Fatum: MA-M02G "Super Lacerta" Beam Saber',
            'Fatum: MA-M02S "Preface Lacerta" Beam Saber (x2)',
            'Fatum: MR-Q17X "Griffon 2" Beam Blade (x2)',
            'METEOR Unit'
        ],
        [
            'OS: Generation Unsubdued Nuclear Drive Assault Module Complex',
            'Variable Phase Shift Armor',
            'Neutron Jammer Canceller',
            'Multi Lock-On System',
        ],
        'Kunio Okawara',
        false,
        'Justice',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/infjustice.jpeg','Infinite Justice Gundam'],
        true
    ],
    [54,1,'Wing Gundam',
        'XXXG-01W Wing Gundam',
        'XXXG-01W',
        'Mobile Suit Gundam Wing',
        false,
        ['XXXG-00W0 Wing Gundam Zero'],
        false,
        'After Colony',
        [195,'April 7, 195 A.C.',195],
        'Heero Yuy',
        ['Trowa Barton','Lady Une'],
        'Jay Null',
        ['Colony Liberation Organization','G Team','Operation Meteor','Sanc Kingdom'],
        [16.3,'16.3 Meters'],           //Height
        [7.1,'7.1 Metric Tons'],        //Weight
        'Gundanium Alloy',
        'Ultracompact Fusion Reactor',
        [
            'Vulcan Gun (x2)',
            'Machine Cannon (x2)'
        ],
        [
            'Buster Rifle',
            'Beam Saber',
            'Anti Beam Coating Shield'
        ],
        [
            'OS: Standard Gundam Operating System',
            'Bird Mode',
            'Search Eye',
            'Self-Destruct System'
        ],
        'Kunio Okawara',
        false,
        'Gundam 01',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wingtv.jpeg','Wing Gundam'],
        true
    ],
    [55,1,'Dom Test Type',
        'YMS-08B Dom Test Type',
        'YMS-08B',
        'Mobile Suit Discovery',
        false,
        [
            'MS-06RD-4 Zaku High Mobility Test Type',
            'MS-07C-5 Gouf Test Prototype',
            'YMS-08A High Mobility Prototype'
        ],
        ['MS-09 Dom','MS-09R Rick Dom'],
        'Universal Century',
        false,
        'Vasily Bosch',
        ['Zeon Pilots'],
        'Zimmad',
        ['Principality of Zeon','Y-02 Development and Training Team'],
        [18,'18.0 Meters'],
        false,
        false,
        false,
        false,
        [
            'Heat Saber',
            'Beam Bazooka'
        ],
        false,
        false,
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/domtesttype_Large.jpeg','Dom Test Type'],
        false
    ],
    [56,1,'Gundam Rose',
        'GF13-009NF Gundam Rose',
        'GF13-009NF',
        'Mobile Fighter G Gundam',
        false,
        false,
        ['GF13-009NFII Gundam Versailles'],
        'Future Century',
        [60,'60 F.C.',60],
        'George de Sand',
        false,
        'Neo France',
        ['Neo France','Shuffle Alliance','13th Gundam Fight'],
        [16.2,'16.2 Meters'],
        [13.1,'13.1 Metric Tons'],
        'Gundanium Alloy Super Ceramic Composite',
        'Ultracompact Fusion Reactor',
        [
            'Vulcan Gun (x2)',
        ],
        [
            'Chevalier Beam Saber',
            'Rose Bits (x100s)',
            'Corelander'
        ],
        [
            'Mobile Trace System',
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/Gundam_rose_Large.jpeg','Gundam Rose'],
        true
    ],
    [57,1,'Akatsuki',
        'ORB-01 Akatsuki Gundam',
        'ORB-01',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['GAT-X105 Strike Gundam'],
        false,
        'Cosmic Era',
        [74,'74 C.E.','Present'],
        'Cagalli Yula Athha',
        ['Mu La Flaga'],
        'Morgenroete',
        ['Orb Union','Three Ships Alliance'],
        [18.74,'18.74 Meters'],
        [69.6,'69.6 Metric Tons'],
        false,
        'Ultracompact Energy Battery',
        [
            'M2M5D 12.5mm CIWS (x2)'
        ],
        [
            'Type 73J2 Experimental Twin Beam Saber (x2)',
            'Type 72D5 "Hyakurai" Beam Rifle',
            'Type 71 Experimental Defensive Shield',
            'Optional Equipment: Oowashi Sky Pack',
            'Oowashi Sky Pack: Type-73F Kai High-Energy Beam Cannon (x2)',
            'Optional Equipment: Shiranui Space Pack',
            'Shiranui Space Pack: M531R Guided Mobile Beam Turret System (x7)'
        ],
        [
            'OS: General Unilateral Neuro-link Dispersive Autonomic Maneuver',
            'Striker Pack System'
        ],
        'Kunio Okawara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/akatsuki_Large.jpeg','Akatsuki Gundam'],
        true
    ],
    [58,1,'FF Nu Gundam',
        'RX-93ff \u03BD Gundam',
        'RX-93ff',
        'Gundam Breaker Mobile',
        false,
        ['RX-93 \u03BD Gundam'],
        false,
        'Universal Century',
        false,
        'Amuro Ray',
        false,
        'Side-F',
        ['Earth Federation','Londo Bell'],
        [24.8,'24.8 Meters'],
        [20.5,'20.5 Metric Tons'],
        'Luna Titanium (Gundarium Alloy',
        'Minovsky Ultracompact Fusion Reactor',
        [
            '60mm Vulcan Gun (x2)',
            'Fin Funnels (x6)',
            'Birdlime Launchers',
            'Dummy Launchers'
        ],
        [
            'Long-Range Fin Funnel',
            'Beam Saber',
            'Spare Beam Saber',
            'Beam Rifle',
            'New Hyper Bazooka',
            'Shield (w/ integrated 7.8 MW beam cannont and missile launchers)'
        ],
        [
            'Psycho-Frame Cockpit'
        ],
        'Masatake Kawahara',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff.jpeg','RX93ff'],
        true
    ],
    [59,1,'Dark Army',
        'JDG-009X Dark Army',
        'JDG-009X',
        'Mobile Fighter G Gundam',
        false,
        false,
        [
            'Death Dragon',
            'Death Master',
            'Death Beast',
            'Death Birdie',
            'Death Navy'
        ],
        'Future Century',
        [60,'60 F.C.',60],
        'Dark Gundam Corps',
        false,
        'Dark Gundam',
        ['Dark Gundam'],
        false,
        false,
        'DG Cells',
        'Ultra Compact Fusion Reactor',
        [
            'Spiked Knuckle (x2)'
        ],
        [
            'Beam Rifle',
            'Death Rifle'
        ],
        false,
        'Hajime Katoki',
        false,
        'Death Army',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/deatharmy.jpeg','Dark Army'],
        false
    ],
    [60,1,'Strike Gundam',
        'GAT-X105 Strike Gundam',
        'GAT-X105',
        'Mobile Suit Gundam SEED',
        false,
        false,
        [
            'GAT-01 Strike Dagger',
            'MBF-02 Strike Rouge',
            'ORB-01 Akatsuki Gundam',
            'GAT-X105+AQM/E-YM1 Perfect Strike Gundam'
        ],
        'Cosmic Era',
        [71,'January 25, 71 C.E.',71],
        'Kira Yamato',
        ['Mu La Flaga','Muru Ramius'],
        'Morgenroete',
        ['Earth Alliance','Orb Union','Archangel Corps','Three Ships Alliance'],
        [17.72,'17.72 Meters'],           //Height
        [64.8,'64.8 Metric Tons'],        //Weight
        false,
        'Ultracompact Energy Battery',
        [
            '"Igelstellung" 75mm Automatic Multi-barrel CIWS (x2)'
        ],
        [
            '"Armor Schneider" Combat Knife (x2)',
            '57mm High-energy Beam Rifle',
            'Shield',
            'XM404 "Grand Slam" Anti-Ship Sword',
            'Strike Pack: AQM/W-XO1 Aile Striker',
            'Aile Strike: Beam Sabers (x2)',
            'Strike Pack: AQM/W-XO2 Sword Striker',
            'Sword Strike: "Schwert Gewehr" 15.78m Anti-ship Sword',
            'Sword Strike: "Panzer Eisen" Rocket Anchor',
            'Sword Strike: "Midas Messer" Beam Boomerang',
            'Strike Pack: AQM/W-XO3 Launcher Striker',
            'Launcher Strike: "Agni" 320mm Hyper Impulse Cannon',
            'Launcher Strike: 120mm Anti-Ship Vulcan Gun',
            'Launcher Strike: 350mm Gun Launcher (x2)',
            'Strike Pack: P202QX Lightning Striker',
            'Lightning Strike: Type 70-31 Electromagnetic Cannon'
        ],
        [
            'OS: General Unilateral Neuro-Link Dispersive Autonomic Maneuver Synthesis System',
            'Phase Shift Armor',
            'Striker Pack System'
        ],
        'Junichi Akutsu',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/strike_Large.jpeg','Strike Gundam'],
        true
    ],
    [61,1,'Perfect Strike Gundam',
        'GAT-X105+AQM/E-YM1 Perfect Strike Gundam',
        'GAT-X105+AQM/E-YM1',
        'Mobile Suit Gundam SEED',
        false,
        ['GAT-X105 Strike Gundam'],
        false,
        'Cosmic Era',
        [71,'71 C.E.',71],
        'Mu La Flaga',
        false,
        'Morgenroete',
        ['Orb Union','Archangel Corps','Three Ships Alliance'],
        [17.72,'17.72 Meters'],           //Height
        [64.8,'64.8 Metric Tons'],        //Weight
        false,
        'Ultracompact Energy Battery + 4 Battery Packs',
        [
            '"Igelstellung" 75mm Automatic Multi-barrel CIWS (x2)'
        ],
        [
            '"Armor Schneider" Combat Knife (x2)',
            '57mm High-energy Beam Rifle',
            'Shield',
            'Beam Sabers (x2)',
            '"Schwert Gewehr" 15.78m Anti-ship Sword',
            '"Panzer Eisen" Rocket Anchor',
            '"Midas Messer" Beam Boomerang',
            '"Agni" 320mm Hyper Impulse Cannon',
            '120mm Anti-Ship Vulcan Gun',
            '350mm Gun Launcher (x2)'
        ],
        [
            'OS: General Unilateral Neuro-Link Dispersive Autonomic Maneuver Synthesis System',
            'Phase Shift Armor',
            'Striker Pack System',
            '4 Battery Packs'
        ],
        'Junichi Akutsu',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/perfectstrike_Large.jpeg','Strike Gundam'],
        true
    ],
    [62,6,'MetalGarurumon',
        'Figure-rise Standard Amplified MetalGarurumon',
        'Mega',
        ['WereGarurumon'],
        ['Omnimon'],
        'Cyborg',
        'Data',
        'Water',
        'Garurumon Family',
        false,
        'Matt Ishida',
        [18,'18 GB'],
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/metalgarurumon.jpeg','MetalGarurumon']
    ],
    [63,6,'Omnimon',
        'Figure-rise Standard Amplified Omegamon',
        'Ultra',
        ['DNA-Digivolution: MetalGarurumon and Wargreymon'],
        false,
        'Holy Knight',
        'Vaccine',
        'Light',
        'Royal Knights',
        false,
        'Tai Kamiya -n- Matt Ishida',
        [25,'25 GB'],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        'Omegamon',
        'Legendary Warrior',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/omnimon_2.jpeg','Omnimon']
    ],
    [64,6,'Gallantmon',
        'Figure-rise Standard Amplified Gallantmon',
        'Mega',
        ['WarGrowlmon'],
        ['Gallantmon Crimson Mode'],
        'Holy Knight',
        'Virus',
        'Light',
        'Royal Knights',
        false,
        'Takato Matsuki',
        [22,'22 GB'],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        'Dukemon',
        'Crimson Knight',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gallantmon_2.jpeg','Omnimon']
    ],
    [65,5,'Hangar Bay',
        '1/144 Gundam Hangar Bay',
        'Unsure',
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/hangarbay_2.jpeg','Gundam Hangar Bay'],
    ],
    [66,5,'Gundam Maintenance Bay',
        'Condensed Light Composable Action Base',
        'Condensed Light',
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/compactbase.jpeg','Gundam Maintenance Bay'],
        false
    ],
    [67,1,'Gundam Exia',
        'GN-001 Gundam Exia',
        'GN-001',
        'Mobile Suit Gundam 00',
        false,
        ['GNY-001 Gundam Astraea'],
        ['GN-0000 00 Gundam'],
        'Anno Domini',
        [2307,'2307 A.D.',2308],
        'Setsuna F. Seiei',
        false,
        'Krung Thep',
        ['Celestial Being'],
        [18.3,'18.3 Meters'],           //Height
        [57.2,'57.2 Metric Tons'],        //Weight
        'E-Carbon',
        'GN Drive',
        [
            'GN Vulcan (x2)'
        ],
        [
            'GN Sword',
            'GN Beam Dagger (x2)',
            'GN Beam Saber (x2)',
            'GN Long Blade',
            'GN Short Blade',
            'GN Shield'
        ],
        [
            'Over Boost Mode',
            'Optical Camouflage',
            'Veda-Linked Operating System',
            'Trans-Am System'
        ],
        'Kanetake Ebikawa',
        false,
        'Gundam Seven Swords',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/exia_Large.jpeg','Gundam Exia'],
        true
    ],
    [68,1,'Gundam 00 Raiser',
        'GN-0000+GNR-010 00 Raiser',
        'GN-0000+GNR-010',
        'Mobile Suit Gundam 00',
        false,
        ['GN-0000 00 Gundam','GNR-010 0 Raiser'],
        ['GNT-0000 00 Qan[T]'],
        'Anno Domini',
        [2312,'2312 A.D.',2314],
        'Setsuna F. Seisei',
        ['Saji Crossroad'],
        'Celestial Being',
        ['Celestial Being'],
        [18.3,'18.3 Meters'],
        [75.1,'75.1 Metric Tons'],
        'E-Carbon',
        'Double GN Drives',
        [
            'GN Vulcan (x4)',
            'GN Micro Missile (x8)',
            'GN Beam Machine Gun (x2)'
        ],
        [
            'GN Beam Saver (x2)',
            'GN Shield (X2)',
            'GN Sword II (x2)',
            'GN Sword III',
            'Seven Swords Pack'
        ],
        [
            'Veda-Linked Operating System',
            'Twin Drive System',
            'Raiser System',
            'GN Field',
            'Trans-Am System',
            'Trans-Am Burst System',
            'Trans-Am Raiser'
        ],
        'Kanetake Ebikawa',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/ooraiser_Large.jpeg','00 Raiser Gundam'],
        true
    ],
    [69,1,'Gundam 00 Diver',
        'GN-0000DVR Gundam 00 Diver',
        'GN-0000DVR',
        'Gundam Build Divers',
        false,
        ['GN-0000 00 Gundam'],
        ['GN-0000DVR/A Gundam 00 Diver Ace'],
        false,
        false,
        'Riku Mikami',
        false,
        'Riku Mikami',
        ['Build Divers'],
        [18.3,'18,3 Meters'],
        [55.5,'55.5 Metric Tons'],
        false,
        false,
        [
            'Armaments'
        ],
        [
            'GN Beam Saber (x2)',
            'GN Sword II (x2)'
        ],
        [
            'Trans-Am System'
        ],
        'Kanetake Ebikawa',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/00diver.jpeg','00 Diver'],
        true
    ],
    [70,1,'Gundam Harute',
        'GN-011 Gundam Harute',
        'GN-011',
        'Mobile Suit Gundam 00 The Movie: Awakening of the Trailblazer',
        false,
        ['GN-007 Arios Gundam','GNR-101A GN Archer','GNR-010/XN XN Raiser'],
        false,
        'Anno Domini',
        [2314,'2314 A.D.','Present'],
        'Allelujah Haptism',
        ['Marie Parfacy'],
        'Celestial Being',
        ['Celestial Being'],
        [19.0,'19.0 Meters'],
        [77.1,'77.1 Metric Tons'],
        'E-Carbon',
        'GN Drive',
        [
            'GN Cannon (x2)',
            'GN Missile Container'
        ],
        [
            'GN Sword Rifle (x2)',
            'GN Scissor Bit (x10)',
            'Optional: GN Booster (x2)'
        ],
        [
            'Veda-Linked Operating System',
            'Trans-Am System',
            'Bit Control Sysem',
            'Marute Mode'
        ],
        'Takayuki Yanase',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/harute.jpeg','Gundam Harute'],
        true
    ],
    [71,1,'Gundam Zabanya',
        'GN-010 Gundam Zabanya',
        'GN-010',
        'Mobile Suit Gundam 00 The Movie: Awakening of the Trailblazer',
        false,
        ['GN-006GNHW/R Cherudim Gundam GNHW/R'],
        false,
        'Anno Domini',
        [2314,'2314 A.D.','Present'],
        'Lockon Stratos',
        ['Haro 1','Haro 2'],
        'Celestial Being',
        ['Celestial Being'],
        [18.0,'18.0 Meters'],
        [86.8,'86.8 Metric Tons'],
        'E-Carbon',
        'GN Drive',
        [
            '3-Tube GN Missile Pod (x20)',
            '4-Tube GN Missile Pod (x4)'
        ],
        [
            'GN Holster Bit (x14)',
            'GN Pistol Bit/Rifle Bit II (x10)',
            'GN Pistol Bit/Rifle Bit II (x4)'
        ],
        [
            'Veda-Linked Operating System',
            'Trans-Am System',
            'Bit Control Sysem'
        ],
        'Takayuki Yanase',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/zabanya.jpeg','Gundam Harute'],
        true
    ],
    [72,1,'Shin Musha Gundam',
        'Prototype Close Quarters Combat Mobile Suit',
        false,
        'Gundam Musou',
        false,
        ['Musha Gundam'],
        false,
        false,
        false,
        'Gym Ghingham',
        ['Yazan Gable'],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        [
            'Tanegashima Gun',
            'Nichirinmaru Katana',
            'Denkoumaru Naginata',
            'Sankoumaru Jumonji Yari'
        ],
        [
            'Mars Drive'
        ],
        'Hajime Katoki',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/shinmusha.jpeg','Shin Musha'],
        true
    ],
    [73,1,'Eclipse Gundam Maneuver Striker ',
        'MVF-X08+EW452HW Eclipse Gundam Maneuver Striker Pack Equipped',
        'MVF-X08+EW452HW',
        'Mobile Suit Gundam SEED Eclipse',
        false,    //boolean
        ['MVF-X08 Eclipse Gundam'],
        false,
        'Cosmic Century',
        false,
        'Tatsumi Hori',
        false,
        false,
        ['ORB Union','Orb Disaster Relief Team'],
        false,
        false,
        false,
        'Ultracompact Energy Battery',
        false,
        false,
        false,
        false,
        false,                //boolean
        false,
        false,            //boolean
        ['https://hosting.photobucket.com/images/i/lesaintdumech/maneuverstriker.jpeg','Eclipse Maneuver Strike'],
        false           //boolean
    ],
    [74,9,'Shadow Fox',
        'RZ-046 Shadow Fox',
        'RZ-046',
        'Fox Type',
        1,
        ['Brad Hunter'],
        'Helic Republic',
        [52,'52.0 tons'],
        [17.3,'17.3 m'],
        [8,'8.0 m'],
        [290,'290.0 km/h'],
        [
            'Electron Bite Fangs',
            'Strike Laser Claws',
            'AZ 30mm Armor Piercing Laser Vulcan',
            'AZ 70mm Electromagentic Net Gun'
        ],
        [
            'Optical Camouflage',
            '3D Radar & Multiple Ear Sensor',
            'Smoke Discharger',
            'Anchor',
            'Multi Weapon Rack',
            'Shoulder Weapon Rack'
        ],
        'Dr. Laon',
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
        ['https://hosting.photobucket.com/images/i/lesaintdumech/Shadow_Fox_Large.jpeg','Shadow Fox']
    ],
    [75,1,'Slash Zaku Phantom',
        'ZGMF-1001/K Slash ZAKU Phantom',
        'ZGMF-1001/K',
        'Mobile Suit Gundam SEED Destiny',
        false,    //boolean
        ['ZGMF-1001 ZAKU Phantom'],
        false,
        'Cosmic Era',
        [73,'73 C.E.',73],
        'Zaft Soldiers',
        ['Yzak Jule'],
        'Integrated Design Bureau',
        ['Zodiac Alliance of Freedom Treaty','Jule Team'],
        false,           //Height
        [88.1,'88.1 Metric Tons'],        //Weight
        false,
        'Ultracompact Energy Batter',
        [
            'Anti-Beam Shield (x2)',
            'MA-M8 Beam Tomawawk (x2)',
            'ZR30F Fragmentation Grenade',
            'ZR20E High Explosive Grenade',
            'ZR271 Thermite Incendiary Grenade',
            'ZR11Q Flash Grenade',
            'ZR13Q Smoke Grenade',
            'MMI-M6333 Beam Assault Rifle',
            'MA-MR Falx G7 Beam Axe'
        ],
        [
            'MMI-M826 "Hydra" Gatling Beam Cannon (x2)',
            'EX-K Slash Wizard'
        ],
        [
            'Wizard Pack System'
        ],
        false,
        false,                //boolean
        false,
        false,            //boolean
        ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuphantom_Large.jpeg','Slash Zaku Phantom'],
        false           //boolean
    ],
    [76,1,'Strike-Freedom Gundam',
        'ZGMF-X20A Strike-Freedom Gundam',
        'ZGMF-X20A',
        'Mobile Suit Gundam SEED Destiny',
        false,
        ['ZGMF-X10A Freedom Gundam'],
        false,
        'Cosmic Era',
        [74,'74 C.E.','Present'],
        'Kira Yamato',
        false,
        'Terminal',
        ['Terminal','Three Ships Alliance','Orb National Defense Forces'],
        [18.88,'18.88 Meters'],           //Height
        [80.09,'80.09 Metric Tons'],        //Weight
        false,
        'Hyper-Deuterion Engine',
        [
            'MMI-GAU27D 31mm CIWS (x2)',
            'Abdoment Mounted MGX-2235 "Calidus" Multi-Phase Beam Cannon',
            'MMI-M15E "Xiphias 3" Railgun (x2)',
            'MX2200 Beam Shield (x2)',
            'EQFU-3X Super DRAGOON MA-80V Beam Assault Cannon (x8)'
        ],
        [
            'MA-M02G "Super Lacerta" Beam Saber (x2)',
            'MA-M21KF High-energy Beam Rifle (x2)',
            'METEOR Unit'
        ],
        [
            'OS: Generation Unsubdued Nuclear Drive Assault Module Complex',
            'Variable Phase Shift Armor',
            'High Mobility Aerial Tactics (HiMAT) Mode',
            'Multi Lock-on System',
            'Full Burst Mode',
            'Neutron Jammer Canceller',
            'Voiture Lumiere Propulsion System',
            'Super DRAGOON System'
        ],
        'Kunio Okawara',
        false,
        'Freedom',
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/strikefreedom_Large.jpeg','Strike-Freedom Gundam'],
        true
    ],
    [77,1,'Gundam Nadleeh',
        'GN-004 Gundam Nadleeh',
        'GN-004',
        'Mobile Suit Gundam 00',
        false,
        ['GNY-004 Gundam Plutone'],
        [
            'GN-004/te-A02 Gundam Nadleeh Akwos',
            'GN-005 Gundam Virtue',
            'GN-005/PH Gundam Virtue Physical',
            'GN-009 Seraphim Gundam'
        ],
        'Anno Domini',
        [2307,'2307 A.D.',2308],
        'Tieria Erde',
        false,
        'Krung Thep',
        ['Celestial Being'],
        [18.1,'18.1 Meters'],
        [54.0,'54.0 Metric Tons'],
        'E-Carbon',
        'GN Drive',
        false,
        [
            'GN Beam Saber (x2)',
            'GN Cannon (x2)',
            'GN Beam Rifle',
            'GN Shield'
        ],
        [
            'Veda-Linked Operating System',
            'Optical Camouflage',
            'Trial System',
            'Trans-Am System'
        ],
        'Takayuki Yanase',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/GundamNadleeh.jpeg','Gundam Nadleeh'],
        true
    ],
    [78,1,'Gundam Virtue',
        'GN-005 Gundam Virtue',
        'GN-005',
        'Mobile Suit Gundam 00',
        false,
        [
            'GNY-004 Gundam Plutone',
            'GN-004 Gundam Nadleeh'
        ],
        [
            'CBY-007 GN Cannon',
            'GN-008 Seravee Gundam',
            'GNZ-003 Gadessa'
        ],
        'Anno Domini',
        [2307,'2307 A.D.',2308],
        'Tieria Erde',
        false,
        'Krung Thep',
        ['Celestial Being'],
        [18.4,'18.4 Meters'],
        [66.7,'66.7 Metric Tons'],
        'E-Carbon',
        'GN Drive',
        [
            'GN Field'
        ],
        [
            'GN Beam Saber (x2)',
            'GN Cannon (x2)',
            'GN Bazooka'
        ],
        [
            'Veda-Linked Operating System',
            'Optical Camouflage',
            'Trans-Am System'
        ],
        'Takayuki Yanase',
        false,
        false,
        false,
        ['https://hosting.photobucket.com/images/i/lesaintdumech/GundamVirtue.jpeg','Gundam Virtue'],
        true
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
    12. Project
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
    24. Second name/nickname/phrase/slogan
    25. Project Page: override name
    26. Build Page: Override Name
*/

//Pojects
const projects = [
    //Ad Stella (Mercury)
    ['Aerial (?)',[1,'Aerial'],'FM',false,false,false,'Mercury','A'],
    ['Aerial [HG]',[1,'Aerial'],'HG',true,false,false,'Mercury','D','2023-05-30',2.75,false,false,false],
    ['PB Aerial Permet Six [HG]',[1,'Aerial'],'HG',true,true,false,'Mercury','A'],
    ['Ariel',[1.5,'Aerial','Mirasoul Flight Pack'],'HG',false,false,false,'Mercury','B'],
    ['Cherub',[1,'Aerial'],'SD',false,false,false,'Mercury','D','2023-01-03-10',4.91,false,'Builds/Cherub.html','Angels'],
    ['Abaddon',[1,'Calibarn'],'HG',false,false,false,'Mercury','A'],
    ['Azrael',[1,'Dilanza, Guel\'s'],'HG',
        false,false,false,'Mercury','E','2023-01-05',12.14,false,'Builds/Gundams/Azrael.html','Angels','2023-02-27',models[26],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael02.jpeg','Azrael','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael03.jpeg','Azrael','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael04.jpeg','Azrael','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael05.jpeg','Azrael','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael06.jpeg','Azrael','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael07.jpeg','Azrael','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael08.jpeg','Azrael','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael09.jpeg','Azrael','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael10.jpeg','Azrael','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael11.jpeg','Azrael','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/azrael03.jpeg','Profile Photo: Azrael'],
        'Named after the Hebrew Angel of Death. I wanted to keep the color scheme of this one as close as I could to the original. Just made it more shiny by using Turbo Dork. This was my first build of a Witch from Mercury model, and it was pretty cool. Not to mention their model quality at Bandai has really improved a lot on these Mercury model kits.',false,
        [
            ['Video','https://www.instagram.com/reel/CpMT1gEs1no/'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgtwfm-1-144-04-dilanza-guels-mobile-suit'],
            ['NewType','https://newtype.us/p/1ZqsazKkWagen1RV4twr/h/hgwfm-04-guel-s-dilanza'],
            ['Azrael','https://en.wikipedia.org/wiki/Azrael']
        ],false,false,true,'1:144'
    ],
    ['Dark Samus: Echoes',[1,'Gundvolva'],'HG',false,false,false,'Mercury','B'],
    ['Dark Samus: Corruption',[1,'Gundvolva'],'HG',false,false,false,'Mercury','B'],
    ['Dobiel',[1,'Gundvolva'],'HG',
        false,false,false,'Mercury','C','2023-08-07',5.6,true
    ],
    ['EMMI',[1,'Heindree'],'HG',false,false,false,'Mercury','A'],
    ['Adriel',[1,'LFrith'],'HG',false,false,false,'Mercury','B'],
    ['LFrith [HG]',[1,'LFrith'],'HG',true,false,false,'Mercury','D','2023-04-03-15',2.33,false,false,false],
    ['Metatron',[1,'Schwarzette'],'HG',false,false,false,'Mercury','A'],

    //Advanced Generation (Age)
    ['Uriel',[1,'Age-FX'],'SD',false,false,false,'Age','B'],
    ['Gamma Draconis',[1,'Danazine'],'HG',false,false,false,'Age','B'],

    //After Colony (Wing)
    ['Leo Army',[6,'Leo'],'LEO',false,false,false,'Wing','C','2021-10-03',37.42,false,'Builds/LeoArmy.html',false],
    ['South Park',[6,'Tallgeese','Epyon','Heavy Arms','Shenlong','Deathscythe','Sandrock'],'SD',
        false,false,false,'Wing','E','2021-06-05',54.42,true,'Builds/uniqueTemplates/SouthPark.html','Practice SDs','2021-06-21',models[6],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkStan.jpeg','South Park: Stan','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkKyle.jpeg','South Park: Kyle','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkCartman.jpeg','South Park: Cartman','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkKenny.jpeg','South Park: Kenny','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkButters.jpeg','South Park: Butters','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sparkWendy.jpeg','South Park: Wendy','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark02.jpeg','South Park','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark03.jpeg','South Park','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark05.jpeg','South Park','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark06.jpeg','South Park','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark07.jpeg','South Park','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark10.jpeg','South Park','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark11.jpeg','South Park','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark12.jpeg','South Park','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark13.jpeg','South Park','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark14.jpeg','South Park','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark15.jpeg','South Park','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark16.jpeg','South Park','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark17.jpeg','South Park','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark18.jpeg','South Park','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark19.jpeg','South Park','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark20.jpeg','South Park','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark21.jpeg','South Park','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark22.jpeg','South Park','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark23.jpeg','South Park','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark24.jpeg','South Park','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark25.jpeg','South Park','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark26.jpeg','South Park','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark01.jpeg','South Park','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark04.jpeg','South Park','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark08.jpeg','South Park','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/spark09.jpeg','South Park','img32']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/spark01.jpeg','Profile Photo: South Park'],
        'After finishing the Bel-Air, I realized there was still a lot I had to learn about air brush painting. So before moving on to the larger projects I decided to do something fun on a much more small scale in order to get a little more practice. Looking for a theme I was inspired by the boys of South Park, plus the Operation Meteor lineup.',
        false,false,false,false,true,false
    ],
    ['Gemini',[2,'Aquarius','Aquarius'],'SD',
        false,false,false,'Wing','E','2021-07-05',20.61,false,'Builds/Gundams/Gemini.html','Practice SDs','2022-01-24',models[40],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems01.jpeg','Traditional Blue Aquarius','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems02.jpeg','Custom Red Aquarius','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems03.jpeg','Both Red and Blue Aquarius','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems04.jpeg','Runners for both Red and Blue','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems05.jpeg','Assembling Red','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems06.jpeg','Assembling Blue','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems07.jpeg','Assembling Blue','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems08.jpeg','Assembling Blue','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems09.jpeg','Assembling Red','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems10.jpeg','Assembling Red','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems11.jpeg','Twin Gemini Units','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems12.jpeg','Gemini Red','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems13.jpeg','Gemini Red','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems14.jpeg','Gemini Blue','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems15.jpeg','Gemini Red','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems16.jpeg','Gemini Blue','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems17.jpeg','Gemini Blue','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems18.jpeg','Twin Gemini Units and Straight Build','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems19.jpeg','Twin Gemini Units','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems20.jpeg','Twin Gemini Units','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems21.jpeg','Twin Gemini Units','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems22.jpeg','Twin Gemini Units','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems23.jpeg','Twin Gemini Units','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems24.jpeg','Twin Gemini Units','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems25.jpeg','Twin Gemini Units','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems26.jpeg','Twin Gemini Units','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems27.jpeg','Twin Gemini Units','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems28.jpeg','Twin Gemini Units','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gems29.jpeg','Twin Gemini Units','img29']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gems28B.jpeg','Profile Photo: Gemini'],
        'This was a cool new discovery. I had never seen the Gundam Aquarius before. It\'s from the Gundam Wing universe but was not featured in the Wing anime. So when I first saw the Aquarius kit I was intrigued. The traditional Aquarius is blue but further down the rabbit hole I got I discovered cool fan art versions of it rendered red. Which is what led to the insipration behind this project. I decided to paint twin Aquarius unit one of each color, the traditional blue and the fan red.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-50-gundam-aquarius'],
            ['NewType','https://newtype.us/p/TOmRKyr7gHBbJij2bFtt/h/sdgg-050-gundam-aquarius']
        ],false,false,true,false
    ],
    ['Pontus',[1,'Aquarius'],'SD',false,false,false,'Wing','B',false,0,false,'Builds/Gundams/Pontus.html','Titans',false,models[40]],
    ['Alucard',[1,'Deathscythe Hell (TV Version'],'HG',
        false,true,false,'Wing','C','2023-08-02',2.82
    ],
    ['Epyon [RG]',[1,'Epyon'],'RG',true,false,false,'Wing','A'],
    ['Golden Ghidorah',[1,'Epyon'],'MG',false,false,false,'Wing','B'],
    ['Golden Ghidorah',[1,'Epyon'],'RG',false,false,false,'Wing','A'],
    ['Geminass 01',[1.5,'Geminass 01','Geminass Assault Mobility Booster Expansion Pack'],'HG',
        true,true,false,'Wing','E','2022-12-07',6.5,false,'Builds/PBandai/PBGeminassHG.html',false,'2023-04-27',models[44],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem01.jpeg','PB Geminass','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem02.jpeg','PB Geminass','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem03.jpeg','PB Geminass','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem04.jpeg','PB Geminass','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem05.jpeg','PB Geminass','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem06.jpeg','PB Geminass','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem07.jpeg','PB Geminass','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem08.jpeg','PB Geminass','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem09.jpeg','PB Geminass','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem10.jpeg','PB Geminass','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem11.jpeg','PB Geminass','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem12.jpeg','PB Geminass','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem13.jpeg','PB Geminass','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem14.jpeg','PB Geminass','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem15.jpeg','PB Geminass','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem16.jpeg','PB Geminass','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem17.jpeg','PB Geminass','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem18.jpeg','PB Geminass','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem19.jpeg','PB Geminass','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem20.jpeg','PB Geminass','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem21.jpeg','PB Geminass','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem22.jpeg','PB Geminass','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem23.jpeg','PB Geminass','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem24.jpeg','PB Geminass','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem25.jpeg','PB Geminass','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem26.jpeg','PB Geminass','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem27.jpeg','PB Geminass','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem28.jpeg','PB Geminass','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem29.jpeg','PB Geminass','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem30.jpeg','PB Geminass','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem31.jpeg','PB Geminass','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem32.jpeg','PB Geminass','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem33.jpeg','PB Geminass','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem34.jpeg','PB Geminass','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem35.jpeg','PB Geminass','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem36.jpeg','PB Geminass','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem37.jpeg','PB Geminass','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem38.jpeg','PB Geminass','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem39.jpeg','PB Geminass','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem40.jpeg','PB Geminass','img40']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbgem40.jpeg','Profile Photo: PB Geminass 01'],
        'P-Bandai: HG 1/144 GUNDAM GEMINASS 01 \'n\' HG 1/144 Geminass ASSAULT BOOSTER & HIGH MOBILITY UNIT',false,
        [
            ['P-Bandai: Geminass Unit','https://p-bandai.com/us/item/N2505896001004'],
            ['P-Bandai: Geminass Expansion Set','https://p-bandai.com/us/item/N2515196001003']
        ],false,false,true,false

    ],
    ['Major Tom',[1,'Geminass 01'],'SD',
        false,false,false,'Wing','E','2021-12-12',5.15,false,'Builds/Gundams/MajorTom.html','SD Rock','2023-04-10',models[44],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom01.jpeg','Major Tom','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom02.jpeg','Major Tom','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom03.jpeg','Major Tom','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom04.jpeg','Major Tom','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom05.jpeg','Major Tom','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom06.jpeg','Major Tom','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom07.jpeg','Major Tom','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom08.jpeg','Major Tom','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom09.jpeg','Major Tom','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom10.jpeg','Major Tom','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom11.jpeg','Major Tom','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/majortom09.jpeg','Profile Photo: Major Tom'],false,false,
        [
            ['Video','https://www.instagram.com/reel/Cq3Ywijx6jM/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-33-gundam-geminass'],
            ['NewType','https://newtype.us/p/Vov92a1PdDqQESssP8wz/h/sdgg-033-gundam-geminass-01']
        ],false,true,true,false
    ],
    ['Guerilla Arms',[1,'Heavy Arms'],'MG',
        false,false,false,'Wing','E','2021-04-03',60.07,false,'Builds/Gundams/GuerillaArms.html','Hand Paint','2021-05-22',models[1],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg01.JPG','Gundam Guerilla Arms','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg02.JPG','Gundam Guerilla Arms','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg03.JPG','Gundam Guerilla Arms','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg04.JPG','Gundam Guerilla Arms','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg05.JPG','Gundam Guerilla Arms','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg06.JPG','Gundam Guerilla Arms','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg07.JPG','Gundam Guerilla Arms','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg08.JPG','Gundam Guerilla Arms','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg09.JPG','Gundam Guerilla Arms','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg10.JPG','Gundam Guerilla Arms','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg11.JPG','Gundam Guerilla Arms','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg12.JPG','Gundam Guerilla Arms','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg13.JPG','Gundam Guerilla Arms','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg14.JPG','Gundam Guerilla Arms','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg15.JPG','Gundam Guerilla Arms','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg16.JPG','Gundam Guerilla Arms','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg17.JPG','Gundam Guerilla Arms','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg18.JPG','Gundam Guerilla Arms','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg19.JPG','Gundam Guerilla Arms','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg20.JPG','Gundam Guerilla Arms','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg21.JPG','Gundam Guerilla Arms','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg22.JPG','Gundam Guerilla Arms','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg23.JPG','Gundam Guerilla Arms','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg24.JPG','Gundam Guerilla Arms','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg25.JPG','Gundam Guerilla Arms','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg26.JPG','Gundam Guerilla Arms','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg27.JPG','Gundam Guerilla Arms','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg28.JPG','Gundam Guerilla Arms','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg29.JPG','Gundam Guerilla Arms','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg30.JPG','Gundam Guerilla Arms','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg31.JPG','Gundam Guerilla Arms','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg32.JPG','Gundam Guerilla Arms','img32']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gahamg32B.jpg','Profile Photo: Gundam Guerilla Arms'],
        'Camouflage. Commando. Jungle Warfare. Entirely hand brushed. First attempt at custom painting. Entirely Testors paints. Huge learning experience.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-gundam-heavyarms-ew-ver'],
            ['NewType','https://newtype.us/p/xyX3s81UEQTYgD2wfA49/h/mg-gundam-heavyarms-ew'],
            ['Amazon','https://a.co/d/03pIAks']
        ],false,false,true,'1/100'
    ],
    ['Phoebe',[1,'Maganac Corps'],'SD',false,false,false,'Wing','D','2022-04-11',8.42,false,'Builds/Phoebe.html','Titans'],
    ['Isaac',[1,'Proto-Zero'],'SD',
        false,false,false,'Wing','E','2023-02-06',14.14,false,'Builds/Gundams/Isaac.html','Israel','2023-05-10',models[31],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac01.jpeg','Gundam Isaac','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac02.jpeg','Gundam Isaac','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac03.jpeg','Gundam Isaac','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac04.jpeg','Gundam Isaac','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac05.jpeg','Gundam Isaac','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac06.jpeg','Gundam Isaac','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac07.jpeg','Gundam Isaac','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac08.jpeg','Gundam Isaac','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac09.jpeg','Gundam Isaac','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac10.jpeg','Gundam Isaac','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac11.jpeg','Gundam Isaac','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac12.jpeg','Gundam Isaac','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac13.jpeg','Gundam Isaac','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac14.jpeg','Gundam Isaac','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac15.jpeg','Gundam Isaac','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac16.jpeg','Gundam Isaac','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac17.jpeg','Gundam Isaac','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac18.jpeg','Gundam Isaac','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac19.jpeg','Gundam Isaac','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac20.jpeg','Gundam Isaac','img20']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/isaac10.jpeg','Profile Photo: Isaac'],
        'Practice build for the King David build.',false,
        [
            ['Video','https://www.instagram.com/reel/CsE6K7bNZv5/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-ex-standard-18-wing-gundam-zero?variant=40894574657733'],
            ['NewType','https://newtype.us/p/M1rp6lWHgYzNoxyJXOK0/h/sdex-standard-18-wing-gundam-zero']
        ],['King David'],false,true,false
    ],
    ['Jericho',[1,'Proto-Zero'],'HG',
        false,false,false,'Wing','E','2023-01-09',12.79,false,'Builds/Gundams/Jericho.html','Israel','2023-05-24',models[31],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho01.jpeg','Gundam Jericho','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho02.jpeg','Gundam Jericho','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho03.jpeg','Gundam Jericho','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho04.jpeg','Gundam Jericho','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho05.jpeg','Gundam Jericho','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho06.jpeg','Gundam Jericho','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho07.jpeg','Gundam Jericho','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho08.jpeg','Gundam Jericho','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho09.jpeg','Gundam Jericho','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho10.jpeg','Gundam Jericho','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho11.jpeg','Gundam Jericho','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho12.jpeg','Gundam Jericho','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho13.jpeg','Gundam Jericho','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho14.jpeg','Gundam Jericho','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho15.jpeg','Gundam Jericho','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho16.jpeg','Gundam Jericho','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho17.jpeg','Gundam Jericho','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho18.jpeg','Gundam Jericho','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho19.jpeg','Gundam Jericho','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho20.jpeg','Gundam Jericho','img20']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/jericho20.jpeg','Profile Photo: Jericho'],
        'I had been building the Zero in both SD and MG. So decided I wanted to build it in HG too. For this the color scheme was simple. I based the palette on fire.',false,
        [
            ['Video','https://www.instagram.com/reel/Csnfsy4xdt_/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgac-1-144-174-wing-gundam-zero'],
            ['NewType','https://newtype.us/p/RtKPoNDHiAAdbYkcDUAT/h/hgac-174-wing-gundam-zero']
        ],false,false,true,'1:144'
    ],
    ['King David',[1,'Proto-Zero'],'MG',
        false,false,false,'Wing','E','2023-03-08',52.11,true,'Builds/Gundams/KingDavid.html','Israel','2023-05-15',models[31],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid01.jpeg','King David','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid02.jpeg','King David','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid03.jpeg','King David','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid04.jpeg','King David','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid05.jpeg','King David','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid06.jpeg','King David','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid07.jpeg','King David','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid08.jpeg','King David','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid09.jpeg','King David','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid10.jpeg','King David','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid11.jpeg','King David','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid12.jpeg','King David','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid13.jpeg','King David','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid14.jpeg','King David','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid15.jpeg','King David','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid16.jpeg','King David','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid17.jpeg','King David','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid18.jpeg','King David','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid19.jpeg','King David','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid20.jpeg','King David','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid21.jpeg','King David','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid22.jpeg','King David','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid23.jpeg','King David','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid24.jpeg','King David','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid25.jpeg','King David','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid26.jpeg','King David','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid27.jpeg','King David','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid28.jpeg','King David','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid29.jpeg','King David','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid30.jpeg','King David','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid31.jpeg','King David','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid32.jpeg','King David','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid33.jpeg','King David','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid34.jpeg','King David','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid35.jpeg','King David','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid36.jpeg','King David','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid37.jpeg','King David','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid38.jpeg','King David','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid39.jpeg','King David','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid40.jpeg','King David','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid41.jpeg','King David','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid42.jpeg','King David','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid43.jpeg','King David','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid44.jpeg','King David','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid45.jpeg','King David','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid46.jpeg','King David','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid47.jpeg','King David','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid48.jpeg','King David','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid49.jpeg','King David','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid50.jpeg','King David','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid51.jpeg','King David','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid52.jpeg','King David','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid53.jpeg','King David','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid54.jpeg','King David','img54'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid55.jpeg','King David','img55'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid56.jpeg','King David','img56'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid57.jpeg','King David','img57'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid58.jpeg','King David','img58'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid59.jpeg','King David','img59'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid60.jpeg','King David','img60'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid61.jpeg','King David','img61'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid62.jpeg','King David','img62'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid63.jpeg','King David','img63'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid64.jpeg','King David','img64']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/kingdavid50.jpeg','Profile Photo: King David'],
        'To honor the recent Israeli Independence Day, built this to celebrate the long history and survival of the eternal Kingdom of Israel. Presenting, King David',false,
        [
            ['Video','https://www.instagram.com/reel/CsR33QhtEkN/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-wing-gundam-proto-zero-version-ew'],
            ['NewType','https://newtype.us/p/OpzEuISj9BHqaLR8dylH/h/mg-wing-gundam-proto-zero-ew']
        ],['Isaac'],false,true,'1:100'
    ],
    ['Metal Zero',[1,'Proto-Zero'],'SD',
        false,false,false,'Wing','E','2023-01-08',14.19,false,'Builds/Gundams/MetalZero.html',false,'2023-05-04',models[31],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero01.jpeg','Metal Proto-Zero','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero02.jpeg','Metal Proto-Zero','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero03.jpeg','Metal Proto-Zero','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero04.jpeg','Metal Proto-Zero','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero05.jpeg','Metal Proto-Zero','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero06.jpeg','Metal Proto-Zero','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero07.jpeg','Metal Proto-Zero','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero08.jpeg','Metal Proto-Zero','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero09.jpeg','Metal Proto-Zero','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero10.jpeg','Metal Proto-Zero','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero11.jpeg','Metal Proto-Zero','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero12.jpeg','Metal Proto-Zero','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero13.jpeg','Metal Proto-Zero','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero14.jpeg','Metal Proto-Zero','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero15.jpeg','Metal Proto-Zero','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero16.jpeg','Metal Proto-Zero','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero17.jpeg','Metal Proto-Zero','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero18.jpeg','Metal Proto-Zero','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero19.jpeg','Metal Proto-Zero','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero20.jpeg','Metal Proto-Zero','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero21.jpeg','Metal Proto-Zero','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero22.jpeg','Metal Proto-Zero','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero23.jpeg','Metal Proto-Zero','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero24.jpeg','Metal Proto-Zero','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero25.jpeg','Metal Proto-Zero','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero26.jpeg','Metal Proto-Zero','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero27.jpeg','Metal Proto-Zero','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero28.jpeg','Metal Proto-Zero','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero29.jpeg','Metal Proto-Zero','img29']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/metalzero18.jpeg','Profile Photo: Metal Zero'],
        'Before getting started on the King David project, I wanted to build the Zero but in its traditional colors. So painted this with all Testors shiny metallic paints. Presenting the Metal-Zero',false,
        [
            ['Video','https://www.instagram.com/reel/Cr1SFhjPliv/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-ex-standard-18-wing-gundam-zero?variant=40894574657733'],
            ['NewType','https://newtype.us/p/M1rp6lWHgYzNoxyJXOK0/h/sdex-standard-18-wing-gundam-zero']
        ],false,true,true,false
    ],
    ['Proto-Zero [SD]',[1,'Proto-Zero'],'SD',true,false,false,'Wing','E','2021-12-14',1.67,false,false,false,'2023-05-01'],
    ['Napoleon',[2,'Tallgeese','Ceramic Horse'],'MG',
        false,false,false,'Wing','B',false,0,false,'Builds/Gundams/Napoleon.html',false,false,models[47]
    ],
    ['St Dominic',[1,'Tallgeese'],'RG',
        false,false,false,'Wing','E','2021-12-10',19,false,'Builds/Gundams/StDominic.html',false,'2022-06-08',models[47],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic01.jpeg','St Dominic','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic02.jpeg','St Dominic','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic03.jpeg','St Dominic','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic04.jpeg','St Dominic','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic05.jpeg','St Dominic','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic06.jpeg','St Dominic','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic07.jpeg','St Dominic','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic08.jpeg','St Dominic','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic09.jpeg','St Dominic','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic10.jpeg','St Dominic','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic11.jpeg','St Dominic','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic12.jpeg','St Dominic','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic13.jpeg','St Dominic','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic14.jpeg','St Dominic','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic15.jpeg','St Dominic','img15']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/stdominic12.jpeg','Profile Photo: St Dominic'],
        'Inspired by the flag of the Dominican Republic, I figured the Tallgeese\'s body is modular enough I could easily partition it into four quadrants to make the DR flag. This was a test run for an undisclosed future project that I have in the works. But in the meantime, I present to you, Saint Dominic.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/rg-1-144-28-tallgeese-ew'],
            ['NewType','https://newtype.us/p/dD7AVRarBNfcX5yhevcx/h/rg-28-tallgeese-ew']
        ],false,false,true,'1:144'
    ],
    ['Fl\u00FCgel Sparkel',[1,'Tallgeese Fl\u00FCgel'],'MG',
        false,true,false,'Wing','B'
    ],
    ['Tallgeese Fl\u00FCgel',
        [1,'Tallgeese Fl\u00FCgel'],'MG',true,true,false,'Wing','D','2022-05-08',20.17,false,'Builds/PBTallgeeseFlugelMG.html',false
    ],
    ['Wild Wing',[1,'Wing Gundam'],'MG',
        false,false,false,'Wing','E','2021-07-06',60.48,true,'Builds/Gundams/WildWing.html',false,'2022-02-14',models[54],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing01.jpeg','Gundam Wild Wing','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing02.jpeg','Gundam Wild Wing','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing03.jpeg','Gundam Wild Wing','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing04.jpeg','Gundam Wild Wing','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing05.jpeg','Gundam Wild Wing','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing06.jpeg','Gundam Wild Wing','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing07.jpeg','Gundam Wild Wing','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing08.jpeg','Gundam Wild Wing','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing09.jpeg','Gundam Wild Wing','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing10.jpeg','Gundam Wild Wing','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing11.jpeg','Gundam Wild Wing','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing12.jpeg','Gundam Wild Wing','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing13.jpeg','Gundam Wild Wing','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing14.jpeg','Gundam Wild Wing','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing15.jpeg','Gundam Wild Wing','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing16.jpeg','Gundam Wild Wing','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing17.jpeg','Gundam Wild Wing','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing18.jpeg','Gundam Wild Wing','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing19.jpeg','Gundam Wild Wing','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing20.jpeg','Gundam Wild Wing','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing21.jpeg','Gundam Wild Wing','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing22.jpeg','Gundam Wild Wing','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing23.jpeg','Gundam Wild Wing','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing24.jpeg','Gundam Wild Wing','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing25.jpeg','Gundam Wild Wing','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing26.jpeg','Gundam Wild Wing','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing27.jpeg','Gundam Wild Wing','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing28.jpeg','Gundam Wild Wing','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing29.jpeg','Gundam Wild Wing','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing30.jpeg','Gundam Wild Wing','img30']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wildwing27.jpeg','Profile Photo: Gundam Wild Wing'],
        'So I happen to be a huge wings fan and an avid patron to the chain Buffalo Wild Wings, well up until they locked me out of my Blazing Rewards account over a year ago. They claim it\'s a computer glitch, but I\'m convinced they did it on purpose due to my high point balance I\'ve accumulated (like for real I really did use to eat there all the time; like three times a week). But that\'s enought about B-Dubs. At the time I had only done a few projects with the airbrush, but only much smaller models, SDs and HGs. But by this point I was finally starting to get the hang of it and feeling adventurous that I wanted to take on something larger but I had no idea what. Then one evenign I happened to be driving past the the local B-Dubs and I noticed the buffalo logo on their sign and it dawned on me... \'Wing Gundam\'... \'Buffalo Wild WINGS\', WING and WINGS. A la Gundam Wild Wing was born. This project has lots of special meaning to me. One, this was my first ever Master Grade kit I painted with the Airbrush. But the Wing Gundam itself was the first Gundam of them all I became introduced to which opened the whole Gundam Universe up to me. It holds great significance to me in my heart. In essance it\'s the Gundam for me that started it all. Therefore I am proud to present to you, the Gundam Wild Wing !!!',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-wing-gundam'],
            ['NewType','https://newtype.us/p/vsAyif43MfJi4I0Q8OZp/h/mg-xxxg-01w-wing-gundam']
        ],false,false,true,'1:100'
    ],
    ['Wing Gundam [RG]',[1,'Wing Gundam'],'RG',true,false,false,'Wing','E','2021-07',12.59,false,false,false,'2022-02-07'],
    ['Wing Zero Clear',[1,'Wing Zero'],'RG',
        true,true,false,'Wing','E','2021-11-10',6.15,false,'Builds/PBandai/PBZeroRG.html',false,'2022-04-19',models[32],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc01.jpeg','Premium-Bandai Wing Zero','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc02.jpeg','Premium-Bandai Wing Zero','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc03.jpeg','Premium-Bandai Wing Zero','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc04.jpeg','Premium-Bandai Wing Zero','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc05.jpeg','Premium-Bandai Wing Zero','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc06.jpeg','Premium-Bandai Wing Zero','img6']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzc03.jpeg','Profile Photo: P-Bandai Clear Wing Zero'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2390162001002']
        ],false,false,true,'1:144'
    ],
    ['Dark Zero',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Dark Zero',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Dark Zero',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Fiery Mothra',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Gold Dust Woman',[1,'Wing Zero'],'SD',
        false,false,false,'Wing','E','2021-09-09',8.37,false,'Builds/Gundams/GoldDustWoman.html','SD Rock','2022-02-01',models[32],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust01.jpeg','Gold Dust Woman','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust02.jpeg','Gold Dust Woman','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust03.jpeg','Gold Dust Woman','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust04.jpeg','Gold Dust Woman','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust05.jpeg','Gold Dust Woman','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust06.jpeg','Gold Dust Woman','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust07.jpeg','Gold Dust Woman','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust08.jpeg','Gold Dust Woman','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust09.jpeg','Gold Dust Woman','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust10.jpeg','Gold Dust Woman','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust11.jpeg','Gold Dust Woman','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust12.jpeg','Gold Dust Woman','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust13.jpeg','Gold Dust Woman','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust14.jpeg','Gold Dust Woman','img14']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/golddust14.jpeg','Profile Photo: Gold Dust Woman'],
        'Theme was traditional Zero in the traditional colors. But with Turbo Dork to make it shiny.','Susie, Iowa',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/13-wing-gundam-zero-ew-gundam-wing-endless-waltz-bandai-spirits-sdcs?variant=11912262615076'],
            ['NewType','https://newtype.us/p/5msfyhVsQRBrZ6bIzNBO/h/sdcs-13-wing-gundam-zero-ew']
        ],false,false,true
    ],
    ['Snow White',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Snow White',[1,'Wing Zero'],'RG',false,false,false,'Wing','B'],
    ['Snow White',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Wing Zero KA [MG]',[1,'Wing Zero','GFFMC Wings For MG Wing Zero'],'MG',true,false,false,'Wing','C','2022-06-05',10.83,false,false,false],
    ['Wing Zero [PG]',[1,'Wing Gundam'],'PG',true,false,false,'Wing','A'],
    ['Zero Traditional',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Zero Traditional',[1,'Wing Zero'],'RG',false,false,false,'Wing','B'],
    ['Zero Traditional',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],
    ['Zero EW (mg)',[1,'Wing Zero'],'MG',false,false,false,'Wing','B'],
    ['Zero EW (rg)',[1,'Wing Zero'],'RG',false,false,false,'Wing','A'],
    ['Zero EW (sd)',[1,'Wing Zero'],'SD',false,false,false,'Wing','A'],

    //After War (X)
    ['Gaebora',[1,'Airmaster'],'SD',
        false,false,false,'X','E','2021-10-06',5.51,false,'Builds/Gundams/Gaebora.html','Zelda','2022-03-28',models[38],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaeboraowl.jpeg','Gaebora the Owl','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora01.jpeg','Gaebora','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora02.jpeg','Gaebora','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora03.jpeg','Gaebora','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora04.jpeg','Gaebora','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora05.jpeg','Gaebora','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora06.jpeg','Gaebora','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora07.jpeg','Gaebora','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora08.jpeg','Gaebora','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora09.jpeg','Gaebora','img10'],
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/gaebora06.jpeg','Profile Photo: Gaebora'],
        'Primarily inspired by the owl from Legend of Zelda. Therefore primarily different shades of brown color palette to resemble an owl\'s plumage.','Leslie, Iowa',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-46-gundam-airmaster'],
            ['NewType','https://newtype.us/p/eqkYbPH6E7Ye0yiP2zZs/h/sdgg-046-gundam-airmaster']
        ],['Guapo'],false,true,false
    ],
    ['Biohazard',[1,'Double X'],'SD',
        false,false,false,'X','E','2022-08-08',5.83,false,'Builds/Gundams/Biohazard.html','Covid','2022-10-24',models[29],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard01.jpeg','Gundam Biohazard','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard02.jpeg','Gundam Biohazard','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard03.jpeg','Gundam Biohazard','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard04.jpeg','Gundam Biohazard','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard05.jpeg','Gundam Biohazard','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard06.jpeg','Gundam Biohazard','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard07.jpeg','Gundam Biohazard','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard08.jpeg','Gundam Biohazard','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard09.jpeg','Gundam Biohazard','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard10.jpeg','Gundam Biohazard','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/biohazard08.jpeg','Profile Photo: Gundam Biohazard'],
        'Practice build before painting the larger project Corona Virus',false,
        [
            ['Video','https://www.instagram.com/reel/CkHdoz0ttUg/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-44-gundam-double-x?variant=32323103522852'],
            ['NewType','https://newtype.us/p/Tj4bsQyOIopaVxWIEoty/h/sdgg-044-gundam-double-x']
        ],['Corona Virus'],true,true,false
    ],
    ['Charlie Daniels',[1,'Double X'],'SD',
        false,false,false,'X','E','2021-10-08',4.51,false,'Builds/Gundams/CharlieDaniels.html','SD Rock','2022-08-01',models[29],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels01.jpeg','Gundam Charlie Daniels','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels02.jpeg','Gundam Charlie Daniels','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels03.jpeg','Gundam Charlie Daniels','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels04.jpeg','Gundam Charlie Daniels','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels05.jpeg','Gundam Charlie Daniels','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels06.jpeg','Gundam Charlie Daniels','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels07.jpeg','Gundam Charlie Daniels','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels08.jpeg','Gundam Charlie Daniels','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels09.jpeg','Gundam Charlie Daniels','img9'],
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/charliedaniels09.jpeg','Profile Photo: Charlie Daniels'],false,'Lost somewhere in La-Vista, Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-44-gundam-double-x?variant=32323103522852'],
            ['NewType','https://newtype.us/p/Tj4bsQyOIopaVxWIEoty/h/sdgg-044-gundam-double-x']
        ],false,false,true,false
    ],
    ['Corona Virus',[1,'Double X'],'MG',
        false,false,false,'X','E','2022-09-05',36.08,false,'Builds/Gundams/Corona.html','Covid','2022-10-31',models[29],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covidmolecule01.jpeg','Covid Molecule','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covidmolecule02.jpeg','Covid Molecule','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid01.jpeg','Covid Gundam','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid02.jpeg','Covid Gundam','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid03.jpeg','Covid Gundam','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid04.jpeg','Covid Gundam','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid05.jpeg','Covid Gundam','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid06.jpeg','Covid Gundam','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid07.jpeg','Covid Gundam','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid08.jpeg','Covid Gundam','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid09.jpeg','Covid Gundam','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid10.jpeg','Covid Gundam','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid11.jpeg','Covid Gundam','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid12.jpeg','Covid Gundam','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid13.jpeg','Covid Gundam','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid14.jpeg','Covid Gundam','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid15.jpeg','Covid Gundam','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid16.jpeg','Covid Gundam','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid17.jpeg','Covid Gundam','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid18.jpeg','Covid Gundam','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid19.jpeg','Covid Gundam','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid20.jpeg','Covid Gundam','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid21.jpeg','Covid Gundam','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid22.jpeg','Covid Gundam','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid23.jpeg','Covid Gundam','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid24.jpeg','Covid Gundam','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid25.jpeg','Covid Gundam','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid26.jpeg','Covid Gundam','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid27.jpeg','Covid Gundam','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid28.jpeg','Covid Gundam','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid29.jpeg','Covid Gundam','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid30.jpeg','Covid Gundam','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid31.jpeg','Covid Gundam','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid32.jpeg','Covid Gundam','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid33.jpeg','Covid Gundam','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid34.jpeg','Covid Gundam','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid35.jpeg','Covid Gundam','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid36.jpeg','Covid Gundam','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid37.jpeg','Covid Gundam','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/covid38.jpeg','Covid Gundam','img40']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/covid36.jpeg','Profile Photo: Covid Gundam'],
        'The idea for this came up during the midst of the world wide covid-19 outbreak and lockdown. Figured since we\'re all locked down cause of it, might as well paint it. Only problem was, since it is a microscopic entity invisible to the naked eye, what exactly then does it look like in order to paint it? So I went through lots of photos online of people posting pictures of it from under the microscope. But even then that was a problem since even those photos are paritally an artistic rendering of what the machine imagines it to look like. Especially the colors. All color photos are human-picked colors chosen to represent how we imagine it to look blown up, rather than the actual color-profile of the virus. Which again left me with the problem of okay what colors should I even use. Anyhow, most the photos I noticed used bright neon colors to represent the thing, I\'m guessing so as to make it look more menacing. So I decided to go with fluorescent paints to try to reproduce that. On top of that I added some biohazard symbol decals and gemstone stickers to represent the 3D protrusions of the actual virus. Bit let down by this Gundam, don\'t think I really nailed the source material that well, but it is what it is.',false,
        [
            ['Video','https://www.instagram.com/reel/CkZnasMvN0U/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-gundam-double-x'],
            ['NewType','https://newtype.us/p/1g4oS0hH0BlePBYdpBFi/h/mg-gundam-double-x']
        ],['Biohazard'],true,true,false,'Covid Gundam'
    ],
    ['Double X [MG]',[1,'Double X'],'MG',true,false,false,'X','E','2022-09-10',7.58,false,false,false,'2022-10-10'],
    ['Double X [HG]',[1,'Double X'],'HG',true,false,false,'X','E','2022-08-10',2,false,false,false,'2022-09-26'],
    ['Guapo',[1,'Leopard'],'SD',
        false,false,false,'X','E','2021-10-05',6.2,false,'Builds/Gundams/Guapo.html',false,'2022-03-07',models[39],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo01.jpeg','Gundam Guapo','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo02.jpeg','Gundam Guapo','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo03.jpeg','Gundam Guapo','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo04.jpeg','Gundam Guapo','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo05.jpeg','Gundam Guapo','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo06.jpeg','Gundam Guapo','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo07.jpeg','Gundam Guapo','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo08.jpeg','Gundam Guapo','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo10.jpeg','Gundam Guapo','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo09.jpeg','Gundam Guapo','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/guapo07.jpeg','Profile Photo: Guapo'],
        'Inspired by my best friends new Border Collie puppy, Guapo.','Eric, Iowa',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-45-gundam-leopard'],
            ['NewType','https://newtype.us/p/4stOTt5HqaY9M2zZp01L/h/sdgg-045-gundam-leopard']
        ],['Gaebora'],false,true,false
    ],
    ['Iron Maiden',[1,'X Gundam'],'SD',
        false,false,false,'X','E','2021-10-07',4.83,false,'Builds/Gundams/IronMaiden.html','SD Rock','2023-03-20',models[41],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden01.jpeg','Iron Maiden','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden02.jpeg','Iron Maiden','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden03.jpeg','Iron Maiden','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden04.jpeg','Iron Maiden','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden05.jpeg','Iron Maiden','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden06.jpeg','Iron Maiden','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden07.jpeg','Iron Maiden','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden08.jpeg','Iron Maiden','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden09.jpeg','Iron Maiden','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden10.jpeg','Iron Maiden','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden11.jpeg','Iron Maiden','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/ironmaiden08.jpeg','Profile Photo: Iron Maiden'],
        'Theme was all different shades of metal paints. Iron, Copper, Brass, Silver, Chrome, Gold. I think there were more but I forget.','Madan, Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-29-gundam-x'],
            ['NewType','https://newtype.us/p/4uMTmwWtNpAim7uaDwZx/h/sdgg-029-gundam-x']
        ],false,false,true,false
    ],

    //Anno Domini (00)
    ['Umlaut \xD6\xD6',[1,'00 Gundam'],'SD',
        false,false,false,'00','E','2021-06-07',10.83,false,'Builds/Gundams/Umlaut.html','Practice SDs','2021-06-23',models[22],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut01.jpeg','Gundam Umlaut','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut02.jpeg','Gundam Umlaut','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut03.jpeg','Gundam Umlaut','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut04.jpeg','Gundam Umlaut','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut05.jpeg','Gundam Umlaut','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut06.jpeg','Gundam Umlaut','img6']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/umlaut02B.jpeg','Profile Photo: Gundam Umlaut'],
        'This model was strictly experimental as I was trying to get practice in on the airbrush. Since the name of the original gundam is the OO, Double O, I was being silly and figured why not add to dots on top of that and make it an umlaut.','Luke, Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-ex-standard-008-00-gundam-model-kit?variant=14706730692'],
            ['NewType','https://newtype.us/p/wterrtvejnOf2FWv8BIz/h/sdex-standard-08-00-gundam']
        ],false,false,true,false
    ],
    ['Dantalion',[1,'00 Raiser'],'SD',false,false,false,'00','B'],
    ['00 Raiser Trans-Am',[1,'00 Gundam Raiser'],'RG',
        true,true,false,'00','E','2021-12-09',12.67,false,'Builds/PBandai/PBooraiserRG.html',false,'2022-06-15',models[68],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais01.jpeg','PB Raiser Trans-Am','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais02.jpeg','PB Raiser Trans-Am','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais03.jpeg','PB Raiser Trans-Am','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais04.jpeg','PB Raiser Trans-Am','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais05.jpeg','PB Raiser Trans-Am','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais06.jpeg','PB Raiser Trans-Am','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais07.jpeg','PB Raiser Trans-Am','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais08.jpeg','PB Raiser Trans-Am','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais09.jpeg','PB Raiser Trans-Am','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais10.jpeg','PB Raiser Trans-Am','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais11.jpeg','PB Raiser Trans-Am','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pborais07.jpeg','Profile Photo: PB 00 Raiser Trans-Am'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2519708001001']
        ],false,false,true,'1:144'
    ],
    ['Silver \'n\' Gold',[1,'00 Gundam QAN[T]'],'RG',
        false,false,false,'00','B',false,0,false,'Builds/Gundams/SilverNGold.html',false,false,models[21]
    ],
    ['Thunder QAN[T]',[1,'00 Gundam QAN[T]'],'SD',
        false,false,false,'00','E','2021-06-12',11.68,true,'Builds/Gundams/ThunderQ.html','Practice SDs','2021-08-09',models[21],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq01.jpeg','Gundam Thunder-Q','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq02.jpeg','Gundam Thunder-Q','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq03.jpeg','Gundam Thunder-Q','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq04.jpeg','Gundam Thunder-Q','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq05.jpeg','Gundam Thunder-Q','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq06.jpeg','Gundam Thunder-Q','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq07.jpeg','Gundam Thunder-Q','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq08.jpeg','Gundam Thunder-Q','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq09.jpeg','Gundam Thunder-Q','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq10.jpeg','Gundam Thunder-Q','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq11.jpeg','Gundam Thunder-Q','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq12.jpeg','Gundam Thunder-Q','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq13.jpeg','Gundam Thunder-Q','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq14.jpeg','Gundam Thunder-Q','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq15.jpeg','Gundam Thunder-Q','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq16.jpeg','Gundam Thunder-Q','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq17.jpeg','Gundam Thunder-Q','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq18.jpeg','Gundam Thunder-Q','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq19.jpeg','Gundam Thunder-Q','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq20.jpeg','Gundam Thunder-Q','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq21.jpeg','Gundam Thunder-Q','img21']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/thunderq17.jpeg','Profile Photo: Thunder-QAN[T]'],
        'Gundam QANT is one of my favorites in the whole franchise. So much more futuristic than the prior installments of the Gundam universe. And the clear parts on this model were just begging for LEDs.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb364-gundam00-qant?variant=7146675077156'],
            ['NewType','https://newtype.us/p/8q0W5dRIDplgZOwCuz3T/h/sdbb-364-00-qan-t']
        ],false,true,true,false
    ],
    ['00 QAN[T] Trans-Am',[1,'00 Gundam QAN[T]'],'RG',
        true,true,false,'00','E','2022-01-09',8.33,false,'Builds/PBandai/PBOOQRG.html',false,'2022-07-28',models[21],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear01.jpeg','PB 00QANT','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear02.jpeg','PB 00QANT','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear03.jpeg','PB 00QANT','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear04.jpeg','PB 00QANT','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear05.jpeg','PB 00QANT','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear06.jpeg','PB 00QANT','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear07.jpeg','PB 00QANT','img7']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbqantclear05.jpeg','Profile Photo: PB Clear QAN[T]'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2519709001001'],
        ],false,false,true,'1:144'
    ],
    ['Nena',[1,'Exia'],'SD',
        false,false,false,'00','D','2021-12-07',4.95,false,'Builds/Gundams/Nena.html','SD Rock','',models[67]
    ],
    ['Exia Trans-Am',[1,'Exia'],'RG',
        true,true,false,'00','E','2021-12-08',6.58,false,'Builds/PBandai/PBExiaRG.html',false,'2022-05-31',models[67],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex01.jpeg','PB Exia','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex02.jpeg','PB Exia','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex03.jpeg','PB Exia','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex04.jpeg','PB Exia','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex05.jpeg','PB Exia','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex06.jpeg','PB Exia','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex07.jpeg','PB Exia','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex08.jpeg','PB Exia','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex09.jpeg','PB Exia','img9']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbex09.jpeg','Profile Photo: PB Exia Trans-Am'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2519710001001']
        ],false,false,true,'1:144'
    ],
    ['Federation Trooper',[1,'Flag'],'HG',
        false,false,false,'00','C','2023-08-06',0.48,false,'Builds/Gundams/S_DarkSuit.html','Metroid'
    ],
    ['Harute (Final Battle)',[1,'Harute'],'HG',
        true,true,false,'00','E','2022-03-08',5.75,false,'Builds/PBandai/PBHaruteFinalHG.html',false,'2022-11-21',models[70],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb01.jpeg','PB Harute','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb02.jpeg','PB Harute','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb03.jpeg','PB Harute','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb04.jpeg','PB Harute','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb05.jpeg','PB Harute','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb06.jpeg','PB Harute','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb07.jpeg','PB Harute','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb08.jpeg','PB Harute','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb09.jpeg','PB Harute','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb10.jpeg','PB Harute','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbharfb05.jpeg','Profile Photo: PB Harute'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2570543001001']
        ],false,false,true,'1:144'
    ],
    ['Virtue/Nadleeh [MG]',[3,'Virtue','Nadlee','VirtueStand'],'MG',
        true,false,false,'00','E','2022-02',20.08,true,'Builds/Specials/VirtueNadleeStand.html',false,'2023-01-16',models[77],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt01.jpeg','Nadleeh','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt02.jpeg','Nadleeh','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt03.jpeg','Nadleeh','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt04.jpeg','Nadleeh','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt05.jpeg','Nadleeh','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt06.jpeg','Nadleeh','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt07.jpeg','Nadleeh','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt08.jpeg','Nadleeh','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt09.jpeg','Nadleeh','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt10.jpeg','Nadleeh','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt11.jpeg','Virtue','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt12.jpeg','Virtue','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt13.jpeg','Virtue','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt14.jpeg','Virtue','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt15.jpeg','Virtue','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt16.jpeg','Virtue','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt17.jpeg','Virtue','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt18.jpeg','Virtue','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt19.jpeg','Virtue','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt20.jpeg','Virtue','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt21.jpeg','Nadleeh & Virtue','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt22.jpeg','Nadleeh & Virtue','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt23.jpeg','Nadleeh & Virtue','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt24.jpeg','Nadleeh & Virtue','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt25.jpeg','Nadleeh & Virtue','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt26.jpeg','Nadleeh & Virtue','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt27.jpeg','Nadleeh & Nadleeh','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt28.jpeg','Unveil of Nadleeh','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt29.jpeg','Unveil of Nadleeh','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt30.jpeg','Unveil of Nadleeh','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt31.jpeg','Unveil of Nadleeh','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt32.jpeg','Unveil of Nadleeh','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt33.jpeg','Unveil of Nadleeh','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt34.jpeg','Unveil of Nadleeh','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt35.jpeg','Unveil of Nadleeh','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt36.jpeg','Unveil of Nadleeh','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt37.jpeg','Unveil of Nadleeh','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt38.jpeg','Nadleeh & Virtue','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt39.jpeg','Virtue','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt40.jpeg','Virtue','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt41.jpeg','Unveil of Nadleeh','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt42.jpeg','Unveil of Nadleeh','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt43.jpeg','Unveil of Nadleeh','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt44.jpeg','Unveil of Nadleeh','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt45.jpeg','Unveil of Nadleeh','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt46.jpeg','Unveil of Nadleeh','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt47.jpeg','Virtue','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt48.jpeg','Unveil of Nadleeh','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt49.jpeg','Nadleeh & Virtue','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt50.jpeg','Nadleeh & Virtue','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt51.jpeg','Nadleeh & Virtue','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt53.jpeg','Virtue','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt52.jpeg','Birth of Nadleeh','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/birthofvenus_Large.jpeg','Birth of Venus','img54']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/nadvirt48B.jpeg','Profile Photo: Nadleeh/Virtue'],
        'I normally do not post non-PB straight builds but this one is of exception. The Gundam Virtue is a unique gundam in that it has a second unit Gundam Nadleeh stored inside it. Or in other words, Gundam Virtue is really Gundam Nadleeh with aditional armor mounted on top. So to represent both I purchased two kits and built both gundams so I could display them side-by-side. Then few months later a third party vendor created a display stand designed to exhibit the Nadleeh with the Virtue Armor coming off, so as to create the transitioning/unveiling of the Nadleeh. Almost like a Botticelli Birth of Venus effect. Which I had to show that off. So for those reasons I am breaking my no straight builds rule, so enjoy.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-gundam-virtue'],
            ['NewType','https://newtype.us/p/Qk1wgMICQffG5UlLTyfD/h/mg-gn-005-gundam-virtue'],
            ['Virtue Display Stand','https://www.usagundamstore.com/products/mg-virtue-display-stand']
        ],false,false,true,'1:100','Birth of Nadleeh','Nadleeh / Virtue','Birth of Nadleeh'
    ],
    ['Zabanya (Final Battle)',[1,'Zabanya'],'HG',
        true,true,false,'00','E','2022-03-09',3,false,'Builds/PBandai/PBZabanyaFinalHG.html',false,'2022-11-07',models[71],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab01.jpeg','PB Zabanya','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab02.jpeg','PB Zabanya','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab03.jpeg','PB Zabanya','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab04.jpeg','PB Zabanya','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab05.jpeg','PB Zabanya','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab06.jpeg','PB Zabanya','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab07.jpeg','PB Zabanya','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab08.jpeg','PB Zabanya','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab09.jpeg','PB Zabanya','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab10.jpeg','PB Zabanya','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbzab07.jpeg','Profile Photo: PB Zabanya'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2570542001001']
        ],false,false,true,'1:144'
    ],

    //Correct Century (Turn A)
    ['John Wayne',[1,'Turn-A'],'SD',
        false,false,false,'TurnA','E','2021-09-10',6.62,false,'Builds/Gundams/JohnWayne.html','SD Rock','2023-02-13',models[43],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne01.jpeg','John Wayne','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne02.jpeg','John Wayne','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne03.jpeg','John Wayne','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne04.jpeg','John Wayne','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne05.jpeg','John Wayne','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne06.jpeg','John Wayne','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne07.jpeg','John Wayne','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne08.jpeg','John Wayne','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne09.jpeg','John Wayne','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne10.jpeg','John Wayne','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne11.jpeg','John Wayne','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne12.jpeg','John Wayne','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne13.jpeg','John Wayne','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne14.jpeg','John Wayne','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne15.jpeg','John Wayne','img15']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/johnwayne09.jpeg','Profile Photo: John Wayne'],false,false,
        [
            ['Video','https://www.instagram.com/reel/CooWAkZs4hO/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gg-40-turn-a-gundam'],
            ['NewType','https://newtype.us/p/xLxRrK7NiCCOUyI2ZRrj/h/sdgg-040-turn-a-gundam']
        ],false,true,true,false
    ],

    //Cosmic Century (Seed) 
    ['Fluorescent',[1,'Aegis'],'SD',
        false,false,false,'Seed','E','2021-06-08',9.94,false,'Builds/Gundams/Fluorescent.html','Practice SDs','2021-06-24',models[19],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor01.jpeg','Fluorescent Gundam','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor02.jpeg','Fluorescent Gundam','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor03.jpeg','Fluorescent Gundam','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor04.jpeg','Fluorescent Gundam','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor05.jpeg','Fluorescent Gundam','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor06.jpeg','Fluorescent Gundam','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor07.jpeg','Fluorescent Gundam','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor08.jpeg','Fluorescent Gundam','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor09.jpeg','Fluorescent Gundam','img9']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/fluor06B.jpeg','Profile Photo: Fluorescent Gundam'],
        'No particalur theme or inspiration here. This kit was used exclusively as a blank canvas to test out different shades of fluorescent paints on. Long story short I\'ve yet to have any luck on fluorescent colors. At least this model came together well though.',
        'Ankita, Wisconsin',
        [
            ['USA Gundm Store','https://www.usagundamstore.com/products/bb-sd-aegis-gundam?variant=12995582404'],
            ['NewType','https://newtype.us/p/f1D4oTlneK6t2H8RfSWn/h/sdgg-261-gat-x303-aegis-gundam']
        ],false,false,true,false
    ],
    ['Bald Eagle',[1,'Astray Blue Frame'],'MG',false,false,false,'Seed','B'],
    ['Raphael',[1,'Astray Gold Frame'],'SD',false,false,false,'Seed','B'],
    ['Oowashi Akatsuki [HG]',[1,'Akatsuki, Oowsahi'],'HG',true,false,false,'Seed','E','2021-12-18',2.67,false,false,false,'2022-04-26'],
    ['Rising Sun',[1,'Akatsuki, Oowashi'],'HG',
        false,false,false,'Seed','E','2021-11-05',17.28,false,'Builds/Gundams/RisingSun.html',false,'2022-04-28',models[57],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun01.jpeg','Akatsuki Oowashi Straight Build','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun02.jpeg','Akatsuki Oowashi Straight Build','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun03.jpeg','Akatsuki Oowashi Straight Build','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun04.jpeg','Akatsuki Oowashi Straight Build','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun05.jpeg','Akatsuki Oowashi Straight Build','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun06.jpeg','Akatsuki Oowashi Straight Build','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun07.jpeg','Akatsuki Oowashi Straight Build','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun08.jpeg','Akatsuki Oowashi Straight Build','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun09.jpeg','Akatsuki Oowashi Straight Build','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun10.jpeg','Akatsuki Oowashi Straight Build','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun11.jpeg','Akatsuki Oowashi Straight Build','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun12.jpeg','Oowashi Flight Unit Straight Build','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun13.jpeg','Gundam Rising Sun','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun14.jpeg','Gundam Rising Sun','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun15.jpeg','Gundam Rising Sun','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun16.jpeg','Gundam Rising Sun','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun17.jpeg','Gundam Rising Sun','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun18.jpeg','Gundam Rising Sun','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun19.jpeg','Gundam Rising Sun','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun20.jpeg','Gundam Rising Sun','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun21.jpeg','Rising Sun Flight Unit','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun22.jpeg','Rsing Sun Flight Unit','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun23.jpeg','Rising Sun and Straight Build','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun24.jpeg','Gundam Rising Sun','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun25.jpeg','Gundam Rising Sun','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun26.jpeg','Rising Sun and Straight Build','img26']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/risingsun19.jpeg','Profile Photo: Gundam Rising Sun'],
        'So the defining factor of the Akatsuki in the show has always been its shiny goldness. Which no lie is really, really cool and inspired me to want to build this for that factor alone. I originally had done just a straight build of this as is, out of the box. But I was not impressed by the cheap chrome of the plastic. It just did not live up to the hype of the tv show. not oing to lie I was a bit let down. Therefore I decided to build it again but this time paint it with the shiniest gold paint I could fine, just to make it live up to the legend. And for that I used Turbo Dork paint, All That Glitters. And it definitely was a huge improvement over the plastic out of the box. I definitely like mine way better.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hg-1-144-40-oowashi-akatsuki-gunda'],
            ['NewType','https://newtype.us/p/TVltE6umkrkynKYjjE0a/h/hgseed-40-orb-01-owashi-akatsuki-gundam'],
            ['Turbo Dork: All That Glitters','https://turbodork.com/products/all-that-glitters']
        ],false,false,true,'1:144',false,'Akatsuki: Oowashi Pack'
    ],
    ['King Mars',[1,'Akatsuki, Shiranui'],'HG',
        false,false,false,'Seed','D','2022-05-06',13.67,false,'Builds/Gundams/KingMars.html','Planets','',models[57]
    ],
    ['Archangel',[2,'Archangel','Archangel'],'Ship',
        false,false,false,'Seed','E','2021-08-06',76.63,false,'Builds/Ships/Archangel.html',false,'2022-01-10',models[15],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel01.jpeg','Battleship Archangel','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel02.jpeg','Battleship Archangel','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel03.jpeg','Battleship Archangel','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel04.jpeg','Battleship Archangel','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel06.jpeg','Battleship Archangel','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel07.jpeg','Battleship Archangel','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel08.jpeg','Battleship Archangel','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel09.jpeg','Battleship Archangel','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel10.jpeg','Battleship Archangel','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel11.jpeg','Battleship Archangel','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel12.jpeg','Battleship Archangel','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel13.jpeg','Battleship Archangel','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel14.jpeg','Battleship Archangel','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel15.jpeg','Battleship Archangel','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel16.jpeg','Battleship Archangel','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel17.jpeg','Battleship Archangel','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel18.jpeg','Battleship Archangel','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel19.jpeg','Battleship Archangel','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel20.jpeg','Battleship Archangel','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel21.jpeg','Battleship Archangel','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel22.jpeg','Battleship Archangel','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel23.jpeg','Battleship Archangel','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel24.jpeg','Battleship Archangel','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel25.jpeg','Battleship Archangel','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel26.jpeg','Battleship Archangel','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel27.jpeg','Battleship Archangel','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel28.jpeg','Battleship Archangel','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel29.jpeg','Battleship Archangel','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel30.jpeg','Battleship Archangel','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel31.jpeg','Battleship Archangel','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel32.jpeg','Battleship Archangel','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel33.jpeg','Battleship Archangel','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel34.jpeg','Battleship Archangel','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel35.jpeg','Battleship Archangel','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel36.jpeg','Battleship Archangel','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel37.jpeg','Battleship Archangel','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel38.jpeg','Battleship Archangel','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel39.jpeg','Battleship Archangel','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel40.jpeg','Battleship Archangel','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel41.jpeg','Battleship Archangel','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel42.jpeg','Battleship Archangel','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel43.jpeg','Battleship Archangel','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel44.jpeg','Battleship Archangel','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel45.jpeg','Battleship Archangel','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel46.jpeg','Battleship Archangel','img45']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/archangel21.jpeg','Profile Photo: Archangel'],
        'Had a lot of fun building the Eternal that I just had to build another ship model. Archangel has always been a huge favorite of mine in the Gundam series so it just seemed natural to build that next, as well as a must. The kit has two modes, weapons and launch catapults extended and withdrawn. I did not want to risk damaging the model by tinkering around with chaning it in between modes so I wound up resorting to building two models of the Archangel, one in each mode. There is also a third option in the kit to swap the parts around to build the Dominion but I skipped that for a future build. But anyhow both my Archangels came out looking great. I\'m so proud of this buidl.',false,false,['Eternal','Dominion'],false,true,'1:1700'
    ],
    ['Dominion',[1,'Archangel'],'Ship',
    false,false,false,'Seed','E','2021-09-07',21.87,false,'Builds/Ships/Dominion.html',false,'2022-01-17',models[16],
    [
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion01.jpeg','Battleship Dominion','img1'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion02.jpeg','Battleship Dominion','img2'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion03.jpeg','Battleship Dominion','img3'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion04.jpeg','Battleship Dominion','img4'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion05.jpeg','Battleship Dominion','img5'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion06.jpeg','Battleship Dominion','img6'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion07.jpeg','Battleship Dominion','img7'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion08.jpeg','Battleship Dominion','img8'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion09.jpeg','Battleship Dominion','img9'],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion10.jpeg','Battleship Dominion','img10'],
    ],
    ['https://hosting.photobucket.com/images/i/lesaintdumech/dominion05.jpeg','Profile Photo: Dominion'],
    'I originally was not planning to build this. But my both my Archangels came out so fantastic and the fact the kit had the parts to build the Dominion just kept weighing on my mind that eventually I broke down and surrendered to the temptation and had to buy me a third Archangel kit. Besides, you cannot have the Archangel without staging its final dual with the Dominion. Therefore now preseneting to you, the Dominino.',false,false,['Archangel'],false,true,'1:1700'
    ],
    ['Canis Beta',[1,'BuCUE'],'HG',false,false,false,'Seed','A'],
    ['Canis Gamma',[1,'BuCUE'],'HG',false,false,false,'Seed','A'],
    ['Urban Commando',[1,'Buster'],'MG',false,false,false,'Seed','B'],
    ['Calamitous Godzilla',[1,'Calamity'],'FM',false,false,false,'Seed','B'],
    ['Armageddon',[2.5,'Dagger L','Dagger L','PB Dagger Expansion Pack'],'HG',
        false,true,false,'Seed','E','2022-03-06',28.5,false,'Builds/uniqueTemplates/Armageddon.html',false,'2022-05-23',models[25],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon12.jpeg','Oberon','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon01.jpeg','Project Armageddon','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon02.jpeg','Project Armageddon','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon03.jpeg','Project Armageddon','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon04.jpeg','Project Armageddon','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon05.jpeg','Project Armageddon','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon06.jpeg','Project Armageddon','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon07.jpeg','Project Armageddon','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon08.jpeg','Project Armageddon','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon09.jpeg','Project Armageddon','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon10.jpeg','Project Armageddon','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon11.jpeg','Project Armageddon','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon12.jpeg','Project Armageddon','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon13.jpeg','Project Armageddon','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon14.jpeg','Project Armageddon','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon15.jpeg','Project Armageddon','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon16.jpeg','Project Armageddon','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon17.jpeg','Project Armageddon','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon18.jpeg','Project Armageddon','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon19.jpeg','Project Armageddon','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon20.jpeg','Project Armageddon','img21']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/parmageddon17.jpeg','Profile Photo: Armageddon'],
        'One of the coolest things I love about the SEED universe is the versatility of the mobile suits in how they all can have added equipment packs added on to enhance their features. However very few of these packs have been made as actual add-on model kits to add to the current model kit lineup. So when I saw that P-Bandai was releasing the Dagger L expansion pack I just had to get it and paint it. Included is the Doppelhorn Dual Recoilless Cannon, which is the very long barrel guns mounted on the Dagger\'s shoulders. And also included is the Multi-Launcher pack which is the large square box-like structure that houses the long range nuclear ICBMs stored inside that were used to vaporize the Boaz military asteroid in the final story arc of Gundam SEED. To mount the two units I build two new Dagger Ls which I painted identical my previous project King Leir. Bringing my Dagger count now up to three: King Leir and his two daughters Gonorilla and Regan. Also included is Oberon, acting as their squadron commander.',false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2563436001002']
        ],['Oberon','King Leir','PB Strike Daggers'],false,true,'1:144'
    ],
    ['King Leir',[1,'Dagger L'],'HG',
        false,false,false,'Seed','E','2021-06-10',14.09,false,'Builds/Gundams/KingLeir.html',false,'2021-06-26',models[23],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir01.jpeg','King Leir','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir02.jpeg','King Leir','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir03.jpeg','King Leir','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir04.jpeg','King Leir','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir05.jpeg','King Leir','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir06.jpeg','King Leir','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir07.jpeg','King Leir','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir08.jpeg','King Leir','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir09.jpeg','King Leir','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir10.jpeg','King Leir','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir11.jpeg','King Leir','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir12.jpeg','King Leir','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir13.jpeg','King Leir','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir14.jpeg','King Leir','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir15.jpeg','King Leir','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir16.jpeg','King Leir','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir17.jpeg','King Leir','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir18.jpeg','King Leir','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir19.jpeg','King Leir','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir20.jpeg','King Leir','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir21.jpeg','King Leir','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir22.jpeg','King Leir','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir23.jpeg','King Leir','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir24.jpeg','King Leir','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir25.jpeg','King Leir','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir26.jpeg','King Leir','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir27.jpeg','King Leir','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir28.jpeg','King Leir','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir29.jpeg','King Leir','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir30.jpeg','King Leir','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir31.jpeg','King Leir','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir32.jpeg','King Leir','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir33.jpeg','King Leir','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir34.jpeg','King Leir','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/leir35.jpeg','King Leir','img35']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/leir01B.jpeg','Profile Photo: King Leir'],
        'This was my first attempt at painting a larger model than an SD with the airbrush. I stuck to mostly the traditional desgn but swapped the white portions with steel and aluminum to make it a little more darker. Also brightened the purple and swapped the blue with a steel blue. After it was finsiehd, not gonna lie, I liked my design way better than the original.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgce-1-144-247-dagger-l'],
            ['NewType','https://newtype.us/p/V3s94PjelBrA0T06Q673/h/hgce-237-gat-o2l2-dagger-l']
        ],['Armageddon','Samus: Varia Suit','Malphas'],false,true,'1:144'
    ],
    ['Samus: Dark Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08-02',1.95,false,'Builds/Gundams/S_DarkSuit.html','Metroid','',models[23]
    ],
    ['Samus: Fusion Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08',1.08,false,'Builds/Gundams/S_FusionSuit.html','Metroid','',models[23]
    ],
    ['Samus: Gravity Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08-02',6.07,false,'Builds/Gundams/S_GravitySuit.html','Metroid','',models[23]
    ],
    ['Samus: Light Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08',0.7,false,'Builds/Gundams/S_LightSuit.html','Metroid','',models[23]
    ],
    ['Samus: PED Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08-06',3,false,'Builds/Gundams/S_PhazonSuit.html','Metroid','',models[23]
    ],
    ['Samus: Phazon Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-08-06',1.85,false,'Builds/Gundams/S_PhazonSuit.html','Metroid','',models[23]
    ],
    ['Samus: Varia Suit',[1,'Dagger L'],'HG',
        false,false,false,'Seed','C','2023-06-13',7.75,false,'Builds/Gundams/S_VariaSuit.html','Metroid','',models[23],
        [
            []
        ],
        [],
        '',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgce-1-144-247-dagger-l'],
            ['NewType','https://newtype.us/p/V3s94PjelBrA0T06Q673/h/hgce-237-gat-o2l2-dagger-l']
        ],['Armageddon','King Leir','PB Strike Daggers'],false,false,'1:144'
    ],
    ['Charizard',[1,'Destiny'],'MG',false,false,false,'Seed','B'],
    ['Charizard X',[1,'Destiny'],'SD',
        false,false,false,'Seed','E','2021-10-10',8.13,false,'Builds/Gundams/CharizardX.html',false,'2022-05-16',models[33],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charizardx.jpeg','Charizard X','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx01.jpeg','Charizard X','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx02.jpeg','Charizard X','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx03.jpeg','Charizard X','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx04.jpeg','Charizard X','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx05.jpeg','Charizard X','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx06.jpeg','Charizard X','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/charx07.jpeg','Charizard X','img8']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/charx07.jpeg','Profile Photo: Charizard X'],
        'Made this as a Christmas present for a younger family member. Based the design after the Pokemon \'Charizard X\'.','Luke, Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-ex-standard-009-destiny-gundam'],
            ['NewType','https://newtype.us/p/rvLzrTQISdeTSzQRyffz/h/sdex-standard-09-zgmf-x42s-destiny-gundam']
        ],false,false,true
    ],
    ['Iapetus',[1,'Destiny'],'SD',false,false,false,'Seed','B'],
    ['Thin Blue Line',[2,'Duel Gundam','Duel Gundam Assault Shroud'],'MG',false,false,false,'Seed','B'],
    ['Eclipse ???',[1,'Eclipse'],'MG',false,false,false,'Seed','B'],
    ['Maneuver Striker',[1.5,'Eclipse','Eclipse Maneuver Striker'],'MG',
        true,true,false,'Seed','E','2022-02',17.75,false,'Builds/PBandai/PBEclipseMG.html',false,'2023-01-30',models[73],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike01.jpeg','PB Maneuver Striker','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike02.jpeg','PB Maneuver Striker','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike03.jpeg','PB Maneuver Striker','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike04.jpeg','PB Maneuver Striker','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike05.jpeg','PB Maneuver Striker','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike06.jpeg','PB Maneuver Striker','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike07.jpeg','PB Maneuver Striker','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike08.jpeg','PB Maneuver Striker','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike09.jpeg','PB Maneuver Striker','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike10.jpeg','PB Maneuver Striker','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike11.jpeg','PB Maneuver Striker','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike12.jpeg','PB Maneuver Striker','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike13.jpeg','PB Maneuver Striker','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike14.jpeg','PB Maneuver Striker','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike15.jpeg','PB Maneuver Striker','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike16.jpeg','PB Maneuver Striker','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike17.jpeg','PB Maneuver Striker','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike18.jpeg','PB Maneuver Striker','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike19.jpeg','PB Maneuver Striker','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike20.jpeg','PB Maneuver Striker','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike21.jpeg','PB Maneuver Striker','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike22.jpeg','PB Maneuver Striker','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike23.jpeg','PB Maneuver Striker','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike24.jpeg','PB Maneuver Striker','img24']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbmanstrike03.jpeg','Profile Photo: Maneuver Striker'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2583175001001']
        ],false,false,true,'1:100'
    ],
    ['Eternal',[1,'Eternal'],'Ship',
        false,false,false,'Seed','E','2021-08-05',24.1,false,'Builds/Ships/Eternal.html',false,'2022-01-03',models[7],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal01.jpeg','Warship Eternal','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal02.jpeg','Warship Eternal','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal03.jpeg','Warship Eternal','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal04.jpeg','Warship Eternal','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal05.jpeg','Warship Eternal','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal06.jpeg','Warship Eternal','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal07.jpeg','Warship Eternal','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal08.jpeg','Warship Eternal','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal09.jpeg','Warship Eternal','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal10.jpeg','Warship Eternal','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal11.jpeg','Warship Eternal','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal12.jpeg','Warship Eternal','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal13.jpeg','Warship Eternal','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal14.jpeg','Warship Eternal','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal15.jpeg','Warship Eternal','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal16.jpeg','Warship Eternal','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal17.jpeg','Warship Eternal','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal18.jpeg','Warship Eternal','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal19.jpeg','Warship Eternal','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal20.jpeg','Warship Eternal','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal21.jpeg','Warship Eternal','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal22.jpeg','Warship Eternal','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal23.jpeg','Warship Eternal','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal24.jpeg','Warship Eternal','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal25.jpeg','Warship Eternal','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal26.jpeg','Warship Eternal','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal27.jpeg','Warship Eternal','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal28.jpeg','Warship Eternal','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal29.jpeg','Warship Eternal','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal30.jpeg','Warship Eternal','img30']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/eternal28.jpeg','Profile Photo: Eternal'],
        'This was my first ship buid. And I am awfully quite attached to it. At the time I was in a Gundam Seed kick and rewatching that series so the ships and machines from that saga was on my mind. Seed is probably home to all my favorite vessels throughout the entire Gundam saga. Whether it be Eternal or Archangel they\'re all so cool. And Eternal is by my far the coolest one. For this I was trying to be as realistic and close to the source material as possible. So rather than do a custom design I painted it exactly as how it appears in the anime. So expect lots of pink and purples... Also..., it has got to be pointed out how cool and cute the METEOR units in this kit are. By far out of the whole ship, the METEORs I\'m most proud of. Inspired by these, I am going to be doing a much larger scale P-Bandai meteor kit paint real soon.',
        false,false,['Archangel'],false,true,'1:1700'
    ],
    ['Orga',[1,'Forbidden'],'FM',false,false,false,'Seed','A'],
    ['Anthem',[1,'Freedom'],'MG',
        false,false,false,'Seed','E','2022-05-05',73.16,true,'Builds/Gundams/Anthem.html','America','2022-07-04',models[14],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth01.jpeg','Anthem Gundam','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth02.jpeg','Anthem Gundam','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth03.jpeg','Anthem Gundam','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth04.jpeg','Anthem Gundam','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth05.jpeg','Anthem Gundam','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth06.jpeg','Anthem Gundam','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth07.jpeg','Anthem Gundam','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth08.jpeg','Anthem Gundam','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth09.jpeg','Anthem Gundam','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth10.jpeg','Anthem Gundam','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth11.jpeg','Anthem Gundam','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth12.jpeg','Anthem Gundam','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth13.jpeg','Anthem Gundam','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth14.jpeg','Anthem Gundam','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth15.jpeg','Anthem Gundam','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth16.jpeg','Anthem Gundam','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth17.jpeg','Anthem Gundam','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth18.jpeg','Anthem Gundam','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth19.jpeg','Anthem Gundam','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth20.jpeg','Anthem Gundam','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth21.jpeg','Anthem Gundam','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth22.jpeg','Anthem Gundam','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth23.jpeg','Anthem Gundam','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth24.jpeg','Anthem Gundam','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth25.jpeg','Anthem Gundam','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth26.jpeg','Anthem Gundam','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth27.jpeg','Anthem Gundam','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth28.jpeg','Anthem Gundam','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth29.jpeg','Anthem Gundam','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth30.jpeg','Anthem Gundam','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth31.jpeg','Anthem Gundam','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth32.jpeg','Anthem Gundam','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth33.jpeg','Anthem Gundam','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth34.jpeg','Anthem Gundam','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth35.jpeg','Anthem Gundam','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth36.jpeg','Anthem Gundam','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth37.jpeg','Anthem Gundam','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth38.jpeg','Anthem Gundam','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth39.jpeg','Anthem Gundam','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth40.jpeg','Anthem Gundam','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth41.jpeg','Anthem Gundam','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth42.jpeg','Anthem Gundam','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth43.jpeg','Anthem Gundam','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth44.jpeg','Anthem Gundam','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth45.jpeg','Anthem Gundam','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth46.jpeg','Anthem Gundam','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth47.jpeg','Anthem Gundam','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth48.jpeg','Anthem Gundam','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth49.jpeg','Anthem Gundam','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth50.jpeg','Anthem Gundam','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth51.jpeg','Anthem Gundam','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth52.jpeg','Anthem Gundam','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth53.jpeg','Anthem Gundam','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth54.jpeg','Anthem Gundam','img54'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth55.jpeg','Anthem Gundam','img55'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth56.jpeg','Anthem Gundam','img56'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth57.jpeg','Anthem Gundam','img57'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth58.jpeg','Anthem Gundam','img58'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth59.jpeg','Anthem Gundam','img59'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth60.jpeg','Anthem Gundam','img60'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth61.jpeg','Anthem Gundam','img61'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth62.jpeg','Anthem Gundam','img62'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth63.jpeg','Anthem Gundam','img63'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth64.jpeg','Anthem Gundam','img64'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth65.jpeg','Anthem Gundam','img65'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth66.jpeg','Anthem Gundam','img66'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth67.jpeg','Anthem Gundam','img67'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth68.jpeg','Anthem Gundam','img68'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/anth69.jpeg','Anthem Gundam','img69']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/anth60.jpeg','Profile Photo: Anthem Gundam'],
        'The theme for this one obviously is the American Flag. Since the name of the Gundam is the Freedom Gundam, one day it spawned on me, what\'s not more representative of Freedom than the American Flag, After all we\'re the "Home of the Free and Land of the Brave. Therefore I decided the Freedom needed a much deserved Red White and Blue makeover. So without further ado, and in honor of the pursuit and preservation of freedom everywhere, I present to you the new Freedom Gundam... Gudam Anthem.',false,
        [
            ['Video','https://www.instagram.com/reel/CuSx0amrZW4/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-1-100-freedom-gundam-ver-2-0'],
            ['NewType','https://newtype.us/p/uMb67BdrKhMnFDOYzJVF/h/mg-zgmf-x10a-freedom-gundam-ver-20'],
            ['Amazon','https://a.co/d/69DPX3z']
        ],['Liberty','Old Glory','Don\'t Tread On Ye'],false,true,'1:100'
    ],
    ['Freedom [MGSD]',[1,'Freedom'],'MGSD',true,false,false,'Seed','E','2023-03-05',8.5,false,false,false,'2023-06-28',false],
    ['Liberty',[1,'Freedom'],'SD',
        false,false,false,'Seed','E','2022-04-09',18,false,'Builds/Gundams/Liberty.html','America','2022-06-27',models[14],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty01.jpeg','Gundam Liberty','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty02.jpeg','Gundam Liberty','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty03.jpeg','Gundam Liberty','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty04.jpeg','Gundam Liberty','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty05.jpeg','Gundam Liberty','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty06.jpeg','Gundam Liberty','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty07.jpeg','Gundam Liberty','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty08.jpeg','Gundam Liberty','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty09.jpeg','Gundam Liberty','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty10.jpeg','Gundam Liberty','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty11.jpeg','Gundam Liberty','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty12.jpeg','Gundam Liberty','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty13.jpeg','Gundam Liberty','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty14.jpeg','Gundam Liberty','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty15.jpeg','Gundam Liberty','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty16.jpeg','Gundam Liberty','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty17.jpeg','Gundam Liberty','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty18.jpeg','Gundam Liberty','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty19.jpeg','Gundam Liberty','img19']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/liberty12.jpeg','Profile Photo: Gundam Liberty'],
        'For the theme/description here, just read the post for Gundam Anthem. Same inspiration behind this as well. With as complciated of a design as I was pursuing on the Anthem I wanted to try the same design but on somethings smaller. A la the Liberty. This project was basically a prototype for the Anthem just to test myself to see if I could pull it off.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-sd-gundam-cross-silhouette-freedom-gundam?variant=9558574923812'],
            ['NewType','https://newtype.us/p/vKxUpq1pJg9sDiFkRFZ1/h/sdcs-08-freedom-gundam']
        ],['Anthem','Old Glory'],true,true,false
    ],
    ['Old Glory',[1,'Freedom'],'MGSD',
        false,false,false,'Seed','E','2023-05-06',30.33,false,'Builds/Gundams/OldGlory.html','America','2023-07-03',models[14],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory01_sdLav1PtqioFw5a8sxxjgX.jpeg','Old Glory','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory02_aTn59wMj3Fgx67X7GmzEZJ.jpeg','Old Glory','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory03_6a4qaPRsFgACGTg9AmwuY5.jpeg','Old Glory','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory04_bo982hvtBPK6gGyDdVG9hH.jpeg','Old Glory','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory05_e7p8RUt21SgfB6gn5QVYM4.jpeg','Old Glory','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory06_mZbhQFzbxXENCQqgCo6ADz.jpeg','Old Glory','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory07_gK4QS2pvSMvNS4QNSKT38a.jpeg','Old Glory','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory08_2Jpzj4AB7pHBQBtfEV3UaH.jpeg','Old Glory','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory09_cWs3x9taBwm3XsRyVmCNGr.jpeg','Old Glory','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory10_h2q18MFER4pSQ5skzBGC9W.jpeg','Old Glory','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory11_jzWZSSx45Uww9CDaZw8yoV.jpeg','Old Glory','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory12_5ZRQT4A4Y2P1MiW8xu71M1.jpeg','Old Glory','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory13_t6j4K3y6P6EcwjWfWooJyA.jpeg','Old Glory','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory14_isWZfmtGid6ZsGVg7DURVS.jpeg','Old Glory','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory15_eGREgFtS5ru7kwrr5vsofU.jpeg','Old Glory','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory16_hWR4zzBb8775d3NvswY1xU.jpeg','Old Glory','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory17_nay6immYn5MCEka4hEMit8.jpeg','Old Glory','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory18_4Sk32tt1LSSbkQXWpAKaJp.jpeg','Old Glory','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory19_vAtsegG1UhwWyQ1XLnD2Ry.jpeg','Old Glory','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory20_37sq51CSfeUUgLGHPWF4s8.jpeg','Old Glory','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory21_87NJEBCevEwcXJqxwUykQb.jpeg','Old Glory','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory22_nNmcmKqkCH6thL8BYth2V5.jpeg','Old Glory','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory23_e5b4Exu6YU3thPieVxc9fe.jpeg','Old Glory','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory24_rpfkWcvWvT5LsWq6kQNt8p.jpeg','Old Glory','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory25_oimTqQetVveDPqyVdxh4iU.jpeg','Old Glory','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory26_4PKsBq5eLMjVcyKcVtBYwC.jpeg','Old Glory','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory27_pntYGz3VJYn54oNHy6TWff.jpeg','Old Glory','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory28_1dWMseUk8Zd1MBvCcg93yg.jpeg','Old Glory','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory29_7HFedmQLVrHV6ib2xLSWyK.jpeg','Old Glory','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory30_o27ZnVfXuFvfv6c5Kjpz86.jpeg','Old Glory','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rwb01.jpeg','Liberty Bros','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rwb02.jpeg','Liberty Bros','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rwb03.jpeg','Liberty Bros','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rwb04.jpeg','Liberty Bros','img34']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/oldglory30_o27ZnVfXuFvfv6c5Kjpz86.jpeg','Profile Photo: Old Glory'],
        'So a year ago I did a project where I restyled Freedom Gundam in the ol\' Red, White and Blue. Since then Bandai created the new MGSD model class and its initial release was the Freedom Gundam. Since I painted the MG Freedom as the Red White and Blue. And I painted the SD Freedom model in the Red White and Blue. It only made sense I had to complete the series by doing the same with the new MGSD Freedom. So without further adew, I present to you my latest project, Old Glory.',false,
        [
            ['Video','https://www.instagram.com/reel/CuQYuUxJm_k/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/mgsd-freedom-gundam'],
            ['NewType','https://newtype.us/p/YvNO7xYH5IAMfB9d8UZy/h/mgsd-freedom-gundam']
        ],['Anthem','Liberty'],false,true,false
    ],
    ['Billy Blue Jay',[1,'Ginn'],'MG',false,false,false,'Seed','B'],
    ['Destiny Impulse (Regenes)',[1,'Impulse, Destiny'],'MG',
        true,true,false,'Seed','C','2023-05-05',6.5,false,'Builds/PBandai/PBDesintyImpulseREgenesMG.html',false,''
    ],
    ['Destiny Impulse [RG]',[1,'Impulse, Destiny'],'RG',
        true,true,false,'Seed','C','2023-07-26',5.5,false,'Builds/PBandai/PBDestinyImpulseRG.html',false,''
    ],
    ['Don\'t Tread On Ye',[1,'Justice'],'MG',
        false,false,false,'Seed','E','2022-06-06',51.75,true,'Builds/Gundams/Ye.html','America','2022-09-06',models[52],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fishsticks.jpeg','Dont\'t Tread on Ye','img70'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye01.jpeg','Gundam Ye','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye02.jpeg','Gundam Ye','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye03.jpeg','Gundam Ye','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye04.jpeg','Gundam Ye','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye05.jpeg','Gundam Ye','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye06.jpeg','Gundam Ye','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye07.jpeg','Gundam Ye','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye08.jpeg','Gundam Ye','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye09.jpeg','Gundam Ye','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye10.jpeg','Gundam Ye','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye11.jpeg','Gundam Ye','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye12.jpeg','Gundam Ye','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye13.jpeg','Gundam Ye','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye14.jpeg','Gundam Ye','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye15.jpeg','Gundam Ye','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye16.jpeg','Gundam Ye','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye17.jpeg','Gundam Ye','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye18.jpeg','Gundam Ye','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye19.jpeg','Gundam Ye','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye20.jpeg','Gundam Ye','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye21.jpeg','Gundam Ye','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye22.jpeg','Gundam Ye','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye23.jpeg','Gundam Ye','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye24.jpeg','Gundam Ye','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye25.jpeg','Gundam Ye','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye26.jpeg','Gundam Ye','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye27.jpeg','Gundam Ye','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye28.jpeg','Gundam Ye','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye29.jpeg','Gundam Ye','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye30.jpeg','Gundam Ye','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye31.jpeg','Gundam Ye','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye32.jpeg','Gundam Ye','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye33.jpeg','Gundam Ye','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye34.jpeg','Gundam Ye','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye35.jpeg','Gundam Ye','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye36.jpeg','Gundam Ye','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye37.jpeg','Gundam Ye','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye38.jpeg','Gundam Ye','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye39.jpeg','Gundam Ye','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye40.jpeg','Gundam Ye','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye41.jpeg','Gundam Ye','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye42.jpeg','Gundam Ye','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye43.jpeg','Gundam Ye','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye44.jpeg','Gundam Ye','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye45.jpeg','Gundam Ye','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye46.jpeg','Gundam Ye','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye47.jpeg','Gundam Ye','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye48.jpeg','Gundam Ye','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye49.jpeg','Gundam Ye','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye50.jpeg','Gundam Ye','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye51.jpeg','Gundam Ye','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye52.jpeg','Gundam Ye','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye53.jpeg','Gundam Ye','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye54.jpeg','Gundam Ye','img54'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye55.jpeg','Gundam Ye','img55'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye56.jpeg','Gundam Ye','img56'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye57.jpeg','Gundam Ye','img57'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye58.jpeg','Gundam Ye','img58'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye59.jpeg','Gundam Ye','img59'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye60.jpeg','Gundam Ye','img60'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye61.jpeg','Gundam Ye','img61'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye62.jpeg','Gundam Ye','img62'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye63.jpeg','Gundam Ye','img63'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye64.jpeg','Gundam Ye','img64'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye65.jpeg','Gundam Ye','img65'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye66.jpeg','Gundam Ye','img66'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye67.jpeg','Gundam Ye','img67'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye68.jpeg','Gundam Ye','img68'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ye69.jpeg','Gundam Ye','img69']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/ye15.jpeg','Profile Photo: Gundam Ye'],
        'So I will be the first to admit that this project definitely did not age well. Just a discalimer, I came up with the idea for this and began working on it way before Kanye\'s huge public global meltdown. Whatever the hell is going on with him, I did not foresee that at all at the time of planning this, but may he please get help and get better. Both for his own sake but also for the sake of his children and his family. Anyhow, as to the origins of this. I had came up with the idea for Gundam Anthem (my red white and blue style Gundam Freedom), since Freedom and Justice are twin units, you cannot have the one without the other so I knew I had to paint the Justice as well so that the Freedom would not stand alone. However since my Freedom redesign was based on the old Betsy Ross original thirteen star American flag, in order to keep up with the flag theme I needed an equal just as famous well recognizable flag from the same era as the Betsy Ross to style the Justice. After thinking about it long and hard the only thing I could think of was that yellow rattlesnake Gadsden flag. So the first draft of the redesign was just to paint the Justice yellow and add rattlesnake decals. Anyhow, I let that idea stew in my mind for a while and my thoughts drifted back to an old meme I had made bout five year prior featuring the South Park rendition of Kanye on the rattlesnake flag and referrencing Fish Sticks. You have to be a South Park fan to understand the fish stick reference, but basically it was humiliating towards Kanye and the point of the meme was to make fun of Kanye\'s narcisstic don\'t give an eff attitude. So to keep the story going, the rattlesnake Gadsden theme slowly evolved to a rattlesnake Gadsden gay fish fish Kanye theme where I would paint it yellow and add rattlesnake and Ye and South Park decals. I present to you Gundam Don\'t Tread on Ye.',false,
        [
            ['Video 1','https://www.instagram.com/reel/CiMJpP7p9ET/?igshid=YzcxN2Q2NzY0OA=='],
            ['Video 2','https://www.instagram.com/reel/CiMJiakAuwL/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-mg-1-100-justice-gundam'],
            ['NewType','https://newtype.us/p/1wuFC30Od1bkqTD0cMJ1/h/mg-zgmf-x09a-justice-gundam']
        ],['South Park','Anthem','Pacifist'],false,true,'1:100','Don\'t Tread on Ye','Ye'
    ],
    ['AntiJustice',[1,'Justice'],'SD',false,false,false,'Seed','B'],
    ['Pacifist',[1,'Justice'],'SD',
        false,false,false,'Seed','E','2022-04-10',14.58,false,'Builds/Gundams/Pacifist.html','America','2022-08-29',models[52],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist01.jpeg','Gundam Pacifist','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist02.jpeg','Gundam Pacifist','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist03.jpeg','Gundam Pacifist','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist04.jpeg','Gundam Pacifist','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist05.jpeg','Gundam Pacifist','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist06.jpeg','Gundam Pacifist','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist07.jpeg','Gundam Pacifist','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist08.jpeg','Gundam Pacifist','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist09.jpeg','Gundam Pacifist','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist10.jpeg','Gundam Pacifist','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist11.jpeg','Gundam Pacifist','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist12.jpeg','Gundam Pacifist','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist13.jpeg','Gundam Pacifist','img13']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pacifist11.jpeg','Profile Photo: Gundam Pacifist'],
        'Just like I did on Gundam Liberty for the Gundam Anthem project, I too for the Gadsden flag profject wanted to do a practice round on a much smaller model before attempting it on the much larger Master Grade kit. So this little model was my practice rehearsal at painting the Gadsden flag before painting Gundam Ye. Unlike Ye, this one had no Kanye influence. The model being so small I did not want to get overboard by swamping it with too much stuff so I just kept this strictly to the basic Gadsen theme. Which it honestly came out great. The hardest part of this project in all transparency was actually in deciding what to name it. And to give you the decision point on that, I kept thinking back to the rattlesnake and remembered hearing a Native American once give a speech about how in Native American lore the rattlesnake is viewed as Mother Nature\'s true pacifists. Basically they never (according to him) act out in unprovoked aggression. They always warn you first with their rattle before you get too close. And they only strike when you have totally gotten all up in their business. Unlike other animals, he said that they are peacekeepers who desire to avoid all conflict at all costs. I do not know how accurate that is. I certainly am not an expert on serpent psychology. But the description sounded deep and profound to me, as well as very wise and it always stuck with me. To this day I have a certain respect for rattlers that I do not for other snakes because of this. But anyhow... I now present to you, Gundam Pacifist !!!',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb268-justice-gundam'],
            ['NewType','https://newtype.us/p/IztRvBhzZPTcUVemeUIR/h/sdgg-268-zgmf-x09a-justice-gundam']
        ],'Don\'t Tread On Ye',true,true,false
    ],
    ['\u221e Justice Clear',[1,'Infinite Justice'],'RG',
        true,true,false,'Seed','E','2021-11-09',4.93,false,'Builds/PBandai/PBInfiniJusticeRG.html',false,'2022-05-03',models[53],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust01.jpeg','P-Bandai Infinite Justice Clear','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust02.jpeg','P-Bandai Infinite Justice Clear','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust03.jpeg','P-Bandai Infinite Justice Clear','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust04.jpeg','P-Bandai Infinite Justice Clear','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust05.jpeg','P-Bandai Infinite Justice Clear','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust06.jpeg','P-Bandai Infinite Justice Clear','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust07.jpeg','P-Bandai Infinite Justice Clear','img7']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbijust03.jpeg','Profile Photo: PB Infinite Justice Clear'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2519700001001']
        ],false,false,true,'1:144'
    ],
    ['Oppression',[1,'Infinite Justice'],'MG',false,false,false,'Seed','B'],
    ['Canis Alpha',[1,'LaGOWE'],'HG',false,false,false,'Seed','A'],
    ['Zoroaster',[1,'Legend'],'FM',false,false,false,'Seed','B'],
    ['Lightning Striker',[0.5,'Lightning Strike Pack'],'MG',false,true,false,'Seed','B'],
    ['PB Meteors',[1,'Meteor','Meteor I','Meteor II','Freedom','Infinite Justice'],'HG',false,true,false,'Seed','B'],
    ['Union Jack',[1,'Providence'],'MG',false,false,false,'Seed','A'],
    ['Raider [FM]',[1,'Raider'],'FM',true,false,false,'Seed','D','2023-01-06',9.75,false,false,false],
    ['Rodan',[1,'Raider'],'FM',false,false,false,'Seed','A'],
    ['Blue Angels',[3,'Skygrasper','Skygrasper','Skygrasper'],'RG',
        false,false,false,'Seed','E','2022-12-05',22,true,'Builds/Gundams/BlueAngels.html',false,'2022-12-26',models[30],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper01.jpeg','Skygrasper Straight Build','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper02.jpeg','Skygrasper Straight Build','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper03.jpeg','Skygrasper Straight Build','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper04.jpeg','Skygrasper Straight Build','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper05.jpeg','Skygrasper Straight Build','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper06.jpeg','Skygrasper Straight Build','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper07.jpeg','Skygrasper Straight Build','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blue_skygrasper08.jpeg','Skygrasper Straight Build','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels01.jpeg','Skygrasper Straight Build','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels02.jpeg','Skygrasper Straight Build','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels03.jpeg','Skygrasper Straight Build','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels04.jpeg','Skygrasper Straight Build','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels05.jpeg','Skygrasper Straight Build','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels06.jpeg','Skygrasper Straight Build','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels07.jpeg','Skygrasper Straight Build','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels08.jpeg','Skygrasper Straight Build','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels09.jpeg','Skygrasper Straight Build','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels10.jpeg','Skygrasper Straight Build','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels11.jpeg','Skygrasper Straight Build','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels12.jpeg','Skygrasper Straight Build','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels13.jpeg','Skygrasper Straight Build','img21']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/blueangels06.jpeg','Profile Photo: Blue Angels'],
        'The theme for this was two fold. One navy show-planes, The Blue Angels. I wanted to capture their color. Second, the holidays were upon us and I wanted to do something Christmas themed to capture the holiday spirit. For this I imagined a squadron of Skygraspers flying through the clouds and passing by Santa as they did.',false,
        [
            ['Video','https://www.instagram.com/reel/CmpsNSWokVp/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/rg-1-144-06-fx-550-skygrasper-launcher-sword-pack'],
            ['NewType','https://newtype.us/p/a718Du5Yq0A0Vec2LZ24/h/rg-06-fx-550-skygrasper-launcher-sword-pack']
        ],false,false,true,'1:144'
    ],
    ['Skygrasper [PG]',
        [1,'Skygrasper'],'PG',true,false,false,'Seed','E','2022-10-06',6,false,'Builds/PG/PGSkygasper.html',false,'2022-12-22',models[30],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky01.jpeg','Skygrasper [PG]','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky02.jpeg','Skygrasper [PG]','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky03.jpeg','Skygrasper [PG]','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky04.jpeg','Skygrasper [PG]','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky05.jpeg','Skygrasper [PG]','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky06.jpeg','Skygrasper [PG]','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky07.jpeg','Skygrasper [PG]','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky08.jpeg','Skygrasper [PG]','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky09.jpeg','Skygrasper [PG]','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky10.jpeg','Skygrasper [PG]','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky11.jpeg','Skygrasper [PG]','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pgsky07.jpeg','Profile Photo: Skygrasper Perfect Grade'],
        'Normally I don\'t post straight builds. I reserve that only for P-Bandai kits due to their limited edition and uniqueness. However due to this being my first ever Perfect Grade kit, the amazingness of Perfect Grades and the $200-$300 price point of perfect grades that I\'m a bit scared to paint them in case I damage the kit, I decided to change the rules to also include Perfect Grades. Anyhow like I said, this is my first Perfect Grade I have ever built, and I was quite amazed at the sheer size and detail of this. If it were not for the price I think I would be building a whole lot more of these.',false,
        [
            ['Video','https://www.instagram.com/reel/CmfxQMHoIyt/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-pg-skygrasper-aile-striker?variant=6442840900'],
            ['NewType','https://newtype.us/p/rO9JwbTqHIJ7hgQYIER6/h/pg-fx-550-skygrasper-aqm-e-x01-aile-striker']
        ],false,false,true,'1:60',false,'Skygrasper'
    ],
    ['Skygrasper [RG]',[2,'Skygrasper','Skygrasper','Skygrasper'],'RG',true,false,false,'Seed','E','2022-09-06',10,false,false,false,'2022-12-19'],
    ['Metal Strike',[1,'Strike'],'MG',false,false,false,'Seed','B'],
    ['Metal Strike',[1,'Strike'],'SD',false,false,false,'Seed','B'],
    ['Strike Gundam [PG]',[1,'Strike'],'PG',
        true,false,false,'Seed','D','2023-05-07',14.58,true,'Builds/PG/PGStrike.html',false,'',models[60]
    ],
    ['Perfect Strike [PG]',[1,'Strike, Perfect'],'PG',
        true,false,false,'Seed','A','',0,true,'Builds/PG/PGPerfectStrike.html',false,'',models[61]
    ],
    ['Perfect Strike [P-Bandai]',[1,'Strike, Perfect'],'RG',
        true,true,false,'Seed','E','2022-03-07',12.33,false,'Builds/PBandai/PBPerfectStrikeRG.html',false,'2022-09-13',models[61],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg01.jpeg','P-Bandai Perfect Strike','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg02.jpeg','P-Bandai Perfect Strike','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg03.jpeg','P-Bandai Perfect Strike','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg04.jpeg','P-Bandai Perfect Strike','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg05.jpeg','P-Bandai Perfect Strike','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg06.jpeg','P-Bandai Perfect Strike','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg07.jpeg','P-Bandai Perfect Strike','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg08.jpeg','P-Bandai Perfect Strike','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg09.jpeg','P-Bandai Perfect Strike','img9']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbpstrikerg06.jpeg','Profile Photo: P-Bandai Perfect Strike'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2487790001005']
        ],false,false,true,'1:144',false,'Perfect Strike'
    ],
    ['S.A.T.O.',[1,'Strike, Perfect'],'SD',
        false,false,false,'Seed','D','2022-01-05',14.85,false,'Builds/Gundams/SATO.html','SD Rock','',models[61]
    ],
    ['Strike Daggers',[2,'Strike Dagger','Strike Dagger','Strike Dagger'],'HG',false,true,false,'Seed','D','2023-03-07',20.41,false,'Builds/PBStrikeDagger.html','Metroid'],
    ['AntiFreedom',[1,'Strike-Freedom'],'SD',false,false,false,'Seed','B'],
    ['Servitude',[1,'Strike-Freedom'],'MG',false,false,false,'Seed','B'],
    ['Strike-Freedom Full Burst [MG]',[1,'Strike-Freedom'],'MG',true,false,false,'Seed','E','2021-07-07',18.42,false,false,false,'2021-08-17'],
    ['MGEX Strike-Freedom',[1,'Strike-Freedom'],'MG',
        true,false,true,'Seed','E','2023-03-09',21.42,false,'Builds/Specials/MGEXStrikeFreedom.html',false,'2023-08-14',models[76],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe01.jpeg','MGEX Strike-Freedom: Gold Frame','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe02.jpeg','MGEX Strike-Freedom: Gold Frame','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe03.jpeg','MGEX Strike-Freedom: Gold Frame','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe04.jpeg','MGEX Strike-Freedom: Gold Frame','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe05.jpeg','MGEX Strike-Freedom: Gold Frame','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe06.jpeg','MGEX Strike-Freedom: Gold Frame','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe07.jpeg','MGEX Strike-Freedom: Gold Frame','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe08.jpeg','MGEX Strike-Freedom: Gold Frame','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe09.jpeg','MGEX Strike-Freedom: Gold Frame','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe10.jpeg','MGEX Strike-Freedom: Gold Frame','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe11.jpeg','MGEX Strike-Freedom: Gold Frame','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe12.jpeg','MGEX Strike-Freedom: Gold Frame','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe13.jpeg','MGEX Strike-Freedom: Gold Frame','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe14.jpeg','MGEX Strike-Freedom: Gold Frame','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe15.jpeg','MGEX Strike-Freedom: Gold Frame','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe16.jpeg','MGEX Strike-Freedom: Gold Frame','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe17.jpeg','MGEX Strike-Freedom: Gold Frame','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe18.jpeg','MGEX Strike-Freedom: Gold Frame','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe19.jpeg','MGEX Strike-Freedom: Gold Frame','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe20.jpeg','MGEX Strike-Freedom: Gold Frame','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe21.jpeg','MGEX Strike-Freedom: Gold Frame','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe22.jpeg','MGEX Strike-Freedom: Gold Frame','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe23.jpeg','MGEX Strike-Freedom: Gold Frame','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe24.jpeg','MGEX Strike-Freedom: Gold Frame','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe25.jpeg','MGEX Strike-Freedom: Gold Frame','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe26.jpeg','MGEX Strike-Freedom: Gold Frame','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe27.jpeg','MGEX Strike-Freedom: Gold Frame','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe28.jpeg','MGEX Strike-Freedom: Gold Frame','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe29.jpeg','MGEX Strike-Freedom: Gold Frame','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe30.jpeg','MGEX Strike-Freedom: Gold Frame','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe31.jpeg','MGEX Strike-Freedom: Gold Frame','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe32.jpeg','MGEX Strike-Freedom: Gold Frame','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe33.jpeg','MGEX Strike-Freedom: Gold Frame','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe34.jpeg','MGEX Strike-Freedom: Gold Frame','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe35.jpeg','MGEX Strike-Freedom: Gold Frame','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe36.jpeg','MGEX Strike-Freedom: Gold Frame','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe37.jpeg','MGEX Strike-Freedom: Gold Frame','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe38.jpeg','MGEX Strike-Freedom: Gold Frame','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe39.jpeg','MGEX Strike-Freedom: Gold Frame','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe40.jpeg','MGEX Strike-Freedom: Gold Frame','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe41.jpeg','MGEX Strike-Freedom: Gold Frame','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe42.jpeg','MGEX Strike-Freedom: Gold Frame','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe43.jpeg','MGEX Strike-Freedom: Gold Frame','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe44.jpeg','MGEX Strike-Freedom: Gold Frame','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe45.jpeg','MGEX Strike-Freedom: Gold Frame','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe46.jpeg','MGEX Strike-Freedom: Gold Frame','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe47.jpeg','MGEX Strike-Freedom: Gold Frame','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe48.jpeg','MGEX Strike-Freedom: Gold Frame','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe49.jpeg','MGEX Strike-Freedom: Gold Frame','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe50.jpeg','MGEX Strike-Freedom: Gold Frame','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe51.jpeg','MGEX Strike-Freedom: Gold Frame','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe52.jpeg','MGEX Strike-Freedom: Gold Frame','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe53.jpeg','MGEX Strike-Freedom: Gold Frame','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe54.jpeg','MGEX Strike-Freedom: Gold Frame','img54'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe55.jpeg','MGEX Strike-Freedom: Gold Frame','img55'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe56.jpeg','MGEX Strike-Freedom: Gold Frame','img56'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe57.jpeg','MGEX Strike-Freedom: Gold Frame','img57'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe58.jpeg','MGEX Strike-Freedom: Gold Frame','img58'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe59.jpeg','MGEX Strike-Freedom: Gold Frame','img59'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe60.jpeg','MGEX Strike-Freedom: Gold Frame','img60'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe61.jpeg','MGEX Strike-Freedom: Gold Frame','img61'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe62.jpeg','MGEX Strike-Freedom: Gold Frame','img62'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe63.jpeg','MGEX Strike-Freedom: Gold Frame','img63'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe64.jpeg','MGEX Strike-Freedom: Gold Frame','img64'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe65.jpeg','MGEX Strike-Freedom: Gold Frame','img65'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe66.jpeg','MGEX Strike-Freedom: Gold Frame','img66'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe67.jpeg','MGEX Strike-Freedom: Gold Frame','img67'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe68.jpeg','MGEX Strike-Freedom: Gold Frame','img68'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe69.jpeg','MGEX Strike-Freedom: Gold Frame','img69'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe70.jpeg','MGEX Strike-Freedom: Gold Frame','img70'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe71.jpeg','MGEX Strike-Freedom: Gold Frame','img71'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe72.jpeg','MGEX Strike-Freedom: Gold Frame','img72'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe73.jpeg','MGEX Strike-Freedom: Gold Frame','img73'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe74.jpeg','MGEX Strike-Freedom: Gold Frame','img74'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe75.jpeg','MGEX Strike-Freedom: Gold Frame','img75'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe76.jpeg','MGEX Strike-Freedom: Gold Frame','img76']
            
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe76.jpeg','Profile Photo: MGEX Strike-Freedom'],
        'The MGEX, Master Grade Extreme, kits are a special class of builds in the Gundam franchise that are meant as a higher quality and higher level of sophistication than the regular Master Grades of their size which do to cost I had never built one. (However them being so new and only one other MGEX kit ever being built also played a factor too.) But when I saw thei first unveil of the MGEX Strike-Freedom I was shook. It looked so amazing. I loved the level of detail that went into the design, of every single nook and cranny and engraved panel. The visual is far beyond the standard Master-Grade Strike Freedom that I have built (ss straight builds) several times before. On top of that the shininess is just mind blowing. No matter the cost, I had to have this kit. Also due to the cost, and due to the detail, no way was I going to paint this. Even there are those online who have painted this kit, that ruins the quality on this kit. In now way should it ever be painted. This kit as is, is a master piece and I am so glad to be able to share it with you.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mgex-1-100-strike-freedom-gundam'],
            ['NewType','https://newtype.us/p/S4Qqw8vjfebq5dssbLNR/h/mgex-strike-freedom-gundam']
        ],false,false,true,'1:100',false,false,'MGEX S.F.'
    ],
    ['Strike-Freedom (Deactive)',[1,'Strike-Freedom'],'RG',
        true,true,false,'Seed','E','2023-03-06',4.75,false,'Builds/PBandai/PBStrikeFreedomDeactive.html',false,'2023-08-07',models[76],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac01.jpeg','Strike-Freedom (Deactive)','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac02.jpeg','Strike-Freedom (Deactive)','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac03.jpeg','Strike-Freedom (Deactive)','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac04.jpeg','Strike-Freedom (Deactive)','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac05.jpeg','Strike-Freedom (Deactive)','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac06.jpeg','Strike-Freedom (Deactive)','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac07.jpeg','Strike-Freedom (Deactive)','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac08.jpeg','Strike-Freedom (Deactive)','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac09.jpeg','Strike-Freedom (Deactive)','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac10.jpeg','Strike-Freedom (Deactive)','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac08.jpeg','Profile Photo: PB Strike-Freedom (Deactive)'],
        'Strike-Freedom but in Deactive Mode. Basically its powered down state. In Gundam Seed and Gundam Double O the gundams natural colors is all grey. The natural metal colors of the material they\'re constructed from. The color of the suit actually comes from the electric energy armor that covers and protects the suit in battle. I thought this was a cool concept for a kit that when P-Bandai made the deactive modes available I had to build it. It was a cool concept for a straight build. But I am going to paint them in their deactive state sometime in the future. Also, I deliberately chose not to apply the decals for this one. I figured if it\'s powered off, it would make no sense for them to display.',false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2256565001006']
        ],false,false,true,'1:144',false,'Strike-Freedom (Deactive Mode)','Strike-Freedom'
    ],
    ['Battra',[1,'Strike Noir'],'MG',false,false,false,'Seed','B'],
    ['Strike Noir [SD]',[1,'Strike Noir'],'SD',true,false,false,'Seed','E','2021-09-06',2.233,false,false,'2023-07-10'],
    ['Strike Verde',[1,'Strike Noir'],'SD',
        false,false,false,'Seed','E','2021-12',8,false,'Builds/Gundams/StrikeVerde.html','Practice SDs','2023-07-11',models[51],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/IMG_2567_Large.jpeg','Strike Verde','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/IMG_2566_Large.jpeg','Strike Verde','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-11AM_Large.jpeg','Strike Verde','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-14AM_Large.jpeg','Strike Verde','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-14AM_2_Large.jpeg','Strike Verde','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-12AM_Large.jpeg','Strike Verde','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-13AM_2_Large.jpeg','Strike Verde','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-10AM_Large.jpeg','Strike Verde','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-11AM_2_Large.jpeg','Strike Verde','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-13AM_Large.jpeg','Strike Verde','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-15AM_2_Large.jpeg','Strike Verde','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-15AM_Large.jpeg','Strike Verde','img12']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-13AM_2_Large.jpeg','Profile Photo: Strike Verde'],
        'So they are not the best paint in terms of usability for airbrushing, but I do love Testors\' variety of shades of colors. By far they are probably the best for color diversity amongst modeling paints. I am probably the only person in the community with this opinion but I stand by it. In particular I love their shiny metallic paints. For this project, it all started with me admiring the shininess of Testors metallic green w/ metal flakes. At the same time I had a spare SD Strike Noir kit laying around and I was brainstorming ideas to paint it. Then it hit me, instead of the black I wanted to use this Testors metallic green. Therefore Strike Noir now became Strike Verde. It looks great. Only thing I would have done different is used a lighter primer underneath the metallic green. Generally the rule of thumb for most paints is you use grey/white primer for flat colors and black primer for metal colors, which is what I did for Strike Verde. But it came out too dark in my opinion that the green is less noticeably green. Definitely a lesson learned, that for all Testors colors going forward, always use the grey primer only on Testors. But anyhow, presenting to you SD Strike Verde.',false,
        [
            ['Video','https://www.instagram.com/reel/Cuj6WuCpk2p/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb293-strike-noir-gundam'],
            ['NewType','https://newtype.us/p/NsPxBG5t6hpfpZqSAuWb/h/sdbb-293-gat-x105e-strike-noir-gundam']
        ],false,true,true,false
    ],
    ['Perfect Striker',[0.5,'Sword-Launcher Strike Pack'],'MG',false,true,false,'Seed','B'],
    ['Oberon',[1,'Windam'],'HG',
        false,false,false,'Seed','E','2022-03-05',20.25,false,'Builds/Gundams/Oberon.html',false,'2022-05-09',models[24],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon01.jpeg','Oberon','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon02.jpeg','Oberon','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon03.jpeg','Oberon','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon04.jpeg','Oberon','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon05.jpeg','Oberon','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon06.jpeg','Oberon','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon07.jpeg','Oberon','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon08.jpeg','Oberon','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon09.jpeg','Oberon','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon10.jpeg','Oberon','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon11.jpeg','Oberon','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon12.jpeg','Oberon','img12']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/oberon12B.jpeg','Profile Photo: Oberon'],
        'So the Windam is the upgrade version of the Dagger L. Which my Dagger build I named it King Leir, from Shakespeare. Following the Shakespeare therefore I decided for the Windam to name it Oberon, from Shakespeare\'s Midsummer Night\'s Dream. Now those who keep up with Shakespeare would know that in Shakespearean lore Oberon was the king of the fairies. Therefore to make him more fairy like I decided to stick with more pastel colors.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgce-1-144-232-gat-04-windam'],
            ['NewType','https://newtype.us/p/kjwUPIk5smIcsY8oIzVJ/h/hgce-232-gat-04-windam']
        ],['Armageddon'],false,true,'1:144'
    ],
    ['Samus: Metroid Suit',[1,'Windam'],'HG',false,false,false,'Seed','B'],
    ['Slash Zaku Phantom',[1,'Zaku Phantom, Slash'],'MG',
        true,true,false,'Seed','E','2023-04-05',11.83,false,'Builds/PBandai/PBPhantomZakuMG.html',false,'2023-07-31',models[75],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku01phantom.jpeg','Yzak Jule Slash Zaku','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku02phantom.jpeg','Yzak Jule Slash Zaku','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku03phantom.jpeg','Yzak Jule Slash Zaku','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku04phantom.jpeg','Yzak Jule Slash Zaku','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku05phantom.jpeg','Yzak Jule Slash Zaku','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku06phantom.jpeg','Yzak Jule Slash Zaku','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku07phantom.jpeg','Yzak Jule Slash Zaku','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku08phantom.jpeg','Yzak Jule Slash Zaku','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku09phantom.jpeg','Yzak Jule Slash Zaku','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku10phantom.jpeg','Yzak Jule Slash Zaku','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku11phantom.jpeg','Yzak Jule Slash Zaku','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku12phantom.jpeg','Yzak Jule Slash Zaku','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash20.jpeg','Yzak Jule Slash Zaku','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash21.jpeg','Yzak Jule Slash Zaku','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash22.jpeg','Yzak Jule Slash Zaku','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash23.jpeg','Yzak Jule Slash Zaku','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash24.jpeg','Yzak Jule Slash Zaku','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash25.jpeg','Yzak Jule Slash Zaku','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash26.jpeg','Yzak Jule Slash Zaku','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/_zakuslash27.jpeg','Yzak Jule Slash Zaku','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash28.jpeg','Yzak Jule Slash Zaku','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash29.jpeg','Yzak Jule Slash Zaku','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash30.jpeg','Yzak Jule Slash Zaku','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/zakuslash31.jpeg','Yzak Jule Slash Zaku','img24']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku06phantom.jpeg','Profile Photo: PB Slash Zaku Phntom'],false,false,
        [
            ['Premium Banai','https://p-bandai.com/us/item/N2500763001004']
        ],false,false,true,'1:100',false,'Slash Zaku Phantom (Yzak Jule Custom)'
    ],
    
    //Future Century (G Gundam)
    ['Burning Gundam [RG]',[2,'Burning Gundam','Burning Gundam Expansion Pass','Burning Gundam LED lights'],'RG',true,true,false,'G','C','2022-09-07',15.5,true,'Builds/PBBurningGundamRG.html',false],
    ['Michael',[1,'Burning Gundam'],'SD',false,false,false,'G','B'],
    ['Furcas',[1,'Dark Army'],'HG',false,false,false,'G','B'],
    ['Malphas',[1,'Dark Army'],'HG',
        false,false,false,'G','E','2022-09-08',5.83,false,'Builds/Gundams/Malphas.html','Ars Goetia','2023-01-23',models[59],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas01.jpeg','Malphas','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas02.jpeg','Malphas','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas03.jpeg','Malphas','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas04.jpeg','Malphas','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas05.jpeg','Malphas','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas06.jpeg','Malphas','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas07.jpeg','Malphas','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas08.jpeg','Malphas','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas09.jpeg','Malphas','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas10.jpeg','Malphas','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/malphas08.jpeg','Profile Photo: Malphas'],
        'Part of my Ars Goetia project, this model was named after one of the Presidents of hell, Malphas. For color scheme, I basically took my color scheme from King Leir and decided to apply it to other kits. So far the paint scheme appears to be pretty universal, it can apply to anything. On this one in particular it came out looking nice.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hgfc-1-144-230-death-army'],
            ['NewType','https://newtype.us/p/jyG6L0YpSElExWI5jPd7/h/hgfc-230-death-army'],
            ['Malphas','https://en.wikipedia.org/wiki/Malphas'],
            ['Ars Goetia','https://en.wikipedia.org/wiki/List_of_demons_in_the_Ars_Goetia']
        ],['King Leir'],true,true,'1:144'
    ],
    ['Asmodeus',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Baal',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Balam',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Beleth',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Belial',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Dark Gundam [SD]',[1,'Dark Gundam'],'SD',true,false,false,'G','D','2022-08-07',1.75,false,false,false],
    ['Paimon',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Charlemagne',[1,'Rose Gundam'],'HG',
        false,true,false,'G','C','2023-08-02',1.58
    ],
    ['Le Roi Soleil',[1,'Rose Gundam'],'HG',
        false,false,false,'G','E','2022-08-09',4.17,false,'Builds/Gundams/RoiSoleil.html',false,'2022-12-12',models[56],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil01.jpeg','Le Roi Soleil','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil02.jpeg','Le Roi Soleil','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil03.jpeg','Le Roi Soleil','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil04.jpeg','Le Roi Soleil','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil05.jpeg','Le Roi Soleil','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil06.jpeg','Le Roi Soleil','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil07.jpeg','Le Roi Soleil','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil08.jpeg','Le Roi Soleil','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil09.jpeg','Le Roi Soleil','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil10.jpeg','Le Roi Soleil','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/roisoleil09.jpeg','Profile Photo: Le Roi Soleil'],false,false,
        [
            ['Video','https://www.instagram.com/reel/CmFot3-sGX-/?igshid=YzcxN2Q2NzY0OA==']
        ],false,true,true,'1:144','The Sun King'

    ],
    ['Gabriel',[1,'Shining Gundam'],'SD',false,false,false,'G','B'],
    ['Red Baron',[1,'Spiegel, Gundam'],'MG',
        false,false,false,'G','E','2021-05-05',72.07,true,'Builds/Gundams/RedBaron.html','Hand Paint','2021-05-29',models[2],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron01.JPG','Gundam Red Baron','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron02.jpg','Gundam Red Baron','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron03.jpg','Gundam Red Baron','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron04.jpg','Gundam Red Baron','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron05.jpg','Gundam Red Baron','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron06.jpg','Gundam Red Baron','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron07.jpg','Gundam Red Baron','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron08.jpg','Gundam Red Baron','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron09.jpg','Gundam Red Baron','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron10.jpg','Gundam Red Baron','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron11.jpg','Gundam Red Baron','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron12.jpg','Gundam Red Baron','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron13.jpg','Gundam Red Baron','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron14.jpg','Gundam Red Baron','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron15.jpg','Gundam Red Baron','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron16.jpg','Gundam Red Baron','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron17.jpg','Gundam Red Baron','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron18.jpg','Gundam Red Baron','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron19.jpg','Gundam Red Baron','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron20.jpg','Gundam Red Baron','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron21.jpg','Gundam Red Baron','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron22.jpg','Gundam Red Baron','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron23.jpg','Gundam Red Baron','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron24.jpg','Gundam Red Baron','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron25.jpg','Gundam Red Baron','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron26.jpg','Gundam Red Baron','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron27.jpg','Gundam Red Baron','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron28.jpg','Gundam Red Baron','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron29.jpg','Gundam Red Baron','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron30.jpg','Gundam Red Baron','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron31.jpg','Gundam Red Baron','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron32.jpg','Gundam Red Baron','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron33.jpg','Gundam Red Baron','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron34.jpg','Gundam Red Baron','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron35.jpg','Gundam Red Baron','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron36.jpg','Gundam Red Baron','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron37.jpg','Gundam Red Baron','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron38.jpg','Gundam Red Baron','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron39.jpg','Gundam Red Baron','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron40.jpg','Gundam Red Baron','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron41.jpg','Gundam Red Baron','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron42.jpg','Gundam Red Baron','img42']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/rbaron42B.jpg','Profile Photo: Gundam Red Baron'],
        'Half inspired by the WWI Imperial Prussian fighter pilot half inspired by the pizza. Half just desperate for a theme to do on my second custom paint job. The Gundam Spiegel according to cannon was the official mobile suit of Neo Germany in the future, so I decided to take it all the way back to the imperial Prussia of the past. Painted it red with white stripes like the famous Red Baron plane. Clipped the spike from a nose ring to make the Pickelhaube for the helmet. And cut brown felt to make his aviator scarf just alike a real pilot. Still hand brushed, I had not come to my senses and realized the need for an air brush yet. Was also my first attempt at using LEDs and first time making custom waterslide decals. It being Deutsch, I also added Nietzschean book titles to each of the blades: Jenseits von Gut und B\u00f6se, Also sprach Zarathustra, Die fr\u00f6hliche Wissenschaft, Der Wille zur Macht.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/mg-gf13_021ng-gundam-spiegel?variant=33023432527'],
            ['NewType','https://newtype.us/p/RQuAYgB4XXkOwgZaWLOi/h/mg-gf13-021ng-gundam-spiegel'],
            ['Amazon','https://a.co/d/1tZmaYO']
        ],false,false,true,'1/100'
    ],
    ['Red Baron 2',[1,'Spiegel, Gundam'],'MG',false,false,false,'G','A','',0,false,'Builds/RedBaron2.html',[''],'',models[2]],

    //Post Disaster (IBO)
    ['Thorn',[1,'Barbatos'],'MG',false,false,false,'IBO','B'],
    ['War Pig',[1,'Barbatos'],'SD',
        false,false,false,'IBO','E','2021-12-13',4.15,false,'Builds/Gundams/WarPig.html','SD Rock','2023-04-18',models[46],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig01.jpeg','War Pig','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig02.jpeg','War Pig','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig03.jpeg','War Pig','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig04.jpeg','War Pig','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig05.jpeg','War Pig','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig06.jpeg','War Pig','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig07.jpeg','War Pig','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig08.jpeg','War Pig','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig09.jpeg','War Pig','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig10.jpeg','War Pig','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig11.jpeg','War Pig','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/warpig08.jpeg','Profile Photo: War Pig'],false,false,
        [
            ['Video','https://www.instagram.com/reel/CrMBT1IONut/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-sd-gundam-ex-standard-010-gundam-barbatos'],
            ['NewType','https://newtype.us/p/Oaz5ySoNM69IG61UfS7W/h/sdex-standard-10-gundam-barbatos']
        ],['Deep Purple'],true,true,false
    ],
    ['Deep Purple',[1,'Barbatos Lupus'],'SD',
        false,false,false,'IBO','E','2021-12-14',4.36,false,'Builds/Gundams/DeepPurple.html','SD Rock','2023-07-17',models[48],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple01.jpeg','Deep Purple','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple02.jpeg','Deep Purple','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple03.jpeg','Deep Purple','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple04.jpeg','Deep Purple','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple05.jpeg','Deep Purple','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple06.jpeg','Deep Purple','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple07.jpeg','Deep Purple','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple08.jpeg','Deep Purple','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple09.jpeg','Deep Purple','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple10.jpeg','Deep Purple','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple11.jpeg','Deep Purple','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple12.jpeg','Deep Purple','img12']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple07.jpeg','Profile Photo: Deep Purple'],
        'Smooooke on the waaaaater...... Fire in the sky!! For this design the name preceded the design. Back in December 2021 I was doing an SD models binge, with each one named after music/musicians/bands. I\'m a huge lover of Deep Purple and named this kit after them for \'just because\'. Anyhow once the name was chosen, the design quickly followed. True to name, I stuck to all different shades of puprle. Metallic purple. GLossy Purple. Grape Purple. Any shade of purple that Testors offered I was on it.',false,
        [
            ['Video','https://www.instagram.com/p/Cuz5iD7AGFv/'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-014-gundam-barbatos-lupus-ibo-2nd-season-bandai-sd-ex-standard'],
            ['NewType','https://newtype.us/p/hvuv8wfY6UaAdRQuKlrD/h/sdex-standard-14-gundam-barbatos-lupus']
        ],['War Pig'],false,true,false
    ],
    ['Sealiah',[1,'Barbatos Lupus'],'HG',
        false,false,false,'IBO','E','2023-02-05',12.51,false,'Builds/Gundams/Sealiah.html','Angels','2023-06-13',models[48],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah01.jpeg','Sealiah','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah02.jpeg','Sealiah','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah03.jpeg','Sealiah','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah04.jpeg','Sealiah','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah05.jpeg','Sealiah','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah06.jpeg','Sealiah','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah07.jpeg','Sealiah','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah08.jpeg','Sealiah','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah09.jpeg','Sealiah','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah10.jpeg','Sealiah','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah11.jpeg','Sealiah','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah12.jpeg','Sealiah','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah13.jpeg','Sealiah','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah14.jpeg','Sealiah','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah15.jpeg','Sealiah','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah16.jpeg','Sealiah','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah17.jpeg','Sealiah','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah18.jpeg','Sealiah','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah19.jpeg','Sealiah','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah20.jpeg','Sealiah','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah21.jpeg','Sealiah','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah22.jpeg','Sealiah','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah23.jpeg','Sealiah','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah24.jpeg','Sealiah','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah25.jpeg','Sealiah','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah26.jpeg','Sealiah','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah27.jpeg','Sealiah','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah28.jpeg','Sealiah','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah29.jpeg','Sealiah','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah30.jpeg','Sealiah','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah31.jpeg','Sealiah','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah32.jpeg','Sealiah','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah33.jpeg','Sealiah','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah34.jpeg','Sealiah','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah35.jpeg','Sealiah','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah36.jpeg','Sealiah','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah37.jpeg','Sealiah','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah38.jpeg','Sealiah','img38']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/sealiah08.jpeg','Profile Photo: Sealiah'],
        'After having started work on Vine/Hashmal, I realized it needed an opponent to fight. So sticking to cannon I obviously chose the HG Barbatos Lupus. And since I named my Hashmal after the demon king Vine, its opponent had to be an angel instead. Naturally, according to the Ars Goetia the eternal opponent to Vine is the angel Sealiah. Painted with two new Turbo dork colors: Purl Grey and Blue Steel, I present to you the guardian angel of motivation and willfulness, Sealiah',false,
        [
            ['Video','https://www.instagram.com/reel/Cta8-OdLppw/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hg-ibo-1-144-21-gundam-barbatos-lupus'],
            ['NewType','https://newtype.us/p/E4QQkHGKK23LQ0KcwQ22/h/hgibo-021-gundam-barbatos-lupus'],
            ['Purl Grey','https://turbodork.com/collections/all-paints/products/purl-grey'],
            ['Blue Steel','https://turbodork.com/collections/all-paints/products/blue-steel'],
            ['Sealiah','https://guardianangelguide.com/guardian-angel-sealiah/']
        ],['Vine'],false,true,'1:144'
    ],
    ['Nephilim',[1,'Barbatos Lupus Rex'],'HG',
        false,false,false,'IBO','E','2021-06-11',23.11,false,'Builds/Gundams/Nephilim.html',false,'2021-07-26',models[49],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph01.jpeg','Nephilim','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph02.jpeg','Nephilim','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph03.jpeg','Nephilim','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph04.jpeg','Nephilim','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph05.jpeg','Nephilim','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph06.jpeg','Nephilim','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph07.jpeg','Nephilim','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph08.jpeg','Nephilim','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph09.jpeg','Nephilim','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph11.jpeg','Nephilim','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph12.jpeg','Nephilim','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph13.jpeg','Nephilim','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph14.jpeg','Nephilim','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph15.jpeg','Nephilim','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph16.jpeg','Nephilim','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph17.jpeg','Nephilim','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph18.jpeg','Nephilim','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph19.jpeg','Nephilim','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph20.jpeg','Nephilim','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph21.jpeg','Nephilim','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph22.jpeg','Nephilim','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph23.jpeg','Nephilim','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph24.jpeg','Nephilim','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph25.jpeg','Nephilim','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph26.jpeg','Nephilim','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/neph27.jpeg','Nephilim','img26']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/neph14B.jpeg','Profile Photo: Nephilim'],
        'My second mobile suit painted with the airbrush. Went with mostly dark colors, but also was a bit experimental wanting to try out every shade in the Testors lineup as I could. Also, I just love the tail blade on this kit. It is so cool and ahd so much potential for so many cool poses.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/hg-ibo-1-144-033-gundam-barbatos-lupus-rex'],
            ['NewType','https://newtype.us/p/Xk6YwEL0UJ62VCfHY1kf/h/hgibo-033-gundam-barbatos-lupus-rex']
        ],false,false,true,'1:144'
    ],
    ['Queen Venus',[1,'Gremory'],'HG',false,false,false,'IBO','B'],
    ['Vine',[1,'Hashmal'],'HG',
        false,false,false,'IBO','E','2023-01-07',19.64,false,'Builds/Gundams/Vine.html','Ars Goetia','2023-06-05',models[50],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine01.jpeg','Vine','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine02.jpeg','Vine','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine03.jpeg','Vine','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine04.jpeg','Vine','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine05.jpeg','Vine','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine06.jpeg','Vine','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine07.jpeg','Vine','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine08.jpeg','Vine','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine09.jpeg','Vine','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine10.jpeg','Vine','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine11.jpeg','Vine','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine12.jpeg','Vine','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine13.jpeg','Vine','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine14.jpeg','Vine','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine15.jpeg','Vine','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine16.jpeg','Vine','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine31.jpeg','Vine','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine32.jpeg','Vine','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine33.jpeg','Vine','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine34.jpeg','Vine','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine35.jpeg','Vine','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine36.jpeg','Vine','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine37.jpeg','Vine','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine38.jpeg','Vine','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine39.jpeg','Vine','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine40.jpeg','Vine','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine17.jpeg','Vine','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine18.jpeg','Vine','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine19.jpeg','Vine','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine20.jpeg','Vine','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine21.jpeg','Vine','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine22.jpeg','Vine','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine23.jpeg','Vine','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine24.jpeg','Vine','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine25.jpeg','Vine','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine26.jpeg','Vine','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine27.jpeg','Vine','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine28.jpeg','Vine','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine29.jpeg','Vine','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine30.jpeg','Vine','img30']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/demonvine38.jpeg','Profile Photo: Vine'],
        'I was not too particularly fond of the mobile suits in the Iron Blooded orphans series. They just felt like Gundam gone cheap. IBO I would definitely consider one of my least favorite installments in the Gundam anthology. But the one mech from the IBO series that did stand out to me was the Mobile Armor Hashmal. Just from the moment it first appears on screen, just everythign about it screams Bad-Ass. So when I finally saw the kit available online, it was an immediate purchase. Named after the demon king of Hell in the Art Goetia, Vine, I painted this in two of my favorite Turbo Dork colors: Box Wine and Scarab. Box Wine is a beautiful rich bergundy red that just looks so pretty under a glossy top coat. And scarab is a really shiny green that like the name implies totally resembles a shiny bug\'s shell. I love both these shades so much. So without further ado, I present to you the demon king himself, Vine.',false,
        [
            ['Video','https://www.instagram.com/reel/CtHH3mBsRFP/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hg-ibo-1-144-29-mobile-armor-hashmal'],
            ['NewType','https://newtype.us/p/7JEXE8RGCWQpRiBbvSLa/h/hgibo-029-mobile-armor-hashmal'],
            ['Box Wine','https://turbodork.com/products/box-wine'],
            ['Scarab','https://turbodork.com/products/scarab'],
            ['Vine','https://en.wikipedia.org/wiki/Vine_(demon)']
        ],['Sealiah'],false,true,'1:144'
    ],
    ['\u00dcbermensch',[1,'Vidar'],'FM',
        false,false,false,'IBO','C','2023-08-01',15.72
    ],

    //Universal Century
    ['Dew Drop',[1,'Acguy'],'HG',
        false,false,false,'UC','E','2023-05-29-08',5.75,false,'Builds/Gundams/DewDrop.html',false,'2023-06-19',models[36],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop01.jpeg','Dew Drop','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop02.jpeg','Dew Drop','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop03.jpeg','Dew Drop','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop04.jpeg','Dew Drop','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop05.jpeg','Dew Drop','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop06.jpeg','Dew Drop','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop07.jpeg','Dew Drop','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop08.jpeg','Dew Drop','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop09.jpeg','Dew Drop','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop10.jpeg','Dew Drop','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop11.jpeg','Dew Drop','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dewdrop04.jpeg','Profile Photo: Dew Drop'],
        'The AcGuy is an aquatic unit. But I always thought its traditional color scheme was completely wrong for something with Amphibious elements. So I decided to fix that by retooling it different shades of blue.','Zack #TheLunchDude, Iowa',
        [
            ['Video','https://www.instagram.com/reel/Ctrs_SpNgCb/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hguc-1-144-78-acguy'],
            ['NewType','https://newtype.us/p/1QXHTj5usn3RdM8hks9O/h/hguc-078-acguy']
        ],false,false,true,'1:144'
    ],
    ['Fantomas',[1,'Banshee Norn'],'SD',
        false,false,false,'UC','E','2021-06-12',15.02,true,'Builds/Gundams/Fantomas.html','Practice SDs','2021-08-03',models[20],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas01.jpeg','Fantomas','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas02.jpeg','Fantomas','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas03.jpeg','Fantomas','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas04.jpeg','Fantomas','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas05.jpeg','Fantomas','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas06.jpeg','Fantomas','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas07.jpeg','Fantomas','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas08.jpeg','Fantomas','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas09.jpeg','Fantomas','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas10.jpeg','Fantomas','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas11.jpeg','Fantomas','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas12.jpeg','Fantomas','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas13.jpeg','Fantomas','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas14.jpeg','Fantomas','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas15.jpeg','Fantomas','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas16.jpeg','Fantomas','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas17.jpeg','Fantomas','img17']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/Fantomas17.jpeg','Profile Photo: Fantomas'],
        'Inspired by the French liteary character, Fantomas, wanted to make something dark and spooky. THe LEDs in the light and chest created a cool affect.',false,
        [
            ['Fantomas','https://en.wikipedia.org/wiki/Fantômas'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gundam-sd-ex-standard-015-unicorn-gundam-02-banshee-norn-destroy-mode'],
            ['NewType','https://newtype.us/p/U9GzVy0DVcUQH57GpMAY/h/sdex-standard-15-banshee-norn-destroy-mode']
        ],false,true,true,false
    ],
    ['King Uranus',[1,'Banshee Norn'],'RG',
        false,false,false,'UC','B',false,0,false,'Builds/Gundams/uranus.html','Planets',false,models[20],false
    ],
    ['Metroid [Larva]',[1,'Baund-Doc'],'HG',false,false,false,'UC','A'],
    ['ARRRgent',[1,'Crossbone X-1'],'SD',
        false,false,false,'UC','E','2021-06-09',14.09,false,'Builds/Gundams/Arrrgent.html','Practice SDs','2021-06-25',models[18],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent01.jpeg','Arrrgent Gundam','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent02.jpeg','Arrrgent Gundam','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent03.jpeg','Arrrgent Gundam','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent04.jpeg','Arrrgent Gundam','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent05.jpeg','Arrrgent Gundam','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent06.jpeg','Arrrgent Gundam','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent07.jpeg','Arrrgent Gundam','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent08.jpeg','Arrrgent Gundam','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent09.jpeg','Arrrgent Gundam','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent10.jpeg','Arrrgent Gundam','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent11.jpeg','Arrrgent Gundam','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/arrrgent03B.jpeg','Profile Photo: Arrrgent Gundam'],
        'What can I say, arrrrrgh, the boy\'s a pirate.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-bandai-sdgcs-2-crossbone-gundan-x1-crossbone-gundam?variant=6977963851812'],
            ['NewType','https://newtype.us/p/YGYIUhgF1SPER7BQkT5D/h/sdcs-02-crossbone-gundam-x1']
        ],false,false,true,false
    ],
    ['Crossbone [RG]',[1,'Crossbone X-1'],'RG',true,false,false,'UC','D','2022-05-07',9.08,false,false,false],
    ['King Neptune',[1,'Crossbone X-1'],'RG',false,false,false,'UC','B'],
    ['Jackie-O',[1,'Delta Plus'],'SD',
        false,false,false,'UC','E','2022-01-07',11.17,false,'Builds/Gundams/JackieO.html','America','2022-07-11',models[42],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/airforce01.jpeg','Airforce One','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/airforce02.jpeg','Airforce One','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/airforce03.jpeg','Airforce One','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo01.jpeg','Jackie-O','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo02.jpeg','Jackie-O','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo03.jpeg','Jackie-O','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo04.jpeg','Jackie-O','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo05.jpeg','Jackie-O','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo06.jpeg','Jackie-O','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo07.jpeg','Jackie-O','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo08.jpeg','Jackie-O','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo09.jpeg','Jackie-O','img12']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/jackieo08.jpeg','Profile Photo: Jackie-O'],
        'This was inspired by Airforce One. Which the current design was stylized by American First Lady, Jacqueline Onassis-Kennedy. Therefore presenting, Jackie-O !!!','Dr. Paige, Chicago',
        [
            ['Video','https://www.instagram.com/reel/Cf48aw8lNmK/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb379-delta-plus'],
            ['NewType','https://newtype.us/p/FwGjUKw2TJtylxXE2GUp/h/sdbb-379-delta-plus']
        ],false,false,true,false
    ],
    ['Interstellar',[1,'Dom Test Type'],'HG',
        false,false,false,'UC','E','2022-08-06',14.07,false,'Builds/Gundams/Interstellar.html',false,'2022-11-14',models[55],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar01.jpeg','Interstellar','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar02.jpeg','Interstellar','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar03.jpeg','Interstellar','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar04.jpeg','Interstellar','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar05.jpeg','Interstellar','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar06.jpeg','Interstellar','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar07.jpeg','Interstellar','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar08.jpeg','Interstellar','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar09.jpeg','Interstellar','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar10.jpeg','Interstellar','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar11.jpeg','Interstellar','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar12.jpeg','Interstellar','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar13.jpeg','Interstellar','img13']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/interstellar12.jpeg','Profile Photo: Interstellar Dom Test Type'],
        'Whole point of this project was pretty much just to test out the Turbo Dork paint, Rainbow Roll.',false,
        [
            ['Video','https://www.instagram.com/reel/Ck9q2OdszjF/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/hg-the-origin-1-144-007-yms-08b-dom-test-type'],
            ['NewType','https://newtype.us/p/O92LcR7Vr8loQn1HmU4p/h/hggto-007-yms-08b-dom-test-type'],
            ['Turbo Dork: Rainbow Roll','https://turbodork.com/products/rainbow-roll']
        ],false,true,true,'1:144','DOM Interstellar  Test Type'
    ],
    ['Rhea',[1,'RX-75 Guntank'],'SD',false,false,false,'UC','B'],
    ['Metroid',[1,'Hygogg'],'HG',false,false,false,'UC','A'],
    ['Theia',[1,'Kshatriya'],'SD',false,false,false,'UC','D','2022-12-08',12.03,false,'Builds/Theia.html',['']],
    ['Nachtigall',[1,'Nightingale'],'SD',false,false,false,'UC','B'],
    ['Mnemosyne',[1,'Neue Ziuel'],'SD',false,false,false,'UC','B'],
    ['\u03C0 (pi)',[1,'Nu Gundam'],'SD',
        false,false,false,'UC','E','2021-06-06',15.66,false,'Builds/Gundams/Pi.html','Practice SDs','2021-06-22',models[13],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi01_8VsNSXZBP8w3T14bVGf76h.jpeg','Pi Gundam','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi02_gTp9iuAuGDycFLow3wi994.jpeg','Pi Gundam','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi03_vWP53dXJqLGACD4ybUcaGR.jpeg','Pi Gundam','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi04_6B6hmdZNx9J19LiShs3Bw8.jpeg','Pi Gundam','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi05_7az2exLJHocfD65yTW1CK6.jpeg','Pi Gundam','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi06_gMfYKtAs6sP3uXn2iWRmVr.jpeg','Pi Gundam','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi07_t4BpwXzqbRg5TvktyUrwES.jpeg','Pi Gundam','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi08_4B2DiEQM7jLdJwuQYr2smx.jpeg','Pi Gundam','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi09_raLc4W5BadyF8TdNBVS6jk.jpeg','Pi Gundam','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi10_3yfg3HkPDpfL4S33W5Mhey.jpeg','Pi Gundam','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi11_vG9RBosMat6c5vUzVZ987z.jpeg','Pi Gundam','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi12_uPiYLWnYt1s5kWQUUwMom2.jpeg','Pi Gundam','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi13_4mEh5o7BukAMSgv4vcLVCJ.jpeg','Pi Gundam','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi14_kuvXxe1PmptSF1JfoULe91.jpeg','Pi Gundam','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi15_617PTaeTJX2cFZmqeadv6x.jpeg','Pi Gundam','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi16_8XCRfFxwhjbk2ZQ773aT2W.jpeg','Pi Gundam','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pi17_a6i3Sdvk1sod1DmUCDP5sw.jpeg','Pi Gundam','img17']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pi04B.jpeg','Profile Photo: Pi Gundam'],
        'No particular theme here for this one. Well... initially. This I was still in the practicing phase with the airbrush so this started out as purely experimental. Since the original Gundam\'s name is \u039D, that\'s the Greek letter Nu, I was like well what is the next letter in the Greek Alphabet that I can name this after. Well the next few letters sequentially were already claimed by other main canon Gundams so I could not use those. Anyhow the next avaible letter turned out to be \u03C0 (pi). And if I\'m wrong, well so help me God. Anyhow, pi lead to pie and it all went downhill from there. So introducing my pi, pie, tasty dessert themed Gundam.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-gundam-ex-standard-16-nu-gundam?variant=32162603204644'],
            ['NewType','https://newtype.us/p/e7WxX8kuxy5xRyggnSXC/h/sdex-standard-16-nu-gundam']
        ],
        false,true,true,false
    ],   //pi gundam
    ['BB Senshi RX-93ff \u03bd',[1,'Nu Gundam, ff'],'SD',
        true,true,false,'UC','E','2023-03-13',2.83,false,'Builds/PBandai/BBSenshi93ff.html',false,'2023-04-24',models[58],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi01.jpeg','BB Senshi RX-93ff','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi02.jpeg','BB Senshi RX-93ff','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi03.jpeg','BB Senshi RX-93ff','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi04.jpeg','BB Senshi RX-93ff','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi05.jpeg','BB Senshi RX-93ff','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi06.jpeg','BB Senshi RX-93ff','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi07.jpeg','BB Senshi RX-93ff','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi08.jpeg','BB Senshi RX-93ff','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi09.jpeg','BB Senshi RX-93ff','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi10.jpeg','BB Senshi RX-93ff','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/bbsenshi02.jpeg','Profile Photo: BB Senshi RX-93ff'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2605386001002']
        ],['RX-93ff \u03bd'],false,true
    ],
    ['RX-93ff \u03bd',[1,'Nu Gundam, ff'],'RG',
        true,true,false,'UC','E','2023-03-14',14.5,false,'Builds/PBandai/PB93ff.html',false,'2023-04-25',models[58],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff01.jpeg','RX-93ff','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff02.jpeg','RX-93ff','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff03.jpeg','RX-93ff','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff04.jpeg','RX-93ff','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff05.jpeg','RX-93ff','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff06.jpeg','RX-93ff','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff07.jpeg','RX-93ff','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff08.jpeg','RX-93ff','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff09.jpeg','RX-93ff','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff10.jpeg','RX-93ff','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/rx93ff07.jpeg','Profile Photo: RX-93ff'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2604206001002']
        ],['BB Senshi RX-93ff \u03bd'],false,true
    ],
    ['Milos',[1,'Nu Gundam, Hi'],'SD',false,false,false,'UC','B'],
    ['PB Umbrella Corp',[2,'Nu Gundam, Hi','Hi Nu Expansion Pack','Hi Nu Hyper Bazooka'],'RG',false,true,false,'UC','A'],
    ['Bella Donna',[2,'Phenex','Phenex'],'SD',
        false,false,false,'UC','E','2021-12-06',14.37,false,'Builds/Gundams/BellaDonna.html','Phoneix','2023-03-16',models[28],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna01.jpeg','Gundam Bella Donna','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna02.jpeg','Gundam Bella Donna','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna03.jpeg','Gundam Bella Donna','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna04.jpeg','Gundam Bella Donna','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna05.jpeg','Gundam Bella Donna','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna06.jpeg','Gundam Bella Donna','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna07.jpeg','Gundam Bella Donna','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna08.jpeg','Gundam Bella Donna','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna09.jpeg','Gundam Bella Donna','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna10.jpeg','Gundam Bella Donna','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna11.jpeg','Gundam Bella Donna','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna12.jpeg','Gundam Bella Donna','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna13.jpeg','Gundam Bella Donna','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna14.jpeg','Gundam Bella Donna','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna15.jpeg','Gundam Bella Donna','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna16.jpeg','Gundam Bella Donna','img16']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/belladonna11.jpeg','Profile Photo: Bella Donna'],
        'Having done the Phenex Titan and Phenex Sovereign, I wanted to paint the Phenex but in it\'s tradiitional gold color, but as shiny as possible. Of course for all thinsg shiny I always resort to Turbo Dork. However I was not sure which shade of Turbo to use, so I painted two. One in \'All That Glitters\', which is the brighter gold, and one in \'Afterburner\', which is the darker gold. Together they both came out nice. I sort of imagine these two as twins.',false,
        [
            ['Video','https://www.instagram.com/reel/Cp3XKq1vOI_/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-sd-gundam-cross-silhouette-unicorn-gundam-03-phenex-destroy-mode-narrative-ver?variant=9116289466404'],
            ['NewType','https://newtype.us/p/dIWzPbdrfm4LhDH7zl24/h/sdcs-07-unicorn-gundam-03-phenex-gundam-nt'],
            ['Turbo Dork: After Burner','https://turbodork.com/products/afterburner'],
            ['Turbo Dork: All That Glitters','https://turbodork.com/products/all-that-glitters']
        ],['Sovereign','Titan'],true,true,false
    ],
    ['Phenex [SD]',[1,'Phenex'],'SD',true,false,false,'UC','E','2021-10-11',4.17,false,false,false,'2023-03-13'],
    ['Sovereign',[1,'Phenex'],'SD',
        false,false,false,'UC','E','2021-11-08',5.93,false,'Builds/Gundams/Sovereign.html','Phoneix','2023-03-15',models[28],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign01.jpeg','Gundam Sovereign','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign02.jpeg','Gundam Sovereign','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign03.jpeg','Gundam Sovereign','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign04.jpeg','Gundam Sovereign','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign05.jpeg','Gundam Sovereign','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign06.jpeg','Gundam Sovereign','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign07.jpeg','Gundam Sovereign','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign08.jpeg','Gundam Sovereign','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign09.jpeg','Gundam Sovereign','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign10.jpeg','Gundam Sovereign','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/sovereign09.jpeg','Profile Photo: Sovereign'],
        'Basically was inspired by the Gundam Phenex and how shiny it is. So I wanted to try Phenex in other colors. For the Sovereign I painted the Phenex in its Destroy mode with a mixture of Pearl Red and Pearl Purple paints blended together.',false,
        [
            ['Video','https://www.instagram.com/reel/Cp0DancrAsz/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pre-order-sd-gundam-cross-silhouette-unicorn-gundam-03-phenex-destroy-mode-narrative-ver?variant=9116289466404'],
            ['NewType','https://newtype.us/p/dIWzPbdrfm4LhDH7zl24/h/sdcs-07-unicorn-gundam-03-phenex-gundam-nt']
        ],['Bella Donna','Titan'],true,true,false
    ],
    ['Titan',[1,'Phenex'],'SD',
        false,false,false,'UC','E','2021-11-07',6.63,false,'Builds/Gundams/Titan.html','Phoneix','2023-03-14',models[28],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan01.jpeg','Gundam Titan','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan02.jpeg','Gundam Titan','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan03.jpeg','Gundam Titan','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan04.jpeg','Gundam Titan','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan05.jpeg','Gundam Titan','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan06.jpeg','Gundam Titan','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan07.jpeg','Gundam Titan','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan08.jpeg','Gundam Titan','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan09.jpeg','Gundam Titan','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan10.jpeg','Gundam Titan','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/titan11.jpeg','Gundam Titan','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/titan06.jpeg','Profile Photo: Titan'],
        'Basically was inspired by the Gundam Phenex and how shiny it is. So I wanted to try Phenex in other colors. For the Titan I painted the Phenex in its Unicorn mode with a Pearl Blue paint.',false,
        [
            ['Video','https://www.instagram.com/reel/Cpx6gJTDOai/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/bandai-hobby-bb-394-unicorn-gundam-phenex-action-figure?variant=1114433924']
        ],['Bella Donna','Sovereign'],true,true,false
    ],
    ['Ridley',[1,'Qubeley'],'HG',false,false,false,'UC','A'],
    ['LunchTime Solutions',[1,'RX-78-2'],'RG',false,false,false,'UC','B'],
    ['Starman',[1,'Sazabi'],'SD',false,false,false,'UC','D','2021-12-16',5.03,false,'Builds/Starman.html',['']],
    ['Ziggy',[1,'Sazabi'],'SD',false,false,false,'UC','D','2022-03-10',5.75,false,'Builds/Ziggy.html',['']],
    ['Dynamo',[1,'Sinanju'],'MG',false,false,false,'UC','B'],
    ['Stardust',[1,'Sinanju'],'SD',false,false,false,'UC','D','2021-12-15',4.56,false,'Builds/Stardust.html',['']],
    ['Shin Musha Black Robe',[1,'Shin Musha Gundam'],'MG',
        true,true,false,'UC','E','2022-08-05',10.58,false,'Builds/PBandai/PBShinMushaMG.html',false,'2022-12-05',models[72],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush01.jpeg','PB Shin Musha Black Robe','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush02.jpeg','PB Shin Musha Black Robe','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush03.jpeg','PB Shin Musha Black Robe','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush04.jpeg','PB Shin Musha Black Robe','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush05.jpeg','PB Shin Musha Black Robe','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush06.jpeg','PB Shin Musha Black Robe','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush07.jpeg','PB Shin Musha Black Robe','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush08.jpeg','PB Shin Musha Black Robe','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush09.jpeg','PB Shin Musha Black Robe','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush10.jpeg','PB Shin Musha Black Robe','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush11.jpeg','PB Shin Musha Black Robe','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbsmush10.jpeg'],
        'Another P-Bandai Straight Build. What I thought was cool on this though and convinced me to order it was the Cherry Blossom flower panel stickers adorning the arms and legs. They just add a certain special \'je ne sais quoi\' that I thought was so pretty and neat. Not to also mention in real life is one of my favorite flowers. If you have never been to the cherry blossom festival in Washington DC, or in Japana, when the trees all open up each Spring, you definitely need to go sometime in your lifetime. It is a must see worth witnessing.',false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2569532001002'],
        ],false,false,true,'1:100'
    ],
    ['Blue Monday',[1,'Sisquiede'],'SD',false,false,false,'UC','D','2022-01-06',6.76,false,'Builds/BlueMonday.html',['']],
    ['Rocket Man',[1,'Xi Gundam'],'SD',false,false,false,'UC','D','2022-01-08',6.5,false,'Builds/RocketMan.html',['']],
    ['MK Ultra',[1,'Zaku II'],'RG',false,false,false,'UC','B'],
    ['Metroid [Alpha]',[1,'Zeong'],'HG',false,false,false,'UC','A'],
    ['Zeong [RG]',[1,'Zeong'],'RG',true,false,false,'UC','E','2021-08-07',8.25,false,false,false,'2022-03-14'],
    ['Starrider',[1,'Zeta Gundam'],'SD',
        false,false,false,'UC','E','2021-09-08',6.83,false,'Builds/Gundams/Starrider.html','SD Rock','2023-03-08',models[45],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider01.jpeg','Starrider','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider02.jpeg','Starrider','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider03.jpeg','Starrider','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider04.jpeg','Starrider','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider05.jpeg','Starrider','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider06.jpeg','Starrider','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider07.jpeg','Starrider','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider08.jpeg','Starrider','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider09.jpeg','Starrider','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider10.jpeg','Starrider','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider11.jpeg','Starrider','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/starrider06.jpeg','Profile Photo: Starrider'],
        'This design was entirely experimental. But by the end it kept giving me the vibes of a leprechaun.','Carlos,Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb198-msz-006-zeta-gundam'],
            ['NewType','https://newtype.us/p/QGZ7IGxhBsKUpVEQcuMm/h/sdgg-198-msz-006-zeta-gundam']
        ],false,false,true,false
    ],
    ['Zeta [MG]',[1,'Zeta Gundam'],'MG',true,false,false,'UC','C','2023-04-12',8,false,false,false],

    //Regild Century (Reconguista)


    //Build Divers (BD)
    ['00 Diver Trans-Am',[1,'00 Gundam Diver'],'HG',
        true,true,false,'BD','E','2022-01',2.75,false,'Builds/PBandai/PBooDiverHG.html',false,'2022-08-08',models[69],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod01.jpeg','00 Diver','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod02.jpeg','00 Diver','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod03.jpeg','00 Diver','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod04.jpeg','00 Diver','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod05.jpeg','00 Diver','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod06.jpeg','00 Diver','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod07.jpeg','00 Diver','img7']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/pbod05.jpeg','Profile Photo: PB 00 Diver'],false,false,
        [
            ['Premium Bandai','https://p-bandai.com/us/item/N2486108001002']
        ],false,false,true,'1:144'
    ],
    ['King Milky Way',[1,'Astray Rebake'],'HG',false,false,false,'BD','B'],
    ['Four Horsemen',[4,'Barbataurus','Barbataurus','Barbataurus','Barbataurus'],'HG',false,false,false,'BD','B'],
    ['King Sol',[1,'Helios'],'HG',false,false,false,'BD','B'],
    ['Der Kommissar',[1,'Lightning Gundam'],'SD',
        false,false,false,'BD','E','2021-12-11',4.05,false,'Builds/Gundams/DerKommissar.html','SD Rock','2023-04-03',models[35],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm01.jpeg','Der Kommissar','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm02.jpeg','Der Kommissar','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm03.jpeg','Der Kommissar','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm04.jpeg','Der Kommissar','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm05.jpeg','Der Kommissar','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm06.jpeg','Der Kommissar','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm07.jpeg','Der Kommissar','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm08.jpeg','Der Kommissar','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm09.jpeg','Der Kommissar','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm10.jpeg','Der Kommissar','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/komm11.jpeg','Der Kommissar','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/komm11.jpeg','Profile Photo: Der Kommissar'],false,false,
        [
            ['Video','https://www.instagram.com/reel/CqlfDEftfwA/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/sd-bb-lightning-gundam?variant=2103466628'],
            ['NewType','https://newtype.us/p/unhAPIzNx2Yt4WiTRc4r/h/sdbb-398-lightning-gundam']
        ],false,true,true
    ],
    ['King Jupiter',[1,'Livelance'],'HG',false,false,false,'BD','B'],
    ['King Pluto',[1,'QAN[T], Command'],'HG',false,false,false,'BD','B'],
    ['Queen Luna',[1,'QAN[T], Shia'],'HG',false,false,false,'BD','B'],
    ['King Earth',[1,'Strike-Freedom, Perfect'],'HG',false,false,false,'BD','B'],
    ['Constellation',[1,'Strike Full Package'],'RG',
        false,false,false,'BD','E','2021-11-05',37.52,true,'Builds/Gundams/Constellation.html',false,'2022-02-28',models[34],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel01.jpeg','Constellation','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel02.jpeg','Constellation','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel03.jpeg','Constellation','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel04.jpeg','Constellation','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel05.jpeg','Constellation','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel06.jpeg','Constellation','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel07.jpeg','Constellation','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel08.jpeg','Constellation','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel09.jpeg','Constellation','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel10.jpeg','Constellation','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel11.jpeg','Constellation','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel12.jpeg','Constellation','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel13.jpeg','Constellation','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel14.jpeg','Constellation','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/constel15.jpeg','Constellation','img15']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/constel14.jpeg','Profile Photo: Constellation'],
        'Not much inspiration here. This was my first attempt at building a Real Grade model so I was more focused on doing a project of the RG grade more so than I was on the design.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/rg-1-144-23-build-strike-gundam-full-package'],
            ['NewType','https://newtype.us/p/QIE6S4m3dl46dKwRkzap/h/rg-23-build-strike-gundam-full-package']
        ],['Moonage Daydream'],true,true,'1:144'
    ],
    ['Moonage Daydream',[1,'Strike Full Package'],'SD',
        false,false,false,'BD','E','2021-11-06',7.27,false,'Builds/Gundams/MoonageDaydream.html',false,'2022-02-21',models[34],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage01.jpeg','Moonage Daydream','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage02.jpeg','Moonage Daydream','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage03.jpeg','Moonage Daydream','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage04.jpeg','Moonage Daydream','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage05.jpeg','Moonage Daydream','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage06.jpeg','Moonage Daydream','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage07.jpeg','Moonage Daydream','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage08.jpeg','Moonage Daydream','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage09.jpeg','Moonage Daydream','img9']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/moonage06.jpeg','Profile Photo: Moonage Daydream'],
        'Miniature version of the Constellation Gundam. Rather than paint this as a practice run, began work on this halfway through Constellation as a sort of semi-after thought.','Maricela, Nebraska',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/bb388-build-strike-gundam-full-package?variant=6062886404'],
            ['NewType','https://newtype.us/p/Jo894rN6W9JMC7IrdI5x/h/sdbb-388-build-strike-full-package']
        ],['Constellation'],false,true,false
    ],
    ['King Saturn',[1,'Transient'],'HG',false,false,false,'BD','B'],
    ['King Mercury',[1,'Try Age Magnum'],'HG',false,false,false,'BD','B'],
    
    //SD Heroes 
    ['Artemis',[1,'00, Zhao Yun'],'SD',false,false,false,'Heroes','A'],
    ['Oceanus',[1,'Altron, Zhang He'],'SD',false,false,false,'Heroes','D','2022-04-06',5.42,false,'Builds/Oceanus.html',['']],
    ['Eurybia',[1,'Akatsuki, Zhou Yu'],'SD',false,false,false,'Heroes','B'],
    ['Perses',[1,'Deathscythe, Xu Huang'],'SD',false,false,false,'Heroes','A'],
    ['Azalea',[1,'Delta, Sasuki'],'SD',
        false,false,false,'Heroes','E','2021-10-09',6.5,false,'Builds/SDW/Azalea.html',false,'2022-06-22',models[17],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea01.jpeg','Gundam Azalea','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea02.jpeg','Gundam Azalea','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea03.jpeg','Gundam Azalea','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea04.jpeg','Gundam Azalea','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea05.jpeg','Gundam Azalea','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea06.jpeg','Gundam Azalea','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea07.jpeg','Gundam Azalea','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea08.jpeg','Gundam Azalea','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea09.jpeg','Gundam Azalea','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea10.jpeg','Gundam Azalea','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea11.jpeg','Gundam Azalea','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea12.jpeg','Gundam Azalea','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea13.jpeg','Gundam Azalea','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea14.jpeg','Gundam Azalea','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea15.jpeg','Gundam Azalea','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea16.jpeg','Gundam Azalea','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea17.jpeg','Gundam Azalea','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea18.jpeg','Gundam Azalea','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea19.jpeg','Gundam Azalea','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea20.jpeg','Gundam Azalea','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea21.jpeg','Gundam Azalea','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea22.jpeg','Gundam Azalea','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea23.jpeg','Gundam Azalea','img23']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/azalea16.jpeg','Profile Photo: Azalea'],
        'The drive behind this design was two-fold. One, I was testing out the new paint line I discovered, Turbo Dork. For the record they came out great and their paints are super shiny. And two, I was tyring to come up with a Christmas present for a girl, which the resolution to that quest was the shiny pink. I was really proud how this turned out that it was sad to give it away. But I\'m really proud of this build.','Penny, Nebraska',
        [
            ['TurboDork','https://turbodork.com/products/sakura'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/sdw-heroes-06-sasuke-delta-gundam?variant=37856509067461'],
            ['NewType','https://newtype.us/p/37iFUC8z3fCky22Mbkxp/h/sdw-heroes-06-sasuke-delta-gundam']
        ],false,false,true,false
    ],
    ['Sasuki Delta [SD]',[1,'Delta, Saskui'],'SD',true,false,false,'Heroes','E','2021-09-05',1.5,false,false,false,'2022-06-20'],
    ['Quetzalcaotl',[1,'Dragon, Dark Grasper'],'SD',false,false,false,'Heroes','B'],
    ['Pharaoh',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Tiamat',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Cronus',[1,'Epyon, Nobunaga'],'SD',false,false,false,'Heroes','A'],
    ['Helios',[1,'Freedom, Zhuge Liang'],'SD',false,false,false,'Heroes','D','2022-03-11',9.25,false,'Builds/Helios.html',['']],
    ['Pallas',[1,'God Gundam, Huang Zhang Fei'],'SD',false,false,false,'Heroes','B'],
    ['Atlas',[1,'God Gundam, Zhang Fei'],'SD',false,false,false,'Heroes','B'],
    ['Themis',[1,'Legend, Caesar'],'SD',false,false,false,'Heroes','A'],
    ['Crius',[1,'Sazabi, Zhang Liao'],'SD',false,false,false,'Heroes','B'],
    ['Clymene',[1,'Strike, Knight'],'SD',false,false,false,'Heroes','A'],
    ['Prometheus',[1,'Strike Noir, Xun Yu'],'SD',false,false,false,'Heroes','B'],
    ['Selene',[1,'Strike-Freedom, Qiongqi'],'SD',false,false,false,'Heroes','B'],
    ['Corona Australis',[1,'Tallgeese, Xiahou Yuan'],'SD',false,false,false,'Heroes','D','2022-04-07',7.75,false,'Builds/CoronaAustralis.html',['']],
    ['Corona Borealis',[1,'Tallgeese III, Xiahou Dun'],'SD',false,false,false,'Heroes','D','2022-04-08',8.67,false,'Builds/CoronaBorealis.html',['']],
    ['Coeus',[1,'Unicorn, Long Zun Liu Vei'],'SD',false,false,false,'Heroes','A'],
    ['Bastiat',[1,'Verde Buster, Sergeante'],'SD',
        false,false,false,'Heroes','E','2021-10-17',8.3,false,'Builds/SDW/Bastiat.html',false,'2022-08-22',models[27],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat01.jpeg','Bastiat','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat02.jpeg','Bastiat','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat03.jpeg','Bastiat','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat04.jpeg','Bastiat','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat05.jpeg','Bastiat','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat06.jpeg','Bastiat','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat07.jpeg','Bastiat','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat08.jpeg','Bastiat','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat09.jpeg','Bastiat','img9']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/bastiat05.jpeg','Profile Photo: Bastiat'],false,false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/sdw-heroes-03-sergeant-verde-buster-gundam'],
            ['NewType','https://newtype.us/p/eufjJyWFODY5XuvTiOIY/h/sdw-heroes-03-sergeant-verde-buster-gundam']
        ],false,false,true,false,'The Law Giver'
    ],
    ['Power Rangers',
        [7.5,'Trinity Bike','Verde Buster, Sergeant DX','Verde Buster, Sergeant DX','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member'],'SD',false,false,false,'Heroes','E','2022-12-06',39.63,false,'Builds/SDW/mmpr.html',false,'2023-02-20',models[27],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr05.jpeg','Power Ranger Visors','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr01.jpg','Power Ranger Visors','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr02.jpg','Power Ranger Visors','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr03.jpg','Power Ranger Visors','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr04.jpg','Power Ranger Visors','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred01.jpeg','Red Ranger','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred02.jpeg','Red Ranger','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred03.jpeg','Red Ranger','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred04.jpeg','Red Ranger','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred05.jpeg','Red Ranger','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred06.jpeg','Red Ranger','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred07.jpeg','Red Ranger','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred08.jpeg','Red Ranger','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred09.jpeg','Red Ranger','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpred10.jpeg','Red Ranger','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue01.jpeg','Blue Ranger','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue02.jpeg','Blue Ranger','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue03.jpeg','Blue Ranger','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue04.jpeg','Blue Ranger','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue05.jpeg','Blue Ranger','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue06.jpeg','Blue Ranger','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue07.jpeg','Blue Ranger','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue08.jpeg','Blue Ranger','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue09.jpeg','Blue Ranger','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblue10.jpeg','Blue Ranger','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink01.jpeg','Pink Ranger','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink02.jpeg','Pink Ranger','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink03.jpeg','Pink Ranger','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink04.jpeg','Pink Ranger','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink05.jpeg','Pink Ranger','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink06.jpeg','Pink Ranger','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink07.jpeg','Pink Ranger','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink08.jpeg','Pink Ranger','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink09.jpeg','Pink Ranger','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmppink10.jpeg','Pink Ranger','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpyellow01.jpeg','Yellow Ranger','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpyellow02.jpeg','Yellow Ranger','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblack01.jpeg','Black Ranger','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpblack02.jpeg','Black Ranger','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb01.jpeg','Yellow and Black Ranger','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb02.jpeg','Yellow and Black Ranger','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb03.jpeg','Yellow and Black Ranger','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb04.jpeg','Yellow and Black Ranger','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb05.jpeg','Yellow and Black Ranger','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb06.jpeg','Yellow and Black Ranger','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmprynb07.jpeg','Yellow and Black Ranger','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen01.jpeg','Green Ranger','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen02.jpeg','Green Ranger','img48'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen03.jpeg','Green Ranger','img49'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen04.jpeg','Green Ranger','img50'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen05.jpeg','Green Ranger','img51'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen06.jpeg','Green Ranger','img52'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen07.jpeg','Green Ranger','img53'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen08.jpeg','Green Ranger','img54'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen09.jpeg','Green Ranger','img55'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpgreen10.jpeg','Green Ranger','img56'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr07.jpeg','Power Rangers','img57'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr08.jpeg','Power Rangers','img58'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr09.jpeg','Power Rangers','img59'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr10.jpeg','Power Rangers','img60'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr11.jpeg','Power Rangers','img61'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr12.jpeg','Power Rangers','img62'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr13.jpeg','Power Rangers','img63']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/mmpr10.jpeg','Profile Photo: Power Rangers'],
        'So I always thought the Buster Sergeants and officers formed their very own police squad corps. That it was just beggin of me to make my own Buster team or foce. Of course the question then was, what sort of team would they be. Then one day staring down at their cute little helmets, it dawned on me, well of course, the frickin Power Rangers. Not the lame newer stuff, but the original 90s Might Morphin Power Rangers. So I painted each one a different color out of the original lineup, plus the green ranger. And for their helmets I chose a matching color shade of Turbo Dork to make the viser shiny. These came out looking so cool.',false,
        [
            ['Video','https://www.instagram.com/reel/CpF8BcpOht9/'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/sdw-heroes-12-sergeant-verde-buster-gundam-dx'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gundam-sdw-heroes-verde-buster-team-member-model-kit'],
            ['NewType','https://newtype.us/p/6WGpOtGU5sn6S4Zq5WxW/h/sdw-heroes-12-sergeant-verde-buster-gundam-dx-set'],
            ['NewType','https://newtype.us/p/9DnZDjp1oqrDn71o7qfZ/h/sdw-heroes-13-verde-buster-team-member'],
            ['Turbo Dork','https://turbodork.com']
        ],false,true,true,false,false,'Mighty Morphin Power Rangers'
    ],
    ['Eos',[1,'Wing, Cao Cao'],'SD',false,false,false,'Heroes','B'],    //Wing zero
    ['Aether',[1,'Wing, Cao Cao'],'SD',false,false,false,'Heroes','B'],    //Wing zero
    ['Tethys',[1,'Wing Isei, Cao Cao'],'SD',false,false,false,'Heroes','D','2022-04-05',8.67,false,'Builds/tethys.html',['']], //Regular wing KA
    ['Hyperion',[1,'Wing, Tian Ba Cao Cao'],'SD',false,false,false,'Heroes','B'],   // wing zero 

    //Haro
    ['Haro Blue',[1,'Haropla #05 Control Blue'],'Haro',false,false,false,'','D','2023-04-07',2.55,false,'Builds/hblue.html','HARO'],
    ['Haro Cloud',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-14',3.27,false,'Builds/hcloud.html','HARO'],
    ['Haro Green',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-08',2.75,false,'Builds/hgreen.html','HARO'],
    ['Haro Lime',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D','2023-04-13',3.34,false,'Builds/hlime.html','HARO'],
    ['Haro Orange',[1,'Haropla #11 Zakrello'],'Haro',false,false,false,'','D','2023-04-11',4.08,false,'Builds/horange.html','HARO'],
    ['Haro Pink',[1,'Haropla #04 Momo Pink'],'Haro',false,false,false,'','D','2023-04-09',2.68,false,'Builds/hpink.html','HARO'],
    ['Haro Purple',[1,'Haropla #07 Ball Haro'],'Haro',false,false,false,'','D','2023-04-10',2.65,false,'Builds/hpurple.html','HARO'],
    ['Haro Red',[1,'Haropla #02 Diva Red'],'Haro',
        false,false,false,false,'E','2023-04-06',2.78,false,'Builds/Haro/HaroRed.html','HARO','2023-05-30',models[12],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo01.jpeg','Red Haro','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo02.jpeg','Red Haro','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo03.jpeg','Red Haro','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo04.jpeg','Red Haro','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo05.jpeg','Red Haro','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo06.jpeg','Red Haro','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo07.jpeg','Red Haro','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo08.jpeg','Red Haro','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo09.jpeg','Red Haro','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo10.jpeg','Red Haro','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo11.jpeg','Red Haro','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo12.jpeg','Red Haro','img12']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/redharo10.jpeg','Profile Photo: Red Haro'],
        'Easter was coming up and I wanted to do something different than those annoying damn eggs again. So I thought about it and I realized you know what, those Haros sure are pretty round like eggs. So to celebrate the holiday I made a whole basket of them, each a different color, to spread the Easter Joy. Theme for this one was a metallic red color.',
        'Zack #TheLunchDude, Iowa',
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/gundam-build-divers-haropla-02-haro-diva-red-model-kit?variant=5411672064036'],
            ['NewType','https://newtype.us/p/oMxTGi7TfGH9P6EGgPxH/h/haropla-haro-diva-red']
        ],false,false,true,false
    ],
    
    //Car
    ['Hud Air',[1,'Chevy Bel Air, 57'],'Car',
        false,false,false,'Chevy','E','2021-05-06',23.05,true,'Builds/Automobiles/HudAir.html',false,'2021-06-09',models[3],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair01.jpg','Hudson Bel-Air','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair02.jpg','Hudson Bel-Air','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair03.jpg','Hudson Bel-Air','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair04.jpg','Hudson Bel-Air','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair05.jpg','Hudson Bel-Air','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair06.jpg','Hudson Bel-Air','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair07.jpg','Hudson Bel-Air','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair08.jpg','Hudson Bel-Air','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair09.jpg','Hudson Bel-Air','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair10.jpg','Hudson Bel-Air','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair11.jpg','Hudson Bel-Air','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair12.jpg','Hudson Bel-Air','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair13.jpg','Hudson Bel-Air','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair14.jpg','Hudson Bel-Air','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair15.jpg','Hudson Bel-Air','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair16.jpg','Hudson Bel-Air','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair17.jpg','Hudson Bel-Air','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair18.jpg','Hudson Bel-Air','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair19.jpg','Hudson Bel-Air','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair20.jpg','Hudson Bel-Air','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/hudair21.jpg','Hudson Bel-Air','img21']
        ],['https://hosting.photobucket.com/images/i/lesaintdumech/hudair16.jpg','Profile Photo: Hud-Air'],
        'First attempt at an air brush. Testors paints. Jennifer Hudson. The Nanny. Feeling very purple with this one.',
        'Nick, Nevada',
        [
            ['Wikipedia','https://en.wikipedia.org/wiki/Chevrolet_Bel_Air'],
            ['Hobby Town','https://www.hobbytown.com/amt-1-24-57-bel-air-model-kit-amt638/p39219'],
            ['Hobby Lobby','https://www.hobbylobby.com/Crafts-Hobbies/Model-Kits/Cars-Trucks-Motorcycles/1957-Chevy-Bel-Air-Model-Kit/p/26172']
        ],false,false,true,'1:25'
    ],
    ['Wilbur',[1,'Volkswagen Beetle, 68'],'Car',
        false,false,false,'Volkswagen','E','2022-11-05',27.08,true,'Builds/Automobiles/Wilbur.html','Wilbur','2023-01-02',models[4],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur01.jpeg','Wilbur the Beetle','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur02.jpeg','Wilbur the Beetle','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur03.jpeg','Wilbur the Beetle','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur04.jpeg','Wilbur the Beetle','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur05.jpeg','Wilbur the Beetle','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur06.jpeg','Wilbur the Beetle','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur07.jpeg','Wilbur the Beetle','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur08.jpeg','Wilbur the Beetle','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur09.jpeg','Wilbur the Beetle','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur10.jpeg','Wilbur the Beetle','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur11.jpeg','Wilbur the Beetle','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur12.jpeg','Wilbur the Beetle','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur13.jpeg','Wilbur the Beetle','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur14.jpeg','Wilbur the Beetle','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur15.jpeg','Wilbur the Beetle','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur16.jpeg','Wilbur the Beetle','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur17.jpeg','Wilbur the Beetle','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur18.jpeg','Wilbur the Beetle','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur19.jpeg','Wilbur the Beetle','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur20.jpeg','Wilbur the Beetle','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur21.jpeg','Wilbur the Beetle','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur24.jpeg','Wilbur the Beetle','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur25.jpeg','Wilbur the Beetle','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur26.jpeg','Wilbur the Beetle','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur27.jpeg','Wilbur the Beetle','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur28.jpeg','Wilbur the Beetle','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur29.jpeg','Wilbur the Beetle','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur30.jpeg','Wilbur the Beetle','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur31.jpeg','Wilbur the Beetle','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur32.jpeg','Wilbur the Beetle','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur33.jpeg','Wilbur the Beetle','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur34.jpeg','Wilbur the Beetle','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur35.jpeg','Wilbur the Beetle','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur36.jpeg','Wilbur the Beetle','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur37.jpeg','Wilbur the Beetle','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur38.jpeg','Wilbur the Beetle','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur39.jpeg','Wilbur the Beetle','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur40.jpeg','Wilbur the Beetle','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur41.jpeg','Wilbur the Beetle','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur42.jpeg','Wilbur the Beetle','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur43.jpeg','Wilbur the Beetle','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur44.jpeg','Wilbur the Beetle','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur45.jpeg','Wilbur the Beetle','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur46.jpeg','Wilbur the Beetle','img46'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur47.jpeg','Wilbur the Beetle','img47'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur22.jpeg','Wilbur the Beetle','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur23.jpeg','Wilbur the Beetle','img23']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbur46.jpeg','Profile Photo: Wilbur'],
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
    ['Asterix',[1,'Charmander'],'Pokemon',false,false,false,'','D','2023-03-12',3.85,false,'Builds/asterix.html','Gaulois'],
    ['Vercingetorix',[1,'Charizard'],'Pokemon',false,false,false,'','D','2023-03-10',5.99,false,'Builds/vercingetorix.html','Gaulois'],
    ['Boudica',[1,'Dragonite'],'Pokemon',false,false,false,'','D','2023-03-11',3.47,false,'Builds/boudica.html','Gaulois'],
    ['Granfrog',[1,'Greninja'],'Pokemon',
        false,false,false,false,'E','2021-11-11',5.68,false,'Builds/Pokemon/Granfrog.html',false,'2022-08-17',models[11],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog01.jpeg','Granfrog the Greninja','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog02.jpeg','Granfrog the Greninja','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog03.jpeg','Granfrog the Greninja','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog04.jpeg','Granfrog the Greninja','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog05.jpeg','Granfrog the Greninja','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog06.jpeg','Granfrog the Greninja','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog07.jpeg','Granfrog the Greninja','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog08.jpeg','Granfrog the Greninja','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog09.jpeg','Granfrog the Greninja','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog10.jpeg','Granfrog the Greninja','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog11.jpeg','Granfrog the Greninja','img11']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/granfrog02.jpeg','Profile Photo: Granfrog'],
        'So inspiration for this piece is I was looking for a Christmas present idea for a particularly grandmother of mine who is aboslutely obsessed with frogs. I knew I wanted to make her something from scratch, but the hobby stores don\'t just have generic model kits of plain regular animals lying around that creating her a custom painted model frog was a no go. So after much consideration I realized the closest I could do was a pokemon frog. So anyhow, for the color scheme on this one, I didn\'t want to go with the traditional blue that Greninja is known for, but instead respecting my grandmother\'s love for the animal, wanted to keep it as close to the traditional frog colors as possible. Particularly the tropical rainforest frogs you see from South America with the bright colors on their backs.','Mary, Nebraska',
        [
            ['Bulbapedia','https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pokémon)'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/pokemon-47-greninja-model-kit?variant=40332069765317'],
            ['NewType','https://newtype.us/p/dwk8jzQtdPBUWYb5VxT3/h/pokemon-greninja']
        ],false,false,true,false
    ],
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
    ['Thor',[1,'Gallantmon'],'Digimon',
        false,false,false,'','E','2022-10-05',22.5,false,'Builds/Digimon/Thor.html','Norse','2022-11-28',models[64],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor01.jpeg','Thor','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor02.jpeg','Thor','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor03.jpeg','Thor','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor04.jpeg','Thor','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor05.jpeg','Thor','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor06.jpeg','Thor','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor07.jpeg','Thor','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor08.jpeg','Thor','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor09.jpeg','Thor','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor10.jpeg','Thor','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor11.jpeg','Thor','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor12.jpeg','Thor','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor13.jpeg','Thor','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor14.jpeg','Thor','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor15.jpeg','Thor','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor16.jpeg','Thor','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor17.jpeg','Thor','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor18.jpeg','Thor','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor19.jpeg','Thor','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor20.jpeg','Thor','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor21.jpeg','Thor','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor22.jpeg','Thor','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor23.jpeg','Thor','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor24.jpeg','Thor','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor25.jpeg','Thor','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor26.jpeg','Thor','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor27.jpeg','Thor','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/thor28.jpeg','Thor','img28']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/thor27.jpeg','Profile Photo: Fenrir'],
        'After having completed Fafnir, Fenrir and Ragnarok I was having way too much fun construcitn Digimon builds that I had to do one more so I went and bought Gallantmon. FIRST OFF.... I am so wowed and bedazzled how this shield turned out. It is just beyond surreal. But to get into the theme, unlike the previous three which I kept faithful to their original design by the Digimon creators, with Thor I decided to get more creative. I though his mostly white body was too vague and bland, plus too similar to Omnimon\'s so I decided to spice it up by painting it the exact opposite color to make it stand out. For the black I chose Turbo Dork\'s shade Black Ice. This was my first time using this color and I admit I was expecting more. It does fall a bit flat that I could have achieved similar results with any plain generic black paint with plenty of gloss top coat added on top. But the Black Ice did have a little bit of shine which was cool. Also for distinction, the Black Ice was used solely on the body of Thor. For the black parts of the shield, I used Vallejo\'s Burnt Iron. Burnt Iron on the other hand I just absolutely love this shade of paint. It looks fantastic every time I use it. Not only is it dark, but it also has a nice element of texture that just stands out that makes any paint project look much deeper. Also another modification, the original model kit comes with plastic vinyl flaps for the cape, which looked just ridiculous. So I threw those out and made a new cape out of actual canvas and mine looks way better.',false,
        [
            ['Video','https://www.instagram.com/reel/CliF2wOMz8g/?igshid=YzcxN2Q2NzY0OA=='],
            ['Fandom','https://digimon.fandom.com/wiki/Gallantmon?so=search'],
            ['Digmon Cybersleuth','https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/262-gallantmon'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/digimon-tamers-figure-rise-standard-amplified-dukemon-gallantmon'],
            ['NewType','https://newtype.us/p/QsA7C5WeJfFpYIYbCCU3/h/figure-rise-omegamon-amplified'],
            ['Turbo Dork: Black Ice','https://turbodork.com/products/black-ice']
        ],['Heimdall'],false,true,false
    ],
    ['Jormungandr',[1,'Imperialdramom'],'Digimon',false,false,false,'','A'],
    ['Nidhogg',[1,'Machinedramon'],'Digimon',false,false,false,'','A'],
    ['Fenrir',[1,'Metal Garurumon'],'Digimon',
        false,false,false,'','E','2022-07-07',20.58,false,'Builds/Digimon/Fenrir.html','Norse','2022-09-21',models[62],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir01.jpeg','Fenrir','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir02.jpeg','Fenrir','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir03.jpeg','Fenrir','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir04.jpeg','Fenrir','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir05.jpeg','Fenrir','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir06.jpeg','Fenrir','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir07.jpeg','Fenrir','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir08.jpeg','Fenrir','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir09.jpeg','Fenrir','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir10.jpeg','Fenrir','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir11.jpeg','Fenrir','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir12.jpeg','Fenrir','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir13.jpeg','Fenrir','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir14.jpeg','Fenrir','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir15.jpeg','Fenrir','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir16.jpeg','Fenrir','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir17.jpeg','Fenrir','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir18.jpeg','Fenrir','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir19.jpeg','Fenrir','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir20.jpeg','Fenrir','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir21.jpeg','Fenrir','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir22.jpeg','Fenrir','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir23.jpeg','Fenrir','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir24.jpeg','Fenrir','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir25.jpeg','Fenrir','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir26.jpeg','Fenrir','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir27.jpeg','Fenrir','img27']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/fenrir25.jpeg','Profile Photo: Fenrir'],
        'I had been building Gundams and mechas for a while now and wanted to do something a little more organic. I had purchased the Omnimon kit but had not built it yet. But considering Omnimon is the fusion of WarGreymon and MetalGarurumon I was starting to think maybe it would only be appropriate I build those two first before moving on to Omnimon. So next thing I know is I\'m online ordering both those two kits as well and then all of a sudden I\'m opening MetalGarurumon\'s box and spraying primer on the plastic pieces. For Fenrir, despite the cool Norse name I stuck pretty traditional to the design. Did not change any of the colors. Did thing the Vallejo Electric Blue however turned out great for the body of this wolf. Also loved how the crest on his stomach turned out. To achieve that affect I used Vallejo Arctic Metallic Blue and then a candy effect of red transpirant over gold paint in order to make it so shiny. Every time I look up at this build where it\'s currently mounted on my bookshelf I am just taken back by it. This was my first ever Digimon build and I am just so proud of how I did.',false,
        [
            ['Video','https://www.instagram.com/reel/Cixi0LbAGST/?igshid=YzcxN2Q2NzY0OA=='],
            ['Fandom','https://digimon.fandom.com/wiki/MetalGarurumon?so=search'],
            ['Digmon Cybersleuth','https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/297-metalgarurumon'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/digimon-adventure-figure-rise-standard-amplified-metalgarurumon-model-kit'],
            ['NewType','https://newtype.us/p/8ZOOYNmIKJ69rfHIhP3v/h/figure-rise-metalgarurumon-amplified']
        ],['Fafnir','Ragnarok'],false,true,false
    ],
    ['T\u00FDr',[1,'Metal Greymon'],'Digimon',false,false,false,'','A'],
    ['Odin',[1,'Shine Greymon'],'Digimon',false,false,false,'','A'],
    ['Ragnarok',[1,'Omnimon'],'Digimon',
        false,false,false,'','E','2022-07-05',19.65,false,'Builds/Digimon/Ragnorok.html','Norse','2022-10-17',models[63],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok01.jpeg','Ragnarok','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok02.jpeg','Ragnarok','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok03.jpeg','Ragnarok','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok04.jpeg','Ragnarok','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok05.jpeg','Ragnarok','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok06.jpeg','Ragnarok','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok07.jpeg','Ragnarok','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok08.jpeg','Ragnarok','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok09.jpeg','Ragnarok','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok10.jpeg','Ragnarok','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok11.jpeg','Ragnarok','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok12.jpeg','Ragnarok','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok13.jpeg','Ragnarok','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok14.jpeg','Ragnarok','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok15.jpeg','Ragnarok','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok16.jpeg','Ragnarok','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok17.jpeg','Ragnarok','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok18.jpeg','Ragnarok','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok19.jpeg','Ragnarok','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok20.jpeg','Ragnarok','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok21.jpeg','Ragnarok','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok22.jpeg','Ragnarok','img22']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/ragnarok17.jpeg','Profile Photo: Ragnarok'],
        'Since its original debut in the Digimon movie, Omnimon has always been my favorite Digimon that I just had to build this. For this kit I really tried hard to bring out the colors and make them pop. For the blue I used a Valejo Electric Blue and the red I used Ferari Red. For the cape I found a greate crimson/magenta for the font facing side and on the back I tried experiementing with mixing different satan / ivory and shades of white paint together to attempt to make a nice fluffy swirly feather effect. I definitely failed on the effect but it\'s somethihgn I will continue attempting and practicing at. Also I mm maybe most proud of the chest. For the blue lines I hand painted them with Testors Glossy Teal and I just love the shiny blue look of this paint. All in all I am well pleased by the result of this',false,
        [
            ['Video','https://www.instagram.com/reel/Cj0z4GPs1Xo/?igshid=YzcxN2Q2NzY0OA=='],
            ['Fandom','https://digimon.fandom.com/wiki/Omnimon'],
            ['Digmon Cybersleuth','https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/315-omnimon'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/digimon-figure-rise-standard-amplified-omegamon-model-kit'],
            ['NewType','https://newtype.us/p/QsA7C5WeJfFpYIYbCCU3/h/figure-rise-omegamon-amplified']
        ],['Fenrir','Fafnir'],false,true,false
    ],
    ['Revelation',[1,'Omnimon X'],'Digimon',false,false,false,'','A'],
    ['Fafnir',[1,'War Greymon'],'Digimon',
        false,false,false,'','E','2022-07-08',20.7,false,'Builds/Digimon/Fafnir.html','Norse','2022-10-04',models[10],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir01.jpeg','Fafnir','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir02.jpeg','Fafnir','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir03.jpeg','Fafnir','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir04.jpeg','Fafnir','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir05.jpeg','Fafnir','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir06.jpeg','Fafnir','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir07.jpeg','Fafnir','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir08.jpeg','Fafnir','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir09.jpeg','Fafnir','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir10.jpeg','Fafnir','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir11.jpeg','Fafnir','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir12.jpeg','Fafnir','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir13.jpeg','Fafnir','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir14.jpeg','Fafnir','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir15.jpeg','Fafnir','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir16.jpeg','Fafnir','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir17.jpeg','Fafnir','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir18.jpeg','Fafnir','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir19.jpeg','Fafnir','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir20.jpeg','Fafnir','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir21.jpeg','Fafnir','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir22.jpeg','Fafnir','img22']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/fafnir17.jpeg','Profile Photo: Fafnir'],
        'So I loved the show Digimon as a kid growing up, and WarGreymon plus his evolution Omnimon I always thought they were just the coolest. When I saw the amplified kit of him and all its extra details, I was just completedly sold. It came out great. My use of the Vallejo Ferarri Red looked better than the typical yellow-orange of the original plastic. This was just rad as ever.',false,
        [
            ['Video','https://www.instagram.com/reel/CjUMt3eP1lk/'],
            ['Fandom','https://digimon.fandom.com/wiki/WarGreymon'],
            ['Digmon Cybersleuth','https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/228-wargreymon'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/digimon-adventure-figure-rise-standard-amplified-wargreymon-model-kit'],
            ['NewType','https://newtype.us/p/dGkX8wc4OgATMVVeqW5A/h/figure-rise-wargreymon-amplified']
        ],['Fenrir','Ragnarok'],false,true,false
    ],

    //Display
    ['Diurnum',[1,'City Area, 30 Minute Missions'],'Display',
        false,false,false,false,'E','2022-01-10',9.67,false,'Builds/Displays/Diurnum.html',false,'2022-03-21',models[9],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum01.jpeg','City of Diurnum','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum02.jpeg','City of Diurnum','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum03.jpeg','City of Diurnum','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum04.jpeg','City of Diurnum','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum05.jpeg','City of Diurnum','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum06.jpeg','City of Diurnum','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum07.jpeg','City of Diurnum','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum08.jpeg','City of Diurnum','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum09.jpeg','City of Diurnum','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum10.jpeg','City of Diurnum','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum11.jpeg','City of Diurnum','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum12.jpeg','City of Diurnum','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum13.jpeg','City of Diurnum','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum14.jpeg','City of Diurnum','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum15.jpeg','City of Diurnum','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum16.jpeg','City of Diurnum','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum17.jpeg','City of Diurnum','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum18.jpeg','City of Diurnum','img18']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/diurnum18.jpeg','Profile Photo: Diurnum'],
        'Diurnum; Latin for the City of Light. Now though just relics in the dust bowl of the desert. I had went to a plastic modeling convention recently and I was fascinated by all the people who built dioramas. They were so realistic and looked so cool. It had me inspired to want to create my own scenery pieces to show off my own models in. This was my first dabble and attemp. I\'m real proud of how this turned out and not going to lie this little building came out so cute.',
        false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/1-144-customized-scene-base-city-area-ver?variant=37444255678661'],
            ['NewType','https://newtype.us/p/CB9RI7xIzfUuV7wIFaYw/h/30mm-customize-scene-base-06-city-area-ver']
        ],false,false,true,false
    ],
    ['Battlefield Earth',[2,'Energy Ring Emitter'],'Display',false,false,false,'','A'],
    ['Kataluma',[1,'Hangar Bay'],'Display',
        false,false,false,'','E','2022-02',16.96,true,'Builds/Displays/Kataluma.html',false,'2022-04-04',models[65],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma01.jpeg','Kataluma','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma02.jpeg','Kataluma','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma03.jpeg','Kataluma','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma04.jpeg','Kataluma','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma05.jpeg','Kataluma','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma06.jpeg','Kataluma','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma07.jpeg','Kataluma','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma08.jpeg','Kataluma','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma09.jpeg','Kataluma','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma10.jpeg','Kataluma','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma11.jpeg','Kataluma','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma12.jpeg','Kataluma','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma13.jpeg','Kataluma','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma14.jpeg','Kataluma','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma15.jpeg','Kataluma','img15']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/kataluma04B.jpeg','Profile Photo: Kataluma'],
        'The Kataluma, ou en grec: \"\u039A\u03B1\u03C4\u03B1\u03BB\u03C5\u03BC\u03B1\", is the name of a ship in my own Gundam self-fiction I\'m working on. Greek for Inn, and word used in the original Greek bible when Mary and Joseph were looking for a place to stay in Bethlehem. Well there is room stay at this Inn for my Gundams. Specifically just a 1:144 scale model. It is a tight squeeze for even the smallest Gundams of that scale to fit. Would have been nice if the designers had planned a little more space. But this was mostly just a practice run for my much larger project the Stratle. Overall I liked how it tuned out. It looks great with the metallic paint colors and the Evan Designs LEDs really make it pop.',false,
        [
            ['USA Gundam Store','https://www.usagundamstore.com/products/1-144-gundam-hanger-bay?variant=37766625657029'],
            ['LEDS: Evan Designs','https://evandesigns.com']
        ],['Stratle'],false,true
    ],
    ['Stratle',[1,'Maintenance Bay'],'Display',
        false,false,false,'','E','2022-02-11',27.12,true,'Builds/Displays/Stratle.html',false,'2022-04-11',models[66],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle01.jpeg','Stratle','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle02.jpeg','Stratle','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle03.jpeg','Stratle','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle04.jpeg','Stratle','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle05.jpeg','Stratle','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle06.jpeg','Stratle','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle07.jpeg','Stratle','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle08.jpeg','Stratle','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle09.jpeg','Stratle','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle10.jpeg','Stratle','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle11.jpeg','Stratle','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle12.jpeg','Stratle','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle13.jpeg','Stratle','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle14.jpeg','Stratle','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle15.jpeg','Stratle','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle16.jpeg','Stratle','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle17.jpeg','Stratle','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle18.jpeg','Stratle','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle19.jpeg','Stratle','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle20.jpeg','Stratle','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle21.jpeg','Stratle','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle22.jpeg','Stratle','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle23.jpeg','Stratle','img23']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/stratle18.jpeg','Profile Photo: Stratle'],
        'I always want to find cool and new ways to display my models, particularly in ways that are realistic. And I always like the idea of envisioning my Gundams docked inside the hangar of a space battleship. Especially with the little walkways, catwalks, cranes and equipment scattered about. So when I saw this kit announced it just screamed to me. I wanted to paint this in all metal colors like a real ship\s hull or dockyard, add LED lighting and make it as realistic looking as possible. Which not to toot my own horn, but I definitely feel like I met my goal here. Every which way and angle I look at this build it just impresses me. And when I shut off the lights and flip the LEDs on, gosh it really glows. I can just imagine this being inside a ship in real life and sconstruction workers running up and down the catwalks operating on their mobile suits. I placed a straight build Tallgeese in it for now but I cannot wait till I find just the right one of my painted models to place in it in the future. Also, an idea for a future build. The kit has instructions and supports taking four of these kits and combining them together to make a super sized mobile suit hangar. Definitely something in the back of my mind that I am contemplating one day pursuing.',false,
        [
            ['LEDS','https://evandesigns.com'],
            ['USA Gundam Store','https://www.usagundamstore.com/products/gundam-maintenance-bay-for-1-100-1-144?variant=39742292984005'],
            ['NewType','https://newtype.us/p/TZllOhRZkRmG7KJdjDAW/h/composable-action-base#builds'],
            ['LEDS: Evan Designs','https://evandesigns.com']
        ],['Kataluma'],false,true
    ],

    //Ship
    ['Libeccio',[0.2,'Andromeda Black'],'Ship',
        false,false,false,'StarBlazer','E','2022-09-09',4.42,false,'Builds/Ships/Libeccio.html','French Winds','2023-02-06',models[8],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio01.jpeg','Libeccio Andromeda Class Battleship','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio02.jpeg','Libeccio Andromeda Class Battleship','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio03.jpeg','Libeccio Andromeda Class Battleship','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio04.jpeg','Libeccio Andromeda Class Battleship','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio05.jpeg','Libeccio Andromeda Class Battleship','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio06.jpeg','Libeccio Andromeda Class Battleship','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio07.jpeg','Libeccio Andromeda Class Battleship','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio08.jpeg','Libeccio Andromeda Class Battleship','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio09.jpeg','Libeccio Andromeda Class Battleship','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio10.jpeg','Libeccio Andromeda Class Battleship','img10']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/libeccio05.jpeg','Profile Photo: Libeccio'],
        'Named after the Mediterranean SouthWest wind, I present to you the Libeccio. I had, had way too much fun building the Eternal, Archangel and Dominion, that I ached to build another ship model again. Granted there are not many other ships in the Gundam lineup to build, and also that Bandai is currently not manufacturing new ones, I had no choice but to branch out and try another franchise. And luckly enough at the time, there were lots of StarBlazers kits floating around in rotation to take advantavge of. I know nothing about the StarBlazer though of course. But the kits were cool enough that they seemed worth giving them a try.',
        false,
        [
            ['Video','https://www.instagram.com/reel/CoVMgaLMyp5/?igshid=YzcxN2Q2NzY0OA=='],
            ['StarBlazer Wiki','https://yamato.fandom.com/wiki/Andromeda_Black']
        ],['Ostro','Ponente','Levante'],false,true,'1:1000'
    ],
    ['Ostro',[0.2,'Cosmo Falcon'],'Ship',
        false,false,false,'StarBlazer','E','2022-07-06',6.33,false,'Builds/Ships/Ostro.html','French Winds','2022-07-18',models[37],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro01.jpeg','Ostro','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro02.jpeg','Ostro','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro03.jpeg','Ostro','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro04.jpeg','Ostro','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro05.jpeg','Ostro','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro06.jpeg','Ostro','img6']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/ostro03.jpeg','Profile Photo: Ostro'],
        'Sky theme. The photos don\'t do the model justice, but if you focus and look very, very closely there is a slight white swirl inside the blue. On this one experimented with new technique to lightly overlap one color over another by wrapping in stretched baby whites. Basically I painted the base blue layer first. Then took a baby white and stretched it out so that there were porous gaps, wrapped the wipe around the plastic, then sprayed the second color in order to make the clouds look. It came out really faint though that I am going to need more practice at this technique.','Zack #TheLunchDude, Iowa',
        [
            ['StarBlazer Wiki','https://yamato.fandom.com/wiki/Type-99_Cosmo_Falcon']
        ],['Libeccio','Ponente','Levante'],false,true,false
    ],
    ['Ponente',[1,'Cosmo Zero'],'Ship',false,false,false,'StarBlazer','B'],
    ['Levante',[1,'Nagato'],'Ship',false,false,false,'Space Rengo Kantai','B'],

    //Transformer
    ['Wilbee',[1,'Bumblebee'],'Transformer',
        false,false,false,false,'E','2022-11-06',9.33,false,'Builds/Transformers/Wilbee.html','Wilbur','2023-01-09',models[5],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee01.jpeg','Wilbee','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee02.jpeg','Wilbee','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee03.jpeg','Wilbee','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee04.jpeg','Wilbee','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee05.jpeg','Wilbee','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee06.jpeg','Wilbee','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee07.jpeg','Wilbee','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee08.jpeg','Wilbee','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee09.jpeg','Wilbee','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee10.jpeg','Wilbee','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee11.jpeg','Wilbee','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee12.jpeg','Wilbee','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee13.jpeg','Wilbee','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee14.jpeg','Wilbee','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee15.jpeg','Wilbee','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee16.jpeg','Wilbee','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee17.jpeg','Wilbee','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee18.jpeg','Wilbee','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee19.jpeg','Wilbee','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee20.jpeg','Wilbee','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee21.jpeg','Wilbee','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee22.jpeg','Wilbee','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee23.jpeg','Wilbee','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee24.jpeg','Wilbee','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee25.jpeg','Wilbee','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee26.jpeg','Wilbee','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee27.jpeg','Wilbee','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee28.jpeg','Wilbee','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee29.jpeg','Wilbee','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee30.jpeg','Wilbee','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee31.jpeg','Wilbee','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee32.jpeg','Wilbee','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee33.jpeg','Wilbee','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee34.jpeg','Wilbee','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee35.jpeg','Wilbee','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee36.jpeg','Wilbee','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee37.jpeg','Wilbee','img37']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/wilbee36.jpeg','Profile Photo: Wilbee'],
        'Was working on the Volkswagen Beetle model Wilbur and train of thought on this led me to considering the Transformer\'s 2018 Bumblebee film Volkswagen bug version of the eponymous \'Bumblebee\'. So this lead me to immediately buying the eqivalent Trumpeter brand model Bumblebee kit and painting him the same colors as Wilbur... thus \u00E0 la Wil-Beeeee!!!! I like to imagine him being my Wilbur transformed into robot mode. Oh and unlike Captain Bumble, Wilbee is a total Predacon.',
        'Tyler, North Carolina',
        [
            ['Video','https://www.instagram.com/p/CnM23e9IV7k/'],
            ['USA Gundam','https://www.usagundamstore.com/products/transformers-bumblebee-smart-model-kit?variant=41383099105477'],
            ['NewType','https://newtype.us/p/TgNnMiuDbvcowmHCougQ/h/trumpeter-bumblebee-smart-kit'],
            ['Amazon','https://a.co/d/a6lagxe']
        ],['Wilbur'],false,true,false
    ],
    
    //Zoid
    ['Dash Hound',[1,'Shadow Fox'],'Zoid',
        false,false,false,'','E','2023-06-12',26.95,false,'Builds/Zoids/DashHound.html',false,'2023-07-24',models[74],
        [
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound01.jpeg','Dash Hound','img1'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound02.jpeg','Dash Hound','img2'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound03.jpeg','Dash Hound','img3'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound04.jpeg','Dash Hound','img4'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound05.jpeg','Dash Hound','img5'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound06.jpeg','Dash Hound','img6'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound07.jpeg','Dash Hound','img7'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound08.jpeg','Dash Hound','img8'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound09.jpeg','Dash Hound','img9'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound10.jpeg','Dash Hound','img10'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound11.jpeg','Dash Hound','img11'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound12.jpeg','Dash Hound','img12'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound13.jpeg','Dash Hound','img13'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound14.jpeg','Dash Hound','img14'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound15.jpeg','Dash Hound','img15'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound16.jpeg','Dash Hound','img16'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound17.jpeg','Dash Hound','img17'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound18.jpeg','Dash Hound','img18'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound19.jpeg','Dash Hound','img19'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound20.jpeg','Dash Hound','img20'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound21.jpeg','Dash Hound','img21'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound22.jpeg','Dash Hound','img22'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound23.jpeg','Dash Hound','img23'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound24.jpeg','Dash Hound','img24'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound25.jpeg','Dash Hound','img25'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound26.jpeg','Dash Hound','img26'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound27.jpeg','Dash Hound','img27'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound28.jpeg','Dash Hound','img28'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound29.jpeg','Dash Hound','img29'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound30.jpeg','Dash Hound','img30'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound31.jpeg','Dash Hound','img31'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound32.jpeg','Dash Hound','img32'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound33.jpeg','Dash Hound','img33'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound34.jpeg','Dash Hound','img34'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound35.jpeg','Dash Hound','img35'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound36.jpeg','Dash Hound','img36'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound37.jpeg','Dash Hound','img37'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound38.jpeg','Dash Hound','img38'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound39.jpeg','Dash Hound','img39'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound40.jpeg','Dash Hound','img40'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound41.jpeg','Dash Hound','img41'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound42.jpeg','Dash Hound','img42'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound43.jpeg','Dash Hound','img43'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound44.jpeg','Dash Hound','img44'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound45.jpeg','Dash Hound','img45'],
            ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound46.jpeg','Dash Hound','img46']
        ],
        ['https://hosting.photobucket.com/images/i/lesaintdumech/dashhound11.jpeg','Profile Photo: Dash Hound'],
        'So this was created as a gift for someone who is a huge Daschund lover. There are not any dachsund kits that I am aware of so I figured buy a Zoid fox kit and paint it in the dachshund color scheme. Specifically the red dachshund. This is also my first Zoid paint job. And being my first, naturally there were some challenges at getting the pieces to fit. The annoying thing about paint is it adds a tiny micro additional diameter to all the pieces that sometimes the ones with a tight fight just no longer fit. I did have to resort to mutilating the pieces a little on the inside and gluing them together. But it is after all a learning experience. My future Zoids will come together much better.',
        'Zack #TheLunchDude, Iowa',
        [
            ['Shadow Fox','https://zoids.fandom.com/wiki/Shadow_Fox'],
            ['Dachunds','https://en.wikipedia.org/wiki/Dachshund'],
            ['Video','https://www.instagram.com/reel/CvFcTPntiHA/?igshid=YzcxN2Q2NzY0OA=='],
            ['USA Gundam Store','https://www.usagundamstore.com/products/zoids-highend-master-model-rz-046-shadow-fox-marking-plus-ver-1-72-scale-model-kit'],
            ['NewType','https://newtype.us/p/mqnZCcWjZGMi6fm9t3Ir/h/zoids-rz-046-shadow-fox-marking-plus-ver']
        ],false,false,true
    ],
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
        insertLink(pgFinishedArray[i],'pgF');
    }
    for (let i=0;i<mgFinishedArray.length;i++) {
        insertLink(mgFinishedArray[i],'mgF');
    }
    for (let i=0;i<fmFinishedArray.length;i++) {
        insertLink(fmFinishedArray[i],'fmF');
    }
    for (let i=0;i<rgFinishedArray.length;i++) {
        insertLink(rgFinishedArray[i],'rgF');
    }
    for (let i=0;i<hgFinishedArray.length;i++) {
        insertLink(hgFinishedArray[i],'hgF');
    }
    for (i=0;i<mgsdFinishedArray.length;i++) {
        insertLink(mgsdFinishedArray[i],'mgsdF');
    }
    for (let i=0;i<sdFinishedArray.length;i++) {
        insertLink(sdFinishedArray[i],'sdF');
    }
    for (let i=0;i<pbFinishedArray.length;i++) {
        insertLink(pbFinishedArray[i],'pbF');
    }
    for (let i=0;i<sbFinishedArray.length;i++) {
        insertLink(sbFinishedArray[i],'sbF');
    }
    for (let i=0;i<carFinishedArray.length;i++) {
        insertLink(carFinishedArray[i],'carF');
    }
    for (let i=0;i<digiFinishedArray.length;i++) {
        insertLink(digiFinishedArray[i],'dgF');
    }
    for (let i=0;i<dispFinishedArray.length;i++) {
        insertLink(dispFinishedArray[i],'dspF');
    }
    for (let i=0;i<haroFinishedArray.length;i++) {
        insertLink(haroFinishedArray[i],'haroF');
    }
    for (let i=0;i<pokeFinishedArray.length;i++) {
        insertLink(pokeFinishedArray[i],'pokeF');
    }
    for (let i=0;i<shipFinishedArray.length;i++) {
        insertLink(shipFinishedArray[i],'shipF');
    }
    for (let i=0;i<transFinishedArray.length;i++) {
        insertLink(transFinishedArray[i],'transF');
    }
    for (let i=0;i<zoidFinishedArray.length;i++) {
        insertLink(zoidFinishedArray[i],'zoidF');
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
            let dateStart = new Date(projects[i][8]);
            dateStart.setDate(dateStart.getDate()+1);
            projects[i][8] = dateStart;
        }

        if (!projects[i][13]) {
            projects[i][13] = new Date('2099-12-25');
        } 
        else {
            let datePost = new Date(projects[i][13]);
            datePost.setDate(datePost.getDate()+1);
            projects[i][13] = datePost;
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
            pbFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='PG') {
            pgFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][3]) {
            sbFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='MG') {
            mgFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='FM') {
            fmFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='RG') {
            rgFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='HG') {
            hgFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='MGSD') {
            mgsdFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='SD') {
            sdFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Car') {
            carFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Digimon') {
            digiFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Display') {
            dispFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Haro') {
            haroFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Pokemon') {
            pokeFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Ship') {
            shipFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Transformer') {
            transFinishedArray.push(postedArray[i]);
        }
        else if (postedArray[i][2]=='Zoid') {
            zoidFinishedArray.push(postedArray[i]);
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

function insertLink(array,ID) {
    const listNode = document.getElementById(ID);
    const lineItemNode = document.createElement('li');
    let text = array[0];
    if (array.includes('...Pending...')) {
        text = '...Pending...';
    }
    const textNode = document.createTextNode(text);
    if (array[22]) {
        const linkNode = document.createElement('a');
        const URLNode = document.createAttribute('href');
        URLNode.value = array[11];
        linkNode.setAttributeNode(URLNode);
        linkNode.appendChild(textNode);
        lineItemNode.appendChild(linkNode);
    }
    else {
        lineItemNode.appendChild(textNode);
    }
    listNode.appendChild(lineItemNode);
}

function populateBuildsPage() {
    convertDate();
    generateLists();
    postedArray = sortByDate(postedArray,'post').reverse();

    let buildColumnsNode = document.getElementById('buildColumns');
    for (let i=0;i<postedArray.length;i++) {
        if(postedArray[i][22])
        {
            let divNode = document.createElement('div');
            let divClass = document.createAttribute('class');
            divClass.value = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-0 text-center';
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

            let spanNode = document.createElement('span');
            let spanClass = document.createAttribute('class');
            spanClass.value = 'align-self-center';
            spanNode.setAttributeNode(spanClass);

            divNode.appendChild(spanNode);

            let aNode2 = document.createElement('a');
            let hrefNode2 = document.createAttribute('href');
            hrefNode2.value = postedArray[i][11];
            aNode2.setAttributeNode(hrefNode2);
            let aClass2 = document.createAttribute('class');
            aClass2.value = 'mx-0';
            aNode2.setAttributeNode(aClass2);

            spanNode.appendChild(aNode2);

            let pNode = document.createElement('h4');
            let pClass = document.createAttribute('class');
            pClass.value = 'font-weight-bold text-danger buildH4';
            pNode.setAttributeNode(pClass);
            let pTextNode = document.createTextNode(postedArray[i][0]);
            if (postedArray[i][26]) {
                pTextNode = document.createTextNode(postedArray[i][26])
            }
            pNode.appendChild(pTextNode);

            aNode2.appendChild(pNode);

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

//Home Page
function homepageImages() {
    generateLists();

    let tempArray = [];

    for (let i=0; i<postedArray.length; i++) {
        if (postedArray[i][22]) {
            tempArray.push(postedArray[i]);
        }
    }

    //IMG 1
    let randomN = Math.floor(Math.random()* tempArray.length);
    let randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG1Node = document.getElementById('aIMG1');
    let aIMG1HREF = document.createAttribute('href');
    aIMG1HREF.value = randomPost[11];
    aIMG1Node.setAttributeNode(aIMG1HREF);

    let homeIMG1Node = document.getElementById('homeIMG1');
    let homeIMG1SRC = document.createAttribute('src');
    homeIMG1SRC.value = randomPost[16][0];
    homeIMG1Node.setAttributeNode(homeIMG1SRC);

    let aIMG1bNode = document.getElementById('aIMG1b');
    let aIMG1bHREF = document.createAttribute('href');
    aIMG1bHREF.value = randomPost[11];
    aIMG1bNode.setAttributeNode(aIMG1bHREF);

    let homeIMG1bNode = document.getElementById('homeIMG1b');
    let homeIMG1bSRC = document.createAttribute('src');
    homeIMG1bSRC.value = randomPost[16][0];
    homeIMG1bNode.setAttributeNode(homeIMG1bSRC);

    let aIMG1cNode = document.getElementById('aIMG1c');
    let aIMG1cHREF = document.createAttribute('href');
    aIMG1cHREF.value = randomPost[11];
    aIMG1cNode.setAttributeNode(aIMG1cHREF);

    let homeIMG1cNode = document.getElementById('homeIMG1c');
    let homeIMG1cSRC = document.createAttribute('src');
    homeIMG1cSRC.value = randomPost[16][0];
    homeIMG1cNode.setAttributeNode(homeIMG1cSRC);

    //IMG 2
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG2Node = document.getElementById('aIMG2');
    let aIMG2HREF = document.createAttribute('href');
    aIMG2HREF.value = randomPost[11];
    aIMG2Node.setAttributeNode(aIMG2HREF);

    let homeIMG2Node = document.getElementById('homeIMG2');
    let homeIMG2SRC = document.createAttribute('src');
    homeIMG2SRC.value = randomPost[16][0];
    homeIMG2Node.setAttributeNode(homeIMG2SRC);

    let aIMG2bNode = document.getElementById('aIMG2b');
    let aIMG2bHREF = document.createAttribute('href');
    aIMG2bHREF.value = randomPost[11];
    aIMG2bNode.setAttributeNode(aIMG2bHREF);

    let homeIMG2bNode = document.getElementById('homeIMG2b');
    let homeIMG2bSRC = document.createAttribute('src');
    homeIMG2bSRC.value = randomPost[16][0];
    homeIMG2bNode.setAttributeNode(homeIMG2bSRC);

    //IMG 3
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG3Node = document.getElementById('aIMG3');
    let aIMG3HREF = document.createAttribute('href');
    aIMG3HREF.value = randomPost[11];
    aIMG3Node.setAttributeNode(aIMG3HREF);

    let homeIMG3Node = document.getElementById('homeIMG3');
    let homeIMG3SRC = document.createAttribute('src');
    homeIMG3SRC.value = randomPost[16][0];
    homeIMG3Node.setAttributeNode(homeIMG3SRC);

    let aIMG3bNode = document.getElementById('aIMG3b');
    let aIMG3bHREF = document.createAttribute('href');
    aIMG3bHREF.value = randomPost[11];
    aIMG3bNode.setAttributeNode(aIMG3bHREF);

    let homeIMG3bNode = document.getElementById('homeIMG3b');
    let homeIMG3bSRC = document.createAttribute('src');
    homeIMG3bSRC.value = randomPost[16][0];
    homeIMG3bNode.setAttributeNode(homeIMG3bSRC);

    //IMG 4
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG4Node = document.getElementById('aIMG4');
    let aIMG4HREF = document.createAttribute('href');
    aIMG4HREF.value = randomPost[11];
    aIMG4Node.setAttributeNode(aIMG4HREF);

    let homeIMG4Node = document.getElementById('homeIMG4');
    let homeIMG4SRC = document.createAttribute('src');
    homeIMG4SRC.value = randomPost[16][0];
    homeIMG4Node.setAttributeNode(homeIMG4SRC);

    let aIMG4bNode = document.getElementById('aIMG4b');
    let aIMG4bHREF = document.createAttribute('href');
    aIMG4bHREF.value = randomPost[11];
    aIMG4bNode.setAttributeNode(aIMG4bHREF);

    let homeIMG4bNode = document.getElementById('homeIMG4b');
    let homeIMG4bSRC = document.createAttribute('src');
    homeIMG4bSRC.value = randomPost[16][0];
    homeIMG4bNode.setAttributeNode(homeIMG4bSRC);

    //IMG 5
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG5Node = document.getElementById('aIMG5');
    let aIMG5HREF = document.createAttribute('href');
    aIMG5HREF.value = randomPost[11];
    aIMG5Node.setAttributeNode(aIMG5HREF);

    let homeIMG5Node = document.getElementById('homeIMG5');
    let homeIMG5SRC = document.createAttribute('src');
    homeIMG5SRC.value = randomPost[16][0];
    homeIMG5Node.setAttributeNode(homeIMG5SRC);

    let aIMG5bNode = document.getElementById('aIMG5b');
    let aIMG5bHREF = document.createAttribute('href');
    aIMG5bHREF.value = randomPost[11];
    aIMG5bNode.setAttributeNode(aIMG5bHREF);

    let homeIMG5bNode = document.getElementById('homeIMG5b');
    let homeIMG5bSRC = document.createAttribute('src');
    homeIMG5bSRC.value = randomPost[16][0];
    homeIMG5bNode.setAttributeNode(homeIMG5bSRC);

    //IMG 6
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG6Node = document.getElementById('aIMG6');
    let aIMG6HREF = document.createAttribute('href');
    aIMG6HREF.value = randomPost[11];
    aIMG6Node.setAttributeNode(aIMG6HREF);

    let homeIMG6Node = document.getElementById('homeIMG6');
    let homeIMG6SRC = document.createAttribute('src');
    homeIMG6SRC.value = randomPost[16][0];
    homeIMG6Node.setAttributeNode(homeIMG6SRC);

    //IMG 7
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG7Node = document.getElementById('aIMG7');
    let aIMG7HREF = document.createAttribute('href');
    aIMG7HREF.value = randomPost[11];
    aIMG7Node.setAttributeNode(aIMG7HREF);

    let homeIMG7Node = document.getElementById('homeIMG7');
    let homeIMG7SRC = document.createAttribute('src');
    homeIMG7SRC.value = randomPost[16][0];
    homeIMG7Node.setAttributeNode(homeIMG7SRC);

    //IMG 8
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG8Node = document.getElementById('aIMG8');
    let aIMG8HREF = document.createAttribute('href');
    aIMG8HREF.value = randomPost[11];
    aIMG8Node.setAttributeNode(aIMG8HREF);

    let homeIMG8Node = document.getElementById('homeIMG8');
    let homeIMG8SRC = document.createAttribute('src');
    homeIMG8SRC.value = randomPost[16][0];
    homeIMG8Node.setAttributeNode(homeIMG8SRC);

    //IMG 9
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG9Node = document.getElementById('aIMG9');
    let aIMG9HREF = document.createAttribute('href');
    aIMG9HREF.value = randomPost[11];
    aIMG9Node.setAttributeNode(aIMG9HREF);

    let homeIMG9Node = document.getElementById('homeIMG9');
    let homeIMG9SRC = document.createAttribute('src');
    homeIMG9SRC.value = randomPost[16][0];
    homeIMG9Node.setAttributeNode(homeIMG9SRC);

    //IMG 10
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG10Node = document.getElementById('aIMG10');
    let aIMG10HREF = document.createAttribute('href');
    aIMG10HREF.value = randomPost[11];
    aIMG10Node.setAttributeNode(aIMG10HREF);

    let homeIMG10Node = document.getElementById('homeIMG10');
    let homeIMG10SRC = document.createAttribute('src');
    homeIMG10SRC.value = randomPost[16][0];
    homeIMG10Node.setAttributeNode(homeIMG10SRC);

    //IMG 11
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG11Node = document.getElementById('aIMG11');
    let aIMG11HREF = document.createAttribute('href');
    aIMG11HREF.value = randomPost[11];
    aIMG11Node.setAttributeNode(aIMG11HREF);

    let homeIMG11Node = document.getElementById('homeIMG11');
    let homeIMG11SRC = document.createAttribute('src');
    homeIMG11SRC.value = randomPost[16][0];
    homeIMG11Node.setAttributeNode(homeIMG11SRC);

    //IMG 12
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG12Node = document.getElementById('aIMG12');
    let aIMG12HREF = document.createAttribute('href');
    aIMG12HREF.value = randomPost[11];
    aIMG12Node.setAttributeNode(aIMG12HREF);

    let homeIMG12Node = document.getElementById('homeIMG12');
    let homeIMG12SRC = document.createAttribute('src');
    homeIMG12SRC.value = randomPost[16][0];
    homeIMG12Node.setAttributeNode(homeIMG12SRC);

    //IMG 13
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG13Node = document.getElementById('aIMG13');
    let aIMG13HREF = document.createAttribute('href');
    aIMG13HREF.value = randomPost[11];
    aIMG13Node.setAttributeNode(aIMG13HREF);

    let homeIMG13Node = document.getElementById('homeIMG13');
    let homeIMG13SRC = document.createAttribute('src');
    homeIMG13SRC.value = randomPost[16][0];
    homeIMG13Node.setAttributeNode(homeIMG13SRC);

    //IMG 14
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG14Node = document.getElementById('aIMG14');
    let aIMG14HREF = document.createAttribute('href');
    aIMG14HREF.value = randomPost[11];
    aIMG14Node.setAttributeNode(aIMG14HREF);

    let homeIMG14Node = document.getElementById('homeIMG14');
    let homeIMG14SRC = document.createAttribute('src');
    homeIMG14SRC.value = randomPost[16][0];
    homeIMG14Node.setAttributeNode(homeIMG14SRC);

    //IMG 15
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG15Node = document.getElementById('aIMG15');
    let aIMG15HREF = document.createAttribute('href');
    aIMG15HREF.value = randomPost[11];
    aIMG15Node.setAttributeNode(aIMG15HREF);

    let homeIMG15Node = document.getElementById('homeIMG15');
    let homeIMG15SRC = document.createAttribute('src');
    homeIMG15SRC.value = randomPost[16][0];
    homeIMG15Node.setAttributeNode(homeIMG15SRC);

    //IMG 16
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG16Node = document.getElementById('aIMG16');
    let aIMG16HREF = document.createAttribute('href');
    aIMG16HREF.value = randomPost[11];
    aIMG16Node.setAttributeNode(aIMG16HREF);

    let homeIMG16Node = document.getElementById('homeIMG16');
    let homeIMG16SRC = document.createAttribute('src');
    homeIMG16SRC.value = randomPost[16][0];
    homeIMG16Node.setAttributeNode(homeIMG16SRC);

    //IMG 17
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG17Node = document.getElementById('aIMG17');
    let aIMG17HREF = document.createAttribute('href');
    aIMG17HREF.value = randomPost[11];
    aIMG17Node.setAttributeNode(aIMG17HREF);

    let homeIMG17Node = document.getElementById('homeIMG17');
    let homeIMG17SRC = document.createAttribute('src');
    homeIMG17SRC.value = randomPost[16][0];
    homeIMG17Node.setAttributeNode(homeIMG17SRC);

    //IMG 18
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG18Node = document.getElementById('aIMG18');
    let aIMG18HREF = document.createAttribute('href');
    aIMG18HREF.value = randomPost[11];
    aIMG18Node.setAttributeNode(aIMG18HREF);

    let homeIMG18Node = document.getElementById('homeIMG18');
    let homeIMG18SRC = document.createAttribute('src');
    homeIMG18SRC.value = randomPost[16][0];
    homeIMG18Node.setAttributeNode(homeIMG18SRC);

    //IMG 19
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG19Node = document.getElementById('aIMG19');
    let aIMG19HREF = document.createAttribute('href');
    aIMG19HREF.value = randomPost[11];
    aIMG19Node.setAttributeNode(aIMG19HREF);

    let homeIMG19Node = document.getElementById('homeIMG19');
    let homeIMG19SRC = document.createAttribute('src');
    homeIMG19SRC.value = randomPost[16][0];
    homeIMG19Node.setAttributeNode(homeIMG19SRC);

    //IMG 20
    randomN = Math.floor(Math.random()* tempArray.length);
    randomPost = tempArray[randomN];
    tempArray.splice(randomN,1);

    let aIMG20Node = document.getElementById('aIMG20');
    let aIMG20HREF = document.createAttribute('href');
    aIMG20HREF.value = randomPost[11];
    aIMG20Node.setAttributeNode(aIMG20HREF);

    let homeIMG20Node = document.getElementById('homeIMG20');
    let homeIMG20SRC = document.createAttribute('src');
    homeIMG20SRC.value = randomPost[16][0];
    homeIMG20Node.setAttributeNode(homeIMG20SRC);
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

    if (projectArray[4]) {
        popNode('PB ','projectTitle');
        popNode('PB ','projectTitleMb');
    }
    if (modelArray[1] === 1 && modelArray[27]) {
        popNode('Gundam ','projectTitle');
        popNode('Gundam ','projectTitleMb');
    }
    if (modelArray[1] === 2 || modelArray[1] === 3) {
        popNode(modelArray[27]+' ','projectTitle');
        popNode(modelArray[27]+' ','projectTitleMb');
    }
    if (projectArray[25]) {
        popNode(projectArray[25],'projectTitle');
        popNode(projectArray[25],'projectTitleMb');
        popNode(projectArray[25],'projectName');
    }
    else {
        popNode(projectArray[0],'projectTitle');
        popNode(projectArray[0],'projectTitleMb');
        popNode(projectArray[0],'projectName');
    }
    

    popNode(modelArray[3],'modelFullName');
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
    startStamp.setDate(startStamp.getDate()+1);
    let startMonth = convertMonth(startStamp.getMonth());
    let startYear = startStamp.getFullYear();
    
    let postStamp = new Date(projectArray[13]);
    postStamp.setDate(postStamp.getDate()+1);
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

    insertPhoto(projectArray[16],'projectProfilePhoto',false,325);

    if (projectArray[17]) {
        unhide('.projectDescriptionHD');
        popNode(projectArray[17],'projectDescription');
    }

/*    if (projectArray[12]) {
        unhide('.projectPaintsHD');
        createList(projectArray[12],'projectPaints');
    }   */

    if (projectArray[18]) {
        unhide('.projectCurrentOwnerHD');
        popNode(projectArray[18],'projectCurrentOwner');
    }

    if (projectArray[21]) {
        unhide('.projectAvailableHD');
    }

    if (projectArray[24]) {
        unhide('.projectAliasHD');
        popNode(projectArray[24],'projectAlias');
    }

    let affilatesArray = [];
    if (projectArray[20]) {
        for (let i=0;i<projectArray[20].length;i++) {
            for (let j=0;j<projects.length;j++) {
                if (projectArray[20][i] === projects[j][0] && projects[j][22]===true) {
                    affilatesArray.push(projects[j]);
                }
            }
        }
    }
    if (affilatesArray.length>0) {
        unhide('.projectAffProjectsHD');
        projectLinks(affilatesArray.sort(),'projectAffProjects');
    }

    let otherArray = [];
    for (let i=0;i<projects.length;i++) {
        if ((projectArray[14] === projects[i][14]) && (projectArray[0] != projects[i][0]) && projects[i][22]) {
            otherArray.push(projects[i])
        }
    }
    for (let i=0;i<otherArray.length;i++) {
        for (let j=0;j<affilatesArray.length;j++) {
            if (otherArray[i] === affilatesArray[j]) {
                otherArray.splice(i,1);
            }
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

    if (modelArray[1] === 1) {
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
    insertPhoto(modelArray[26],'gModelPhoto',false,300);

    if (projectArray[5]) {
        unhide('.projectMGEXHD');
    }

    if (projectArray[4]) {
        unhide('.projectPBandaiHD');

        let text = 'Build';
        if (projectArray[3]) {
            text = 'Straight Build';
        }
        popNode(text,'projectPBandai');
    }
    else if (projectArray[3]) {
        unhide('.projectStraightBuildHD');
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
        popNode(modelArray[2],'modelOtherTitle')
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
        createList(modelArray[7],'gFrom');
    }

    if (modelArray[8]) {
        unhide('.gToHD');
        createList(modelArray[8],'gTo');
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

    if (modelArray[23]) {
        unhide('.gSDWHD');
        popNode(modelArray[23],'gSDW');
    }
}

function buildShipGundam() {
    unhide('.GundamShipPage');
    insertPhoto(modelArray[26],'gsModelPhoto',false,450);

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
    if (modelArray[6]) {
        unhide('.gsClassHD');
        popNode(modelArray[6],'gsClass');
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
    if (modelArray[16]) {
        unhide('.gsHeightHD');
        popNode(modelArray[16][1],'gsHeight');
    }
    if (modelArray[17]) {
        unhide('.gsWidthHD');
        popNode(modelArray[17][1],'gsWidth');
    }

    if (modelArray[13]) {
        unhide('.gsManufacturerHD');
        popNode(modelArray[13],'gsManufacturer');
    }

    if (modelArray[14]) {
        unhide('.gsAffiliationHD');
        createList(modelArray[14],'gsAffiliation');
    }

    if (modelArray[18]) {
        unhide('.gsPropulsionHD');
        createList(modelArray[18],'gsPropulsion');
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
    }

    if (modelArray[22]) {
        unhide('.gsCatapultHD');
        popNode(modelArray[22],'gsCatapult')
    }

    if (modelArray[23]) {
        unhide('.gsHangarHD');
        popNode(modelArray[23],'gsHangar')
    }

    if (modelArray[28]) {
        unhide('.gsFromHD');
        createList(modelArray[28],'gsFrom');
    }

    if (modelArray[29]) {
        unhide('.gsToHD');
        createList(modelArray[29],'gsTo');
    }

    if (modelArray[30]) {
        unhide('.gsTypeHD');
        popNode(modelArray[30],'gsType')
    }
}

function buildShipOther() {
    unhide('.OtherShipPage');
    insertPhoto(modelArray[26],'osModelPhoto',false,450);

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
    insertPhoto(modelArray[26],'caModelPhoto',false,450);

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
    insertPhoto(modelArray[26],'dpModelPhoto',false,350);

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
    insertPhoto(modelArray[26],'dgModelPhoto',false,400);
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
    if (modelArray[23]) {
        unhide('.dgAlternateHD');
        popNode(modelArray[23],'dgAlternate');
    }   
    if (modelArray[24]) {
        unhide('.dgNicknameHD');
        popNode(modelArray[24],'dgNickname');
    }
}

function buildPokemon() {
    unhide('.PokemonPage');
    insertPhoto(modelArray[26],'pkModelPhoto',false,300);
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
    insertPhoto(modelArray[26],'tsModelPhoto',false,300);

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
    insertPhoto(modelArray[26],'hpModelPhoto',false,300);

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

function buildZoid() {
    unhide('.ZoidPage');
    insertPhoto(modelArray[26],'zdModelPhoto',false,300);

    if (modelArray[2]) {
        unhide('.zdShortNameHD');
        popNode(modelArray[2],'zdShortName');
        popNode(modelArray[2],'modelOtherTitle')
    }

    if (modelArray[4]) {
        unhide('.zdSerialHD');
        popNode(modelArray[4],'zdSerial');
    }

    if (modelArray[5]) {
        unhide('.zdTypeHD');
        popNode(modelArray[5],'zdType');
    }

    if (modelArray[6]) {
        unhide('.zdCrewHD');
        popNode(modelArray[6],'zdCrew');
    }

    if (modelArray[7]) {
        unhide('.zdPilotHD');
        popNode(modelArray[7][0],'zdPilot');

        if (modelArray[7].length>1) {
            for (let i=1;i<modelArray[7].length;i++) {
                popNode(', '+modelArray[7][i],'zdPilot');
            }
        }
    }

    if (modelArray[8]) {
        unhide('.zdAffiiliationHD');
        popNode(modelArray[8],'zdAffiiliation');
    }

    if (modelArray[9]) {
        unhide('.zdWeightHD');
        popNode(modelArray[9][1],'zdWeight');
    }

    if (modelArray[10]) {
        unhide('.zdDepthHD');
        popNode(modelArray[10][1],'zdDepth');
    }

    if (modelArray[11]) {
        unhide('.zdHeightHD');
        popNode(modelArray[11][1],'zdHeight');
    }

    if (modelArray[12]) {
        unhide('.zdSpeedHD');
        popNode(modelArray[12][1],'zdSpeed');
    }

    if (modelArray[13]) {
        unhide('.zdWeaponsHD');
        createList(modelArray[13],'zdWeapons');
    }

    if (modelArray[14]) {
        unhide('.zdEquipmentHD');
        createList(modelArray[14],'zdEquipment');
    }

    if (modelArray[15]) {
        unhide('.zdDevelopedByHD');
        popNode(modelArray[15],'zdDevelopedBy');
    }

    if (modelArray[16]) {
        unhide('.zdFromHD');
        createList(modelArray[16],'zdFrom');
    }

    if (modelArray[17]) {
        unhide('.zdToHD');
        createList(modelArray[17],'zdTo');
    }

    if (modelArray[24]) {
        unhide('.zdAltNameHD');
        popNode(modelArray[24],'∂AltName');
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
    if (dots) {
        srcAttribute.value = dots+array[0];
    }
    else {
        srcAttribute.value = array[0];
    }
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
    classColAttribute.value = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-0 mb-3 text-center';
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