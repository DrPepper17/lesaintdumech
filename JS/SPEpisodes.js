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
        20,"1997-08-27",false,102,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone',0.72,false,['Kathie Lee Gifford','Geraldo Rivera'],['Kari Turner'],'Mr. Garrison starts the day off with a special announcement; one of South Park\'s own has won a national essay contest. Everyone is shocked to learn that the winner is Cartman, who doesn\'t even remember what he wrote about.','img/SP/SPE102.jpeg',7.5
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
    [false,14,2,1,'Terrance and Phillip in Not Without My Anus',
        20,"1998-04-01",false,201,false,'TV-MA','Trey Parker','Trey Parker & Trisha Nixon',3.25,false,['Saddam Hussein','Celine Dion','Jerry Springer'],false,'The show starts off with the build up from last season \"cliffhanger revolving around Cartman\" paternal origins. However just as it seems they are about to get on with the second half of Cartman\'s Mom Is A Dirty Slut they do a 180 degree turn-around and reveal that for April Fool\'s Day they will be showing Terrance & Phillip in Not Without My Anus.','https://static.wikia.nocookie.net/southpark/images/2/2c/201.jpg/revision/latest/scale-to-width-down/1000?cb=20170401011022',6.2
    ],
    [false,15,2,2,'Cartman\'s Mom Is Still a Dirty Slut',
        21,"1998-04-22",false,202,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',4.00,false,['Bill Clinton','Eric Roberts','John Walsh'],false,'Cartman finds out the identity of his father. And boy is he in for a surprise.','https://static.wikia.nocookie.net/southpark/images/8/86/202.jpg/revision/latest/scale-to-width-down/1000?cb=20160410151002',8.2
    ],
    [false,16,2,3,'Ike\'s Wee Wee',
        22,"1998-05-20",false,204,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,false,false,'Ike\'s going to have a Briss and everyone is invited! Stan Kenny and Cartman find out what a Briss really is and try to warn Kyle that his parents are going to cut off Ike\'s wee wee. Kyle sends Ike away to protect him from his scissor wielding parents.','https://static.wikia.nocookie.net/southpark/images/f/f1/204.jpg/revision/latest/scale-to-width-down/1000?cb=20160410151732',8.0
    ],
    [false,17,2,4,'Chickenlover',
        22,"1998-05-27",false,203,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.71,false,false,false,'The Booktastic bus is in town and soon everyone finds out that Officer Barbrady can, Aôt read. He is whisked off to school with the boys so he can save his job. While he\'s there someone in South Park is having sex with the town\'s chickens and only Officer Barbrady with his new deputies Kenny Kyle Stan and Cartman can stop them!','https://static.wikia.nocookie.net/southpark/images/3/3d/Chickenlover81.png/revision/latest/scale-to-width-down/1000?cb=20210328152324',8.0
    ],
    [false,18,2,5,'Conjoined Fetus Lady',
        22,"1998-06-03",false,205,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.57,false,false,false,'Kyle is injured and must go to see the school nurse and is terrified because of the stories he\'s heard. She looks fairly normal except for the dead fetus sticking out of her head. Kyle\'s mother educates the boys on her condition and decides that everyone in South Park should be made aware. Meanwhile the South Park Cows dodgeball team goes to the state national and finally the international finals in China.','https://static.wikia.nocookie.net/southpark/images/4/4a/205.jpg/revision/latest/scale-to-width-down/1000?cb=20160410152422',7.6
    ],
    [false,19,2,6,'The Mexican Staring Frog of Southern Sri Lanka',
        22,"1998-06-10",false,206,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.57,false,['Saddam Hussein','Bob Denver'],false,'Mr. Garrison assigns the boys learn out about Vietnam from somebody they know. Stan\'s Uncle Jimbo and his friend Ned tell the boys their outrageous tale. Mr. Garrison doesn\'t believe the boy\'s report and gives them detention. They plot revenge against Stan\'s Uncle by submitting a phony video of the Mexican Staring Frog of Southern Sri Lanka to them.','https://static.wikia.nocookie.net/southpark/images/6/6e/MexicanStaringFrog15.png/revision/latest/scale-to-width-down/1000?cb=20210329121322',7.5
    ],
    [false,20,2,7,'City on the Edge of Forever',
        22,"1998-06-17",false,207,'Flashbacks','TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',3.06,false,['Carrot Top','Jay Leno'],['Jay Leno','Brent Musburger','Henry Winkler'],'While their school bus is dangling on the edge of a cliff the boys remember some of their past adventures. Mrs. Crabtree catches a ride into town with a stranger and winds up doing a brief stint as a standup comedienne. Back in South Park Mr. Mackey convinces the parents that their missing children must have run away. In the end it\'s all a dream within a dream.','https://static.wikia.nocookie.net/southpark/images/9/9d/CityontheEdgeofForever13.png/revision/latest/scale-to-width-down/1000?cb=20210329123826',7.2
    ],
    [false,21,2,8,'Summer Sucks',
        22,"1998-06-24",false,208,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.53,false,['Brett Favre','Shari Lewis','Lambchop'],['Jonathan Katz'],'Schools out for summer and with Mr. Hat missing Mr.Garrison is over the edge. The state has a ban on the sale of fireworks and it screws up the boy\'s plans for a 4th of July celebration. Mr. Garrison seeks psychiatric help from Dr. Katz while Jimbo and Ned go to Mexico in an attempt to smuggle fireworks back to the children of America.','https://static.wikia.nocookie.net/southpark/images/3/33/SummerSucks69.png/revision/latest/scale-to-width-down/1000?cb=20210329131641',7.3
    ],
    [false,22,2,9,'Chef\'s Chocolate Salty Balls',
        22,"1998-08-19",false,209,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',3.26,false,['Fred Savage','Robert Redford','Tom Hanks','Andy Warhol','Bruce Willis','Fabio Lanzoni','Spike Lee'],false,'A film festival moves to South Park only to have a devastating effect on the sewer system. Mr. Hankey calls upon Kyle for help. The movie people interpret Kyle\'s pleading as a pitch and they quickly turn his story into a film starring Tom Hanks and a monkey they call Mr. Hankey. Kyle is outraged that the filmmakers aren\'t hearing his pleas. Soon Chef\'s Salty Chocolate Balls energizes everyone.','https://static.wikia.nocookie.net/southpark/images/c/ce/209.jpg/revision/latest/scale-to-width-down/1000?cb=20160411024525',7.5
    ],
    [false,23,2,10,'Chickenpox',
        22,"1998-08-26",false,210,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Trisha Nixon',3.07,false,false,false,'Cartman\'s mother plots to give the boys the chickenpox by sending them over to Kenny\'s for a sleepover. Both Stan and Cartman breakout but Kyle remains immune. Kyle discovers the parental conspiracy and with the other boys hires a prostitute to give their parents herpes. Meanwhile Kenny\'s mother and Kyle\'s mother reunite their husbands who were both childhood friends that drifted apart.','https://static.wikia.nocookie.net/southpark/images/0/0f/Chickenpox77.png/revision/latest/scale-to-width-down/1000?cb=20210330113726',7.9
    ],
    [false,24,2,11,'Roger Ebert Should Lay Off the Fatty Foods',
        22,"1998-09-02",false,211,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.56,false,['Buddy Ebsen'],false,'The kids go on a field trip to the planetarium. All of the children except Cartman are acting wierd. As usual Stan and Kyle with Kenny\'s sacrifice try to get to bottom of the mystery. Meanwhile Cartman wins an appearance on a snack commercial. The four boys get to the root of the strange planetarium.','https://static.wikia.nocookie.net/southpark/images/e/ec/RogerEbertShouldLayOfftheFattyFoods82.png/revision/latest/scale-to-width-down/1000?cb=20210330122524',7.5
    ],
    [false,25,2,12,'Clubhouses',
        22,"1998-09-23",false,212,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.57,false,false,false,'Stan needs to build a clubhouse so he and Kyle can play Truth or Dare with Wendy and her friend who has a crush on Kyle. Cartman and Kenny retaliate by building a clubhouse of their own; only theirs has hot chicks. Meanwhile the Marshes marriage breaks up and Stan learns a valuable lesson about love and family.','https://static.wikia.nocookie.net/southpark/images/5/5a/212.jpg/revision/latest/scale-to-width-down/1000?cb=20160411030321',7.9
    ],
    [false,26,2,13,'Cow Days',
        22,"1998-09-30",false,213,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.59,false,false,false,'South Park\'s annual Cow Days party is happening! The cows become transfixed on a cow statue. In order to get the money they need to win Terrance and Phillip dolls the boys sign Cartman up for a bull riding contest. A freak accident has Cartman believing he is a Vietnamese prostitute named Ming Li. The boys learn about money and cow insanity.','https://static.wikia.nocookie.net/southpark/images/f/fb/CowDays34.png/revision/latest/scale-to-width-down/1000?cb=20210330141906',7.5
    ],
    [false,27,2,14,'Chef Aid',
        22,"1998-10-07",false,214,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.13,false,['Johnnie Cochran','Alanis Morissette','Elton John','Joe Strummer','Les Claypool','Marilyn Manson','Meat Loaf','Ozzy Osbourne','PRIMUS','Rancid','Rick James','Ween'],['Elton John','DMX','Rick James','Meat Loaf','Ol\' Dirty Bastard','Ozzy Osbourne','Les Claypool','Tim Armstrong','Joe Strummer','The Crystal Method','Dean & Gene Ween'],'Chef is getting sued by Capitalist Records for trying to obtain the rights to a song he wrote twenty years ago. He needs 2 million dollars to hire Johnny Cochran. In response the boys round up all of Chef\'s old musician friends and organize a huge concert to raise the cash.','https://static.wikia.nocookie.net/southpark/images/2/27/214.jpg/revision/latest/scale-to-width-down/1000?cb=20160411031348',7.8
    ],
    [false,28,2,15,'Spookyfish',
        21,"1998-10-28",false,215,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,['Barbra Streisand'],false,'Sharon Marsh\'s Aunt Flo makes her monthly visit and she has present for Stan a fish. Stan\'s fish really freaks him out especially when the dead bodies start piling up. Mrs. Marsh is convinced Stan is doing the killings and begins hiding the bodies. The boys discover there are two Cartman, Aôs and a gateway to a parallel universe at the Indian Burial Ground Pet Store.','https://static.wikia.nocookie.net/southpark/images/5/57/Spookyfish27.png/revision/latest/scale-to-width-down/1000?cb=20210402163218',8.4
    ],
    [false,29,2,16,'Merry Christmas, Charlie Manson!',
        22,"1998-12-09",false,216,false,'TV-MA','Eric Stough','Trey Parker & Nancy M. Pimental',3.28,false,['Charles Manson','Donna Reed','Karolyn Grimes','Lionel Barrymore'],false,'Kyle Stan and Kenny accompany Eric and his family to a Christmas celebration with the Cartman family. One of Cartman\'s relatives breaks out of jail for the reunion with his cellmate Charles Manson.','https://static.wikia.nocookie.net/southpark/images/a/a6/MerryChristmasCharlieManson92.png/revision/latest/scale-to-width-down/1000?cb=20210407203514',8.1
    ],
    [false,30,2,17,'Gnomes',
        22,"1998-12-16",false,217,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Pam Brady',2.06,false,['Toto'],false,'Harbucks coffee plans to move into South Park and drive Tweek coffee shop out of business. Mr. Garrison assigns a report on current events to help him keep his job. The boys are planning on doing their report on the underpants gnomes. Tweek\'s father schemes to use the boy\'s report as a platform for fighting Harbucks. The report the boys deliver sparks the town into taking action.','https://static.wikia.nocookie.net/southpark/images/6/64/Gnomes27.png/revision/latest/scale-to-width-down/1000?cb=20210410152848',8.2
    ],
    [false,31,2,18,'Prehistoric Ice Man',
        22,"1999-01-20",false,218,false,'TV-MA','eric Stough','Trey Parker & Nancy M. Pimental',2.37,false,['Marilyn Manson','Steve Irwin'],false,'Kyle falls into a cave. Stan goes to rescue him and finds an iceman and the two fight each other for sole credit. Dr. Mephisto discovers that the iceman has been frozen since 1996. The iceman is put on display and the fighting Kyle and Stan free him. The iceman tries to return to his family but finds himself a man out of time. Meanwhile the government has their own plans to use the iceman in their plot against Sweden.','https://static.wikia.nocookie.net/southpark/images/3/3c/PrehistoricIceMan23.png/revision/latest/scale-to-width-down/1000?cb=20210410153606',7.8
    ],
    [false,32,3,1,'Rainforest Shmainforest',
        22,"1999-04-07",false,301,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker & Matt Stone',2.32,false,['Bruce Willis','Fred Savage','Spike Lee','Stevie Wonder'],['Jennifer Aniston'],'The boys are sent to the Costa Rican rainforest as a part of the Getting Gay with Kids choir tour.','https://static.wikia.nocookie.net/southpark/images/b/b7/RainforestShmainforest090.png/revision/latest/scale-to-width-down/1000?cb=20210404194456',8.4
    ],
    [false,33,3,2,'Spontaneous Combustion',
        22,"1999-04-14",false,302,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.29,false,['Nick Nolte','Whoopi Goldberg'],false,'When the citizens of South Park start exploding randomly, the mayor enlists Stan\'s dad, the resident geologist, to find a solution to the problem.','https://static.wikia.nocookie.net/southpark/images/7/7d/SpontaneousCombustion020.png/revision/latest/scale-to-width-down/1000?cb=20210404210804',8.1
    ],
    [false,34,3,3,'Succubus',
        22,"1999-04-21",false,303,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,false,false,'Chef finds the girl of his dreams, but the boys feel like they\'ve lost their best friend; all in exchange for a dollar amount of tree-fiddy.','https://static.wikia.nocookie.net/southpark/images/4/45/TheSuccubus073.png/revision/latest/scale-to-width-down/1000?cb=20210405201807',8.0
    ],
    [false,35,3,4,'Jakovasaurs',
        22,"1999-06-16",false,305,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.07,false,false,false,'The boys discover a prehistoric creature called a Jakovasaur while camping at Stark\'s Pond.','https://static.wikia.nocookie.net/southpark/images/f/f1/Jakovasaurs057.png/revision/latest/scale-to-width-down/1000?cb=20210405202125',6.4
    ],
    [false,36,3,5,'Tweek vs. Craig',
        22,"1999-06-23",false,304,false,'TV-MA','Trey Parker','Trey Parker',1.87,false,false,false,'The boys instigate a fight between Tweek and Craig in shop class. Meanwhile, Mr. Adler, the shop teacher, is haunted by a recurring dream of his lost love.','https://static.wikia.nocookie.net/southpark/images/5/52/TweekvsCraig061.png/revision/latest/scale-to-width-down/1000?cb=20210405202326',7.6
    ],
    [true,'MOVIE',false,false,'South Park: Bigger, Longer & Uncut',
        81,"1999-06-30",false,'MMM01',false,'R','Trey Parker','Trey Parker, Matt Stone & Pam Brady','~3',false,['Saddam Hussein','Bill Clinton','Bill Gates','Brian Dennehy','Conan O\'Brien','Winona Ryder','The Baldwins'],['George Clooney','Minnie Driver','Brent Spiner','Dave Foley','Eric Idle','Nick Rhodes'],'Stan, Kyle, Kenny and Cartman sneak into an R-rated movie and it warps their fragile little minds. Soon their indignant parents declare war on Canada and our young heroes are America\'s last hope to stop Armageddon.','https://static.wikia.nocookie.net/southpark/images/6/60/South_Park_-_Bigger%2C_Longer_%26_Uncut-1.png/revision/latest/scale-to-width-down/1000?cb=20120512163808',7.7
    ],
    [false,37,3,6,'Sexual Harassment Panda',
        22,"1999-07-07",false,306,false,'TV-MA','Eric Stough','Trey Parker',1.83,false,false,false,'After Sexual Harassment Panda "educates" the children, Cartman sues Stan for sexual harassment, and a flurry of other lawsuits follow.','https://static.wikia.nocookie.net/southpark/images/d/d1/306.jpg/revision/latest/scale-to-width-down/1000?cb=20160413142830',8.2
    ],
    [false,38,3,7,'Cat Orgy',
        22,"1999-07-14",false,307,false,'TV-MA','Trey Parker','Trey Parker',2.98,false,false,false,'While Shelly\'s babysitting Eric on the evening of the mysterious meteor shower, a wild and unsupervised kitty party breaks out at the Cartman home.','https://static.wikia.nocookie.net/southpark/images/1/18/307.jpg/revision/latest/scale-to-width-down/1000?cb=20160413143206',7.9
    ],
    [false,39,3,8,'Two Guys Naked in a Hot Tub',
        22,"1999-07-21",false,308,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.03,false,false,false,'Stan must save Mr. Mackey\'s meteor shower party from the ATF, while the South Park dads experiment in the hot tub.','https://static.wikia.nocookie.net/southpark/images/a/ac/308.jpg/revision/latest/scale-to-width-down/1000?cb=20160413143538',8.0
    ],
    [true,40,3,9,'Jewbilee',
        22,"1999-07-28",false,309,false,'TV-MA','Trey Parker','Trey Parker',1.93,false,false,false,'While the rest of South Park awaits the meteor shower, Kyle, Kenny and Ike head into the wilderness on a Jewbilee.','https://static.wikia.nocookie.net/southpark/images/8/8d/Jewbilee043.png/revision/latest/scale-to-width-down/1000?cb=20210405203339',7.4
    ],
    [false,41,3,10,'Korn\'s Groovy Pirate Ghost Mystery',
        22,"1999-10-27",false,312,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],'Korn helps the boys defeat Pirate Ghosts and mean fifth graders in this haunting Halloween episode.','https://static.wikia.nocookie.net/southpark/images/3/37/KornsGroovyPirateGhostMys016.png/revision/latest/scale-to-width-down/1000?cb=20210405204126',7.7
    ],
    [false,42,3,11,'Chinpokomon',
        22,"1999-11-03",false,310,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.36,false,['Bill Clinton','Emperor Hirohito'],false,'South Park kids go crazy for Chinpokomon and suddenly find themselves fixated on Peal Harbor.','https://static.wikia.nocookie.net/southpark/images/3/32/Chinpokomon039.png/revision/latest/scale-to-width-down/1000?cb=20210405205322',8.7
    ],
    [false,43,3,12,'Hooked on Monkey Fonics',
        22,"1999-11-10",false,313,false,'TV-MA','Trey Parker','Trey Parker',2.05,false,['Ronnie James Dio'],false,'The boys compete against some home schooled kids in South Park\'s annual spelling bee.','https://static.wikia.nocookie.net/southpark/images/4/40/HookedOnMonkeyFonics072.png/revision/latest/scale-to-width-down/1000?cb=20210405210130',8.0
    ],
    [false,44,3,13,'Starvin\' Marvin in Space',
        21,"1999-11-17",false,311,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Kyle McCulloch',2.99,false,['Sally Struthers'],false,'When Starvin\' Marvin returns to South Park in an alien spaceship, enlisting the boys join him on a mission to find a new home for his starving people but winds up pursued by the CIA, the Feed the ChildrenFoundation and Sally Struthers.','https://static.wikia.nocookie.net/southpark/images/b/b5/StarvinMarvininSpace083.png/revision/latest/scale-to-width-down/1000?cb=20210405211246',8.0
    ],
    [false,45,3,14,'The Red Badge of Gayness',
        20,"1999-11-24",false,314,false,'TV-MA','Trey Parker','Trey Parker',1.94,false,['Bill Clinton','Al Gore'],false,'Fueled on Jagerminz S\'more Flavored Schnapps, Cartman has visions of glory as he suits up for the Confederacy in the annual reenactment of a Civil War battle, and leads the drunken rebels to finally defeat the union 134 years too late.','https://static.wikia.nocookie.net/southpark/images/a/aa/TheRedBadgeOfGayness094.png/revision/latest/scale-to-width-down/1000?cb=20210405211929',8.3
    ],
    [true,46,3,15,'Mr. Hankey\'s Christmas Classics',
        22,"1999-12-01",false,315,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Adolf Hitler','Alois and Klara Hitler','Diana, Princess of Wales','Gene Siskel','Genghis Khan','Jimmy Stewart','Michael Landon','Mao Zedong','John F. Kennedy & John F. Kennedy Jr'],false,'In an extravaganza of holiday joy comes the Classic hits from " Mr. Hankey\'s Christmas Classics" album - featuring the boys and all of South Park\'s most exuberant citizens.','https://static.wikia.nocookie.net/southpark/images/1/13/315.jpg/revision/latest/scale-to-width-down/1000?cb=20160413181446',7.2
    ],
    [false,47,3,16,'Are You There God? It\'s Me, Jesus',
        20,"1999-12-29",false,316,false,'TV-MA','Eric Stough','Trey Parker',2.13,false,['Rod Stewart'],false,'Stan goes through a few rapidly wrong hormonal changes, meanwhile people from all over the world start to gather outside Jesus\' house waiting for a millennium miracle.','https://static.wikia.nocookie.net/southpark/images/3/3b/AreYouThereGodItsMeJesus033.png/revision/latest/scale-to-width-down/1000?cb=20210406091849',7.8
    ],
    [false,48,3,17,'World Wide Recorder Concert',
        22,"2000-01-12",false,317,'The Brown Noise','TV-MA','Eric Stough','Trey Parker',2.57,false,['Yoko Ono','Kenny G'],false,'The children of South Park are invited to Arkansas for the "Four Million Child Blow 2000", the first worldwide recorder concert.','https://static.wikia.nocookie.net/southpark/images/7/73/WorldwideRecorderConcert034.png/revision/latest/scale-to-width-down/1000?cb=20210406094123',8.1
    ],
    [false,49,4,1,'The Tooth Fairy\'s Tats',
        22,"2000-04-05",false,402,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',2.38,false,false,['Richard Belzer'],'Cartman masterminds a Tooth Fairy scam by appropriating teeth from less fortunate children.','https://static.wikia.nocookie.net/southpark/images/c/c4/TheToothFairyTats2000078.png/revision/latest/scale-to-width-down/1000?cb=20200202190225',8.2
    ],
    [false,50,4,2,'Cartman\'s Silly Hate Crime',
        20,"2000-04-12",false,401,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.62,false,false,false,'Cartman gets himself sentenced to juvee hall, and without his weight to anchor the sled, the boys have no hope of winning the race against the girls.','https://static.wikia.nocookie.net/southpark/images/f/f4/S4E2-Thumbnail.png/revision/latest/scale-to-width-down/1000?cb=20210125162052',8.6
    ],
    [false,51,4,3,'Timmy',
        21,"2000-04-19",false,404,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,['Phil Collins','Christina Aguilera'],false,'Timmy parlays his ADD handicap into a heavy metal rock band gig; meanwhile, the boys try to contract ADD, too, so they can get out of class.','https://static.wikia.nocookie.net/southpark/images/7/78/Timmy2000021.png/revision/latest/scale-to-width-down/1000?cb=20200217162303',8.1
    ],
    [false,52,4,4,'Quintuplets',
        20,"2000-04-26",false,403,'Contorting Quintuplets','TV-MA','Trey Parker','Trey Parker',1.81,false,['Janet Reno'],false,'When a family of quintuplets takes up residence in South Park the ensuing media circus fame drives Kenny,Aôs mom to plan a multiple birth of her own.','https://static.wikia.nocookie.net/southpark/images/8/8e/Quintuplets071.png/revision/latest/scale-to-width-down/1000?cb=20210403005132',7.3
    ],
    [false,53,4,5,'Cartman Joins NAMBLA',
        22,"2000-06-21",false,406,false,'TV-MA','Eric Stough','Trey Parker',1.82,false,false,false,'Cartman\'s newfound maturity forces him to seek out more mature friends on-line; meanwhile, Kenny actively tries to prevent his parent\'s from having another welfare baby.','https://static.wikia.nocookie.net/southpark/images/0/02/CartmanJoinsNAMBLA015.png/revision/latest/scale-to-width-down/1000?cb=20210403030721',9.0
    ],
    [false,54,4,6,'Cherokee Hair Tampons',
        20,"2000-06-28",false,407,false,'TV-MA','Trey Parker','Trey Parker',1.72,false,false,['Tommy Chong','Cheech Marin'],'Kyle needs a kidney transplant and Cartman is discovered to be the perfect donor. Cartman gladly offers his kidney to Kyle—for the price of $10 million dollars.','https://static.wikia.nocookie.net/southpark/images/f/f8/CherokeeHairTampons039.png/revision/latest/scale-to-width-down/1000?cb=20210403031210',8.0
    ],
    [false,55,4,7,'Chef Goes Nanners',
        22,"2000-07-05",false,408,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.45,false,['Russell Crowe'],false,'Chef\'s passionate protest against the South Park Flag enflames the town; meanwhile, Wendy finds herself strangely attracted to Cartman.','https://static.wikia.nocookie.net/southpark/images/4/43/ChefGoesNanners039.png/revision/latest/scale-to-width-down/1000?cb=20210403031403',8.2
    ],
    [false,56,4,8,'Something You Can Do with Your Finger',
        22,"2000-07-12",false,409,false,'TV-MA','Trey Parker','Trey Parker',1.81,false,false,false,'"Fingerbang" is the newest boy band starring all the boys and it\'s also Cartman\'s latest scheme to make a million dollars and all the folks in town are lining up to audition for the privilege of being its fifth member.','https://static.wikia.nocookie.net/southpark/images/9/90/SomethingYouCanDoWithYourFinger066.png/revision/latest/scale-to-width-down/1000?cb=20210403031519',8.0
    ],
    [false,57,4,9,'Do The Handicapped Go To Hell',
        20,"2000-07-19",false,410,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,['Saddam Hussein','Gene Siskel','Pope John Paul II','Walter Matthau','Adolf Hitler','Allen Ginsberg','Conan O\'Brien','Dean Martin','Diana, Princess of Wales','Frank Sinatra','George Burns','Jerry Garcia','John F. Kennedy & John F. Kennedy Jr.','Mao Zedong','Tiny Tim','Michael Landon'],false,'While the boys race to make their first Confession and Holy Communion, Saddam Hussein returns to the underworld to rekindle his relationship with his former lover, Satan, the prince of darkness.','https://static.wikia.nocookie.net/southpark/images/1/18/S4E9-Thumbnail.png/revision/latest/scale-to-width-down/1000?cb=20231123020642',8.3
    ],
    [false,58,4,10,'Probably',
        22,"2000-07-26",false,411,false,'TV-MA','Trey Parker','Trey Parker',2.01,false,['Saddam Hussein','Henry Winkler'],false,'Cartman\'s flock begins to grow and the children begin plans to build him a Church. Meanwhile, Satan is torn between two lovers: his new boyfriend, Chris, and his ex, Saddam Hussein; meanwhile, Cartman becomes an evangelist as he and the boys try to assure their places in heaven.','https://static.wikia.nocookie.net/southpark/images/7/7b/Probably015.png/revision/latest/scale-to-width-down/1000?cb=20210403155048',8.2
    ],
    [false,59,4,11,'Fourth Grade',
        21,"2000-11-08",false,412,false,'TV-MA','Trey Parker','Trey Parker',3.6,false,false,false,'Fearing their new 4th grade teacher, the kids build a time machine out of Timmy\'s wheelchair to travel back to a happier, easier school year.','https://static.wikia.nocookie.net/southpark/images/c/c6/S4E11-Thumbnail.png/revision/latest/scale-to-width-down/1000?cb=20210124234313',8.1
    ],
    [false,60,4,12,'Trapper Keeper',
        20,"2000-11-15",false,413,false,'TV-MA','Trey Parker','Trey Parker',3.27,false,['Jesse Jackson','Rosie O\'Donnell'],false,'When Cartman finally stops bragging about his new Trapper Keeper, a stranger informs him that it will eventually take over the world and destroy humankind, if they do not destroy it first.','https://static.wikia.nocookie.net/southpark/images/8/8a/TrapperKeeper071.png/revision/latest/scale-to-width-down/1000?cb=20210403163515',8.0
    ],
    [false,61,4,13,'Helen Keller The Musical',
        20,"2000-11-22",false,414,false,'TV-MA','Trey Parker','Trey Parker',3.51,false,false,false,'When Butters informs the fourth graders that the kindergartners\' school play is a magnificent sight to behold, they go through a lot of pain to make sure they beat the tiny tots\' show.','https://static.wikia.nocookie.net/southpark/images/9/9d/HelenKellerTheMusical082.png/revision/latest/scale-to-width-down/1000?cb=20210403172517',7.7
    ],
    [false,62,4,14,'Pip',
        20,"2000-11-29",false,405,'Great Expectations','TV-MA','Eric Stough','Trey Parker',2.39,false,false,['Malcolm McDowell'],'South Park Classics presents a rendition of "Great Expectations" starring Pip, as the antihero who takes on the bitter Ms. Haversham and robotic monkeys in his attempt to win Estella\'s heart.','https://static.wikia.nocookie.net/southpark/images/1/16/S4Pip-Thumbnail.png/revision/latest/scale-to-width-down/1000?cb=20210125170645',6.6
    ],
    [false,63,4,15,'Fat Camp',
        20,"2000-12-06",false,415,false,'TV-MA','Trey Parker','Trey Parker',2.31,false,['Howard Stern','Johnny Knoxville'],false,'Cartman\'s family and friends have intervened and are forcing him to trim down. While Cartman\'s away, Kenny\'s star is on the rise when he gets his own reality TV show.','https://static.wikia.nocookie.net/southpark/images/5/52/FatCamp032.png/revision/latest/scale-to-width-down/1000?cb=20210404093124',8.4
    ],
    [false,64,4,16,'The Wacky Molestation Adventure',
        20,"2000-12-13",false,416,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,['Fidel Castro'],false,'When Kyle\'s parents forbid him to see his favorite rock band in concert, Kyle accuses them of an unspeakable indiscretion and has them sent to the big house.','https://static.wikia.nocookie.net/southpark/images/1/1b/TheWackyMolestationAdventure081.png/revision/latest/scale-to-width-down/1000?cb=20210404095011',8.7
    ],
    [false,65,4,17,'A Very Crappy Christmas',
        20,"2000-12-20",false,417,false,'TV-MA','Adrien Beard','Trey Parker',2.3,false,false,['Louis Price'],'Now that Mr. Hankey\'s all tied up with the new wife and kids, it\'s up to the boys and a video Christmas card to save the spirit of the season.','https://static.wikia.nocookie.net/southpark/images/7/78/S4E16-Thumbnail.png/revision/latest/scale-to-width-down/1000?cb=20210125003917',7.4
    ],
    [false,66,5,1,'It Hits the Fan'//,
        //20,"2001-06-20",false,502,false,'TV-MA','Trey Parker','Trey Parker',2.1,false,Celebrities,Guests,'Synopsis','photo',8.3
    ],
    [false,67,5,2,'Cripple Fight'//,
        //21,"2001-06-27",false,503,false,'TV-MA','Trey Parker','Trey Parker',1.78,false,Celebrities,Guests,'Synopsis','photo',8.3
    ],
    ['BLOCKED',68,5,3,'Super Best Friends',
        22,"2001-07-04",false,504,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,['Muhammad','David Blaine','George W Bush','Laura Bush','Karl Rove','Joseph Smith'],false,'Stan, Kyle, Cartman and Kenny discover David Blaine, magician and cult leader, performing in the streets of South Park. Stan finds out early that the Blainiacs are not as nice as everyone thinks. He tries to convince the other boys they have been brainwashed, but they have forsaken their friends and families. Teaming up with Jesus, Stan calls upon all the Super Best Friends to destroy the magician and thwart the mass suicide pact he has launched.','https://static.wikia.nocookie.net/southpark/images/1/1a/Super_Best_Friends_Current.png/revision/latest/scale-to-width-down/1000?cb=20220920010336',8.2
    ],
    [true,69,5,4,'Scott Tenorman Must Die'//,
        //20,"2001-07-11",false,501,false,'TV-MA',''Eric Stough'','Trey Parker',1.88,false,Celebrities,Guests,'Synopsis','photo',9.6
    ],
    [false,70,5,5,'Terrance and Phillip: Behind the Blow'//,
        //21,"2001-07-18",false,505,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,Celebrities,Guests,'Synopsis','photo',6.9
    ],
    [false,71,5,6,'Cartmanland'//,
        //21,"2001-07-25",false,506,false,'TV-MA','Trey Parker','Trey Parker',3.09,false,Celebrities,Guests,'Synopsis','photo',8.9
    ],
    [false,72,5,7,'Proper Condom Use'//,
        //22,"2001-08-01",false,507,false,'TV-MA','Trey Parker','Trey Parker',2.45,false,Celebrities,Guests,'Synopsis','photo',8.6
    ],
    [false,73,5,8,'Towelie'//,
        //22,"2001-08-08",false,508,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,Celebrities,Guests,'Synopsis','photo',8.3
    ],
    [false,74,5,9,'Osama bin Laden Has Farty Pants'//,
        //20,"2001-11-07",false,509,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,Celebrities,Guests,'Synopsis','photo',7.8
    ],
    [false,75,5,10,'How to Eat with Your Butt'//,
        //20,"2001-11-14",false,510,false,'TV-MA','Trey Parker','Trey Parker',3.16,false,Celebrities,Guests,'Synopsis','photo',8.0
    ],
    [false,76,5,11,'The Entity'//,
        //20,"2001-11-21",false,511,false,'TV-MA','Trey Parker','Trey Parker',2.3,false,Celebrities,Guests,'Synopsis','photo',8.2
    ],
    [false,77,5,12,'Here Comes the Neighborhood'//,
        //22,"2001--11-28",false,512,false,'TV-MA','Eric Stough','Trey Parker',3.03,false,Celebrities,Guests,'Synopsis','photo',8.0
    ],
    [false,78,5,13,'Kenny Dies'//,
        //20,"2001-12-05",false,513,false,'TV-MA','Trey Parker','Trey Parker',2.66,false,Celebrities,Guests,'Synopsis','photo',8.8
    ],
    [false,79,5,14,'Butters\' Very Own Episode'//,
        //22,"2001-12-12",false,514,false,'TV-MA','Eric Stough','Trey Parker',2.63,false,Celebrities,Guests,'Synopsis','photo',9.0
    ],
    [false,80,6,1,'Jared Has Aides'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,81,6,2,'Asspen'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,82,6,3,'Freak Strike'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,83,6,4,'Fun with Veal'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,84,6,5,'The New Terrance and Phillip Movie Trailer'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,85,6,6,'Professor Chaos'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,86,6,7,'Simpsons Already Did It'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,87,6,8,'Red Hot Catholic Love'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,88,6,9,'Free Hat'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,89,6,10,'Bebe\'s Boobs Destroy Society'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,90,6,11,'Child Abduction Is Not Funny'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,91,6,12,'A Ladder to Heaven'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,92,6,13,'The Return of the Fellowship of the Ring to the Two Towers'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,93,6,14,'The Death Camp of Tolerance'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,94,6,15,'The Biggest Douche in the Universe'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,95,6,16,'My Future Self \'n\' Me'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,96,6,17,'Red Sleigh Down'//,
        //runtime,"2002-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,97,7,1,'Cancelled'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,98,7,2,'Krazy Kripples'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,99,7,3,'Toilet Paper'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,100,7,4,'I\'m a Little Bit Country'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,101,7,5,'Fat Butt and Pancake Head'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,102,7,6,'Lil\' Crime Stoppers'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,103,7,7,'Red Man\'s Greed'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,104,7,8,'South Park Is Gay!'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,105,7,9,'Christian Rock Hard'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,106,7,10,'Grey Dawn']//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ,
    [false,107,7,11,'Casa Bonita'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,108,7,12,'All About Mormons'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,109,7,13,'Butt Out'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,110,7,14,'Raisins'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,111,7,15,'It\'s Christmas in Canada'//,
        //runtime,"2003-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,112,8,1,'Good Times with Weapons'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,113,8,2,'Up the Down Steroid'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,114,8,3,'The Passion of the Jew',
        22,"2004-03-31-",false,804,false,'TV-MA','Trey Parker','Trey Parker',4.43,false,['Mel Gibson'],false,'Kyle finally sees the blockbuster movie "The Passion of the Christ" and admits that Cartman has been right about the Jewish people all along.','https://static.wikia.nocookie.net/southpark/images/7/7e/POTJ79.png/revision/latest/scale-to-width-down/1000?cb=20210220063032',8.6
    ],
    [false,115,8,4,'You Got F\'d in the A'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,116,8,5,'Awesom-O'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,117,8,6,'The Jeffersons'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,118,8,7,'Goobacks'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,119,8,8,'Douche and Turd'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,120,8,9,'Something Wall-Mart This Way Comes'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,121,8,10,'Preschool'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,122,8,11,'Quest for Ratings'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,123,8,12,'Stupid Spoiled Whore Video Playset'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,124,8,13,'Cartman\'s Incredible Gift'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,125,8,14,'Woodland Critter Christmas'//,
        //runtime,"2004-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,126,9,1,'Mr. Garrison\'s Fancy New Vagina'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,127,9,2,'Die Hippie, Die'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,128,9,3,'Wing'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,129,9,4,'Best Friends Forever'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,130,9,5,'The Losing Edge'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,131,9,6,'The Death of Eric Cartman'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,132,9,7,'Erection Day'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,133,9,8,'Two Days Before the Day After Tomorrow'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,134,9,9,'Marjorine'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,135,9,10,'Follow That Egg!'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,136,9,11,'Ginger Kids'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,137,9,12,'Trapped in the Closet'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,138,9,13,'Free Willzyx'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,139,9,14,'Bloody Mary'//,
        //runtime,"2005-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,140,10,1,'The Return of Chef'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,141,10,2,'Smug Alert!'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,142,10,3,'Cartoon Wars Part I'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,143,10,4,'Cartoon Wars Part II'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,144,10,5,'A Million Little Fibers'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,145,10,6,'ManBearPig'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,146,10,7,'Tsst'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,147,10,8,'Make Love, Not Warcraft'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,148,10,9,'Mystery of the Urinal Deuce'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,149,10,10,'Miss Teacher Bangs a Boy'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,150,10,11,'Hell on Earth 2006'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,151,10,12,'Go God Go'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,152,10,13,'Go God Go XII'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,153,10,14,'Stanley\'s Cup'//,
        //runtime,"2006-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,154,11,1,'With Apologies to Jesse Jackson'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,155,11,2,'Cartman Sucks'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,156,11,3,'Lice Capades'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,157,11,4,'The Snuke'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,158,11,5,'Fantastic Easter Special'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,159,11,6,'D-Yikes!'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,160,11,7,'Night of the Living Homeless'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,161,11,8,'Le Petit Tourette'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,162,11,9,'More Crap'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,163,11,10,'Imaginationland Episode I'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,164,11,11,'Imaginationland Episode II'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,165,11,12,'Imaginationland Episode III'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,166,11,13,'Guitar Queer-O'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,167,11,14,'The List'//,
        //runtime,"2007-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,168,12,1,'Tonsil Trouble'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,169,12,2,'Britney\'s New Look'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,170,12,3,'Major Boobage'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,171,12,4,'Canada on Strike'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,172,12,5,'Eek, a Penis!'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,173,12,6,'Over Logging'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,174,12,7,'Super Fun Time'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,175,12,8,'The China Probrem'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,176,12,9,'Breast Cancer Show Ever'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,177,12,10,'Pandemic'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,178,12,11,'Pandemic 2: The Startling'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,179,12,12,'About Last Night...'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,180,12,13,'Elementary School Musical'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,181,12,14,'The Ungroundable'//,
        //runtime,"2008-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,182,13,1,'The Ring'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,183,13,2,'The Coon'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,184,13,3,'Margaritaville'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,185,13,4,'Eat, Pray, Queef'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,186,13,5,'Fishsticks'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,187,13,6,'Pinewood Derby'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,188,13,7,'Fatbeard'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,189,13,8,'Dead Celebrities'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,190,13,9,'Butters\' Bottom Bitch'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,191,13,10,'W.T.F.'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,192,13,11,'Whale Whores'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,193,13,12,'The F Word'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,194,13,13,'Dances with Smurfs'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,195,13,14,'Pee'//,
        //runtime,"2009-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,196,14,1,'Sexual Healing'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,197,14,2,'The Tale of Scrotie McBoogerballs'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,198,14,3,'Medicinal Fried Chicken'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,199,14,4,'You Have 0 Friends'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    ['BLOCKED',200,14,5,'200'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    ['BLOCKED',201,14,6,'201'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,202,14,7,'Crippled Summer'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,203,14,8,'Poor and Stupid'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,204,14,9,'It\'s a Jersey Thing'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,205,14,10,'Insheeption'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,206,14,11,'Coon 2: Hindsight'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,207,14,12,'Mysterion Rises'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,208,14,13,'Coon vs. Coon and Friends'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,209,14,14,'Cr\u00E8me Fra\u00EEche'//,
        //runtime,"2010-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,210,15,1,'HumancentiPad'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,211,15,2,'Funnybot'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,212,15,3,'Royal Pudding'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,213,15,4,'T.M.I.'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,214,15,5,'Crack Baby Athletic Association'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,215,15,6,'City Sushi'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,216,15,7,'You\'re Getting Old'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,217,15,8,'Ass Burgers'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,218,15,9,'The Last of the Meheecans'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,219,15,10,'Bass to Mouth'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,220,15,11,'Broadway Bro Down'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,221,15,12,'1\u0025'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,222,15,13,'A History Channel Thanksgiving'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,223,15,14,'The Poor Kid'//,
        //runtime,"2011-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,224,16,1,'Reverse Cowgirl'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,225,16,2,'Cash for Gold'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,226,16,3,'Faith Hilling'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,227,16,4,'Jewpacabra'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,228,16,5,'Butterballs'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,229,16,6,'I Should Have Never Gone Ziplining'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,230,16,7,'Cartman Finds Love'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,231,16,8,'Sarcastaball'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,232,16,9,'Raising the Bar'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,233,16,10,'Insecurity'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,234,16,11,'Going Native'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,235,16,12,'A Nightmare on FaceTime'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,236,16,13,'A Scause for Applause'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,237,16,14,'Obama Wins!'//,
        //runtime,"2012-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,238,17,1,'Let Go, Let Gov'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,239,17,2,'Informative Murder Porn'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,240,17,3,'World War Zimmerman'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,241,17,4,'Goth Kids 3: Dawn of the Posers'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,242,17,5,'Taming Strange'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,243,17,6,'Ginger Cow'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,244,17,7,'Black Friday'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,245,17,8,'A Song of Ass and Fire'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,246,17,9,'Titties and Dragons'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,247,17,10,'The Hobbit'//,
        //runtime,"2013-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,248,18,1,'Go Fund Yourself'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,249,18,2,'Gluten Free Ebola'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,250,18,3,'The Cissy'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,251,18,4,'Handicar'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,252,18,5,'The Magic Bush'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,253,18,6,'Freemium Isn\'t Free'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,254,18,7,'Grounded Vindaloop'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,255,18,8,'Cock Magic'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,256,18,9,'\u0023REHASH'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,257,18,10,'\u0023HappyHolograms'//,
        //runtime,"2014-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,258,19,1,'Stunning and Brave'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,259,19,2,'Where My Country Gone?'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,260,19,3,'The City Part of Town'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,261,19,4,'You\'re Not Yelping'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,262,19,5,'Safe Space'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,263,19,6,'Tweek x Craig'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,264,19,7,'Naughty Ninjas'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,265,19,8,'Sponsored Content'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,266,19,9,'Truth and Advertising'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,267,19,10,'PC Principal Final Justice'//,
        //runtime,"2015-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,268,20,1,'Member Berries'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,269,20,2,'Skank Hunt'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,270,20,3,'The Damned'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,271,20,4,'Wieners Out'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,272,20,5,'Douche and a Danish'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,273,20,6,'Fort Collins'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,274,20,7,'Oh, Jeez'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,275,20,8,'Members Only'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,276,20,9,'Not Funny'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,277,20,10,'The End of Serialization as We Know It'//,
        //runtime,"2016-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,278,21,1,'White People Renovating Houses'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,279,21,2,'Put It Down'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,280,21,3,'Holiday Special'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,281,21,4,'Franchise Prequel'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,282,21,5,'Hummels \u0026 Heroin'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,283,21,6,'Sons a Witches'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,284,21,7,'Doubling Down'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,285,21,8,'Moss Piglets'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,286,21,9,'Super Hard PCness'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,287,21,10,'Splatty Tomato'//,
        //runtime,"2017-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,288,22,1,'Dead Kids'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,289,22,2,'A Boy and a Priest'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,290,22,3,'The Problem with a Poo'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,291,22,4,'Tegridy Farms'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,292,22,5,'The Scoots'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,293,22,6,'Time to Get Cereal'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,294,22,7,'Nobody Got Cereal?'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,295,22,8,'Buddha Box'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,296,22,9,'Unfulfilled'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,297,22,10,'Bike Parade'//,
        //runtime,"2018-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,298,23,1,'Mexican Joker'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,299,23,2,'Band in China'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,300,23,3,'Shots!!!'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,301,23,4,'Let Them Eat Goo'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,302,23,5,'Tegridy Farms Halloween Special'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,303,23,6,'Season Finale'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,304,23,7,'Board Girls'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,305,23,8,'Turd Burglars'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,306,23,9,'Basic Cable'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,307,23,10,'Christmas Snow'//,
        //runtime,"2019-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,308,24,1,'The Pandemic Special',48,"2020-09-30",false,2401],
    [true,309,24,2,'South ParQ Vaccination Special',47,"2021-03-10",false,2402],
    [false,310,false,false,'South Park: Post COVID',59,"2021-11-25",true,2403],
    [false,311,false,false,'South Park: Post COVID: The Return of COVID',62,"2021-12-16",true,2404],
    [false,312,25,1,'Pajama Day'//,
        //runtime,"2022-",false,2501,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,313,25,2,'The Big Fix'//,
        //runtime,"2022-",false,2502,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,314,25,3,'City People'//,
        //runtime,"2022-",false,2503,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,315,25,4,'Back to the Cold War'//,
        //runtime,"2022-",false,2504,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,316,25,5,'Help, My Teenager Hates Me!'//,
        //runtime,"2022-",false,2505,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,317,25,6,'Credigree Weed St. Patrick\'s Day Special'//,
        //runtime,"2022-",false,2506,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [false,318,false,false,'South Park: The Streaming Wars',50,"2022-06-01",true,'SPC2507'],
    [false,319,false,false,'South Park: The Streaming Wars Part 2',47,"2022-07-13",true,'SPC2508'],
    [true,320,26,1,'Cupid Ye'//,
        //runtime,"2023-",false,2601,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,321,26,2,'The Worldwide Privacy Tour'//,
        //runtime,"2023-",false,2602,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,322,26,3,'Japanese Toilet'//,
        //runtime,"2023-",false,2603,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,323,26,4,'Deep Learning'//,
        //runtime,"2023-",false,2604,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,324,26,5,'DikinBaus Hot Dogs'//,
        //runtime,"2023-",false,2605,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,325,26,6,'Spring Break'//,
        //runtime,"2023-",false,2606,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,326,false,false,'South Park: Joining the Panderverse',49,"2023-10-27",true,'SPC2607'],
    [false,327,false,false,'South Park: (Not Suitable For Children)',47,"2023-12-20",true,'SPC2608'],
    [true,328,false,false,'South Park: The End of Obesity',50,"2024-10-24",true,'SPC2609'],
    [true,329,27,1,'Sermon on the Mount'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,330,27,2,'Got a Nut'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,331,27,3,'Sickofancy'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,332,27,4,'Wok is Dead'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,333,27,5,'Conflict of Interest'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,334,28,1,'Twisted Christian'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,335,28,2,'The Woman in the Hat'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,336,28,3,'Sora Not Sorry'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,337,28,4,'Turkey Trot'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ],
    [true,338,28,5,'The Crap Out'//,
        //runtime,"2025-",false,prodcode,false,'TV-MA','DirectedBy','WrittenBy',USViews,false,Celebrities,Guests,'Synopsis','photo',imdb
    ]
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
        if (array[i][0] == 'BLOCKED') {
            imgSRC.value = "img/SP/muhammad.png";
            imgClass.value="mr-2 my-1";
            imgHeight.value="50px";
        }
        else if (array[i][0]) {
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
        div4Class.value = 'modal-header bg-info text-white';
        div4Node.setAttributeNode(div4Class);
        div3Node.appendChild(div4Node);

        let modalTitleText = '';
        if (Number.isInteger(EPISODES[i][1])) {
            modalTitleText = '#'+EPISODES[i][1]+' - ';
        }
        modalTitleText = modalTitleText + EPISODES[i][4].toUpperCase();

        let h3_1Node = document.createElement('h3');
        let h3_1Class = document.createAttribute('class');
        h3_1Class.value = 'modal-title';
        h3_1Node.setAttributeNode(h3_1Class);
        let modalTitle = document.createTextNode(modalTitleText);
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
        closeImgWidth.value = '40px';
        closeImg.setAttributeNode(closeImgSRC);
        closeImg.setAttributeNode(closeImgWidth);
        button1Node.setAttributeNode(button1Type);
        button1Node.setAttributeNode(button1Class);
        button1Node.setAttributeNode(button1DataDismiss);
        button1Node.appendChild(closeImg);
        div4Node.appendChild(button1Node);

        let div5Node = document.createElement('div');
        let div5Class = document.createAttribute('class');
        div5Class.value = 'modal-body bg-warning';
        div5Node.setAttributeNode(div5Class);
        div3Node.appendChild(div5Node);

        let div6Node = document.createElement('div');
        let div6Class = document.createAttribute('class');
        div6Class.value = 'container-fluid';
        div6Node.setAttributeNode(div6Class);
        div5Node.appendChild(div6Node);

        if (EPISODES[i][0] == 'BLOCKED') {
            let row0Node = document.createElement('div');
            let row0NodeClass = document.createAttribute('class');
            row0NodeClass.value = 'row mb-3';
            row0Node.setAttributeNode(row0NodeClass);
            div6Node.appendChild(row0Node);

            let row0Col1Node = document.createElement('div');
            let row0Col1NodeClass = document.createAttribute('class');
            row0Col1NodeClass.value = 'col text-center d-none d-lg-block';
            row0Col1Node.setAttributeNode(row0Col1NodeClass);
            row0Node.append(row0Col1Node);

            let row0IMG1 = document.createElement('img');
            let row0IMG1SRC = document.createAttribute('src');
            let row0IMG1HEIGHT = document.createAttribute('height');
            row0IMG1SRC.value = 'img/SP/muhammad.png';
            row0IMG1HEIGHT.value = '120px';
            row0IMG1.setAttributeNode(row0IMG1SRC);
            row0IMG1.setAttributeNode(row0IMG1HEIGHT);
            row0Col1Node.appendChild(row0IMG1);

            let row0Col2Node = document.createElement('div');
            let row0Col2NodeClass = document.createAttribute('class');
            row0Col2NodeClass.value = 'col col-lg-6 align-self-center text-center';
            row0Col2Node.setAttributeNode(row0Col2NodeClass);
            row0Node.append(row0Col2Node);

            let row0Col2H3 = document.createElement('h3');
            let row0Col2H3Red = document.createAttribute('class');
            row0Col2H3Red.value = 'text-danger font-weight-bold';
            row0Col2H3.setAttributeNode(row0Col2H3Red);
            row0Col2Node.appendChild(row0Col2H3);
            let row0Col2Text = document.createTextNode('EPISODE CANCELED ONLINE DUE TO OFFENSIVE CONTENT');
            row0Col2H3.appendChild(row0Col2Text);

            let row0Col3Node = document.createElement('div');
            let row0Col3NodeClass = document.createAttribute('class');
            row0Col3NodeClass.value = 'col text-center d-none d-lg-block';
            row0Col3Node.setAttributeNode(row0Col3NodeClass);
            row0Node.append(row0Col3Node);

            let row0IMG2 = document.createElement('img');
            let row0IMG2SRC = document.createAttribute('src');
            let row0IMG2HEIGHT = document.createAttribute('height');
            row0IMG2SRC.value = 'img/SP/muhammad.png';
            row0IMG2HEIGHT.value = '120px';
            row0IMG2.setAttributeNode(row0IMG2SRC);
            row0IMG2.setAttributeNode(row0IMG2HEIGHT);
            row0Col3Node.appendChild(row0IMG2);
        }

        let row1Node = document.createElement('div');
        let row1NodeClass = document.createAttribute('class');
        row1NodeClass.value = 'row mb-3';
        row1Node.setAttributeNode(row1NodeClass);
        div6Node.appendChild(row1Node);

        let row1Col1Node = document.createElement('div');
        let row1Col1NodeClass = document.createAttribute('class');
        row1Col1NodeClass.value = 'col mb-3';
        row1Col1Node.setAttributeNode(row1Col1NodeClass);
        row1Node.append(row1Col1Node);

        let row1Col2Node = document.createElement('div');
        let row1Col2NodeClass = document.createAttribute('class');
        row1Col2NodeClass.value = 'col-lg-5';
        row1Col2Node.setAttributeNode(row1Col2NodeClass);
        row1Node.append(row1Col2Node);

        let img1Node = document.createElement('img');
        let img1Class = document.createAttribute('class');
        img1Class.value = 'img-fluid';
        let img1SRC = document.createAttribute('src');
        img1SRC.value = EPISODES[i][18];
        img1Node.setAttributeNode(img1Class);
        img1Node.setAttributeNode(img1SRC);
        row1Col2Node.appendChild(img1Node);

        if (EPISODES[i][7]) {
            let prmtH1 = document.createElement('h2');
            let prmtRed = document.createAttribute('class');
            prmtRed.value = 'text-danger';
            prmtH1.setAttributeNode(prmtRed);
            let prmtText = document.createTextNode('Paramount Special');
            prmtH1.appendChild(prmtText);
            row1Col1Node.appendChild(prmtH1);
        }

        if (EPISODES[i][9]) {
            let altTitlePNode = document.createElement('p');
            let altTitleTextNodeA = document.createTextNode('Alternate Title: "');
            altTitlePNode.appendChild(altTitleTextNodeA);
            let altTitleEmpNode = document.createElement('em');
            let altTitleTextNodeB = document.createTextNode(EPISODES[i][9]);
            altTitleEmpNode.appendChild(altTitleTextNodeB);
            altTitlePNode.appendChild(altTitleEmpNode)
            let altTitleTextNodeC = document.createTextNode('"');
            altTitlePNode.appendChild(altTitleTextNodeC);
            row1Col1Node.appendChild(altTitlePNode);
        }

        let row2Node = document.createElement('div');
        let row2NodeClass = document.createAttribute('class');
        row2NodeClass.value = 'row mb-3';
        row2Node.setAttributeNode(row2NodeClass);
        row1Col1Node.appendChild(row2Node);

        let row2Col1Node = document.createElement('div');
        let row2Col1NodeClass = document.createAttribute('class');
        row2Col1NodeClass.value = 'col';
        row2Col1Node.setAttributeNode(row2Col1NodeClass);
        row2Node.append(row2Col1Node);

        if (EPISODES[i][2]) {
            let seasonEpisodeTitleTextNode = document.createTextNode('Season '+EPISODES[i][2]+' Episode '+EPISODES[i][3]);
            row2Col1Node.appendChild(seasonEpisodeTitleTextNode);
            let brNode1 = document.createElement('br');
            row2Col1Node.appendChild(brNode1);
        }

        if ((EPISODES[i][6])) {
            let dateTextNode = document.createTextNode('First Air: '+retrieveDate(EPISODES[i]));
            row2Col1Node.appendChild(dateTextNode);
            let brNode3 = document.createElement('br');
            row2Col1Node.appendChild(brNode3);
        }

        if (EPISODES[i][5]) {
            let runTimeTextNode = document.createTextNode('Runtime: '+EPISODES[i][5]+' (minutes)');
            row2Col1Node.appendChild(runTimeTextNode);
            let brNode5 = document.createElement('br');
            row2Col1Node.appendChild(brNode5);
        }

        if (EPISODES[i][19]) {
            let imdbTextNode = document.createTextNode('IMDB Rating: '+EPISODES[i][19]+'/10');
            row2Col1Node.appendChild(imdbTextNode);
            let brNode7 = document.createElement('br');
            row2Col1Node.appendChild(brNode7);
        }

        let row2Col2Node = document.createElement('div');
        let row2Col2NodeClass = document.createAttribute('class');
        row2Col2NodeClass.value = 'col';
        row2Col2Node.setAttributeNode(row2Col2NodeClass);
        row2Node.append(row2Col2Node);

        if (Number.isInteger(EPISODES[i][8])) {
            let prodCodeTextNode = document.createTextNode('Prod Code: '+EPISODES[i][8]);
            row2Col2Node.appendChild(prodCodeTextNode);
            let brNode2 = document.createElement('br');
            row2Col2Node.appendChild(brNode2);
        }

        if (EPISODES[i][13]) {
            let USViewsTextNode = document.createTextNode('Views: '+EPISODES[i][13]+' (million)');
            row2Col2Node.appendChild(USViewsTextNode);
            let brNode4 = document.createElement('br');
            row2Col2Node.appendChild(brNode4);
        }

        if (EPISODES[i][14]) {
            let GlobalViewsTextNode = document.createTextNode('Global Views: '+EPISODES[i][14]);
            row2Col2Node.appendChild(GlobalViewsTextNode);
            let brNode6 = document.createElement('br');
            row2Col2Node.appendChild(brNode6);
        }

        if (EPISODES[i][10]) {
            let ratedTextNode = document.createTextNode('Rated: '+EPISODES[i][10]);
            row2Col2Node.appendChild(ratedTextNode);
            let brNode8 = document.createElement('br');
            row2Col2Node.appendChild(brNode8);
        }

        if (EPISODES[i][11]) {
            let directedByTextNode = document.createTextNode('Directed By: '+EPISODES[i][11]);
            row1Col1Node.appendChild(directedByTextNode);
            let brNode9 = document.createElement('br');
            row1Col1Node.appendChild(brNode9);
        }

        if (EPISODES[i][12]) {
            let writtenByTextNode = document.createTextNode('Written By: '+EPISODES[i][12]);
            row1Col1Node.appendChild(writtenByTextNode);
            let brNode10 = document.createElement('br');
            row1Col1Node.appendChild(brNode10);
        }

        let row3Node = document.createElement('div');
        let row3NodeClass = document.createAttribute('class');
        row3NodeClass.value = 'row mb-3';
        row3Node.setAttributeNode(row3NodeClass);
        div6Node.appendChild(row3Node);

        let row3Col1Node = document.createElement('div');
        let row3Col1NodeClass = document.createAttribute('class');
        row3Col1NodeClass.value = 'col';
        row3Col1Node.setAttributeNode(row3Col1NodeClass);
        row3Node.append(row3Col1Node);

        if (EPISODES[i][17]) {
            let synopsisPNode = document.createElement('p');
            let synopsisTextNode = document.createTextNode('Synopsis: '+EPISODES[i][17]);
            row3Col1Node.appendChild(synopsisPNode);
            synopsisPNode.appendChild(synopsisTextNode);
        }

        let row4Node = document.createElement('div');
        let row4NodeClass = document.createAttribute('class');
        row4NodeClass.value = 'row';
        row4Node.setAttributeNode(row4NodeClass);
        div6Node.appendChild(row4Node);

        if (EPISODES[i][15]) {
            let row4Col1Node = document.createElement('div');
            let row4Col1NodeClass = document.createAttribute('class');
            row4Col1NodeClass.value = 'col offset-1';
            row4Col1Node.setAttributeNode(row4Col1NodeClass);
            row4Node.append(row4Col1Node);

            let row4Col1CelebrityNode = document.createTextNode('Celebrity Portrayals:');
            row4Col1Node.appendChild(row4Col1CelebrityNode);
            let row4Col1ULNode = document.createElement('ul');
            row4Col1Node.appendChild(row4Col1ULNode);
            for (let j=0;j<EPISODES[i][15].length;j++) {
                let celebLI = document.createElement('li');
                row4Col1ULNode.appendChild(celebLI);
                let celebLITextNode = document.createTextNode(EPISODES[i][15][j]);
                celebLI.appendChild(celebLITextNode);
                let celebLIWeight = document.createAttribute('class');
                celebLIWeight.value = "font-weight-normal";
                celebLI.setAttributeNode(celebLIWeight);
            }
        }

        if (EPISODES[i][16]) {
            let row4Col2Node = document.createElement('div');
            let row4Col2NodeClass = document.createAttribute('class');
            row4Col2NodeClass.value = 'col';
            row4Col2Node.setAttributeNode(row4Col2NodeClass);
            row4Node.append(row4Col2Node);

            let row4Col2GuestNode = document.createTextNode('Guest Stars:');
            row4Col2Node.appendChild(row4Col2GuestNode);
            let row4Col2ULNode = document.createElement('ul');
            row4Col2Node.appendChild(row4Col2ULNode);
            for (let j=0;j<EPISODES[i][16].length;j++) {
                let guestLI = document.createElement('li');
                row4Col2ULNode.appendChild(guestLI);
                let guestLITextNode = document.createTextNode(EPISODES[i][16][j]);
                guestLI.appendChild(guestLITextNode);
                let guestLIWeight = document.createAttribute('class');
                guestLIWeight.value = "font-weight-normal";
                guestLI.setAttributeNode(guestLIWeight);
            }
        }

        anchorNode.appendChild(div1Node);
    }
}

function retrieveDate(array) {
    let dateStamp = new Date(array[6]);
    dateStamp.setDate(dateStamp.getDate()+1);
    let month = dateStamp.getMonth()+1;
    let day = dateStamp.getDate();
    let year = dateStamp.getFullYear();

    return month+'/'+day+'/'+year;
}