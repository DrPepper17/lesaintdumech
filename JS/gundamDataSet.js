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
    11. URL
*/

//Pojects
const projects = [
    //Ad Stella (Mercury)
    ['Aerial [HG]',[1,'Aerial'],'HG',true,false,false,'Mercury','D',"2023-05-30",2.25,false],
    ['PB Aerial Permet Six [HG]',[1,'Aerial'],'HG',true,true,false,'Mercury','A'],
    ['Ariel',[1.5,'Aerial','Mirasoul Flight Pack'],'HG',false,false,false,'Mercury','B'],
    ['Cherub',[1,'Aerial'],'SD',false,false,false,'Mercury','D',"2023-01",4.91,false],
    ['Azrael',[1,'Dilanza, Guel\'s'],'HG',false,false,false,'Mercury','E',"2023-01",12.14,false],
    ['Adriel',[1,'LFrith'],'HG',false,false,false,'Mercury','B'],
    ['LFrith [HG]',[1,'LFrith'],'HG',false,false,false,'Mercury','D',"2023-04",2.33,false],

    //Advanced Generation (Age)
    ['Uriel',[1,'Age-FX'],'SD',false,false,false,'Age','B'],
    ['Gamma Draconis',[1,'Danazine'],'HG',false,false,false,'Age','B'],

    //After Colony (Wing)
    ['Leo Army',[6,'Leo'],'LEO',false,false,false,'Wing','C',"2021-10",37.42,false],
    ['South Park',[6,'Tallgeese','Epyon','Heavy Arms','Shenlong','Deathscythe','Sandrock'],'SD',false,false,false,'Wing','E',"2021-06",54.42,true],
    ['Gemini',[2,'Aquarius','Aquarius'],'SD',false,false,false,'Wing','E',"2021-07",22.28,false],
    ['Pontus',[1,'Aquarius'],'SD',false,false,false,'Wing','B'],
    ['PB Deathscythe Hell (TV Version',[1,'Deathscythe Hell'],'HG',false,true,false,'Wing','A'],
    ['Epyon [RG]',[1,'Epyon'],'RG',true,false,false,'Wing','A'],
    ['Golden Ghidorah',[1,'Epyon'],'MG',false,false,false,'Wing','B'],
    ['Golden Ghidorah',[1,'Epyon'],'RG',false,false,false,'Wing','A'],
    ['PB Geminass 01 [HG]',[1.5,'Geminass 01','Geminass Assault Mobility Booster Expansion Pack'],'HG',true,true,false,'Wing','E',"2022-12",6.5,false],
    ['Major Tom',[1,'Geminass 01'],'SD',false,false,false,'Wing','E',"2021-12",5.15,false],
    ['Guerilla Arms',[1,'Heavy Arms'],'MG',false,false,false,'Wing','E',"2021-04",60.07,false,'Builds/GuerillaArms.html'],
    ['Phoebe',[1,'Maganac Corps'],'SD',false,false,false,'Wing','D',"2022-04",8.42,false],
    ['Isaac',[1,'Proto-Zero'],'SD',false,false,false,'Wing','E',"2023-02",14.14,false],
    ['Jericho',[1,'Proto-Zero'],'HG',false,false,false,'Wing','E',"2023-01",12.79,false],
    ['King David',[1,'Proto-Zero'],'MG',false,false,false,'Wing','E',"2023-03",52.11,true],
    ['Metal Zero',[1,'Proto-Zero'],'SD',false,false,false,'Wing','E',"2023-01",14.19,false],
    ['Proto-Zero [SD]',[1,'Proto-Zero'],'SD',true,false,false,'Wing','E',"2021-12",1.67,false],
    ['Napoleon',[2,'Tallgeese','Ceramic Horse'],'MG',false,false,false,'Wing','B'],
    ['St Dominic',[1,'Tallgeese'],'RG',false,false,false,'Wing','E',"2021-12",19,false],
    ['PB Fl\u00FCgel Sparkel',[1,'Tallgeese Fl\u00FCgel'],'MG',false,true,false,'Wing','B'],
    ['PB Tallgeese Fl\u00FCgel [MG]',[1,'Tallgeese Fl\u00FCgel'],'MG',true,true,false,'Wing','D',"2022-05",20.17,false],
    ['Wild Wing',[1,'Wing Gundam'],'MG',false,false,false,'Wing','E',"2021-07",60.48,true],
    ['Wing Gundam [RG]',[1,'Wing Gundam'],'RG',true,false,false,'Wing','E',"2021-07",12.59,false],
    ['PB Clear Wing Zero [RG]',[1,'Wing Zero'],'RG',true,true,false,'Wing','E',"2021-11",6.15,false],
    ['Dark Zero',[1,'Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Dark Zero',[1,'Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Dark Zero',[1,'Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Fiery Mothra',[1,'Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Fiery Mothra',[1,'Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Gold Dust Woman',[1,'Wing Zero'],'SD',false,false,false,'Wing','E',"2021-09",8.37,false],
    ['Snow White',[1,'Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Snow White',[1,'Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Snow White',[1,'Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Wing Zero EW KA [MG]',[1,'Wing Zero','GFFMC Wings For MG Wing Zero'],'MG',true,false,false,'Wing','C',"2022-06",10.83,false],
    ['Zero Traditional',[1,'Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Zero Traditional',[1,'Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Zero Traditional',[1,'Wing Zero'],'SD',false,false,false,'Wings','A'],
    ['Zero EW',[1,'Wing Zero'],'MG',false,false,false,'Wings','B'],
    ['Zero EW',[1,'Wing Zero'],'RG',false,false,false,'Wings','A'],
    ['Zero EW',[1,'Wing Zero'],'SD',false,false,false,'Wings','A'],

    //After War (X)
    ['Gaebora',[1,'Airmaster'],'SD',false,false,false,'X','E',"2021-10",5.51,false],
    ['Biohazard',[1,'Double X'],'SD',false,false,false,'X','E',"2022-08",10,false],
    ['Charlie Daniels',[1,'Double X'],'SD',false,false,false,'X','E',"2021-10",4.51,false],
    ['Corona Virus',[1,'Double X'],'MG',false,false,false,'X','E',"2022-09",36.08,false],
    ['Double X [MG]',[1,'Double X'],'MG',true,false,false,'X','E',"2022-09",7.58,false],
    ['Double X [HG]',[1,'Double X'],'HG',true,false,false,'X','E',"2022-08",2,false],
    ['Guapo',[1,'Leopard'],'SD',false,false,false,'X','E',"2021-10",6.2,false],
    ['Iron Maiden',[1,'X Gundam'],'SD',false,false,false,'X','E',"2021-10",4.83,false],

    //Anno Domini (00)
    ['Gundam Umlaut \xD6\xD6',[1,'00 Gundam'],'SD',false,false,false,'00','E',"2021-06",10.83,false],
    ['Metatron',[1,'00 Raiser'],'SD',false,false,false,'00','B'],
    ['PB Trans-Am Clear 00 Raiser [RG]',[1,'00 Gundam Raiser'],'RG',true,true,false,'00','E',"2021-12",12.67,false],
    ['Silver n GOld',[1,'00 Gundam QAN[T]'],'RG',false,false,false,'00','B'],
    ['Thunder QAN[T]',[1,'00 Gundam QAN[T]'],'SD',false,false,false,'00','E',"2021-06",11.68,true],
    ['PB Trans-Am Clear 00 QAN[T] [RG]',[1,'00 Gundam QAN[T]'],'RG',true,true,false,'00','E',"2022-01",8.33,false],
    ['Nena',[1,'Exia'],'SD',false,false,false,'00','D',"2021-12",4.95,false],
    ['PB Trans-Am Clear Exia [RG]',[1,'Exia'],'RG',true,true,false,'00','E',"2021-12",6.58,false],
    ['PB Harute (Final Battle Version) [HG]',[1,'Harute'],'HG',true,true,false,'00','E',"2022-03",5.75,false],
    ['Virtue/Nadlee [MG]',[2,'Virtue','Nadlee'],'MG',true,false,false,'00','E',"2022-02",20.08,true],
    ['PB Zabanya (Final Battle Version) [HG]',[1,'Zabanya'],'HG',true,true,false,'00','E',"2022-03",3,false],

    //Correct Century (Turn A)
    ['John Wayne',[1,'Turn-A'],'SD',false,false,false,'TurnA','E',"2021-09",6.62,false],

    //Cosmic Century (Seed)
    ['Gundam Fluorescent',[1,'Aegis'],'SD',false,false,false,'Seed','E',"2021-06",9.94,false],
    ['Bald Eagle',[1,'Astray Blue Frame'],'MG',false,false,false,'Seed','B'],
    ['Raphael',[1,'Astray Gold Frame'],'SD',false,false,false,'Seed','B'],
    ['Oowashi Akatsuki [HG]',[1,'Akatsuki, Oowsahi'],'HG',true,false,false,'Seed','E',"2021-12",2.67,false],
    ['Rising Sun',[1,'Akatsuki, Oowashi'],'HG',false,false,false,'Seed','E',"2021-11",17.28,false],
    ['King Mars',[1,'Akatsuki, Shiranui'],'HG',false,false,false,'Seed','D',"2022-05",13.67,false],
    ['Archangel',[2,'Archangel','Archangel'],'Ship',false,false,false,'Seed','E',"2021-08",76.63,false],
    ['Dominion',[1,'Archangel'],'Ship',false,false,false,'Seed','E',"2021-09",21.87,false],
    ['Urban Commando',[1,'Buster'],'MG',false,false,false,'Seed','B'],
    ['Calamitous Godzilla',[1,'Calamity'],'FM',false,false,false,'Seed','B'],
    ['Eclipse ???',[1,'Eclipse'],'MG',false,false,false,'Seed','B'],
    ['PB Armageddon',[2.5,'Dagger L','Dagger L','Dagger Expansion Pack'],'HG',false,true,false,'Seed','E',"2022-03",28.5,false],
    ['King Leir',[1,'Dagger L'],'HG',false,false,false,'Seed','E',"2021-06",14.91,false],
    ['Samus',[1,'Dagger L'],'HG',false,false,false,'Seed','B'],
    ['Charizard',[1,'Destiny'],'MG',false,false,false,'Seed','B'],
    ['Charizard X',[1,'Destiny'],'SD',false,false,false,'Seed','E',"2021-10",8.13,false],
    ['Iapetus',[1,'Destiny'],'SD',false,false,false,'Seed','B'],
    ['Thin Blue Line',[2,'Duel Gundam','Duel Gundam Assault Shroud'],'MG',false,false,false,'Seed','B'],
    ['PB Eclipse [MG]',[1.5,'Eclipse','Eclipse Maneuver Striker'],'MG',true,true,false,'Seed','E',"2022-02",17.75,false],
    ['Eternal',[1,'Eternal'],'Ship',false,false,false,'Seed','E',"2021-08",24.1,false],
    ['Anthem',[1,'Freedom'],'MG',false,false,false,'Seed','E',"2022-05",73.16,true],
    ['Freedom [MGSD]',[1,'Freedom'],'MGSD',true,false,false,'Seed','C',"2023-03",8.5,false],
    ['Liberty',[1,'Freedom'],'SD',false,false,false,'Seed','E',"2022-04",18,false],
    ['Old Glory',[1,'Freedom'],'MGSD',false,false,false,'Seed','C',"2023-05",20.83,false],
    ['Billy Blue Jay',[1,'Ginn'],'MG',false,false,false,'Seed','B'],
    ['PB Destiny Impulse (Regenes) [MG]',[1,'Impulse, Destiny'],'Seed','MG',true,true,false,'C',"2023-05",6.5,false],
    ['PB Destiny Impulse [RG]',[1,'Impulse, Destiny'],'RG',true,true,false,'Seed','B'],
    ['Don\'t Tread On Ye',[1,'Justice'],'MG',false,false,false,'Seed','E',"2022-06",51.75,true],
    ['AntiJustice',[1,'Justice'],'SD',false,false,false,'Seed','B'],
    ['Pacifist',[1,'Justice'],'SD',false,false,false,'Seed','E',"2022-04",14.58,false],
    ['PB Clear \u221e Justice [RG]',[1,'Infinite Justice'],'RG',true,true,false,'Seed','E',"2021-11",4.93,false],
    ['Oppression',[1,'Infinite Justice'],'MG',false,false,false,'Seed','B'],
    ['Zoroaster',[1,'Legend'],'FM',false,false,false,'Seed','B'],
    ['PB Meteors',[1,'Meteor','Meteor I','Meteor II','Freedom','Infinite Justice'],'HG',false,true,false,'Seed','B'],
    ['Union Jack',[1,'Providence'],'MG',false,false,false,'Seed','A'],
    ['Raider [FM]',[1,'Raider'],'FM',true,false,false,'Seed','D',"2023-01",9.75,false],
    ['Rodan',[1,'Raider'],'FM',false,false,false,'Seed','A'],
    ['Blue Angels',[3,'Skygrasper','Skygrasper','Skygrasper'],'RG',false,false,false,'Seed','E',"2022-12",22,true],
    ['Skygrasper [PG]',[1,'Skygrasper'],'PG',true,false,false,'Seed','E',"2022-10",6,false],
    ['Skygrasper [RG]',[2,'Skygrasper','Skygrasper','Skygrasper'],'RG',true,false,false,'Seed','E',"2022-09",10,false],
    ['PB Lightning Strike',[2,'Strike','Lightning Striker','Sword Launcher Striker Pack'],'MG',false,true,false,'Seed','B'],
    ['Metal Strike',[1,'Strike'],'SD',false,false,false,'Seed','B'],
    ['Strike Gundam [PG]',[1,'Strike'],'PG',true,false,false,'Seed','C',"2023-05",11.67,true],
    ['PB Perfect Strike [RG]',[1,'Strike, Perfect'],'RG',true,true,false,'Seed','E',"2022-03",12.33,false],
    ['S.A.T.O.',[1,'Strike, Perfect'],'SD',false,false,false,'Seed','D',"2022-01",14.85,false],
    ['PB Strike Daggers [HG]',[2,'Strike Dagger','Strike Dagger','Strike Dagger'],'HG',false,true,false,'Seed','D',"2023-03",20.41,false],
    ['AntiFreedom',[1,'Strike-Freedom'],'SD',false,false,false,'Seed','B'],
    ['Servitude',[1,'Strike-Freedom'],'MG',false,false,false,'Seed','B'],
    ['Strike-Freedom Full Burst [MG]',[1,'Strike-Freedom'],'MG',true,false,false,'Seed','E',"2021-07",18.42,false],
    ['Strike-Freedom MGEX',[1,'Strike-Freedom'],'MG',true,false,true,'Seed','C',"2023-03",14.25,false],
    ['PB Strike-Freedom (Deactive) [RG]',[1,'Strike-Freedom'],'RG',true,true,false,'Seed','D',"2023-03",4.75,false],
    ['Battra',[1,'Strike Noir'],'MG',false,false,false,'Seed','B'],
    ['Strike Noir [SD]',[1,'Strike Noir'],'SD',true,false,false,'Seed','D',"2021-09",2.233,false],
    ['Strike Verde',[1,'Strike Noir'],'SD',false,false,false,'Seed','D',"2021-12",8,false],
    ['Oberon',[1,'Windam'],'HG',false,false,false,'Seed','E',"2022-03",20.25,false],
    ['PB Slash Zaku Phantom (Yzak Jule Custom) [MG]',[1,'Zaku Phantom, Slash'],'MG',true,true,false,'Seed','C',"2023-04",3.33,false],
    
    //Future Century (G Gundam)
    ['PB Burning Gundam [RG]',[2,'Burning Gundam','Burning Gundam Expansion Pass','Burning Gundam LED lights'],'RG',true,true,false,'G','C',"2022-09",15.5,true],
    ['Michael',[1,'Burning Gundam'],'SD',false,false,false,'G','B'],
    ['Furcas',[1,'Dark Army'],'HG',false,false,false,'G','B'],
    ['Malphas',[1,'Dark Army'],'HG',false,false,false,'G','E',"2022-09",5.83,false],
    ['Asmodeus',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Baal',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Balam',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Beleth',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['Belial',[1,'Dark Gundam'],'HG',false,false,false,'G','B'],
    ['Dark Gundam [SD]',[1,'Dark Gundam'],'SD',true,false,false,'G','D',"2022-08",1.75,false],
    ['Paimon',[1,'Dark Gundam'],'SD',false,false,false,'G','B'],
    ['PB Gundam Rose [HG]',[1,'Rose Gundam'],'HG',true,true,false,'G','A'],
    ['Le Roi Soleil',[1,'Rose Gundam'],'HG',false,false,false,'G','E',"2022-08",4.17,false],
    ['Gabriel',[1,'Shining Gundam'],'SD',false,false,false,'G','B'],
    ['Red Baron',[1,'Spiegel, Gundam'],'MG',false,false,false,'G','E',"2021-05",72.07,true],
    ['Red Baron 2',[1,'Spiegel, Gundam'],'MG',false,false,false,'G','A'],

    //Post Disaster (IBO)
    ['Thorn',[1,'Barbatos'],'MG',false,false,false,'IBO','B'],
    ['War Pig',[1,'Barbatos'],'SD',false,false,false,'IBO','E',"2021-12",4.15,false],
    ['Deep Purple',[1,'Barbatos Lupus'],'SD',false,false,false,'IBO','D',"2021-12",4.36,false],
    ['Sealiah',[1,'Barbatos Lupus'],'HG',false,false,false,'IBO','D',"2023-02",12.51,false],
    ['Nephilim',[1,'Barbatos Lupus Rex'],'HG',false,false,false,'IBO','E',"2021-06",23.11,false],
    ['Queen Venus',[1,'Gremory'],'HG',false,false,false,'IBO','B'],
    ['Vine',[1,'Hashmal'],'HG',false,false,false,'IBO','D',"2023-01",19.64,false],
    ['\u00dcbermensch',[1,'Vidar'],'FM',false,false,false,'IBO','B'],

    //Universal Century
    ['DewDrop',[1,'Acguy'],'HG',false,false,false,'UC','C',"2023-05-29",5.17,false],
    ['Fantomas',[1,'Banshee Norn'],'SD',false,false,false,'UC','E',"2021-06",15.02,true],
    ['King Uranus',[1,'Banshee Norn'],'RG',false,false,false,'UC','B'],
    ['Gundam ARRRgent',[1,'Crossbone X-1'],'SD',false,false,false,'UC','E',"2021-06",14.09,false],
    ['Crossbone [RG]',[1,'Crossbone X-1'],'RG',true,false,false,'UC','D',"2022-05",9.08,false],
    ['King Neptune',[1,'Crossbone X-1'],'RG',false,false,false,'UC','B'],
    ['Jackie-O',[1,'Delta Plus'],'SD',false,false,false,'UC','E',"2022-01",11.17,false],
    ['Interstellar',[1,'Dom Test Type'],'HG',false,false,false,'UC','E',"2022-08",14.07,false],
    ['Rhea',[1,'RX-75 Guntank'],'SD',false,false,false,'UC','B'],
    ['Theia',[1,'Kshatriya'],'SD',false,false,false,'UC','D',"2022-12",12.03,false],
    ['Der Kommissar',[1,'Lightning Gundam'],'SD',false,false,false,'UC','E',"2021-12",4.05,false],
    ['Nachtigall',[1,'Nightingale'],'SD',false,false,false,'UC','B'],
    ['Mnemosyne',[1,'Neue Ziuel'],'SD',false,false,false,'UC','B'],
    ['Gundam \u03C0',[1,'Nu Gundam'],'SD',false,false,false,'UC','E',"2021-06",15.66,false],   //pi gundam
    ['PB BB Senshi RX-93ff \u03bd Gundam [SD]',[1,'Nu Gundam, ff'],'SD',true,true,false,'UC','E',"2023-03",2.83,false],
    ['PB RX-93ff \u03bd Gundam [RG]',[1,'Nu Gundam, ff'],'RG',true,true,false,'UC','E',"2023-03",14.5,false],
    ['Milos',[1,'Nu Gundam, Hi'],'SD',false,false,false,'UC','B'],
    ['PB Umbrella Corp',[2,'Nu Gundam, Hi','Hi Nu Expansion Pack','Hi Nu Hyper Bazooka'],'RG',false,true,false,'UC','A'],
    ['Bella Donna',[2,'Phenex','Phenex'],'SD',false,false,false,'UC','E',"2021-12",14.37,false],
    ['Phenex [SD]',[1,'Phenex'],'SD',true,false,false,'UC','E',"2021-10",4.17,false],
    ['Sovereign',[1,'Phenex'],'SD',false,false,false,'UC','E',"2021-11",5.93,false],
    ['Titan',[1,'Phenex'],'SD',false,false,false,'UC','E',"2021-11",6.63,false],
    ['LunchTime Solutions',[1,'RX-78-2'],'RG',false,false,false,'UC','B'],
    ['Starman',[1,'Sazabi'],'SD',false,false,false,'UC','D',"2021-12",5.03,false],
    ['Ziggy',[1,'Sazabi'],'SD',false,false,false,'UC','D',"2022-03",5.75,false],
    ['Dynamo',[1,'Sinanju'],'MG',false,false,false,'UC','B'],
    ['Stardust',[1,'Sinanju'],'SD',false,false,false,'UC','D',"2021-12",4.56,false],
    ['PB Shin Musha [MG]',[1,'Shin Musha Gundam'],'MG',true,true,false,'UC','E',"2022-08",10.58,false],
    ['Blue Monday',[1,'Sisquiede'],'SD',false,false,false,'UC','D',"2022-01",6.76,false],
    ['Rocket Man',[1,'Xi Gundam'],'SD',false,false,false,'UC','D',"2022-01",6.5,false],
    ['MK Ultra',[1,'Zaku II'],'RG',false,false,false,'UC','B'],
    ['Zeong [RG]',[1,'Zeong'],'RG',true,false,false,'UC','E',"2021-08",8.25,false],
    ['Starrider',[1,'Zeta Gundam'],'SD',false,false,false,'UC','E',"2021-09",6.83,false],
    ['Zeta [MG]',[1,'Zeta Gundam'],'MG',true,false,false,'UC','C',"2023-04",8,false],

    //Regild Century (Reconguista)


    //Build Divers (BD)
    ['PB Trans-Am Clear 00 Diver [HG]',[1,'00 Gundam Diver'],'HG',true,true,false,'BD','E',"2022-01",2.75,false],
    ['King Milky Way',[1,'Astray Rebake'],'HG',false,false,false,'BD','B'],
    ['Four Horsemen',[4,'Barbataurus','Barbataurus','Barbataurus','Barbataurus'],'HG',false,false,false,'BD','B'],
    ['King Sol',[1,'Helios'],'HG',false,false,false,'BD','B'],
    ['King Jupiter',[1,'Livelance'],'HG',false,false,false,'BD','B'],
    ['King Pluto',[1,'QAN[T], Command'],'HG',false,false,false,'BD','B'],
    ['Queen Luna',[1,'QAN[T], Shia'],'HG',false,false,false,'BD','B'],
    ['King Earth',[1,'Strike Freedom, Perfect'],'HG',false,false,false,'BD','B'],
    ['Constellation',[1,'Strike Full Package'],'RG',false,false,false,'BD','E',"2021-11",37.52,true],
    ['Moonage Daydream',[1,'Strike Full Package'],'SD',false,false,false,'BD','E',"2021-11",7.27,false],
    ['King Saturn',[1,'Transient'],'HG',false,false,false,'BD','B'],
    ['King Mercury',[1,'Try Age Magnum'],'HG',false,false,false,'BD','B'],
    
    //SD Heroes 
    ['Artemis',[1,'00, Zhao Yun'],'SD',false,false,false,'Heroes','A'],
    ['Oceanus',[1,'Altron, Zhang He'],'SD',false,false,false,'Heroes','D',"2022-04",5.42,false],
    ['Eurybia',[1,'Akatsuki, Zhou Yu'],'SD',false,false,false,'Heroes','B'],
    ['Pallas',[1,'Burning Gundam, Huang Zhang Fei'],'SD',false,false,false,'Heroes','B'],
    ['Perses',[1,'Deathscythe, Xu Huang'],'SD',false,false,false,'Heroes','A'],
    ['Azalea',[1,'Delta, Sasuki'],'SD',false,false,false,'Heroes','E',"2021-10",6.5,false],
    ['Sasuki Delta [SD]',[1,'Delta, Saskui'],'SD',true,false,false,'Heroes','E',"2021-09",1.5,false],
    ['Quetzalcaotl',[1,'Dragon, Dark Grasper'],'SD',false,false,false,'Heroes','B'],
    ['Pharaoh',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Tiamat',[1,'Dragon, Shining Grasper'],'SD',false,false,false,'Heroes','A'],
    ['Cronus',[1,'Epyon, Nobunaga'],'SD',false,false,false,'Heroes','A'],
    ['Helios',[1,'Freedom, Zhuge Liang'],'SD',false,false,false,'Heroes','D',"2022-03",9.25,false],
    ['Themis',[1,'Legend, Caesar'],'SD',false,false,false,'Heroes','A'],
    ['Crius',[1,'Sazabi, Zhang Liao'],'SD',false,false,false,'Heroes','B'],
    ['Clymene',[1,'Strike, Knight'],'SD',false,false,false,'Heroes','A'],
    ['Prometheus',[1,'Strike Noir, Xun Yu'],'SD',false,false,false,'Heroes','B'],
    ['Selene',[1,'Strike-Freedom, Qiongqi'],'SD',false,false,false,'Heroes','B'],
    ['Corona Australis',[1,'Tallgeese, Xiahou Yuan'],'SD',false,false,false,'Heroes','D',"2022-04",7.75,false],
    ['Corona Borealis',[1,'Tallgeese III, Xiahou Dun'],'SD',false,false,false,'Heroes','D',"2022-04",8.67,false],
    ['Coeus',[1,'Unicorn, Long Zun Liu Vei'],'SD',false,false,false,'Heroes','A'],
    ['Bastiat',[1,'Verde Buster, Sergeante'],'SD',false,false,false,'Heroes','E',"2021-10",8.3,false],
    ['Mighty Morphin Power Rangers',[7.5,'Trinity Bike','Verde Buster, Sergeant DX','Verde Buster, Sergeant DX','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member','Verde Buster Team Member'],'SD',false,false,false,'Heroes','E',"2022-12",39.63,false],
    ['Eos',[1,'Wing, Cao Cao'],'SD',false,false,false,'Heroes','A'],
    ['Tethys',[1,'Wing Isei, Cao Cao'],'SD',false,false,false,'Heroes','D',"2022-04",8.67,false],
    ['Hyperion',[1,'Wing Zero, Tian Ba Cao Cao'],'SD',false,false,false,'Heroes','B'],

    //Haro
    ['Haro Blue',[1,'Haropla #05 Control Blue'],'Haro',false,false,false,'','D',"2023-04",2.55,false],
    ['Haro Cloud',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D',"2023-04",3.27,false],
    ['Haro Green',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D',"2023-04",2.75,false],
    ['Haro Lime',[1,'Haropla #12 Basic Green'],'Haro',false,false,false,'','D',"2023-04",3.34,false],
    ['Haro Orange',[1,'Haropla #11 Zakrello'],'Haro',false,false,false,'','D',"2023-04",4.08,false],
    ['Haro Pink',[1,'Haropla #04 Momo Pink'],'Haro',false,false,false,'','D',"2023-04",2.68,false],
    ['Haro Purple',[1,'Haropla #07 Ball Haro'],'Haro',false,false,false,'','D',"2023-04",2.65,false],
    ['Haro Red',[1,'Haropla #02 Diva Red'],'Haro',false,false,false,'','E',"2023-04",2.78,false],
    
    //Car
    ['Hud Air',[1,'Chevy Bel Air, 57'],'Car',false,false,false,'Chevy','E',"2021-05",23.05,true],
    ['Wilbur',[1,'Volkswagen Beetle, 68'],'Car',false,false,false,'Volkswagen','E',"2022-11",27.08,true],
    
    //Pokemon
    ['Obelix',[1,'Bulbasaur'],'Pokemon',false,false,false,'','B'],
    ['Asterix',[1,'Charmander'],'Pokemon',false,false,false,'','D',"2023-03",3.85,false],
    ['Vercingetorix',[1,'Charizard'],'Pokemon',false,false,false,'','D',"2023-03",5.99,false],
    ['Boudica',[1,'Dragonite'],'Pokemon',false,false,false,'','D',"2023-03",3.47,false],
    ['Granfrog',[1,'Greninja'],'Pokemon',false,false,false,'','E',"2021-11",5.68,false],
    ['Cacofonix',[1,'Metagross'],'Pokemon',false,false,false,'','B'],
    ['Getafix',[1,'Rayquaza'],'Pokemon',false,false,false,'','B'],
    
    //Digimon
    ['Heimdall',[1,'Alphamon'],'Digimon',false,false,false,'','A'],
    ['Loki',[1,'Beelzemon'],'Digimon',false,false,false,'','A'],
    ['Thor',[1,'Gallantmon'],'Digimon',false,false,false,'','E',"2022-10",22.5,false],
    ['Jormungandr',[1,'Imperialdramom'],'Digimon',false,false,false,'','A'],
    ['Nidhogg',[1,'Machinedramon'],'Digimon',false,false,false,'','A'],
    ['Fenrir',[1,'Metal Garurumon'],'Digimon',false,false,false,'','E',"2022-07",20.58,false],
    ['Ragnarok',[1,'Omnimon'],'Digimon',false,false,false,'','E',"2022-07",19.65,false],
    ['Revelation',[1,'Omnimon X'],'Digimon',false,false,false,'','A'],
    ['Fafnir',[1,'War Greymon'],'Digimon',false,false,false,'','E',"2022-07",20.7,false],

    //Display
    ['Diurnum',[1,'City Area, 30 Minute Mission'],'Display',false,false,false,'','E',"2022-01",9.67,false],
    ['Battlefield Earth',[2,'Energy Ring Emitter'],'Display',false,false,false,'','A'],
    ['Kataluma',[1,'Hangar Bay'],'Display',false,false,false,'','E',"2022-02",16.96,true],
    ['Stratle',[1,'Maintenance Bay'],'Display',false,false,false,'','E',"2022-02",27.12,true],

    //Ship
    ['Libeccio',[0.2,'Andromeda Black'],'Ship',false,false,false,'StarBlazer','E',"2022-09",4.42,false],
    ['Ostro',[0.2,'Cosmo Falcon'],'Ship',false,false,false,'StarBlazer','E',"2022-07",6.33,false],
    ['Ponente',[1,'Cosmo Zero'],'Ship',false,false,false,'StarBlazer','B'],

    //Transformer
    ['Wilbee',[1,'Bumblebee'],'Transformer',false,false,false,'','E',"2022-11",9.33,false],
    
    //Zoid
    ['Dash Hound',[1,'Shadow Fox'],'Zoid',false,false,false,'','A'],
    ['Shere Khan',[1,'Blade Liger'],'Zoid',false,false,false,'','B'],
    ['Akele',[1,'Konig Wolf Heavy Arms'],'Zoid',false,false,false,'','A'],
    ['Kipling',[1,'Liger Zero X'],'Zoid',false,false,false,'','B']
]

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

//Functions
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

    const readyCountNode = document.getElementById('readyCountID');
    const readyCountTextNode = document.createTextNode(constructedCount);
    readyCountNode.appendChild(readyCountTextNode);
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

    const progCountNode = document.getElementById('progCountID');
    const progCountTextNode = document.createTextNode(inProgressCount);
    progCountNode.appendChild(progCountTextNode);
}

function addTable() {
    const table = document.querySelector(".table2");
    table.style.display = "block";

    let tempArray=0;

    //Post Finished
    for (let i=0;i<pgFinishedArray.length;i++) {
        tempArray=pgFinishedArray[i];
        insertLine(tempArray,'pgF');
    }
    for (let i=0;i<mgFinishedArray.length;i++) {
        tempArray=mgFinishedArray[i]
        insertLine(tempArray,'mgF');
    }
    for (let i=0;i<fmFinishedArray.length;i++) {
        tempArray=fmFinishedArray[i];
        insertLine(tempArray,'fmF');
    }
    for (let i=0;i<rgFinishedArray.length;i++) {
        tempArray=rgFinishedArray[i];
        insertLine(tempArray,'rgF');
    }
    for (let i=0;i<hgFinishedArray.length;i++) {
        tempArray=hgFinishedArray[i];
        insertLine(tempArray,'hgF');
    }
    for (i=0;i<mgsdFinishedArray.length;i++) {
        tempArray=mgsdFinishedArray[i];
        insertLine(tempArray,'mgsdF');
    }
    for (let i=0;i<sdFinishedArray.length;i++) {
        tempArray=sdFinishedArray[i];
        insertLine(tempArray,'sdF');
    }
    for (let i=0;i<pbFinishedArray.length;i++) {
        tempArray=pbFinishedArray[i];
        insertLine(tempArray,'pbF');
    }
    for (let i=0;i<sbFinishedArray.length;i++) {
        tempArray=sbFinishedArray[i];
        insertLine(tempArray,'sbF');
    }
    for (let i=0;i<carFinishedArray.length;i++) {
        tempArray=carFinishedArray[i];
        insertLine(tempArray,'carF');
    }
    for (let i=0;i<digiFinishedArray.length;i++) {
        tempArray=digiFinishedArray[i];
        insertLine(tempArray,'dgF');
    }
    for (let i=0;i<dispFinishedArray.length;i++) {
        tempArray=dispFinishedArray[i];
        insertLine(tempArray,'dspF');
    }
    for (let i=0;i<haroFinishedArray.length;i++) {
        tempArray=haroFinishedArray[i];
        insertLine(tempArray,'haroF');
    }
    for (let i=0;i<pokeFinishedArray.length;i++) {
        tempArray=pokeFinishedArray[i];
        insertLine(tempArray,'pokeF');
    }
    for (let i=0;i<shipFinishedArray.length;i++) {
        tempArray=shipFinishedArray[i];
        insertLine(tempArray,'shipF');
    }
    for (let i=0;i<transFinishedArray.length;i++) {
        tempArray=transFinishedArray[i];
        insertLine(tempArray,'transF');
    }
    for (let i=0;i<zoidFinishedArray.length;i++) {
        tempArray=zoidFinishedArray[i];
        insertLine(tempArray,'zoidF');
    }

    //Post Backlog
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

    //Post Out of Stock
    for (let i=0;i<outOfInventoryArray.length;i++) {
        tempArray=outOfInventoryArray[i];
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

function createBuildAnchor(array) {
    let buildsPageListNode = document.getElementById('buildsLinksID');
    let liItemNode = document.createElement('li');
    let anchorNode = document.createElement('a');
    let textNode = document.createTextNode(array[0]);
    let hrefAttribute = document.createAttribute('href');
    
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
    let tempDate = '';
    for (let i=0;i<projects.length;i++) {
        if (!projects[i][8]) {
            tempDate = new Date("2099-12-25");
        } 
        else {
            tempDate = new Date(projects[i][8]);
        }
        projects[i][8] = tempDate;
    }
} 

function insertLine (text,ID) {
    const listNode = document.getElementById(ID);
    const lineItemNode = document.createElement('li');
    const textNode = document.createTextNode(text);
    listNode.appendChild(lineItemNode);
    lineItemNode.appendChild(textNode);
}

function generateLists() {
    //Alphabetize everything
    projects.sort();
    
    let tempArray = [];
    
    for (let i=0;i<projects.length;i++) {
        tempArray = projects[i];
        if (tempArray[7] === 'A' && tempArray[4]) {
            pbUndeliveredArray.push(tempArray[0]);
        }
        else if (tempArray[7] === 'A') {
            outOfInventoryArray.push(tempArray);
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
    outOfInventoryCount = outOfInventoryArray.length;
    backlogCount = backlogArray.length;
    inProgressCount = inProgressArray.length;
    constructedCount = constructedArray.length;
    postedCount = postedArray.length;
    inProgressArray = sortByDate(inProgressArray);
    constructedArray = sortByDate(constructedArray);
    postedArray = sortByDate(postedArray);

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

    //Finished by Grade
    for (let i=0;i<postedArray.length;i++) {
        tempArray = postedArray[i];
        if (tempArray[4]) {
            pbFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[3]) {
            sbFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='MG') {
            mgFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='FM') {
            fmFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='RG') {
            rgFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='HG') {
            hgFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='MGSD') {
            mgsdFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='SD') {
            sdFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Car') {
            carFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Digimon') {
            digiFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Display') {
            dispFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Haro') {
            haroFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Pokemon') {
            pokeFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Ship') {
            shipFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Transformer') {
            transFinishedArray.push(tempArray[0]);
        }
        else if (tempArray[2]==='Zoid') {
            zoidFinishedArray.push(tempArray[0]);
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
    if (init<1) {
        convertDate();
        generateLists();
        addTable();
        addInProgress();
        addConstructed();
        init++;
    }

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

function populateBuildsPage() {
    convertDate();
    generateLists();

    for (let i=0;i<postedArray.length;i++) {
        createBuildAnchor(postedArray[i]);
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
    let tempArray = [];

    for (let i=0;i<projects.length;i++) {
        tempArray=projects[i];
        if (tempArray[7] === 'C' || tempArray[7] === 'D' || tempArray[7] === 'E') {
            if (tempArray[3] === straight) {
                if (tempArray[2] === grade) {
                    hour = hour + tempArray[9];
                    count = count + tempArray[1][0];
                }
            }
        }
    }

    let averageHr = hour / count;
    return averageHr;
}

function projectCount(grade,straight) {
    let count = 0;
    let tempArray = [];

    for (let i=0;i<projects.length;i++) {
        tempArray=projects[i];
        if (tempArray[7] === 'C' || tempArray[7] === 'D' || tempArray[7] === 'E') {
            if (tempArray[3] === straight) {
                if (tempArray[2] === grade) {
                    count++;
                }
            }
        }
    }

    return count;
}

function projectCountPB(grade) {
    let count = 0;
    let tempArray = [];

    for (let i=0;i<projects.length;i++) {
        tempArray=projects[i];
        if (tempArray[7] === 'C' || tempArray[7] === 'D' || tempArray[7] === 'E') {
            if (tempArray[4]) {
                if (tempArray[2] === grade) {
                    count++;
                }
            }
        }
    }

    return count;
}

function projectHours(grade) {
    let hours = 0;
    let tempArray = [];

    for (let i=0;i<projects.length;i++) {
        tempArray=projects[i];
        if (tempArray[7] === 'C' || tempArray[7] === 'D' || tempArray[7] === 'E') {
            if (tempArray[2] === grade) {
                hours = hours + tempArray[9];
            }
        }
    }

    return hours;
}

function projectRemaining(grade) {
    let count = 0;
    let tempArray = [];

    for (let i=0;i<projects.length;i++) {
        tempArray=projects[i];
        if (tempArray[7] === 'A' || tempArray[7] === 'B') {
            if (tempArray[2] === grade) {
                count++;
            }
        }
    }

    return count;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sortByDate(array) {
    array.sort((a,b) => a[8] - b[8]);
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