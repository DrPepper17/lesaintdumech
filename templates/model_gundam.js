[
    ID, //numeric
    1,
    'ShortName',
    'FullName',
    'SerialNumber',
    'Series',
    EW,    //boolean
    ['DevelopedFrom'],
    ['DevelopedInto'],
    'Era',
    [StartDate,'DateString',EndDate],
    'Pilot',
    ['SecondPilots'],
    'Manufacturer',
    ['Affiliations'],
    [16.7,'16.7 Meters'],           //Height
    [7.7,'7.7 Metric Tons'],        //Weight
    'MaterialArmor',
    'EnergyPowerSource',
    [
        'Armaments' //built into suit. i.e. forehead mounted vulcan guns
    ],
    [
        'Equipment' //not physically part of suit but carried. i.e. beam sabers and rifles
    ],
    [
        'Systems'
    ],
    'DesignedBy',
    SDWHero,                //pseudo-boolean: If no, then false. If true, then list base source as character string
    'AlternateNickname',
    MobileArmor,            //boolean
    ['','PhotoAltText'],
    IsGundam,           //boolean
    [ID],
    'Name'              //Only if base source
]