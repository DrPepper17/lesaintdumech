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
        10. 
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
    19. Armaments (Array)
    20. Optional Equipment (array)
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
    [1],
    [2],
    [3],
    [4],
    [5],
    [6,
        0,
        false,
        'Come on down to South Park and meet some friends of mine !!!',
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
    ['South Park',
        [6,'Tallgeese','Epyon','Heavy Arms','Shenlong','Deathscythe','Sandrock'],
        'SD',
        false,
        false,
        false,
        'Wing',
        'E',
        '2021-06-05',
        54.42,
        true,
        'Builds/uniqueTemplates/SouthPark.html',
        false,
        '2021-06-21',
        models[6],
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
        false,
        false,
        false,
        true,
        true,
        false
    ]
];

//Functions
function projectPage(string) {
    for (let i=0;i<projects.length;i++) {
        if (projects[i][0] === string) {
            projectArray = projects[i];
            break;
        }
    }

    if (projectArray[21]) {
        const projectAvailableHD = document.querySelector('.projectAvailableHD');
        projectAvailableHD.style.display = 'block';
    }

    modelArray = projectArray[14];
    let titleNode = document.getElementById('title');
    let titleNodeText = document.createTextNode(projectArray[0]+' \u269C');
    titleNode.appendChild(titleNodeText);

    let jumboNode = document.getElementById('jumboNode');
    let jumboNodeText = document.createTextNode(projectArray[0]);
    jumboNode.appendChild(jumboNodeText);

    let breadcrumbNode = document.getElementById('breadcrumbNode');
    let breadcrumbText = document.createTextNode(projectArray[0]);
    breadcrumbNode.appendChild(breadcrumbText);

    let projectTitleNode = document.getElementById('projectTitle');
    let projectTitleNode_Mobile = document.getElementById('projectTitle_Mobile');
    let projectTitleText = document.createTextNode(projectArray[0]);
    projectTitleNode.appendChild(projectTitleText);

    
    let projectTitleText_Mobile = document.createTextNode(projectArray[0]);
    projectTitleNode_Mobile.appendChild(projectTitleText_Mobile);

    let modelNameNode = document.getElementById('modelFullName');
    let modelNameText = document.createTextNode(modelArray[3]);
    modelNameNode.appendChild(modelNameText);

    insertPhoto(modelArray[26],'modelPhoto',false);
    insertPhoto(projectArray[16],'profilePhoto',false);

    let projectNameNode = document.getElementById('projectName');
    let projectNameText = document.createTextNode(projectArray[0]);
    projectNameNode.appendChild(projectNameText);

    let modelName_ShortNode = document.getElementById('modelName_Short');
    let modelName_ShortText = document.createTextNode(modelArray[3]);
    modelName_ShortNode.appendChild(modelName_ShortText);
    
    if (projectArray[1].length>2) {
        const otherModelsClass = document.querySelector('.otherModelsClass');
        otherModelsClass.style.display = 'block';
        
        let otherModelsNode = document.getElementById('otherModels');
        let otherModelText = document.createTextNode(projectArray[1][2]);
        otherModelsNode.appendChild(otherModelText);
        if (projectArray[1].length>3) {
            for (let i=3;i<projectArray[1].length;i++) {
                let thirdModelText = document.createTextNode(', '+projectArray[1][i]);
                otherModelsNode.appendChild(thirdModelText);
            }
        }
    }        

    let startStamp = new Date(projectArray[8]);
    let startMonth = convertMonth(startStamp.getMonth());
    let startYear = startStamp.getFullYear();
    
    let postStamp = new Date(projectArray[13]);
    let postMonth = convertMonth(postStamp.getMonth());
    let postDay = postStamp.getDate();
    let postYear = postStamp.getFullYear();

    let dateStartNode = document.getElementById('dateStart');
    let dateStartText = document.createTextNode(startMonth+' '+startYear);
    dateStartNode.appendChild(dateStartText);

    let datePostNode = document.getElementById('datePost');
    let datePostText = document.createTextNode(postMonth+' '+postDay+' '+postYear);
    datePostNode.appendChild(datePostText);

    let dateStartNode_Mobile = document.getElementById('dateStart_Mobile');
    let dateStartText_Mobile = document.createTextNode(startMonth+' '+startYear);
    dateStartNode_Mobile.appendChild(dateStartText_Mobile);

    let datePostNode_Mobile = document.getElementById('datePost_Mobile');
    let datePostText_Mobile = document.createTextNode(postMonth+' '+postDay+' '+postYear);
    datePostNode_Mobile.appendChild(datePostText_Mobile);
       
    let tHoursNode = document.getElementById('tHours');
    let tHoursText = document.createTextNode(projectArray[9]+' hrs');
    tHoursNode.appendChild(tHoursText);

    let ledQ = 'No';
    if (projectArray[10]) {
        ledQ = 'Yes';
    }

    let LEDS_Node = document.getElementById('LEDS');
    let LEDS_Text = document.createTextNode(ledQ);
    LEDS_Node.appendChild(LEDS_Text);

    let descripNode = document.getElementById('descrip');
    let descripText = document.createTextNode(projectArray[17]);
    descripNode.appendChild(descripText);

    let descripMobileNode = document.getElementById('descripMobile');
    let descripMobileText = document.createTextNode(projectArray[17]);
    descripMobileNode.appendChild(descripMobileText);

    if (projectArray[12]) {
        const gPaintClass = document.querySelector('.gPaint');
        gPaintClass.style.display = 'block';

        let paintUL = document.getElementById('paints');
        for (let i=0;i<projectArray[12].length;i++) {
            let liNode = document.createElement('li');
            let liNodeClass = document.createAttribute('class');
            liNodeClass.value = 'font-weight-normal list-unstyled';
            liNode.setAttributeNode(liNodeClass);
            let paintColor = document.createTextNode(projectArray[12][i]);
            liNode.appendChild(paintColor);
            paintUL.appendChild(liNode);
        }
    }

    if (projectArray[20]) {
        const affiliates = document.querySelector('.affiliates');
        affiliates.style.display = 'block';

        let affilatesArray = [];
        for (let i=0;i<projectArray[20].length;i++) {
            for (let j=0;j<projects.length;j++) {
                if (projectArray[20][i] === projects[j][0]) {
                    affilatesArray.push(projects[j]);
                }
            }
        }

        projectLinks(affilatesArray,'gAffiliates');
    }


    let otherArray = [];
    for (let i=0;i<projects.length;i++) {
        if ((projectArray[14] === projects[i][14]) && (!projectArray[0] === projects[i][0]) && projects[i][22]===true) {
            otherArray.push(projects[i])
        }
    }

    if (otherArray.length>0) {
        const otherBuilds = document.querySelector('affiliates');
        otherBuilds.style.display = 'block';

        projectLinks(otherArray,'otherBuilds');
    }

    if (projectArray[19]) {
        const outsideLinks = document.querySelector('.links');
        outsideLinks.style.display = 'block';

        let destinationNode = document.getElementById('outsideLinks')
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

    generateModalFrame();
    for (let i=0;i<projectArray[15].length;i++) {
        insertPhotoColumn(projectArray[15][i],'photoGallery');
    }
    for (let i=0;i<projectArray[15].length;i++) {
        photoModalPopup(i);
    }  

    if (modelArray[23]) {
        popSDWHero();
    }
    else if (modelArray[1] === 1) {
        popGundamPage();
    }
    else if (modelArray[1] === 2) {
        popShipGundam();
    }
    else if (modelArray[1] === 3) {
        popShipOther();
    }
    else if (modelArray[1] === 4) {
        popAuto();
    }
    else if (modelArray[1] === 5) {
        popDisplay();
    }
    else if (modelArray[1] === 6) {
        popDigimon();
    }
    else if (modelArray[1] === 7) {
        popPokemon();
    }
    else if (modelArray[1] === 8) {
        popTransformer();
    }
    else if (modelArray[1] === 9) {
        popZoid();
    } 
    else if (modelArray[1] === 10) {
        popHaro();
    }

    if (projectArray[18]) {
        const ownerClass = document.querySelector('.owner');
        ownerClass.style.display = 'block';

        let ownerNode = document.getElementById('cOwner');
        let ownerText = document.createTextNode(projectArray[18]);
        ownerNode.appendChild(ownerText);
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

function insertPhoto (array,id,dots) {
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
    imgNode.setAttributeNode(srcAttribute);
    imgNode.setAttributeNode(altAttribute);
    imgNode.setAttributeNode(imgClassAttribute);

    let locationNode = document.getElementById(id);
    locationNode.appendChild(imgNode);
}

function insertPhotoColumn (array,id) {
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

function popGundamPage () {
    const gundamModelClass1 = document.querySelector('.gundamModel1');
    gundamModelClass1.style.display = 'block';

    const gundamModelClass2 = document.querySelector('.gundamModel2');
    gundamModelClass2.style.display = 'block';
    
    if (projectArray[4]) {
        const pBandaiClass = document.querySelector('.pBandaiClass');
        pBandaiClass.style.display = 'block';
        
        let pBandaiNode = document.getElementById('pBandai');
        let pBandaiSpan = document.createElement('span');
        let pBandaiSpanClass = document.createAttribute('class');
        pBandaiSpanClass.value = 'text-danger font-weight-bold';
        pBandaiSpan.setAttributeNode(pBandaiSpanClass);
        let pBandaiText = document.createTextNode('P-BANDAI Edition')
        let straightBuildText = document.createTextNode(' Straight');
        let buildText = document.createTextNode(' Build');
        pBandaiSpan.appendChild(pBandaiText);
        if (projectArray[3]) {
            pBandaiSpan.appendChild(straightBuildText);
        }
        pBandaiSpan.appendChild(buildText);
        pBandaiNode.appendChild(pBandaiSpan);
    }

    let gGradeNode = document.getElementById('gGrade')
    if (projectArray[5]) {
        let gGradeSpan = document.createElement('span');
        let gGradeSpanAttr = document.createAttribute('class');
        gGradeSpanAttr.value = 'text-danger font-weight-bold';
        gGradeSpan.setAttributeNode(gGradeSpanAttr);
        let MGEXtext = document.createTextNode('Master Grade Extreme (MGEX)');
        gGradeSpan.appendChild(MGEXtext);
        gGradeNode.appendChild(gGradeSpan);
    }
    else {
        let gGradeText = document.createTextNode(gradeEdifier(projectArray));
        gGradeNode.appendChild(gGradeText);
    }
    
    let gmodelNameFullNode = document.getElementById('gmodelNameFull');
    let gmodelNameFullText = document.createTextNode(modelArray[2]);
    gmodelNameFullNode.appendChild(gmodelNameFullText);

    if (modelArray[6]) {
        const EWclass = document.querySelector('.EWclass');
        EWclass.style.display = 'block';

        let EWNode = document.getElementById('EW');
        let EWSpan = document.createElement('span');
        let EWClass = document.createAttribute('class');
        EWClass.value = 'text-danger';
        EWSpan.setAttributeNode(EWClass);
        let EWText = document.createTextNode('EW Version');
        EWNode.appendChild(EWSpan);
        EWSpan.appendChild(EWText);
    }

    let serialNode = document.getElementById('gserial');
    let serialText = document.createTextNode(modelArray[4]);
    serialNode.appendChild(serialText);

    if (modelArray[25]) {
        const mobileArmorClass = document.querySelector('.mobileArmorClass');
        mobileArmorClass.style.display = 'block'; 

        let mobileArmorNode = document.getElementById('mobileArmor');
        let mobileArmorText = document.createTextNode('Mobile Armr');
        mobileArmorNode.appendChild(mobileArmorText);
    }
 
    if (modelArray[24]) {
        const altNameClass = document.querySelector('.altNameClass');
        altNameClass.style.display = 'block';

        let altNameNode = document.getElementById('gAltName');
        let altNameText = document.createTextNode(modelArray[24]);
        altNameNode.appendChild(altNameText);
    }

    let pilotNode = document.getElementById('gpilot');
    let pilotText = document.createTextNode(modelArray[11]);
    pilotNode.appendChild(pilotText);

    if (modelArray[12]) {
        const g2pilot = document.querySelector('.g2pilot');
        g2pilot.style.display = 'block';

        let g2ndPilotsNode = document.getElementById('g2ndPilots');
        let g2ndPilotsText = document.createTextNode(modelArray[12][0]);
        g2ndPilotsNode.appendChild(g2ndPilotsText);

        if (modelArray[12].length>1) {
            for (let i=1;i<modelArray[12].length;i++) {
                let otherPilotsText = document.createTextNode(', '+modelArray[12][i]);
                g2ndPilotsNode.appendChild(otherPilotsText);
            }
        }
    }

    let gSeriesNode = document.getElementById('gSeries');
    let gSeriesText = document.createTextNode(modelArray[5]);
    gSeriesNode.appendChild(gSeriesText);

    let gEraNode = document.getElementById('gEra');
    let gEraText = document.createTextNode(modelArray[9]);
    gEraNode.appendChild(gEraText);

    let gCreateDateNode = document.getElementById('gCreateDate');
    let gCreateDateText = document.createTextNode(modelArray[10][1]);
    gCreateDateNode.appendChild(gCreateDateText);

    let fYear = modelArray[10][0];
    let lYear = modelArray[10][2];
    let timespan = '';
    if (fYear===lYear) {
        timespan = 1;
    } else if (!lYear != 'Present') {
        timespan = lYear-fYear;
    }

    let gTimelineNode = document.getElementById('gTimeline');
    let gTimelineText = document.createTextNode(fYear+' - '+lYear);
    gTimelineNode.appendChild(gTimelineText);

    if (lYear != 'Present') {
        let yearsTimelineText = document.createTextNode('; '+timespan+' year(s)');
        gTimelineNode.appendChild(yearsTimelineText);
    }

    let gManufacNode = document.getElementById('gManufac');
    let gManufacText = document.createTextNode(modelArray[13]);
    gManufacNode.appendChild(gManufacText);

    let gManufacNodeMobile = document.getElementById('gManufacMobile');
    let gManufacTextMobile = document.createTextNode(modelArray[13]);
    gManufacNodeMobile.appendChild(gManufacTextMobile);

    let gAffiliateNode = document.getElementById('gAffiliate');
    let gAffiliateNodeMobile = document.getElementById('gAffiliateMobile');
    for (let i=0;i<modelArray[14].length;i++) {
        let gAffiliate_LI = document.createElement('li');
        let gAffiliate_LIMobile = document.createElement('li');
        let gAffiliate_LIClass = document.createAttribute('Class');
        gAffiliate_LIClass.value = 'font-weight-normal';
        gAffiliate_LI.setAttributeNode(gAffiliate_LIClass);
        let gAffiliate_LIMobileClass = document.createAttribute('Class');
        gAffiliate_LIMobileClass.value = 'font-weight-normal';
        gAffiliate_LIMobile.setAttributeNode(gAffiliate_LIMobileClass);
        let gAffilateText = document.createTextNode(modelArray[14][i]);
        let gAffilateTextMobile = document.createTextNode(modelArray[14][i]);
        gAffiliateNode.appendChild(gAffiliate_LI);
        gAffiliate_LI.appendChild(gAffilateText);
        gAffiliateNodeMobile.appendChild(gAffiliate_LIMobile);
        gAffiliate_LIMobile.appendChild(gAffilateTextMobile);
    }
    
    if (modelArray[7]) {
        const gFromClass = document.querySelector('.gFromClass');
        gFromClass.style.display = 'block';

        const gFromClass_Mobile = document.querySelector('.gFromClass_Mobile');
        gFromClass_Mobile.style.display = 'block';

        let gFromNode = document.getElementById('gFrom');
        let gFromText = document.createTextNode(modelArray[7]);
        gFromNode.appendChild(gFromText);

        let gFromNodeMobile = document.getElementById('gFromMobile');
        let gFromTextMobile = document.createTextNode(modelArray[7]);
        gFromNodeMobile.appendChild(gFromTextMobile);
    }

    if (modelArray[8]) {
        const gToClass = document.querySelector('.gToClass');
        gToClass.style.display = 'block';
        const gToClass_Mobile = document.querySelector('.gToClass_Mobile');
        gToClass_Mobile.style.display = 'block';

        let gToNode = document.getElementById('gTo');
        let gToText = document.createTextNode(modelArray[8]);
        gToNode.appendChild(gToText);

        let gToNodeMobile = document.getElementById('gToMobile');
        let gToTextMobile = document.createTextNode(modelArray[8]);
        gToNodeMobile.appendChild(gToTextMobile);
    }

    let gHeightNode = document.getElementById('gHeight');
    let gHeightText = document.createTextNode(modelArray[15][1]);
    gHeightNode.appendChild(gHeightText);

    let gWeightNode = document.getElementById('gWeight');
    let gWeightText = document.createTextNode(modelArray[16][1]);
    gWeightNode.appendChild(gWeightText);

    let gMaterialNode = document.getElementById('gMaterial');
    let gMaterialText = document.createTextNode(modelArray[17]);
    gMaterialNode.appendChild(gMaterialText);

    let gPowerNode = document.getElementById('gPower');
    let gPowerText = document.createTextNode(modelArray[18]);
    gPowerNode.appendChild(gPowerText);

    for (let i=0;i<modelArray[21].length;i++) {
        let gSystemNode = document.getElementById('gSystem');
        let gSystemLI = document.createElement('li');
        let gSystemLIClass = document.createAttribute('Class');
        gSystemLIClass.value = 'font-weight-normal';
        gSystemLI.setAttributeNode(gSystemLIClass);
        let gSystemText = document.createTextNode(modelArray[21][i]);
        gSystemLI.appendChild(gSystemText);
        gSystemNode.appendChild(gSystemLI);
    }

    for (let i=0;i<modelArray[19].length;i++) {
        let gArmamentsNode = document.getElementById('gArmaments');
        let gArmamentsLI = document.createElement('li');
        let gArmamentsLIClass = document.createAttribute('Class');
        gArmamentsLIClass.value = 'font-weight-normal';
        gArmamentsLI.setAttributeNode(gArmamentsLIClass);
        let gArmamentsText = document.createTextNode(modelArray[19][i]);
        gArmamentsLI.appendChild(gArmamentsText);
        gArmamentsNode.appendChild(gArmamentsLI);
    }

    for (let i=0;i<modelArray[20].length;i++) {
        let gOptArmNode = document.getElementById('gOptArm');
        let gOptArmLI = document.createElement('li');
        let gOptArmLIClass = document.createAttribute('Class');
        gOptArmLIClass.value = 'font-weight-normal';
        gOptArmLI.setAttributeNode(gOptArmLIClass);
        let gOptArmText = document.createTextNode(modelArray[20][i]);
        gOptArmLI.appendChild(gOptArmText);
        gOptArmNode.appendChild(gOptArmLI);
    }

    let gDesignNode = document.getElementById('gDesign');
    let gDesignText = document.createTextNode(modelArray[22]);
    gDesignNode.appendChild(gDesignText);
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