/*Episodes Array Format:
0. Purchased
1. Series Epidosde No.
2. Season No.
3. Season Episode No.
4. Title
5. Runtime (Minutes)
6. First Air Date
7. Special
8. Prod Code
9. Alternate Title
10. Rated
11. Directed By
12. Written By
13. US Viewers (millions)
14. World Viewers (millions)
15. Celebrity Portrayals [Array]
16. Guest Stars [Array]
17. Synopsis
18. Photo URL
19. IMDB Rating
20. Kenny Death
21. Visitor Count
*/

const EPISODES = [
    [false,1,1,1,'Cartman Gets an Anal Probe',
        21,"1997-08-13",false,101,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',0.89,false,false,['Franchesca Clifford','Isaac Hayes'],'While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving Alien \"Visitors\" abducting him from his bed. Meanwhile Kyle and Stan try to convince Cartman that the dream was in fact a reality.','img/SP/SPE101.jpeg',7.8
    ],
    [false,2,1,2,'Volcano',
        21,"1997-08-20",false,103,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone',1.11,false,['Patrick Duffy'],false,'The boys get together with Stan\'s Uncle Jimbo and Jimbo\'s war-buddy Ned for a hunting trip in the nearby mountains. After Cartman\'s mom makes sure her \"Little Boy\" is safe and sound (much to Cartman\s dismay) the group heads off for adventure. As they drive away from the town, Jimbo explains the \"finer\" points of hunting.','img/SP/SPE103.jpeg',7.6
    ],
    [false,3,1,3,'Weight Gain 4000',
        20,"1997-08-27",false,102,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone',0.72,false,['Kathie Lee Gifford','Geraldo Rivera'],['Kari Turner'],'Mr. Garrison starts the day off with a special announcement; one of South Park\'s own has won a national essay contest. Everyone is shocked to learn that the winner is Cartman, who doesn\'t even remember what he wrote about.','img/SP/SPE102.jpeg',false,7.5
    ],
    [false,4,1,4,'Big Gay Al\'s Big Gay Boat Ride',
        20,"1997-09-03",false,104,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',0.69,false,['Brian Boitano'],['George Clooney'],'Stan\'s got a new dog-named Sparky. Stan proclaims his pet to be the toughest dog on the mountain. Though while Stan thinks his dog is ready for fighting, Sparky proceeds to hump Sylvester like a little bitch. The other boys taunt Stan about his gay dog and Sparky runs away to find someone who will love him for who he is.','img/SP/SPE104.jpeg',7.6
    ],
    [false,5,1,5,'An Elephant Makes Love to a Pig',
        20,"1997-09-10",false,105,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone \u0026 Dan Sterling',1.29,false,['Elton John'],['Frank Welker'],'Stan notices a new addition in their bus stop crew, an elephant standing alongside Kyle. At school, class lessons for the day involve genetic engineering (conveniently enough). Kyle questions the possibility of a genetically engineered elephant made smaller by design. The boys have to beat the rough kids in their genetics experiment, and will try anything to do it.','img/SP/SPE105.jpeg',7.4
    ],
    [false,6,1,6,'Death',
        20,"1997-09-17",false,106,false,'TV-MA','Matt Stone','Trey Parker \u0026 Matt Stone',1.13,false,['Suzanne Somers'],false,'\"Happy Birthday\" to Stan\'s Grandpa Marsh who just turned 102. How does the wizened Mr. Marsh feel about his birthday? He sums it up in five words; \"I wish I were dead.\" and proceeds trying to end his life enlisting Stan to do it for him. However, Stan is aware of a very important thing if he kills his grandfather, he\'d be in trouble, and if he\'s in trouble he can\'t watch Terrance and Phillip.','img/SP/SPE106.jpeg',8.0
    ],
    [false,7,1,7,'Pinkeye',
        22,"1997-10-29",false,107,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone \u0026 Philip Stark',1.73,false,false,false,'The first Halloween episode starts off with the failure of the Mir Space Station, which crashes right on Kenny. An ambulance comes and takes his body off to the morgue. The boys start to brag about their Halloween costumes. At the morgue, a freak accident involving a bottle of Worcestershire occurs, and next thing you know Kenny is a member of the undead. Kenny breaks free and wanders off into the night.','img/SP/SPE107.jpeg',8.3
    ],
    [false,8,1,8,'Starvin\' Marvin',
        20,"1997-11-19",false,109,false,'TV-MA','Trey Parker','Trey Parker',2.20,false,['Sally Struthers'],false,'Mistaking Cartman for a starving African child, government authorities send him to Ethiopia where he runs into Sally Struthers.','img/SP/SPE109.jpeg',8.1
    ],
    [false,9,1,9,'Mr. Hankey, the Christmas Poo',
        21,"1997-12-17",false,110,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker',4.55,false,false,false,'When Kyle\'s musical holiday pal Mr. Hankey shows up it makes for a memorable Christmas in South Park.','img/SP/SPE110.jpeg',8.1
    ],
    [false,10,1,10,'Damien',
        21,"1998-02-04",false,108,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',3.01,false,['Don King','Michael Buffer','Mills Lane'],['Michael Buffer'],'Eric is handing out invitations to his birthday party at school. Mr. Garrison informs them all that there is a new student joining the class. Announcing to all that he is Damien, the son of Satan. Even as Damien demonstrates his demonic powers the children are more loathsome than impressed.','img/SP/SPE108.jpeg',7.8
    ],
    [false,11,1,11,'Tom\'s Rhinoplasty',
        22,"1998-02-11",false,111,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,false,['Natasha Henstridge'],'Wendy and Stan discuss their plans for romance. Principal Victoria comes into the classroom and announces that Mr. Garrison is going to be out and that a substitute will be taking his place. The lovely Miss Ellen speaks to Stan and he pukes all over his desk. Wendy is upset because Stan only pukes when he is in love and has Mrs. Ellen arrested for being a spy.','img/SP/SPE111.jpeg',7.9
    ],
    [false,12,1,12,'Mecha-Streisand',
        20,"1998-02-18",false,112,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone \u0026 Philip Stark',3.21,false,['Barbra Streisand','Leonard Maltin','Sidney Poitier','Robert Smith'],['Robert Smith'],'The boys meet up with Barbara Streisand who wants to take over the world with Kyle\'s discovery and an archaeological dig. Leonard Maltin, Sydney Potier, and Robert Smith come to the rescue to defeat Babs and her terrible destruction.','img/SP/SPE112.jpeg',7.5
    ],
    [false,13,1,13,'Cartman\'s Mom Is a Dirty Slut',
        20,"1998-02-25",false,113,false,'TV-MA','Trey Parker','Trey Parker \u0026 David R. Goodman',3.20,false,false,['Jay Leno'],'Cartman needs to find out who his father is but his mom is no help. Learning that his father could be one of the many people that his mom "had relations" with during an annual party called "The Drunken Barn Dance," he finds that there\'s more to his mother then he thought.','img/SP/SPE113.jpeg',8.6
    ],
    [false,14,2,1,'Terrance and Phillip in Not Without My Anus'//,
        //runtime,"1997-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','img/SP/SPE.jpeg',imdb
    ],
    [false,15,2,2,'Cartman\'s Mom Is Still a Dirty Slut'],
    [false,16,2,3,'Ike\'s Wee Wee'],
    [false,17,2,4,'Chickenlover'],
    [false,18,2,5,'Conjoined Fetus Lady'],
    [false,19,2,6,'The Mexican Staring Frog of Southern Sri Lanka'],
    [false,20,2,7,'City on the Edge of Forever'],
    [false,21,2,8,'Summer Sucks'],
    [false,22,2,9,'Chef\'s Chocolate Salty Balls'],
    [false,23,2,10,'Chickenpox'],
    [false,24,2,11,'Roger Ebert Should Lay Off the Fatty Foods'],
    [false,25,2,12,'Clubhouses'],
    [false,26,2,13,'Cow Days'],
    [false,27,2,14,'Chef Aid'],
    [false,28,2,15,'Spookyfish'],
    [false,29,2,16,'Merry Christmas, Charlie Manson!'],
    [false,30,2,17,'Gnomes'],
    [false,31,2,18,'Prehistoric Ice Man'],
    [false,32,3,1,'Rainforest Shmainforest'],
    [false,33,3,2,'Spontaneous Combustion'],
    [false,34,3,3,'Succubus'],
    [false,35,3,4,'Jakovasaurs'],
    [false,36,3,5,'Tweek vs. Craig'],
    [true,'MOVIE',false,false,'South Park: Bigger, Longer & Uncut',81,"1999-06-30",false,false],
    [false,37,3,6,'Sexual Harassment Panda'],
    [false,38,3,7,'Cat Orgy'],
    [false,39,3,8,'Two Guys Naked in a Hot Tub'],
    [true,40,3,9,'Jewbilee'],
    [false,41,3,10,'Korn\'s Groovy Pirate Ghost Mystery'],
    [false,42,3,11,'Chinpokomon'],
    [false,43,3,12,'Hooked on Monkey Fonics'],
    [false,44,3,13,'Starvin\' Marvin in Space'],
    [false,45,3,14,'The Red Badge of Gayness'],
    [true,46,3,15,'Mr. Hankey\'s Christmas Classics'],
    [false,47,3,16,'Are You There God? It\'s Me, Jesus'],
    [false,48,3,17,'World Wide Recorder Concert'],
    [false,49,4,1,'The Tooth Fairy\'s Tats'],
    [false,50,4,2,'Cartman\'s Silly Hate Crime'],
    [false,51,4,3,'Timmy'],
    [false,52,4,4,'Quintuplets'],
    [false,53,4,5,'Cartman Joins NAMBLA'],
    [false,54,4,6,'Cherokee Hair Tampons'],
    [false,55,4,7,'Chef Goes Nanners'],
    [false,56,4,8,'Something You Can Do with Your Finger'],
    [false,57,4,9,'Do The Handicapped Go To Hell'],
    [false,58,4,10,'Probably'],
    [false,59,4,11,'Fourth Grade'],
    [false,60,4,12,'Trapper Keeper'],
    [false,61,4,13,'Helen Keller The Musical'],
    [false,62,4,14,'Pip'],
    [false,63,4,15,'Fat Camp'],
    [false,64,4,16,'The Wacky Molestation Adventure'],
    [false,65,4,17,'A Very Crappy Christmas'],
    [false,66,5,1,'It Hits the Fan'],
    [false,67,5,2,'Cripple Fight'],
    [false,68,5,3,'Super Best Friends'],
    [true,69,5,4,'Scott Tenorman Must Die'],
    [false,70,5,5,'Terrance and Phillip: Behind the Blow'],
    [false,71,5,6,'Cartmanland'],
    [false,72,5,7,'Proper Condom Use'],
    [false,73,5,8,'Towelie'],
    [false,74,5,9,'Osama bin Laden Has Farty Pants'],
    [false,75,5,10,'How to Eat with Your Butt'],
    [false,76,5,11,'The Entity'],
    [false,77,5,12,'Here Comes the Neighborhood'],
    [false,78,5,13,'Kenny Dies'],
    [false,79,5,14,'Butters\' Very Own Episode'],
    [false,80,6,1,'Jared Has Aides'],
    [false,81,6,2,'Asspen'],
    [false,82,6,3,'Freak Strike'],
    [false,83,6,4,'Fun with Veal'],
    [false,84,6,5,'The New Terrance and Phillip Movie Trailer'],
    [false,85,6,6,'Professor Chaos'],
    [false,86,6,7,'Simpsons Already Did It'],
    [true,87,6,8,'Red Hot Catholic Love'],
    [false,88,6,9,'Free Hat'],
    [false,89,6,10,'Bebe\'s Boobs Destroy Society'],
    [false,90,6,11,'Child Abduction Is Not Funny'],
    [false,91,6,12,'A Ladder to Heaven'],
    [false,92,6,13,'The Return of the Fellowship of the Ring to the Two Towers'],
    [false,93,6,14,'The Death Camp of Tolerance'],
    [false,94,6,15,'The Biggest Douche in the Universe'],
    [false,95,6,16,'My Future Self \'n\' Me'],
    [true,96,6,17,'Red Sleigh Down'],
    [false,97,7,1,'Cancelled'],
    [false,98,7,2,'Krazy Kripples'],
    [false,99,7,3,'Toilet Paper'],
    [false,100,7,4,'I\'m a Little Bit Country'],
    [false,101,7,5,'Fat Butt and Pancake Head'],
    [false,102,7,6,'Lil\' Crime Stoppers'],
    [false,103,7,7,'Red Man\'s Greed'],
    [false,104,7,8,'South Park Is Gay!'],
    [false,105,7,9,'Christian Rock Hard'],
    [false,106,7,10,'Grey Dawn'],
    [false,107,7,11,'Casa Bonita'],
    [false,108,7,12,'All About Mormons'],
    [true,109,7,13,'Butt Out'],
    [false,110,7,14,'Raisins'],
    [false,111,7,15,'It\'s Christmas in Canada'],
    [false,112,8,1,'Good Times with Weapons'],
    [false,113,8,2,'Up the Down Steroid'],
    [false,114,8,3,'The Passion of the Jew'],
    [false,115,8,4,'You Got F\'d in the A'],
    [false,116,8,5,'Awesom-O'],
    [false,117,8,6,'The Jeffersons'],
    [false,118,8,7,'Goobacks'],
    [false,119,8,8,'Douche and Turd'],
    [false,120,8,9,'Something Wall-Mart This Way Comes'],
    [false,121,8,10,'Preschool'],
    [false,122,8,11,'Quest for Ratings'],
    [false,123,8,12,'Stupid Spoiled Whore Video Playset'],
    [false,124,8,13,'Cartman\'s Incredible Gift'],
    [false,125,8,14,'Woodland Critter Christmas'],
    [false,126,9,1,'Mr. Garrison\'s Fancy New Vagina'],
    [false,127,9,2,'Die Hippie, Die'],
    [false,128,9,3,'Wing'],
    [false,129,9,4,'Best Friends Forever'],
    [false,130,9,5,'The Losing Edge'],
    [false,131,9,6,'The Death of Eric Cartman'],
    [false,132,9,7,'Erection Day'],
    [false,133,9,8,'Two Days Before the Day After Tomorrow'],
    [false,134,9,9,'Marjorine'],
    [false,135,9,10,'Follow That Egg!'],
    [false,136,9,11,'Ginger Kids'],
    [false,137,9,12,'Trapped in the Closet'],
    [false,138,9,13,'Free Willzyx'],
    [false,139,9,14,'Bloody Mary'],
    [false,140,10,1,'The Return of Chef'],
    [false,141,10,2,'Smug Alert!'],
    [false,142,10,3,'Cartoon Wars Part I'],
    [false,143,10,4,'Cartoon Wars Part II'],
    [false,144,10,5,'A Million Little Fibers'],
    [false,145,10,6,'ManBearPig'],
    [false,146,10,7,'Tsst'],
    [false,147,10,8,'Make Love, Not Warcraft'],
    [false,148,10,9,'Mystery of the Urinal Deuce'],
    [false,149,10,10,'Miss Teacher Bangs a Boy'],
    [false,150,10,11,'Hell on Earth 2006'],
    [false,151,10,12,'Go God Go'],
    [false,152,10,13,'Go God Go XII'],
    [false,153,10,14,'Stanley\'s Cup'],
    [false,154,11,1,'With Apologies to Jesse Jackson'],
    [false,155,11,2,'Cartman Sucks'],
    [false,156,11,3,'Lice Capades'],
    [false,157,11,4,'The Snuke'],
    [true,158,11,5,'Fantastic Easter Special'],
    [false,159,11,6,'D-Yikes!'],
    [false,160,11,7,'Night of the Living Homeless'],
    [false,161,11,8,'Le Petit Tourette'],
    [false,162,11,9,'More Crap'],
    [false,163,11,10,'Imaginationland Episode I'],
    [false,164,11,11,'Imaginationland Episode II'],
    [false,165,11,12,'Imaginationland Episode III'],
    [false,166,11,13,'Guitar Queer-O'],
    [false,167,11,14,'The List'],
    [true,168,12,1,'Tonsil Trouble'],
    [false,169,12,2,'Britney\'s New Look'],
    [false,170,12,3,'Major Boobage'],
    [false,171,12,4,'Canada on Strike'],
    [false,172,12,5,'Eek, a Penis!'],
    [false,173,12,6,'Over Logging'],
    [false,174,12,7,'Super Fun Time'],
    [false,175,12,8,'The China Probrem'],
    [false,176,12,9,'Breast Cancer Show Ever'],
    [false,177,12,10,'Pandemic'],
    [false,178,12,11,'Pandemic 2: The Startling'],
    [false,179,12,12,'About Last Night...'],
    [false,180,12,13,'Elementary School Musical'],
    [false,181,12,14,'The Ungroundable'],
    [false,182,13,1,'The Ring'],
    [false,183,13,2,'The Coon'],
    [false,184,13,3,'Margaritaville'],
    [false,185,13,4,'Eat, Pray, Queef'],
    [false,186,13,5,'Fishsticks'],
    [true,187,13,6,'Pinewood Derby'],
    [true,188,13,7,'Fatbeard'],
    [false,189,13,8,'Dead Celebrities'],
    [false,190,13,9,'Butters\' Bottom Bitch'],
    [true,191,13,10,'W.T.F.'],
    [false,192,13,11,'Whale Whores'],
    [true,193,13,12,'The F Word'],
    [false,194,13,13,'Dances with Smurfs'],
    [false,195,13,14,'Pee'],
    [false,196,14,1,'Sexual Healing'],
    [false,197,14,2,'The Tale of Scrotie McBoogerballs'],
    [false,198,14,3,'Medicinal Fried Chicken'],
    [false,199,14,4,'You Have 0 Friends'],
    [false,200,14,5,'200'],
    [false,201,14,6,'201'],
    [false,202,14,7,'Crippled Summer'],
    [false,203,14,8,'Poor and Stupid'],
    [false,204,14,9,'It\'s a Jersey Thing'],
    [false,205,14,10,'Insheeption'],
    [false,206,14,11,'Coon 2: Hindsight'],
    [false,207,14,12,'Mysterion Rises'],
    [false,208,14,13,'Coon vs. Coon and Friends'],
    [false,209,14,14,'Cr\u00E8me Fra\u00EEche'],
    [false,210,15,1,'HumancentiPad'],
    [false,211,15,2,'Funnybot'],
    [false,212,15,3,'Royal Pudding'],
    [false,213,15,4,'T.M.I.'],
    [false,214,15,5,'Crack Baby Athletic Association'],
    [false,215,15,6,'City Sushi'],
    [false,216,15,7,'You\'re Getting Old'],
    [false,217,15,8,'Ass Burgers'],
    [false,218,15,9,'The Last of the Meheecans'],
    [false,219,15,10,'Bass to Mouth'],
    [false,220,15,11,'Broadway Bro Down'],
    [false,221,15,12,'1\u0025'],
    [false,222,15,13,'A History Channel Thanksgiving'],
    [false,223,15,14,'The Poor Kid'],
    [false,224,16,1,'Reverse Cowgirl'],
    [false,225,16,2,'Cash for Gold'],
    [false,226,16,3,'Faith Hilling'],
    [false,227,16,4,'Jewpacabra'],
    [false,228,16,5,'Butterballs'],
    [false,229,16,6,'I Should Have Never Gone Ziplining'],
    [false,230,16,7,'Cartman Finds Love'],
    [false,231,16,8,'Sarcastaball'],
    [false,232,16,9,'Raising the Bar'],
    [true,233,16,10,'Insecurity'],
    [false,234,16,11,'Going Native'],
    [false,235,16,12,'A Nightmare on FaceTime'],
    [false,236,16,13,'A Scause for Applause'],
    [false,237,16,14,'Obama Wins!'],
    [false,238,17,1,'Let Go, Let Gov'],
    [false,239,17,2,'Informative Murder Porn'],
    [false,240,17,3,'World War Zimmerman'],
    [false,241,17,4,'Goth Kids 3: Dawn of the Posers'],
    [false,242,17,5,'Taming Strange'],
    [false,243,17,6,'Ginger Cow'],
    [false,244,17,7,'Black Friday'],
    [false,245,17,8,'A Song of Ass and Fire'],
    [false,246,17,9,'Titties and Dragons'],
    [true,247,17,10,'The Hobbit'],
    [false,248,18,1,'Go Fund Yourself'],
    [false,249,18,2,'Gluten Free Ebola'],
    [false,250,18,3,'The Cissy'],
    [false,251,18,4,'Handicar'],
    [false,252,18,5,'The Magic Bush'],
    [false,253,18,6,'Freemium Isn\'t Free'],
    [false,254,18,7,'Grounded Vindaloop'],
    [false,255,18,8,'Cock Magic'],
    [false,256,18,9,'\u0023REHASH'],
    [false,257,18,10,'\u0023HappyHolograms'],
    [true,258,19,1,'Stunning and Brave'],
    [true,259,19,2,'Where My Country Gone?'],
    [true,260,19,3,'The City Part of Town'],
    [true,261,19,4,'You\'re Not Yelping'],
    [true,262,19,5,'Safe Space'],
    [true,263,19,6,'Tweek x Craig'],
    [true,264,19,7,'Naughty Ninjas'],
    [true,265,19,8,'Sponsored Content'],
    [true,266,19,9,'Truth and Advertising'],
    [true,267,19,10,'PC Principal Final Justice'],
    [true,268,20,1,'Member Berries'],
    [true,269,20,2,'Skank Hunt'],
    [true,270,20,3,'The Damned'],
    [true,271,20,4,'Wieners Out'],
    [true,272,20,5,'Douche and a Danish'],
    [true,273,20,6,'Fort Collins'],
    [true,274,20,7,'Oh, Jeez'],
    [true,275,20,8,'Members Only'],
    [true,276,20,9,'Not Funny'],
    [true,277,20,10,'The End of Serialization as We Know It'],
    [true,278,21,1,'White People Renovating Houses'],
    [true,279,21,2,'Put It Down'],
    [true,280,21,3,'Holiday Special'],
    [true,281,21,4,'Franchise Prequel'],
    [true,282,21,5,'Hummels \u0026 Heroin'],
    [true,283,21,6,'Sons a Witches'],
    [true,284,21,7,'Doubling Down'],
    [true,285,21,8,'Moss Piglets'],
    [true,286,21,9,'Super Hard PCness'],
    [true,287,21,10,'Splatty Tomato'],
    [true,288,22,1,'Dead Kids'],
    [true,289,22,2,'A Boy and a Priest'],
    [true,290,22,3,'The Problem with a Poo'],
    [false,291,22,4,'Tegridy Farms'],
    [true,292,22,5,'The Scoots'],
    [true,293,22,6,'Time to Get Cereal'],
    [true,294,22,7,'Nobody Got Cereal?'],
    [true,295,22,8,'Buddha Box'],
    [true,296,22,9,'Unfulfilled'],
    [true,297,22,10,'Bike Parade'],
    [true,298,23,1,'Mexican Joker'],
    [true,299,23,2,'Band in China'],
    [true,300,23,3,'Shots!!!'],
    [true,301,23,4,'Let Them Eat Goo'],
    [true,302,23,5,'Tegridy Farms Halloween Special'],
    [true,303,23,6,'Season Finale'],
    [true,304,23,7,'Board Girls'],
    [true,305,23,8,'Turd Burglars'],
    [true,306,23,9,'Basic Cable'],
    [true,307,23,10,'Christmas Snow'],
    [true,308,24,1,'The Pandemic Special',48,"2020-09-30",false,2401],
    [true,309,24,2,'South ParQ Vaccination Special',47,"2021-03-10",false,2402],
    [false,310,false,false,'South Park: Post COVID',59,"2021-11-25",true,2403],
    [false,311,false,false,'South Park: Post COVID: The Return of COVID',62,"2021-12-16",true,2404],
    [false,312,25,1,'Pajama Day'],
    [false,313,25,2,'The Big Fix'],
    [false,314,25,3,'City People'],
    [false,315,25,4,'Back to the Cold War'],
    [false,316,25,5,'Help, My Teenager Hates Me!'],
    [false,317,25,6,'Credigree Weed St. Patrick\'s Day Special'],
    [false,318,false,false,'South Park: The Streaming Wars',50,"2022-06-01",true,false],
    [false,319,false,false,'South Park: The Streaming Wars Part 2',47,"2022-07-13",true,false],
    [true,320,26,1,'Cupid Ye'],
    [true,321,26,2,'The Worldwide Privacy Tour'],
    [true,322,26,3,'Japanese Toilet'],
    [true,323,26,4,'Deep Learning'],
    [true,324,26,5,'DikinBaus Hot Dogs'],
    [true,325,26,6,'Spring Break'],
    [true,326,false,false,'South Park: Joining the Panderverse',49,"2023-10-27",true,false],
    [false,327,false,false,'South Park: (Not Suitable For Children)',47,"2023-12-20",true,false],
    [true,328,false,false,'South Park: The End of Obesity',50,"2024-10-24",true,false],
    [true,329,27,1,'Sermon on the Mount'],
    [true,330,27,2,'Got a Nut'],
    [true,331,27,3,'Sickofancy'],
    [true,332,27,4,'Wok is Dead'],
    [true,333,27,5,'Conflict of Interest'],
    [true,334,28,1,'Twisted Christian'],
    [true,335,28,2,'The Woman in the Hat'],
    [true,336,28,3,'Sora Not Sorry'],
    [true,337,28,4,'Turkey Trot'],
    [true,338,28,5,'The Crap Out']
];

//Initialize Variables
let Purchased = [];
let Unpurchased = [];
let PurchaseCount = 0;
let SPS01List = [];
let SPS02List = [];
let SPS03List = [];
let SPS04List = [];
let SPS05List = [];
let SPS06List = [];
let SPS07List = [];
let SPS08List = [];
let SPS09List = [];
let SPS10List = [];
let SPS11List = [];
let SPS12List = [];
let SPS13List = [];
let SPS14List = [];
let SPS15List = [];
let SPS16List = [];
let SPS17List = [];
let SPS18List = [];
let SPS19List = [];
let SPS20List = [];
let SPS21List = [];
let SPS22List = [];
let SPS23List = [];
let SPS24List = [];
let SPS25List = [];
let SPS26List = [];
let SPS27List = [];
let SPS28List = [];
let PRMTList = [];
let OTHERList = [];
let SPS01Count = 0;
let SPS02Count = 0;
let SPS03Count = 0;
let SPS04Count = 0;
let SPS05Count = 0;
let SPS06Count = 0;
let SPS07Count = 0;
let SPS08Count = 0;
let SPS09Count = 0;
let SPS10Count = 0;
let SPS11Count = 0;
let SPS12Count = 0;
let SPS13Count = 0;
let SPS14Count = 0;
let SPS15Count = 0;
let SPS16Count = 0;
let SPS17Count = 0;
let SPS18Count = 0;
let SPS19Count = 0;
let SPS20Count = 0;
let SPS21Count = 0;
let SPS22Count = 0;
let SPS23Count = 0;
let SPS24Count = 0;
let SPS25Count = 0;
let SPS26Count = 0;
let SPS27Count = 0;
let SPS28Count = 0;
let PRMTCount = 0;
let OTHERCount = 0;

//Functions
function prepLists() {
    Purchased = [];
    Unpurchased = [];
    PurchaseCount = 0;

    for (let i=0;i<EPISODES.length;i++) {
        if (EPISODES[i][0] === true) {
            Purchased.push(EPISODES[i]);
            PurchaseCount++;
        }
        else {
            Unpurchased.push(EPISODES[i]);
        }

        if (EPISODES[i][7]) {
            PRMTList.push(EPISODES[i]);
            PRMTCount++;
        }
        else if (EPISODES[i][2]===1) {
            SPS01List.push(EPISODES[i]);
            SPS01Count++;
        }
        else if (EPISODES[i][2]===2) {
            SPS02List.push(EPISODES[i]);
            SPS02Count++;
        }
        else if (EPISODES[i][2]===3) {
            SPS03List.push(EPISODES[i]);
            SPS03Count++;
        }
        else if (EPISODES[i][2]===4) {
            SPS04List.push(EPISODES[i]);
            SPS04Count++;
        }
        else if (EPISODES[i][2]===5) {
            SPS05List.push(EPISODES[i]);
            SPS05Count++;
        }
        else if (EPISODES[i][2]===6) {
            SPS06List.push(EPISODES[i]);
            SPS06Count++;
        }
        else if (EPISODES[i][2]===7) {
            SPS07List.push(EPISODES[i]);
            SPS07Count++;
        }
        else if (EPISODES[i][2]===8) {
            SPS08List.push(EPISODES[i]);
            SPS08Count++;
        }
        else if (EPISODES[i][2]===9) {
            SPS09List.push(EPISODES[i]);
            SPS09Count++;
        }
        else if (EPISODES[i][2]===10) {
            SPS10List.push(EPISODES[i]);
            SPS10Count++;
        }else if (EPISODES[i][2]===11) {
            SPS11List.push(EPISODES[i]);
            SPS11Count++;
        }
        else if (EPISODES[i][2]===12) {
            SPS12List.push(EPISODES[i]);
            SPS12Count++;
        }
        else if (EPISODES[i][2]===13) {
            SPS13List.push(EPISODES[i]);
            SPS13Count++;
        }
        else if (EPISODES[i][2]===14) {
            SPS14List.push(EPISODES[i]);
            SPS14Count++;
        }
        else if (EPISODES[i][2]===15) {
            SPS15List.push(EPISODES[i]);
            SPS15Count++;
        }
        else if (EPISODES[i][2]===16) {
            SPS16List.push(EPISODES[i]);
            SPS16Count++;
        }
        else if (EPISODES[i][2]===17) {
            SPS17List.push(EPISODES[i]);
            SPS17Count++;
        }
        else if (EPISODES[i][2]===18) {
            SPS18List.push(EPISODES[i]);
            SPS18Count++;
        }
        else if (EPISODES[i][2]===19) {
            SPS19List.push(EPISODES[i]);
            SPS19Count++;
        }
        else if (EPISODES[i][2]===20) {
            SPS20List.push(EPISODES[i]);
            SPS20Count++;
        }else if (EPISODES[i][2]===21) {
            SPS21List.push(EPISODES[i]);
            SPS21Count++;
        }
        else if (EPISODES[i][2]===22) {
            SPS22List.push(EPISODES[i]);
            SPS22Count++;
        }
        else if (EPISODES[i][2]===23) {
            SPS23List.push(EPISODES[i]);
            SPS23Count++;
        }
        else if (EPISODES[i][2]===24) {
            SPS24List.push(EPISODES[i]);
            SPS24Count++;
        }
        else if (EPISODES[i][2]===25) {
            SPS25List.push(EPISODES[i]);
            SPS25Count++;
        }
        else if (EPISODES[i][2]===26) {
            SPS26List.push(EPISODES[i]);
            SPS26Count++;
        }
        else if (EPISODES[i][2]===27) {
            SPS27List.push(EPISODES[i]);
            SPS27Count++;
        }
        else if (EPISODES[i][2]===28) {
            SPS28List.push(EPISODES[i]);
            SPS28Count++;
        }
        else {
            OTHERList.push(EPISODES[i]);
            OTHERCount++;
        }
    }

    const inventoryPurchasedNode = document.getElementById('totalCount');
    const inventoryPurchasedTextNode = document.createTextNode(PurchaseCount);
    inventoryPurchasedNode.appendChild(inventoryPurchasedTextNode);
    const totalEpisodesnode = document.getElementById('everything');
    const totalEpisodesTextnode = document.createTextNode(EPISODES.length);
    totalEpisodesnode.appendChild(totalEpisodesTextnode);
    const percentCompletionNode = document.getElementById('totalPercent');
    const percentCompletionTextNode = document.createTextNode((PurchaseCount/EPISODES.length*100).toFixed(2)+'%');
    percentCompletionNode.appendChild(percentCompletionTextNode);

    popEpisodes(SPS01List,'ListSPS1');
    popEpisodes(SPS02List,'ListSPS2');
    popEpisodes(SPS03List,'ListSPS3');
    popEpisodes(SPS04List,'ListSPS4');
    popEpisodes(SPS05List,'ListSPS5');
    popEpisodes(SPS06List,'ListSPS6');
    popEpisodes(SPS07List,'ListSPS7');
    popEpisodes(SPS08List,'ListSPS8');
    popEpisodes(SPS09List,'ListSPS9');
    popEpisodes(SPS10List,'ListSPS10');
    popEpisodes(SPS11List,'ListSPS11');
    popEpisodes(SPS12List,'ListSPS12');
    popEpisodes(SPS13List,'ListSPS13');
    popEpisodes(SPS14List,'ListSPS14');
    popEpisodes(SPS15List,'ListSPS15');
    popEpisodes(SPS16List,'ListSPS16');
    popEpisodes(SPS17List,'ListSPS17');
    popEpisodes(SPS18List,'ListSPS18');
    popEpisodes(SPS19List,'ListSPS19');
    popEpisodes(SPS20List,'ListSPS20');
    popEpisodes(SPS21List,'ListSPS21');
    popEpisodes(SPS22List,'ListSPS22');
    popEpisodes(SPS23List,'ListSPS23');
    popEpisodes(SPS24List,'ListSPS24');
    popEpisodes(SPS25List,'ListSPS25');
    popEpisodes(SPS26List,'ListSPS26');
    popEpisodes(SPS27List,'ListSPS27');
    popEpisodes(SPS28List,'ListSPS28');
    popEpisodes(PRMTList,'ListPRMT');
    popEpisodes(OTHERList,'ListOTHER');

    generateModalFrame();
}

function selectRandom(inputArray) {
    let randomNum = Math.floor(Math.random()*inputArray.length);
    let randomSelection = inputArray[randomNum];
    return randomSelection;
}

function applyFilter(list) {

}

function selectEpisode(purpose,filters) {
    const purchaseNode = document.getElementById('nextPurch');
    const watchNode = document.getElementById('nextWatch');
    let targetNode = purchaseNode;
    let filteredList = Unpurchased;

    if (purpose=='watch') {
        targetNode = watchNode;
        filteredList = Purchased;
        while (watchNode.firstChild) {
            watchNode.removeChild(watchNode.firstChild);
        }
    }
    else {
        while (purchaseNode.firstChild) {
            purchaseNode.removeChild(purchaseNode.firstChild);
        }
    }

    if (filters) {
        filteredList = applyFilter(Purchased);
    }

    let nextEpisode = selectRandom(filteredList);
    let text = '';
    if (nextEpisode[2]) {
        text = 'Season '+nextEpisode[2]+' '
    }
    if (nextEpisode[3]) {
        text = text+'Episode '+nextEpisode[3]+': '
    }

    const strongNode = document.createElement('Strong');
    const episodeTextNode = document.createTextNode(text);
    const emphNode = document.createElement('em');
    const episodeTitleTextNode = document.createTextNode('"'+nextEpisode[4]+'"');
    targetNode.appendChild(strongNode);
    strongNode.appendChild(episodeTextNode);
    strongNode.appendChild(emphNode);

    const anchorNode = document.createElement('a');
    const anchorDataToggleNode = document.createAttribute('data-toggle');
    anchorDataToggleNode.value = 'modal';
    const anchorDataTargetNode = document.createAttribute('data-target');
    anchorDataTargetNode.value = '#EpisodeModal_'+nextEpisode[1];
    const anchorColor = document.createAttribute('style');
    anchorColor.value = 'color: navy;';
    const anchorHREF = document.createAttribute('href');
    anchorHREF.value = '#';

    emphNode.appendChild(anchorNode);
    anchorNode.setAttributeNode(anchorDataToggleNode);
    anchorNode.setAttributeNode(anchorDataTargetNode);
    anchorNode.setAttributeNode(anchorColor);
    anchorNode.setAttributeNode(anchorHREF);
    anchorNode.appendChild(episodeTitleTextNode);

    const smallNode = document.createElement('small');
    const jumpNode = document.createElement('a');
    const jumpTextNode = document.createTextNode('...<Jump To>...');
    const jumpTarget = document.createAttribute('href');
    if (nextEpisode[7]) {
        jumpTarget.value = '#PRMT';
    }
    else if (!nextEpisode[2]) {
        jumpTarget.value = '#OTHER';
    }
    else {
        jumpTarget.value = '#SPS'+nextEpisode[2];
    }
    targetNode.appendChild(smallNode);
    smallNode.appendChild(jumpNode);
    jumpNode.appendChild(jumpTextNode);
    jumpNode.setAttributeNode(jumpTarget);
}

function popEpisodes(array,id) {
    let listNode = document.getElementById(id);
    let purchasedCt = 0;
    for (let i=0;i<array.length;i++) {
        let lineNode = document.createElement('li');
        listNode.appendChild(lineNode);

        let imgNode = document.createElement('img');
        let imgSRC = document.createAttribute('src');
        let imgHeight = document.createAttribute('height');
        let imgClass = document.createAttribute('class');
        if (array[i][0]) {
            imgSRC.value = "img/SP/CartmanDollarSigns.png";
            imgHeight.value="45px";
            imgClass.value="mr-2 my-1";
            purchasedCt++;
        }
        else {
            imgSRC.value = "img/SP/UncheckBox.png";
            imgHeight.value="35px";
            imgClass.value="ml-2 mr-3 my-1";
        }
        imgNode.setAttributeNode(imgSRC);
        imgNode.setAttributeNode(imgHeight);
        imgNode.setAttributeNode(imgClass);
        lineNode.appendChild(imgNode);

        const modalAnchorNode = document.createElement('a');
        const modalAnchorDataToggleNode = document.createAttribute('data-toggle');
        modalAnchorDataToggleNode.value = 'modal';
        const modalAnchorDataTargetNode = document.createAttribute('data-target');
        modalAnchorDataTargetNode.value = '#EpisodeModal_'+array[i][1];
        const modalAnchorHREF = document.createAttribute('href');
        modalAnchorHREF.value = '#';

        modalAnchorNode.setAttributeNode(modalAnchorDataToggleNode);
        modalAnchorNode.setAttributeNode(modalAnchorDataTargetNode);
        modalAnchorNode.setAttributeNode(modalAnchorHREF);

        let strongNode = document.createElement('strong');
        lineNode.appendChild(modalAnchorNode);
        modalAnchorNode.appendChild(strongNode);

        if (array[i][3]) {
            let epNode = document.createTextNode('   Ep. '+array[i][3]+': ');
            strongNode.appendChild(epNode);
        }

        let titleNode = document.createTextNode(array[i][4]);
        strongNode.appendChild(titleNode);
    }

    let purchNode = document.getElementById(id+'Purch');
    let totalNode = document.getElementById(id+'Total');
    let completeNode = document.getElementById(id+'Comp');

    let purchTextNode = document.createTextNode(purchasedCt+' ');
    purchNode.appendChild(purchTextNode);
    let totalTextNode = document.createTextNode(array.length);
    totalNode.appendChild(totalTextNode);
    let completeTextNode = document.createTextNode((purchasedCt/array.length*100).toFixed(2)+'%');
    completeNode.appendChild(completeTextNode);

}

function generateModalFrame() {
    let anchorNode = document.getElementById('modalAnchor');

    for (let i=0;i<EPISODES.length;i++) {

        let div1Node = document.createElement('div');
        let div1ID = document.createAttribute('id');
        div1ID.value = 'EpisodeModal_'+EPISODES[i][1];
        let div1Class = document.createAttribute('class');
        div1Class.value = 'modal fade';
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
        h3_1Node.setAttributeNode(h3_1Class);
        let modalTitle = document.createTextNode(EPISODES[i][4].toUpperCase());
        h3_1Node.appendChild(modalTitle);
        div4Node.appendChild(h3_1Node);

        let button1Node = document.createElement('button');
        let button1Type = document.createAttribute('type');
        button1Type.value = 'button';
        let button1Class = document.createAttribute('class');
        button1Class.value = 'close';
        let button1DataDismiss = document.createAttribute('data-dismiss');
        button1DataDismiss.value = 'modal';
        let closeImg = document.createElement('img');
        let closeImgSRC = document.createAttribute('src');
        closeImgSRC.value = 'img/CloseButton.png';
        let closeImgWidth = document.createAttribute('width');
        closeImgWidth.value = '50px';
        closeImg.setAttributeNode(closeImgSRC);
        closeImg.setAttributeNode(closeImgWidth);
        button1Node.setAttributeNode(button1Type);
        button1Node.setAttributeNode(button1Class);
        button1Node.setAttributeNode(button1DataDismiss);
        button1Node.appendChild(closeImg);
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

        let row1Node = document.createElement('div');
        let row1NodeClass = document.createAttribute('class');
        row1NodeClass.value = 'row';
        row1Node.setAttributeNode(row1NodeClass);
        let row1Col1Node = document.createElement('div');
        let row1Col1NodeClass = document.createAttribute('class');
        row1Col1NodeClass.value = 'col';
        row1Col1Node.setAttributeNode(row1Col1NodeClass);
        let row1Col1TextNode = document.createTextNode('TEST TEST TEST');
        row1Col1Node.appendChild(row1Col1TextNode);
        let row1Col2Node = document.createElement('div');
        let row1Col2NodeClass = document.createAttribute('class');
        row1Col2NodeClass.value = 'col';
        row1Col2Node.setAttributeNode(row1Col2NodeClass);

        let img1Node = document.createElement('img');
        let img1Class = document.createAttribute('class');
        img1Class.value = 'img-fluid';
        let img1SRC = document.createAttribute('src');
        img1SRC.value = 'img/SP/CartmanDollarSigns.png';
        img1Node.setAttributeNode(img1Class);
        img1Node.setAttributeNode(img1SRC);

        row1Node.append(row1Col1Node);
        row1Node.append(row1Col2Node);
        row1Col2Node.appendChild(img1Node);
        div6Node.appendChild(row1Node);

        anchorNode.appendChild(div1Node);
    }
}