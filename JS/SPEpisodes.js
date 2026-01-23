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
        20,"1998-04-01",false,201,false,'TV-MA','Trey Parker','Trey Parker & Trisha Nixon',3.25,false,['Saddam Hussein','Celine Dion','Jerry Springer'],false,'The show starts off with the build up from last season \"cliffhanger revolving around Cartman\" paternal origins. However just as it seems they are about to get on with the second half of Cartman\'s Mom Is A Dirty Slut they do a 180 degree turn-around and reveal that for April Fool\'s Day they will be showing Terrance & Phillip in Not Without My Anus.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE201.jpeg',6.2
    ],
    [false,15,2,2,'Cartman\'s Mom Is Still a Dirty Slut',
        21,"1998-04-22",false,202,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',4.00,false,['Bill Clinton','Eric Roberts','John Walsh'],false,'Cartman finds out the identity of his father. And boy is he in for a surprise.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE202.jpeg',8.2
    ],
    [false,16,2,3,'Ike\'s Wee Wee',
        22,"1998-05-20",false,204,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,false,false,'Ike\'s going to have a Briss and everyone is invited! Stan Kenny and Cartman find out what a Briss really is and try to warn Kyle that his parents are going to cut off Ike\'s wee wee. Kyle sends Ike away to protect him from his scissor wielding parents.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE204.jpeg',8.0
    ],
    [false,17,2,4,'Chickenlover',
        22,"1998-05-27",false,203,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.71,false,false,false,'The Booktastic bus is in town and soon everyone finds out that Officer Barbrady can, Aôt read. He is whisked off to school with the boys so he can save his job. While he\'s there someone in South Park is having sex with the town\'s chickens and only Officer Barbrady with his new deputies Kenny Kyle Stan and Cartman can stop them!','https://hosting.photobucket.com/images/i/lesaintdumech/SPE203.jpeg',8.0
    ],
    [false,18,2,5,'Conjoined Fetus Lady',
        22,"1998-06-03",false,205,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.57,false,false,false,'Kyle is injured and must go to see the school nurse and is terrified because of the stories he\'s heard. She looks fairly normal except for the dead fetus sticking out of her head. Kyle\'s mother educates the boys on her condition and decides that everyone in South Park should be made aware. Meanwhile the South Park Cows dodgeball team goes to the state national and finally the international finals in China.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE205.jpeg',7.6
    ],
    [false,19,2,6,'The Mexican Staring Frog of Southern Sri Lanka',
        22,"1998-06-10",false,206,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.57,false,['Saddam Hussein','Bob Denver'],false,'Mr. Garrison assigns the boys learn out about Vietnam from somebody they know. Stan\'s Uncle Jimbo and his friend Ned tell the boys their outrageous tale. Mr. Garrison doesn\'t believe the boy\'s report and gives them detention. They plot revenge against Stan\'s Uncle by submitting a phony video of the Mexican Staring Frog of Southern Sri Lanka to them.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE206.jpeg',7.5
    ],
    [false,20,2,7,'City on the Edge of Forever',
        22,"1998-06-17",false,207,'Flashbacks','TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',3.06,false,['Carrot Top','Jay Leno'],['Jay Leno','Brent Musburger','Henry Winkler'],'While their school bus is dangling on the edge of a cliff the boys remember some of their past adventures. Mrs. Crabtree catches a ride into town with a stranger and winds up doing a brief stint as a standup comedienne. Back in South Park Mr. Mackey convinces the parents that their missing children must have run away. In the end it\'s all a dream within a dream.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE207.jpeg',7.2
    ],
    [false,21,2,8,'Summer Sucks',
        22,"1998-06-24",false,208,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.53,false,['Brett Favre','Shari Lewis','Lambchop'],['Jonathan Katz'],'Schools out for summer and with Mr. Hat missing Mr.Garrison is over the edge. The state has a ban on the sale of fireworks and it screws up the boy\'s plans for a 4th of July celebration. Mr. Garrison seeks psychiatric help from Dr. Katz while Jimbo and Ned go to Mexico in an attempt to smuggle fireworks back to the children of America.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE208.jpeg',7.3
    ],
    [false,22,2,9,'Chef\'s Chocolate Salty Balls',
        22,"1998-08-19",false,209,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',3.26,false,['Fred Savage','Robert Redford','Tom Hanks','Andy Warhol','Bruce Willis','Fabio Lanzoni','Spike Lee'],false,'A film festival moves to South Park only to have a devastating effect on the sewer system. Mr. Hankey calls upon Kyle for help. The movie people interpret Kyle\'s pleading as a pitch and they quickly turn his story into a film starring Tom Hanks and a monkey they call Mr. Hankey. Kyle is outraged that the filmmakers aren\'t hearing his pleas. Soon Chef\'s Salty Chocolate Balls energizes everyone.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE209.jpeg',7.5
    ],
    [false,23,2,10,'Chickenpox',
        22,"1998-08-26",false,210,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Trisha Nixon',3.07,false,false,false,'Cartman\'s mother plots to give the boys the chickenpox by sending them over to Kenny\'s for a sleepover. Both Stan and Cartman breakout but Kyle remains immune. Kyle discovers the parental conspiracy and with the other boys hires a prostitute to give their parents herpes. Meanwhile Kenny\'s mother and Kyle\'s mother reunite their husbands who were both childhood friends that drifted apart.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE210.jpeg',7.9
    ],
    [false,24,2,11,'Roger Ebert Should Lay Off the Fatty Foods',
        22,"1998-09-02",false,211,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.56,false,['Buddy Ebsen'],false,'The kids go on a field trip to the planetarium. All of the children except Cartman are acting wierd. As usual Stan and Kyle with Kenny\'s sacrifice try to get to bottom of the mystery. Meanwhile Cartman wins an appearance on a snack commercial. The four boys get to the root of the strange planetarium.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE211.jpeg',7.5
    ],
    [false,25,2,12,'Clubhouses',
        22,"1998-09-23",false,212,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.57,false,false,false,'Stan needs to build a clubhouse so he and Kyle can play Truth or Dare with Wendy and her friend who has a crush on Kyle. Cartman and Kenny retaliate by building a clubhouse of their own; only theirs has hot chicks. Meanwhile the Marshes marriage breaks up and Stan learns a valuable lesson about love and family.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE212.jpeg',7.9
    ],
    [false,26,2,13,'Cow Days',
        22,"1998-09-30",false,213,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.59,false,false,false,'South Park\'s annual Cow Days party is happening! The cows become transfixed on a cow statue. In order to get the money they need to win Terrance and Phillip dolls the boys sign Cartman up for a bull riding contest. A freak accident has Cartman believing he is a Vietnamese prostitute named Ming Li. The boys learn about money and cow insanity.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE213.jpeg',7.5
    ],
    [false,27,2,14,'Chef Aid',
        22,"1998-10-07",false,214,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.13,false,['Johnnie Cochran','Alanis Morissette','Elton John','Joe Strummer','Les Claypool','Marilyn Manson','Meat Loaf','Ozzy Osbourne','PRIMUS','Rancid','Rick James','Ween'],['Elton John','DMX','Rick James','Meat Loaf','Ol\' Dirty Bastard','Ozzy Osbourne','Les Claypool','Tim Armstrong','Joe Strummer','The Crystal Method','Dean & Gene Ween'],'Chef is getting sued by Capitalist Records for trying to obtain the rights to a song he wrote twenty years ago. He needs 2 million dollars to hire Johnny Cochran. In response the boys round up all of Chef\'s old musician friends and organize a huge concert to raise the cash.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE214.jpeg',7.8
    ],
    [false,28,2,15,'Spookyfish',
        21,"1998-10-28",false,215,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,['Barbra Streisand'],false,'Sharon Marsh\'s Aunt Flo makes her monthly visit and she has present for Stan a fish. Stan\'s fish really freaks him out especially when the dead bodies start piling up. Mrs. Marsh is convinced Stan is doing the killings and begins hiding the bodies. The boys discover there are two Cartman, Aôs and a gateway to a parallel universe at the Indian Burial Ground Pet Store.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE215.jpeg',8.4
    ],
    [false,29,2,16,'Merry Christmas, Charlie Manson!',
        22,"1998-12-09",false,216,false,'TV-MA','Eric Stough','Trey Parker & Nancy M. Pimental',3.28,false,['Charles Manson','Donna Reed','Karolyn Grimes','Lionel Barrymore'],false,'Kyle Stan and Kenny accompany Eric and his family to a Christmas celebration with the Cartman family. One of Cartman\'s relatives breaks out of jail for the reunion with his cellmate Charles Manson.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE216.jpeg',8.1
    ],
    [false,30,2,17,'Gnomes',
        22,"1998-12-16",false,217,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Pam Brady',2.06,false,['Toto'],false,'Harbucks coffee plans to move into South Park and drive Tweek coffee shop out of business. Mr. Garrison assigns a report on current events to help him keep his job. The boys are planning on doing their report on the underpants gnomes. Tweek\'s father schemes to use the boy\'s report as a platform for fighting Harbucks. The report the boys deliver sparks the town into taking action.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE217.jpeg',8.2
    ],
    [false,31,2,18,'Prehistoric Ice Man',
        22,"1999-01-20",false,218,false,'TV-MA','eric Stough','Trey Parker & Nancy M. Pimental',2.37,false,['Marilyn Manson','Steve Irwin'],false,'Kyle falls into a cave. Stan goes to rescue him and finds an iceman and the two fight each other for sole credit. Dr. Mephisto discovers that the iceman has been frozen since 1996. The iceman is put on display and the fighting Kyle and Stan free him. The iceman tries to return to his family but finds himself a man out of time. Meanwhile the government has their own plans to use the iceman in their plot against Sweden.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE218.jpeg',7.8
    ],
    [false,32,3,1,'Rainforest Shmainforest',
        22,"1999-04-07",false,301,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker & Matt Stone',2.32,false,['Bruce Willis','Fred Savage','Spike Lee','Stevie Wonder'],['Jennifer Aniston'],'The boys are sent to the Costa Rican rainforest as a part of the Getting Gay with Kids choir tour.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE301.jpeg',8.4
    ],
    [false,33,3,2,'Spontaneous Combustion',
        22,"1999-04-14",false,302,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.29,false,['Nick Nolte','Whoopi Goldberg'],false,'When the citizens of South Park start exploding randomly, the mayor enlists Stan\'s dad, the resident geologist, to find a solution to the problem.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE302.jpeg',8.1
    ],
    [false,34,3,3,'Succubus',
        22,"1999-04-21",false,303,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,false,false,'Chef finds the girl of his dreams, but the boys feel like they\'ve lost their best friend; all in exchange for a dollar amount of tree-fiddy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE303.jpeg',8.0
    ],
    [false,35,3,4,'Jakovasaurs',
        22,"1999-06-16",false,305,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.07,false,false,false,'The boys discover a prehistoric creature called a Jakovasaur while camping at Stark\'s Pond.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE305.jpeg',6.4
    ],
    [false,36,3,5,'Tweek vs. Craig',
        22,"1999-06-23",false,304,false,'TV-MA','Trey Parker','Trey Parker',1.87,false,false,false,'The boys instigate a fight between Tweek and Craig in shop class. Meanwhile, Mr. Adler, the shop teacher, is haunted by a recurring dream of his lost love.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE304.jpeg',7.6
    ],
    [true,'MOVIE',false,false,'South Park: Bigger, Longer & Uncut',
        81,"1999-06-30",false,'MMM01',false,'R','Trey Parker','Trey Parker, Matt Stone & Pam Brady','~3',false,['Saddam Hussein','Bill Clinton','Bill Gates','Brian Dennehy','Conan O\'Brien','Winona Ryder','The Baldwins'],['George Clooney','Minnie Driver','Brent Spiner','Dave Foley','Eric Idle','Nick Rhodes'],'Stan, Kyle, Kenny and Cartman sneak into an R-rated movie and it warps their fragile little minds. Soon their indignant parents declare war on Canada and our young heroes are America\'s last hope to stop Armageddon.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEMMM01.jpeg',7.7
    ],
    [false,37,3,6,'Sexual Harassment Panda',
        22,"1999-07-07",false,306,false,'TV-MA','Eric Stough','Trey Parker',1.83,false,false,false,'After Sexual Harassment Panda "educates" the children, Cartman sues Stan for sexual harassment, and a flurry of other lawsuits follow.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE306.jpeg',8.2
    ],
    [false,38,3,7,'Cat Orgy',
        22,"1999-07-14",false,307,false,'TV-MA','Trey Parker','Trey Parker',2.98,false,false,false,'While Shelly\'s babysitting Eric on the evening of the mysterious meteor shower, a wild and unsupervised kitty party breaks out at the Cartman home.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE307.jpeg',7.9
    ],
    [false,39,3,8,'Two Guys Naked in a Hot Tub',
        22,"1999-07-21",false,308,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.03,false,false,false,'Stan must save Mr. Mackey\'s meteor shower party from the ATF, while the South Park dads experiment in the hot tub.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE308.jpeg',8.0
    ],
    [true,40,3,9,'Jewbilee',
        22,"1999-07-28",false,309,false,'TV-MA','Trey Parker','Trey Parker',1.93,false,false,false,'While the rest of South Park awaits the meteor shower, Kyle, Kenny and Ike head into the wilderness on a Jewbilee.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE309.jpeg',7.4
    ],
    [false,41,3,10,'Korn\'s Groovy Pirate Ghost Mystery',
        22,"1999-10-27",false,312,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],'Korn helps the boys defeat Pirate Ghosts and mean fifth graders in this haunting Halloween episode.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE312.jpeg',7.7
    ],
    [false,42,3,11,'Chinpokomon',
        22,"1999-11-03",false,310,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.36,false,['Bill Clinton','Emperor Hirohito'],false,'South Park kids go crazy for Chinpokomon and suddenly find themselves fixated on Peal Harbor.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE310.jpeg',8.7
    ],
    [false,43,3,12,'Hooked on Monkey Fonics',
        22,"1999-11-10",false,313,false,'TV-MA','Trey Parker','Trey Parker',2.05,false,['Ronnie James Dio'],false,'The boys compete against some home schooled kids in South Park\'s annual spelling bee.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE313.jpeg',8.0
    ],
    [false,44,3,13,'Starvin\' Marvin in Space',
        21,"1999-11-17",false,311,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Kyle McCulloch',2.99,false,['Sally Struthers'],false,'When Starvin\' Marvin returns to South Park in an alien spaceship, enlisting the boys join him on a mission to find a new home for his starving people but winds up pursued by the CIA, the Feed the ChildrenFoundation and Sally Struthers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE311.jpeg',8.0
    ],
    [false,45,3,14,'The Red Badge of Gayness',
        20,"1999-11-24",false,314,false,'TV-MA','Trey Parker','Trey Parker',1.94,false,['Bill Clinton','Al Gore'],false,'Fueled on Jagerminz S\'more Flavored Schnapps, Cartman has visions of glory as he suits up for the Confederacy in the annual reenactment of a Civil War battle, and leads the drunken rebels to finally defeat the union 134 years too late.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE314.jpeg',8.3
    ],
    [true,46,3,15,'Mr. Hankey\'s Christmas Classics',
        22,"1999-12-01",false,315,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Adolf Hitler','Alois and Klara Hitler','Diana, Princess of Wales','Gene Siskel','Genghis Khan','Jimmy Stewart','Michael Landon','Mao Zedong','John F. Kennedy & John F. Kennedy Jr'],false,'In an extravaganza of holiday joy comes the Classic hits from " Mr. Hankey\'s Christmas Classics" album - featuring the boys and all of South Park\'s most exuberant citizens.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE315.jpeg',7.2
    ],
    [false,47,3,16,'Are You There God? It\'s Me, Jesus',
        20,"1999-12-29",false,316,false,'TV-MA','Eric Stough','Trey Parker',2.13,false,['Rod Stewart'],false,'Stan goes through a few rapidly wrong hormonal changes, meanwhile people from all over the world start to gather outside Jesus\' house waiting for a millennium miracle.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE316.jpeg',7.8
    ],
    [false,48,3,17,'World Wide Recorder Concert',
        22,"2000-01-12",false,317,'The Brown Noise','TV-MA','Eric Stough','Trey Parker',2.57,false,['Yoko Ono','Kenny G'],false,'The children of South Park are invited to Arkansas for the "Four Million Child Blow 2000", the first worldwide recorder concert.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE317.jpeg',8.1
    ],
    [false,49,4,1,'The Tooth Fairy\'s Tats',
        22,"2000-04-05",false,402,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',2.38,false,false,['Richard Belzer'],'Cartman masterminds a Tooth Fairy scam by appropriating teeth from less fortunate children.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE402.jpeg',8.2
    ],
    [false,50,4,2,'Cartman\'s Silly Hate Crime',
        20,"2000-04-12",false,401,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.62,false,false,false,'Cartman gets himself sentenced to juvee hall, and without his weight to anchor the sled, the boys have no hope of winning the race against the girls.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE401.jpeg',8.6
    ],
    [false,51,4,3,'Timmy',
        21,"2000-04-19",false,404,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,['Phil Collins','Christina Aguilera'],false,'Timmy parlays his ADD handicap into a heavy metal rock band gig; meanwhile, the boys try to contract ADD, too, so they can get out of class.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE404.jpeg',8.1
    ],
    [false,52,4,4,'Quintuplets',
        20,"2000-04-26",false,403,'Contorting Quintuplets','TV-MA','Trey Parker','Trey Parker',1.81,false,['Janet Reno'],false,'When a family of quintuplets takes up residence in South Park the ensuing media circus fame drives Kenny and his mom all the way to Romania to pursue the fame and spotlight too.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE403.jpeg',7.3
    ],
    [false,53,4,5,'Cartman Joins NAMBLA',
        22,"2000-06-21",false,406,false,'TV-MA','Eric Stough','Trey Parker',1.82,false,false,false,'Cartman\'s newfound maturity forces him to seek out more mature friends on-line; meanwhile, Kenny actively tries to prevent his parent\'s from having another welfare baby.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE406.jpeg',9.0
    ],
    [false,54,4,6,'Cherokee Hair Tampons',
        20,"2000-06-28",false,407,false,'TV-MA','Trey Parker','Trey Parker',1.72,false,['Cheech & Chong'],['Tommy Chong','Cheech Marin'],'Kyle needs a kidney transplant and Cartman is discovered to be the perfect donor. Cartman gladly offers his kidney to Kyle—for the price of $10 million dollars.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE407.jpeg',8.0
    ],
    [false,55,4,7,'Chef Goes Nanners',
        22,"2000-07-05",false,408,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.45,false,['Russell Crowe'],false,'Chef\'s passionate protest against the South Park Flag enflames the town; meanwhile, Wendy finds herself strangely attracted to Cartman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE408.jpeg',8.2
    ],
    [false,56,4,8,'Something You Can Do with Your Finger',
        22,"2000-07-12",false,409,false,'TV-MA','Trey Parker','Trey Parker',1.81,false,false,false,'"Fingerbang" is the newest boy band starring all the boys and it\'s also Cartman\'s latest scheme to make a million dollars and all the folks in town are lining up to audition for the privilege of being its fifth member.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE409.jpeg',8.0
    ],
    [false,57,4,9,'Do The Handicapped Go To Hell',
        20,"2000-07-19",false,410,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,['Saddam Hussein','Gene Siskel','Pope John Paul II','Walter Matthau','Adolf Hitler','Allen Ginsberg','Conan O\'Brien','Dean Martin','Diana, Princess of Wales','Frank Sinatra','George Burns','Jerry Garcia','John F. Kennedy & John F. Kennedy Jr.','Mao Zedong','Tiny Tim','Michael Landon'],false,'While the boys race to make their first Confession and Holy Communion, Saddam Hussein returns to the underworld to rekindle his relationship with his former lover, Satan, the prince of darkness.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE410.jpeg',8.3
    ],
    [false,58,4,10,'Probably',
        22,"2000-07-26",false,411,false,'TV-MA','Trey Parker','Trey Parker',2.01,false,['Saddam Hussein','Henry Winkler'],false,'Cartman\'s flock begins to grow and the children begin plans to build him a Church. Meanwhile, Satan is torn between two lovers: his new boyfriend, Chris, and his ex, Saddam Hussein; meanwhile, Cartman becomes an evangelist as he and the boys try to assure their places in heaven.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE411.jpeg',8.2
    ],
    [false,59,4,11,'Fourth Grade',
        21,"2000-11-08",false,412,false,'TV-MA','Trey Parker','Trey Parker',3.6,false,false,false,'Fearing their new 4th grade teacher, the kids build a time machine out of Timmy\'s wheelchair to travel back to a happier, easier school year.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE412.jpeg',8.1
    ],
    [false,60,4,12,'Trapper Keeper',
        20,"2000-11-15",false,413,false,'TV-MA','Trey Parker','Trey Parker',3.27,false,['Jesse Jackson','Rosie O\'Donnell'],false,'When Cartman finally stops bragging about his new Trapper Keeper, a stranger informs him that it will eventually take over the world and destroy humankind, if they do not destroy it first.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE413.jpeg',8.0
    ],
    [false,61,4,13,'Helen Keller The Musical',
        20,"2000-11-22",false,414,false,'TV-MA','Trey Parker','Trey Parker',3.51,false,false,false,'When Butters informs the fourth graders that the kindergartners\' school play is a magnificent sight to behold, they go through a lot of pain to make sure they beat the tiny tots\' show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE414.jpeg',7.7
    ],
    [false,62,4,14,'Pip',
        20,"2000-11-29",false,405,'Great Expectations','TV-MA','Eric Stough','Trey Parker',2.39,false,false,['Malcolm McDowell'],'South Park Classics presents a rendition of "Great Expectations" starring Pip, as the antihero who takes on the bitter Ms. Haversham and robotic monkeys in his attempt to win Estella\'s heart.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE405.jpeg',6.6
    ],
    [false,63,4,15,'Fat Camp',
        20,"2000-12-06",false,415,false,'TV-MA','Trey Parker','Trey Parker',2.31,false,['Howard Stern','Johnny Knoxville'],false,'Cartman\'s family and friends have intervened and are forcing him to trim down. While Cartman\'s away, Kenny\'s star is on the rise when he gets his own reality TV show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE415.jpeg',8.4
    ],
    [false,64,4,16,'The Wacky Molestation Adventure',
        20,"2000-12-13",false,416,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,['Fidel Castro'],false,'When Kyle\'s parents forbid him to see his favorite rock band in concert, Kyle accuses them of an unspeakable indiscretion and has them sent to the big house.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE416.jpeg',8.7
    ],
    [false,65,4,17,'A Very Crappy Christmas',
        20,"2000-12-20",false,417,false,'TV-MA','Adrien Beard','Trey Parker',2.3,false,false,['Louis Price'],'Now that Mr. Hankey\'s all tied up with the new wife and kids, it\'s up to the boys and a video Christmas card to save the spirit of the season.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE417.jpeg',7.4
    ],
    [false,66,5,1,'It Hits the Fan',
        20,"2001-06-20",false,502,false,'TV-MA','Trey Parker','Trey Parker',2.1,false,['Drew Carey'],false,'The you-know-what hits the fan 162 times when the citizens of South Park tune in to hear the word "s***" on a popular TV show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE502.jpeg',8.3
    ],
    [false,67,5,2,'Cripple Fight',
        21,"2001-06-27",false,503,false,'TV-MA','Trey Parker','Trey Parker',1.78,false,['Gloria Allred','Marc Shaiman','Steven Spielberg'],false,'Big Gay Al returns to South Park as the new scout leader. When he is fired for being gay, the boys rally to his defense with the help of the new "handi-capable" kid, Jimmy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE503.jpeg',8.3
    ],
    ['BLOCKED',68,5,3,'Super Best Friends',
        22,"2001-07-04",false,504,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,['Muhammad','David Blaine','George W Bush','Laura Bush','Karl Rove','Joseph Smith'],false,'Stan, Kyle, Cartman and Kenny discover David Blaine, magician and cult leader, performing in the streets of South Park. Stan finds out early that the Blainiacs are not as nice as everyone thinks. He tries to convince the other boys they have been brainwashed, but they have forsaken their friends and families. Teaming up with Jesus, Stan calls upon all the Super Best Friends to destroy the magician and thwart the mass suicide pact he has launched.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE504.jpeg',8.2
    ],
    [true,69,5,4,'Scott Tenorman Must Die',
        20,"2001-07-11",false,501,false,'TV-MA','Eric Stough','Trey Parker',1.88,false,['Radiohead','Kurt Loder'],['Thom Yorke','Jonny Greennwood','Colin Greenwood','Ed O\'Brien','Philip Selway'],'After the other boys explain to Cartman that pubes do not count unless you grow your own, Cartman realizes he has been tricked by the school bully, Scott Tenorman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE501.jpeg',9.6
    ],
    [false,70,5,5,'Terrance and Phillip: Behind the Blow',
        21,"2001-07-18",false,505,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,['Cher','Sonny Bono','Soleil Moon Frye'],false,'When the boys discover Terrance and Phillip have called it quits, they will go to any lengths to reunite the duo and recruit them for South Park\'s Earth Day festivities.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE505.jpeg',6.9
    ],
    [false,71,5,6,'Cartmanland',
        21,"2001-07-25",false,506,false,'TV-MA','Trey Parker','Trey Parker',3.09,false,false,false,'Cartman inherits a million dollars from his grandmother and fulfills his lifelong dream of owning his own amusement park: Cartmanland!','https://hosting.photobucket.com/images/i/lesaintdumech/SPE506.jpeg',8.9
    ],
    [false,72,5,7,'Proper Condom Use',
        22,"2001-08-01",false,507,false,'TV-MA','Trey Parker','Trey Parker',2.45,false,false,false,'In a time-honored tradition and right-of-passage, the boys are separated from the girls and schooled in the mysteries of sex by none other than Mr. Mackey.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE507.jpeg',8.6
    ],
    [false,73,5,8,'Towelie',
        22,"2001-08-08",false,508,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,false,false,'The boys get a new video game system and their plan for the foreseeable future is to play it! When the government steals their new Game Sphere, the boys will stop at nothing to get it back. Their one hope for infiltrating the top secret lab where the Game Sphere is being kept is to team up with Towelie, a genetically engineered towel who only wants to get high.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE508.jpeg',8.3
    ],
    [false,74,5,9,'Osama bin Laden Has Farty Pants',
        20,"2001-11-07",false,509,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,['Osama bin Laden','Fleetwood Mac',''],false,'The kids of South Park have raised money to send to the children of Afghanistan, but the Government believes the Afghani children\'s thank you gift is contaminated with Anthrax and the boys are forced to take it back to Afghanistan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE509.jpeg',7.8
    ],
    [false,75,5,10,'How to Eat with Your Butt',
        20,"2001-11-14",false,510,false,'TV-MA','Trey Parker','Trey Parker',3.16,false,['Ben Affleck'],false,'After Cartman gets Kenny\'s school picture on every \"missing child\" milk carton in the country, a couple mistake Kenny for their missing son.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE510.jpeg',8.0
    ],
    [false,76,5,11,'The Entity',
        20,"2001-11-21",false,511,false,'TV-MA','Trey Parker','Trey Parker',2.3,false,['Bill Gates','Donald Trump','Enrique Iglesias','John Travolta','Steve Forbes','Steve Jobs','Ted Turner','Yasmine Bleeth'],false,'Mr. Garrison gets fed up with long lines, delayed flights and the airline industry in general and invents his own transportation device.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE511.jpeg',8.2
    ],
    [false,77,5,12,'Here Comes the Neighborhood',
        22,"2001-11-28",false,512,false,'TV-MA','Eric Stough','Trey Parker',3.03,false,['Will and Jada Pinkett Smith','Oprah Winfrey','Snoop Dogg'],false,'Tolkien is tired of being the only rich kid in town, and succeeds in attracting several other wealthy families to South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE512.jpeg',8.0
    ],
    [false,78,5,13,'Kenny Dies',
        20,"2001-12-05",false,513,false,'TV-MA','Trey Parker','Trey Parker',2.66,false,['Madonna'],false,'In a very special episode of "South Park," Cartman fights for Kenny\'s life when he speaks before Congress in favor of stem-cell research.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE513.jpeg',8.8
    ],
    [false,79,5,14,'Butters\' Very Own Episode',
        22,"2001-12-12",false,514,false,'TV-MA','Eric Stough','Trey Parker',2.63,false,['OJ Simpson','Gary Condit','John and Patricia Ramsey','John Elway'],false,'Alone and lost, Butters determinedly makes his way through porn theatres and gay bathhouses in an effort to get his dad back home in time to eat at Bennigans for his parents\' anniversary.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE514.jpeg',9.0
    ],
    [false,80,6,1,'Jared Has Aides',
        20,"2002-03-06",false,602,false,'TV-MA','Trey Parker','Trey Parker',3.30,false,['Jared Fogle'],false,'As the country becomes obsessed with a popular program for losing weight, the boys see an opportunity to become sponsored by a major restaurant chain.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE602.jpeg',8.0
    ],
    [false,81,6,2,'Asspen',
        20,"2002-03-13",false,603,false,'TV-MA','Trey Parker','Trey Parker',2.60,false,false,false,'While the adults trapped at a time-share sales meeting, Stan is challenged by the best skier on the mountain.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE603.jpeg',8.3
    ],
    [false,82,6,3,'Freak Strike',
        20,"2002-03-20",false,601,false,'TV-MA','Trey Parker','Trey Parker',3.15,false,['Maury Povich','Liza Minnelli'],false,'When the boys learn that talk shows offer prizes to people who are grossly disfigured they can\'t sign Butters up fast enough.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE601.jpeg',7.9
    ],
    [false,83,6,4,'Fun with Veal',
        20,"2002-03-27",false,605,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Michael Dorn'],false,'Stan is appalled when he realizes the veal he\'s been eating is, in fact, the meat from little baby calves.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE605.jpeg',7.9
    ],
    [false,84,6,5,'The New Terrance and Phillip Movie Trailer',
        20,"2002-04-03",false,604,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Russell Crowe'],false,'All the kids in South Park are glued to the TV, wild with anticipation to see the first trailer for the latest Terrance and Phillip movie.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE604.jpeg',8.0
    ],
    [false,85,6,6,'Professor Chaos',
        20,"2002-04-10",false,606,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,false,false,'The boys fire Butters as their new friend. Devastation over his rejection unleashes Butters\' dark side and Professor Chaos is born.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE606.jpeg',8.5
    ],
    [false,86,6,7,'Simpsons Already Did It',
        20,"2002-06-26",false,607,false,'TV-MA','Trey Parker','Trey Parker',1.94,false,false,false,'Professor Chaos is frustrated when he realizes all of his diabolical plans to wreak havoc on South Park have already been done by The Simpsons.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE607.jpeg',8.8
    ],
    [true,87,6,8,'Red Hot Catholic Love',
        22,"2002-07-03",false,608,false,'TV-MA','Trey Parker','Trey Parker',1.49,false,['Pope John Paul II'],false,'A sexual abuse scandal involving priests hits South Park and is taken all the way to the Vatican.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE608.jpeg',8.2
    ],
    [false,88,6,9,'Free Hat',
        22,"2002-07-10",false,609,false,'TV-MA','Toni Nugnes','Trey Parker',2.80,false,['George Lucas','Steven Spielberg','Francis Ford Coppola','Pat O\'Brien','Ted Koppel'],false,'When the boys find out that their favorite movies are being enhanced, re-released and ruined in the process, they form a club to \"Save Films from their Directors.\"','https://hosting.photobucket.com/images/i/lesaintdumech/SPE609.jpeg',8.2
    ],
    [false,89,6,10,'Bebe\'s Boobs Destroy Society',
        20,"2002-07-17",false,610,false,'TV-MA','Trey Parker','Trey Parker',2.53,false,false,false,'Cartman gets kicked out of the gang when Bebe develops boobs and the boys lose their minds, threatening their friendships and society as we know it.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE610.jpeg',8.2
    ],
    [false,90,6,11,'Child Abduction Is Not Funny',
        20,"2002-07-24",false,611,false,'TV-MA','Trey Parker','Trey Parker',2.01,false,false,false,'In an effort to protect their children from kidnappers, the parents hire the owner of City Wok Restaurant to build the Great Wall of South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE611.jpeg',8.5
    ],
    [false,91,6,12,'A Ladder to Heaven',
        20,"2002-11-06",false,612,false,'TV-MA','Trey Parker','Trey Parker',2.65,false,['Alan Jackson','George W. Bush','Saddam Hussein','Condoleezza Rice','Donald Rumsfeld'],false,'Kenny died with the winning ticket to a prize of endless candy in his pocket. The boys decide to build a ladder to Heaven where they expect to find him and get the ticket back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE612.jpeg',8.7
    ],
    [false,92,6,13,'The Return of the Fellowship of the Ring to the Two Towers',
        20,"2002-11-13",false,613,false,'TV-MA','Trey Parker','Trey Parker',2.80,false,false,false,'The boys embark upon a mythical quest as they set out to return their copy of the "The Lord of the Rings" movie to their local video store.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE613.jpeg',9.4
    ],
    [false,93,6,14,'The Death Camp of Tolerance',
        20,"2002-11-20",false,614,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,false,false,'The boys are sentenced to the Death Camp of Tolerance where they learn how to treat minorities. Mr. Slave and Lemmiwinks make their debut in this episode.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE614.jpeg',8.7
    ],
    [false,94,6,15,'The Biggest Douche in the Universe',
        20,"2002-11-27",false,615,false,'TV-MA','Trey Parker','Trey Parker',1.71,false,['John Edward','Rob Schneider'],false,'When a famous psychic fails to help him exorcise Kenny from his body, Cartman and Chef travel to the moors of Scotland, where Chef\'s mom tries a little of her voodoo magic on him.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE615.jpeg',8.6
    ],
    [false,95,6,16,'My Future Self \'n\' Me',
        20,"2002-12-04",false,616,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.95,false,['Ozzy Osbourne'],false,'When a 32-year-old man claiming to be Stan from the future shows up in South Park, young Stan is forced to come to terms with the loser he will become.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE616.jpeg',8.6
    ],
    [true,96,6,17,'Red Sleigh Down',
        22,"2002-12-11",false,617,false,'TV-MA','Trey Parker','Trey Parker',1.98,false,false,false,'Cartman has to score one big "nice" to be eligible for Christmas presents this year. He recruits Santa, Mr. Hankey and Jesus in a desperate attempt to bring Christmas to the downtrodden citizens of Iraq.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE617.jpeg',8.0
    ],
    [false,97,7,1,'Cancelled',
        22,"2003-03-19",false,704,false,'TV-MA','Trey Parker','Trey Parker',2.34,false,['Jeff Goldblum','Don King','Frank Sinatra','George Burns','Jimmie Walker','Michael Jordan','Missy Elliott','Saddam Hussein'],false,'Stan, Cartman, Kyle and Kenny find out that planet Earth is just one big intergalactic reality show and it\'s about to be cancelled','https://hosting.photobucket.com/images/i/lesaintdumech/SPE704.jpeg',8.4
    ],
    [false,98,7,2,'Krazy Kripples',
        20,"2003-03-26",false,702,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Christopher Reeve','Gene Hackman','Larry King','Saddam Hussein','David Blaine','Osama bin Laden'],false,'Jimmy and Timmy pull together a group of people like themselves and call their new club the \"Crips\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE702.jpeg',8.3
    ],
    [false,99,7,3,'Toilet Paper',
        20,"2003-04-02",false,703,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,false,false,'Cartman convinces the boys to "toilet paper" their teacher\'s house, but Kyle is overwhelmed with guilt.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE703.jpeg',8.3
    ],
    [false,100,7,4,'I\'m a Little Bit Country',
        22,"2003-04-09",false,701,false,'TV-MA','Trey Parker','Trey Parker',3.04,false,['Benjamin Franklin','John Adams','John Dickinson','John Hancock','Thomas Jefferson','Cheech & Chong','Drew Carey','Jared Fogle','Sally Struthers','Stephen Hopkins','Slash'],['Norman Lear'],'The boys join some anti-war protesters because it is a free pass out of school for the day.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE701.jpeg',8
    ],
    [false,101,7,5,'Fat Butt and Pancake Head',
        20,"2003-04-16",false,705,'Jennifer-Lopez-Mania','TV-MA','Trey Parker','Trey Parker',2.60,false,['Jennifer Lopez','Ben Affleck'],['Blaine Fontana'],'One of Cartman\'s body parts becomes famous overnight and rivals the popularity of another superstar.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE705.jpeg',8.4
    ],
    [false,102,7,6,'Lil\' Crime Stoppers',
        22,"2003-04-23",false,706,false,'TV-MA','Trey Parker','Trey Parker',2.40,false,false,false,'After they return a missing doll to a little girl, the police department recognizes the boys\' efforts and officially names them \"junior deputies\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE706.jpeg',8.6
    ],
    [false,103,7,7,'Red Man\'s Greed',
        20,"2003-04-30",false,707,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,false,['Alex Glick'],'The citizens of South Park are being forced off their land to make way for a new super highway after owners of the Three Feathers Indian Casino acquire the town.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE707.jpeg',7.6
    ],
    [false,104,7,8,'South Park Is Gay!',
        20,"2003-10-22",false,708,false,'TV-MA','Trey Parker','Trey Parker',3.10,false,['George W. Bush'],false,'The town of South Park celebrates the new, hip metro-sexual craze.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE708.jpeg',8.1
    ],
    [false,105,7,9,'Christian Rock Hard',
        20,"2003-10-29",false,709,false,'TV-MA','Trey Parker','Trey Parker',2.42,false,['Britney Spears','Alanis Morissette','Metallica','Blink-182','Meat Loaf','Missy Elliott','Ozzy Osbourne','Master P','Rancid'],false,'When the other boys kick Cartman out of their band, he pulls his own group together to make music for Jesus.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE709.jpeg',9
    ],
    [false,106,7,10,'Grey Dawn',
        20,"2003-11-05",false,710,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,false,false,'With South Park\'s senior citizens behind the wheel, more than a few farmer\'s markets have been mowed down. Unwilling to surrender their driver\'s licenses, the elderly fight back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE710.jpeg',8.1
    ],
    [false,107,7,11,'Casa Bonita',
        20,"2003-11-12",false,711,false,'TV-MA','Trey Parker','Trey Parker',2.65,false,false,false,'Kyle chooses Stan, Kenny and Butters to celebrate his birthday at Casa Bonita. When Cartman finds out he\'s not invited, he arranges for Butters to conveniently go \"missing\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE711.jpeg',9.2
    ],
    [false,108,7,12,'All About Mormons',
        20,"2003-11-19",false,712,false,'TV-MA','Trey Parker','Trey Parker',2.35,false,false,false,'A Mormon kid moves to South Park and it\'s up to Stan to kick his ass. But when Stan and his dad meet their new Mormon neighbors, they become fascinated with how genuinely nice they are.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE712.jpeg',8.9
    ],
    [true,109,7,13,'Butt Out',
        22,"2003-12-03",false,713,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,['Rob Reiner'],false,'After singing and dancing representatives from an anti-smoking campaign rap about the dangers of smoking, the kids at South Park Elementary realize how cool it really is and take up the habit.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE713.jpeg',7.9
    ],
    [false,110,7,14,'Raisins',
        22,"2003-12-10",false,714,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,false,false,'After Wendy breaks up with Stan the boys take him to "Raisins", a local restaurant known for its great chicken wings and hot girls.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE714.jpeg',8.6
    ],
    [false,111,7,15,'It\'s Christmas in Canada',
        22,"2003-12-17",false,715,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,['Saddam Hussein'],false,'The town decides to cancel Christmas and take up a collection when Ike\'s Canadian birth parents show up unexpectedly and want their baby back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE715.jpeg',7.5
    ],
    [false,112,8,1,'Good Times with Weapons',
        22,"2004-03-17",false,801,false,'TV-MA','Trey Parker','Trey Parker',3.31,false,false,false,'The boys are transformed into Japanese warriors after they trick a vendor and buy martial arts weapons at a local flea market.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE801.jpeg',9.2
    ],
    [false,113,8,2,'Up the Down Steroid',
        22,"2004-03-24",false,803,false,'TV-MA','Trey Parker','Trey Parker',3.64,false,['Barry Bonds','Jason Giambi','Mark McGwire'],false,'Jimmy is in training for the upcoming Special Olympics and he\'s determined to win at any cost.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE803.jpeg',8.6
    ],
    [true,114,8,3,'The Passion of the Jew',
        22,"2004-03-31-",false,804,false,'TV-MA','Trey Parker','Trey Parker',4.43,false,['Mel Gibson'],false,'Kyle finally sees the blockbuster movie "The Passion of the Christ" and admits that Cartman has been right about the Jewish people all along.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE804.jpeg',8.6
    ],
    [false,115,8,4,'You Got F\'d in the A',
        22,"2004-04-07",false,805,'You Got Served','TV-MA','Trey Parker','Trey Parker',3.96,false,false,['Ming Yao'],'Stan just got served, and now it\'s up to him to put together a team of South Park\'s best dancers to compete against a troupe from Orange County','https://hosting.photobucket.com/images/i/lesaintdumech/SPE805.jpeg',8.1
    ],
    [false,116,8,5,'Awesom-O',
        22,"2004-04-14",false,802,false,'TV-MA','Trey Parker','Trey Parker',3.81,false,['Justin Timberlake'],false,'Cartman plans to learn all of Butters\' innermost secrets and then use them against him, by pretending to be Butters\' new best friend, a robot named A.W.E.S.O.M.-O 4000.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE802.jpeg',9.2
    ],
    [false,117,8,6,'The Jeffersons',
        22,"2004-04-21",false,807,false,'TV-MA','Trey Parker','Trey Parker',4.23,false,['Michael Jackson'],false,'The children of South Park are attracted to "Mr. Jefferson", the new neighbor in town, and Cartman goes out of his way to get "Mr. Jefferson" to love him best..','https://hosting.photobucket.com/images/i/lesaintdumech/SPE807.jpeg',8.6
    ],
    [false,118,8,7,'Goobacks',
        22,"2004-04-28",false,806,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Bill O\'Reilly','Aaron Brown'],false,'Humans from the year 3035 are traveling to South Park through a recently opened time portal and are looking for work.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE806.jpeg',8.3
    ],
    [false,119,8,8,'Douche and Turd',
        22,"2004-10-27",false,808,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,['P. Diddy'],false,'A PETA protest against the use of a cow as South Park Elementary\'s mascot forces the student body to choose a new one.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE808.jpeg',8.4
    ],
    [false,120,8,9,'Something Wall-Mart This Way Comes',
        22,"2004-11-03",false,809,false,'TV-MA','Trey Parker','Trey Parker',3.05,false,false,false,'In order to save South Park, Stan and Kyle have to find a way to destroy the ever-expanding Wall-Mart superstore while keeping Cartman from stabbing them in the back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE809.jpeg',8.6
    ],
    [false,121,8,10,'Preschool',
        22,"2004-11-10",false,810,false,'TV-MA','Trey Parker','Trey Parker',3.26,false,false,false,'Trent Boyett, the kid who took the fall for the boys 5 years ago is getting out of Juvie, and his first order of business is revenge.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE810.jpeg',8.4
    ],
    [false,122,8,11,'Quest for Ratings',
        22,"2004-11-17",false,811,false,'TV-MA','Trey Parker','Trey Parker',3.20,false,false,false,'The boys of South Park produce their own morning news show on the school\'s closed-circuit television station and are immediately caught up in an intense competition for ratings.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE811.jpeg',8.2
    ],
    [false,123,8,12,'Stupid Spoiled Whore Video Playset',
        22,"2004-12-01",false,812,false,'TV-MA','Trey Parker','Trey Parker',3.14,false,['Paris Hilton'],false,'Disturbed by the corruptive influence Paris Hilton has on all little girls in South Park, one of the town\'s favorite citizens challenges her to a \"whore-off\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE812.jpeg',8.4
    ],
    [false,124,8,13,'Cartman\'s Incredible Gift',
        22,"2004-12-08",false,813,false,'TV-MA','Trey Parker','Trey Parker',2.66,false,false,false,'After sustaining a severe head injury, Cartman appears to have the power to see into the future. South Park detectives are quick to enlist his help in cracking unsolved murder cases.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE813.jpeg',8.6
    ],
    [false,125,8,14,'Woodland Critter Christmas',
        22,"2004-12-15",false,814,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,false,false,'Stan agrees to help a group of adorable Woodland Critters build a manger in anticipation of the birth of their Lord and Savior, only to find out that they serve Satan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE814.jpeg',9.1
    ],
    [false,126,9,1,'Mr. Garrison\'s Fancy New Vagina'//,
        //22,"2005-03-09",false,901,false,'TV-MA','Trey Parker','Trey Parker',2.97,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE901.jpeg',7.6
    ],
    [false,127,9,2,'Die Hippie, Die'//,
        //22,"2005-03-16",false,902,false,'TV-MA','Trey Parker','Trey Parker',2.36,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE902.jpeg',8.6
    ],
    [false,128,9,3,'Wing'//,
        //22,"2005-03-23",false,903,false,'TV-MA','Trey Parker','Trey Parker',2.30,false,Celebrities,['Wing','Lou Rawls'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE903.jpeg',7.4
    ],
    [false,129,9,4,'Best Friends Forever'//,
        //22,"2005-03-30",false,904,false,'TV-MA','Trey Parker','Trey Parker',2.72,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE904.jpeg',8.5
    ],
    [false,130,9,5,'The Losing Edge'//,
        //22,"2005-04-06",false,905,false,'TV-MA','Trey Parker','Trey Parker',2.62,false,Celebrities,['Diedrich Bader'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE905.jpeg',8.6
    ],
    [false,131,9,6,'The Death of Eric Cartman'//,
        //22,"2005-04-13",false,906,false,'TV-MA','Trey Parker','Trey Parker',2.61,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE906.jpeg',9.2
    ],
    [false,132,9,7,'Erection Day'//,
        //22,"2005-04-20",false,907,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE907.jpeg',7.6
    ],
    [false,133,9,8,'Two Days Before the Day After Tomorrow'//,
        //22,"2005-10-19",false,908,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE908.jpeg',8.4
    ],
    [false,134,9,9,'Marjorine'//,
        //22,"2005-10-26",false,909,false,'TV-MA','Trey Parker','Trey Parker',2.25,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE909.jpeg',8.8
    ],
    [false,135,9,10,'Follow That Egg!',
        22,"2005-11-02",false,910,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,false,false,'Mrs. Garrison realizes he still has feelings for Mr. Slave. But Mr. Slave has moved on. He plans to marry his new love as soon as the Governor signs the same-sex marriage bill. In an effort to thwart Slave\'s plans, Mrs. Garrison leads the charge against gay marriage.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE910.jpeg',8
    ],
    [false,136,9,11,'Ginger Kids'//,
        //22,"2005-11-09",false,911,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE911.jpeg',8.8
    ],
    [false,137,9,12,'Trapped in the Closet'//,
        //22,"2005-11-16",false,912,false,'TV-MA','Trey Parker','Trey Parker',2.41,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE912.jpeg',9.1
    ],
    [false,138,9,13,'Free Willzyx'//,
        //22,"2005-11-30",false,913,false,'TV-MA','Trey Parker','Trey Parker',2.48,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE913.jpeg',8.1
    ],
    [false,139,9,14,'Bloody Mary'//,
        //22,"2005-12-07",false,914,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE914.jpeg',7.9
    ],
    [false,140,10,1,'The Return of Chef'//,
        //22,"2006-03-22",false,1001,false,'TV-MA','Trey Parker','Trey Parker',3.49,false,Celebrities,['Peter Serafinowicz'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1001.jpeg',8
    ],
    [false,141,10,2,'Smug Alert!'//,
        //22,"2006-03-29",false,1002,false,'TV-MA','Trey Parker','Trey Parker',3.38,false,Celebrities,['George Clooney'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1002.jpeg',8.1
    ],
    [false,142,10,3,'Cartoon Wars Part I'//,
        //22,"2006-04-05",false,1003,false,'TV-MA','Trey Parker','Trey Parker',3.02,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1003.jpeg',8.7
    ],
    [false,143,10,4,'Cartoon Wars Part II'//,
        //22,"2006-04-12",false,1004,false,'TV-MA','Trey Parker','Trey Parker',3.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1004.jpeg',8.8
    ],
    [false,144,10,5,'A Million Little Fibers'//,
        //22,"2006-04-19",false,1005,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1005.jpeg',6.1
    ],
    [false,145,10,6,'ManBearPig'//,
        //22,"2006-04-26",false,1006,false,'TV-MA','Trey Parker','Trey Parker',2.72,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1006.jpeg',7.9
    ],
    [false,146,10,7,'Tsst'//,
        //22,"2006-05-03",false,1007,false,'TV-MA','Trey Parker','Trey Parker',2.88,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1007.jpeg',9.1
    ],
    [false,147,10,8,'Make Love, Not Warcraft'//,
        //22,"2006-10-04",false,1008,false,'TV-MA','Trey Parker','Trey Parker',3.40,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1008.jpeg',9.5
    ],
    [false,148,10,9,'Mystery of the Urinal Deuce'//,
        //22,"2006-10-11",false,1009,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1009.jpeg',8.2
    ],
    [false,149,10,10,'Miss Teacher Bangs a Boy'//,
        //22,"2006-10-18",false,1010,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1010.jpeg',8.5
    ],
    [false,150,10,11,'Hell on Earth 2006'//,
        //22,"2006-10-25",false,1011,false,'TV-MA','Trey Parker','Trey Parker',2.96,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1011.jpeg',8
    ],
    [false,151,10,12,'Go God Go'//,
        //22,"2006-11-01",false,1012,false,'TV-MA','Trey Parker','Trey Parker',3.25,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1012.jpeg',8.5
    ],
    [false,152,10,13,'Go God Go XII'//,
        //22,"2006-11-08",false,1013,false,'TV-MA','Trey Parker','Trey Parker',3.53,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1013.jpeg',8.6
    ],
    [false,153,10,14,'Stanley\'s Cup'//,
        //22,"2006-11-15",false,1014,false,'TV-MA','Trey Parker','Trey Parker',2.94,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1014.jpeg',7.4
    ],
    [false,154,11,1,'With Apologies to Jesse Jackson'//,
        //22,"2007-03-07",false,1101,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1101.jpeg',8.9
    ],
    [false,155,11,2,'Cartman Sucks'//,
        //22,"2007-03-14",false,1102,false,'TV-MA','Trey Parker','Trey Parker',2.75,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1102.jpeg',8.9
    ],
    [false,156,11,3,'Lice Capades'//,
        //22,"2007-03-21",false,1103,false,'TV-MA','Trey Parker','Trey Parker',3.06,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1103.jpeg',8
    ],
    [false,157,11,4,'The Snuke'//,
        //22,"2007-03-28",false,1104,false,'TV-MA','Trey Parker','Trey Parker',3.17,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1104.jpeg',8.1
    ],
    [true,158,11,5,'Fantastic Easter Special'//,
        //22,"2007-04-04",false,1105,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1105.jpeg',8.1
    ],
    [false,159,11,6,'D-Yikes!'//,
        //22,"2007-04-11",false,1106,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1106.jpeg',7.6
    ],
    [false,160,11,7,'Night of the Living Homeless'//,
        //22,"2007-04-18",false,1107,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1107.jpeg',8.7
    ],
    [false,161,11,8,'Le Petit Tourette'//,
        //22,"2007-10-03",false,1108,false,'TV-MA','Trey Parker','Trey Parker',3.323,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1108.jpeg',9
    ],
    [false,162,11,9,'More Crap'//,
        //22,"2007-10-10",false,1109,false,'TV-MA','Trey Parker','Trey Parker',2.98,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1109.jpeg',8.1
    ],
    [false,163,11,10,'Imaginationland Episode I'//,
        //22,"2007-10-17",false,1110,false,'TV-MA','Trey Parker','Trey Parker',3.43,false,Celebrities,['Jonathan Kimmel'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1110.jpeg',9
    ],
    [false,164,11,11,'Imaginationland Episode II'//,
        //22,"2007-10-24",false,1111,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1111.jpeg',9
    ],
    [false,165,11,12,'Imaginationland Episode III'//,
        //22,"2007-10-31",false,1112,false,'TV-MA','Trey Parker','Trey Parker',3.87,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1112.jpeg',9
    ],
    [false,166,11,13,'Guitar Queer-O'//,
        //22,"2007-11-07",false,1113,false,'TV-MA','Trey Parker','Trey Parker',3.97,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1113.jpeg',8.4
    ],
    [false,167,11,14,'The List'//,
        //22,"2007-11-14",false,1114,false,'TV-MA','Trey Parker','Trey Parker',3.77,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1114.jpeg',8.5
    ],
    [true,168,12,1,'Tonsil Trouble'//,
        //22,"2008-03-12",false,1201,false,'TV-MA','Trey Parker','Trey Parker',3.07,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1201.jpeg',8
    ],
    [false,169,12,2,'Britney\'s New Look'//,
        //22,"2008-"03-19,false,1202,false,'TV-MA','Trey Parker','Trey Parker',2.97,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1202.jpeg',7.1
    ],
    [false,170,12,3,'Major Boobage'//,
        //22,"2008-03-26",false,1203,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1203.jpeg',8.7
    ],
    [false,171,12,4,'Canada on Strike'//,
        //22,"2008-04-02",false,1204,false,'TV-MA','Trey Parker','Trey Parker',2.80,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1204.jpeg',7.7
    ],
    [true,172,12,5,'Eek, a Penis!'//,
        //22,"2008-04-09",false,1205,false,'TV-MA','Trey Parker','Trey Parker',3.50,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1205.jpeg',7.6
    ],
    [false,173,12,6,'Over Logging'//,
        //22,"2008-04-16",false,1206,false,'TV-MA','Trey Parker','Trey Parker',3.13,false,Celebrities,['Amir Hisham Ouazzani'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1206.jpeg',8.5
    ],
    [false,174,12,7,'Super Fun Time'//,
        //22,"2008-04-23",false,1207,false,'TV-MA','Trey Parker','Trey Parker',3.08,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1207.jpeg',8.4
    ],
    [false,175,12,8,'The China Probrem'//,
        //22,"2008-10-08",false,1208,false,'TV-MA','Trey Parker','Trey Parker',3.73,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1208.jpeg',7.7
    ],
    [false,176,12,9,'Breast Cancer Show Ever'//,
        //22,"2008-10-15",false,1209,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1209.jpeg',8.8
    ],
    [false,177,12,10,'Pandemic'//,
        //22,"2008-10-22",false,1210,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1210.jpeg',8
    ],
    [false,178,12,11,'Pandemic 2: The Startling'//,
        //22,"2008-10-29",false,1211,false,'TV-MA','Trey Parker','Trey Parker',3.08,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1211.jpeg',7.8
    ],
    [false,179,12,12,'About Last Night...'//,
        //22,"2008-11-05",false,1212,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1212.jpeg',7.6
    ],
    [false,180,12,13,'Elementary School Musical'//,
        //22,"2008-11-12",false,1213,false,'TV-MA','Trey Parker','Trey Parker',2.96,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1213.jpeg',7.6
    ],
    [false,181,12,14,'The Ungroundable'//,
        //22,"2008-11-19",false,1214,false,'TV-MA','Trey Parker','Trey Parker',3.29,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1214.jpeg',7.7
    ],
    [false,182,13,1,'The Ring'//,
        //22,"2009-03-11",false,1301,false,'TV-MA','Trey Parker','Trey Parker',3.41,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1301.jpeg',8.1
    ],
    [false,183,13,2,'The Coon'//,
        //22,"2009-03-18",false,1302,false,'TV-MA','Trey Parker','Trey Parker',3.27,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1302.jpeg',8.4
    ],
    [false,184,13,3,'Margaritaville'//,
        //22,"2009-03-25",false,1303,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1303.jpeg',8.5
    ],
    [false,185,13,4,'Eat, Pray, Queef'//,
        //22,"2009-"04-01,false,1304,false,'TV-MA','Trey Parker','Trey Parker',3.01,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1304.jpeg',6.5
    ],
    [false,186,13,5,'Fishsticks'//,
        //22,"2009-04-08",false,1305,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1305.jpeg',8.8
    ],
    [true,187,13,6,'Pinewood Derby'//,
        //22,"2009-04-15",false,1306,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1306.jpeg',7.8
    ],
    [true,188,13,7,'Fatbeard'//,
        //22,"2009-04-22",false,1307,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1307.jpeg',8.1
    ],
    [false,189,13,8,'Dead Celebrities'//,
        //22,"2009-10-07",false,1308,false,'TV-MA','Trey Parker','Trey Parker',2.67,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1308.jpeg',7.7
    ],
    [false,190,13,9,'Butters\' Bottom Bitch'//,
        //22,"2009-10-14",false,1309,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1309.jpeg',8.9
    ],
    [true,191,13,10,'W.T.F.'//,
        //22,"2009-10-21",false,1310,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1310.jpeg',8.3
    ],
    [false,192,13,11,'Whale Whores'//,
        //22,"2009-10-28",false,1311,false,'TV-MA','Trey Parker','Trey Parker',2.57,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1311.jpeg',8.1
    ],
    [true,193,13,12,'The F Word'//,
        //22,"2009-11-04",false,1312,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1312.jpeg',8.1
    ],
    [true,194,13,13,'Dances with Smurfs'//,
        //22,"2009-11-11",false,1313,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1313.jpeg',8.1
    ],
    [false,195,13,14,'Pee'//,
        //22,"2009-11-18",false,1314,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1314.jpeg',7.7
    ],
    [false,196,14,1,'Sexual Healing'//,
        //22,"2010-03-17",false,1401,false,'TV-MA','Trey Parker','Trey Parker',3.74,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1401.jpeg',7.5
    ],
    [false,197,14,2,'The Tale of Scrotie McBoogerballs'//,
        //22,"2010-03-24",false,1402,false,'TV-MA','Trey Parker','Trey Parker',3.24,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1402.jpeg',8
    ],
    [false,198,14,3,'Medicinal Fried Chicken'//,
        //22,"2010-03-31",false,1403,false,'TV-MA','Trey Parker','Trey Parker',2.99,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1403.jpeg',8.7
    ],
    [false,199,14,4,'You Have 0 Friends'//,
        //22,"2010-04-07",false,1404,false,'TV-MA','Trey Parker','Trey Parker',3.07,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1404.jpeg',8.7
    ],
    ['BLOCKED',200,14,5,'200'//,
        //22,"2010-04-14",false,1405,false,'TV-MA','Trey Parker','Trey Parker',3.33,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1405.jpeg',8.8
    ],
    ['BLOCKED',201,14,6,'201'//,
        //22,"2010-04-21",false,1406,false,'TV-MA','Trey Parker','Trey Parker',3.50,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1406.jpeg',8.8
    ],
    [false,202,14,7,'Crippled Summer'//,
        //22,"2010-04-28",false,1407,false,'TV-MA','Trey Parker','Trey Parker',3.55,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1407.jpeg',6.8
    ],
    [false,203,14,8,'Poor and Stupid'//,
        //22,"2010-10-06",false,1408,false,'TV-MA','Trey Parker','Trey Parker',3.14,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1408.jpeg',7.5
    ],
    [false,204,14,9,'It\'s a Jersey Thing'//,
        //21,"2010-10-13",false,1409,false,'TV-MA','Trey Parker','Trey Parker',3.25,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1409.jpeg',7.8
    ],
    [false,205,14,10,'Insheeption'//,
        //23,"2010-10-20",false,1410,false,'TV-MA','Trey Parker','Trey Parker',2.89,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1410.jpeg',8.1
    ],
    [false,206,14,11,'Coon 2: Hindsight'//,
        //23,"2010-10-27",false,1411,false,'TV-MA','Trey Parker','Trey Parker',2.76,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1411.jpeg',8.1
    ],
    [false,207,14,12,'Mysterion Rises'//,
        //21,"2010-11-03",false,1412,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1412.jpeg',8.3
    ],
    [false,208,14,13,'Coon vs. Coon and Friends'//,
        //21,"2010-11-10",false,1413,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1413.jpeg',8.3
    ],
    [false,209,14,14,'Cr\u00E8me Fra\u00EEche'//,
        //23,"2010-11-17",false,1414,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1414.jpeg',8.2
    ],
    [false,210,15,1,'HumancentiPad'//,
        //21,"2011-04-27",false,1501,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1501.jpeg',7.7
    ],
    [false,211,15,2,'Funnybot'//,
        //23,"2011-05-04",false,1502,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1502.jpeg',6.4
    ],
    [false,212,15,3,'Royal Pudding'//,
        //21,"2011-05-11",false,1503,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1503.jpeg',6.7
    ],
    [false,213,15,4,'T.M.I.'//,
        //23,"2011-05-18",false,1504,false,'TV-MA','Trey Parker','Trey Parker',2.42,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1504.jpeg',8
    ],
    [false,214,15,5,'Crack Baby Athletic Association'//,
        //23,"2011-05-25",false,1505,false,'TV-MA','Trey Parker','Trey Parker',2.53,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1505.jpeg',7.5
    ],
    [false,215,15,6,'City Sushi'//,
        //30,"2011-06-01",false,1506,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1506.jpeg',8
    ],
    [false,216,15,7,'You\'re Getting Old'//,
        //23,"2011-06-08",false,1507,false,'TV-MA','Trey Parker','Trey Parker',2.30,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1507.jpeg',8.6
    ],
    [false,217,15,8,'Ass Burgers'//,
        //23,"2011-10-05",false,1508,false,'TV-MA','Trey Parker','Trey Parker',2.94,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1508.jpeg',8.1
    ],
    [false,218,15,9,'The Last of the Meheecans'//,
        //23,"2011-10-12",false,1509,false,'TV-MA','Trey Parker','Trey Parker',2.90,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1509.jpeg',8.1
    ],
    [false,219,15,10,'Bass to Mouth'//,
        //23,"2011-10-19",false,1510,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1510jpeg',7.5
    ],
    [false,220,15,11,'Broadway Bro Down'//,
        //23,"2011-10-26",false,1511,false,'TV-MA','Trey Parker','Trey Parker & Robert Lopez',2.92,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1511.jpeg',7.8
    ],
    [false,221,15,12,'1\u0025'//,
        //21,"2011-11-02",false,1512,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1512.jpeg',7.8
    ],
    [false,222,15,13,'A History Channel Thanksgiving'//,
        //23,"2011-11-09",false,1513,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1513.jpeg',7.2
    ],
    [false,223,15,14,'The Poor Kid'//,
        //23,"2011-"11-16,false,1514,false,'TV-MA','Trey Parker','Trey Parker',2.41,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1514.jpeg',7.9
    ],
    [false,224,16,1,'Reverse Cowgirl'//,
        //30,"2012-03-14",false,1601,false,'TV-MA','Trey Parker','Trey Parker',2.63,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1601.jpeg',7.7
    ],
    [false,225,16,2,'Cash for Gold'//,
        //30,"2012-03-21",false,1602,false,'TV-MA','Trey Parker','Trey Parker',2.31,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1602.jpeg',7.9
    ],
    [false,226,16,3,'Faith Hilling'//,
        //21,"2012-03-28",false,1603,false,'TV-MA','Trey Parker','Trey Parker',2.70,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1603.jpeg',7.1
    ],
    [false,227,16,4,'Jewpacabra'//,
        //23,"2012-04-04",false,1604,false,'TV-MA','Trey Parker','Trey Parker',2.69,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1604.jpeg',6.7
    ],
    [false,228,16,5,'Butterballs'//,
        //22,"2012-04-11",false,1605,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1605.jpeg',7.6
    ],
    [false,229,16,6,'I Should Have Never Gone Ziplining'//,
        //21,"2012-04-18",false,1606,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1606.jpeg',7.1
    ],
    [false,230,16,7,'Cartman Finds Love'//,
        //23,"2012-04-25",false,1607,false,'TV-MA','Trey Parker','Trey Parker',2.33,false,Celebrities,['Brad Paisley'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1607.jpeg',8
    ],
    [false,231,16,8,'Sarcastaball'//,
        //21,"2012-09-26",false,1608,false,'TV-MA','Trey Parker','Trey Parker',1.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1608.jpeg',7.5
    ],
    [false,232,16,9,'Raising the Bar'//,
        //21,"2012-10-03",false,1609,false,'TV-MA','Trey Parker','Trey Parker',1.69,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1609.jpeg',8.1
    ],
    [true,233,16,10,'Insecurity'//,
        //23,"2012-10-10",false,1610,false,'TV-MA','Trey Parker','Trey Parker',2.33,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1610.jpeg',8.3
    ],
    [false,234,16,11,'Going Native'//,
        //23,"2012-10-17",false,1611,false,'TV-MA','Trey Parker','Trey Parker',1.98,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1611.jpeg',6.7
    ],
    [false,235,16,12,'A Nightmare on FaceTime'//,
        //23,"2012-10-24",false,1612,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1612.jpeg',8.3
    ],
    [false,236,16,13,'A Scause for Applause'//,
        //23,"2012-10-31",false,1613,false,'TV-MA','Trey Parker','Trey Parker',1.96,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1613.jpeg',7.1
    ],
    [false,237,16,14,'Obama Wins!'//,
        //23,"2012-11-07",false,1614,false,'TV-MA','Trey Parker','Trey Parker',2.19,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1614.jpeg',7.4
    ],
    [false,238,17,1,'Let Go, Let Gov'//,
        //23,"2013-09-25",false,1701,false,'TV-MA','Trey Parker','Trey Parker',2.89,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1701.jpeg',7.4
    ],
    [false,239,17,2,'Informative Murder Porn'//,
        //22,"2013-10-02",false,1702,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1702.jpeg',8
    ],
    [false,240,17,3,'World War Zimmerman'//,
        //21,"2013-10-09",false,1703,false,'TV-MA','Trey Parker','Trey Parker',2.06,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1703.jpeg',7.7
    ],
    [false,241,17,4,'Goth Kids 3: Dawn of the Posers'//,
        //21,"2013-10-23",false,1704,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1704.jpeg',6.8
    ],
    [false,242,17,5,'Taming Strange'//,
        //23,"2013-10-30",false,1705,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1705.jpeg',7
    ],
    [false,243,17,6,'Ginger Cow'//,
        //22,"2013-11-06",false,1706,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1706.jpeg',7.7
    ],
    [false,244,17,7,'Black Friday'//,
        //23,"2013-11-13",false,1707,false,'TV-MA','Trey Parker','Trey Parker',2.07,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1707.jpeg',8.9
    ],
    [false,245,17,8,'A Song of Ass and Fire'//,
        //23,"2013-11-20",false,1708,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1708.jpeg',8.8
    ],
    [false,246,17,9,'Titties and Dragons'//,
        //22,"2013-12-04",false,1709,false,'TV-MA','Trey Parker','Trey Parker',2.48,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1709.jpeg',8.8
    ],
    [true,247,17,10,'The Hobbit'//,
        //21,"2013-12-11",false,1710,false,'TV-MA','Trey Parker','Trey Parker',2.17,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1710.jpeg',8.4
    ],
    [false,248,18,1,'Go Fund Yourself'//,
        //23,"2014-09-24",false,1801,false,'TV-MA','Trey Parker','Trey Parker',2.40,false,Celebrities,['Roger Goodell'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1801.jpeg',7.7
    ],
    [false,249,18,2,'Gluten Free Ebola'//,
        //23,"2014-10-01",false,1802,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1802.jpeg',7.7
    ],
    [false,250,18,3,'The Cissy'//,
        //23,"2014-10-08",false,1803,false,'TV-MA','Trey Parker','Trey Parker',2.02,false,Celebrities,['Sia'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1803.jpeg',8.5
    ],
    [false,251,18,4,'Handicar'//,
        //22,"2014-10-15",false,1804,false,'TV-MA','Trey Parker','Trey Parker',1.73,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1804.jpeg',7.3
    ],
    [false,252,18,5,'The Magic Bush'//,
        //22,"2014-10-29",false,1805,false,'TV-MA','Trey Parker','Trey Parker',1.73,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1805.jpeg',7.9
    ],
    [false,253,18,6,'Freemium Isn\'t Free'//,
        //22,"2014-11-05",false,1806,false,'TV-MA','Trey Parker','Trey Parker',1.70,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1806.jpeg',8.1
    ],
    [false,254,18,7,'Grounded Vindaloop'//,
        //23,"2014-11-12",false,1807,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1807.jpeg',9.1
    ],
    [false,255,18,8,'Cock Magic'//,
        //21,"2014-11-19",false,1808,false,'TV-MA','Trey Parker','Trey Parker',1.69,false,Celebrities,['Peter Serafinowicz'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1808.jpeg',8.3
    ],
    [false,256,18,9,'\u0023REHASH'//,
        //22,"2014-12-03",false,1809,false,'TV-MA','Trey Parker','Trey Parker',2.10,false,Celebrities,['PewDiePie'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1809.jpeg',7.3
    ],
    [false,257,18,10,'\u0023HappyHolograms'//,
        //22,"2014-12-10",false,1810,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,Celebrities,['PewDiePie'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1810.jpeg',6.8
    ],
    [true,258,19,1,'Stunning and Brave'//,
        //22,"2015-09-16",false,1901,false,'TV-MA','Trey Parker','Trey Parker',1.76,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1901.jpeg',7.6
    ],
    [true,259,19,2,'Where My Country Gone?'//,
        //22,"2015-09-23",false,1902,false,'TV-MA','Trey Parker','Trey Parker',1.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1902.jpeg',8.1
    ],
    [true,260,19,3,'The City Part of Town'//,
        //22,"2015-09-30",false,1903,false,'TV-MA','Trey Parker','Trey Parker',1.32,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1903.jpeg',7.6
    ],
    [true,261,19,4,'You\'re Not Yelping'//,
        //22,"2015-10-14",false,1904,false,'TV-MA','Trey Parker','Trey Parker',1.37,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1904.jpeg',8
    ],
    [true,262,19,5,'Safe Space'//,
        //22,"2015-10-21",false,1905,false,'TV-MA','Trey Parker','Trey Parker',1.21,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1905.jpeg',8.3
    ],
    [true,263,19,6,'Tweek x Craig'//,
        //22,"2015-10-28",false,1906,false,'TV-MA','Trey Parker','Trey Parker',1.34,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1906.jpeg',8.1
    ],
    [true,264,19,7,'Naughty Ninjas'//,
        //22,"2015-11-11",false,1907,false,'TV-MA','Trey Parker','Trey Parker',1.42,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1907.jpeg',8.2
    ],
    [true,265,19,8,'Sponsored Content'//,
        //22,"2015-11-18",false,1908,false,'TV-MA','Trey Parker','Trey Parker',1.30,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1908.jpeg',8.7
    ],
    [true,266,19,9,'Truth and Advertising'//,
        //22,"2015-12-02",false,1909,false,'TV-MA','Trey Parker','Trey Parker',1.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1909.jpeg',8
    ],
    [true,267,19,10,'PC Principal Final Justice'//,
        //22,"2015-12-09",false,1910,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE19010.jpeg',7.8
    ],
    [true,268,20,1,'Member Berries'//,
        //22,"2016-09-14",false,2001,false,'TV-MA','Trey Parker','Trey Parker',2.17,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2001.jpeg',7.8
    ],
    [true,269,20,2,'Skank Hunt'//,
        //22,"2016-09-21",false,2002,false,'TV-MA','Trey Parker','Trey Parker',1.58,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2002.jpeg',8.1
    ],
    [true,270,20,3,'The Damned'//,
        //22,"2016-09-28",false,2003,false,'TV-MA','Trey Parker','Trey Parker',1.79,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2003.jpeg',8
    ],
    [true,271,20,4,'Wieners Out'//,
        //22,"2016-10-12",false,2004,false,'TV-MA','Trey Parker','Trey Parker',1.82,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2004.jpeg',7.8
    ],
    [true,272,20,5,'Douche and a Danish'//,
        //17,"2016-10-19",false,2005,false,'TV-MA','Trey Parker','Trey Parker',1.32,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2005.jpeg',7.3
    ],
    [true,273,20,6,'Fort Collins'//,
        //22,"2016-10-26",false,2006,false,'TV-MA','Trey Parker','Trey Parker',1.41,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2006.jpeg',7.3
    ],
    [true,274,20,7,'Oh, Jeez'//,
        //22,"2016-11-09",false,2007,false,'TV-MA','Trey Parker','Trey Parker',2.03,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2007.jpeg',7.1
    ],
    [true,275,20,8,'Members Only'//,
        //22,"2016-11-16",false,2008,false,'TV-MA','Trey Parker','Trey Parker',1.79,false,Celebrities,['Elon Musk'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2008.jpeg',7.3
    ],
    [true,276,20,9,'Not Funny'//,
        //22,"2016-11-30",false,2009,false,'TV-MA','Trey Parker','Trey Parker',1.45,false,Celebrities,['Elon Musk'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2009.jpeg',7.3
    ],
    [true,277,20,10,'The End of Serialization as We Know It'//,
        //22,"2016-12-07",false,2010,false,'TV-MA','Trey Parker','Trey Parker',1.82,false,Celebrities,['Elon Musk'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2010.jpeg',7.1
    ],
    [true,278,21,1,'White People Renovating Houses'//,
        //22,"2017-09-13",false,2101,false,'TV-MA','Trey Parker','Trey Parker',1.68,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2101.jpeg',6.8
    ],
    [true,279,21,2,'Put It Down'//,
        //22,"2017-09-20",false,2102,false,'TV-MA','Trey Parker','Trey Parker',1.25,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2102.jpeg',8
    ],
    [true,280,21,3,'Holiday Special'//,
        //22,"2017-09-27",false,2103,false,'TV-MA','Trey Parker','Trey Parker',1.25,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2103.jpeg',7.6
    ],
    [true,281,21,4,'Franchise Prequel'//,
        //22,"2017-10-11",false,2104,false,'TV-MA','Trey Parker','Trey Parker',1.12,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2104.jpeg',7.4
    ],
    [true,282,21,5,'Hummels \u0026 Heroin'//,
        //22,"2017-10-18",false,2105,false,'TV-MA','Trey Parker','Trey Parker',0.93,false,Celebrities,['Josh Gad'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2105.jpeg',7.3
    ],
    [true,283,21,6,'Sons a Witches'//,
        //22,"2017-10-25",false,2106,false,'TV-MA','Trey Parker','Trey Parker',1.22,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2106.jpeg',7.3
    ],
    [true,284,21,7,'Doubling Down'//,
        //22,"2017-11-08",false,2107,false,'TV-MA','Trey Parker','Trey Parker',1.13,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2107.jpeg',7.5
    ],
    [true,285,21,8,'Moss Piglets'//,
        //22,"2017-11-15",false,2108,false,'TV-MA','Trey Parker','Trey Parker',1.09,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2108.jpeg',7
    ],
    [true,286,21,9,'Super Hard PCness'//,
        //22,"2017-11-29",false,2109,false,'TV-MA','Trey Parker','Trey Parker',0.90,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2109.jpeg',7.7
    ],
    [true,287,21,10,'Splatty Tomato'//,
        //22,"2017-12-06",false,2110,false,'TV-MA','Trey Parker','Trey Parker',0.97,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2110.jpeg',7.2
    ],
    [true,288,22,1,'Dead Kids'//,
        //22,"2018-09-26",false,2201,false,'TV-MA','Trey Parker','Trey Parker',1.09,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2201.jpeg',8.1
    ],
    [true,289,22,2,'A Boy and a Priest'//,
        //22,"2018-10-03",false,2202,false,'TV-MA','Trey Parker','Trey Parker',0.93,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2202.jpeg',7.6
    ],
    [true,290,22,3,'The Problem with a Poo'//,
        //22,"2018-10-10",false,2203,false,'TV-MA','Trey Parker','Trey Parker',0.97,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2203.jpeg',6.4
    ],
    [true,291,22,4,'Tegridy Farms'//,
        //22,"2018-10-17",false,2204,false,'TV-MA','Trey Parker','Trey Parker',0.71,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2204.jpeg',7.8
    ],
    [true,292,22,5,'The Scoots'//,
        //22,"2018-10-31",false,2205,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2205.jpeg',8
    ],
    [true,293,22,6,'Time to Get Cereal'//,
        //22,"2018-11-07",false,2206,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2206.jpeg',7.7
    ],
    [true,294,22,7,'Nobody Got Cereal?'//,
        //22,"2018-11-14",false,2207,false,'TV-MA','Trey Parker','Trey Parker',0.82,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2207.jpeg',7.7
    ],
    [true,295,22,8,'Buddha Box'//,
        //22,"2018-11-28",false,2208,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,Celebrities,['Michael James Scott'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2208.jpeg',7.3
    ],
    [true,296,22,9,'Unfulfilled'//,
        //22,"2018-12-05",false,2209,false,'TV-MA','Trey Parker','Trey Parker',0.77,false,Celebrities,['Casey Nicholaw'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2209.jpeg',7.6
    ],
    [true,297,22,10,'Bike Parade'//,
        //22,"2018-12-12",false,2210,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,Celebrities,['Casey Nicholaw'],'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2210.jpeg',7.6
    ],
    [true,298,23,1,'Mexican Joker'//,
        //22,"2019-09-25",false,2301,false,'TV-MA','Trey Parker','Trey Parker',0.92,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2301.jpeg',7.4
    ],
    [true,299,23,2,'Band in China'//,
        //19,"2019-10-02",false,2302,false,'TV-MA','Trey Parker','Trey Parker',0.73,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2302.jpeg',8.6
    ],
    [true,300,23,3,'Shots!!!'//,
        //22,"2019-10-09",false,2303,false,'TV-MA','Trey Parker','Trey Parker',0.95,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2303.jpeg',7.5
    ],
    [true,301,23,4,'Let Them Eat Goo'//,
        //22,"2019-10-16",false,2304,false,'TV-MA','Trey Parker','Trey Parker',0.77,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2304.jpeg',7.9
    ],
    [true,302,23,5,'Tegridy Farms Halloween Special'//,
        //22,"2019-10-30",false,2305,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2305.jpeg',7.1
    ],
    [true,303,23,6,'Season Finale'//,
        //22,"2019-11-06",false,2306,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2306.jpeg',7.1
    ],
    [true,304,23,7,'Board Girls'//,
        //22,"2019-11-13",false,2307,false,'TV-MA','Trey Parker','Trey Parker',0.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2307.jpeg',8.1
    ],
    [true,305,23,8,'Turd Burglars'//,
        //20,"2019-11-27",false,2308,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2308.jpeg',7.5
    ],
    [true,306,23,9,'Basic Cable'//,
        //20,"2019-12-04",false,2309,false,'TV-MA','Trey Parker','Trey Parker',0.80,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2309.jpeg',7.7
    ],
    [true,307,23,10,'Christmas Snow'//,
        //22,"2019-12-11",false,2310,false,'TV-MA','Trey Parker','Trey Parker',0.81,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2310.jpeg',7.6
    ],
    [true,308,24,1,'The Pandemic Special',
        48,"2020-09-30",false,2401,false,'TV-MA','Trey Parker','Trey Parker',2.27,false,['Dr. Anthony Fauci'],false,'Randy comes to terms with his role in the COVID-19 outbreak as the on-going pandemic presents continued challenges to the citizens of South Park. The kids happily head back to school but nothing resembles the normal that they once knew; not their teachers, not their homeroom, not even Eric Cartman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2401.jpeg',8.1
    ],
    [true,309,24,2,'South ParQ Vaccination Special',
        47,"2021-03-10",false,2402,false,'TV-MA','Trey Parker','Trey Parker',1.74,false,['Jake Angeli','Jeffrey Epstein','Kanye West','Michael Moore','Brad Paisley','Al Gore','Barbra Streisand','Colonel Sanders','David Blaine','Jared Fogle'],false,'The citizens of South ParQ are clamoring for the COVID-19 Vaccine. A hilarious new militant group tries to stop the boys from getting their teacher vaccinated.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2402.jpeg',7.5
    ],
    [false,310,false,false,'South Park: Post COVID',
        59,"2021-11-25",true,2403,false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'In SOUTH PARK: POST COVID, we’ll find out the answer to the question: what happened to the children who lived through the pandemic? Stan, Kyle, Cartman and Kenny survived, but will never be the same post COVID.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2403.jpeg',7.5
    ],
    [false,311,false,false,'South Park: Post COVID: The Return of COVID',
        62,"2021-12-16",true,2404,false,'UNRATED','Trey Parker','Trey Parker',false,false,['Andrew Cuomo','LeBron James','Jake Angeli','Los Angeles Clippers'],false,'If Stan, Kyle and Cartman could just work together, they could go back in time to make sure Covid never happened and save Kenny\'s life. In SOUTH PARK: POST COVID: THE RETURN OF COVID, traveling back to the past seems to be the easy answer until they meet Victor Chaos.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2404.jpeg',7.5
    ],
    [false,312,25,1,'Pajama Day'//,
        //22,"2022-02-02",false,2501,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2501.jpeg',7.2
    ],
    [false,313,25,2,'The Big Fix'//,
        //22,"2022-02-09",false,2502,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2502.jpeg',8
    ],
    [false,314,25,3,'City People'//,
        //22,"2022-02-16",false,2503,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2503.jpeg',7.3
    ],
    [false,315,25,4,'Back to the Cold War'//,
        //22,"2022-03-02",false,2504,false,'TV-MA','Trey Parker','Trey Parker',0.53,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2504.jpeg',6.6
    ],
    [false,316,25,5,'Help, My Teenager Hates Me!'//,
        //22,"2022-03-09",false,2505,false,'TV-MA','Trey Parker','Trey Parker',0.62,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2505.jpeg',7.6
    ],
    [false,317,25,6,'Credigree Weed St. Patrick\'s Day Special'//,
        //22,"2022-03-16",false,2506,false,'TV-MA','Trey Parker','Trey Parker',0.49,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2506.jpeg',7.1
    ],
    [false,318,false,false,'South Park: The Streaming Wars',
        50,"2022-06-01",true,'P2507',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'In South Park: The Streaming Wars, Cartman locks horns with his mom in a battle of wills while an epic conflict unfolds that threatens South Park\'s very existence.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2507.jpeg',6.7
    ],
    [false,319,false,false,'South Park: The Streaming Wars Part 2',
        47,"2022-07-13",true,'P2508',false,'UNRATED','Trey Parker','Trey Parker',false,false,['Matt Damon','Gwyneth Paltrow','Larry David','Naomi Osaka','Reese Witherspoon','LeBron James','Judge Penney S. Azcarate','Tom Brady'],false,'In South Park: The Streaming Wars Part 2, a drought has brought the town of South Park to the brink of disaster.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2508.jpeg',6.7
    ],
    [true,320,26,1,'Cupid Ye'//,
        //22,"2023-02-08",false,2601,false,'TV-MA','Matt Stone','Matt Stone',0.48,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2601.jpeg',7.3
    ],
    [true,321,26,2,'The Worldwide Privacy Tour'//,
        //22,"2023-02-15",false,2602,false,'TV-MA','Trey Parker','Trey Parker',0.56,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2602.jpeg',8.3
    ],
    [true,322,26,3,'Japanese Toilet'//,
        //22,"2023-03-01",false,2603,false,'TV-MA','Trey Parker','Trey Parker',0.48,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2603.jpeg',7.7
    ],
    [true,323,26,4,'Deep Learning'//,
        //22,"2023-03-08",false,2604,false,'TV-MA','Trey Parker','Trey Parker & ChatGPT',0.47,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2604.jpeg',8.3
    ],
    [true,324,26,5,'DikinBaus Hot Dogs'//,
        //22,"2023-03-22",false,2605,false,'TV-MA','Trey Parker','Trey Parker',0.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2605.jpeg',7.8
    ],
    [true,325,26,6,'Spring Break'//,
        //22,"2023-03-29",false,2606,false,'TV-MA','Trey Parker','Trey Parker',0.47,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2606.jpeg',6.6
    ],
    [true,326,false,false,'South Park: Joining the Panderverse',
        49,"2023-10-27",true,'P2607',false,'UNRATED','Trey Parker','Trey Parker',false,false,['Kathleen Kennedy','Bob Iger'],false,'In South Park: Joining the Panderverse, Cartman\'s deeply disturbing dreams portend the end of the life he knows and loves. The adults in South Park are also wrestling with their own life decisions as the advent of AI is turning their world upside down.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2607.jpeg',7.8
    ],
    [false,327,false,false,'South Park: (Not Suitable For Children)',
        47,"2023-12-20",true,'P2608',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'After it\'s discovered that a teacher at South Park Elementary has an OnlyFans page, Randy is compelled to take a closer look at the seedy underbelly of the world of on-line influencers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2608.jpeg',7.2
    ],
    [true,328,false,false,'South Park: The End of Obesity',
        50,"2024-10-24",true,'P2609',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'The advent of new weight loss drugs has a huge impact on everyone in South Park. When Cartman is denied access to the life-changing medicine, the kids jump into action.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2609.jpeg',7.1
    ],
    [true,329,27,1,'Sermon on the Mount'//,
        //22,"2025-07-23",false,2701,false,'TV-MA','Trey Parker','Trey Parker',0.43,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2701.jpeg',9.3
    ],
    [true,330,27,2,'Got a Nut'//,
        //22,"2025-08-06",false,2702,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2702.jpeg',8.4
    ],
    [true,331,27,3,'Sickofancy'//,
        //22,"2025-08-20",false,2703,false,'TV-MA','Trey Parker','Trey Parker',0.85,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2703.jpeg',7.4
    ],
    [true,332,27,4,'Wok is Dead'//,
        //22,"2025-09-03",false,2704,false,'TV-MA','Trey Parker','Trey Parker',0.67,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2704.jpeg',7.6
    ],
    [true,333,27,5,'Conflict of Interest'//,
        //22,"2025-09-24",false,2705,false,'TV-MA','Trey Parker','Trey Parker',0.55,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE.2705jpeg',7.5
    ],
    [true,334,28,1,'Twisted Christian'//,
        //22,"2025-10-15",false,2801,false,'TV-MA','Trey Parker','Trey Parker',0.52,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2801.jpeg',6.7
    ],
    [true,335,28,2,'The Woman in the Hat'//,
        //22,"2025-10-31",false,2802,false,'TV-MA','Trey Parker','Trey Parker',0.31,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2802.jpeg',7.1
    ],
    [true,336,28,3,'Sora Not Sorry'//,
        //22,"2025-11-12",false,2803,false,'TV-MA','Trey Parker','Trey Parker',0.53,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2803.jpeg',7.3
    ],
    [true,337,28,4,'Turkey Trot'//,
        //22,"2025-11-26",false,2804,false,'TV-MA','Trey Parker','Trey Parker',0.37,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2804.jpeg',7.3
    ],
    [true,338,28,5,'The Crap Out'//,
        //26,"2025-12-10",false,2805,false,'TV-MA','Trey Parker','Trey Parker',0.46,false,Celebrities,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2805.jpeg',6.8
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
            prmtRed.value = 'text-danger font-weight-bold';
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
            let imdbTextNode = document.createTextNode('IMDB Rating: '+EPISODES[i][19].toFixed(1)+'/10');
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
            if (Number.isInteger(EPISODES[i][13])) {
                USViewsTextNode = document.createTextNode('Views: '+EPISODES[i][13].toFixed(2)+' (million)');
            }
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