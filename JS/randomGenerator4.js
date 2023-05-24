/*
    Project Array:
    0. Name
    1. Model (inside an array)
    2. Grade
    3. Straight Build (true/false)
    4. P-Bandai (true/false)
    5. MGEX (true/false)
    6. Series (Age,G,IBO,Mercury,Recon,Seed,TurnA,UC,X,Wing,00)
    7. Stage:
         A: Out Of Inventory
         B: Not Started
         C: In Progress
         D: Constructed
         E: Posted
    8. Month Built (Numberic: 1-12)
    9. Year
    10. Hours
    11. LEDS (true/false)
*/

//Pojects
const projects = [
    //Ad Stella (Mercury)
    ['Aerial Permet Six',['Aerial'],'HG',false,true,false,'Mercury','A'],
    ['Ariel',['Aerial','Mirasoul Flight Pack'],'HG',false,false,false,'Mercury','B'],
    ['Cherub',['Aerial'],'SD',false,false,false,'Mercury','D',1,2023,4.91,false],
    ['Azrael',['Dilanza, Guel\'s'],'HG',false,false,false,'Mercury','E',1,2023,12.14,false],
    ['Adriel',['LFrith'],'HG',false,false,false,'Mercury','B'],
    ['LFrith [HG]',['LFrith'],'HG',false,false,false,'Mercury','D',4,2023,2.33,false],

    //Advanced Generation (Age)
    ['Uriel',['Age-FX'],'SD',false,false,false,'Age','B'],
    ['Gamma Draconis',['Danazine'],'HG',false,false,false,'Age','B'],

    //After Colony (Wing)
    ['Leo Army',['Leo'],'HG',false,false,false,'Wing','C','month','year',37.42,false],
    ['South Park',['Tallgeese','Epyon','Heavy Arms','Wing Gundam','Nataku','Deathscythe','Sandrock'],'SD',false,false,false,'Wing','E',6,2021,54.42,true],
    ['Gemini',['Aquarius','Aquarius'],'SD',false,false,false,'Wing','E',7,2021,22.28,false],
    ['Pontus',['Aquarius'],'SD',false,false,false,'Wing','B'],
    ['Deathscythe Hell (TV Version',['Deathscythe Hell'],'HG',false,true,false,'Wing','A'],
    ['Epyon [RG]',['Epyon'],'RG',true,false,false,'Wing','A'],
    ['Golden Ghidorah',['Epyon'],'MG',false,false,false,'Wing','B'],
    ['Golden Ghidorah',['Epyon'],'RG',false,false,false,'Wing','A'],
    ['Geminass 01 [HG]',['Geminass 01','Geminass Assault Mobility Booster Expansion Pack'],'HG',true,true,false,'Wing','E',12,2022,6.5,false],
    ['Major Tom',['Geminass 01'],'SD',false,false,false,'Wing','E',12,2021,5.15,false],
    ['Guerilla Arms',['Heavy Arms'],'MG',false,false,false,'Wing','E',4,2021,60.07,false],
    ['Phoebe',['Maganac Corps'],'SD',false,false,false,'Wing','D',4,2022,8.42,false],
    ['Isaac'['Proto-Zero'],'SD',false,false,false,'Wing','E',2,2023,14.14,false],
    ['Jericho',['Proto-Zero'],'HG',false,false,false,'Wing','E',1,2023,12.79,false],
    ['King David',['Proto-Zero'],'MG',false,false,false,'Wing','E',3,2023,52.11,true],
    ['Metal Zero',['Proto-Zero'],'SD',false,false,false,'Wing','E',1,2023,14.19,false],
    ['Proto-Zero [SD]',['Proto-Zero'],'SD',true,false,false,'Wing','E',12,2021,1.67,false],
    ['Napoleon',['Tallgeese','Ceramic Horse'],'MG',false,false,false,'Wing','B'],
    ['St Dominic',['Tallgeese'],'RG',false,false,false,'Wing','E',12,2021,19,false],
    ['Fl\u00FCgel Sparkel',['Tallgeese Fl\u00FCgel'],'MG',false,true,false,'Wing','B'],
    ['Tallgeese Fl\u00FCgel [MG]',['Tallgeese Fl\u00FCgel'],'MG',true,true,false,'Wing','D',5,2022,20.17,false],
    ['Wild Wing',['Wing Gundam'],'MG',false,false,false,'Wing','E',7,2021,60.48,true],
    ['Wing Gundam [RG]',['Wing Gundam'],'RG',true,false,false,'Wing','E',false,7,2021,12.59,false],
    ['Clear Wing Zero [RG]',['Wing Zero'],'RG',true,true,false,'Wing','E',11,2021,6.15,false],
    ['Dark Zero',['Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Dark Zero',['Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Dark Zero',['Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Fiery Mothra',['Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Fiery Mothra',['Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Fiery Mothra',['Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Gold Dust Woman',['Wing Zero'],'SD',false,false,false,'Wing','E',9,2021,8.37,false],
    ['Snow White',['Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Snow White',['Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Snow White',['Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Wing Zero EW KA [MG]',['Wing Zero','GFFMC Wings For MG Wing Zero'],'MG',true,false,false,'Wing','C',6,2022,10.83,false],
    ['Zero Traditional',['Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Zero Traditional',['Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Zero Traditional',['Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Zero EW',['Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Zero EW',['Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Zero EW',['Wing Zero'],'SD',false,false,false,'Wings','A'],

    //After War (X)
    ['Gaebora',['Airmaster'],'SD',false,false,false,'X','E',10,2021,5.51,false],
    ['Biohazard',['Double X'],'SD',false,false,false,'X','E',8,2022,10,false],
    ['Charlie Daniels',['Double X'],'SD',false,false,false,'X','E',10,2021,4.51,false],
    ['Corona Virus',['Double X'],'MG',false,false,false,'X','E',9,2022,36.08,false],
    ['Double X [MG]',['Double X'],'MG',true,false,false,'X','E',9,2022,7.58,false],
    ['Double X [HG]',['Double X'],'HG',true,false,false,'X','E',8,2022,2,false],
    ['Guapo',['Leopard'],'SD',false,false,false,'X','E',10,2021,6.2,false],
    ['Iron Maiden',['X Gundam'],'SD',false,false,false,'X','E',10,2021,4.83,false],

    //Anno Domini (00)
    ['Gundam Umlaut \xD6\xD6',['00 Gundam'],'SD',false,false,false,'00','E',6,2021,10.83,false],
    ['Metatron',['00 Raiser'],'SD',false,false,false,'00','B'],
    ['Trans-Am Clear 00 Raiser [RG]',['00 Gundam Raiser'],'RG',true,true,false,'00','E',12,2021,12.67,false],
    ['Silver n GOld',['00 Gundam QAN[T]'],'RG',false,false,false,'00','B'],
    ['Thunder QAN[T]',['00 Gundam QAN[T]'],'SD',false,false,false,'00','E',6,2021,11.68,true],
    ['Trans-Am Clear 00 QAN[T] [RG]',['00 Gundam QAN[T]'],'RG',true,true,false,'00','E',1,2022,8.33,false],
    ['Nena',['Exia'],'SD',false,false,false,'00','D',12,2021,4.95,false],
    ['Trans-Am Clear Exia [RG]',['Exia'],'RG',true,true,false,'00','E',12,2021,6.58,false],
    ['Harute (Final Battle Version) [HG]',['Harute'],'HG',true,true,false,'00','E',3,2022,5.75,false],
    ['Virtue/Nadlee [MG]',['Virtue','Nadlee'],'MG',true,false,false,'00','E',2,2022,20.08,true],
    ['Zabanya (Final Battle Version) [HG]',['Zabanya'],'HG',true,true,false,'00','E',3,2022,3,false],

    //Correct Century (Turn A)
    ['John Wayne',['Turn-A'],'SD',false,false,false,'TurnA','E',9,2021,6.62,false],

    //Cosmic Century (Seed)
    ['Gundam Fluorescent',['Aegis'],'SD',false,false,false,'Seed','E',6,2021,9.94,false],
    ['Bald Eagle',['Astray Blue Frame'],'MG',false,false,false,'Seed','B'],
    ['Raphael',['Astray Gold Frame'],'SD',false,false,false,'Seed','B'],
    ['Oowashi Akatsuki [HG]',['Akatsuki, Oowsahi'],'HG',true,false,false,'Seed','E',12,2021,2.67,false],
    ['Rising Sun',['Akatsuki, Oowashi'],'HG',false,false,false,'Seed','E',11,2021,17.28,false],
    ['King Mars',['Akatsuki, Shiranui'],'HG',false,false,false,'Seed','D',5,2022,13.67,false],
    ['Archangel',['Archangel','Archangel'],'Ship',false,false,false,'Seed','E',8,2021,76.63,false],
    ['Dominion',['Archangel'],'Ship',false,false,false,'Seed','E',9,2021,21.87,false],
    ['Urban Commando',['Buster'],'MG',false,false,false,'Seed','B'],
    ['Calamitous Godzilla',['Calamity'],'FM',false,false,false,'Seed','B'],
    ['Eclipse ???',['Eclipse'],'MG',false,false,false,'Seed','B'],
    ['Armageddon',['Dagger L','Dagger L','Dagger Expansion Pack'],'HG',false,true,false,'Seed','E',3,2022,28.5,false],
    ['King Leir',['Dagger L'],'HG',false,false,false,'Seed','E',6,2021,14.91,false],
    ['Samus',['Dagger L'],'HG',false,false,false,'Seed','B'],
    ['Charizard',['Destiny'],'MG',false,false,false,'Seed','B'],
    ['Charizard X',['Destiny'],'SD',false,false,false,'Seed','E',10,2021,8.13,false],
    ['Iapetus',['Destiny'],'SD',false,false,false,'Seed','B'],
    ['Thin Blue Line',['Duel Gundam','Duel Gundam Assault Shroud'],'MG',false,false,false,'Seed','B'],
    ['Eclipse [MG]',['Eclipse','Eclipse Maneuver Striker'],'MG',true,true,false,'Seed','E',2,2022,17.75,false],
    ['Eternal',['Eternal'],'Ship',false,false,false,'Seed','E',8,2021,24.1,false],
    ['Anthem',['Freedom'],'MG',false,false,false,'Seed','E',5,2022,73.16,true],
    ['Freedom [MGSD]',['Freedom'],'MGSD',false,false,false,'Seed','C',3,2023,8.5,false],
    ['Liberty',['Freedom'],'SD',false,false,false,'Seed','E',4,2022,18,false],
    ['Old Glory',['Freedom'],'MGSD',false,false,false,'Seed','C',5,2023,12.92,false],
    ['Billy Blue Jay',['Ginn'],'MG',false,false,false,'Seed','B'],
    ['Destiny Impulse (Regenes) [MG]',['Impulse, Destiny'],'Seed','MG',true,true,false,'C',5,2023,6.5,false],
    ['Destiny Impulse [RG]',['Impulse, Destiny'],'RG',true,true,false,'Seed','B'],
    ['Don\'t Tread On Ye',['Justice'],'MG',false,false,false,'Seed','E',6,2022,51.75,true],
    ['AntiJustice',['Justice'],'SD',false,false,false,'Seed','B'],
    ['Pacifist',['Justice'],'SD',false,false,false,'Seed','E',4,2022,14.58,false],
    ['Clear \u221e Justice [RG]',['Infinite Justice'],'RG',true,true,false,'Seed','E',11,2021,4.93,false],
    ['Oppression',['Infinite Justice'],'MG',false,false,false,'Seed','B'],
    ['Zoroaster',['Legend'],'FM',false,false,false,'Seed','B'],
    ['Meteors',['Meteor','Meteor I','Meteor II','Freedom','Infinite Justice'],'HG',false,true,false,'Seed','B'],
    ['Union Jack',['Providence'],'MG',false,false,false,'Seed','A'],
    ['Raider [FM]',['Raider'],'FM',true,false,false,'Seed','D',1,2023,9.75,false],
    ['Rodan',['Raider'],'FM',false,false,false,'Seed','A'],
    ['Blue Angels',['Skygrasper','Skygrasper','Skygrasper'],'RG',false,false,false,'Seed','E',12,2022,22,true],
    ['Skygrasper [PG]',['Skygrasper'],'PG',true,false,false,'Seed','E',10,2022,6,false],
    ['Skygrasper [RG]',['Skygrasper','Skygrasper','Skygrasper'],'RG',false,false,false,'Seed','E',9,2022,10,false],
    ['Lightning Strike',['Strike','Lightning Striker','Sword Launcher Striker Pack'],'MG',false,true,false,'Seed','B'],
    ['Metal Strike',['Strike'],'SD',false,false,false,'Seed','B'],
    ['Strike Gundam [PG]',['Strike'],'PG',true,false,false,'Seed','C',5,2023,11.67,true],
    ['Perfect Strike [RG]',['Strike, Perfect'],'RG',true,true,false,'Seed','E',3,2022,12.33,false],
    ['S.A.T.O.',['Strike, Perfect'],'SD',false,false,false,'Seed','D',1,2022,14.85,false],
    ['PB Strike Daggers [HG]',['Strike Dagger','Strike Dagger','Strike Dagger'],'HG',false,true,false,'Seed','D',3,2023,22,false],
    ['AntiFreedom',['Strike-Freedom'],'SD',false,false,false,'Seed','B'],
    ['Servitude',['Strike-Freedom'],'MG',false,false,false,'Seed','B'],
    ['Strike-Freedom Full Burst',['Strike-Freedom'],'MG',true,false,false,'Seed','E',7,2021,18.42,false],
    ['Strike-Freedom MGEX',['Strike-Freedom'],'MG',true,false,true,'Seed','C',3,2023,14.25,false],
    ['Strike-Freedom (Deactive) [RG]',['Strike-Freedom'],'RG',true,true,false,'Seed','D',3,2023,4.75,false],
    ['Battra',['Strike Noir'],'MG',false,false,false,'Seed','B'],
    ['Strike Noir [SD]',['Strike Noir'],'SD',true,false,false,'Seed','D',9,2021,2.233,false],
    ['Strike Verde',['Strike Noir'],'SD',false,false,false,'Seed','D',12,2021,8,false],
    ['Oberon',['Windam'],'HG',false,false,false,'Seed','E',3,2022,20.25,false],
    ['Slash Zaku Phantom (Yzak Jule Custom) [MG]',['Zaku Phantom, Slash'],'MG',true,true,false,'Seed','C',4,2023,3.33,false],
    
    //Future Century (G Gundam)
    ['Burning Gundam [RG]',['Burning Gundam','Burning Gundam Expansion Pass','Burning Gundam LED lights'],'RG',true,true,false,'G','C',9,2022,15.5,true],
    ['Michael',['Burning Gundam'],'SD',false,false,false,'G','B'],
    ['Furcas',['Dark Army'],'HG',false,false,false,'G','B'],
    ['Malphas',['Dark Army'],'HG',false,false,false,'G','E',9,2022,5.83,false],
    ['Asmodeus',['Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Baal',['Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Balam',['Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Beleth',['Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Belial',['Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Dark Gundam [SD]',['Dark Gundam'],'SD',true,false,false,'G','D',8,2022,1.75,false],
    ['Paimon',['Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Gundam Rose [HG]',['Rose Gundam'],'HG',true,true,false,'G','A'],
    ['Le Roi Soleil',['Rose Gundam'],'HG',false,false,false,'G','E',8,2022,4.17,false],
    ['Gabriel',['Shining Gundam'],'SD',false,false,false,'G','B'],
    ['Red Baron',['Spiegel, Gundam'],'MG',false,false,false,'G','E',5,2021,72.07,true],
    ['Red Baron 2',['Spiegel, Gundam'],'MG',false,false,false,'G','A'],

    //Post Disaster (IBO)
    ['Thorn',['Barbatos'],'MG',false,false,false,'IBO','B'],
    ['War Pig',['Barbatos'],'SD',false,false,false,'IBO','E',12,2021,4.15,false],
    ['Deep Purple',['Barbatos Lupus'],'SD',false,false,false,'IBO','D',12,2021,4.36,false],
    ['Sealiah',['Barbatos Lupus'],'HG',false,false,false,'IBO','D',2,2023,12.51,false],
    ['Nephilim',['Barbatos Lupus Rex'],'HG',false,false,false,'IBO','E',6,2021,23.11,false],
    ['Queen Venus',['Gremory'],'HG',false,false,false,'IBO','B'],
    ['Vine',['Hashmal'],'HG',false,false,'IBO','D',1,2023,19.64,false],
    ['\u00dcbermensch',['Vidar'],'FM',false,false,false,'IBO','B'],

    //Universal Century
    ['DewDrop',['Acguy'],'HG',false,false,false,'UC','B'],
    ['Fantomas',['Banshee Norn'],'SD',false,false,false,'UC','E',6,2021,15.02,true],
    ['King Uranus',['Banshee Norn'],'RG',false,false,false,'UC','B'],
    ['Gundam ARRRgent',['Crossbone X-1'],'SD',false,false,false,'UC','E',6,2021,14.09,false],
    ['Crossbone [RG]',['Crossbone X-1'],'RG',true,false,false,'UC','D',5,2022,9.08,false],
    ['King Neptune',['Crossbone X-1'],'RG',false,false,false,'UC','B'],
    ['Jackie-O',['Delta Plus'],'SD',false,false,false,'UC','E',1,2022,11.17,false],
    ['Interstellar',['Dom Test Type'],'HG',false,false,false,'UC','E',8,2022,14.07,false],
    ['Rhea',['RX-75 Guntank'],'SD',false,false,false,'UC','B'],
    ['Theia',['Kshatriya'],'SD',false,false,false,'UC','D',12,2022,12.03,false],
    ['Der Kommissar',['Lightning Gundam'],'SD',false,false,false,'UC','E',12,2021,4.05,false],
    ['Nachtigall',['Nightingale'],'SD',false,false,false,'UC','B'],
    ['Mnemosyne',['Neue Ziuel'],'SD',false,false,false,'UC','B'],
    ['Gundam \u03C0',['Nu Gundam'],'SD',false,false,false,'UC','E',6,2021,15.66,false],   //pi gundam
    ['BB Senshi RX-93ff \u03bd Gundam [SD]',['Nu Gundam, ff'],'SD',true,true,false,'UC','E',3,2023,2.83,false],
    ['RX-93ff \u03bd Gundam [RG]',['Nu Gundam, ff'],'RG',true,true,false,'UC','E',3,2023,14.5,false],
    ['Milos',['Nu Gundam, Hi'],'SD',false,false,false,'UC','B'],
    ['Umbrella Corp',['Nu Gundam, Hi','Hi Nu Expansion Pack','Hi Nu Hyper Bazooka'],'RG',false,true,false,'UC','B'],
    ['Bella Donna',['Phenex','Phenex'],'SD',false,false,false,'UC','E',12,2021,14.37,false],
    ['Phenex [SD]',['Phenex'],'SD',true,false,false,'UC','E',10,2021,4.17,false],
    ['Sovereign',['Phenex'],'SD',false,false,false,'UC','E',11,2021,5.93,false],
    ['Titan',['Phenex'],'SD',false,false,false,'UC','E',11,2021,6.63,false],
    ['LunchTime Solutions',['RX-78-2'],'RG',false,false,false,'UC','B'],
    ['Starman',['Sazabi'],'SD',false,false,false,'UC','D',12,2021,5.03,false],
    ['Ziggy',['Sazabi'],'SD',false,false,false,'UC','D',3,2022,5.75,false],
    ['Dynamo',['Sinanju'],'MG',false,false,false,'UC','B'],
    ['Stardust',['Sinanju'],'SD',false,false,false,'UC','D',12,2021,4.56,false],
    ['Shin Musha [MG]',['Shin Musha Gundam'],'MG',true,true,false,'UC','E',8,2022,10.58,false],
    ['Blue Monday',['Sisquiede'],'SD',false,false,false,'UC','D',1,2022,6.76,false],
    ['Rocket Man',['Xi Gundam'],'SD',false,false,false,'UC','D',1,2022,6.5,false],
    ['MK Ultra',['Zaku II'],'RG',false,false,false,'UC','B'],
    ['Zeong [RG]',['Zeong'],'RG',true,false,false,'UC','E',8,2021,8.25,false],
    ['Starrider',['Zeta Gundam'],'SD',false,false,false,'UC','E',9,2021,6.83,false],
    ['Zeta [MG]',['Zeta Gundam'],'MG',true,false,false,'UC','C',4,2023,8,false],

    //Regild Century (Reconguista)


    //Build Divers (BD)
    ['Trans-Am Clear 00 Diver [HG]',['00 Gundam Diver'],'HG',true,true,false,'BD','E',1,2022,2.75,false],
    ['King Milky Way',['Astray Rebake'],'HG',false,false,false,'BD','B'],
    ['Four Horsemen',['Barbataurus'],'HG',false,false,false,'BD','B'],
    ['King Sol',['Helios'],'HG',false,false,false,'BD','B'],
    ['King Jupiter',['Livelance'],'HG',false,false,false,'BD','B'],
    ['King Pluto',['QAN[T], Command'],'HG',false,false,false,'BD','B'],
    ['Queen Luna',['QAN[T], Shia'],'HG',false,false,false,'BD','B'],
    ['King Earth',['Strike Freedom, Perfect'],'HG',false,false,false,'BD','B'],
    ['Constellation',['Strike Full Package'],'RG',false,false,false,'BD','E',11,2021,37.52,true],
    ['Moonage Daydream',['Strike Full Package'],'SD',false,false,false,'BD','E',11,2021,7.27,false],
    ['King Saturn',['Transient'],'HG',false,false,false,'BD','B'],
    ['King Mercury',['Try Age Magnum'],'HG',false,false,false,'BD','B'],
    
    //SD Heroes 
    ['Artemis',['00, Zhao Yun'],'SD',false,false,false,'Heroes','A'],
    ['Oceanus',['Altron, Zhang He'],'SD',false,false,false,'Heroes','D',4,2022,5.42,false],
    ['Eurybia',['Akatsuki, Zhou Yu'],'SD',false,false,false,'Heroes','B'],
    ['Pallas',['Burning Gundam, Huang Zhang Fei'],'SD',false,false,false,'Heroes','B'],
    ['Perses',['Deathscythe, Xu Huang'],'SD',false,false,false,'Heroes','A'],
    ['Azalea',['Delta, Sasuki'],'SD',false,false,false,'Heroes','E',10,2021,6.5,false],
    ['Sasuki Delta [SD]',['Delta, Saskui'],'SD',true,false,false,'Heroes','E',9,2021,1.5,false],
    ['Quetzalcaotl',['Dragon, Dark Grasper'],'SD',false,false,false,'Heroes','B'],
    ['Pharaoh',['Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Tiamat',['Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Cronus',['Epyon, Nobunaga'],'SD',false,false,false,'Heroes','A'],
    ['Helios',['Freedom, Zhuge Liang'],'SD',false,false,false,'Heroes','D',3,2022,9.25,false],
    ['Themis',['Legend, Caesar'],'SD',false,false,false,'Heroes','A'],
    ['Crius',['Sazabi, Zhang Liao'],'SD',false,false,false,'Heroes','B'],
    ['Clymene',['Strike, Knight'],'SD',false,false,false,'Heroes','A'],
    ['Prometheus',['Strike Noir, Xun Yu'],'SD',false,false,false,'Heroes','B'],
    ['Selene',['Strike-Freedom, Qiongqi'],'SD',false,false,false,'Heroes','B'],
    ['Corona Australis',['Tallgeese, Xiahou Yuan'],'SD',false,false,false,'Heroes','D',4,2022,7.75,false],
    ['Corona Borealis',['Tallgeese III, Xiahou Dun'],'SD',false,false,false,'Heroes','D',4,2022,8.67,false],
    ['Coeus',['Unicorn, Long Zun Liu Vei'],'SD',false,false,false,'Heroes','A'],
    ['Bastiat',['Verde Buster, Sergeante'],'SD',false,false,false,'Heroes','E',10,2021,8.3,false],
    ['Mighty Morphin Power Rangers',['Verde Buster, Sergeant DX','Verde Buster, Sergeant DX','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member'],'SD',false,false,false,'Heroes','E',12,2022,39.63,false],
    ['Eos',['Wing, Cao Cao'],'SD',false,false,false,'Heroes','A'],
    ['Tethys',['Wing Isei, Cao Cao'],'SD',false,false,false,'Heroes','D',4,2022,8.67,false],
    ['Hyperion',['Wing Zero, Tian Ba Cao Cao'],'SD',false,false,false,'Heroes','B'],

    //Haro
    ['Haro Blue',['Haropla #05 Control Blue'],'Haro',false,false,false,'','D',4,2023,2.55,false],
    ['Haro Cloud',['Haropla #12 Basic Green'],'Haro',false,false,false,'','D',4,2023,3.27,false],
    ['Haro Green',['Haropla #12 Basic Green'],'Haro',false,false,false,'','D',4,2023,2.75,false],
    ['Haro Lime',['Haropla #12 Basic Green'],'Haro',false,false,false,'','D',4,2023,3.34,false],
    ['Haro Orange',['Haropla #11 Zakrello'],'Haro',false,false,false,'','D',4,2023,4.08,false],
    ['Haro Pink',['Haropla #04 Momo Pink'],'Haro',false,false,false,'','D',4,2023,2.68,false],
    ['Haro Purple',['Haropla #07 Ball Haro'],'Haro',false,false,false,'','D',4,2023,2.65,false],
    ['Haro Red',['Haropla #02 Diva Red'],'Haro',false,false,false,'','D',4,2023,2.78,false],
    
    //Car
    ['Hud Air',['Chevy Bel Air, 57'],'Car',false,false,false,'Chevy','E',5,2021,23.05,true],
    ['Wilbur',['Volkswagen Beetle, 68'],'Car',false,false,false,'Volkswagen','E',11,2022,27.08,true],
    
    //Pokemon
    ['Obelix',['Bulbasaur'],'Pokemon',false,false,false,'','B'],
    ['Asterix',['Charmander'],'Pokemon',false,false,false,'','D',3,2023,3.85,false],
    ['Vercingetorix',['Charizard'],'Pokemon',false,false,false,'','D',3,2023,5.99,false],
    ['Boudica',['Dragonite'],'Pokemon',false,false,false,'','D',3,2023,3.47,false],
    ['Granfrog',['Greninja'],'Pokemon',false,false,false,'','E',11,2021,5.68,false],
    ['Cacofonix',['Metagross'],'Pokemon',false,false,false,'','B'],
    ['Getafix',['Rayquaza'],'Pokemon',false,false,false,'','B'],
    
    //Digimon
    ['Heimdall',['Alphamon'],'Digimon',false,false,false,'','A'],
    ['Loki',['Beelzemon'],'Digimon',false,false,false,'','A'],
    ['Thor',['Gallantmon'],'Digimon',false,false,false,'','E',10,2022,22.5,false],
    ['Jormungandr',['Imperialdramom'],'Digimon',false,false,false,'','A'],
    ['Nidhogg',['Machinedramon'],'Digimon',false,false,false,'','A'],
    ['Fenrir',['Metal Garurumon'],'Digimon',false,false,false,'','E',7,2022,20.58,false],
    ['Ragnarok',['Omnimon'],'Digimon',false,false,false,'','E',7,2022,19.65,false],
    ['Revelation',['Omnimon X'],'Digimon',false,false,false,'','A'],
    ['Fafnir',['War Greymon'],'Digimon',false,false,false,'','E',7,2022,20.7,false],

    //Display
    ['Diurnum',['City Area, 30 Minute Mission'],'Display',false,false,false,'','E',1,2022,9.67,false],
    ['Battlefield Earth',['Energy Ring Emitter'],'Display',false,false,false,'','A'],
    ['Kataluma',['Hangar Bay'],'Display',false,false,false,'','E',2,2022,16.96,true],
    ['Stratle',['Maintenance Bay'],'Display',false,false,false,'','E',2,2022,27.12,true],

    //Ship
    ['Libeccio',['Andromeda Black'],'Ship',false,false,false,'StarBlazer','E',9,2022,4.42,false],
    ['Ostro',['Cosmo Falcon'],'Ship',false,false,false,'StarBlazer','E',7,2022,6.33,false],
    ['Ponente',['Cosmo Zero'],'Ship',false,false,false,'StarBlazer','B'],

    //Transformer
    ['Wilbee',['Bumblebee'],'Transformer',false,false,false,'','E',11,2022,9.33,false],
    
    //Zoid
    ['Dash Hound',['Shadow Fox'],'Zoid',false,false,false,'','A'],
    ['Shere Khan',['Blade Liger'],'Zoid',false,false,false,'','B'],
    ['Akele',['Konig Wolf Heavy Arms'],'Zoid',false,false,false,'','A'],
    ['Kipling',['Liger Zero X'],'Zoid',false,false,false,'','B']
]

//Initialize Arrays
let outOfStockArray = [];
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
let pbUndeliveredArray = [];
let backlogListArray = [pgBacklogArray,mgBacklogArray,fmBacklogArray,rgBacklogArray,hgBacklogArray,mgsdBacklogArray,sdBacklogArray,pbBacklogArray,sbBacklogArray,carBacklogArray,digiBacklogArray,dispBacklogArray,haroBacklogArray,pokeBacklogArray,shipBacklogArray,transBacklogArray,zoidBacklogArray];

//Initialize Counts
let init = 0;
let outOfStockCount = 0;
let backlogCount = 0;
let inProgressCount = 0;
let constructedCount = 0;
let postedCount = 0;
let finishedCount = 0;

//Functions
function insertLine (text,ID) {
    const listNode = document.getElementById(ID);
    const lineItemNode = document.createElement('li');
    const textNode = document.createTextNode(text);
    listNode.appendChild(lineItemNode);
    lineItemNode.appendChild(textNode);
}

function cleanupArrays(array) {
    if(array.length<1) {
        array=['.....Out of Stock.....'];
    }
    return array;
}

function addTable() {
    const table = document.querySelector(".table2");
    table.style.display = "block";

    let tempArray=0;
    for (let i=0;i<postedArray.length;i++) {
        tempArray=postedArray[i];
        insertLine(tempArray[0],'FP');
    }
    for (let i=0;i<pgBacklogArray.length;i++) {
        tempArray=pgBacklogArray[i];
        insertLine(tempArray,'pgBL');
    }
    for (let i=0;i<mgBacklogArray.length;i++) {
        tempArray=mgBacklogArray[i]
        insertLine(tempArray,'mgBL');
    }
    for (let i=0;i<fmBacklogArray.length;i++) {
        tempArray=fmBacklogArray[i];
        insertLine(tempArray,'fmBL');
    }
    for (let i=0;i<rgBacklogArray.length;i++) {
        tempArray=rgBacklogArray[i];
        insertLine(tempArray,'rgBL');
    }
    for (let i=0;i<hgBacklogArray.length;i++) {
        tempArray=hgBacklogArray[i];
        insertLine(tempArray,'hgBL');
    }
    for (i=0;i<mgsdBacklogArray.length;i++) {
        tempArray=mgsdBacklogArray[i];
        insertLine(tempArray,'mgsdBL');
    }
    for (let i=0;i<sdBacklogArray.length;i++) {
        tempArray=sdBacklogArray[i];
        insertLine(tempArray,'sdBL');
    }
    for (let i=0;i<pbBacklogArray.length;i++) {
        tempArray=pbBacklogArray[i];
        insertLine(tempArray,'pbBL');
    }
    for (let i=0;i<sbBacklogArray.length;i++) {
        tempArray=sbBacklogArray[i];
        insertLine(tempArray,'sbBL');
    }
    for (let i=0;i<carBacklogArray.length;i++) {
        tempArray=carBacklogArray[i];
        insertLine(tempArray,'carBL');
    }
    for (let i=0;i<digiBacklogArray.length;i++) {
        tempArray=digiBacklogArray[i];
        insertLine(tempArray,'dgBL');
    }
    for (let i=0;i<dispBacklogArray.length;i++) {
        tempArray=dispBacklogArray[i];
        insertLine(tempArray,'dspBL');
    }
    for (let i=0;i<haroBacklogArray.length;i++) {
        tempArray=haroBacklogArray[i];
        insertLine(tempArray,'haroBL');
    }
    for (let i=0;i<pokeBacklogArray.length;i++) {
        tempArray=pokeBacklogArray[i];
        insertLine(tempArray,'pokeBL');
    }
    for (let i=0;i<shipBacklogArray.length;i++) {
        tempArray=shipBacklogArray[i];
        insertLine(tempArray,'shipBL');
    }
    for (let i=0;i<transBacklogArray.length;i++) {
        tempArray=transBacklogArray[i];
        insertLine(tempArray,'transBL');
    }
    for (let i=0;i<zoidBacklogArray.length;i++) {
        tempArray=zoidBacklogArray[i];
        insertLine(tempArray,'zoidBL');
    }
    for (let i=0;i<outOfStockArray.length;i++) {
        tempArray=outOfStockArray[i];
        insertLine(tempArray[0],'OOS');
    }
    for (let i=0;i<pbUndeliveredArray.length;i++) {
        tempArray=pbUndeliveredArray[i];
        insertLine(tempArray,'OOSPB');
    }
    
    const finishNode = document.getElementById('FP').parentNode;
    const totalFinishedNode = document.createTextNode(postedCount); 
    finishNode.appendChild(totalFinishedNode); 
}

function addInProgress() {
    const table = document.querySelector(".table3");
    table.style.display = "block";
    
    let progressOne = [];
    let progressTwo = [];
    let progressThree = [];
    let tempArray = [];
    let loop = 1;

    for (let i=0;i<inProgressArray.length;i++) {
        if (loop === 1) {
            tempArray = inProgressArray[i]
            progressOne.push(tempArray[0]);
            loop++;
        }
        else if (loop === 2) {
            tempArray = inProgressArray[i]
            progressTwo.push(tempArray[0]);
            loop++;
        }
        else {
            tempArray = inProgressArray[i]
            progressThree.push(tempArray[0]);
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
}

function addConstructed() {
    const table = document.querySelector(".table4");
    table.style.display = "block";
    
    let constructOne = [];
    let constructTwo = [];
    let constructThree = [];
    let tempArray = [];
    let loop = 1;

    for (let i=0;i<constructedArray.length;i++) {
        if (loop === 1) {
            tempArray = constructedArray[i]
            constructOne.push(tempArray[0]);
            loop++;
        }
        else if (loop === 2) {
            tempArray = constructedArray[i]
            constructTwo.push(tempArray[0]);
            loop++;
        }
        else {
            tempArray = constructedArray[i]
            constructThree.push(tempArray[0]);
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
}

function suggestNextPost () {
    const suggestPostNode = document.getElementById('toPost');
    suggestPostNode.removeChild(suggestPostNode.firstChild);
    
    let decisionNumber = Math.floor(Math.random()*constructedCount)+1;
    let tempArray = constructedArray[decisionNumber];
    const suggestTextNode = document.createTextNode(tempArray[0]);
    suggestPostNode.appendChild(suggestTextNode);
}

function generateLists() {
    let tempArray = [];
    
    for (let i=0;i<projects.length;i++) {
        tempArray = projects[i];
        if (tempArray[7] === 'A' && tempArray[4]) {
            pbUndeliveredArray.push(tempArray[0]);
        }
        else if (tempArray[7] === 'A') {
            outOfStockArray.push(tempArray);
        }
        else if (tempArray[7] === 'B') {
            backlogArray.push(tempArray);
        }
        else if (tempArray[7] === 'C') {
            inProgressArray.push(tempArray);
        }
        else if (tempArray[7] === 'D') {
            constructedArray.push(tempArray);
        }
        else if (tempArray[7] === 'E') {
            postedArray.push(tempArray);
        }
    }
    outOfStockCount = outOfStockArray.length;
    backlogCount = backlogArray.length;
    inProgressCount = inProgressArray.length;
    constructedCount = constructedArray.length;
    postedCount = postedArray.length;

    //Backlog by Grade
    for (let i=0;i<backlogArray.length;i++) {
        tempArray = backlogArray[i];
        if (tempArray[4]) {
            pbBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[3]) {
            sbBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='MG') {
            mgBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='FM') {
            fmBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='RG') {
            rgBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='HG') {
            hgBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='MGSD') {
            mgsdBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='SD') {
            sdBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Car') {
            carBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Digimon') {
            digiBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Display') {
            dispBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Haro') {
            haroBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Pokemon') {
            pokeBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Ship') {
            shipBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Transformer') {
            transBacklogArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Zoid') {
            zoidBacklogArray.push(tempArray[0]);
        }
    }

    //Sort Alphabetically
    outOfStockArray.sort();
    backlogArray.sort();
    inProgressArray.sort();
    constructedArray.sort();
    postedArray.sort();
    finishedArray.sort();
    pgBacklogArray.sort();
    mgBacklogArray.sort();
    fmBacklogArray.sort();
    rgBacklogArray.sort();
    hgBacklogArray.sort();
    mgsdBacklogArray.sort();
    sdBacklogArray.sort();
    pbBacklogArray.sort();
    sbBacklogArray.sort();
    carBacklogArray.sort();
    digiBacklogArray.sort();
    dispBacklogArray.sort();
    haroBacklogArray.sort();
    pokeBacklogArray.sort();
    shipBacklogArray.sort();
    transBacklogArray.sort();
    zoidBacklogArray.sort();
    pbUndeliveredArray.sort();

    //Clean up in progress lists
    pgBacklogArray = cleanupArrays(pgBacklogArray);
    mgBacklogArray = cleanupArrays(mgBacklogArray);
    fmBacklogArray = cleanupArrays(fmBacklogArray);
    rgBacklogArray = cleanupArrays(rgBacklogArray);
    hgBacklogArray = cleanupArrays(hgBacklogArray);
    mgsdBacklogArray = cleanupArrays(mgsdBacklogArray);
    sdBacklogArray = cleanupArrays(sdBacklogArray);
    pbBacklogArray = cleanupArrays(pbBacklogArray);
    sbBacklogArray = cleanupArrays(sbBacklogArray);
    carBacklogArray = cleanupArrays(carBacklogArray);
    digiBacklogArray = cleanupArrays(digiBacklogArray);
    dispBacklogArray = cleanupArrays(dispBacklogArray);
    haroBacklogArray = cleanupArrays(haroBacklogArray);
    pokeBacklogArray = cleanupArrays(pokeBacklogArray);
    shipBacklogArray = cleanupArrays(shipBacklogArray);
    transBacklogArray = cleanupArrays(transBacklogArray);
    zoidBacklogArray = cleanupArrays(zoidBacklogArray);
    pbUndeliveredArray = cleanupArrays(pbUndeliveredArray);
}

function gradeEdifier(array) {
    let grade = array[2];
    
    if (grade === 'PG') {
        grade = 'Perfect Grade';
    }
   if (grade === 'MG') {
        grade = 'Master Grade';
    }
    if (grade === 'FM') {
        grade = 'Full Mechanics';
    }
    if (grade === 'RG') {
        grade = 'Real Grade';
    }
    if (grade === 'HG') {
        grade = 'High Grade';
    }
    if (grade === 'SD') {
        grade = 'Super Deformed';
    }
    if (array[3]) {
        grade = 'Straight Build';
    }
    if (array[4]) {
        grade = 'P-Bandai';
    }
    if (array[5]) {
        grade = 'MGEX';
    }

    return grade;
}

function generateRandomBuild() {
    if (init<1) {
        generateLists();
        addTable();
        addInProgress();
        addConstructed();
        init++;
    }

    const nextGradeNode = document.getElementById('nextGradeID');
    const nextBuildNode = document.getElementById('nextBuildID');
    const nextBacklogNode = document.getElementById('backlogID');
    nextGradeNode.removeChild(nextGradeNode.firstChild);
    nextBuildNode.removeChild(nextBuildNode.firstChild);
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
