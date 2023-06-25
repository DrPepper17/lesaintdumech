/*
    0. ID
    1. Project Type: (category list)
        1. Gundam
        2. Ship: Gundam
        3. Ship: Other Franchise
        4. Car / Automobiles
        5. Display
        6. Digimon
        7. Pokemon
        8. Transformer
        9. Zoid
    

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
    19. Armaments (Array)
    20. Optional Equipment (array)
    21. Systems
    22. Designed by
    23. SDW Hero (true/false)
    24. Alternate Name
    25. Mobile Armor: true/false
    26. original photo (array): ["file path","photo name"]
    27. 

    // Ship (fictional): Gundam (2) //
    2. Short Name
    3. Full Name
    4. Serial Number

    // Ship (fictional): Other (3) //
    2. Short Name
    3. Full Name
    4. Serial Number. 
    5. 

    // Car (4) //
    2. Short Name
    3. Full Name
    4. Manufacturer
    5. Model
    6. Year
    7. Type of Vehicle (Category List: Car, Truck, Van, Plane, ship, spaceship_
    8. Sedan (boolean) (ignore if not a car)
    9. 

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
    3. Version 
    4. Vehicle form
    5. Faction

    // Zoid (9) //
    2. Name
    3. Serial No.
    4. Animal / Type
*/

//Models Array
const models = [
    [0],
    [1,
        1,
        "Gundam Heavyarms",
        "XXXG-01H Gundam Heavarms EW",
        "XXXG-01H",
        "Mobile Suit Gundam Wing",
        true,
        "XXXG-00W0 Wing Gundam Proto Zero",
        "XXXG-01H2 Gundam Heavarms Custom",
        "After Colony",
        [195,"195 A.C.",195],
        "Trowa Barton",
        ["Heero Yuy"],
        "Barton Foundation",
        ["Colony Liberation Organization","Operation Meteor","Peacemillion"],
        [16.7,"16.7 Meters"],
        [7.7,"7.7 Metric Tons"],
        "Gundanium Alloy",
        "Ultracompact Fusion Reactor",
        ["Vulcan Guns (x2)",
            "Machine Cannons (x2)",
            "Chest Gatling Guns (x2)",
            "Homing Missiles (x44)",
            "Micro Missiles (x52)",
            "Beam Gatling Gun",
            "Shield",
            "Army Knife",
            "Beam Saber"],
        [
            "Igel Unit",
            "Damselfly"
        ],
        [
            "Standard Gundam Operating System",
            "Self-Destruct System"
        ],
        "Hajime Katoki",
        false,
        false,
        false,
        ["img/models/heavyarmsew.jpeg","Gundam Heavyarms EW"],
    ],
    [2,
        1,
        "Gundam Spiegel",
        "GF13-021NG Gundam Spiegel",
        "GF13-021NG",
        "Mobile Fighter G Gundam",
        false,
        false,
        false,
        "Future Century",
        [60,"60 F.C.",60],
        "Schwartz Bruder",
        ["Kyoji Kasshu"],
        "Neo Germany",
        ["Neo Germany"],
        [16.3,"16.3 Meters"],
        [7.3,"7.3 Metric Tons"],
        "Gundanium Alloy super ceramic composite",
        "Ultracompact Fusion Reactor",
        ["Spiegel Blades (x2)",
            "Iron Net",
            "Messergranz"
        ],
        false,
        false,
        "Kunio Okawara",
        "Shadow Gundam"
    ],
    [3,
        4,
        "Bel-Air",
        "Chevy 1957 Bel-Air",
        "Chevy",
        "Bel-Air",
        1957,
        "Car",
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
    11. URL // don"t do invidivual pages for straightbuilds unless it"s a p-bandai
    12. Paint List array. / Straight builds false
    13. Date Posted
    14. Model (link array)
    15. Photos (array of arrays)
        [
            ["file path","alt text",ID: "img1"],
            ["file path","alt text",ID: "img2"]
        ]
    16. Profile photo (array) ["file path","photo name"]
    17.Theme / Description
    18. Gifted? If yes, string of to whom; If no, false
    19. Links (array of arrays)
        [
            ["site name","url"]
        ]
    20. Affiliated Projects (array: listing them by their name in Projects[0])
    21. Links 
    22. available
    23.
*/

//Pojects
const projects = [
    //Ad Stella (Mercury)
    ["Aerial (?)",[1,"Aerial"],"FM",false,false,false,"Mercury","A"],
    ["Aerial [HG]",[1,"Aerial"],"HG",true,false,false,"Mercury","D","2023-05-30",2.25,false,false,false],
    ["PB Aerial Permet Six [HG]",[1,"Aerial"],"HG",true,true,false,"Mercury","A"],
    ["Ariel",[1.5,"Aerial","Mirasoul Flight Pack"],"HG",false,false,false,"Mercury","B"],
    ["Cherub",[1,"Aerial"],"SD",false,false,false,"Mercury","D","2023-01",4.91,false,"Builds/Cherub.html",[""]],
    ["Azrael",[1,"Dilanza, Guel\"s"],"HG",false,false,false,"Mercury","E","2023-01",12.14,false,"Builds/Azrael.html",[""],"2023-02-27"],
    ["Adriel",[1,"LFrith"],"HG",false,false,false,"Mercury","B"],
    ["LFrith [HG]",[1,"LFrith"],"HG",true,false,false,"Mercury","D","2023-04",2.33,false,false,false],

    //Advanced Generation (Age)
    ["Uriel",[1,"Age-FX"],"SD",false,false,false,"Age","B"],
    ["Gamma Draconis",[1,"Danazine"],"HG",false,false,false,"Age","B"],

    //After Colony (Wing)
    ["Leo Army",[6,"Leo"],"LEO",false,false,false,"Wing","C","2021-10",37.42,false,"Builds/LeoArmy.html",["Tested every paint"]],
    ["South Park",[6,"Tallgeese","Epyon","Heavy Arms","Shenlong","Deathscythe","Sandrock"],"SD",false,false,false,"Wing","E","2021-06",54.42,true,"Builds/SouthPark.html",[""],"2021-06-21"],
    ["Gemini",[2,"Aquarius","Aquarius"],"SD",false,false,false,"Wing","E","2021-07",20.61,false,"Builds/Gemini.html",[""],"2022-01-24"],
    ["Pontus",[1,"Aquarius"],"SD",false,false,false,"Wing","B"],
    ["PB Deathscythe Hell (TV Version",[1,"Deathscythe Hell"],"HG",false,true,false,"Wing","A"],
    ["Epyon [RG]",[1,"Epyon"],"RG",true,false,false,"Wing","A"],
    ["Golden Ghidorah",[1,"Epyon"],"MG",false,false,false,"Wing","B"],
    ["Golden Ghidorah",[1,"Epyon"],"RG",false,false,false,"Wing","A"],
    ["PB Geminass 01 [HG]",[1.5,"Geminass 01","Geminass Assault Mobility Booster Expansion Pack"],"HG",true,true,false,"Wing","E","2022-12",6.5,false,"Builds/PBGeminassHG.html",false,"2023-04-27"],
    ["Major Tom",[1,"Geminass 01"],"SD",false,false,false,"Wing","E","2021-12",5.15,false,"Builds/MajorTom.html",[""],"2023-04-10"],
    ["Guerilla Arms",
        [1,"Heavy Arms"],
        "MG",
        false,
        false,
        false,
        "Wing",
        "E",
        "2021-04",
        60.07,
        false,
        "Builds/Gundams/GuerillaArms.html",
        false,
        "2021-05-22",
        models[1],
        [
            ["../../img/projects/gundams/guerilla_arms/gahamg19.JPG","Gundam Guerilla Arms","img19"],
            ["../../img/projects/gundams/guerilla_arms/gahamg20.JPG","Gundam Guerilla Arms","img20"],
            ["../../img/projects/gundams/guerilla_arms/gahamg21.JPG","Gundam Guerilla Arms","img21"],
            ["../../img/projects/gundams/guerilla_arms/gahamg22.JPG","Gundam Guerilla Arms","img22"],
            ["../../img/projects/gundams/guerilla_arms/gahamg23.JPG","Gundam Guerilla Arms","img23"],
            ["../../img/projects/gundams/guerilla_arms/gahamg24.JPG","Gundam Guerilla Arms","img24"],
            ["../../img/projects/gundams/guerilla_arms/gahamg25.JPG","Gundam Guerilla Arms","img25"],
            ["../../img/projects/gundams/guerilla_arms/gahamg26.JPG","Gundam Guerilla Arms","img26"],
            ["../../img/projects/gundams/guerilla_arms/gahamg27.JPG","Gundam Guerilla Arms","img27"],
            ["../../img/projects/gundams/guerilla_arms/gahamg28.JPG","Gundam Guerilla Arms","img28"],
            ["../../img/projects/gundams/guerilla_arms/gahamg29.JPG","Gundam Guerilla Arms","img29"],
            ["../../img/projects/gundams/guerilla_arms/gahamg30.JPG","Gundam Guerilla Arms","img30"],
            ["../../img/projects/gundams/guerilla_arms/gahamg31.JPG","Gundam Guerilla Arms","img31"],
            ["../../img/projects/gundams/guerilla_arms/gahamg01.JPG","Gundam Guerilla Arms","img1"],
            ["../../img/projects/gundams/guerilla_arms/gahamg02.JPG","Gundam Guerilla Arms","img2"],
            ["../../img/projects/gundams/guerilla_arms/gahamg03.JPG","Gundam Guerilla Arms","img3"],
            ["../../img/projects/gundams/guerilla_arms/gahamg04.JPG","Gundam Guerilla Arms","img4"],
            ["../../img/projects/gundams/guerilla_arms/gahamg05.JPG","Gundam Guerilla Arms","img5"],
            ["../../img/projects/gundams/guerilla_arms/gahamg06.JPG","Gundam Guerilla Arms","img6"],
            ["../../img/projects/gundams/guerilla_arms/gahamg07.JPG","Gundam Guerilla Arms","img7"],
            ["../../img/projects/gundams/guerilla_arms/gahamg08.JPG","Gundam Guerilla Arms","img8"],
            ["../../img/projects/gundams/guerilla_arms/gahamg09.JPG","Gundam Guerilla Arms","img9"],
            ["../../img/projects/gundams/guerilla_arms/gahamg10.JPG","Gundam Guerilla Arms","img10"],
            ["../../img/projects/gundams/guerilla_arms/gahamg11.JPG","Gundam Guerilla Arms","img11"],
            ["../../img/projects/gundams/guerilla_arms/gahamg12.JPG","Gundam Guerilla Arms","img12"],
            ["../../img/projects/gundams/guerilla_arms/gahamg13.JPG","Gundam Guerilla Arms","img13"],
            ["../../img/projects/gundams/guerilla_arms/gahamg14.JPG","Gundam Guerilla Arms","img14"],
            ["../../img/projects/gundams/guerilla_arms/gahamg15.JPG","Gundam Guerilla Arms","img15"],
            ["../../img/projects/gundams/guerilla_arms/gahamg16.JPG","Gundam Guerilla Arms","img16"],
            ["../../img/projects/gundams/guerilla_arms/gahamg17.JPG","Gundam Guerilla Arms","img17"],
            ["../../img/projects/gundams/guerilla_arms/gahamg18.JPG","Gundam Guerilla Arms","img18"],
            ["../../img/projects/gundams/guerilla_arms/gahamg32.JPG","Gundam Guerilla Arms","img32"]
        ],
        ["img/projects/gundams/guerilla_arms/gahamg32.JPG","Profile Photo: Gundam Guerilla Arms"],
        "Camouflage. Commando. Jungle Warfare. Entirely hand brushed. First attempt at custom painting. Entirely Testors paints. Huge learning experience.",
        false,
        [
            ["USA Gundam Store","https://www.usagundamstore.com/products/mg-1-100-gundam-heavyarms-ew-ver"],
            ["NewType","https://newtype.us/p/xyX3s81UEQTYgD2wfA49/h/mg-gundam-heavyarms-ew"],
            ["Amazon","https://a.co/d/03pIAks"]
        ]
    ],
    ["Phoebe",[1,"Maganac Corps"],"SD",false,false,false,"Wing","D","2022-04",8.42,false,"Builds/Phoebe.html",[""]],
    ["Isaac",[1,"Proto-Zero"],"SD",false,false,false,"Wing","E","2023-02",14.14,false,"Builds/Isaac.html",[""],"2023-05-10"],
    ["Jericho",[1,"Proto-Zero"],"HG",false,false,false,"Wing","E","2023-01",12.79,false,"Builds/Jericho.html",[""],"2023-05-24"],
    ["King David",[1,"Proto-Zero"],"MG",false,false,false,"Wing","E","2023-03",52.11,true,"Builds/KingDavid.html",[""],"2023-05-15"],
    ["Metal Zero",[1,"Proto-Zero"],"SD",false,false,false,"Wing","E","2023-01",14.19,false,"Builds/MetalZero.html",[""],"2023-05-04"],
    ["Proto-Zero [SD]",[1,"Proto-Zero"],"SD",true,false,false,"Wing","E","2021-12",1.67,false,false,false,"2023-05-01"],
    ["Napoleon",[2,"Tallgeese","Ceramic Horse"],"MG",false,false,false,"Wing","B"],
    ["St Dominic",[1,"Tallgeese"],"RG",false,false,false,"Wing","E","2021-12",19,false,"Builds/StDominic.html",[""],"2022-06-08"],
    ["PB Fl\u00FCgel Sparkel",[1,"Tallgeese Fl\u00FCgel"],"MG",false,true,false,"Wing","B"],
    ["PB Tallgeese Fl\u00FCgel [MG]",[1,"Tallgeese Fl\u00FCgel"],"MG",true,true,false,"Wing","D","2022-05",20.17,false,"Builds/PBTallgeeseFlugelMG.html",false],
    ["Wild Wing",[1,"Wing Gundam"],"MG",false,false,false,"Wing","E","2021-07",60.48,true,"Builds/WildWing.html",[""],"2022-02-14"],
    ["Wing Gundam [RG]",[1,"Wing Gundam"],"RG",true,false,false,"Wing","E","2021-07",12.59,false,false,false,"2022-02-07"],
    ["PB Clear Wing Zero [RG]",[1,"Wing Zero"],"RG",true,true,false,"Wing","E","2021-11",6.15,false,"Builds/PBZeroRG",false,"2022-04-19"],
    ["Dark Zero",[1,"Wing Zero"],"MG",false,false,false,"Wings","B"],
    ["Dark Zero",[1,"Wing Zero"],"RG",false,false,false,"Wings","A"],
    ["Dark Zero",[1,"Wing Zero"],"SD",false,false,false,"Wings","A"],
    ["Fiery Mothra",[1,"Wing Zero"],"MG",false,false,false,"Wings","B"],
    ["Fiery Mothra",[1,"Wing Zero"],"RG",false,false,false,"Wings","A"],
    ["Fiery Mothra",[1,"Wing Zero"],"SD",false,false,false,"Wings","A"],
    ["Gold Dust Woman",[1,"Wing Zero"],"SD",false,false,false,"Wing","E","2021-09",8.37,false,"Builds/GoldDustWoman.html",[""],"2022-02-01"],
    ["Snow White",[1,"Wing Zero"],"MG",false,false,false,"Wings","B"],
    ["Snow White",[1,"Wing Zero"],"RG",false,false,false,"Wings","B"],
    ["Snow White",[1,"Wing Zero"],"SD",false,false,false,"Wings","A"],
    ["Wing Zero EW KA [MG]",[1,"Wing Zero","GFFMC Wings For MG Wing Zero"],"MG",true,false,false,"Wing","C","2022-06",10.83,false,false,false],
    ["Zero Traditional",[1,"Wing Zero"],"MG",false,false,false,"Wings","B"],
    ["Zero Traditional",[1,"Wing Zero"],"RG",false,false,false,"Wings","B"],
    ["Zero Traditional",[1,"Wing Zero"],"SD",false,false,false,"Wings","A"],
    ["Zero EW",[1,"Wing Zero"],"MG",false,false,false,"Wings","B"],
    ["Zero EW",[1,"Wing Zero"],"RG",false,false,false,"Wings","A"],
    ["Zero EW",[1,"Wing Zero"],"SD",false,false,false,"Wings","A"],

    //After War (X)
    ["Gaebora",[1,"Airmaster"],"SD",false,false,false,"X","E","2021-10",5.51,false,"Builds/Gaebora.html",[""],"2022-03-28"],
    ["Biohazard",[1,"Double X"],"SD",false,false,false,"X","E","2022-08",5.83,false,"Builds/Biohazard.html",[""],"2022-10-24"],
    ["Charlie Daniels",[1,"Double X"],"SD",false,false,false,"X","E","2021-10",4.51,false,"Builds/CharlieDaniels.html",[""],"2022-08-01"],
    ["Corona Virus",[1,"Double X"],"MG",false,false,false,"X","E","2022-09",36.08,false,"Builds/Corona.html",[""],"2022-10-31"],
    ["Double X [MG]",[1,"Double X"],"MG",true,false,false,"X","E","2022-09",7.58,false,false,false,"2022-10-10"],
    ["Double X [HG]",[1,"Double X"],"HG",true,false,false,"X","E","2022-08",2,false,false,false,"2022-09-26"],
    ["Guapo",[1,"Leopard"],"SD",false,false,false,"X","E","2021-10",6.2,false,"Builds/Guapo.html",[""],"2022-03-07"],
    ["Iron Maiden",[1,"X Gundam"],"SD",false,false,false,"X","E","2021-10",4.83,false,"Builds/IronMaiden.html",[""],"2023-03-20"],

    //Anno Domini (00)
    ["Gundam Umlaut \xD6\xD6",[1,"00 Gundam"],"SD",false,false,false,"00","E","2021-06",10.83,false,"Builds/Umlaut.html",[""],"2021-06-23"],
    ["Metatron",[1,"00 Raiser"],"SD",false,false,false,"00","B"],
    ["PB Trans-Am Clear 00 Raiser [RG]",[1,"00 Gundam Raiser"],"RG",true,true,false,"00","E","2021-12",12.67,false,"Builds/PBooraiserRG.html",false,"2022-06-15"],
    ["Silver \"n\" Gold",[1,"00 Gundam QAN[T]"],"RG",false,false,false,"00","B"],
    ["Thunder QAN[T]",[1,"00 Gundam QAN[T]"],"SD",false,false,false,"00","E","2021-06",11.68,true,"Builds/ThunderQ.html",[""],"2021-08-09"],
    ["PB Trans-Am Clear 00 QAN[T] [RG]",[1,"00 Gundam QAN[T]"],"RG",true,true,false,"00","E","2022-01",8.33,false,"Builds/PBOOQRG.html",false,"2022-07-28"],
    ["Nena",[1,"Exia"],"SD",false,false,false,"00","D","2021-12",4.95,false,"Builds/Nena.html",[""]],
    ["PB Trans-Am Clear Exia [RG]",[1,"Exia"],"RG",true,true,false,"00","E","2021-12",6.58,false,"Builds/PBExiaRG.html",false,"2022-05-31"],
    ["PB Harute (Final Battle Version) [HG]",[1,"Harute"],"HG",true,true,false,"00","E","2022-03",5.75,false,"Builds/PBHaruteFinalHG.html",false,"2022-11-21"],
    ["Virtue/Nadlee [MG]",[3,"Virtue","Nadlee","VirtueStand"],"MG",true,false,false,"00","E","2022-02",20.08,true,"Builds/VirtueNadleeStand.html",false,"2023-01-16"],
    ["PB Zabanya (Final Battle Version) [HG]",[1,"Zabanya"],"HG",true,true,false,"00","E","2022-03",3,false,"Builds/PBZabanyaFinalHG.html",false,"2022-11-07"],

    //Correct Century (Turn A)
    ["John Wayne",[1,"Turn-A"],"SD",false,false,false,"TurnA","E","2021-09",6.62,false,"Builds/JohnWayne.html",[""],"2023-02-13"],

    //Cosmic Century (Seed)
    ["Gundam Fluorescent",[1,"Aegis"],"SD",false,false,false,"Seed","E","2021-06",9.94,false,"Builds/Fluorescent.html",[""],"2021-06-24"],
    ["Bald Eagle",[1,"Astray Blue Frame"],"MG",false,false,false,"Seed","B"],
    ["Raphael",[1,"Astray Gold Frame"],"SD",false,false,false,"Seed","B"],
    ["Oowashi Akatsuki [HG]",[1,"Akatsuki, Oowsahi"],"HG",true,false,false,"Seed","E","2021-12",2.67,false,false,false,"2022-04-26"],
    ["Rising Sun",[1,"Akatsuki, Oowashi"],"HG",false,false,false,"Seed","E","2021-11",17.28,false,"Builds/RisingSun.html",[""],"2022-04-28"],
    ["King Mars",[1,"Akatsuki, Shiranui"],"HG",false,false,false,"Seed","D","2022-05",13.67,false,"Builds/KingMars.html",[""]],
    ["Archangel",[2,"Archangel","Archangel"],"Ship",false,false,false,"Seed","E","2021-08",76.63,false,"Builds/ArchAngel.html",[""],"2022-01-10"],
    ["Dominion",[1,"Archangel"],"Ship",false,false,false,"Seed","E","2021-09",21.87,false,,"Builds/Dominion.html",[""],"2022-01-17"],
    ["Urban Commando",[1,"Buster"],"MG",false,false,false,"Seed","B"],
    ["Calamitous Godzilla",[1,"Calamity"],"FM",false,false,false,"Seed","B"],
    ["PB Armageddon",[2.5,"Dagger L","Dagger L","Dagger Expansion Pack"],"HG",false,true,false,"Seed","E","2022-03",28.5,false,"Builds/Armageddon.html",[""],"2022-05-23"],
    ["King Leir",[1,"Dagger L"],"HG",false,false,false,"Seed","E","2021-06",14.09,false,"Builds/KingLeir.html",[""],"2021-06-26"],
    ["Samus: Varia Suit",[1,"Dagger L"],"HG",false,false,false,"Seed","C","2023-06-13",3.58,false,"Builds/Gundams/VariaSuit.html",["Tamiya: Gold TS-21 Can","Testors: Sunflower 1191","Tamiya: Matt Black TS-6 Can","Vallejo: Game Color Fluorescent Green 72.104","Tamiya: Gun Metal TS-38 Can"]],
    ["Charizard",[1,"Destiny"],"MG",false,false,false,"Seed","B"],
    ["Charizard X",[1,"Destiny"],"SD",false,false,false,"Seed","E","2021-10",8.13,false,"Builds/CharizardX.html",[""],"2022-05-16"],
    ["Iapetus",[1,"Destiny"],"SD",false,false,false,"Seed","B"],
    ["Thin Blue Line",[2,"Duel Gundam","Duel Gundam Assault Shroud"],"MG",false,false,false,"Seed","B"],
    ["Eclipse ???",[1,"Eclipse"],"MG",false,false,false,"Seed","B"],
    ["PB Eclipse [MG]",[1.5,"Eclipse","Eclipse Maneuver Striker"],"MG",true,true,false,"Seed","E","2022-02",17.75,false,"Builds/PBEclipseMG.html",false,"2023-01-30"],
    ["Eternal",[1,"Eternal"],"Ship",false,false,false,"Seed","E","2021-08",24.1,false,"Builds/Eternal.html",[""],"2022-01-03"],
    ["Orga",[1,"Forbidden"],"FM",false,false,false,"Seed","A"],
    ["Anthem",[1,"Freedom"],"MG",false,false,false,"Seed","E","2022-05",73.16,true,"Builds/Anthem.html",[""],"2022-07-04"],
    ["Freedom [MGSD]",[1,"Freedom"],"MGSD",true,false,false,"Seed","D","2023-03",8.5,false,false,false],
    ["Liberty",[1,"Freedom"],"SD",false,false,false,"Seed","E","2022-04",18,false,"Builds/Liberty.html",[""],"2022-06-27"],
    ["Old Glory",[1,"Freedom"],"MGSD",false,false,false,"Seed","C","2023-05",28.83,false,"Builds/Gundams/OldGlory.html",["Mission Models: MMP-001 White","Testors: Red Grapefruit 1196","Testors: Cherry Red 1197","Vallejo: Mecha Color Gold 69.059","Vallejo: Mecha Color Electric Blue 60.020","Vallejo: Model Air Black 71.057","Vallejo: Mecha Color Metallic Blue 69.067","Vallejo: Model Air Metallic Signal Red 71.070","Vallejo: Mecha Color Sky Blue 69.017","Tamiya: Metallic BLue TS-19 Can","Tamiya: Gold TS-21 Can","Tamiya: Matt White TS-27 Can","Tamiya: Metallic Red PS-15 Can","Tamiya: Clear Red X-27"]],
    ["Billy Blue Jay",[1,"Ginn"],"MG",false,false,false,"Seed","B"],
    ["PB Destiny Impulse (Regenes) [MG]",[1,"Impulse, Destiny"],"Seed","MG",true,true,false,"C","2023-05",6.5,false,"Builds/PBDesintyImpulseREgenesMG.html",false],
    ["PB Destiny Impulse [RG]",[1,"Impulse, Destiny"],"RG",true,true,false,"Seed","B"],
    ["Don\"t Tread On Ye",[1,"Justice"],"MG",false,false,false,"Seed","E","2022-06",51.75,true,"Builds/Ye.html",[""],"2022-09-06"],
    ["AntiJustice",[1,"Justice"],"SD",false,false,false,"Seed","B"],
    ["Pacifist",[1,"Justice"],"SD",false,false,false,"Seed","E","2022-04",14.58,false,"Builds/Pacifist.html",[""],"2022-08-29"],
    ["PB Clear \u221e Justice [RG]",[1,"Infinite Justice"],"RG",true,true,false,"Seed","E","2021-11",4.93,false,"Builds/PBInfiniJusticeRG.html",false,"2022-05-03"],
    ["Oppression",[1,"Infinite Justice"],"MG",false,false,false,"Seed","B"],
    ["Zoroaster",[1,"Legend"],"FM",false,false,false,"Seed","B"],
    ["PB Meteors",[1,"Meteor","Meteor I","Meteor II","Freedom","Infinite Justice"],"HG",false,true,false,"Seed","B"],
    ["Union Jack",[1,"Providence"],"MG",false,false,false,"Seed","A"],
    ["Raider [FM]",[1,"Raider"],"FM",true,false,false,"Seed","D","2023-01",9.75,false,false,false],
    ["Rodan",[1,"Raider"],"FM",false,false,false,"Seed","A"],
    ["Blue Angels",[3,"Skygrasper","Skygrasper","Skygrasper"],"RG",false,false,false,"Seed","E","2022-12",22,true,"Builds/BlueAngels.html",[""],"2022-12-26"],
    ["Skygrasper [PG]",[1,"Skygrasper"],"PG",true,false,false,"Seed","E","2022-10",6,false,"Builds/PGSkygasper.html",false,"2022-12-22"],
    ["Skygrasper [RG]",[2,"Skygrasper","Skygrasper","Skygrasper"],"RG",true,false,false,"Seed","E","2022-09",10,false,false,false,"2022-12-19"],
    ["PB Lightning Strike",[2,"Strike","Lightning Striker","Sword Launcher Striker Pack"],"MG",false,true,false,"Seed","B"],
    ["Metal Strike",[1,"Strike"],"SD",false,false,false,"Seed","B"],
    ["Strike Gundam [PG]",[1,"Strike"],"PG",true,false,false,"Seed","D","2023-05",14.58,true,"Builds/PGStrike.html",false],
    ["PB Perfect Strike [RG]",[1,"Strike, Perfect"],"RG",true,true,false,"Seed","E","2022-03",12.33,false,"Builds/PBPerfectStrikeRG.html",false,"2022-09-13"],
    ["S.A.T.O.",[1,"Strike, Perfect"],"SD",false,false,false,"Seed","D","2022-01",14.85,false,"Builds/SATO.html",[""]],
    ["PB Strike Daggers",[2,"Strike Dagger","Strike Dagger","Strike Dagger"],"HG",false,true,false,"Seed","D","2023-03",20.41,false,"Builds/PBStrikeDagger.html",[""]],
    ["AntiFreedom",[1,"Strike-Freedom"],"SD",false,false,false,"Seed","B"],
    ["Servitude",[1,"Strike-Freedom"],"MG",false,false,false,"Seed","B"],
    ["Strike-Freedom Full Burst [MG]",[1,"Strike-Freedom"],"MG",true,false,false,"Seed","E","2021-07",18.42,false,false,false,"2021-08-17"],
    ["Strike-Freedom MGEX",[1,"Strike-Freedom"],"MG",true,false,true,"Seed","C","2023-03",15.92,false,"Builds/MGEXStrikeFreedom.html",false],
    ["PB Strike-Freedom (Deactive) [RG]",[1,"Strike-Freedom"],"RG",true,true,false,"Seed","D","2023-03",4.75,false,"Builds/PBStrikeFreedomDeactiveRG.html",false],
    ["Battra",[1,"Strike Noir"],"MG",false,false,false,"Seed","B"],
    ["Strike Noir [SD]",[1,"Strike Noir"],"SD",true,false,false,"Seed","D","2021-09",2.233,false,false,false],
    ["Strike Verde",[1,"Strike Noir"],"SD",false,false,false,"Seed","D","2021-12",8,false,"Builds/StrikeVerde.html",[""]],
    ["Oberon",[1,"Windam"],"HG",false,false,false,"Seed","E","2022-03",20.25,false,"Builds/Oberon.html",[""],"2022-05-09"],
    ["PB Slash Zaku Phantom (Yzak Jule Custom) [MG]",[1,"Zaku Phantom, Slash"],"MG",true,true,false,"Seed","D","2023-04",11.83,false,"Builds/PBPhantomZakuMG.html",false],
    
    //Future Century (G Gundam)
    ["PB Burning Gundam [RG]",[2,"Burning Gundam","Burning Gundam Expansion Pass","Burning Gundam LED lights"],"RG",true,true,false,"G","C","2022-09",15.5,true,"Builds/PBBurningGUndamRG.html",false],
    ["Michael",[1,"Burning Gundam"],"SD",false,false,false,"G","B"],
    ["Furcas",[1,"Dark Army"],"HG",false,false,false,"G","B"],
    ["Malphas",[1,"Dark Army"],"HG",false,false,false,"G","E","2022-09",5.83,false,"Builds/Malphas.html",[""],"2023-01-23"],
    ["Asmodeus",[1,"Dark Gundam"],"SD",false,false,false,"G","B"],
    ["Baal",[1,"Dark Gundam"],"HG",false,false,false,"G","B"],
    ["Balam",[1,"Dark Gundam"],"HG",false,false,false,"G","B"],
    ["Beleth",[1,"Dark Gundam"],"SD",false,false,false,"G","B"],
    ["Belial",[1,"Dark Gundam"],"HG",false,false,false,"G","B"],
    ["Dark Gundam [SD]",[1,"Dark Gundam"],"SD",true,false,false,"G","D","2022-08",1.75,false,false,false],
    ["Paimon",[1,"Dark Gundam"],"SD",false,false,false,"G","B"],
    ["PB Gundam Rose [HG]",[1,"Rose Gundam"],"HG",true,true,false,"G","A"],
    ["Le Roi Soleil",[1,"Rose Gundam"],"HG",false,false,false,"G","E","2022-08",4.17,false,"Builds/RoiSoleil.html",[""],"2022-12-12"],
    ["Gabriel",[1,"Shining Gundam"],"SD",false,false,false,"G","B"],
    ["Red Baron",
        [1,"Spiegel, Gundam"],
        "MG",
        false,
        false,
        false,
        "G",
        "E",
        "2021-05",
        72.07,
        true,
        "Builds/Gundams/RedBaron.html",
        false,
        "2021-05-29",
        models[2],
        [
            []
        ],
        [],
        "Old Prussia. Red Baron. World War One. Pizza. Nietzche book titles. Nose ring helmet spike. First attempt at custom decals. Hand Brushed, First attempt with LEDs.",
        false
    ],
    ["Red Baron 2",[1,"Spiegel, Gundam"],"MG",false,false,false,"G","A","",0,false,"Builds/RedBaron2.html",[""],"",models[2]],

    //Post Disaster (IBO)
    ["Thorn",[1,"Barbatos"],"MG",false,false,false,"IBO","B"],
    ["War Pig",[1,"Barbatos"],"SD",false,false,false,"IBO","E","2021-12",4.15,false,"Builds/WarPig.html",[""],"2023-04-18"],
    ["Deep Purple",[1,"Barbatos Lupus"],"SD",false,false,false,"IBO","D","2021-12",4.36,false,"Builds/DeepPurple.html",[""]],
    ["Sealiah",[1,"Barbatos Lupus"],"HG",false,false,false,"IBO","E","2023-02",12.51,false,"Builds/Gundams/Sealiah.html",[""],"2023-06-13"],
    ["Nephilim",[1,"Barbatos Lupus Rex"],"HG",false,false,false,"IBO","E","2021-06",23.11,false,"Builds/Nephilim.html",[""],"2021-07-26"],
    ["Queen Venus",[1,"Gremory"],"HG",false,false,false,"IBO","B"],
    ["Vine",[1,"Hashmal"],"HG",false,false,false,"IBO","E","2023-01",19.64,false,"Builds/Gundams/Vine.html",[""],"2023-06-05"],
    ["\u00dcbermensch",[1,"Vidar"],"FM",false,false,false,"IBO","B"],

    //Universal Century
    ["Dew Drop",[1,"Acguy"],"HG",false,false,false,"UC","E","2023-05-29",5.75,false,"Builds/Gundams/DewDrop.html",["Vallejo: Model Air Underside Blue 71.332","Vallejo: Model Air French Blue 71.088","Vallejo: Model Air Steel Blue 71.087","Vallejo: Mecha Color Metallic Blue 69.067","Tamiya: Gold TS-21 Can","Tamiya: Metallic Red PS-15 Can"],"2023-06-19"],
    ["Fantomas",[1,"Banshee Norn"],"SD",false,false,false,"UC","E","2021-06",15.02,true,"Builds/Fantomas.html",[""],"2021-08-03"],
    ["King Uranus",[1,"Banshee Norn"],"RG",false,false,false,"UC","B"],
    ["Gundam ARRRgent",[1,"Crossbone X-1"],"SD",false,false,false,"UC","E","2021-06",14.09,false,"Builds/arrrgent.html",[""],"2021-06-25"],
    ["Crossbone [RG]",[1,"Crossbone X-1"],"RG",true,false,false,"UC","D","2022-05",9.08,false,false,false],
    ["King Neptune",[1,"Crossbone X-1"],"RG",false,false,false,"UC","B"],
    ["Jackie-O",[1,"Delta Plus"],"SD",false,false,false,"UC","E","2022-01",11.17,false,"Builds/JackieO.html",[""],"2022-07-11"],
    ["Interstellar",[1,"Dom Test Type"],"HG",false,false,false,"UC","E","2022-08",14.07,false,"Builds/Interstellar.html",[""],"2022-11-14"],
    ["Rhea",[1,"RX-75 Guntank"],"SD",false,false,false,"UC","B"],
    ["Theia",[1,"Kshatriya"],"SD",false,false,false,"UC","D","2022-12",12.03,false,"Builds/Theia.html",[""]],
    ["Der Kommissar",[1,"Lightning Gundam"],"SD",false,false,false,"UC","E","2021-12",4.05,false,"Builds/DerKommissar.html",[""],"2023-04-03"],
    ["Nachtigall",[1,"Nightingale"],"SD",false,false,false,"UC","B"],
    ["Mnemosyne",[1,"Neue Ziuel"],"SD",false,false,false,"UC","B"],
    ["Gundam \u03C0",[1,"Nu Gundam"],"SD",false,false,false,"UC","E","2021-06",15.66,false,"Builds/pi.html",[""],"2021-06-22"],   //pi gundam
    ["PB BB Senshi RX-93ff \u03bd Gundam [SD]",[1,"Nu Gundam, ff"],"SD",true,true,false,"UC","E","2023-03",2.83,false,"Builds/PBRX93ff.html",false,"2023-04-24"],
    ["PB RX-93ff \u03bd Gundam [RG]",[1,"Nu Gundam, ff"],"RG",true,true,false,"UC","E","2023-03",14.5,false,"Builds/PBRX93ff.html",false,"2023-04-25"],
    ["Milos",[1,"Nu Gundam, Hi"],"SD",false,false,false,"UC","B"],
    ["PB Umbrella Corp",[2,"Nu Gundam, Hi","Hi Nu Expansion Pack","Hi Nu Hyper Bazooka"],"RG",false,true,false,"UC","A"],
    ["Bella Donna",[2,"Phenex","Phenex"],"SD",false,false,false,"UC","E","2021-12",14.37,false,"Builds/BellaDonna.html",[""],"2023-04-16"],
    ["Phenex [SD]",[1,"Phenex"],"SD",true,false,false,"UC","E","2021-10",4.17,false,false,false,"2023-03-13"],
    ["Sovereign",[1,"Phenex"],"SD",false,false,false,"UC","E","2021-11",5.93,false,"Builds/Sovereign.html",[""],"2023-04-15"],
    ["Titan",[1,"Phenex"],"SD",false,false,false,"UC","E","2021-11",6.63,false,"Builds/Titan.html",[""],"2023-03-14"],
    ["LunchTime Solutions",[1,"RX-78-2"],"RG",false,false,false,"UC","B"],
    ["Starman",[1,"Sazabi"],"SD",false,false,false,"UC","D","2021-12",5.03,false,"Builds/Starman.html",[""]],
    ["Ziggy",[1,"Sazabi"],"SD",false,false,false,"UC","D","2022-03",5.75,false,"Builds/Ziggy.html",[""]],
    ["Dynamo",[1,"Sinanju"],"MG",false,false,false,"UC","B"],
    ["Stardust",[1,"Sinanju"],"SD",false,false,false,"UC","D","2021-12",4.56,false,"Builds/Stardust.html",[""]],
    ["PB Shin Musha [MG]",[1,"Shin Musha Gundam"],"MG",true,true,false,"UC","E","2022-08",10.58,false,"Builds/PBShinMushaMG.html",false,"2022-12-05"],
    ["Blue Monday",[1,"Sisquiede"],"SD",false,false,false,"UC","D","2022-01",6.76,false,"Builds/BlueMonday.html",[""]],
    ["Rocket Man",[1,"Xi Gundam"],"SD",false,false,false,"UC","D","2022-01",6.5,false,"Builds/RocketMan.html",[""]],
    ["MK Ultra",[1,"Zaku II"],"RG",false,false,false,"UC","B"],
    ["Zeong [RG]",[1,"Zeong"],"RG",true,false,false,"UC","E","2021-08",8.25,false,false,false,"2022-03-14"],
    ["Starrider",[1,"Zeta Gundam"],"SD",false,false,false,"UC","E","2021-09",6.83,false,"Builds/Starrider.html",[""],"2023-03-08"],
    ["Zeta [MG]",[1,"Zeta Gundam"],"MG",true,false,false,"UC","C","2023-04",8,false,false,false],

    //Regild Century (Reconguista)


    //Build Divers (BD)
    ["PB Trans-Am Clear 00 Diver [HG]",[1,"00 Gundam Diver"],"HG",true,true,false,"BD","E","2022-01",2.75,false,"Builds/PBooDiverHG.html",false,"2022-08-08"],
    ["King Milky Way",[1,"Astray Rebake"],"HG",false,false,false,"BD","B"],
    ["Four Horsemen",[4,"Barbataurus","Barbataurus","Barbataurus","Barbataurus"],"HG",false,false,false,"BD","B"],
    ["King Sol",[1,"Helios"],"HG",false,false,false,"BD","B"],
    ["King Jupiter",[1,"Livelance"],"HG",false,false,false,"BD","B"],
    ["King Pluto",[1,"QAN[T], Command"],"HG",false,false,false,"BD","B"],
    ["Queen Luna",[1,"QAN[T], Shia"],"HG",false,false,false,"BD","B"],
    ["King Earth",[1,"Strike Freedom, Perfect"],"HG",false,false,false,"BD","B"],
    ["Constellation",[1,"Strike Full Package"],"RG",false,false,false,"BD","E","2021-11",37.52,true,"Builds/Constellation.html",[""],"2022-02-28"],
    ["Moonage Daydream",[1,"Strike Full Package"],"SD",false,false,false,"BD","E","2021-11",7.27,false,"Builds/MoonageDaydream.html",[""],"2022-02-21"],
    ["King Saturn",[1,"Transient"],"HG",false,false,false,"BD","B"],
    ["King Mercury",[1,"Try Age Magnum"],"HG",false,false,false,"BD","B"],
    
    //SD Heroes 
    ["Artemis",[1,"00, Zhao Yun"],"SD",false,false,false,"Heroes","A"],
    ["Oceanus",[1,"Altron, Zhang He"],"SD",false,false,false,"Heroes","D","2022-04",5.42,false,"Builds/Oceanus.html",[""]],
    ["Eurybia",[1,"Akatsuki, Zhou Yu"],"SD",false,false,false,"Heroes","B"],
    ["Pallas",[1,"Burning Gundam, Huang Zhang Fei"],"SD",false,false,false,"Heroes","B"],
    ["Perses",[1,"Deathscythe, Xu Huang"],"SD",false,false,false,"Heroes","A"],
    ["Azalea",[1,"Delta, Sasuki"],"SD",false,false,false,"Heroes","E","2021-10",6.5,false,"Builds/Azalea.html",[""],"2022-06-22"],
    ["Sasuki Delta [SD]",[1,"Delta, Saskui"],"SD",true,false,false,"Heroes","E","2021-09",1.5,false,false,false,"2022-06-20"],
    ["Quetzalcaotl",[1,"Dragon, Dark Grasper"],"SD",false,false,false,"Heroes","B"],
    ["Pharaoh",[1,"Dragon, Shining Grasper"],"SD",false,false,false,"Heroes","A"],
    ["Tiamat",[1,"Dragon, Shining Grasper"],"SD",false,false,false,"Heroes","A"],
    ["Cronus",[1,"Epyon, Nobunaga"],"SD",false,false,false,"Heroes","A"],
    ["Helios",[1,"Freedom, Zhuge Liang"],"SD",false,false,false,"Heroes","D","2022-03",9.25,false,"Builds/Helios.html",[""]],
    ["Themis",[1,"Legend, Caesar"],"SD",false,false,false,"Heroes","A"],
    ["Crius",[1,"Sazabi, Zhang Liao"],"SD",false,false,false,"Heroes","B"],
    ["Clymene",[1,"Strike, Knight"],"SD",false,false,false,"Heroes","A"],
    ["Prometheus",[1,"Strike Noir, Xun Yu"],"SD",false,false,false,"Heroes","B"],
    ["Selene",[1,"Strike-Freedom, Qiongqi"],"SD",false,false,false,"Heroes","B"],
    ["Corona Australis",[1,"Tallgeese, Xiahou Yuan"],"SD",false,false,false,"Heroes","D","2022-04",7.75,false,"Builds/CoronaAustralis.html",[""]],
    ["Corona Borealis",[1,"Tallgeese III, Xiahou Dun"],"SD",false,false,false,"Heroes","D","2022-04",8.67,false,"Builds/CoronaBorealis.html",[""]],
    ["Coeus",[1,"Unicorn, Long Zun Liu Vei"],"SD",false,false,false,"Heroes","A"],
    ["Bastiat",[1,"Verde Buster, Sergeante"],"SD",false,false,false,"Heroes","E","2021-10",8.3,false,"Builds/Bastiat.html",[""],"2022-08-22"],
    ["Mighty Morphin Power Rangers",[7.5,"Trinity Bike","Verde Buster, Sergeant DX","Verde Buster, Sergeant DX","Verde Buster Team Member","Verde Buster Team Member","Verde Buster Team Member","Verde Buster Team Member"],"SD",false,false,false,"Heroes","E","2022-12",39.63,false,"Builds/mmpr.html",[""],"2023-02-20"],
    ["Eos",[1,"Wing, Cao Cao"],"SD",false,false,false,"Heroes","A"],
    ["Tethys",[1,"Wing Isei, Cao Cao"],"SD",false,false,false,"Heroes","D","2022-04",8.67,false,"Builds/tethys.html",[""]],
    ["Hyperion",[1,"Wing Zero, Tian Ba Cao Cao"],"SD",false,false,false,"Heroes","B"],

    //Haro
    ["Haro Blue",[1,"Haropla #05 Control Blue"],"Haro",false,false,false,"","D","2023-04",2.55,false,"Builds/hblue.html",[""]],
    ["Haro Cloud",[1,"Haropla #12 Basic Green"],"Haro",false,false,false,"","D","2023-04",3.27,false,"Builds/hcloud.html",[""]],
    ["Haro Green",[1,"Haropla #12 Basic Green"],"Haro",false,false,false,"","D","2023-04",2.75,false,"Builds/hgreen.html",[""]],
    ["Haro Lime",[1,"Haropla #12 Basic Green"],"Haro",false,false,false,"","D","2023-04",3.34,false,"Builds/hlime.html",[""]],
    ["Haro Orange",[1,"Haropla #11 Zakrello"],"Haro",false,false,false,"","D","2023-04",4.08,false,"Builds/horange.html",[""]],
    ["Haro Pink",[1,"Haropla #04 Momo Pink"],"Haro",false,false,false,"","D","2023-04",2.68,false,"Builds/hpink.html",[""]],
    ["Haro Purple",[1,"Haropla #07 Ball Haro"],"Haro",false,false,false,"","D","2023-04",2.65,false,"Builds/hpurple.html",[""]],
    ["Haro Red",[1,"Haropla #02 Diva Red"],"Haro",false,false,false,"","E","2023-04",2.78,false,"Builds/hred.html",[""],"2023-05-30"],
    
    //Car
    ["Hud Air",
        [1,"Chevy Bel Air, 57"],
        "Car",
        false,
        false,
        false,
        "Chevy",
        "E",
        "2021-05",
        23.05,
        true,
        "Builds/Automobiles/HudAir.html",
        false,
        "2021-06-09",
        models[3]
        [
            []
        ],
        [],
        "First attempt at an air brush. Testors paints. Jennifer Hudson. The nanny.",
        "Nick"
    ],
    ["Wilbur",[1,"Volkswagen Beetle, 68"],"Car",false,false,false,"Volkswagen","E","2022-11",27.08,true,"Builds/Wilbur.html",[""],"2023-01-02"],
    
    //Pokemon
    ["Obelix",[1,"Bulbasaur"],"Pokemon",false,false,false,"","B"],
    ["Asterix",[1,"Charmander"],"Pokemon",false,false,false,"","D","2023-03",3.85,false,"Builds/asterix.html",[""]],
    ["Vercingetorix",[1,"Charizard"],"Pokemon",false,false,false,"","D","2023-03",5.99,false,"Builds/vercingetorix.html",[""]],
    ["Boudica",[1,"Dragonite"],"Pokemon",false,false,false,"","D","2023-03",3.47,false,"Builds/boudica.html",[""]],
    ["Granfrog",[1,"Greninja"],"Pokemon",false,false,false,"","E","2021-11",5.68,false,"Builds/granfrog.html",[""],"2022-08-17"],
    ["Brennus",[1,"Groudon"],"Pokemon",false,false,false,"","A"],
    ["Unhygienix",[1,"Magikarp"],"Pokemon",false,false,false,"","A"],
    ["Lutetia",[1,"Lucario"],"Pokemon",false,false,false,"","A"],
    ["Chanticleerix",[1,"Lugia"],"Pokemon",false,false,false,"","A"],
    ["Cacofonix",[1,"Metagross"],"Pokemon",false,false,false,"","B"],
    ["Getafix",[1,"Rayquaza"],"Pokemon",false,false,false,"","B"],
    ["Dogmatix",[1,"Riolu"],"Pokemon",false,false,false,"","A"],
    ["Cassivellaunus",[1,"Gyrados"],"Pokemon",false,false,false,"","A"],
    
    //Digimon
    ["Heimdall",[1,"Alphamon"],"Digimon",false,false,false,"","A"],
    ["Loki",[1,"Beelzemon"],"Digimon",false,false,false,"","A"],
    ["Thor",[1,"Gallantmon"],"Digimon",false,false,false,"","E","2022-10",22.5,false,"Builds/thor.html",[""],"2022-11-28"],
    ["Jormungandr",[1,"Imperialdramom"],"Digimon",false,false,false,"","A"],
    ["Nidhogg",[1,"Machinedramon"],"Digimon",false,false,false,"","A"],
    ["Fenrir",[1,"Metal Garurumon"],"Digimon",false,false,false,"","E","2022-07",20.58,false,"Builds/fenrir.html",[""],"2022-09-21"],
    ["T\u00FDr",[1,"Metal Greymon"],"Digimon",false,false,false,"","A"],
    ["Odin",[1,"Shine Greymon",],"Digimon",false,false,false,"","A"],
    ["Ragnarok",[1,"Omnimon"],"Digimon",false,false,false,"","E","2022-07",19.65,false,"Builds/ragnorok.html",[""],"2022-10-17"],
    ["Revelation",[1,"Omnimon X"],"Digimon",false,false,false,"","A"],
    ["Fafnir",[1,"War Greymon"],"Digimon",false,false,false,"","E","2022-07",20.7,false,"Builds/fafnir.html",[""],"2022-10-04"],

    //Display
    ["Diurnum",[1,"City Area, 30 Minute Mission"],"Display",false,false,false,"","E","2022-01",9.67,false,"Builds/diurnum.html",[""],"2022-03-21"],
    ["Battlefield Earth",[2,"Energy Ring Emitter"],"Display",false,false,false,"","A"],
    ["Kataluma",[1,"Hangar Bay"],"Display",false,false,false,"","E","2022-02",16.96,true,"Builds/kataluma.html",[""],"2022-04-04"],
    ["Stratle",[1,"Maintenance Bay"],"Display",false,false,false,"","E","2022-02",27.12,true,"Builds/stratle.html",[""],"2022-04-11"],

    //Ship
    ["Libeccio",[0.2,"Andromeda Black"],"Ship",false,false,false,"StarBlazer","E","2022-09",4.42,false,"Builds/libeccio.html",[""],"2023-02-06"],
    ["Ostro",[0.2,"Cosmo Falcon"],"Ship",false,false,false,"StarBlazer","E","2022-07",6.33,false,"Builds/ostro.html",[""],"2022-07-18"],
    ["Ponente",[1,"Cosmo Zero"],"Ship",false,false,false,"StarBlazer","B"],
    ["Levante",[1,"Nagato"],"Ship",false,false,false,"Space Rengo Kantai","B"],

    //Transformer
    ["Wilbee",[1,"Bumblebee"],"Transformer",false,false,false,"","E","2022-11",9.33,false,"Builds/Wilbee.html",[""],"2023-01-09"],
    
    //Zoid
    ["Dash Hound",[1,"Shadow Fox"],"Zoid",false,false,false,"","C","2023-06-12",11.67,false,"Builds/Zoids/DashHound.html",["Tamiya: Gold TS-21 Can","Tamiya: Matt Black TS-6 Can","Tamiya: Copper PS-14 Can","Vallejo: Model Air US Earth Red 71.293","Vallejo: Model Air USAF Brown 71.125","Vallejo: Model Air Rust 71.069","Vallejo: Model Air Armor Brown 71.041","Vallejo: Mecha Color Dark Steel 69.065","Vallejo: Model Air Silver 71.063","Vallejo: Model Air Ivory 71.075","Testors: Brass 1182","Vallejo: Model Air Wood 71.077","Vallejo: Model Air US Desert Sand 71.140","Vallejo: Mecha Color Gun Metal 69.058","Vallejo: Model Air Camouflage Gray 71.280"]],
    ["Shere Khan",[1,"Blade Liger"],"Zoid",false,false,false,"","B"],
    ["Akela",[1,"Konig Wolf Heavy Arms"],"Zoid",false,false,false,"","A"],
    ["Kipling",[1,"Liger Zero X"],"Zoid",false,false,false,"","B"]
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
        insertLine(constructOne[i],"constOne");
    }
    for (let i=0;i<constructTwo.length;i++) {
        insertLine(constructTwo[i],"constTwo");
    }
    for (let i=0;i<constructThree.length;i++) {
        insertLine(constructThree[i],"constThree");
    }

    const readyCountNode = document.getElementById("readyCountID");
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
        insertLine(progressOne[i],"progOne");
    }
    for (let i=0;i<progressTwo.length;i++) {
        insertLine(progressTwo[i],"progTwo");
    }
    for (let i=0;i<progressThree.length;i++) {
        insertLine(progressThree[i],"progThree");
    }

    const progCountNode = document.getElementById("progCountID");
    const progCountTextNode = document.createTextNode(inProgressCount);
    progCountNode.appendChild(progCountTextNode);
}

function addTable() {
    //Post Finished
    for (let i=0;i<pgFinishedArray.length;i++) {
        insertLine(pgFinishedArray[i],"pgF");
    }
    for (let i=0;i<mgFinishedArray.length;i++) {
        insertLine(mgFinishedArray[i],"mgF");
    }
    for (let i=0;i<fmFinishedArray.length;i++) {
        insertLine(fmFinishedArray[i],"fmF");
    }
    for (let i=0;i<rgFinishedArray.length;i++) {
        insertLine(rgFinishedArray[i],"rgF");
    }
    for (let i=0;i<hgFinishedArray.length;i++) {
        insertLine(hgFinishedArray[i],"hgF");
    }
    for (i=0;i<mgsdFinishedArray.length;i++) {
        insertLine(mgsdFinishedArray[i],"mgsdF");
    }
    for (let i=0;i<sdFinishedArray.length;i++) {
        insertLine(sdFinishedArray[i],"sdF");
    }
    for (let i=0;i<pbFinishedArray.length;i++) {
        insertLine(pbFinishedArray[i],"pbF");
    }
    for (let i=0;i<sbFinishedArray.length;i++) {
        insertLine(sbFinishedArray[i],"sbF");
    }
    for (let i=0;i<carFinishedArray.length;i++) {
        insertLine(carFinishedArray[i],"carF");
    }
    for (let i=0;i<digiFinishedArray.length;i++) {
        insertLine(digiFinishedArray[i],"dgF");
    }
    for (let i=0;i<dispFinishedArray.length;i++) {
        insertLine(dispFinishedArray[i],"dspF");
    }
    for (let i=0;i<haroFinishedArray.length;i++) {
        insertLine(haroFinishedArray[i],"haroF");
    }
    for (let i=0;i<pokeFinishedArray.length;i++) {
        insertLine(pokeFinishedArray[i],"pokeF");
    }
    for (let i=0;i<shipFinishedArray.length;i++) {
        insertLine(shipFinishedArray[i],"shipF");
    }
    for (let i=0;i<transFinishedArray.length;i++) {
        insertLine(transFinishedArray[i],"transF");
    }
    for (let i=0;i<zoidFinishedArray.length;i++) {
        insertLine(zoidFinishedArray[i],"zoidF");
    }

    //Post Backlog
    for (let i=0;i<pgBacklogArray.length;i++) {
        insertLine(pgBacklogArray[i],"pgBL");
    }
    for (let i=0;i<mgBacklogArray.length;i++) {
        insertLine(mgBacklogArray[i],"mgBL");
    }
    for (let i=0;i<fmBacklogArray.length;i++) {
        insertLine(fmBacklogArray[i],"fmBL");
    }
    for (let i=0;i<rgBacklogArray.length;i++) {
        insertLine(rgBacklogArray[i],"rgBL");
    }
    for (let i=0;i<hgBacklogArray.length;i++) {
        insertLine(hgBacklogArray[i],"hgBL");
    }
    for (i=0;i<mgsdBacklogArray.length;i++) {
        insertLine(mgsdBacklogArray[i],"mgsdBL");
    }
    for (let i=0;i<sdBacklogArray.length;i++) {
        insertLine(sdBacklogArray[i],"sdBL");
    }
    for (let i=0;i<pbBacklogArray.length;i++) {
        insertLine(pbBacklogArray[i],"pbBL");
    }
    for (let i=0;i<sbBacklogArray.length;i++) {
        insertLine(sbBacklogArray[i],"sbBL");
    }
    for (let i=0;i<carBacklogArray.length;i++) {
        insertLine(carBacklogArray[i],"carBL");
    }
    for (let i=0;i<digiBacklogArray.length;i++) {
        insertLine(digiBacklogArray[i],"dgBL");
    }
    for (let i=0;i<dispBacklogArray.length;i++) {
        insertLine(dispBacklogArray[i],"dspBL");
    }
    for (let i=0;i<haroBacklogArray.length;i++) {
        insertLine(haroBacklogArray[i],"haroBL");
    }
    for (let i=0;i<pokeBacklogArray.length;i++) {
        insertLine(pokeBacklogArray[i],"pokeBL");
    }
    for (let i=0;i<shipBacklogArray.length;i++) {
        insertLine(shipBacklogArray[i],"shipBL");
    }
    for (let i=0;i<transBacklogArray.length;i++) {
        insertLine(transBacklogArray[i],"transBL");
    }
    for (let i=0;i<zoidBacklogArray.length;i++) {
        insertLine(zoidBacklogArray[i],"zoidBL");
    }

    //Post Out of Stock
    for (let i=0;i<outOfInventoryArray.length;i++) {
        insertLine(outOfInventoryArray[i][0],"OOS");
    }
    for (let i=0;i<pbUndeliveredArray.length;i++) {
        insertLine(pbUndeliveredArray[i],"OOSPB");
    }
    
    const finishNode = document.getElementById("FP").parentNode;
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
    mgAve = projectAverage("MG",false);
    mgStrAve = projectAverage("MG",true);
    pgAve = projectAverage("PG",false);
    pgStrAve = projectAverage("PG",true);
    fmAve = projectAverage("FM",false);
    fmStrAve = projectAverage("FM",true);
    rgAve = projectAverage("RG",false);
    rgStrAve = projectAverage("RG",true);
    hgAve = projectAverage("HG",false);
    hgStrAve = projectAverage("HG",true);
    mgsdAve = projectAverage("MGSD",false);
    mgsdStrAve = projectAverage("MGSD",true);
    sdAve = projectAverage("SD",false);
    sdStrAve = projectAverage("SD",true);
    haroAve = projectAverage("Haro",false);
    haroStrAve = projectAverage("Haro",true);
    carAve = projectAverage("Car",false);
    carStrAve = projectAverage("Car",true);
    pokeAve = projectAverage("Pokemon",false);
    pokeStrAve = projectAverage("Pokemon",true);
    digiAve = projectAverage("Digimon",false);
    digiStrAve = projectAverage("Digimon",true);
    dispAve = projectAverage("Display",false);
    dispStrAve = projectAverage("Display",true);
    shipAve = projectAverage("Ship",false);
    shipStrAve = projectAverage("Ship",true);
    transAve = projectAverage("Transformer",false);
    transStrAve = projectAverage("Transformer",true);
    zoidAve = projectAverage("Zoid",false);
    zoidStrAve = projectAverage("Zoid",true);

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
    mgCount = projectCount("MG",false);
    mgStrCount = projectCount("MG",true);
    pgCount = projectCount("PG",false);
    pgStrCount = projectCount("PG",true);
    fmCount = projectCount("FM",false);
    fmStrCount = projectCount("FM",true);
    rgCount = projectCount("RG",false);
    rgStrCount = projectCount("RG",true);
    hgCount = projectCount("HG",false);
    hgStrCount = projectCount("HG",true);
    mgsdCount = projectCount("MGSD",false);
    mgsdStrCount = projectCount("MGSD",true);
    sdCount = projectCount("SD",false);
    sdStrCount = projectCount("SD",true);
    haroCount = projectCount("Haro",false);
    haroStrCount = projectCount("Haro",true);
    carCount = projectCount("Car",false);
    carStrCount = projectCount("Car",true);
    pokeCount = projectCount("Pokemon",false);
    pokeStrCount = projectCount("Pokemon",true);
    digiCount = projectCount("Digimon",false);
    digiStrCount = projectCount("Digimon",true);
    dispCount = projectCount("Display",false);
    dispStr = projectCount("Display",true);
    shipCount = projectCount("Ship",false);
    shipStrCount = projectCount("Ship",true);
    transCount = projectCount("Transformer",false);
    transStrCount = projectCount("Transformer",true);
    zoidCount = projectCount("Zoid",false);
    zoidStrCount = projectCount("Zoid",true);

    //PBandai Count
    mgCountPB = projectCountPB("MG");
    pgCountPB = projectCountPB("PG");
    fmCountPB = projectCountPB("FM");
    rgCountPB = projectCountPB("RG");
    hgCountPB = projectCountPB("HG");
    mgsdCountPB = projectCountPB("MGSD");
    sdCountPB = projectCountPB("SD");
    haroCountPB = projectCountPB("Haro");
    shipCountPB = projectCountPB("Ship");
    dispCountPB = projectCountPB("Display");

    //Remaining Count
    mgRemain = projectRemaining("MG");
    pgRemain = projectRemaining("PG");
    fmRemain = projectRemaining("FM");
    rgRemain = projectRemaining("RG");
    hgRemain = projectRemaining("HG");
    mgsdRemain = projectRemaining("MGSD");
    sdRemain = projectRemaining("SD");
    haroRemain = projectRemaining("HARO");
    carRemain = projectRemaining("Car");
    digiRemain = projectRemaining("Digimon");
    dispRemain = projectRemaining("Display");
    pokeRemain = projectRemaining("Pokemon");
    shipRemain = projectRemaining("Ship");
    transRemain = projectRemaining("Transformer");
    zoidRemain = projectRemaining("Zoid");

    //hours
    mgHours = projectHours("MG");
    pgHours = projectHours("PG");
    fmHours = projectHours("FM");
    rgHours = projectHours("RG");
    hgHours = projectHours("HG");
    mgsdHours = projectHours("MGSD");
    sdHours = projectHours("SD");
    haroHours = projectHours("Haro");
    carHours = projectHours("Car");
    pokeHours = projectHours("Pokemon");
    digiHours = projectHours("Digimon");
    dispHours = projectHours("Display");
    shipHours = projectHours("Ship");
    transHours = projectHours("Transformer");
    zoidHours = projectHours("Zoid");
}

function cleanupArrays(array,context) {
    if(array.length<1) {
        if (context==="fin") {
            array=["...Pending..."];
        }
        if (context==="out") {
            array=[".....Out of Stock....."];
        }
    }
    return array;
}

function composeStatsArray () {
    let wt=0;
    let statData = [];

    for (let i=0;i<projects.length;i++) {
        if (projects[i][3]===false && (projects[i][7]=="C" || projects[i][7]=="D" || projects[i][7]=="E")) {
            if (projects[i][2]=="MG") {
                wt=1;
            } 
            else if (projects[i][2]=="FM") {
                wt=fmWt;
            } 
            else if (projects[i][2]=="RG") {
                wt=rgWt;
            } 
            else if (projects[i][2]=="HG") {
                wt=hgWt;
            } 
            else if (projects[i][2]=="MGSD") {
                wt=mgsdWt;
            } 
            else if (projects[i][2]=="SD") {
                wt=sdWt;
            } 
            else if (projects[i][2]=="Haro") {
                wt=haroWt;
            } 
            else if (projects[i][2]=="Car") {
                wt=carWt;
            } 
            else if (projects[i][2]=="Pokemon") {
                wt=pokeWt;
            } 
            else if (projects[i][2]=="Digimon") {
                wt=digiWt;
            } 
            else if (projects[i][2]=="Display") {
                wt=dispWt;
            } 
            else if (projects[i][2]=="Ship") {
                wt=shipWt;
            } 
            else if (projects[i][2]=="Transformer") {
                wt=transWt;
            } 
            else if (projects[i][2]=="Zoid") {
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

function createBuildAnchor(array) {
    let buildsPageListNode = document.getElementById("buildsLinksID");
    let liItemNode = document.createElement("li");
    let anchorNode = document.createElement("a");
    let textNode = document.createTextNode(array[0]);
    let hrefAttribute = document.createAttribute("href");
    
    if (array[11]) {
        hrefAttribute.value = array[11];
        anchorNode.setAttributeNode(hrefAttribute);
        anchorNode.appendChild(textNode);
        liItemNode.appendChild(anchorNode);
    }
    else {
        liItemNode.appendChild(textNode);
    }
    
    buildsPageListNode.appendChild(liItemNode);
}

function convertDate() {
    for (let i=0;i<projects.length;i++) {
        if (!projects[i][8]) {
            projects[i][8] = new Date("2099-12-25");
        } 
        else {
            projects[i][8] = new Date(projects[i][8]);
        }

        if (!projects[i][13]) {
            projects[i][13] = new Date("2099-12-25");
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
        if (projects[i][7] == "A" && projects[i][4]) {
            pbUndeliveredArray.push(projects[i][0]);
        }
        else if (projects[i][7] == "A") {
            outOfInventoryArray.push(projects[i]);
        }
        else if (projects[i][7] == "B") {
            backlogArray.push(projects[i]);
        }
        else if (projects[i][7] == "C") {
            inProgressArray.push(projects[i]);
        }
        else if (projects[i][7] == "D") {
            constructedArray.push(projects[i]);
        }
        else if (projects[i][7] == "E") {
            postedArray.push(projects[i]);
        }
    }
    outOfInventoryCount = outOfInventoryArray.length;
    backlogCount = backlogArray.length;
    inProgressCount = inProgressArray.length;
    constructedCount = constructedArray.length;
    postedCount = postedArray.length;
    inProgressArray = sortByDate(inProgressArray,"start");
    constructedArray = sortByDate(constructedArray,"start");
    postedArray = sortByDate(postedArray,"start");

    //Backlog by Grade
    for (let i=0;i<backlogArray.length;i++) {
        if (backlogArray[i][4]) {
            pbBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="PG") {
            pgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][3]) {
            sbBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="MG") {
            mgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="FM") {
            fmBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="RG") {
            rgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="HG") {
            hgBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="MGSD") {
            mgsdBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="SD") {
            sdBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Car") {
            carBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Digimon") {
            digiBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Display") {
            dispBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Haro") {
            haroBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Pokemon") {
            pokeBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Ship") {
            shipBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Transformer") {
            transBacklogArray.push(backlogArray[i][0]);
        }
        else if (backlogArray[i][2]=="Zoid") {
            zoidBacklogArray.push(backlogArray[i][0]);
        }
    }

    //Finished by Grade
    for (let i=0;i<postedArray.length;i++) {
        if (postedArray[i][4]) {
            pbFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="PG") {
            pgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][3]) {
            sbFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="MG") {
            mgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="FM") {
            fmFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="RG") {
            rgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="HG") {
            hgFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="MGSD") {
            mgsdFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="SD") {
            sdFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Car") {
            carFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Digimon") {
            digiFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Display") {
            dispFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Haro") {
            haroFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Pokemon") {
            pokeFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Ship") {
            shipFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Transformer") {
            transFinishedArray.push(postedArray[i][0]);
        }
        else if (postedArray[i][2]=="Zoid") {
            zoidFinishedArray.push(postedArray[i][0]);
        }
    }

    //Clean up in backlog lists
    pgBacklogArray = cleanupArrays(pgBacklogArray,"out");
    mgBacklogArray = cleanupArrays(mgBacklogArray,"out");
    fmBacklogArray = cleanupArrays(fmBacklogArray,"out");
    rgBacklogArray = cleanupArrays(rgBacklogArray,"out");
    hgBacklogArray = cleanupArrays(hgBacklogArray,"out");
    mgsdBacklogArray = cleanupArrays(mgsdBacklogArray,"out");
    sdBacklogArray = cleanupArrays(sdBacklogArray,"out");
    pbBacklogArray = cleanupArrays(pbBacklogArray,"out");
    sbBacklogArray = cleanupArrays(sbBacklogArray,"out");
    carBacklogArray = cleanupArrays(carBacklogArray,"out");
    digiBacklogArray = cleanupArrays(digiBacklogArray,"out");
    dispBacklogArray = cleanupArrays(dispBacklogArray,"out");
    haroBacklogArray = cleanupArrays(haroBacklogArray,"out");
    pokeBacklogArray = cleanupArrays(pokeBacklogArray,"out");
    shipBacklogArray = cleanupArrays(shipBacklogArray,"out");
    transBacklogArray = cleanupArrays(transBacklogArray,"out");
    zoidBacklogArray = cleanupArrays(zoidBacklogArray,"out");

    //Clean up in finish lists
    pgFinishedArray = cleanupArrays(pgFinishedArray,"fin");
    mgFinishedArray = cleanupArrays(mgFinishedArray,"fin");
    fmFinishedArray = cleanupArrays(fmFinishedArray,"fin");
    rgFinishedArray = cleanupArrays(rgFinishedArray,"fin");
    hgFinishedArray = cleanupArrays(hgFinishedArray,"fin");
    mgsdFinishedArray = cleanupArrays(mgsdFinishedArray,"fin");
    sdFinishedArray = cleanupArrays(sdFinishedArray,"fin");
    pbFinishedArray = cleanupArrays(pbFinishedArray,"fin");
    sbFinishedArray = cleanupArrays(sbFinishedArray,"fin");
    carFinishedArray = cleanupArrays(carFinishedArray,"fin");
    digiFinishedArray = cleanupArrays(digiFinishedArray,"fin");
    dispFinishedArray = cleanupArrays(dispFinishedArray,"fin");
    haroFinishedArray = cleanupArrays(haroFinishedArray,"fin");
    pokeFinishedArray = cleanupArrays(pokeFinishedArray,"fin");
    shipFinishedArray = cleanupArrays(shipFinishedArray,"fin");
    transFinishedArray = cleanupArrays(transFinishedArray,"fin");
    zoidFinishedArray = cleanupArrays(zoidFinishedArray,"fin");

    //Clean UP PB Undelivered
    pbUndeliveredArray = cleanupArrays(pbUndeliveredArray,"fin");
}

function generateRandomBuild() {
    const nextBuildNode = document.getElementById("nextBuildID");
    const nextGradeNode = document.getElementById("nextGradeID");
    const nextBacklogNode = document.getElementById("backlogID");
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
    let grade = "";
    
    if (array[2] == "PG") {
        grade = "Perfect Grade";
    }
    else if (array[2] == "MG") {
        grade = "Master Grade";
    }
    else if (array[2] == "FM") {
        grade = "Full Mechanics";
    }
    else if (array[2] == "RG") {
        grade = "Real Grade";
    }
    else if (array[2] == "HG") {
        grade = "High Grade";
    }
    else if (array[2] == "SD") {
        grade = "Super Deformed";
    }
    else if (array[3]) {
        grade = "Straight Build";
    }
    else if (array[4]) {
        grade = "P-Bandai";
    }
    else if (array[5]) {
        grade = "MGEX";
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
    const lineItemNode = document.createElement("li");
    const textNode = document.createTextNode(text);
    listNode.appendChild(lineItemNode);
    lineItemNode.appendChild(textNode);
}

function populateBuildsPage() {
    convertDate();
    generateLists();
    postedArray = sortByDate(postedArray,"post");

    for (let i=0;i<postedArray.length;i++) {
        if(postedArray[i][11])
        {
            createBuildAnchor(postedArray[i]);
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
    populateStat(pgCount,"pgPrj",0);
    populateStat(pgStrCount,"pgStrPrj",0);
    populateStat(pgCountPB,"pgPB",0);
    populateStat(pgRemain,"pgRM",0);
    populateStat(pgHours,"pgHR",2);
    populateStat(pgAve,"pgAHR",2);
    populateStat(pgStrAve,"pgSHR",2);
    populateStat(pgWt,"pgWT",2);

    populateStat(mgCount,"mgPrj",0);
    populateStat(mgStrCount,"mgStrPrj",0);
    populateStat(mgCountPB,"mgPB",0);
    populateStat(mgRemain,"mgRM",0);
    populateStat(mgHours,"mgHR",2);
    populateStat(mgAve,"mgAHR",2);
    populateStat(mgStrAve,"mgSHR",2);
    populateStat(mgWt,"mgWT",2);

    populateStat(fmCount,"fmPrj",0);
    populateStat(fmStrCount,"fmStrPrj",0);
    populateStat(fmCountPB,"fmPB",0);
    populateStat(fmRemain,"fmRM",0);
    populateStat(fmHours,"fmHR",2);
    populateStat(fmAve,"fmAHR",2);
    populateStat(fmStrAve,"fmSHR",2);
    populateStat(fmWt,"fmWT",2);

    populateStat(rgCount,"rgPrj",0);
    populateStat(rgStrCount,"rgStrPrj",0);
    populateStat(rgCountPB,"rgPB",0);
    populateStat(rgRemain,"rgRM",0);
    populateStat(rgHours,"rgHR",2);
    populateStat(rgAve,"rgAHR",2);
    populateStat(rgStrAve,"rgSHR",2);
    populateStat(rgWt,"rgWT",2);

    populateStat(hgCount,"hgPrj",0);
    populateStat(hgStrCount,"hgStrPrj",0);
    populateStat(hgCountPB,"hgPB",0);
    populateStat(hgRemain,"hgRM",0);
    populateStat(hgHours,"hgHR",2);
    populateStat(hgAve,"hgAHR",2);
    populateStat(hgStrAve,"hgSHR",2);
    populateStat(hgWt,"hgWT",2);

    populateStat(mgsdCount,"mgsdPrj",0);
    populateStat(mgsdStrCount,"mgsdStrPrj",0);
    populateStat(mgsdCountPB,"mgsdPB",0);
    populateStat(mgsdRemain,"mgsdRM",0);
    populateStat(mgsdHours,"mgsdHR",2);
    populateStat(mgsdAve,"mgsdAHR",2);
    populateStat(mgsdStrAve,"mgsdSHR",2);
    populateStat(mgsdWt,"mgsdWT",2);

    populateStat(sdCount,"sdPrj",0);
    populateStat(sdStrCount,"sdStrPrj",0);
    populateStat(sdCountPB,"sdPB",0);
    populateStat(sdRemain,"sdRM",0);
    populateStat(sdHours,"sdHR",2);
    populateStat(sdAve,"sdAHR",2);
    populateStat(sdStrAve,"sdSHR",2);
    populateStat(sdWt,"sdWT",2);

    populateStat(shipCount,"shipPrj",0);
    populateStat(shipStrCount,"shipStrPrj",0);
    populateStat(shipCountPB,"shipPB",0);
    populateStat(shipRemain,"shipRM",0);
    populateStat(shipHours,"shipHR",2);
    populateStat(shipAve,"shipAHR",2);
    populateStat(shipStrAve,"shipSHR",2);
    populateStat(shipWt,"shipWT",2);

    populateStat(haroCount,"haroPrj",0);
    populateStat(haroStrCount,"haroStrPrj",0);
    populateStat(haroCountPB,"haroPB",0);
    populateStat(haroRemain,"haroRM",0);
    populateStat(haroHours,"haroHR",2);
    populateStat(haroAve,"haroAHR",2);
    populateStat(haroStrAve,"haroSHR",2);
    populateStat(haroWt,"haroWT",2);

    populateStat(dispCount,"dispPrj",0);
    populateStat(dispStrCount,"dispStrPrj",0);
    populateStat(dispCountPB,"dispPB",0);
    populateStat(dispRemain,"dispRM",0);
    populateStat(dispHours,"dispHR",2);
    populateStat(dispAve,"dispAHR",2);
    populateStat(dispStrAve,"dispSHR",2);
    populateStat(dispWt,"dispWT",2);

    populateStat(pokeCount,"pokePrj",0);
    populateStat(pokeStrCount,"pokeStrPrj",0);
    populateStat(pokeRemain,"pokeRM",0);
    populateStat(pokeHours,"pokeHR",2);
    populateStat(pokeAve,"pokeAHR",2);
    populateStat(pokeStrAve,"pokeSHR",2);
    populateStat(pokeWt,"pokeWT",2);

    populateStat(digiCount,"digiPrj",0);
    populateStat(digiStrCount,"digiStrPrj",0);
    populateStat(digiRemain,"digiRM",0);
    populateStat(digiHours,"digiHR",2);
    populateStat(digiAve,"digiAHR",2);
    populateStat(digiStrAve,"digiSHR",2);
    populateStat(digiWt,"digiWT",2);

    populateStat(carCount,"carPrj",0);
    populateStat(carStrCount,"carStrPrj",0);
    populateStat(carRemain,"carRM",0);
    populateStat(carHours,"carHR",2);
    populateStat(carAve,"carAHR",2);
    populateStat(carStrAve,"carSHR",2);
    populateStat(carWt,"carWT",2);

    populateStat(transCount,"transPrj",0);
    populateStat(transCount,"transStrPrj",0);
    populateStat(transRemain,"transRM",0);
    populateStat(transHours,"transHR",2);
    populateStat(transAve,"transAHR",2);
    populateStat(transStrAve,"transSHR",2);
    populateStat(transWt,"transWT",2);

    populateStat(zoidCount,"zoidPrj",0);
    populateStat(zoidCount,"zoidStrPrj",0);
    populateStat(zoidRemain,"zoidRM",0);
    populateStat(zoidHours,"zoidHR",2);
    populateStat(zoidAve,"zoidAHR",2);
    populateStat(zoidStrAve,"zoidSHR",2);
    populateStat(zoidWt,"zoidWT",2);

    populateStat(paintedAverage,"paintAve",2);
    populateStat(straightAverage,"straightAve",2);
    populateStat(straightWeight,"straightWeight",2);
}

function projectAverage(grade,straight) {
    let hour = 0;
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if (projects[i][2]==grade && projects[i][3]===straight && (projects[i][7]=="C" || projects[i][7]=="D" || projects[i][7]=="E")) {
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
        if (projects[i][2] == grade && projects[i][3] === straight && (projects[i][7] === "C" || projects[i][7] === "D" || projects[i][7] === "E")) {
            count++;
        }
    }

    return count;
}

function projectCountPB(grade) {
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if (projects[i][2] == grade && projects[i][4] && (projects[i][7] == "C" || projects[i][7] == "D" || projects[i][7] == "E")) {
            count++;
        }
    }

    return count;
}

function projectHours(grade) {
    let hours = 0;

    for (let i=0;i<projects.length;i++) {
        if ((projects[i][7]=="C" || projects[i][7]=="D" || projects[i][7]=="E") && projects[i][2]==grade) {
            hours = hours + projects[i][9];
        }
    }

    return hours;
}

function projectRemaining(grade) {
    let count = 0;

    for (let i=0;i<projects.length;i++) {
        if ((projects[i][7]=="A" || projects[i][7]=="B") && projects[i][2]==grade) {
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
    if (sort == "post")
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
    const suggestPostNode = document.getElementById("toPost");
    removeAllChildNodes(suggestPostNode);
    
    let decisionNumber = Math.floor(Math.random()*constructedCount)
    let tempArray = constructedArray[decisionNumber];
    const suggestTextNode = document.createTextNode(tempArray[0]);
    suggestPostNode.appendChild(suggestTextNode);
}

//Project Functions
function projectPage(string) {
    convertDate();

    for (let i=0;i<projects.length;i++) {
        if (projects[i][0] === string) {
            projectArray = projects[i];
            break;
        }
    }
    modelArray = projectArray[14];
    let titleNode = document.getElementById("title");
    let titleNodeText = document.createTextNode(projectArray[0]+" \u269C");
    titleNode.appendChild(titleNodeText);

    let jumboNode = document.getElementById("jumboNode");
    let jumboNodeText = document.createTextNode(projectArray[0]);
    jumboNode.appendChild(jumboNodeText);

    let breadcrumbNode = document.getElementById("breadcrumbNode");
    let breadcrumbText = document.createTextNode(projectArray[0]);
    breadcrumbNode.appendChild(breadcrumbText);

    if (modelArray[1] === 1) {
        popGundamPage();
    }

    generateModalFrame();
    populateImages();

    for (let i=0;i<projectArray[15].length;i++) {
        photoModalPopup(i);
    }  
}

function generateModalFrame() {
    let anchorNode = document.getElementById("modalAnchor");

    for (let i=0;i<projectArray[15].length;i++) {
        let count=i+1;

        let div1Node = document.createElement("div");
        let div1ID = document.createAttribute("id");
        div1ID.value = "photoModal"+count;
        let div1Class = document.createAttribute("class");
        div1Class.value = "modal";
        let div1Role = document.createAttribute("role");
        div1Role.value = ("dialog");
        div1Node.setAttributeNode(div1Class);
        div1Node.setAttributeNode(div1Role);
        div1Node.setAttributeNode(div1ID);

        let div2Node = document.createElement("div");
        let div2Class = document.createAttribute("class");
        div2Class.value = "modal-dialog modal-lg";
        let div2Role = document.createAttribute("role");
        div2Role.value = ("document");
        div2Node.setAttributeNode(div2Class);
        div2Node.setAttributeNode(div2Role);
        div1Node.appendChild(div2Node);

        let div3Node = document.createElement("div");
        let div3Class = document.createAttribute("class");
        div3Class.value = "modal-content";
        div3Node.setAttributeNode(div3Class);
        div2Node.appendChild(div3Node);

        let div4Node = document.createElement("div");
        let div4Class = document.createAttribute("class");
        div4Class.value = "modal-header bg-secondary text-white";
        div4Node.setAttributeNode(div4Class);
        div3Node.appendChild(div4Node);

        let h3_1Node = document.createElement("h3");
        let h3_1Class = document.createAttribute("class");
        h3_1Class.value = "modal-title";
        let h3_1ID = document.createAttribute("id");
        h3_1ID.value = "caption"+count;
        h3_1Node.setAttributeNode(h3_1Class);
        h3_1Node.setAttributeNode(h3_1ID);
        div4Node.appendChild(h3_1Node);

        let button1Node = document.createElement("button");
        let button1Type = document.createAttribute("type");
        button1Type.value = "button";
        let button1Class = document.createAttribute("class");
        button1Class.value = "close";
        let button1DataDismiss = document.createAttribute("data-dismiss");
        button1DataDismiss.value = "modal";
        let button1ID = document.createAttribute("id");
        button1ID.value = "close"+count;
        let button1Text = document.createTextNode("X");
        button1Node.setAttributeNode(button1Type);
        button1Node.setAttributeNode(button1Class);
        button1Node.setAttributeNode(button1DataDismiss);
        button1Node.setAttributeNode(button1ID);
        button1Node.appendChild(button1Text);
        div4Node.appendChild(button1Node);

        let div5Node = document.createElement("div");
        let div5Class = document.createAttribute("class");
        div5Class.value = "modal-body";
        div5Node.setAttributeNode(div5Class);
        div3Node.appendChild(div5Node);

        let div6Node = document.createElement("div");
        let div6Class = document.createAttribute("class");
        div6Class.value = "container-fluid";
        div6Node.setAttributeNode(div6Class);
        div5Node.appendChild(div6Node);

        let img1Node = document.createElement("img");
        let img1Class = document.createAttribute("class");
        img1Class.value = "img-fluid";
        let img1ID = document.createAttribute("id");
        img1ID.value = "modImg"+count;
        img1Node.setAttributeNode(img1Class);
        img1Node.setAttributeNode(img1ID);
        div6Node.appendChild(img1Node);

        anchorNode.appendChild(div1Node);
    }
}

function insertPhoto (array,id,dots) {
    let imgNode = document.createElement("img");
    let srcAttribute = document.createAttribute("src");
    srcAttribute.value = dots+array[0];
    let altAttribute = document.createAttribute("alt");
    altAttribute.value = array[1];
    let imgClassAttribute = document.createAttribute("class");
    imgClassAttribute.value = "img-fluid img-thumbnail";
    imgNode.setAttributeNode(srcAttribute);
    imgNode.setAttributeNode(altAttribute);
    imgNode.setAttributeNode(imgClassAttribute);

    let locationNode = document.getElementById(id);
    locationNode.appendChild(imgNode);
}

function insertPhotoColumn (array,id) {
    let divRowNode = document.createElement("div");
    let classRowAttribute = document.createAttribute("class");
    classRowAttribute.value = "row mt-3";
    divRowNode.setAttributeNode(classRowAttribute);
    
    let divColNode = document.createElement("div");
    let classColAttribute = document.createAttribute("class");
    classColAttribute.value = "col";
    divColNode.setAttributeNode(classColAttribute);
    
    let imgNode = document.createElement("img");
    let srcAttribute = document.createAttribute("src");
    srcAttribute.value = array[0];
    let altAttribute = document.createAttribute("alt");
    altAttribute.value = array[1];
    let imgClassAttribute = document.createAttribute("class");
    imgClassAttribute.value = "img-fluid modImage";
    let idAttribute = document.createAttribute("id");
    idAttribute.value = array[2];
    let styleAttribute = document.createAttribute("style");
    styleAttribute.value = "width:100%;max-width:300px"
    imgNode.setAttributeNode(srcAttribute);
    imgNode.setAttributeNode(altAttribute);
    imgNode.setAttributeNode(imgClassAttribute);
    imgNode.setAttributeNode(idAttribute);
    imgNode.setAttributeNode(styleAttribute);

    divColNode.appendChild(imgNode);
    divRowNode.appendChild(divColNode);

    let locationNode = document.getElementById(id);
    locationNode.appendChild(divRowNode);
}

function photoModalPopup(i) {
    count=i+1;

    let modal = document.getElementById("photoModal"+count);
    let image = document.getElementById("img"+count);
    let modalImage = document.getElementById("modImg"+count);
    let captionText = document.getElementById("caption"+count);
    image.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    }
    let span = document.getElementById("close"+count);
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function populateImages() {
    let photoColumnOne = [];
    let photoColumnTwo = [];
    let photoColumnThree = [];
    let photoColumnFour = [];
    let loop = 1;

    for (let i=0;i<projectArray[15].length;i++) {
        if (loop === 1) {
            photoColumnOne.push(projectArray[15][i]);
            loop++;
        }
        else if (loop === 2) {
            photoColumnTwo.push(projectArray[15][i]);
            loop++;
        }
        else if (loop === 3) {
            photoColumnThree.push(projectArray[15][i]);
            loop++;
        }
        else {
            photoColumnFour.push(projectArray[15][i]);
            loop = 1;
        }
    }

    for (let i=0;i<photoColumnOne.length;i++) {
        insertPhotoColumn(photoColumnOne[i],"photoCol1");
    }
    for (let i=0;i<photoColumnTwo.length;i++) {
        insertPhotoColumn(photoColumnTwo[i],"photoCol2");
    }
    for (let i=0;i<photoColumnThree.length;i++) {
        insertPhotoColumn(photoColumnThree[i],"photoCol3");
    }
    for (let i=0;i<photoColumnFour.length;i++) {
        insertPhotoColumn(photoColumnFour[i],"photoCol4");
    }
}

function popGundamPage () {
    let projectTitleNode = document.getElementById("projectTitle");
    let projectTitleText = document.createTextNode(projectArray[0]);
    projectTitleNode.appendChild(projectTitleText);

    let modelNameNode = document.getElementById("modelFullName");
    let modelNameText = document.createTextNode(modelArray[3]);
    modelNameNode.appendChild(modelNameText);

    insertPhoto(modelArray[26],"modelPhoto","../../");
    insertPhoto(projectArray[16],"profilePhoto","../../");


}