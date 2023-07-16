const cellsList = ['mgID','fmID','rgID','hgID','mgsdID','sdID','pbID','strID','digiID','dispID','haroID','pokeID','shipID','zoidID','prefID','backlogID'];

const pgList = ['Strike [PG]'];
const mgList = ['Bald Eagle','Battra','Billy Blue Jay','Charizard','Dark Zero EW','Dynamo','Eclipse','Fiery Mothra','Golden Ghidorah','Napoleon','Oppression','Red Baron 2','Servitude','Snow White','Thin Blue Line','Thorn','Union Jack','Urban Commando','Zero EW Traditional','Zero EW ???'];
const fmList = ['Calmitous Godzilla','Rodan','Ubermensch','Zoroaster'];
const rgList = ['Dark Zero EW [RG]','Fiery Mothra [RG]','Golden Ghidorah [RG]','King Neptune','King Uranus','LunchTime Solutions','MK Ultra','Silver n Gold','Snow White [RG]','Umbrella Corp','Zero EW Traditional [RG]','Zero EW ??? [RG]'];
const hgList = ['Adriel','Ariel','Baal','Balam','Belial','DewDrop','Four Horsemen','Furcas','Gamma Draconis','King Earth','King Jupiter','King Mercury','King Milky Way','King Pluto','King Saturn','King Sol','Queen Luna','Queen Venus','Samus'];
const mgsdList = ['Old Glory']
const sdList = ['AntiFreedom','AntiJustice','Artemis','Asmodeus','Astraeus','Beleth','Clymene','Coeus','Crius','Cronus','Dark Zero EW [SD]','Dei Lucrii','Eos','Eurybia','Fiery Mothra [SD]','Gabriel','Hyperion','Iapetus','Metallic Strike','Metatron','Michael','Milos','Mnemosyne','Nachtigall','Paimon','Pallas','Perses','Pharaoh','Pontus','Prometheus','Quetzalcoatl','Raphael','Rhea','Selene','Snow White [SD]','Tiamat','Themis','Uriel','Zero EW Traditional [SD]','Zero EW ??? [SD]'];
const pokeList = ['Asterix','Boudica','Cacafonix','Getafix','Obelix','Vercingetorix'];
const digiList = ['Heimdall','Jormungandr','Loki','Nidhogg','Revelation'];
const dispList = ['Battlefield Earth'];
const shipList = ['Gregale','Levante','Mistral','Ponente','Sirocco','Tramontane'];
const zoidList = ['Akela','Dash Hound','Kipling','Shere Khan'];
const haroList = ['Haro Blue','Haro Cloud','Haro Green','Haro Lime','Haro Orange','Haro Pink','Haro Purple','Haro Red'];
const strList = ['Epyon [RG]','LFrith [HG]','Raider [FM]','Zeta [MG]'];
const PBList = ['PB Deathscythe Hell [TV-version]','PB Destiny Impulse Regenes [MG]','PB Destiny Impulse [RG]','PB Flugel Sparkel','PB Lightning Strike','PB Meteors'];

const builds = ['Master Grade','Full Mechanics','Real Grade','High Grade','Master Grade SD','Super Deformed','P-Bandai','Straight Build','Digimon','Display','Haropla','Pokemon','Ship','Zoid']
const preferenceList = [];

const buildList = [mgList,fmList,rgList,hgList,mgsdList,sdList,PBList,strList,digiList,dispList,haroList,pokeList,shipList,zoidList];
const newBuildList = [];

const inProgressList = ['Leos','Nena','Deep Purple','Stardust','Starman','Strike Verde','S.A.T.O.','Blue Monday','Rocket Man','Ziggy','Helios','Tethys','Oceanus','Corona Austraulis','Corona Borealis','Phoebe','King Mars','CrossBone [RG]','PB Tallgeese Flugel [MG]','Wing Zero EW KA [MG','God Gundam [RG] + PB Expansion Kit','Theia','Raider [FM]','Vine','Sealiah','Freedom [MGSD]','PB Strike Freedom Deactive [RG]','PB Strike Daggers','Strike Freedom [MGEX]','Vercingetorix','Boudica','Asterix','PB Yzak Jule Phantom Zaku [MG]','Haro Blue','Haro Green','Haro Pink','Haro Purple','Haro Orange','Zeta [MG]','Haro Lime','Haro Cloud','LFrith [HG]','PB Destiny Impulse Regenes [MG]','Old Glory','Strike [PG]','DewDrop','Aerial [HG]','Dash Hound','Samus: Varia Suit'];

const finishedList = ['GuerillaArms','Red Baron','Hud-Air','South Park','Gundam \u03C0','Gundam Umlaut \xD6\xD6','Fluorescent','ARRRRgent Gundam','King Leir','Nephilim','Fantomas','ThunderQAN[T]','Eternal','Archangel','Dominion','Gemini','Gold Dust Woman','Wing Gundam [RG]','Gundam Wild Wings','Moonage Daydream','Constellation','Guapo','Zeong [RG]','Diurnum','Gaebora','Kataluma','Stratle','PB Clear Wing Zero [RG]','Oowashi Akatsuki [HG]','Rising Sun','PB Clear Infinite Justice [RG]','Oberon','Charizard X','Armageddon','PB Trans-Am Clear Exia [RG]','St Dominic','PB Trans-Am Clear 00 Raiser [RG]','Azalea','Liberty','Anthem','Jackie-O','Ostro','PB Trans-Am Clear 00 QAN[T] [RG]','Charlie Daniels','PB Trans-Am Clear 00 Diver [HG]','Granfrog','Bastiat','Pacifist','Don\'\t Tread On Ye','PB Perfect Strike [RG]','Fenrir','Double X [HG]','Fafnir','Double X [MG]','Ragnarok','Biohazard','Corona Virus','PB Zabanya [Final Battle][HG]','Interstellar','PB Harute [Final Battle][HG]','Thor','PB Shin Musha [MG]','Le Roi Soleil','Skygrasper [RG]','Skygrasper [PG]','Blue Angels','Wilbur','Wilbee','Virtue & Nadlee [MG]','Malphas','Eclipe & PB Maneuver Striker [MG]','Libeccio','John Wayne','Mighty Morphin Power Rangers','Azrael','Starrider','Titan','Sovereign','Bella Donna','Iron Maiden','PB Geminass 01 [HG] + PB Geminass Assault Booster & High Mobility Exanpsion Set','Der Kommissar','Major Tom','War Pig','PB BB Senshi RX-93ff \u03BD [SD]','PB RX-93ff \u03BD [RG]','Zero Metal','Isaac','King David','Jericho','Haro Red','Vine','Sealiah','DewDrop','Freedom [MGSD]','Old Glory','Strike Verde'];
const finishedLength = finishedList.length;

const notInInventory = ['Akela','Artemis','Astraeus','Battlefield Earth','Clymene','Coeus','Cronus','Dark Zero EW [RG]','Dark Zero EW [SD]','Dash Hound','PB Deathscythe Hell [TV-version]','Dei Lucrii','Eos','Epyon [RG]','Fiery Mothra [RG]','Fiery Mothra [SD]','Golden Ghidorah [RG]','Gregale','Heimdall','Jormungandr','Levante','Loki','Mistral','Nidhogg','Perses','Pharaoh','Red Baron 2','Revelation','Rodan','Sirocco','Snow White [RG]','Snow White [SD]','Themis','Tiamat','Tramontane','Union Jack','Zero EW Traditional [RG]','Zero EW Traditional [SD]','Zero EW ??? [RG]','Zero EW ??? [SD]'];

const skipList = finishedList.concat(notInInventory).concat(inProgressList);

let outOfStock = 0;
let prefSet=0;

function cleanseLists () {
    let index = 0;
    
    for (let i=0;i<skipList.length;i++) {
        for (let j=0;j<buildList.length;j++) {
            if (buildList[j].includes(skipList[i])) {
                index = buildList[j].indexOf(skipList[i]);
                buildList[j].splice(index,1);
            }
        }
    }

    for (let k=0;k<buildList.length;k++) {
        if (buildList[k] == 0) {
            buildList[k].push('.....Out of Stock.....');
            outOfStock--;
        }
        else {
            preferenceList.push(builds[k]);
            newBuildList.push(buildList[k]);
        }
    }
}

function wipeCells () {
    for (i=0;i<cellsList.length;i++) {
        while (document.getElementById(cellsList[i]).firstChild) {
            document.getElementById(cellsList[i]).removeChild(document.getElementById(cellsList[i]).firstChild);
        }
    }
}

function insertLine (text,ID) {
    const listNode = document.getElementById(ID);
    const lineItemNode = document.createElement('li');
    const textNode = document.createTextNode(text);
    listNode.appendChild(lineItemNode);
    lineItemNode.appendChild(textNode);
}

function addTable () {
    const table = document.querySelector(".table2");
    table.style.display = "block";

    for (fin=0;fin<finishedList.length;fin++) {
        insertLine(finishedList[fin],'FP');
    }
    for (mg=0;mg<mgList.length;mg++) {
        insertLine(mgList[mg],'mgBL');
    }
    for (fm=0;fm<fmList.length;fm++) {
        insertLine(fmList[fm],'fmBL');
    }
    for (rg=0;rg<rgList.length;rg++) {
        insertLine(rgList[rg],'rgBL');
    }
    for (hg=0;hg<hgList.length;hg++) {
        insertLine(hgList[hg],'hgBL');
    }
    for (mgsd=0;mgsd<mgsdList.length;mgsd++) {
        insertLine(mgsdList[mgsd],'mgsdBL');
    }
    for (sd=0;sd<sdList.length;sd++) {
        insertLine(sdList[sd],'sdBL');
    }
    for (pb=0;pb<PBList.length;pb++) {
        insertLine(PBList[pb],'pbBL');
    }
    for (str=0;str<strList.length;str++) {
        insertLine(strList[str],'sbBL');
    }
    for (dg=0;dg<digiList.length;dg++) {
        insertLine(digiList[dg],'dgBL');
    }
    for (dsp=0;dsp<dispList.length;dsp++) {
        insertLine(dispList[dsp],'dspBL');
    }
    for (har=0;har<haroList.length;har++) {
        insertLine(haroList[har],'haroBL');
    }
    for (poc=0;poc<pokeList.length;poc++) {
        insertLine(pokeList[poc],'pokeBL');
    }
    for (shp=0;shp<shipList.length;shp++) {
        insertLine(shipList[shp],'shipBL');
    }
    for (zoid=0;zoid<zoidList.length;zoid++) {
        insertLine(zoidList[zoid],'zoidBL');
    }
    for (not=0;not<notInInventory.length;not++) {
        insertLine(notInInventory[not],'OOS');
    }
    
    const finishNode = document.getElementById('FP').parentNode;
    const totalFinishedNode = document.createTextNode(finishedLength); 
    finishNode.appendChild(totalFinishedNode); 

}

function addInProgress () {
    const table = document.querySelector(".table3");
    table.style.display = "block";
    
    const progressOne = [];
    const progressTwo = [];
    const progressThree = [];
    let loop = 1;

    for (progress=0;progress<inProgressList.length;progress++) {
        if (loop === 1) {
            progressOne.push(inProgressList[progress]);
            loop++;
        }
        else if (loop === 2) {
            progressTwo.push(inProgressList[progress]);
            loop++;
        }
        else {
            progressThree.push(inProgressList[progress]);
            loop = 1;
        }
    }

    for (p1=0;p1<progressOne.length;p1++) {
        insertLine(progressOne[p1],'progOne');
    }
    for (p2=0;p2<progressTwo.length;p2++) {
        insertLine(progressTwo[p2],'progTwo');
    }
    for (p3=0;p3<progressThree.length;p3++) {
        insertLine(progressThree[p3],'progThree');
    }
}

function ascentOfMan () {
    if (prefSet===0) {
        cleanseLists();
    }
    
    const gradeClass = document.getElementById('gradeClass');
    const buildClass = document.getElementById('buildClass');
    const backlogClass = document.getElementById('backlogID');
    gradeClass.removeChild(gradeClass.firstChild);
    buildClass.removeChild(buildClass.firstChild);
    backlogClass.removeChild(backlogClass.firstChild);
    
    let gradeRandom = Math.floor(Math.random()*preferenceList.length);
    const gradeNode = document.createTextNode(preferenceList[gradeRandom]);
    gradeClass.appendChild(gradeNode);

    const retreivedList = newBuildList[gradeRandom];

    const buildRandom = Math.floor(Math.random()*retreivedList.length);
    const buildNode = document.createTextNode(retreivedList[buildRandom]);
    buildClass.appendChild(buildNode);

    let backlog = mgList.length+fmList.length+rgList.length+hgList.length+mgsdList.length+sdList.length+PBList.length+strList.length+digiList.length+dispList.length+haroList.length+pokeList.length+shipList.length+zoidList.length+outOfStock;
    let backlogText = backlog + ' projects left to build.';

    const backlogCell = document.createTextNode(backlogText);
    backlogClass.appendChild(backlogCell);

    if (prefSet===0) {
        addTable();
        addInProgress();
    }

    prefSet=1;
}

function randomPost () {
    const decisionPost = document.getElementById('toPost');
    decisionPost.removeChild(decisionPost.firstChild);
    
    let finishedCount = inProgressList.length;

    if (finishedCount>30) {
        finishedCount=finishedCount-10;
    }
    else if (finishedCount>20) {
        finishedCount=finishedCount-5;
    }
    
    let decisionNumber = Math.floor(Math.random()*finishedCount)+1;
    const decisionNode = document.createTextNode(inProgressList[decisionNumber]);
    decisionPost.appendChild(decisionNode);
}

/*
Things still to do:
- Separate Finished projects into separate lists by category (i.e. mgFinished, hgFinished, hgFinished)
- And then concat all of them into finishedList
- Segregate straight builds into their own section; make very last row of second table
- Display in progess projects; make very first row, possible spanning all three columns
- add in progress projects to skip list 
- figure out something to do with P-Bandais
- create car category
- create transformer category
- create categories for MGEX and Perfect grade
- omit MGEX, Perfect Grade, and P-Bandai from straight build category, whether straight or painted they should be treated as part of main series and not segregated
- better format CSS
- Find way to place lists into their own standalone document that can be called and accessed by each individual js file
- At some point start creating the infrastructure for project spinwheel
- long term move lists to server where they can be maintained and updated via server commands
*/
