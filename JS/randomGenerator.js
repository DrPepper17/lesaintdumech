const cellsList = ['mgID','fmID','rgID','hgID','mgsdID','sdID','pbID','strID','digiID','dispID','haroID','pokeID','shipID','zoidID','prefID','backlogID'];

const mgList = ['Bald Eagle','Battra','Billy Blue Jay','Charizard','Dark Zero EW','Dynamo','Eclipse','Fiery Mothra','Golden Ghidorah','Napoleon','Oppression','Red Baron 2','Servitude','Snow White','Thin Blue Line','Thorn','Union Jack','Urban Commando','Zero EW Traditional','Zero EW ???'];
const fmList = ['Calmitous Godzilla','Rodan','Ubermensch','Zoroaster'];
const rgList = ['Dark Zero EW [RG]','Fiery Mothra [RG]','Golden Ghidorah [RG]','King Neptune','King Uranus','LunchTime Solutions','MK Ultra','Silver n Gold','Snow White [RG]','Umbrella Corp','Zero EW Traditional [RG]','Zero EW ??? [RG]'];
const hgList = ['Adriel','Ariel','Baal','Balam','Belial','DewDrop','Four Horsemen','Furcas','Gamma Draconis','King Earth','King Jupiter','King Mercury','King Milky Way','King Pluto','King Saturn','King Sol','Queen Luna','Queen Venus','Samus'];
const mgsdList = ['Old Glory']
const sdList = ['AntiFreedom','AntiJustice','Artemis','Asmodeus','Astraeus','Beleth','Clymene','Coeus','Crius','Cronus','Dark Zero EW [SD]','Dei Lucrii','Eos','Eurybia','Fiery Mothra [SD]','Gabriel','Hyperion','Iapetus','Metallic Strike','Metatron','Michael','Milos','Mnemosyne','Nachtigall','Paimon','Pallas','Perses','Pharaoh','Pontus','Prometheus','Quetzalcoatl','Raphael','Rhea','Selene','Snow White [SD]','Tiamat','Themis','Uriel','Zero EW Traditional [SD]','Zero EW ??? [SD]'];
const pokeList = ['Cacafonix','Getafix','Obelix',];
const digiList = ['Heimdall','Jormungandr','Loki','Nidhogg','Revelation'];
const dispList = ['Battlefield Earth'];
const shipList = ['Gregale','Levante','Mistral','Ponente','Sirocco','Tramontane'];
const zoidList = ['Akela','Dash Hound','Kipling','Shere Khan'];
const haroList = ['Haro Blue','Haro Cloud','Haro Green','Haro Lime','Haro Orange','Haro Pink','Haro Purple','Haro Red'];
const strList = ['Epyon [RG]','LFrith [HG]','Raider [FM]','Strike [PG]','Zeta [MG]'];
const PBList = ['Deathscythe Hell [TV-version]','Destiny Impulse Regenes [MG]','PB Destiny Impulse [RG]','Flugel Sparkel','Lightning Strike','Meteors'];

const builds = ['Master Grade','Full Mechanics','Real Grade','High Grade','Master Grade SD','Super Deformed','P-Bandai','Straight Build','Digimon','Display','Haropla','Pokemon','Ship','Zoid']
const preferenceList = [];

const buildList = [mgList,fmList,rgList,hgList,mgsdList,sdList,PBList,strList,digiList,dispList,haroList,pokeList,shipList,zoidList];
const newBuildList = [];

const finishedList = ['GuerillaArms','Red Baron','Hud-Air','South Park','Gundam \u03C0','Gundam Umlaut \xD6\xD6','Fluorescent','ARRRRgent Gundam','King Leir','Nephilim','Fantomas','ThunderQAN[T]','Eternal','Archangel','Dominion','Gemini','Gold Dust Woman','Wing Gundam [RG]','Gundam Wild Wings','Moonage Daydream','Constellation','Guapo','Zeong [RG]','Diurnum','Gaebora','Kataluma','Stratle','PB Clear Wing Zero [RG]','Oowashi Akatsuki [HG]','Rising Sun','PB Clear Infinite Justice [RG]','Oberon','Charizard X','Armageddon','PB Trans-Am Clear Exia [RG]','St Dominic','PB Trans-Am Clear 00 Raiser [RG]','Azalea','Liberty','Anthem','Jackie-O','Ostro','PB Trans-Am Clear 00 QAN[T] [RG]','Charlie Daniels','PB Trans-Am Clear 00 Diver [HG]','Granfrog','Bastiat','Pacifist','Don\'\t Tread On Ye','PB Perfect Strike [RG]','Fenrir','Double X [HG]','Fafnir','Double X [MG]','Ragnarok','Biohazard','Corona Virus','PB Zabanya [Final Battle][HG]','Interstellar','PB Harute [Final Battle][HG]','Thor','PB Shin Musha [MG]','Le Roi Soleil','Skygrasper [RG]','Skygrasper [PG]','Blue Angels','Wilbur','Wilbee','Virtue & Nadlee [MG]','Malphas','Eclipe & PB Maneuver Striker [MG]','Libeccio','John Wayne','Mighty Morphin Power Rangers','Azrael','Starrider','Titan','Sovereign','Bella Donna','Iron Maiden','PB Geminass 01 [HG] + PB Geminass Assault Booster & High Mobility Exanpsion Set','Der Kommissar','Major Tom','War Pig','PB BB Senshi RX-93ff \u03BD [SD]','PB RX-93ff \u03BD [RG]','Zero Metal','Isaac'];

const notInInventory = ['Akela','Artemis','Astraeus','Battlefield Earth','Cacafonix','Clymene','Coeus','Cronus','Dark Zero EW [RG]','Dark Zero EW [SD]','Dash Hound','PB Deathscythe Hell [TV-version]','Dei Lucrii','PB Destiny Impulse [RG]','Eos','Epyon [RG]','Fiery Mothra [RG]','Fiery Mothra [SD]','Getafix','Golden Ghidorah [RG]','Gregale','Heimdall','Jormungandr','Levante','Loki','Mistral','Nidhogg','Obelix','Perses','Pharaoh','Red Baron 2','Revelation','Rodan','Sirocco','Snow White [RG]','Snow White [SD]','Strike [PG]','Themis','Tiamat','Tramontane','Umbrella Corp','Union Jack','Zero EW Traditional [RG]','Zero EW Traditional [SD]','Zero EW ??? [RG]','Zero EW ??? [SD]'];

const skipList = finishedList.concat(notInInventory);

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

function insertRow (text,ID) {
    const tableNode = document.getElementById(ID);
    const trNode = document.createElement('tr');
    const thNode = document.createElement('th');
    const textNode = document.createTextNode(text);
    tableNode.appendChild(trNode);
    trNode.appendChild(thNode);
    thNode.appendChild(textNode);
}

function populateTables() {
    for (fin=0;fin<finishedList.length;fin++) {
        insertRow(finishedList[fin],'FP');
    }
    for (mg=0;mg<mgList.length;mg++) {
        insertRow(mgList[mg],'mgBL');
    }
    for (fm=0;fm<fmList.length;fm++) {
        insertRow(fmList[fm],'fmBL');
    }
    for (rg=0;rg<rgList.length;rg++) {
        insertRow(rgList[rg],'rgBL');
    }
    for (hg=0;hg<hgList.length;hg++) {
        insertRow(hgList[hg],'hgBL');
    }
    for (mgsd=0;mgsd<mgsdList.length;mgsd++) {
        insertRow(mgsdList[mgsd],'mgsdBL');
    }
    for (sd=0;sd<sdList.length;sd++) {
        insertRow(sdList[sd],'sdBL');
    }
    for (pb=0;pb<PBList.length;pb++) {
        insertRow(PBList[pb],'pbBL');
    }
    for (str=0;str<strList.length;str++) {
        insertRow(strList[str],'sbBL');
    }
    for (dg=0;dg<digiList.length;dg++) {
        insertRow(digiList[dg],'dgBL');
    }
    for (dsp=0;dsp<dispList.length;dsp++) {
        insertRow(dispList[dsp],'dspBL');
    }
    for (har=0;har<haroList.length;har++) {
        insertRow(haroList[har],'haroBL');
    }
    for (poc=0;poc<pokeList.length;poc++) {
        insertRow(pokeList[poc],'pokeBL');
    }
    for (shp=0;shp<shipList.length;shp++) {
        insertRow(shipList[shp],'shipBL');
    }
    for (zoid=0;zoid<zoidList.length;zoid++) {
        insertRow(zoidList[zoid],'zoidBL');
    }
    for (not=0;not<notInInventory.length;not++) {
        insertRow(notInInventory[not],'OOS');
    }
}

function naturalSelection () {
    wipeCells();
    if (prefSet===0) {
        cleanseLists();
    }

    let mgRandom = mgList[Math.floor(Math.random()*mgList.length)];
    let fmRandom = fmList[Math.floor(Math.random()*fmList.length)];
    let rgRandom = rgList[Math.floor(Math.random()*rgList.length)];
    let hgRandom = hgList[Math.floor(Math.random()*hgList.length)];
    let mgsdRandom = mgsdList[Math.floor(Math.random()*mgsdList.length)];
    let sdRandom = sdList[Math.floor(Math.random()*sdList.length)];
    let pbRandom = PBList[Math.floor(Math.random()*PBList.length)];
    let strRandom = strList[Math.floor(Math.random()*strList.length)];
    let digiRandom = digiList[Math.floor(Math.random()*digiList.length)];
    let dispRandom = dispList[Math.floor(Math.random()*dispList.length)];
    let haroRandom = haroList[Math.floor(Math.random()*haroList.length)];
    let pokeRandom = pokeList[Math.floor(Math.random()*pokeList.length)];
    let shipRandom = shipList[Math.floor(Math.random()*shipList.length)];
    let zoidRandom = zoidList[Math.floor(Math.random()*zoidList.length)];
    let preferenceRandom = preferenceList[Math.floor(Math.random()*preferenceList.length)];

    let backlog = mgList.length+fmList.length+rgList.length+hgList.length+mgsdList.length+sdList.length+PBList.length+strList.length+digiList.length+dispList.length+haroList.length+pokeList.length+shipList.length+zoidList.length+outOfStock;
    let backlogText = backlog + ' projects left to choose.';
    
    const mgCell = document.createTextNode(mgRandom);
    const fmCell = document.createTextNode(fmRandom);
    const rgCell = document.createTextNode(rgRandom);
    const hgCell = document.createTextNode(hgRandom);
    const mgsdCell = document.createTextNode(mgsdRandom);
    const sdCell = document.createTextNode(sdRandom);
    const pbCell = document.createTextNode(pbRandom);
    const strCell = document.createTextNode(strRandom);
    const digiCell = document.createTextNode(digiRandom);
    const dispCell = document.createTextNode(dispRandom);
    const haroCell = document.createTextNode(haroRandom);
    const pokeCell = document.createTextNode(pokeRandom);
    const shipCell = document.createTextNode(shipRandom);
    const zoidCell = document.createTextNode(zoidRandom);
    const preferenceCell = document.createTextNode(preferenceRandom);
    const backlogCell = document.createTextNode(backlogText);

    const nodeList = [mgCell,fmCell,rgCell,hgCell,mgsdCell,sdCell,pbCell,strCell,digiCell,dispCell,haroCell,pokeCell,shipCell,zoidCell,preferenceCell,backlogCell];

    for (i=0;i<nodeList.length;i++) {
        document.getElementById(cellsList[i]).appendChild(nodeList[i]);
    }

    for (c=0;c<preferenceList;c++) {
        preferenceList.pop();
    }

    if (prefSet===0) {
        populateTables();
    }

    prefSet=1;
}
