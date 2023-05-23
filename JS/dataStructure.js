// Category Lists
const colorList = [
    '0. Unsure',
    '1. Pink',
    '2. Red',
    '3. Red-Light',
    '4. Red-Dark',
    '5. Orange',
    '6. Orange-Light',
    '7. Orange-Dark',
    '8. Yellow',
    '9. Yellow-Light',
    '10. Yellow-Dark',
    '11. Green',
    '12. Green-Light',
    '13. Green-Dark',
    '14. Blue',
    '15. Blue-Light',
    '16. Blue-Dark',
    '17. Purple',
    '18. Purple-Light',
    '19. Purple-Dark',
    '20. White',
    '21. Off-White',
    '22. Grey',
    '23. Grey-Light',
    '24. Grey-Dark',
    '25. Black',
    '26. Brown',
    '27. Aluminum',
    '28. Brass',
    '29. Bronze',
    '30. Chrome',
    '31. Copper',
    '32. Gold',
    '33. Gunmetal',
    '34. Silver',
    '35. Steal',
    '36. Tin',
    '37. Metal-Light',
    '38. Metal-Dark',
    '39. Stain'
];

const grade = [
    '0. No Grade',
    '1. PG-Perfect Grade',
    '2. MG-Master Grade',
    '3. MGEX-Master Grade Extreme',
    '4. FM-Full Mechanics',
    '5. RG-Real Grade',
    '6. HG-High Grade',
    '7. SD-Super Deformed',
    '8. MGSD-Master Grade SD',
    '9. EG-Entry Grade',
    '10. EG-Entry Grade',
    '11. EX-Ships',
    '12. Haropla',
    '13. Car',
    '14. Digimon',
    '15. Display',
    '16. Pokemon',
    '17. Ship',
    '18. StarBlazers',
    '19. Transformers',
    '20. Zoid'
];

const scale = [
    '0. Unsure',
    '1. 1/24',
    '2. 1/48',
    '3. 1/60',
    '4. 1/72',
    '5. 1/100',
    '6. 1/144',
    '7. 1/1000',
    '8. 1/1700'
];

const franchise = [
    '0. Unknown',
    '1. Gundam',
    '2. Digimon',
    '3. Model Car',
    '4. Pokemon',
    '5. StarBlazer',
    '6. Transformers',
    '7. Zoid',
    '8. 30 Minute Mission'
];

/*
// Data Points
let buildID = Number;
let PBandai = Boolean;
let Release = Date;
let buildVaration = Boolean;
let BaseBuild = Object;
let Description = String;
let Images = Array;
let Projects = Array;
let Gundam = Boolean;
let Builds = Array;
*/

class Model {
    constructor(modelID,Name,Franchise,Gundam,Description,Builds) {
        this.modelID=modelID;
        this.Name=Name;
        this.Franchise=Franchise;
        this.Gundam=Gundam;
        this.Description=Description;
        this.Builds=Builds;
    }
};

class Build {
    constructor(buildID,Model,Grade,Scale,Release,PBandai,buildVaration,BaseBuild,Description,Images,Projects) {
        this.buildID=buildID;
        this.Model=Model;
        this.Grade=Grade;
        this.Scale=Scale;
        this.Release=Release;
        this.PBandai=PBandai;
        this.buildVaration=buildVaration;
        this.BaseBuild=BaseBuild;
        this.Description=Description;
        this.Images=Images;
        this.Projects=Projects;
    }
};

//Models
const ProtoZero = new Model (
    1,
    'XXXG-00W0 Wing Gundam Proto Zero',
    franchise[1],
    true,
    'My favorite gundam',
);

//Builds

const MGProtoZero = new Build (
    1, 
    ProtoZero,
    grade[2],
    scale[5],
    (2013,10),
    false,
    false,
    '',
    'My favorite mobile suit',
    [''],
    ['']
);

const zzz = new Build (
    'abc',
    false,
    'efg',300,'','','',200,'','',''
);
