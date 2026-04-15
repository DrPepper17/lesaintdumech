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
20. Link: [APPLE,AMAZON,YOUTUBE]
21. Link: SOUTHPARK STUDIOS
22. Kenny Death
23. Visitor Count
*/

const EPISODES = [
    [true,1,1,1,'Cartman Gets an Anal Probe',
        21,"1997-08-13",false,101,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',0.89,false,false,['Franchesca Clifford','Isaac Hayes'],'While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving Alien \"Visitors\" abducting him from his bed. Meanwhile Kyle and Stan try to convince Cartman that the dream was in fact a reality.','img/SP/SPE101.jpeg',7.8,['https://tv.apple.com/us/episode/cartman-gets-an-anal-probe/umc.cmc.1mcimv3x8u62mwuamam4g6m6c?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6','https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.amazon.com/South-Park-Season-1/dp/B09XB3MJZY&ved=2ahUKEwirgJyv7eyTAxXHiisGHdeLMQcQFnoECBsQAQ&usg=AOvVaw3-fpZboMkbnZvECUcXjEPb','https://www.youtube.com/watch?v=yrZN3GZtfiM'],'https://southpark.cc.com/episodes/940f8z/south-park-cartman-gets-an-anal-probe-season-1-ep-1'
    ],
    [false,2,1,2,'Volcano',
        21,"1997-08-20",false,103,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone',1.11,false,['Patrick Duffy'],false,'The boys get together with Stan\'s Uncle Jimbo and Jimbo\'s war-buddy Ned for a hunting trip in the nearby mountains. After Cartman\'s mom makes sure her \"Little Boy\" is safe and sound (much to Cartman\s dismay) the group heads off for adventure. As they drive away from the town, Jimbo explains the \"finer\" points of hunting.','img/SP/SPE103.jpeg',7.6,['https://tv.apple.com/us/episode/volcano/umc.cmc.3zai2rd2nzv7j2ky56a7j3rrh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,3,1,3,'Weight Gain 4000',
        20,"1997-08-27",false,102,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone',0.72,false,['Kathie Lee Gifford','Geraldo Rivera'],['Kari Turner'],'Mr. Garrison starts the day off with a special announcement; one of South Park\'s own has won a national essay contest. Everyone is shocked to learn that the winner is Cartman, who doesn\'t even remember what he wrote about.','img/SP/SPE102.jpeg',7.5,['https://tv.apple.com/us/episode/weight-gain-4000/umc.cmc.2qh1v0eln8v76q6e0n9w4l9tm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false],'https://southpark.cc.com/episodes/er4a32/south-park-weight-gain-4000-season-1-ep-2'
    ],
    [false,4,1,4,'Big Gay Al\'s Big Gay Boat Ride',
        20,"1997-09-03",false,104,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',0.69,false,['Brian Boitano'],['George Clooney'],'Stan\'s got a new dog-named Sparky. Stan proclaims his pet to be the toughest dog on the mountain. Though while Stan thinks his dog is ready for fighting, Sparky proceeds to hump Sylvester like a little bitch. The other boys taunt Stan about his gay dog and Sparky runs away to find someone who will love him for who he is.','img/SP/SPE104.jpeg',7.6,
        [
            'https://tv.apple.com/us/episode/big-gay-als-big-gay-boatride/umc.cmc.3eh37ays2cnvjki0kcmkgbdwr?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',
            false,
            false
        ],
        'https://southpark.cc.com/episodes/4rcpa5/south-park-big-gay-al-s-gay-boat-ride-season-1-ep-4'
    ],
    [false,5,1,5,'An Elephant Makes Love to a Pig',
        20,"1997-09-10",false,105,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone \u0026 Dan Sterling',1.29,false,['Elton John'],['Frank Welker'],'Stan notices a new addition in their bus stop crew, an elephant standing alongside Kyle. At school, class lessons for the day involve genetic engineering (conveniently enough). Kyle questions the possibility of a genetically engineered elephant made smaller by design. The boys have to beat the rough kids in their genetics experiment, and will try anything to do it.','img/SP/SPE105.jpeg',7.4,['https://tv.apple.com/us/episode/an-elephant-makes-love-to-a-pig/umc.cmc.16zagpw2zgia9vqvbfajfkbig?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,6,1,6,'Death',
        20,"1997-09-17",false,106,false,'TV-MA','Matt Stone','Trey Parker \u0026 Matt Stone',1.13,false,['Suzanne Somers'],false,'\"Happy Birthday\" to Stan\'s Grandpa Marsh who just turned 102. How does the wizened Mr. Marsh feel about his birthday? He sums it up in five words; \"I wish I were dead.\" and proceeds trying to end his life enlisting Stan to do it for him. However, Stan is aware of a very important thing if he kills his grandfather, he\'d be in trouble, and if he\'s in trouble he can\'t watch Terrance and Phillip.','img/SP/SPE106.jpeg',8.0,['https://tv.apple.com/us/episode/death/umc.cmc.5vs56we9o0lhggnegdr872ox6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,7,1,7,'Pinkeye',
        22,"1997-10-29",false,107,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker \u0026 Matt Stone \u0026 Philip Stark',1.73,false,false,false,'The first Halloween episode starts off with the failure of the Mir Space Station, which crashes right on Kenny. An ambulance comes and takes his body off to the morgue. The boys start to brag about their Halloween costumes. At the morgue, a freak accident involving a bottle of Worcestershire occurs, and next thing you know Kenny is a member of the undead. Kenny breaks free and wanders off into the night.','img/SP/SPE107.jpeg',8.3,['https://tv.apple.com/us/episode/pink-eye/umc.cmc.3cs51hzivvejqx0t0bhxlflsp?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,8,1,8,'Starvin\' Marvin',
        20,"1997-11-19",false,109,false,'TV-MA','Trey Parker','Trey Parker',2.20,false,['Sally Struthers'],false,'Mistaking Cartman for a starving African child, government authorities send him to Ethiopia where he runs into Sally Struthers.','img/SP/SPE109.jpeg',8.1,['https://tv.apple.com/us/episode/starvin-marvin/umc.cmc.2miap7xlcqulqa1uln45cack1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,9,1,9,'Mr. Hankey, the Christmas Poo',
        21,"1997-12-17",false,110,false,'TV-MA','Trey Parker \u0026 Matt Stone','Trey Parker',4.55,false,false,false,'When Kyle\'s musical holiday pal Mr. Hankey shows up it makes for a memorable Christmas in South Park.','img/SP/SPE110.jpeg',8.1,['https://tv.apple.com/us/episode/mr-hankey-the-christmas-poo/umc.cmc.1nvcaar1whesqp9jz1zbl0m4l?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,10,1,10,'Damien',
        21,"1998-02-04",false,108,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone',3.01,false,['Don King','Michael Buffer','Mills Lane'],['Michael Buffer'],'Eric is handing out invitations to his birthday party at school. Mr. Garrison informs them all that there is a new student joining the class. Announcing to all that he is Damien, the son of Satan. Even as Damien demonstrates his demonic powers the children are more loathsome than impressed.','img/SP/SPE108.jpeg',7.8,['https://tv.apple.com/us/episode/damien/umc.cmc.1e231efdeys9j05df2jlw2oxh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,11,1,11,'Tom\'s Rhinoplasty',
        22,"1998-02-11",false,111,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,false,['Natasha Henstridge'],'Wendy and Stan discuss their plans for romance. Principal Victoria comes into the classroom and announces that Mr. Garrison is going to be out and that a substitute will be taking his place. The lovely Miss Ellen speaks to Stan and he pukes all over his desk. Wendy is upset because Stan only pukes when he is in love and has Mrs. Ellen arrested for being a spy.','img/SP/SPE111.jpeg',7.9,['https://tv.apple.com/us/episode/toms-rhinoplasty/umc.cmc.3m01w7d0rimixqry3bw1dwxy0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,12,1,12,'Mecha-Streisand',
        20,"1998-02-18",false,112,false,'TV-MA','Trey Parker','Trey Parker \u0026 Matt Stone \u0026 Philip Stark',3.21,false,['Barbra Streisand','Leonard Maltin','Sidney Poitier','Robert Smith'],['Robert Smith'],'The boys meet up with Barbara Streisand who wants to take over the world with Kyle\'s discovery and an archaeological dig. Leonard Maltin, Sydney Potier, and Robert Smith come to the rescue to defeat Babs and her terrible destruction.','img/SP/SPE112.jpeg',7.5,['https://tv.apple.com/us/episode/mecha-streisand/umc.cmc.1xt6n7u0le8pjlr9y2oed5uyw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,13,1,13,'Cartman\'s Mom Is a Dirty Slut',
        20,"1998-02-25",false,113,false,'TV-MA','Trey Parker','Trey Parker \u0026 David R. Goodman',3.20,false,false,['Jay Leno'],'Cartman needs to find out who his father is but his mom is no help. Learning that his father could be one of the many people that his mom "had relations" with during an annual party called "The Drunken Barn Dance," he finds that there\'s more to his mother then he thought.','img/SP/SPE113.jpeg',8.6,['https://tv.apple.com/us/episode/cartmans-mom-is-a-dirty-slut/umc.cmc.3d7zdetxegej4583uzy8dh5j1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,14,2,1,'Terrance and Phillip in Not Without My Anus',
        20,"1998-04-01",false,201,false,'TV-MA','Trey Parker','Trey Parker & Trisha Nixon',3.25,false,['Saddam Hussein','Celine Dion','Jerry Springer'],false,'The show starts off with the build up from last season \"cliffhanger revolving around Cartman\" paternal origins. However just as it seems they are about to get on with the second half of Cartman\'s Mom Is A Dirty Slut they do a 180 degree turn-around and reveal that for April Fool\'s Day they will be showing Terrance & Phillip in Not Without My Anus.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE201.jpeg',6.2,['https://tv.apple.com/us/episode/terrance--phillip-in-not-without-my-anus/umc.cmc.1jler4jtxtwscgqzn8kb27on4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,15,2,2,'Cartman\'s Mom Is Still a Dirty Slut',
        21,"1998-04-22",false,202,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',4.00,false,['Bill Clinton','Eric Roberts','John Walsh'],false,'Cartman finds out the identity of his father. And boy is he in for a surprise.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE202.jpeg',8.2,['https://tv.apple.com/us/episode/cartmans-mom-is-still-a-dirty-slut/umc.cmc.1x9980r0e33qv3kjhw8s41qtz?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,16,2,3,'Ike\'s Wee Wee',
        22,"1998-05-20",false,204,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,false,false,'Ike\'s going to have a Briss and everyone is invited! Stan Kenny and Cartman find out what a Briss really is and try to warn Kyle that his parents are going to cut off Ike\'s wee wee. Kyle sends Ike away to protect him from his scissor wielding parents.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE204.jpeg',8.0,['https://tv.apple.com/us/episode/ikes-wee-wee/umc.cmc.72oxh8t72nmmgewhlqkogxhf4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,17,2,4,'Chickenlover',
        22,"1998-05-27",false,203,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.71,false,false,false,'The Booktastic bus is in town and soon everyone finds out that Officer Barbrady can, Aôt read. He is whisked off to school with the boys so he can save his job. While he\'s there someone in South Park is having sex with the town\'s chickens and only Officer Barbrady with his new deputies Kenny Kyle Stan and Cartman can stop them!','https://hosting.photobucket.com/images/i/lesaintdumech/SPE203.jpeg',8.0,['https://tv.apple.com/us/episode/chickenlover/umc.cmc.262zb9ojs36fi8jx7p0yd7g1t?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,18,2,5,'Conjoined Fetus Lady',
        22,"1998-06-03",false,205,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.57,false,false,false,'Kyle is injured and must go to see the school nurse and is terrified because of the stories he\'s heard. She looks fairly normal except for the dead fetus sticking out of her head. Kyle\'s mother educates the boys on her condition and decides that everyone in South Park should be made aware. Meanwhile the South Park Cows dodgeball team goes to the state national and finally the international finals in China.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE205.jpeg',7.6,['https://tv.apple.com/us/episode/conjoined-fetus-lady/umc.cmc.2shuna8lbhkylo5eb5xv5zi6b?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,19,2,6,'The Mexican Staring Frog of Southern Sri Lanka',
        22,"1998-06-10",false,206,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.57,false,['Saddam Hussein','Bob Denver'],false,'Mr. Garrison assigns the boys learn out about Vietnam from somebody they know. Stan\'s Uncle Jimbo and his friend Ned tell the boys their outrageous tale. Mr. Garrison doesn\'t believe the boy\'s report and gives them detention. They plot revenge against Stan\'s Uncle by submitting a phony video of the Mexican Staring Frog of Southern Sri Lanka to them.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE206.jpeg',7.5,['https://tv.apple.com/us/episode/the-mexican-staring-frog-of-southern-sri-lanka/umc.cmc.3pkirz893hdb9xi3no64vx1rh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,20,2,7,'City on the Edge of Forever',
        22,"1998-06-17",false,207,'Flashbacks','TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',3.06,false,['Carrot Top','Jay Leno'],['Jay Leno','Brent Musburger','Henry Winkler'],'While their school bus is dangling on the edge of a cliff the boys remember some of their past adventures. Mrs. Crabtree catches a ride into town with a stranger and winds up doing a brief stint as a standup comedienne. Back in South Park Mr. Mackey convinces the parents that their missing children must have run away. In the end it\'s all a dream within a dream.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE207.jpeg',7.2,['https://tv.apple.com/us/episode/city-on-the-edge-of-forever/umc.cmc.6mz8xf2eranjnjjtzfkpgwm45?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,21,2,8,'Summer Sucks',
        22,"1998-06-24",false,208,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.53,false,['Brett Favre','Shari Lewis','Lambchop'],['Jonathan Katz'],'Schools out for summer and with Mr. Hat missing Mr.Garrison is over the edge. The state has a ban on the sale of fireworks and it screws up the boy\'s plans for a 4th of July celebration. Mr. Garrison seeks psychiatric help from Dr. Katz while Jimbo and Ned go to Mexico in an attempt to smuggle fireworks back to the children of America.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE208.jpeg',7.3,['https://tv.apple.com/us/episode/summer-sucks/umc.cmc.pqg1dpbdkcoot8ulvd983876?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,22,2,9,'Chef\'s Chocolate Salty Balls',
        22,"1998-08-19",false,209,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',3.26,false,['Fred Savage','Robert Redford','Tom Hanks','Andy Warhol','Bruce Willis','Fabio Lanzoni','Spike Lee'],false,'A film festival moves to South Park only to have a devastating effect on the sewer system. Mr. Hankey calls upon Kyle for help. The movie people interpret Kyle\'s pleading as a pitch and they quickly turn his story into a film starring Tom Hanks and a monkey they call Mr. Hankey. Kyle is outraged that the filmmakers aren\'t hearing his pleas. Soon Chef\'s Salty Chocolate Balls energizes everyone.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE209.jpeg',7.5,['https://tv.apple.com/us/episode/chefs-chocolate-salty-balls/umc.cmc.thmosr9tta3poconyrflxmey?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,23,2,10,'Chickenpox',
        22,"1998-08-26",false,210,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Trisha Nixon',3.07,false,false,false,'Cartman\'s mother plots to give the boys the chickenpox by sending them over to Kenny\'s for a sleepover. Both Stan and Cartman breakout but Kyle remains immune. Kyle discovers the parental conspiracy and with the other boys hires a prostitute to give their parents herpes. Meanwhile Kenny\'s mother and Kyle\'s mother reunite their husbands who were both childhood friends that drifted apart.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE210.jpeg',7.9,['https://tv.apple.com/us/episode/chickenpox/umc.cmc.3l7o0r8pwd8svp4rlhapr4ih2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,24,2,11,'Roger Ebert Should Lay Off the Fatty Foods',
        22,"1998-09-02",false,211,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.56,false,['Buddy Ebsen'],false,'The kids go on a field trip to the planetarium. All of the children except Cartman are acting wierd. As usual Stan and Kyle with Kenny\'s sacrifice try to get to bottom of the mystery. Meanwhile Cartman wins an appearance on a snack commercial. The four boys get to the root of the strange planetarium.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE211.jpeg',7.5,['https://tv.apple.com/us/episode/roger-ebert-should-lay-off-the-fatty-foods/umc.cmc.15z13qq0fpj57rjdhqqoea2lw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,25,2,12,'Clubhouses',
        22,"1998-09-23",false,212,false,'TV-MA','Trey Parker','Trey Parker & Nancy M. Pimental',2.57,false,false,false,'Stan needs to build a clubhouse so he and Kyle can play Truth or Dare with Wendy and her friend who has a crush on Kyle. Cartman and Kenny retaliate by building a clubhouse of their own; only theirs has hot chicks. Meanwhile the Marshes marriage breaks up and Stan learns a valuable lesson about love and family.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE212.jpeg',7.9,['https://tv.apple.com/us/episode/clubhouses/umc.cmc.12g8uoi0lpy8u0l33gwkh87s3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,26,2,13,'Cow Days',
        22,"1998-09-30",false,213,false,'TV-MA','Trey Parker','Trey Parker & David Goodman',2.59,false,false,false,'South Park\'s annual Cow Days party is happening! The cows become transfixed on a cow statue. In order to get the money they need to win Terrance and Phillip dolls the boys sign Cartman up for a bull riding contest. A freak accident has Cartman believing he is a Vietnamese prostitute named Ming Li. The boys learn about money and cow insanity.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE213.jpeg',7.5,['https://tv.apple.com/us/episode/cow-days/umc.cmc.35u430smdwz2i2405dcy1hjs2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,27,2,14,'Chef Aid',
        22,"1998-10-07",false,214,false,'TV-MA','Trey Parker','Trey Parker & Matt Stone',2.13,false,['Johnnie Cochran','Alanis Morissette','Elton John','Joe Strummer','Les Claypool','Marilyn Manson','Meat Loaf','Ozzy Osbourne','PRIMUS','Rancid','Rick James','Ween'],['Elton John','DMX','Rick James','Meat Loaf','Ol\' Dirty Bastard','Ozzy Osbourne','Les Claypool','Tim Armstrong','Joe Strummer','The Crystal Method','Dean & Gene Ween'],'Chef is getting sued by Capitalist Records for trying to obtain the rights to a song he wrote twenty years ago. He needs 2 million dollars to hire Johnny Cochran. In response the boys round up all of Chef\'s old musician friends and organize a huge concert to raise the cash.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE214.jpeg',7.8,['https://tv.apple.com/us/episode/chef-aid/umc.cmc.5f96mvt44x5s1afhrham6ip44?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,28,2,15,'Spookyfish',
        21,"1998-10-28",false,215,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,['Barbra Streisand'],false,'Sharon Marsh\'s Aunt Flo makes her monthly visit and she has present for Stan a fish. Stan\'s fish really freaks him out especially when the dead bodies start piling up. Mrs. Marsh is convinced Stan is doing the killings and begins hiding the bodies. The boys discover there are two Cartman, Aôs and a gateway to a parallel universe at the Indian Burial Ground Pet Store.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE215.jpeg',8.4,['https://tv.apple.com/us/episode/spooky-fish/umc.cmc.5mq65b5vv63c2rqenyukex59x?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,29,2,16,'Merry Christmas, Charlie Manson!',
        22,"1998-12-09",false,216,false,'TV-MA','Eric Stough','Trey Parker & Nancy M. Pimental',3.28,false,['Charles Manson','Donna Reed','Karolyn Grimes','Lionel Barrymore'],false,'Kyle Stan and Kenny accompany Eric and his family to a Christmas celebration with the Cartman family. One of Cartman\'s relatives breaks out of jail for the reunion with his cellmate Charles Manson.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE216.jpeg',8.1,['https://tv.apple.com/us/episode/merry-christmas-charlie-manson/umc.cmc.ygfnv1k9qoflvgld49eckidm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,30,2,17,'Gnomes',
        22,"1998-12-16",false,217,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Pam Brady',2.06,false,['Toto'],false,'Harbucks coffee plans to move into South Park and drive Tweek coffee shop out of business. Mr. Garrison assigns a report on current events to help him keep his job. The boys are planning on doing their report on the underpants gnomes. Tweek\'s father schemes to use the boy\'s report as a platform for fighting Harbucks. The report the boys deliver sparks the town into taking action.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE217.jpeg',8.2,['https://tv.apple.com/us/episode/gnomes/umc.cmc.2b5a3x4f63y3sqay2nulme77r?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,31,2,18,'Prehistoric Ice Man',
        22,"1999-01-20",false,218,false,'TV-MA','eric Stough','Trey Parker & Nancy M. Pimental',2.37,false,['Marilyn Manson','Steve Irwin'],false,'Kyle falls into a cave. Stan goes to rescue him and finds an iceman and the two fight each other for sole credit. Dr. Mephisto discovers that the iceman has been frozen since 1996. The iceman is put on display and the fighting Kyle and Stan free him. The iceman tries to return to his family but finds himself a man out of time. Meanwhile the government has their own plans to use the iceman in their plot against Sweden.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE218.jpeg',7.8,['https://tv.apple.com/us/episode/prehistoric-ice-man/umc.cmc.55udrfjwd7p04vxbuwrobnyd8?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,32,3,1,'Rainforest Shmainforest',
        22,"1999-04-07",false,301,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker & Matt Stone',2.32,false,['Bruce Willis','Fred Savage','Spike Lee','Stevie Wonder'],['Jennifer Aniston'],'The boys are sent to the Costa Rican rainforest as a part of the Getting Gay with Kids choir tour.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE301.jpeg',8.4,['https://tv.apple.com/us/episode/rainforest-shmainforest/umc.cmc.64uaf5qz51xuguon4eo3iysxt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,33,3,2,'Spontaneous Combustion',
        22,"1999-04-14",false,302,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.29,false,['Nick Nolte','Whoopi Goldberg'],false,'When the citizens of South Park start exploding randomly, the mayor enlists Stan\'s dad, the resident geologist, to find a solution to the problem.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE302.jpeg',8.1,['https://tv.apple.com/us/episode/spontaneous-combustion/umc.cmc.22v88d9u3h404imdyezcyqnc1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,34,3,3,'Succubus',
        22,"1999-04-21",false,303,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,false,false,'Chef finds the girl of his dreams, but the boys feel like they\'ve lost their best friend; all in exchange for a dollar amount of tree-fiddy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE303.jpeg',8.0,['https://tv.apple.com/us/episode/succubus/umc.cmc.2j2ayhnwb09v8jbbojbiv5dd1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,35,3,4,'Jakovasaurs',
        22,"1999-06-16",false,305,false,'TV-MA','Matt Stone','Trey Parker, Matt Stone & David Goodman',2.07,false,false,false,'The boys discover a prehistoric creature called a Jakovasaur while camping at Stark\'s Pond.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE305.jpeg',6.4,['https://tv.apple.com/us/episode/jakovasaurs/umc.cmc.1ybjmi1d1qfifqsyn0push9nq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,36,3,5,'Tweek vs. Craig',
        22,"1999-06-23",false,304,false,'TV-MA','Trey Parker','Trey Parker',1.87,false,false,false,'The boys instigate a fight between Tweek and Craig in shop class. Meanwhile, Mr. Adler, the shop teacher, is haunted by a recurring dream of his lost love.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE304.jpeg',7.6,['https://tv.apple.com/us/episode/tweek-vs-craig/umc.cmc.33l9yei3erxkkwke67kjk40t5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,'MOVIE',false,false,'South Park: Bigger, Longer & Uncut',
        81,"1999-06-30",false,'MMM01',false,'R','Trey Parker','Trey Parker, Matt Stone & Pam Brady','~3',false,['Saddam Hussein','Bill Clinton','Bill Gates','Brian Dennehy','Conan O\'Brien','Winona Ryder','The Baldwins'],['George Clooney','Minnie Driver','Brent Spiner','Dave Foley','Eric Idle','Nick Rhodes'],'Stan, Kyle, Kenny and Cartman sneak into an R-rated movie and it warps their fragile little minds. Soon their indignant parents declare war on Canada and our young heroes are America\'s last hope to stop Armageddon.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEMMM01.jpeg',7.7,
        [
            'https://tv.apple.com/us/movie/south-park-bigger-longer--uncut/umc.cmc.62s4owcdtuu1k4lh6r5cn11qe',
            'https://www.amazon.com/gp/video/detail/B0DJGSGJ4M/ref=atv_sr_fle_c_sr52cdbe_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B0DJGSYHSV&qid=1776214220331',
            'https://www.youtube.com/watch?v=tRKTM3AzlaY'
        ]
    ],
    [false,37,3,6,'Sexual Harassment Panda',
        22,"1999-07-07",false,306,false,'TV-MA','Eric Stough','Trey Parker',1.83,false,false,false,'After Sexual Harassment Panda "educates" the children, Cartman sues Stan for sexual harassment, and a flurry of other lawsuits follow.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE306.jpeg',8.2,['https://tv.apple.com/us/episode/sexual-harassment-panda/umc.cmc.7adsz6ol6jg8ox0dsxcyku000?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,38,3,7,'Cat Orgy',
        22,"1999-07-14",false,307,false,'TV-MA','Trey Parker','Trey Parker',2.98,false,false,false,'While Shelly\'s babysitting Eric on the evening of the mysterious meteor shower, a wild and unsupervised kitty party breaks out at the Cartman home.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE307.jpeg',7.9,['https://tv.apple.com/us/episode/cat-orgy/umc.cmc.6g5ed2c0ds32mlco3vo6z1kui?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,39,3,8,'Two Guys Naked in a Hot Tub',
        22,"1999-07-21",false,308,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & David Goodman',2.03,false,false,false,'Stan must save Mr. Mackey\'s meteor shower party from the ATF, while the South Park dads experiment in the hot tub.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE308.jpeg',8.0,['https://tv.apple.com/us/episode/two-guys-naked-in-a-hot-tub/umc.cmc.7ihrq6iz8gccblv9ss1g3pd5y?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,40,3,9,'Jewbilee',
        22,"1999-07-28",false,309,false,'TV-MA','Trey Parker','Trey Parker',1.93,false,false,false,'While the rest of South Park awaits the meteor shower, Kyle, Kenny and Ike head into the wilderness on a Jewbilee.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE309.jpeg',7.4,['https://tv.apple.com/us/episode/jewbilee/umc.cmc.1qjubfmz05o0sxtspxynx0zft?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,41,3,10,'Korn\'s Groovy Pirate Ghost Mystery',
        22,"1999-10-27",false,312,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],['Jonathan Davis','Reginald \'Fieldy\' Arvizu','James \'Munky\' Shaffer','David Silveria','Brian \'Head\' Welch'],'Korn helps the boys defeat Pirate Ghosts and mean fifth graders in this haunting Halloween episode.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE312.jpeg',7.7,['https://tv.apple.com/us/episode/korns-groovy-pirate-ghost-mystery/umc.cmc.74zid8wcvwys0paqa4l7seics?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,42,3,11,'Chinpokomon',
        22,"1999-11-03",false,310,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.36,false,['Bill Clinton','Emperor Hirohito'],false,'South Park kids go crazy for Chinpokomon and suddenly find themselves fixated on Peal Harbor.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE310.jpeg',8.7,['https://tv.apple.com/us/episode/chinpokomon/umc.cmc.1cz4ygb3h4tj2d87rdmhbc29b?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,43,3,12,'Hooked on Monkey Fonics',
        22,"1999-11-10",false,313,false,'TV-MA','Trey Parker','Trey Parker',2.05,false,['Ronnie James Dio'],false,'The boys compete against some home schooled kids in South Park\'s annual spelling bee.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE313.jpeg',8.0,['https://tv.apple.com/us/episode/hooked-on-monkey-fonics/umc.cmc.5axr0dblll9c5nrnq3qym258w?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,44,3,13,'Starvin\' Marvin in Space',
        21,"1999-11-17",false,311,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Kyle McCulloch',2.99,false,['Sally Struthers'],false,'When Starvin\' Marvin returns to South Park in an alien spaceship, enlisting the boys join him on a mission to find a new home for his starving people but winds up pursued by the CIA, the Feed the ChildrenFoundation and Sally Struthers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE311.jpeg',8.0,['https://tv.apple.com/us/episode/starvin-marvin-in-space/umc.cmc.5pti6seih2mdvleutiho24gsw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,45,3,14,'The Red Badge of Gayness',
        20,"1999-11-24",false,314,false,'TV-MA','Trey Parker','Trey Parker',1.94,false,['Bill Clinton','Al Gore'],false,'Fueled on Jagerminz S\'more Flavored Schnapps, Cartman has visions of glory as he suits up for the Confederacy in the annual reenactment of a Civil War battle, and leads the drunken rebels to finally defeat the union 134 years too late.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE314.jpeg',8.3,['https://tv.apple.com/us/episode/the-red-badge-of-gayness/umc.cmc.7kgo31qo4rkul7nd8dgosjlrt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,46,3,15,'Mr. Hankey\'s Christmas Classics',
        22,"1999-12-01",false,315,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Adolf Hitler','Alois and Klara Hitler','Diana, Princess of Wales','Gene Siskel','Genghis Khan','Jimmy Stewart','Michael Landon','Mao Zedong','John F. Kennedy & John F. Kennedy Jr'],false,'In an extravaganza of holiday joy comes the Classic hits from " Mr. Hankey\'s Christmas Classics" album - featuring the boys and all of South Park\'s most exuberant citizens.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE315.jpeg',7.2,['https://tv.apple.com/us/episode/mr-hankeys-christmas-classics/umc.cmc.34xe8iydf5mwggbthijafbiik?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,47,3,16,'Are You There God? It\'s Me, Jesus',
        20,"1999-12-29",false,316,false,'TV-MA','Eric Stough','Trey Parker',2.13,false,['Rod Stewart'],false,'Stan goes through a few rapidly wrong hormonal changes, meanwhile people from all over the world start to gather outside Jesus\' house waiting for a millennium miracle.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE316.jpeg',7.8,['https://tv.apple.com/us/episode/are-you-there-god-its-me-jesus/umc.cmc.70l621ccn8myol03i56gvap7p?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,48,3,17,'World Wide Recorder Concert',
        22,"2000-01-12",false,317,'The Brown Noise','TV-MA','Eric Stough','Trey Parker',2.57,false,['Yoko Ono','Kenny G'],false,'The children of South Park are invited to Arkansas for the "Four Million Child Blow 2000", the first worldwide recorder concert.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE317.jpeg',8.1,['https://tv.apple.com/us/episode/worldwide-recorder-concert/umc.cmc.3vhwc578tv6hwd4kksdd6o05m?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,49,4,1,'The Tooth Fairy\'s Tats',
        22,"2000-04-05",false,402,false,'TV-MA','Trey Parker','Trey Parker, Matt Stone & Nancy M. Pimental',2.38,false,false,['Richard Belzer'],'Cartman masterminds a Tooth Fairy scam by appropriating teeth from less fortunate children.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE402.jpeg',8.2,['https://tv.apple.com/us/episode/the-tooth-fairys-tats-2000/umc.cmc.1nuz5bmfhr06cquagk3fbfxub?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,50,4,2,'Cartman\'s Silly Hate Crime',
        20,"2000-04-12",false,401,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.62,false,false,false,'Cartman gets himself sentenced to juvee hall, and without his weight to anchor the sled, the boys have no hope of winning the race against the girls.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE401.jpeg',8.6,['https://tv.apple.com/us/episode/cartmans-silly-hate-crime-2000/umc.cmc.4i6jfmj2jbi1arsb3djrqkaab?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,51,4,3,'Timmy',
        21,"2000-04-19",false,404,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,['Phil Collins','Christina Aguilera'],false,'Timmy parlays his ADD handicap into a heavy metal rock band gig; meanwhile, the boys try to contract ADD, too, so they can get out of class.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE404.jpeg',8.1,['https://tv.apple.com/us/episode/timmy-2000/umc.cmc.3kvrjatgy4milif4s1txdqczr?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,52,4,4,'Quintuplets',
        20,"2000-04-26",false,403,'Contorting Quintuplets','TV-MA','Trey Parker','Trey Parker',1.81,false,['Janet Reno'],false,'When a family of quintuplets takes up residence in South Park the ensuing media circus fame drives Kenny and his mom all the way to Romania to pursue the fame and spotlight too.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE403.jpeg',7.3,['https://tv.apple.com/us/episode/quintuplets-2000/umc.cmc.29izh7d5pnzt95agnl45lf3ue?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,53,4,5,'Cartman Joins NAMBLA',
        22,"2000-06-21",false,406,false,'TV-MA','Eric Stough','Trey Parker',1.82,false,false,false,'Cartman\'s newfound maturity forces him to seek out more mature friends on-line; meanwhile, Kenny actively tries to prevent his parent\'s from having another welfare baby.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE406.jpeg',9.0,['https://tv.apple.com/us/episode/cartman-joins-nambla/umc.cmc.4b7ol5v4lu2dq96xj29ni0oqb?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,54,4,6,'Cherokee Hair Tampons',
        20,"2000-06-28",false,407,false,'TV-MA','Trey Parker','Trey Parker',1.72,false,['Cheech & Chong'],['Tommy Chong','Cheech Marin'],'Kyle needs a kidney transplant and Cartman is discovered to be the perfect donor. Cartman gladly offers his kidney to Kyle—for the price of $10 million dollars.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE407.jpeg',8.0,['https://tv.apple.com/us/episode/cherokee-hair-tampons/umc.cmc.n4ye6cs9hs5ft8j5s5wa8v4g?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,55,4,7,'Chef Goes Nanners',
        22,"2000-07-05",false,408,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.45,false,['Russell Crowe'],false,'Chef\'s passionate protest against the South Park Flag enflames the town; meanwhile, Wendy finds herself strangely attracted to Cartman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE408.jpeg',8.2,['https://tv.apple.com/us/episode/chef-goes-nanners/umc.cmc.5yufbo87ro97zv1ln7lwz9h0i?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,56,4,8,'Something You Can Do with Your Finger',
        22,"2000-07-12",false,409,false,'TV-MA','Trey Parker','Trey Parker',1.81,false,false,false,'"Fingerbang" is the newest boy band starring all the boys and it\'s also Cartman\'s latest scheme to make a million dollars and all the folks in town are lining up to audition for the privilege of being its fifth member.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE409.jpeg',8.0,['https://tv.apple.com/us/episode/something-you-can-do-with-your-finger/umc.cmc.7eob35n0q991pqyil64f35i7w?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,57,4,9,'Do The Handicapped Go To Hell',
        20,"2000-07-19",false,410,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,['Saddam Hussein','Gene Siskel','Pope John Paul II','Walter Matthau','Adolf Hitler','Allen Ginsberg','Conan O\'Brien','Dean Martin','Diana, Princess of Wales','Frank Sinatra','George Burns','Jerry Garcia','John F. Kennedy & John F. Kennedy Jr.','Mao Zedong','Tiny Tim','Michael Landon'],false,'While the boys race to make their first Confession and Holy Communion, Saddam Hussein returns to the underworld to rekindle his relationship with his former lover, Satan, the prince of darkness.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE410.jpeg',8.3,['https://tv.apple.com/us/episode/do-the-handicapped-go-to-hell/umc.cmc.2236n5cu0l6u7i1ll9vzxd128?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,58,4,10,'Probably',
        22,"2000-07-26",false,411,false,'TV-MA','Trey Parker','Trey Parker',2.01,false,['Saddam Hussein','Henry Winkler'],false,'Cartman\'s flock begins to grow and the children begin plans to build him a Church. Meanwhile, Satan is torn between two lovers: his new boyfriend, Chris, and his ex, Saddam Hussein; meanwhile, Cartman becomes an evangelist as he and the boys try to assure their places in heaven.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE411.jpeg',8.2,['https://tv.apple.com/us/episode/probably/umc.cmc.3tmuxf5upf6f0j74q3yxu0rlf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,59,4,11,'Fourth Grade',
        21,"2000-11-08",false,412,false,'TV-MA','Trey Parker','Trey Parker',3.6,false,false,false,'Fearing their new 4th grade teacher, the kids build a time machine out of Timmy\'s wheelchair to travel back to a happier, easier school year.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE412.jpeg',8.1,['https://tv.apple.com/us/episode/fourth-grade/umc.cmc.ujo132hk18dvklmd4j5uevy9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,60,4,12,'Trapper Keeper',
        20,"2000-11-15",false,413,false,'TV-MA','Trey Parker','Trey Parker',3.27,false,['Jesse Jackson','Rosie O\'Donnell'],false,'When Cartman finally stops bragging about his new Trapper Keeper, a stranger informs him that it will eventually take over the world and destroy humankind, if they do not destroy it first.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE413.jpeg',8.0,['https://tv.apple.com/us/episode/trapper-keeper/umc.cmc.x8vmshjlbifslx0bszsj6gg?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,61,4,13,'Helen Keller The Musical',
        20,"2000-11-22",false,414,false,'TV-MA','Trey Parker','Trey Parker',3.51,false,false,false,'When Butters informs the fourth graders that the kindergartners\' school play is a magnificent sight to behold, they go through a lot of pain to make sure they beat the tiny tots\' show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE414.jpeg',7.7,['https://tv.apple.com/us/episode/helen-keller-the-musical/umc.cmc.5qud0s73ui92kj9qdujngdevz?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,62,4,14,'Pip',
        20,"2000-11-29",false,405,'Great Expectations','TV-MA','Eric Stough','Trey Parker',2.39,false,false,['Malcolm McDowell'],'South Park Classics presents a rendition of "Great Expectations" starring Pip, as the antihero who takes on the bitter Ms. Haversham and robotic monkeys in his attempt to win Estella\'s heart.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE405.jpeg',6.6,['https://tv.apple.com/us/episode/pip/umc.cmc.4zbzylme1wy0348u5v5h3o56s?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,63,4,15,'Fat Camp',
        20,"2000-12-06",false,415,false,'TV-MA','Trey Parker','Trey Parker',2.31,false,['Howard Stern','Johnny Knoxville'],false,'Cartman\'s family and friends have intervened and are forcing him to trim down. While Cartman\'s away, Kenny\'s star is on the rise when he gets his own reality TV show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE415.jpeg',8.4,['https://tv.apple.com/us/episode/fat-camp/umc.cmc.5wh7dczimbe2o865gtwngudg9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,64,4,16,'The Wacky Molestation Adventure',
        20,"2000-12-13",false,416,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,['Fidel Castro'],false,'When Kyle\'s parents forbid him to see his favorite rock band in concert, Kyle accuses them of an unspeakable indiscretion and has them sent to the big house.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE416.jpeg',8.7,['https://tv.apple.com/us/episode/wacky-molestation-adventure/umc.cmc.32wm6nsvd8ohwcghbwol0t0vu?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,65,4,17,'A Very Crappy Christmas',
        20,"2000-12-20",false,417,false,'TV-MA','Adrien Beard','Trey Parker',2.3,false,false,['Louis Price'],'Now that Mr. Hankey\'s all tied up with the new wife and kids, it\'s up to the boys and a video Christmas card to save the spirit of the season.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE417.jpeg',7.4,['https://tv.apple.com/us/episode/a-very-crappy-christmas/umc.cmc.2d4mzqjnzx400btbil569xdag?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,66,5,1,'It Hits the Fan',
        20,"2001-06-20",false,502,false,'TV-MA','Trey Parker','Trey Parker',2.1,false,['Drew Carey'],false,'The you-know-what hits the fan 162 times when the citizens of South Park tune in to hear the word "s***" on a popular TV show.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE502.jpeg',8.3,['https://tv.apple.com/us/episode/it-hits-the-fan/umc.cmc.5x2431w7h7d2bpngt728reopi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,67,5,2,'Cripple Fight',
        21,"2001-06-27",false,503,false,'TV-MA','Trey Parker','Trey Parker',1.78,false,['Gloria Allred','Marc Shaiman','Steven Spielberg'],false,'Big Gay Al returns to South Park as the new scout leader. When he is fired for being gay, the boys rally to his defense with the help of the new "handi-capable" kid, Jimmy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE503.jpeg',8.3,['https://tv.apple.com/us/episode/cripple-fight/umc.cmc.6sztnik24plaei71k9qv9oe7v?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    ['BLOCKED',68,5,3,'Super Best Friends',
        22,"2001-07-04",false,504,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,['Muhammad','David Blaine','George W Bush','Laura Bush','Karl Rove','Joseph Smith'],false,'Stan, Kyle, Cartman and Kenny discover David Blaine, magician and cult leader, performing in the streets of South Park. Stan finds out early that the Blainiacs are not as nice as everyone thinks. He tries to convince the other boys they have been brainwashed, but they have forsaken their friends and families. Teaming up with Jesus, Stan calls upon all the Super Best Friends to destroy the magician and thwart the mass suicide pact he has launched.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE504.jpeg',8.2
    ],
    [true,69,5,4,'Scott Tenorman Must Die',
        20,"2001-07-11",false,501,false,'TV-MA','Eric Stough','Trey Parker',1.88,false,['Radiohead','Kurt Loder'],['Thom Yorke','Jonny Greennwood','Colin Greenwood','Ed O\'Brien','Philip Selway'],'After the other boys explain to Cartman that pubes do not count unless you grow your own, Cartman realizes he has been tricked by the school bully, Scott Tenorman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE501.jpeg',9.6,['https://tv.apple.com/us/episode/scott-tenorman-must-die/umc.cmc.2gajyjhuekee3k1h4lzc5glk0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,70,5,5,'Terrance and Phillip: Behind the Blow',
        21,"2001-07-18",false,505,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,['Cher','Sonny Bono','Soleil Moon Frye'],false,'When the boys discover Terrance and Phillip have called it quits, they will go to any lengths to reunite the duo and recruit them for South Park\'s Earth Day festivities.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE505.jpeg',6.9,['https://tv.apple.com/us/episode/terrance--phillip-behind-the-blow/umc.cmc.43xe10u4ypztj810a0nn8ks4i?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,71,5,6,'Cartmanland',
        21,"2001-07-25",false,506,false,'TV-MA','Trey Parker','Trey Parker',3.09,false,false,false,'Cartman inherits a million dollars from his grandmother and fulfills his lifelong dream of owning his own amusement park: Cartmanland!','https://hosting.photobucket.com/images/i/lesaintdumech/SPE506.jpeg',8.9,['https://tv.apple.com/us/episode/cartmanland/umc.cmc.1ifzqo4hyl8or9zpvw14p2xzn?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,72,5,7,'Proper Condom Use',
        22,"2001-08-01",false,507,false,'TV-MA','Trey Parker','Trey Parker',2.45,false,false,false,'In a time-honored tradition and right-of-passage, the boys are separated from the girls and schooled in the mysteries of sex by none other than Mr. Mackey.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE507.jpeg',8.6,['https://tv.apple.com/us/episode/proper-condom-use/umc.cmc.2il622dinipty71el4f9u5hha?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,73,5,8,'Towelie',
        22,"2001-08-08",false,508,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,false,false,'The boys get a new video game system and their plan for the foreseeable future is to play it! When the government steals their new Game Sphere, the boys will stop at nothing to get it back. Their one hope for infiltrating the top secret lab where the Game Sphere is being kept is to team up with Towelie, a genetically engineered towel who only wants to get high.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE508.jpeg',8.3,['https://tv.apple.com/us/episode/towelie/umc.cmc.1nyzwnh2m0gwymh9oxi1bmwbt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,74,5,9,'Osama bin Laden Has Farty Pants',
        20,"2001-11-07",false,509,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,['Osama bin Laden','Fleetwood Mac',''],false,'The kids of South Park have raised money to send to the children of Afghanistan, but the Government believes the Afghani children\'s thank you gift is contaminated with Anthrax and the boys are forced to take it back to Afghanistan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE509.jpeg',7.8,['https://tv.apple.com/us/episode/osama-bin-laden-has-farty-pants/umc.cmc.6a54th9lvwc8tgotgqdgab49e?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,75,5,10,'How to Eat with Your Butt',
        20,"2001-11-14",false,510,false,'TV-MA','Trey Parker','Trey Parker',3.16,false,['Ben Affleck'],false,'After Cartman gets Kenny\'s school picture on every \"missing child\" milk carton in the country, a couple mistake Kenny for their missing son.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE510.jpeg',8.0,['https://tv.apple.com/us/episode/how-to-eat-with-your-butt/umc.cmc.4ubujdpckrny8qhtyznchjbkk?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,76,5,11,'The Entity',
        20,"2001-11-21",false,511,false,'TV-MA','Trey Parker','Trey Parker',2.3,false,['Bill Gates','Donald Trump','Enrique Iglesias','John Travolta','Steve Forbes','Steve Jobs','Ted Turner','Yasmine Bleeth'],false,'Mr. Garrison gets fed up with long lines, delayed flights and the airline industry in general and invents his own transportation device.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE511.jpeg',8.2,['https://tv.apple.com/us/episode/the-entity/umc.cmc.3lnc2diz3cy49dl033m2wtb0z?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,77,5,12,'Here Comes the Neighborhood',
        22,"2001-11-28",false,512,false,'TV-MA','Eric Stough','Trey Parker',3.03,false,['Will and Jada Pinkett Smith','Oprah Winfrey','Snoop Dogg'],false,'Tolkien is tired of being the only rich kid in town, and succeeds in attracting several other wealthy families to South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE512.jpeg',8.0,['https://tv.apple.com/us/episode/here-comes-the-neighborhood/umc.cmc.2pzimmfxq9z8akl622t2s0bst?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,78,5,13,'Kenny Dies',
        20,"2001-12-05",false,513,false,'TV-MA','Trey Parker','Trey Parker',2.66,false,['Madonna'],false,'In a very special episode of "South Park," Cartman fights for Kenny\'s life when he speaks before Congress in favor of stem-cell research.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE513.jpeg',8.8,['https://tv.apple.com/us/episode/kenny-dies/umc.cmc.6f407s5s756wreqjmxxzh89zv?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,79,5,14,'Butters\' Very Own Episode',
        22,"2001-12-12",false,514,false,'TV-MA','Eric Stough','Trey Parker',2.63,false,['OJ Simpson','Gary Condit','John and Patricia Ramsey','John Elway'],false,'Alone and lost, Butters determinedly makes his way through porn theatres and gay bathhouses in an effort to get his dad back home in time to eat at Bennigans for his parents\' anniversary.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE514.jpeg',9.0,['https://tv.apple.com/us/episode/butters-very-own-episode/umc.cmc.3vjlhz055kpxenamm5mk9vycf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,80,6,1,'Jared Has Aides',
        20,"2002-03-06",false,602,false,'TV-MA','Trey Parker','Trey Parker',3.30,false,['Jared Fogle'],false,'As the country becomes obsessed with a popular program for losing weight, the boys see an opportunity to become sponsored by a major restaurant chain.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE602.jpeg',8.0,['https://tv.apple.com/us/episode/jared-has-aides/umc.cmc.5l5tzf79vo5du1zdek0mgc4l9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,81,6,2,'Asspen',
        20,"2002-03-13",false,603,false,'TV-MA','Trey Parker','Trey Parker',2.60,false,false,false,'While the adults trapped at a time-share sales meeting, Stan is challenged by the best skier on the mountain.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE603.jpeg',8.3,['https://tv.apple.com/us/episode/asspen/umc.cmc.2qc0ztk2finouqcojimnsqb59?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,82,6,3,'Freak Strike',
        20,"2002-03-20",false,601,false,'TV-MA','Trey Parker','Trey Parker',3.15,false,['Maury Povich','Liza Minnelli'],false,'When the boys learn that talk shows offer prizes to people who are grossly disfigured they can\'t sign Butters up fast enough.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE601.jpeg',7.9,['https://tv.apple.com/us/episode/freak-strike/umc.cmc.2op7a82wymtk3a0v3j0bmuivx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,83,6,4,'Fun with Veal',
        20,"2002-03-27",false,605,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Michael Dorn'],false,'Stan is appalled when he realizes the veal he\'s been eating is, in fact, the meat from little baby calves.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE605.jpeg',7.9,['https://tv.apple.com/us/episode/fun-with-veal/umc.cmc.736wd25qeg4zlrezzwb787uvv?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,84,6,5,'The New Terrance and Phillip Movie Trailer',
        20,"2002-04-03",false,604,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Russell Crowe'],false,'All the kids in South Park are glued to the TV, wild with anticipation to see the first trailer for the latest Terrance and Phillip movie.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE604.jpeg',8.0,['https://tv.apple.com/us/episode/the-new-terrance-and-phillip-movie-trailer/umc.cmc.5jdaibfxxb5d1ff2q50lky53o?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,85,6,6,'Professor Chaos',
        20,"2002-04-10",false,606,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,false,false,'The boys fire Butters as their new friend. Devastation over his rejection unleashes Butters\' dark side and Professor Chaos is born.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE606.jpeg',8.5,['https://tv.apple.com/us/episode/professor-chaos/umc.cmc.1az1jn0kq99c3v98qqvz18osj?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,86,6,7,'Simpsons Already Did It',
        20,"2002-06-26",false,607,false,'TV-MA','Trey Parker','Trey Parker',1.94,false,false,false,'Professor Chaos is frustrated when he realizes all of his diabolical plans to wreak havoc on South Park have already been done by The Simpsons.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE607.jpeg',8.8,['https://tv.apple.com/us/episode/the-simpsons-already-did-it/umc.cmc.3zdmw2yd63s1tsjkz0e6kzy49?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,87,6,8,'Red Hot Catholic Love',
        22,"2002-07-03",false,608,false,'TV-MA','Trey Parker','Trey Parker',1.49,false,['Pope John Paul II'],false,'A sexual abuse scandal involving priests hits South Park and is taken all the way to the Vatican.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE608.jpeg',8.2,['https://tv.apple.com/us/episode/red-hot-catholic-love/umc.cmc.2szsj7xsk4kyvkxoqx7nwgcqq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,88,6,9,'Free Hat',
        22,"2002-07-10",false,609,false,'TV-MA','Toni Nugnes','Trey Parker',2.80,false,['George Lucas','Steven Spielberg','Francis Ford Coppola','Pat O\'Brien','Ted Koppel'],false,'When the boys find out that their favorite movies are being enhanced, re-released and ruined in the process, they form a club to \"Save Films from their Directors.\"','https://hosting.photobucket.com/images/i/lesaintdumech/SPE609.jpeg',8.2,['https://tv.apple.com/us/episode/free-hat/umc.cmc.4a8ypwura48tar8ozd3k7r17s?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,89,6,10,'Bebe\'s Boobs Destroy Society',
        20,"2002-07-17",false,610,false,'TV-MA','Trey Parker','Trey Parker',2.53,false,false,false,'Cartman gets kicked out of the gang when Bebe develops boobs and the boys lose their minds, threatening their friendships and society as we know it.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE610.jpeg',8.2,['https://tv.apple.com/us/episode/bebes-boobs-destroy-society/umc.cmc.2rrv9vsgpvben0lju7q1oevvr?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,90,6,11,'Child Abduction Is Not Funny',
        20,"2002-07-24",false,611,false,'TV-MA','Trey Parker','Trey Parker',2.01,false,false,false,'In an effort to protect their children from kidnappers, the parents hire the owner of City Wok Restaurant to build the Great Wall of South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE611.jpeg',8.5,['https://tv.apple.com/us/episode/child-abduction-is-not-funny/umc.cmc.qon7tfsy4pmbv7eubvpld8ig?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,91,6,12,'A Ladder to Heaven',
        20,"2002-11-06",false,612,false,'TV-MA','Trey Parker','Trey Parker',2.65,false,['Alan Jackson','George W. Bush','Saddam Hussein','Condoleezza Rice','Donald Rumsfeld'],false,'Kenny died with the winning ticket to a prize of endless candy in his pocket. The boys decide to build a ladder to Heaven where they expect to find him and get the ticket back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE612.jpeg',8.7,['https://tv.apple.com/us/episode/a-ladder-to-heaven/umc.cmc.36btornxffs21h0r26yhwp0vf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,92,6,13,'The Return of the Fellowship of the Ring to the Two Towers',
        20,"2002-11-13",false,613,false,'TV-MA','Trey Parker','Trey Parker',2.80,false,false,false,'The boys embark upon a mythical quest as they set out to return their copy of the "The Lord of the Rings" movie to their local video store.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE613.jpeg',9.4,['https://tv.apple.com/us/episode/the-return-of-the-fellowship-of-the-ring-to-the-two-towers/umc.cmc.6nlkyq789v30s77ryghwd84ap?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,93,6,14,'The Death Camp of Tolerance',
        20,"2002-11-20",false,614,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,false,false,'The boys are sentenced to the Death Camp of Tolerance where they learn how to treat minorities. Mr. Slave and Lemmiwinks make their debut in this episode.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE614.jpeg',8.7,['https://tv.apple.com/us/episode/the-death-camp-of-tolerance/umc.cmc.7khtrec17bsqy0gol9hxm58yb?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,94,6,15,'The Biggest Douche in the Universe',
        20,"2002-11-27",false,615,false,'TV-MA','Trey Parker','Trey Parker',1.71,false,['John Edward','Rob Schneider'],false,'When a famous psychic fails to help him exorcise Kenny from his body, Cartman and Chef travel to the moors of Scotland, where Chef\'s mom tries a little of her voodoo magic on him.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE615.jpeg',8.6,['https://tv.apple.com/us/episode/the-biggest-douche-in-the-universe/umc.cmc.5g2o8xi2lwrgoy8nur7afxre7?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,95,6,16,'My Future Self \'n\' Me',
        20,"2002-12-04",false,616,false,'TV-MA','Trey Parker & Eric Stough','Trey Parker',2.95,false,['Ozzy Osbourne'],false,'When a 32-year-old man claiming to be Stan from the future shows up in South Park, young Stan is forced to come to terms with the loser he will become.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE616.jpeg',8.6,['https://tv.apple.com/us/episode/my-future-self-n-me/umc.cmc.38b2u7b25fepi1egfgjr4mwnb?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,96,6,17,'Red Sleigh Down',
        22,"2002-12-11",false,617,false,'TV-MA','Trey Parker','Trey Parker',1.98,false,false,false,'Cartman has to score one big "nice" to be eligible for Christmas presents this year. He recruits Santa, Mr. Hankey and Jesus in a desperate attempt to bring Christmas to the downtrodden citizens of Iraq.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE617.jpeg',8.0,['https://tv.apple.com/us/episode/red-sleigh-down/umc.cmc.6cipl15lkj5dv5oqrf3olm3mw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,97,7,1,'Cancelled',
        22,"2003-03-19",false,704,false,'TV-MA','Trey Parker','Trey Parker',2.34,false,['Jeff Goldblum','Don King','Frank Sinatra','George Burns','Jimmie Walker','Michael Jordan','Missy Elliott','Saddam Hussein'],false,'Stan, Cartman, Kyle and Kenny find out that planet Earth is just one big intergalactic reality show and it\'s about to be cancelled','https://hosting.photobucket.com/images/i/lesaintdumech/SPE704.jpeg',8.4,['https://tv.apple.com/us/episode/cancelled/umc.cmc.5493dujaivblfnju4pfslhuqh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,98,7,2,'Krazy Kripples',
        20,"2003-03-26",false,702,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Christopher Reeve','Gene Hackman','Larry King','Saddam Hussein','David Blaine','Osama bin Laden'],false,'Jimmy and Timmy pull together a group of people like themselves and call their new club the \"Crips\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE702.jpeg',8.3,['https://tv.apple.com/us/episode/krazy-kripples/umc.cmc.rery6ob0rxdo6vcuk9vpkc0h?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,99,7,3,'Toilet Paper',
        20,"2003-04-02",false,703,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,false,false,'Cartman convinces the boys to "toilet paper" their teacher\'s house, but Kyle is overwhelmed with guilt.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE703.jpeg',8.3,['https://tv.apple.com/us/episode/toilet-paper/umc.cmc.n22mq2d71bcll540cevi2tcg?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,100,7,4,'I\'m a Little Bit Country',
        22,"2003-04-09",false,701,false,'TV-MA','Trey Parker','Trey Parker',3.04,false,['Benjamin Franklin','John Adams','John Dickinson','John Hancock','Thomas Jefferson','Cheech & Chong','Drew Carey','Jared Fogle','Sally Struthers','Stephen Hopkins','Slash'],['Norman Lear'],'The boys join some anti-war protesters because it is a free pass out of school for the day.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE701.jpeg',8,['https://tv.apple.com/us/episode/im-a-little-bit-country/umc.cmc.41t2x6opyjcx99l13w50pegel?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,101,7,5,'Fat Butt and Pancake Head',
        20,"2003-04-16",false,705,'Jennifer-Lopez-Mania','TV-MA','Trey Parker','Trey Parker',2.60,false,['Jennifer Lopez','Ben Affleck'],['Blaine Fontana'],'One of Cartman\'s body parts becomes famous overnight and rivals the popularity of another superstar.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE705.jpeg',8.4,['https://tv.apple.com/us/episode/fat-butt-and-pancake-head/umc.cmc.5shpunxz0autkbqmiyridu5yb?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,102,7,6,'Lil\' Crime Stoppers',
        22,"2003-04-23",false,706,false,'TV-MA','Trey Parker','Trey Parker',2.40,false,false,false,'After they return a missing doll to a little girl, the police department recognizes the boys\' efforts and officially names them \"junior deputies\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE706.jpeg',8.6,['https://tv.apple.com/us/episode/lil-crime-stoppers/umc.cmc.5b56lkgd5osz5caph2qeh2ty1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,103,7,7,'Red Man\'s Greed',
        20,"2003-04-30",false,707,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,false,['Alex Glick'],'The citizens of South Park are being forced off their land to make way for a new super highway after owners of the Three Feathers Indian Casino acquire the town.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE707.jpeg',7.6,['https://tv.apple.com/us/episode/red-mans-greed/umc.cmc.51yfl0ul022mnwkaj0oc473xe?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,104,7,8,'South Park Is Gay!',
        20,"2003-10-22",false,708,false,'TV-MA','Trey Parker','Trey Parker',3.10,false,['George W. Bush'],false,'The town of South Park celebrates the new, hip metro-sexual craze.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE708.jpeg',8.1,['https://tv.apple.com/us/episode/south-park-is-gay/umc.cmc.36cgl4lmyyjs39in8qn4ojvu6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,105,7,9,'Christian Rock Hard',
        20,"2003-10-29",false,709,false,'TV-MA','Trey Parker','Trey Parker',2.42,false,['Britney Spears','Alanis Morissette','Metallica','Blink-182','Meat Loaf','Missy Elliott','Ozzy Osbourne','Master P','Rancid'],false,'When the other boys kick Cartman out of their band, he pulls his own group together to make music for Jesus.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE709.jpeg',9,['https://tv.apple.com/us/episode/south-park-is-gay/umc.cmc.36cgl4lmyyjs39in8qn4ojvu6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,106,7,10,'Grey Dawn',
        20,"2003-11-05",false,710,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,false,false,'With South Park\'s senior citizens behind the wheel, more than a few farmer\'s markets have been mowed down. Unwilling to surrender their driver\'s licenses, the elderly fight back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE710.jpeg',8.1,['https://tv.apple.com/us/episode/grey-dawn/umc.cmc.4c745nhirmpamscc8pbq1es3x?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,107,7,11,'Casa Bonita',
        20,"2003-11-12",false,711,false,'TV-MA','Trey Parker','Trey Parker',2.65,false,false,false,'Kyle chooses Stan, Kenny and Butters to celebrate his birthday at Casa Bonita. When Cartman finds out he\'s not invited, he arranges for Butters to conveniently go \"missing\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE711.jpeg',9.2,['https://tv.apple.com/us/episode/casa-bonita/umc.cmc.5d016texaynbdpyzeqcb4kqhq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,108,7,12,'All About Mormons',
        20,"2003-11-19",false,712,false,'TV-MA','Trey Parker','Trey Parker',2.35,false,false,false,'A Mormon kid moves to South Park and it\'s up to Stan to kick his ass. But when Stan and his dad meet their new Mormon neighbors, they become fascinated with how genuinely nice they are.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE712.jpeg',8.9,['https://tv.apple.com/us/episode/all-about-mormons/umc.cmc.6h2zjk0ovvf64e384r8g2xf1c?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,109,7,13,'Butt Out',
        22,"2003-12-03",false,713,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,['Rob Reiner'],false,'After singing and dancing representatives from an anti-smoking campaign rap about the dangers of smoking, the kids at South Park Elementary realize how cool it really is and take up the habit.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE713.jpeg',7.9,['https://tv.apple.com/us/episode/butt-out/umc.cmc.53kptl4dpvdualstz3vuwdwxp?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,110,7,14,'Raisins',
        22,"2003-12-10",false,714,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,false,false,'After Wendy breaks up with Stan the boys take him to "Raisins", a local restaurant known for its great chicken wings and hot girls.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE714.jpeg',8.6,['https://tv.apple.com/us/episode/raisins/umc.cmc.gm1nrnoq8gnb64hep0s5zgy3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,111,7,15,'It\'s Christmas in Canada',
        22,"2003-12-17",false,715,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,['Saddam Hussein'],false,'The town decides to cancel Christmas and take up a collection when Ike\'s Canadian birth parents show up unexpectedly and want their baby back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE715.jpeg',7.5,['https://tv.apple.com/us/episode/its-christmas-in-canada/umc.cmc.esf5b9yq1jnqlzji2ygq3a5x?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,112,8,1,'Good Times with Weapons',
        22,"2004-03-17",false,801,false,'TV-MA','Trey Parker','Trey Parker',3.31,false,false,false,'The boys are transformed into Japanese warriors after they trick a vendor and buy martial arts weapons at a local flea market.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE801.jpeg',9.2,['https://tv.apple.com/us/episode/good-times-with-weapons/umc.cmc.77mqhx12k7r29zo4ukx22t8xl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,113,8,2,'Up the Down Steroid',
        22,"2004-03-24",false,803,false,'TV-MA','Trey Parker','Trey Parker',3.64,false,['Barry Bonds','Jason Giambi','Mark McGwire'],false,'Jimmy is in training for the upcoming Special Olympics and he\'s determined to win at any cost.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE803.jpeg',8.6,['https://tv.apple.com/us/episode/up-the-down-steroid/umc.cmc.4x8k726yyhbbh8eei431fb5gt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,114,8,3,'The Passion of the Jew',
        22,"2004-03-31-",false,804,false,'TV-MA','Trey Parker','Trey Parker',4.43,false,['Mel Gibson'],false,'Kyle finally sees the blockbuster movie "The Passion of the Christ" and admits that Cartman has been right about the Jewish people all along.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE804.jpeg',8.6,['https://tv.apple.com/us/episode/the-passion-of-the-jew/umc.cmc.yo12ao00hv47kfpcs7ih9dnc?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,115,8,4,'You Got F\'d in the A',
        22,"2004-04-07",false,805,'You Got Served','TV-MA','Trey Parker','Trey Parker',3.96,false,false,['Ming Yao'],'Stan just got served, and now it\'s up to him to put together a team of South Park\'s best dancers to compete against a troupe from Orange County','https://hosting.photobucket.com/images/i/lesaintdumech/SPE805.jpeg',8.1,['https://tv.apple.com/us/episode/you-got-fd-in-the-a/umc.cmc.2urhjbigvo933bdcquxs8jgas?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,116,8,5,'Awesom-O',
        22,"2004-04-14",false,802,false,'TV-MA','Trey Parker','Trey Parker',3.81,false,['Justin Timberlake'],false,'Cartman plans to learn all of Butters\' innermost secrets and then use them against him, by pretending to be Butters\' new best friend, a robot named A.W.E.S.O.M.-O 4000.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE802.jpeg',9.2,['https://tv.apple.com/us/episode/awesome-o/umc.cmc.4odwhrup72ge9d0j1inirjrjh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,117,8,6,'The Jeffersons',
        22,"2004-04-21",false,807,false,'TV-MA','Trey Parker','Trey Parker',4.23,false,['Michael Jackson'],false,'The children of South Park are attracted to "Mr. Jefferson", the new neighbor in town, and Cartman goes out of his way to get "Mr. Jefferson" to love him best..','https://hosting.photobucket.com/images/i/lesaintdumech/SPE807.jpeg',8.6,['https://tv.apple.com/us/episode/the-jeffersons/umc.cmc.5f4rcblwbn6xd1grybpbs9qj6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,118,8,7,'Goobacks',
        22,"2004-04-28",false,806,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Bill O\'Reilly','Aaron Brown'],false,'Humans from the year 3035 are traveling to South Park through a recently opened time portal and are looking for work.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE806.jpeg',8.3,['https://tv.apple.com/us/episode/goobacks/umc.cmc.79hflox70cejjcszmbrj6wyzh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,119,8,8,'Douche and Turd',
        22,"2004-10-27",false,808,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,['P. Diddy'],false,'A PETA protest against the use of a cow as South Park Elementary\'s mascot forces the student body to choose a new one.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE808.jpeg',8.4,['https://tv.apple.com/us/episode/douche-and-turd/umc.cmc.3dsqiygigx2jniaqjon901dsq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,120,8,9,'Something Wall-Mart This Way Comes',
        22,"2004-11-03",false,809,false,'TV-MA','Trey Parker','Trey Parker',3.05,false,false,false,'In order to save South Park, Stan and Kyle have to find a way to destroy the ever-expanding Wall-Mart superstore while keeping Cartman from stabbing them in the back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE809.jpeg',8.6,['https://tv.apple.com/us/episode/something-wall-mart-this-way-comes/umc.cmc.631jtjlqo2crprblsm37f90o5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,121,8,10,'Preschool',
        22,"2004-11-10",false,810,false,'TV-MA','Trey Parker','Trey Parker',3.26,false,false,false,'Trent Boyett, the kid who took the fall for the boys 5 years ago is getting out of Juvie, and his first order of business is revenge.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE810.jpeg',8.4,['https://tv.apple.com/us/episode/pre-school/umc.cmc.6zkmp7helobbthiukejlvxu9s?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,122,8,11,'Quest for Ratings',
        22,"2004-11-17",false,811,false,'TV-MA','Trey Parker','Trey Parker',3.20,false,false,false,'The boys of South Park produce their own morning news show on the school\'s closed-circuit television station and are immediately caught up in an intense competition for ratings.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE811.jpeg',8.2,['https://tv.apple.com/us/episode/quest-for-ratings/umc.cmc.5h2vk1lvp6ys219czzemy7hzw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,123,8,12,'Stupid Spoiled Whore Video Playset',
        22,"2004-12-01",false,812,false,'TV-MA','Trey Parker','Trey Parker',3.14,false,['Paris Hilton'],false,'Disturbed by the corruptive influence Paris Hilton has on all little girls in South Park, one of the town\'s favorite citizens challenges her to a \"whore-off\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE812.jpeg',8.4,['https://tv.apple.com/us/episode/stupid-spoiled-whore-video-playset/umc.cmc.22mrrrn6tno9gebdyp40npupn?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,124,8,13,'Cartman\'s Incredible Gift',
        22,"2004-12-08",false,813,false,'TV-MA','Trey Parker','Trey Parker',2.66,false,false,false,'After sustaining a severe head injury, Cartman appears to have the power to see into the future. South Park detectives are quick to enlist his help in cracking unsolved murder cases.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE813.jpeg',8.6,['https://tv.apple.com/us/episode/cartmans-incredible-gift/umc.cmc.2myh04brh0lqvrtgflpfto7tq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,125,8,14,'Woodland Critter Christmas',
        22,"2004-12-15",false,814,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,false,false,'Stan agrees to help a group of adorable Woodland Critters build a manger in anticipation of the birth of their Lord and Savior, only to find out that they serve Satan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE814.jpeg',9.1,['https://tv.apple.com/us/episode/woodland-critter-christmas/umc.cmc.5hjxxktuax573g44azk9u72dm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,126,9,1,'Mr. Garrison\'s Fancy New Vagina',
        22,"2005-03-09",false,901,false,'TV-MA','Trey Parker','Trey Parker',2.97,false,false,false,'As Mr. Garrison enjoys his new womanly attributes after his sex change, the rest of the town gets in touch with their inner feelings too.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE901.jpeg',7.6,['https://tv.apple.com/us/episode/mr-garrisons-fancy-new-vagina/umc.cmc.6uekclhx1uskoomfpp00fpd5t?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,127,9,2,'Die Hippie, Die',
        22,"2005-03-16",false,902,false,'TV-MA','Trey Parker','Trey Parker',2.36,false,false,false,'When hippie drum circles start popping up in people\'s attics and backyards the citizens of South Park have no choice but to turn to Eric Cartman for help.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE902.jpeg',8.6,['https://tv.apple.com/us/episode/die-hippie-die/umc.cmc.20bm04hqa5nofjvy7eye14svx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,128,9,3,'Wing',
        22,"2005-03-23",false,903,false,'TV-MA','Trey Parker','Trey Parker',2.30,false,['Wing Han Tsang','Sylvester Stallone','Manuelo Furnanda'],['Wing Han Tsang','Lou Rawls'],'The boys set up a talent agency and pool all their resources and impress their first client only to have another agency steal him away.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE903.jpeg',7.4,['https://tv.apple.com/us/episode/wing/umc.cmc.6u87qz5d9ib7aqcbcl733gasl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,129,9,4,'Best Friends Forever',
        22,"2005-03-30",false,904,false,'TV-MA','Trey Parker','Trey Parker',2.72,false,['George W. Bush'],false,'Kenny is the only one of his friends to get the newest, coolest portable gaming device and Cartman cannot deal with it. Will they remain best friends forever?','https://hosting.photobucket.com/images/i/lesaintdumech/SPE904.jpeg',8.5,['https://tv.apple.com/us/episode/best-friends-forever/umc.cmc.5xi0jmtjby30mf6j84966ebf4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,130,9,5,'The Losing Edge',
        22,"2005-04-06",false,905,false,'TV-MA','Trey Parker','Trey Parker',2.62,false,['Burgess Meredith'],['Diedrich Bader'],'The kids desperately want an end to the boring baseball season. The problem is, they keep winning.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE905.jpeg',8.6,['https://tv.apple.com/us/episode/the-losing-edge/umc.cmc.19u87dzmnekwg7z6urqm6qeb4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,131,9,6,'The Death of Eric Cartman',
        22,"2005-04-13",false,906,false,'TV-MA','Trey Parker','Trey Parker',2.61,false,['Sally Struthers'],false,'Cartman is sure he\'s dead and Butters is sure that Eric Cartman\'s ghost is haunting him. Together they attempt to make amends to all the people Cartman has wronged over the years.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE906.jpeg',9.2,['https://tv.apple.com/us/episode/the-death-of-eric-cartman/umc.cmc.76f419waaz1x4cyfel89609cd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,132,9,7,'Erection Day',
        22,"2005-04-20",false,907,false,'TV-MA','Trey Parker','Trey Parker',2.91,false,false,false,'The South Park Elementary Talent Show is coming up and Jimmy can\'t wait to perform his comedy routine, but first he must find a way to gain control of his raging hormones.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE907.jpeg',7.6,['https://tv.apple.com/us/episode/erection-day/umc.cmc.3v481hyyyvbqcdptzwguiuifw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,133,9,8,'Two Days Before the Day After Tomorrow',
        22,"2005-10-19",false,908,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,false,false,'A Global Warming State of Emergency is declared in South Park as the world\'s largest beaver dam breaks and floods the adjacent town of Beaverton.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE908.jpeg',8.4,['https://tv.apple.com/us/episode/two-days-before-the-day-after-tomorrow/umc.cmc.6iucnnwc1bqgp2puopz4dsmuw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,134,9,9,'Marjorine',
        22,"2005-10-26",false,909,false,'TV-MA','Trey Parker','Trey Parker',2.25,false,false,false,'Butters must fake his death, dress up as a girl and infiltrate a slumber party, in order to retrieve a future telling device Cartman is convinced the girls have.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE909.jpeg',8.8,['https://tv.apple.com/us/episode/marjorine/umc.cmc.xihiwt7oo9k1r97xq3u1v4hf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,135,9,10,'Follow That Egg!',
        22,"2005-11-02",false,910,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,false,false,'Mrs. Garrison realizes he still has feelings for Mr. Slave. But Mr. Slave has moved on. He plans to marry his new love as soon as the Governor signs the same-sex marriage bill. In an effort to thwart Slave\'s plans, Mrs. Garrison leads the charge against gay marriage.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE910.jpeg',8,['https://tv.apple.com/us/episode/follow-that-egg/umc.cmc.5f7zzhuui183z5s8ccw1ejewd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,136,9,11,'Ginger Kids',
        22,"2005-11-09",false,911,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,false,false,'After the sudden on-set of the disease Gingervitis, Cartman rallies all other ginger kids to rise up and assume their role as the master race.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE911.jpeg',8.8,['https://tv.apple.com/us/episode/ginger-kids/umc.cmc.3wgb41dg6qymkk7b9wd4w3tqu?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,137,9,12,'Trapped in the Closet',
        22,"2005-11-16",false,912,false,'TV-MA','Trey Parker','Trey Parker',2.41,false,['Tom Cruise','John Travolta','Nicole Kidman','R. Kelly'],false,'Scientologists converge on Stan\'s house after he is identified as the reincarnation of L. Ron Hubbard. One A-lister locks himself in the closet and refuses to come out after Stan criticizes his talent.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE912.jpeg',9.1,['https://tv.apple.com/us/episode/trapped-in-the-closet/umc.cmc.3olurxmp49kib0ky392pwy2r9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,138,9,13,'Free Willzyx',
        22,"2005-11-30",false,913,false,'TV-MA','Trey Parker','Trey Parker',2.48,false,false,false,'The boys try to rescue their new friend Willzyx, a talking space whale, from the Denver Sea Park and with the help of MASA (Mexican Aeronautica y Spacia Administracion) get him home to the moon for $200.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE913.jpeg',8.1,['https://tv.apple.com/us/episode/free-willzyx/umc.cmc.5utvlntobknewbjtexqn5r8go?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,139,9,14,'Bloody Mary',
        22,"2005-12-07",false,914,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,false,false,'Stan is embarrassed when his dad gets pulled over for drunk driving. Randy believes that only one thing can save him from his "disease," a bleeding statue of the Virgin Mary in the next town.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE914.jpeg',7.9,['https://tv.apple.com/us/episode/bloody-mary/umc.cmc.5ss7w3f7cwqarcmzqtfseq41c?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,140,10,1,'The Return of Chef',
        22,"2006-03-22",false,1001,false,'TV-MA','Trey Parker','Trey Parker',3.49,false,false,['Peter Serafinowicz'],'Chef returns to South Park after spending time away with a group called "The Super Adventure Club", but when his strange behavior starts getting him in trouble, the boys risk everything to save him.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1001.jpeg',8,['https://tv.apple.com/us/episode/the-return-of-chef/umc.cmc.7hrp8rhf5lce5kqrgn934gtcw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,141,10,2,'Smug Alert!',
        22,"2006-03-29",false,1002,false,'TV-MA','Trey Parker','Trey Parker',3.38,false,['George Clooney'],['George Clooney'],'Kyle and his family are moving to San Francisco. The only way Stan can get his best friend back is to convince everyone to start driving hybrid cars.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1002.jpeg',8.1,['https://tv.apple.com/us/episode/smug-alert/umc.cmc.12zm2zykqrblz60qltwejs0e7?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,142,10,3,'Cartoon Wars Part I',
        22,"2006-04-05",false,1003,false,'TV-MA','Trey Parker','Trey Parker',3.02,false,['Ayman al-Zawahiri','George W Bush','Family Guy'],false,'Cartman and Kyle are at war over the popular cartoon, "Family Guy". When the creators of the show announce that they will show the image of a religious symbol, the network threatens to ban the episode. Cartman sees this as his chance to get "Family Guy" off the air for good. The two boys embark upon a mad chase across the country and the fate of "Family Guy" lies with whichever boy reaches Hollywood first.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1003.jpeg',8.7,['https://tv.apple.com/us/episode/cartoon-wars-pt-1/umc.cmc.38waglrbnoweuusdpqugwbp78?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,143,10,4,'Cartoon Wars Part II',
        22,"2006-04-12",false,1004,false,'TV-MA','Trey Parker','Trey Parker',3.49,false,['Muhammand','Ayman al-Zawahiri','George W Bush','Condoleezza Rice','Bart Simpson','Bart Simpson'],false,'After leaving Kyle injured on the side of the road, Cartman races to the headquarters of "Family Guy" determined to put an end to the show once and for all.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1004.jpeg',8.8,['https://tv.apple.com/us/episode/cartoon-wars-pt-2/umc.cmc.2andfozae0i75m8ezatqd2ec6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,144,10,5,'A Million Little Fibers',
        22,"2006-04-19",false,1005,false,'TV-MA','Trey Parker','Trey Parker',2.68,false,['Oprah Winfrey','Geraldo Rivera','Larry King'],false,'Towelie gets over his drug addiction and writes his memoirs. With Oprah\'s support, his book becomes a best seller and his story inspires millions to turn their lives around.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1005.jpeg',6.1,['https://tv.apple.com/us/episode/a-million-little-fibers/umc.cmc.71u88w9yd1evvx3i87ggc6vpy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,145,10,6,'ManBearPig',
        22,"2006-04-26",false,1006,false,'TV-MA','Trey Parker','Trey Parker',2.72,false,['Al Gore'],false,'Al Gore warns the school about the threat of ManBearPig.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1006.jpeg',7.9,['https://tv.apple.com/us/episode/manbearpig/umc.cmc.11gs2o5a68wg64i8y03xu4hw0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,146,10,7,'Tsst',
        22,"2006-05-03",false,1007,false,'TV-MA','Trey Parker','Trey Parker',2.88,false,['Cesar Millan','Jo Frost','Stella Reid','Deborah Carroll','Yvonne Finnerty'],false,'When Cartman\'s mom realizes she can\'t control her son anymore, she gets help from an expert. The "Dog Whisperer" may have what it takes but Eric Cartman\'s not going down without a fight.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1007.jpeg',9.1,['https://tv.apple.com/us/episode/tsst/umc.cmc.3k07s2dx91t5p1rg6jh0yn9pn?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,147,10,8,'Make Love, Not Warcraft',
        22,"2006-10-04",false,1008,false,'TV-MA','Trey Parker','Trey Parker',3.40,false,false,false,'The boys dedicate their lives to defeating a mad gamer and saving the World of Warcraft.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1008.jpeg',9.5,['https://tv.apple.com/us/episode/make-love-not-warcraft/umc.cmc.5wds0xlttv53iu3bu36tzufjr?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,148,10,9,'Mystery of the Urinal Deuce',
        22,"2006-10-11",false,1009,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,['Hardly Boys','George W. Bush','Dick Cheney','Donald Rumsfeld','Condoleezza Rice'],false,'The world\'s biggest conspiracy of all time is finally uncovered when Eric Cartman exposes the true culprit behind the September 11th attacks.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1009.jpeg',8.2,['https://tv.apple.com/us/episode/mystery-of-the-urinal-deuce/umc.cmc.1coayo2umq6ey7uo19m53r5zw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,149,10,10,'Miss Teacher Bangs a Boy',
        22,"2006-10-18",false,1010,false,'TV-MA','Trey Parker','Trey Parker',2.50,false,['Beth Chapman'],false,'In his new role as School Hallway Monitor at South Park Elementary, Cartman must team up with Kyle when they discover a teacher having sex with a student.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1010.jpeg',8.5,['https://tv.apple.com/us/episode/miss-teacher-bangs-a-boy/umc.cmc.5su302cfte2pi04j4gmih4103?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,150,10,11,'Hell on Earth 2006',
        22,"2006-10-25",false,1011,false,'TV-MA','Trey Parker','Trey Parker',2.96,false,['Biggie Smalls','Cardinal Roger Mahony','Adolf Hitler','Steve Irwin','Princess Diana','Frank Sinatra','George Burns','Jeffrey Dahmer','John Wayne Gacy','Mahatma Gandhi','Ted Bundy'],false,'Satan is throwing the biggest Halloween costume party ever. Just like a girl getting ready for her sweet sixteen, every detail must be perfect for the prince of darkness. The antics of the most notorious serial killers of all time threaten his fun.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1011.jpeg',8,['https://tv.apple.com/us/episode/hell-on-earth-2006/umc.cmc.5fhzyoeualahslo3h6df78pfi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,151,10,12,'Go God Go',
        22,"2006-11-01",false,1012,false,'TV-MA','Trey Parker','Trey Parker',3.25,false,['Richard Dawkins'],false,'South Park Elementary faces strong opposition to the topic of evolution. Cartman\'s too busy to notice as he plans to propel himself into the future on the precise release date of the newest, hottest game console.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1012.jpeg',8.5,['https://tv.apple.com/us/episode/go-god-go/umc.cmc.6yerlmo3z98zurpsgu3eztey6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,152,10,13,'Go God Go XII',
        22,"2006-11-08",false,1013,false,'TV-MA','Trey Parker','Trey Parker',3.53,false,['Richard Dawkins'],false,'Eric Cartman has frozen himself in an attempt to make his three-week wait for a Nintendo Wii pass quickly. A freak accident landed him over 500 years in the future and now, he\'s stuck in a Godless world on the brink of war with no Nintendo Wii.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1013.jpeg',8.6,['https://tv.apple.com/us/episode/go-god-go-xii/umc.cmc.5m5mjq1ofq6gsc25b037v09cf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,153,10,14,'Stanley\'s Cup',
        22,"2006-11-15",false,1014,false,'TV-MA','Trey Parker','Trey Parker',2.94,false,false,false,'Stan Marsh has hit rock bottom. He\'s got no job, no bicycle and his only way out of a bad situation is to coach the local pee wee hockey team.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1014.jpeg',7.4,['https://tv.apple.com/us/episode/stanleys-cup/umc.cmc.s9eovk3atbizo557zi2qhbnv?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,154,11,1,'With Apologies to Jesse Jackson',
        22,"2007-03-07",false,1101,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,['Jesse Jackson','Michael Richards','Pat Sajak','Jada Pinkett Smith','Vanna White'],false,'After Randy Marsh experiences an unfortunate incident on national TV, the bomb hits South Park. While Randy seeks forgiveness from Jesse Jackson, South Park Elementary invites a midget by the name of Dr. Nelson to talk about sensitivity.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1101.jpeg',8.9,['https://tv.apple.com/us/episode/with-apologies-to-jesse-jackson/umc.cmc.ibbmc6bct4p8cqnkjcz1diz9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,155,11,2,'Cartman Sucks',
        22,"2007-03-14",false,1102,false,'TV-MA','Trey Parker','Trey Parker',2.75,false,false,false,'When his "ultimate plan" to embarrass Butters backfires, Cartman struggles to keep his classmates from seeing a compromising photograph. Meanwhile, Butters is sent to a special camp where they \"Pray the Gay Away\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1102.jpeg',8.9,['https://tv.apple.com/us/episode/cartman-sucks/umc.cmc.7dkwko8kfk8u3p9vn9qek6jp1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,156,11,3,'Lice Capades',
        22,"2007-03-21",false,1103,false,'TV-MA','Trey Parker','Trey Parker',3.06,false,['Angelina Jolie'],false,'SynopAn infestation of head lice plagues South Park Elementary. When Mr. Garrison refuses to name names, Cartman finds a way to detect who has lice in the hopes of making fun of his unfortunate classmate.sis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1103.jpeg',8,['https://tv.apple.com/us/episode/lice-capades/umc.cmc.7kmzeve1ua9jty8so8qicf6hq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,157,11,4,'The Snuke',
        22,"2007-03-28",false,1104,false,'TV-MA','Trey Parker','Trey Parker',3.17,false,['Hillary Clinton','George W. Bush','Queen Elizabeth II'],false,'While Cartman follows a lead on a possible terrorist attack, Hillary Clinton makes a campaign stop in South Park for a big rally.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1104.jpeg',8.1,['https://tv.apple.com/us/episode/the-snuke/umc.cmc.3ozg0ca4e8da42ovsb8bjwooi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,158,11,5,'Fantastic Easter Special',
        22,"2007-04-04",false,1105,false,'TV-MA','Trey Parker','Trey Parker',2.95,false,['Pope Benedict XVI','Bill Donohue'],false,'Determined to get the real story behind why he has to decorate eggs for Easter, Stan falls in with an eccentric society that guards a legendary secret.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1105.jpeg',8.1,['https://tv.apple.com/us/episode/fantastic-easter-special/umc.cmc.1znpnaqgg645usa92ntdj6xep?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,159,11,6,'D-Yikes!',
        22,"2007-04-11",false,1106,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,false,false,'Mrs. Garrison gets dumped again and takes her frustration out on the fourth grade class. However, things start looking up for her when she meets a new friend at the gym and they go out for drink at a local \"girl bar\".','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1106.jpeg',7.6,['https://tv.apple.com/us/episode/d-yikes/umc.cmc.5nver7nuw7lpwcwfrrpp8efpo?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,160,11,7,'Night of the Living Homeless',
        22,"2007-04-18",false,1107,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,false,false,'As an increasing number of homeless people are begging for change all over South Park, the boys work to solve the homeless problem once and for all.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1107.jpeg',8.7,['https://tv.apple.com/us/episode/night-of-the-living-homeless/umc.cmc.14vzv0g733su7pfrdja5k4gqh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,161,11,8,'Le Petit Tourette',
        22,"2007-10-03",false,1108,false,'TV-MA','Trey Parker','Trey Parker',3.323,false,['Chris Hansen'],false,'Cartman discovers the joys of having Tourette\'s syndrome. Drunk with the power of saying whatever he wants without getting in trouble for it, he lines up national TV coverage to take advantage of his new life with no filters.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1108.jpeg',9,['https://tv.apple.com/us/episode/le-petit-tourette/umc.cmc.5xbm839ym17ast7tph4x7oqd5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,162,11,9,'More Crap',
        22,"2007-10-10",false,1109,false,'TV-MA','Trey Parker','Trey Parker',2.98,false,['Bono'],false,'Stan\'s dad becomes South Park\'s home-town hero when the guys down at the local bar see the size of his most recent crap.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1109.jpeg',8.1,['https://tv.apple.com/us/episode/more-crap/umc.cmc.2pirqmsf7mbygwgx8qbiv1ltt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,163,11,10,'Imaginationland Episode I',
        22,"2007-10-17",false,1110,false,'TV-MA','Trey Parker','Trey Parker',3.43,false,['Al-Qaeda','M. Night Shyamalan','Mel Gibson','Michael Bay'],['Jonathan Kimmel'],'When the entire contents of the world\'s imagination lay open before them, Stan and Kyle step right in. Back in South Park, Cartman swears he\'s seen a Leprechaun..','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1110.jpeg',9,['https://tv.apple.com/us/episode/imaginationland-episode-i/umc.cmc.4oopa8flujsdjnmxum7r7aaek?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,164,11,11,'Imaginationland Episode II',
        22,"2007-10-24",false,1111,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,['Kurt Russell','Ricardo Montalban'],false,'Stan and Kyle are being held in the bowels of the Pentagon until they tell the government how they got into Imaginationland. Meanwhile, Cartman simply won\'t rest until he finds Kyle and gets him to make good on their bet to suck his balls.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1111.jpeg',9,['https://tv.apple.com/us/episode/imaginationland-episode-ii/umc.cmc.1la6dzll1cgi98yetan9chojh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,165,11,12,'Imaginationland Episode III',
        22,"2007-10-31",false,1112,false,'TV-MA','Trey Parker','Trey Parker',3.87,false,['Al Gore','John Roberts','Clarence Thomas','Samuel Alito'],false,'Inside Imaginationland, Stan and Butters engage in the battle of their lives as they fight the army of evil imaginary forces. Meanwhile, Cartman goes all the way to the Supreme Court to get Kyle to pay up on their bet.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1112.jpeg',9,['https://tv.apple.com/us/episode/imaginationland-episode-iii/umc.cmc.7fxpnrohp1s1jclkijla0xmzu?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,166,11,13,'Guitar Queer-O',
        22,"2007-11-07",false,1113,false,'TV-MA','Trey Parker','Trey Parker',3.97,false,['Ron Zappolo'],false,'Stan Marsh and Kyle Broflovski are hooked on Guitar Hero. Unfortunately, Stan\'s superior skills on the video game damage his friendship with Kyle.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1113.jpeg',8.4,['https://tv.apple.com/us/episode/guitar-queer-o/umc.cmc.3phn8h9colfyfhyq0wyy9isvb?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,167,11,14,'The List',
        22,"2007-11-14",false,1114,false,'TV-MA','Trey Parker','Trey Parker',3.77,false,['Abraham Lincoln'],false,'The girls in the fourth grade class have made a secret list that rates every boy\'s looks from cutest to ugliest. When the boys steal the list, they are completely unprepared to deal with the results.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1114.jpeg',8.5,['https://tv.apple.com/us/episode/the-list/umc.cmc.2i0bkn03na7lm46mz77i7o6bp?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,168,12,1,'Tonsil Trouble',
        22,"2008-03-12",false,1201,false,'TV-MA','Trey Parker','Trey Parker',3.07,false,['Jimmy Buffet','Magic Johnson'],false,'Cartman finds himself fighting for his life after a routine tonsillectomy goes wrong. When Kyle becomes infected with Cartman\'s ailment, the two won\'t stop for anything as they search for a cure that will reverse their otherwise certain mortality.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1201.jpeg',8,['https://tv.apple.com/us/episode/tonsil-trouble/umc.cmc.4growyjnlzq1er11afqqj5rk2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,169,12,2,'Britney\'s New Look',
        22,"2008-03-19",false,1202,false,'TV-MA','Trey Parker','Trey Parker',2.97,false,['Britney Spears','Barack Obama','Condoleezza Rice','Hillary Clinton','Dick Cheney','Jeff Goldblum','Pat Sajak','Vanna White','Will Smith'],false,'When the boys help Britney Spears get to the North Pole, they discover the shocking secret behind her popularity.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1202.jpeg',7.1,['https://tv.apple.com/us/episode/britneys-new-look/umc.cmc.6bdagdzeon8p9madvm5nls7ri?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,170,12,3,'Major Boobage',
        22,"2008-03-26",false,1203,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,false,false,'In a South Park homage to the 1981 film, "Heavy Metal", the boys are trying to get Kenny off the latest drug craze that\'s captured the junior high and under set.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1203.jpeg',8.7,['https://tv.apple.com/us/episode/major-boobage/umc.cmc.6ywog9cfe856sb225z9f4ubtd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,171,12,4,'Canada on Strike',
        22,"2008-04-02",false,1204,false,'TV-MA','Trey Parker','Trey Parker',2.80,false,['Barack Obama','Hillary Clinton','Nicolas Sarkozy','Oprah Winfrey','Chris Crocker (Leave Britney Alone)','Gary Brolsma (Numa Numa Guy)','Tay Zonday (Chocolate Rain)','Ghyslain Raza (Star Wars Kid)','Jay Maynard (Tron Guy)','Mark Hicks (Afro Ninja)','Taro Aso','Gordon Brown'],false,'The head of the World Canadian Bureau leads the country into a long and painful strike and the responsibility of brokering a settlement rests with the boys.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1204.jpeg',7.7,['https://tv.apple.com/us/episode/canada-on-strike/umc.cmc.5gzuoouqkhw2x93qqaz0tzi79?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,172,12,5,'Eek, a Penis!',
        22,"2008-04-09",false,1205,false,'TV-MA','Trey Parker','Trey Parker',3.50,false,false,false,'While Ms. Garrison is off trying to find a way to become the man he always intended to be, Cartman is put in charge of the classroom.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1205.jpeg',7.6,['https://tv.apple.com/us/episode/eek-a-penis/umc.cmc.2zzcqa8r5lwq7i7hha4f85ndl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,173,12,6,'Over Logging',
        22,"2008-04-16",false,1206,false,'TV-MA','Trey Parker','Trey Parker',3.13,false,false,['Amir Hisham Ouazzani'],'The citizens of South Park wake up and find the internet is gone. When Randy hears there may still be some internet out in California, he packs up his family and heads west.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1206.jpeg',8.5,['https://tv.apple.com/us/episode/over-logging/umc.cmc.13uwfn3vu3ezkhl93ybflka8i?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,174,12,7,'Super Fun Time',
        22,"2008-04-23",false,1207,false,'TV-MA','Trey Parker','Trey Parker',3.08,false,false,false,'While the kids are on an educational field trip to a living museum, Cartman makes Butters sneak away from the class to go to the amusement center located next door.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1207.jpeg',8.4,['https://tv.apple.com/us/episode/super-fun-time/umc.cmc.37dz3koe7fenvtzhqcf38nimc?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,175,12,8,'The China Probrem',
        22,"2008-10-08",false,1208,false,'TV-MA','Trey Parker','Trey Parker',3.73,false,['Steven Spielberg','George Lucas'],false,'With the rest of the American people haunted by the memory of a recent tragic event, only Butters will stand with Cartman as he confronts the Chinese.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1208.jpeg',7.7,['https://tv.apple.com/us/episode/the-china-probrem/umc.cmc.63cexh7is670brhnusy0rhptd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,176,12,9,'Breast Cancer Show Ever',
        22,"2008-10-15",false,1209,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,false,false,'Wendy gets in trouble when she threatens to beat up Cartman after school.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1209.jpeg',8.8,['https://tv.apple.com/us/episode/breast-cancer-show-ever/umc.cmc.4os0qzyrcx087d0dqphcy9fw0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,177,12,10,'Pandemic',
        22,"2008-10-22",false,1210,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Michael Chertoff'],false,'While the world struggles to contain an epidemic of epic proportions, the boys find a way to make money off of it.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1210.jpeg',8,['https://tv.apple.com/us/episode/pandemic/umc.cmc.2l70gl2g2om57303964vmjq8s?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,178,12,11,'Pandemic 2: The Startling',
        22,"2008-10-29",false,1211,false,'TV-MA','Trey Parker','Trey Parker',3.08,false,['Michael Chertoff'],false,'Giant guinea pigs are attacking cities all over the world. The boys have the key that will save everyone from the onslaught but they\'re stranded in the Andes Mountains.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1211.jpeg',7.8,['https://tv.apple.com/us/episode/pandemic-2---the-startling/umc.cmc.5gkxq5rqr0fbsxsz721dkz50?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,179,12,12,'About Last Night...',
        22,"2008-11-05",false,1212,false,'TV-MA','Trey Parker','Trey Parker',3.60,false,['Barack Obama','Michelle Obama','John McCain','Cindy McCain','Sarah Palin','Todd Palin'],false,'While the country celebrates, the President-elect catches everyone off guard when he arrives at the White House prematurely. From the Oval Office, the new Commander-In-Chief assembles his team and prepares for the job ahead.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1212.jpeg',7.6,['https://tv.apple.com/us/episode/about-last-night/umc.cmc.43kj804lt0rglho38xiuab8jg?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,180,12,13,'Elementary School Musical',
        22,"2008-11-12",false,1213,false,'TV-MA','Trey Parker','Trey Parker',2.96,false,false,false,'The boys must embrace the latest fad to hit South Park Elementary or risk their status as the coolest kids in school.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1213.jpeg',7.6,['https://tv.apple.com/us/episode/elementary-school-musical/umc.cmc.397j81ohlcqt6quibkhaoadxz?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,181,12,14,'The Ungroundable',
        22,"2008-11-19",false,1214,false,'TV-MA','Trey Parker','Trey Parker',3.29,false,false,false,'Butters is sure he\'s seen a Vampire at school but he can\'t get anyone to listen to him. Tired of being teased at school and punished by his parents, Butters joins the Vampire group and becomes "ungroundable." Meanwhile, the Goth Kids are angry and frustrated when the other kids can\'t tell the difference between a Goth and a Vampire.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1214.jpeg',7.7,['https://tv.apple.com/us/episode/the-ungroundable/umc.cmc.4edwmzweyg8slqyged0yi473i?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,182,13,1,'The Ring',
        22,"2009-03-11",false,1301,false,'TV-MA','Trey Parker','Trey Parker',3.41,false,['Jonas Brothers'],false,'Kenny takes his new girlfriend Tammy to a Jonas Brothers\' concert where they each get purity rings. Little do they realize, it\'s all part of a certain mouse\'s elaborate plan to sell sex to little girls, and make money.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1301.jpeg',8.1,['https://tv.apple.com/us/episode/the-ring/umc.cmc.7ga5ah06qeoxb3yuuhmy4l30q?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,183,13,2,'The Coon',
        22,"2009-03-18",false,1302,false,'TV-MA','Trey Parker','Trey Parker',3.27,false,false,false,'The Coon rises from the trash and takes his place as a lone vigilante who wipes out crime in the town of South Park','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1302.jpeg',8.4,['https://tv.apple.com/us/episode/the-coon/umc.cmc.po9vxlomkdg75ukec6sob4vl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,184,13,3,'Margaritaville',
        22,"2009-03-25",false,1303,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,['Barack Obama'],false,'Randy steps forward with a solution to fix the desperate state of the economy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1303.jpeg',8.5,['https://tv.apple.com/us/episode/margaritaville/umc.cmc.5motc2f4a57qd7p3olf1jtjho?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,185,13,4,'Eat, Pray, Queef',
        22,"2009-04-01",false,1304,false,'TV-MA','Trey Parker','Trey Parker',3.01,false,['Martha Stewart','Kelly Ripa','Regis Philbin','Jimmy Buffet','Ron Zappolo'],false,'Someone plays an April Fool\'s joke on the boys and it doesn\'t go over well.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1304.jpeg',6.5,['https://tv.apple.com/us/episode/eat-pray-queef/umc.cmc.5j9krtndnzxpfwhutahnt3uxv?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,186,13,5,'Fishsticks',
        22,"2009-04-08",false,1305,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,['Kanye West','Carlos Mencia','Conan O\'Brien','David Letterman','Ellen DeGeneres','Jay Leno','Jimmy Kimmel','Paul Shaffer'],false,'Cartman and Jimmy come up with the funniest joke of all time.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1305.jpeg',8.8,['https://tv.apple.com/us/episode/fishsticks/umc.cmc.1r5n0dz21hcdt9le5cwhwnjm9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,187,13,6,'Pinewood Derby',
        22,"2009-04-15",false,1306,false,'TV-MA','Trey Parker','Trey Parker',2.78,false,['Angela Merkel','Gordon Brown','Han Seung-soo','Hu Jintao','John Howard','Luiz Inácio Lula da Silva','Matti Vanhanen','Nicolas Sarkozy','Raila Odinga','Silvio Berlusconi','Taro Aso','Vladimir Putin','Princess Leia Organa'],false,'Randy has a plan that will assure Stan a first place trophy in this year\'s Pinewood Derby.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1306.jpeg',7.8,['https://tv.apple.com/us/episode/pinewood-derby/umc.cmc.6saxskny50k3tx9w34z7bld4p?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,188,13,7,'Fatbeard',
        22,"2009-04-22",false,1307,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,false,false,'Cartman\'s dream of living the life of a pirate will come true if he can just get to Somalia.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1307.jpeg',8.1,['https://tv.apple.com/us/episode/fatbeard/umc.cmc.5kpxa0xgxay8ssq12kt9505oe?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,189,13,8,'Dead Celebrities',
        22,"2009-10-07",false,1308,false,'TV-MA','Trey Parker','Trey Parker',2.67,false,['Michael Jackson','Bea Arthur','Billy Mays','David Carradine','DJ AM','Farrah Fawcett','Ed McMahon','Walter Cronkite','Dom DeLuise','Les Paul','Arturo Gatti','Natasha Richardson','Marilyn Chambers','Oscar G. Mayer Jr.','Ted Kennedy','Steve McNair','Ron Silver','Ricardo Montalban'],false,'Ike is being tormented by paranormal forces. Kyle brings in professional ghost hunters to help save his little brother.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1308.jpeg',7.7,['https://tv.apple.com/us/episode/dead-celebrities/umc.cmc.6rdepmshz1v9mqh071vpmnmi3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,190,13,9,'Butters\' Bottom Bitch',
        22,"2009-10-14",false,1309,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,false,false,'Butters is determined to get his first kiss so his friends won\'t make fun of him anymore.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1309.jpeg',8.9,['https://tv.apple.com/us/episode/butters-bottom-bitch/umc.cmc.47k0ikjcy6efe6jtl1yd8n8b7?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,191,13,10,'W.T.F.',
        22,"2009-10-21",false,1310,false,'TV-MA','Trey Parker','Trey Parker',2.58,false,['Vince & Linda McMahon','Edge','John Cena'],false,'After attending their first WWE match, all the boys want to be professional wrestlers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1310.jpeg',8.3,['https://tv.apple.com/us/episode/wtf/umc.cmc.5vytkqk82jzc8n957smebjwpc?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,192,13,11,'Whale Whores',
        22,"2009-10-28",false,1311,false,'TV-MA','Trey Parker','Trey Parker',2.57,false,['Paul Watson','Larry King','Yukio Hatoyama','Emperor Akihito'],false,'Stan takes action to stop the Japanese from killing the world\'s whales and dolphins.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1311.jpeg',8.1,['https://tv.apple.com/us/episode/whale-whores/umc.cmc.52upiabrntne2e9zf0iv7gt56?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,193,13,12,'The F Word',
        22,"2009-11-04",false,1312,false,'TV-MA','Trey Parker','Trey Parker',2.82,false,['Emmanuel Lewis'],false,'The boys fight back against the loud and obnoxious motorcycle riders that are disrupting everyone in South Park.[','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1312.jpeg',8.1,['https://tv.apple.com/us/episode/the-f-word/umc.cmc.5z44vt2dbzxhsyh8dh8rmir1o?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,194,13,13,'Dances with Smurfs',
        22,"2009-11-11",false,1313,false,'TV-MA','Trey Parker','Trey Parker',2.77,false,false,false,'Cartman is chosen to do the morning announcements at South Park Elementary.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1313.jpeg',8.1,['https://tv.apple.com/us/episode/dances-with-smurfs/umc.cmc.6v2nqaurcz40slceq6lvd6afi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,195,13,14,'Pee',
        22,"2009-11-18",false,1314,false,'TV-MA','Trey Parker','Trey Parker',2.87,false,false,false,'The boys The boys\' fun-filled day at the water park is about to turn deadly.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1314.jpeg',7.7,['https://tv.apple.com/us/episode/pee/umc.cmc.55b9pfb4wygemxi0i0dmmj6k4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,196,14,1,'Sexual Healing',
        22,"2010-03-17",false,1401,false,'TV-MA','Trey Parker','Trey Parker',3.74,false,['Tiger Woods','Elin Nordegren','Bill Clinton','David Letterman','Barack Obama'],false,'The latest in scientific testing reveals that some of the boys at South Park Elementary have a sex addiction problem.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1401.jpeg',7.5,['https://tv.apple.com/us/episode/sexual-healing/umc.cmc.79igjpegdyx2xyq54k74h9wp5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,197,14,2,'The Tale of Scrotie McBoogerballs',
        22,"2010-03-24",false,1402,false,'TV-MA','Trey Parker','Trey Parker',3.24,false,['Sarah Jessica Parker','The Kardashians','Matthew Broderick','Bruce Jenner','Kris Jenner','Morgan Freeman'],false,'The boys are given a controversial book to read in school and it inspires them to write one of their own.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1402.jpeg',8,['https://tv.apple.com/us/episode/the-tale-of-scrotie-mcboogerballs/umc.cmc.6k7jdh0onmozeeleiy9vrt6sh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,198,14,3,'Medicinal Fried Chicken',
        22,"2010-03-31",false,1403,false,'TV-MA','Trey Parker','Trey Parker',2.99,false,['Colonel Sanders'],false,'Cartman\'s favorite restaurant has been shut down and replaced by a store that sells medicinal marijuana. Randy is desperate to get a prescription card to buy pot and Cartman will do anything to get his beloved fried chicken back.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1403.jpeg',8.7,['https://tv.apple.com/us/episode/medicinal-fried-chicken/umc.cmc.2abnmtfirtdycmt25xjkcy15x?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,199,14,4,'You Have 0 Friends',
        22,"2010-04-07",false,1404,false,'TV-MA','Trey Parker','Trey Parker',3.07,false,false,false,'When Kyle begs Stan to "friend" him, Stan gets sucked into Facebook.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1404.jpeg',8.7,['https://tv.apple.com/us/episode/you-have-0-friends/umc.cmc.5cf84fhfe1ggawpno3fmc83qe?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    ['BLOCKED',200,14,5,'200',
        22,"2010-04-14",false,1405,false,'TV-MA','Trey Parker','Trey Parker',3.33,false,['Muhammad','Tom Cruise','Bono','Charlie Sheen','George Lucas','Hillary Clinton','Jesse Jackson','Jared Fogle','Jimmy Buffet','Kanye West','Martha Stewart','Michael Richards','Oprah Winfrey','Paris Hilton','Rob Reiner','Russell Crowe','Steven Spielberg','Sally Struther','Tiger Woods','Tim Burton','Johnnie Cochran','Fred Savage','Phil Collins','Steve Irwin','Eric Roberts','Barbra Streisand'],false,'The town of South Park faces a class action lawsuit as every celebrity they\'ve ever ridiculed is out for revenge.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1405.jpeg',8.8
    ],
    ['BLOCKED',201,14,6,'201',
        22,"2010-04-21",false,1406,false,'TV-MA','Trey Parker','Trey Parker',3.50,false,['Barbra Streisand','Rob Reiner','Paris Hilton','Pope Benedict XVI','Russell Crowe','Tom Cruise','David Blaine','Kanye West','Oprah Winfrey','Rod Stewart'],false,'Angry celebrities, violent ginger kids and Mecha Streisand are about to destroy South Park and all anyone wants to know is, \"Who is Eric Cartman\'s father?\"','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1406.jpeg',8.8
    ],
    [false,202,14,7,'Crippled Summer',
        22,"2010-04-28",false,1407,false,'TV-MA','Trey Parker','Trey Parker',3.55,false,false,false,'Jimmy and Timmy are off to summer camp with all their handicapable friends.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1407.jpeg',6.8,['https://tv.apple.com/us/episode/crippled-summer/umc.cmc.282do545teq3vmimzcxaqv9ip?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,203,14,8,'Poor and Stupid',
        22,"2010-10-06",false,1408,false,'TV-MA','Trey Parker','Trey Parker',3.14,false,['Charlie Sheen','Dale Earnhardt Jr.','Angus T. Jones','Danica Patrick','Jeff Gordon','Jimmie Johnson','Jon Cryer','Matt Kenseth','Tony Stewart'],false,'Cartman dreams of being a NASCAR driver and he\'s willing to do whatever it takes to make it happen.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1408.jpeg',7.5,['https://tv.apple.com/us/episode/poor-and-stupid/umc.cmc.426va8ae4sj3qzwubg9ceudml?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,204,14,9,'It\'s a Jersey Thing',
        21,"2010-10-13",false,1409,false,'TV-MA','Trey Parker','Trey Parker',3.25,false,['Arnold Schwarzenegger','Mike Sorrentino (The Situation)','Pauly D','Nicole Polizzi (Snooki)','Jacqueline Laurita','Caroline Manzo','Joe and Teresa Giudice','Osama bin Laden'],false,'New Jersey is taking over the nation one state at a time. Randy and the boys take a stand as the Jerseyites approach South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1409.jpeg',7.8,['https://tv.apple.com/us/episode/its-a-jersey-thing/umc.cmc.621wwrr9ugvezfwg81qecwo65?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,205,14,10,'Insheeption',
        23,"2010-10-20",false,1410,false,'TV-MA','Trey Parker','Trey Parker',2.89,false,['Leonardo DiCaprio','Matt Hasselbeck'],false,'When Stan is sent to the school counselor because he\'s holding on to an obscene number of useless possessions, he realizes that Mr. Mackey has a hoarding disorder too.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1410.jpeg',8.1,['https://tv.apple.com/us/episode/insheeption/umc.cmc.3t4th5vg96xrfnhmjt9qxst7c?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,206,14,11,'Coon 2: Hindsight',
        23,"2010-10-27",false,1411,false,'TV-MA','Trey Parker','Trey Parker',2.76,false,false,false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1411.jpeg',8.1,['https://tv.apple.com/us/episode/coon-2-hindsight/umc.cmc.3xeieie876khmpaa2n5vbllte?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,207,14,12,'Mysterion Rises',
        21,"2010-11-03",false,1412,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,['Lebron James'],false,'Mysterion\'s true identity is revealed. Meanwhile, the C***, scorned by his fellow Super Heroes, is out for revenge.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1412.jpeg',8.3,['https://tv.apple.com/us/episode/mysterion-rises/umc.cmc.727kgh9c09rc3z7inwnxfomiy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,208,14,13,'Coon vs. Coon and Friends',
        21,"2010-11-10",false,1413,false,'TV-MA','Trey Parker','Trey Parker',2.79,false,['Justin Bieber'],false,'C*** and Friends find themselves at the mercy of Cartman who now has the dark lord, Cthulhu, doing his bidding. Kenny wrestles with the curse of his super power through his alter ego, Mysterion.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1413.jpeg',8.3,['https://tv.apple.com/us/episode/coon-vs-coon--friends/umc.cmc.3kampc5k9epnccpvkrnhli3br?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,209,14,14,'Cr\u00E8me Fra\u00EEche',
        23,"2010-11-17",false,1414,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,['Alton Brown','Bobby Flay','Jamie Oliver','Guy Fieri','Paula Deen'],false,'Randy\'s obsession with the Food Network forces Sharon to explore a new interest of her own.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1414.jpeg',8.2,['https://tv.apple.com/us/episode/creme-fraiche/umc.cmc.5ptt2fv8xttx3zqntk4tme6qx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,210,15,1,'HumancentiPad',
        21,"2011-04-27",false,1501,false,'TV-MA','Trey Parker','Trey Parker',3.11,false,['Steve Jobs','Dr. Phil'],false,'Kyle is intimately involved in the development of a revolutionary new product called HumancentiPad.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1501.jpeg',7.7,['https://tv.apple.com/us/episode/humancentipad/umc.cmc.4avs5bgdhtetunnt8h4yvu98k?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,211,15,2,'Funnybot',
        23,"2011-05-04",false,1502,false,'TV-MA','Trey Parker','Trey Parker',2.59,false,['Tyler Perry','Angela Merkel','Christian Wulff','Adam Sandler','Ellen DeGeneres','Russell Brand','Louis C.K.','David Spade','Zach Galifianakis','Dane Cook','Jerry Seinfeld','Barack Obama'],false,'Jimmy hosts the Special Ed Department\'s First Annual Comedy Awards.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1502.jpeg',6.4,['https://tv.apple.com/us/episode/funnybot/umc.cmc.3j36bdlyc6fsvwxwk9s9abk55?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,212,15,3,'Royal Pudding',
        21,"2011-05-11",false,1503,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,false,false,'The Prince of Canada is about to take a Princess and Ike is obsessed with the Royal Wedding.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1503.jpeg',6.7,['https://tv.apple.com/us/episode/royal-pudding/umc.cmc.2fxtuzx81qvjso6m4g6xoplgm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,213,15,4,'T.M.I.',
        23,"2011-05-18",false,1504,false,'TV-MA','Trey Parker','Trey Parker',2.42,false,false,false,'Cartman throws a fit when the boys\' penis sizes are posted on the school bulletin board, and is sent to anger management therapy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1504.jpeg',8,['https://tv.apple.com/us/episode/tmi/umc.cmc.1ilj8vrz20wqgjorgwwr72sj1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,214,15,5,'Crack Baby Athletic Association',
        23,"2011-05-25",false,1505,false,'TV-MA','Trey Parker','Trey Parker',2.53,false,['Sarah McLachlan','Slash'],false,'Kyle gets in on the ground floor of Cartman\'s latest business venture, The Crack Baby Athletic Association.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1505.jpeg',7.5,['https://tv.apple.com/us/episode/crack-baby-athletic-association/umc.cmc.2iokygrm31o8b8ubtrab7vnze?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,215,15,6,'City Sushi',
        30,"2011-06-01",false,1506,false,'TV-MA','Trey Parker','Trey Parker',2.56,false,false,false,'Butter is diagnosed with multiple personality disorder.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1506.jpeg',8,['https://tv.apple.com/us/episode/city-sushi/umc.cmc.3lqkdccasg41c3uzefpqho6e9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,216,15,7,'You\'re Getting Old',
        23,"2011-06-08",false,1507,false,'TV-MA','Trey Parker','Trey Parker',2.30,false,['Jim Carrey'],false,'Just after Stan\'s 10th birthday, his worldview starts to change and so do his friendships.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1507.jpeg',8.6,['https://tv.apple.com/us/episode/youre-getting-old/umc.cmc.3glulmlkpz4a4jf8k7dl3jmvf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,217,15,8,'Ass Burgers',
        23,"2011-10-05",false,1508,false,'TV-MA','Trey Parker','Trey Parker',2.94,false,['Barack Obama'],false,'Cartman finds a unique way to cope with Asperger\'s Syndrome.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1508.jpeg',8.1,['https://tv.apple.com/us/episode/ass-burgers/umc.cmc.6adf82qvn38qqsafcimz967ws?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,218,15,9,'The Last of the Meheecans',
        23,"2011-10-12",false,1509,false,'TV-MA','Trey Parker','Trey Parker',2.90,false,false,false,'Cartman joins the United States Border Patrol.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1509.jpeg',8.1,['https://tv.apple.com/us/episode/the-last-of-the-meheecans/umc.cmc.cx75xafg6053ey9e6505d7d3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,219,15,10,'Bass to Mouth',
        23,"2011-10-19",false,1510,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,false,false,'The kids\' most scandalous secrets are being leaked on an outrageous new gossip website.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1510.jpeg',7.5,['https://tv.apple.com/us/episode/bass-to-mouth/umc.cmc.7xnjpgquxs2j9n3b6wct01ad?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,220,15,11,'Broadway Bro Down',
        23,"2011-10-26",false,1511,false,'TV-MA','Trey Parker','Trey Parker & Robert Lopez',2.92,false,['Stephen Sondheim', 'Stephen Schwartz', 'Andrew Lloyd Webber','Elton John'],false,'After Randy takes Sharon to see a hit musical, he becomes Broadway\'s biggest fan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1511.jpeg',7.8,['https://tv.apple.com/us/episode/broadway-bro-down/umc.cmc.6vh2g0wcttxblmv6e10g99wp9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,221,15,12,'1\u0025',
        21,"2011-11-02",false,1512,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,false,false,'The 99% is ganging up on Eric Cartman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1512.jpeg',7.8,['https://tv.apple.com/us/episode/1/umc.cmc.3gp8eyp6ci7qg4jzoc8dwpk21?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,222,15,13,'A History Channel Thanksgiving',
        23,"2011-11-09",false,1513,false,'TV-MA','Trey Parker','Trey Parker',2.85,false,['Natalie Portman'],false,'The boys are getting close to discovering the truth about the first Thanksgiving.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1513.jpeg',7.2,['https://tv.apple.com/us/episode/a-history-channel-thanksgiving/umc.cmc.3n5ijizzxn2mcu6zk9514ckdx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,223,15,14,'The Poor Kid',
        23,"2011-11-16",false,1514,false,'TV-MA','Trey Parker','Trey Parker',2.41,false,false,false,'When one of the boys leaves the toilet seat up after he uses the bathroom, an unspeakable tragedy occurs.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1514.jpeg',7.9,['https://tv.apple.com/us/episode/the-poor-kid/umc.cmc.rv03qba9n10vfbrqe5b8qiwd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,224,16,1,'Reverse Cowgirl',
        30,"2012-03-14",false,1601,false,'TV-MA','Trey Parker','Trey Parker',2.63,false,false,false,'Cartman launches his own gem shopping channel.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1601.jpeg',7.7,['https://tv.apple.com/us/episode/reverse-cowgirl/umc.cmc.41x46vi7lz34tn5th8prdbk47?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,225,16,2,'Cash for Gold',
        30,"2012-03-21",false,1602,false,'TV-MA','Trey Parker','Trey Parker',2.31,false,false,false,'The kids are in danger when new trends start to evolve and shift at a rapid pace.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1602.jpeg',7.9,['https://tv.apple.com/us/episode/cash-for-gold/umc.cmc.clvtc66e9orh4pvgzzn3gkpg?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,226,16,3,'Faith Hilling',
        21,"2012-03-28",false,1603,false,'TV-MA','Trey Parker','Trey Parker',2.70,false,['Newt Gingrich','Mitt Romney','Ron Paul','Rick Santorum'],false,'Synopsis','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1603.jpeg',7.1,['https://tv.apple.com/us/episode/faith-hilling/umc.cmc.7g1k5gwvtk4zmr4qinun1furh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,227,16,4,'Jewpacabra',
        23,"2012-04-04",false,1604,false,'TV-MA','Trey Parker','Trey Parker',2.69,false,false,false,'The town\'s big Easter Egg Hunt is in jeopardy when Cartman produces video evidence of a mysterious creature lurking in the woods.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1604.jpeg',6.7,['https://tv.apple.com/us/episode/jewpacabra/umc.cmc.d5spxoriy77q3mvofz2easfs?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,228,16,5,'Butterballs',
        22,"2012-04-11",false,1605,false,'TV-MA','Trey Parker','Trey Parker',2.23,false,['Dr. Oz','Jerry Sanders'],false,'Butters is the victim of an unlikely bully.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1605.jpeg',7.6,['https://tv.apple.com/us/episode/butterballs/umc.cmc.6cheeeissig0px177namvfiwe?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,229,16,6,'I Should Have Never Gone Ziplining',
        21,"2012-04-18",false,1606,false,'TV-MA','Trey Parker','Trey Parker',2.43,false,false,false,'The boys\' ziplining adventure becomes a terrifying test of survival.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1606.jpeg',7.1,['https://tv.apple.com/us/episode/i-should-have-never-gone-ziplining/umc.cmc.7eh6fl1esnmym2t49m5sm0mce?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,230,16,7,'Cartman Finds Love',
        23,"2012-04-25",false,1607,false,'TV-MA','Trey Parker','Trey Parker',2.33,false,['Brad Paisley'],['Brad Paisley'],'The time has finally come for Cartman to let a special someone know exactly how he feels.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1607.jpeg',8,['https://tv.apple.com/us/episode/cartman-finds-love/umc.cmc.1rte5v88vzbevhb2n3003zh9b?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,231,16,8,'Sarcastaball',
        21,"2012-09-26",false,1608,false,'TV-MA','Trey Parker','Trey Parker',1.84,false,['Ceelo Green','Roger Goodell','Jim Rome','Lance Armstrong','Tom Brady','Blaine Gabbert'],false,'South Park Elementary takes steps to address football\'s concussion crisis.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1608.jpeg',7.5,['https://tv.apple.com/us/episode/sarcastaball/umc.cmc.1dofviii2xodulr8v27vt8fqm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,232,16,9,'Raising the Bar',
        21,"2012-10-03",false,1609,false,'TV-MA','Trey Parker','Trey Parker',1.69,false,['Michelle Obama','Honey Boo Boo','Mama June','James Cameron','Randy Newman'],false,'Cartman finally admits he\'s fat and immediately gets a mobility scooter.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1609.jpeg',8.1,['https://tv.apple.com/us/episode/raising-the-bar/umc.cmc.2mhx4khaj3j2e1o0ikyrcpvzq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,233,16,10,'Insecurity',
        23,"2012-10-10",false,1610,false,'TV-MA','Trey Parker','Trey Parker',2.33,false,false,false,'Cartman signs up for a home security system.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1610.jpeg',8.3,['https://tv.apple.com/us/episode/insecurity/umc.cmc.2sttmmnphhhudg6t3vxijf7i2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,234,16,11,'Going Native',
        23,"2012-10-17",false,1611,false,'TV-MA','Trey Parker','Trey Parker',1.98,false,['Elvis Presley'],false,'It is time for Butters to begin a journey where he will follow in the path of his Hawaiian ancestors.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1611.jpeg',6.7,['https://tv.apple.com/us/episode/going-native/umc.cmc.265gonpx1pcrw2v6u5nak6hx2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,235,16,12,'A Nightmare on FaceTime',
        23,"2012-10-24",false,1612,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,false,false,'Randy\'s big plans for Halloween night keep Stan from trick or treating with his friends.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1612.jpeg',8.3,['https://tv.apple.com/us/episode/a-nightmare-on-facetime/umc.cmc.745jtz937zesovcd4etdipkd5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,236,16,13,'A Scause for Applause',
        23,"2012-10-31",false,1613,false,'TV-MA','Trey Parker','Trey Parker',1.96,false,false,false,'A serious doping scandal shakes everyone\'s faith in a beloved icon. Everyone who once supported the fallen hero is now cutting off their symbolic yellow wristbands.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1613.jpeg',7.1,['https://tv.apple.com/us/episode/a-scause-for-applause/umc.cmc.4735148tc35vtmxktn54dzh6m?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,237,16,14,'Obama Wins!',
        23,"2012-11-07",false,1614,false,'TV-MA','Trey Parker','Trey Parker',2.19,false,['Barack Obama','Morgan Freeman','Wolf Blitzer'],false,'Eric Cartman is hiding something in his bedroom that could change the entire outcome of the Presidential election.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1614.jpeg',7.4,['https://tv.apple.com/us/episode/obama-wins/umc.cmc.5y0df44nzaufub093gw9xgds7?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,238,17,1,'Let Go, Let Gov',
        23,"2013-09-25",false,1701,false,'TV-MA','Trey Parker','Trey Parker',2.89,false,['Alec Baldwin'],false,'Cartman infiltrates the NSA and doesn\'t like what he finds in his personal file.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1701.jpeg',7.4,['https://tv.apple.com/us/episode/let-go-let-gov/umc.cmc.21y73oi709iu9dnfmzdu8oprd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,239,17,2,'Informative Murder Porn',
        22,"2013-10-02",false,1702,false,'TV-MA','Trey Parker','Trey Parker',2.49,false,false,false,'The boys use the game of Minecraft as a distraction to keep their parents from hurting each other.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1702.jpeg',8,['https://tv.apple.com/us/episode/informative-murder-porn/umc.cmc.6y6mngx0n21f8njbr49g82rtl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,240,17,3,'World War Zimmerman',
        21,"2013-10-09",false,1703,false,'TV-MA','Trey Parker','Trey Parker',2.06,false,['George Zimmerman'],false,'Cartman is convinced that Tolkien is the Patient Zero to the new pandemic facing all of humanity.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1703.jpeg',7.7,['https://tv.apple.com/us/episode/world-war-zimmerman/umc.cmc.2ol04l2wxif1g6b4e7kgs8px2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,241,17,4,'Goth Kids 3: Dawn of the Posers',
        21,"2013-10-23",false,1704,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,['Edgar Allen Poe'],false,'Goths and Vamps unite and summon the aid of Edgar Allen Poe to take on the new threat that poses to enslave them all.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1704.jpeg',6.8,['https://tv.apple.com/us/episode/goth-kids-3-dawn-of-the-posers/umc.cmc.32oqmr0vr1p6v79o92dnagqib?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,242,17,5,'Taming Strange',
        23,"2013-10-30",false,1705,false,'TV-MA','Trey Parker','Trey Parker',1.89,false,['Sinéad O\'Connor'],false,'When Ike hits puberty, he and Kyle start to grow apart. To save their relationship, Kyle takes Ike to see a live performance of Yo Gabba Gabba!.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1705.jpeg',7,['https://tv.apple.com/us/episode/taming-strange/umc.cmc.1teqo7ejwj31xsygljsdm4cbs?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,243,17,6,'Ginger Cow',
        22,"2013-11-06",false,1706,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,['Van Halen','Anderson Cooper','Ali Khamenei'],false,'A \'Holy Cow\' appears heralding the final battle and end of times for all three major faiths.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1706.jpeg',7.7,['https://tv.apple.com/us/episode/ginger-cow/umc.cmc.r1gpk67weftclgi0syfk77ee?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,244,17,7,'Black Friday',
        23,"2013-11-13",false,1707,false,'TV-MA','Trey Parker','Trey Parker',2.07,false,false,false,'The boys prepare to battle the crowds already lining up for the first official day of holiday shopping.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1707.jpeg',8.9,['https://tv.apple.com/us/episode/black-friday/umc.cmc.396k57woigfn9qvrsrh7j0qqd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,245,17,8,'A Song of Ass and Fire',
        23,"2013-11-20",false,1708,false,'TV-MA','Trey Parker','Trey Parker',2.39,false,['Bill Gates','George R.R. Martin','Steve Ballmer'],false,'Black Friday is almost here and the battle for the new gaming devices is heating up. Princess Kenny\'s betrayal has left Cartman out for revenge.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1708.jpeg',8.8,['https://tv.apple.com/us/episode/a-song-of-ass-and-fire/umc.cmc.2eumanb7dcfyp1fp7juvkcdxy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,246,17,9,'Titties and Dragons',
        22,"2013-12-04",false,1709,false,'TV-MA','Trey Parker','Trey Parker',2.48,false,['George R.R. Martin','Bill Gates'],false,'The doors to the mall will finally open for the biggest Black Friday sale in history. The boys are divided over which gaming device to buy and a bloody battle will determine whether Xbox or Sony will be the winner.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1709.jpeg',8.8,['https://tv.apple.com/us/episode/titties-and-dragons/umc.cmc.71y5bg924781ce1xj7uvtgj4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,247,17,10,'The Hobbit',
        21,"2013-12-11",false,1710,false,'TV-MA','Trey Parker','Trey Parker',2.17,false,['Kanye West','Pope Francis'],false,'When Wendy tries to fix one of her girlfriends up with Butters, she ends up in the counselor\'s office.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1710.jpeg',8.4,['https://tv.apple.com/us/episode/the-hobbit/umc.cmc.61abm8veovr06sm4ahpdhzmn4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,248,18,1,'Go Fund Yourself',
        23,"2014-09-24",false,1801,false,'TV-MA','Trey Parker','Trey Parker',2.40,false,['The Washington Redskins','Dan Snyder','Roger Goodell','Jay Gruden','Steve Bisciotti','Jim Irsay','Paul Allen','Alex Spanos','Jerry Jones','ISIS'],['Roger Goodell'],'The boys name their new start-up company, The Washington Redskins.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1801.jpeg',7.7,['https://tv.apple.com/us/episode/go-fund-yourself/umc.cmc.66hsv0voye1wv9gn7yhqk3f08?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,249,18,2,'Gluten Free Ebola',
        23,"2014-10-01",false,1802,false,'TV-MA','Trey Parker','Trey Parker',2.24,false,false,false,'South Park goes gluten free as the wheat germ threatens to wipe out all society.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1802.jpeg',7.7,['https://tv.apple.com/us/episode/gluten-free-ebola/umc.cmc.418usmkg17x8mqgdroifn6v2d?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,250,18,3,'The Cissy',
        23,"2014-10-08",false,1803,false,'TV-MA','Trey Parker','Trey Parker',2.02,false,['Lorde (Randy Marsh)','Brandon Carlile'],['Sia'],'Randy is harboring a giant secret and the pressure is getting to him. Meanwhile, Cartman calls Stan a cissy.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1803.jpeg',8.5,['https://tv.apple.com/us/episode/the-cissy/umc.cmc.123v2hd8r1g7kq0x4bnedfwdh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,251,18,4,'Handicar',
        22,"2014-10-15",false,1804,false,'TV-MA','Trey Parker','Trey Parker',1.73,false,['Elon Musk','Matthew McConaughey'],false,'Timmy\'s successful new car service makes him a lot of enemies.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1804.jpeg',7.3,['https://tv.apple.com/us/episode/handicar/umc.cmc.701k9aaqtr41jj7bj4d0s6yp9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,252,18,5,'The Magic Bush',
        22,"2014-10-29",false,1805,false,'TV-MA','Trey Parker','Trey Parker',1.73,false,false,false,'Graphic video from an unknown drone is uploaded on the internet.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1805.jpeg',7.9,['https://tv.apple.com/us/episode/the-magic-bush/umc.cmc.78m44yzuhxcu9jf3c0dhubf0o?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,253,18,6,'Freemium Isn\'t Free',
        22,"2014-11-05",false,1806,false,'TV-MA','Trey Parker','Trey Parker',1.70,false,false,false,'Stan is addicted to the new Terrance and Phillip mobile game.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1806.jpeg',8.1,['https://tv.apple.com/us/episode/freemium-isnt-free/umc.cmc.7hlbaz11l078tlq1m22ca1949?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,254,18,7,'Grounded Vindaloop',
        23,"2014-11-12",false,1807,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,false,false,'Butters is convinced he\'s living in a virtual reality.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1807.jpeg',9.1,['https://tv.apple.com/us/episode/grounded-vindaloop/umc.cmc.29i6ra4nb6daomhjdmyftoy3m?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,255,18,8,'Cock Magic',
        21,"2014-11-19",false,1808,false,'TV-MA','Trey Parker','Trey Parker',1.69,false,false,['Peter Serafinowicz'],'The city police crack down on a ring of illegal magic cock-battles going on in the basement of City Wok.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1808.jpeg',8.3,['https://tv.apple.com/us/episode/cock-magic/umc.cmc.6oinx9k1it1r2ky3x7ezaqjcn?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,256,18,9,'\u0023REHASH',
        22,"2014-12-03",false,1809,false,'TV-MA','Trey Parker','Trey Parker',2.10,false,['Lorde','Iggy Azalea','Nicki Minaj','Wendy Williams','PewDiePie'],['PewDiePie'],'Kyle just wants to play video games with his little brother. But, when Ike doesn\'t want to play with him anymore, Kyle is afraid that the next generation is passing him by.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1809.jpeg',7.3,['https://tv.apple.com/us/episode/rehash/umc.cmc.475txo6fy8za19lucsxfsp3e0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,257,18,10,'\u0023HappyHolograms',
        22,"2014-12-10",false,1810,false,'TV-MA','Trey Parker','Trey Parker',1.66,false,['Taylor Swift','Bill Cosby','Miley Cyrus','Al Pacino','J.J.Watt','U2 & Bono','Angelina Jolie','Tom Hanks','Iggy Azalea','PewDiePie'],['PewDiePie'],'CartmanBrah is trending as the country prepares to watch the biggest Holiday Spectacular ever.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1810.jpeg',6.8,['https://tv.apple.com/us/episode/happyholograms/umc.cmc.5f1ej31wrdbesl1789lymejbd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,258,19,1,'Stunning and Brave',
        22,"2015-09-16",false,1901,false,'TV-MA','Trey Parker','Trey Parker',1.76,false,false,false,'The boys express their utmost respect for Caitlyn Jenner in the most stunning and brave South Park ever.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1901.jpeg',7.6,['https://tv.apple.com/us/episode/stunning-and-brave/umc.cmc.4a3acvprbacthiem9vlnmhiyk?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,259,19,2,'Where My Country Gone?',
        22,"2015-09-23",false,1902,false,'TV-MA','Trey Parker','Trey Parker',1.49,false,['Barack Obama','Caitlyn Jenner'],false,'Garrison wants to build a wall to keep out all of the undocumented immigrants.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1902.jpeg',8.1,['https://tv.apple.com/us/episode/where-my-country-gone/umc.cmc.4wzshtwjg68efscdtl1rpgd0l?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,260,19,3,'The City Part of Town',
        22,"2015-09-30",false,1903,false,'TV-MA','Trey Parker','Trey Parker',1.32,false,false,false,'The town of South Park is gentrifying and Kenny thinks it\'s time to get a job.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1903.jpeg',7.6,['https://tv.apple.com/us/episode/the-city-part-of-town/umc.cmc.4m6a1xe3cot7pies2c01p6sf3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,261,19,4,'You\'re Not Yelping',
        22,"2015-10-14",false,1904,false,'TV-MA','Trey Parker','Trey Parker',1.37,false,false,false,'Cartman considers himself the top on-line restaurant reviewer in South Park.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1904.jpeg',8,['https://tv.apple.com/us/episode/youre-not-yelping/umc.cmc.6u9ei7jx1s3c30sgoy9f6wdgi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,262,19,5,'Safe Space',
        22,"2015-10-21",false,1905,false,'TV-MA','Trey Parker','Trey Parker',1.21,false,['Steven Seagal','Demi Lavato','Vin Diesel','Gigi Hadid'],false,'Cartman is the latest victim of body shaming.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1905.jpeg',8.3,['https://tv.apple.com/us/episode/safe-space/umc.cmc.cs3pibocns6f8xldl8w7va3u?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,263,19,6,'Tweek x Craig',
        22,"2015-10-28",false,1906,false,'TV-MA','Trey Parker','Trey Parker',1.34,false,['Xi Jinping'],false,'The Asian Girls in school are drawing dreamy pictures of Tweek and Craig.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1906.jpeg',8.1,['https://tv.apple.com/us/episode/tweek-x-craig/umc.cmc.4zow8kcvi1dr6oscyudfxffij?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,264,19,7,'Naughty Ninjas',
        22,"2015-11-11",false,1907,false,'TV-MA','Trey Parker','Trey Parker',1.42,false,false,false,'The citizens of South Park decide they no longer need a police force in town.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1907.jpeg',8.2,['https://tv.apple.com/us/episode/naughty-ninjas/umc.cmc.6f3wvc4azzj7bbnbwq8sw29l1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,265,19,8,'Sponsored Content',
        22,"2015-11-18",false,1908,false,'TV-MA','Trey Parker','Trey Parker',1.30,false,['Caitlyn Jenner','Hillary Clinton'],false,'Jimmy\'s integrity as a newsman runs smack into PC Principal\'s ideology.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1908.jpeg',8.7,['https://tv.apple.com/us/episode/sponsored-content/umc.cmc.12y3ks77puxc4fizgiikaf814?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,266,19,9,'Truth and Advertising',
        22,"2015-12-02",false,1909,false,'TV-MA','Trey Parker','Trey Parker',1.43,false,['Caitlyn Jenner'],false,'PC Principal disappears with two of the 4th grade students.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1909.jpeg',8,['https://tv.apple.com/us/episode/truth-and-advertising/umc.cmc.4fdl59203or848ujmpe160hhk?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,267,19,10,'PC Principal Final Justice',
        22,"2015-12-09",false,1910,false,'TV-MA','Trey Parker','Trey Parker',1.83,false,['Caitlyn Jenner'],false,'Kyle has chosen a dangerous alliance over his friendship with Stan.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE1910.jpeg',7.8,['https://tv.apple.com/us/episode/pc-principal-final-justice/umc.cmc.5qd491ep41vwtyj6f09zayb3j?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,268,20,1,'Member Berries',
        22,"2016-09-14",false,2001,false,'TV-MA','Trey Parker','Trey Parker',2.17,false,['Hillary Clinton','J.J. Abrams','Caitlyn Jenner','Chris Christie','Joe Biden','Kellyanne Conway','Peter Thiel'],false,'Garrison is still hot on the campaign trail. Meanwhile an odd cynical anthropomorphic plump of grapes are taking over America.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2001.jpeg',7.8,['https://tv.apple.com/us/episode/member-berries/umc.cmc.5ozcqx4n9goei5z171s5zwx1z?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,269,20,2,'Skank Hunt',
        22,"2016-09-21",false,2002,false,'TV-MA','Trey Parker','Trey Parker',1.58,false,['Boston (The Band)','Freja Ollegard'],false,'Kyle\'s dad manages to keep his identity as a troll a secret while he takes his on-line abuse global.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2002.jpeg',8.1,['https://tv.apple.com/us/episode/skank-hunt/umc.cmc.512h89weyd97hbhz9z1os3qz2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,270,20,3,'The Damned',
        22,"2016-09-28",false,2003,false,'TV-MA','Trey Parker','Trey Parker',1.79,false,['Freja Ollegard','Hillary Clinton','Chris Christie','Lester Holt','Newt Gingrich'],false,'Gerald is thrilled with the media attention as he continues to troll everyone and anyone.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2003.jpeg',8,['https://tv.apple.com/us/episode/the-damned/umc.cmc.2dhpg3c1t6ew9r0cqmgd3tmoh?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,271,20,4,'Wieners Out',
        22,"2016-10-12",false,2004,false,'TV-MA','Trey Parker','Trey Parker',1.82,false,['Freja Ollegard'],false,'After being dumped en masse by all the girls of South Park, the boys band together to stand up for their rights.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2004.jpeg',7.8,['https://tv.apple.com/us/episode/wieners-out/umc.cmc.1lz63zgo8g2hr6e6abod4k2fy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,272,20,5,'Douche and a Danish',
        17,"2016-10-19",false,2005,false,'TV-MA','Trey Parker','Trey Parker',1.32,false,['Caitlyn Jenner','Chris Christie','Peter Thiel','J.J. Abrams','Kellyanne Conway'],false,'Garrison and Caitlyn are trying to throw the race but the mainstays of the GOP won\'t let them.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2005.jpeg',7.3,['https://tv.apple.com/us/episode/douche-and-a-danish/umc.cmc.4uuvgvswqep7ovb1gtkxrdlf?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,273,20,6,'Fort Collins',
        22,"2016-10-26",false,2006,false,'TV-MA','Trey Parker','Trey Parker',1.41,false,['Caitlyn Jenner','Hillary Clinton','Bill Clinton','Freja Ollegard'],false,'An entire city in Colorado gets hacked. Gerald and Cartman may lose everything when their complete history of internet activity becomes public.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2006.jpeg',7.3,['https://tv.apple.com/us/episode/fort-collins/umc.cmc.4azpmtqwml3ct7vm4n7dld3p6?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,274,20,7,'Oh, Jeez',
        22,"2016-11-09",false,2007,false,'TV-MA','Trey Parker','Trey Parker',2.03,false,['Bill Clinton','Hillary Clinton','Bill Cosby','Caitlyn Jenner','Freja Ollegard'],false,'Gerald comes face-to-face with the Troll Hunter.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2007.jpeg',7.1,['https://tv.apple.com/us/episode/oh-jeez/umc.cmc.1dfx1ipbc0kdl3mq4yk8coiqx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,275,20,8,'Members Only',
        22,"2016-11-16",false,2008,false,'TV-MA','Trey Parker','Trey Parker',1.79,false,['Boris Johnson','Caitlyn Jenner','Cher','Elon Musk','Reince Priebus','Steve Bannon','Vladimir Putin'],['Elon Musk'],'The new President-elect pays a visit to his hometown.[','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2008.jpeg',7.3,['https://tv.apple.com/us/episode/members-only/umc.cmc.3s1u6wdneyfp8lw0y6kszewae?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,276,20,9,'Not Funny',
        22,"2016-11-30",false,2009,false,'TV-MA','Trey Parker','Trey Parker',1.45,false,['Elon Musk','Freja Ollegard'],['Elon Musk'],'Cartman is certain that Butters is trying to steal his girlfriend','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2009.jpeg',7.3,['https://tv.apple.com/us/episode/not-funny/umc.cmc.1wix3jvzqa4886jtukgonl9c4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,277,20,10,'The End of Serialization as We Know It',
        22,"2016-12-07",false,2010,false,'TV-MA','Trey Parker','Trey Parker',1.82,false,['Elon Musk'],['Elon Musk'],'Cartman finally understands why Heidi wants to get him to Mars.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2010.jpeg',7.1,['https://tv.apple.com/us/episode/the-end-of-serialization-as-we-know-it/umc.cmc.5ypzhd9wqb1rki017j7fj3irk?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,278,21,1,'White People Renovating Houses',
        22,"2017-09-13",false,2101,false,'TV-MA','Trey Parker','Trey Parker',1.68,false,false,false,'Protestors armed with tiki torches and confederate flags take to the streets of South Park. Randy comes to grips with what it means to be white in today\'s society.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2101.jpeg',6.8,['https://tv.apple.com/us/episode/white-people-renovating-houses/umc.cmc.7b39zdi733l0vmxudytkuw6g3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,279,21,2,'Put It Down',
        22,"2017-09-20",false,2102,false,'TV-MA','Trey Parker','Trey Parker',1.25,false,['Hillary Clinton','Kim Jung Un'],false,'When Tweek is caught in the middle of a petty conflict, it drives his relationship with Craig to the brink.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2102.jpeg',8,['https://tv.apple.com/us/episode/put-it-down/umc.cmc.xybmc2mv5ueybvpgwqq3vw3j?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,280,21,3,'Holiday Special',
        22,"2017-09-27",false,2103,false,'TV-MA','Trey Parker','Trey Parker',1.25,false,false,false,'In a return to form, a forbidden love story between a white man and a Native American man unfolds. However, the boys\' story exploits people\'s misery for laughs.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2103.jpeg',7.6,['https://tv.apple.com/us/episode/holiday-special/umc.cmc.623prja7u555n736zrwa56ihy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,281,21,4,'Franchise Prequel',
        22,"2017-10-11",false,2104,false,'TV-MA','Trey Parker','Trey Parker',1.12,false,['Mark Zuckerberg','Vladimir Putin'],false,'Professor Chaos has found the perfect tool to spread lies and misinformation about C*** and Friends. In trying to save their reputation, the boys come face to face with Mark Zuckerberg.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2104.jpeg',7.4,['https://tv.apple.com/us/episode/franchise-prequel/umc.cmc.1zeq2pgtpkoq8ndudg20jne25?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,282,21,5,'Hummels \u0026 Heroin',
        22,"2017-10-18",false,2105,false,'TV-MA','Trey Parker','Trey Parker',0.93,false,false,['Josh Gad'],'Drugs are flowing into South Park. A passionate young health advocate has traced the source of these illegal meds and is about to expose Stan Marsh.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2105.jpeg',7.3,['https://tv.apple.com/us/episode/hummels--heroin/umc.cmc.3q3w448bw1fl4dy32pcigd27b?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,283,21,6,'Sons a Witches',
        22,"2017-10-25",false,2106,false,'TV-MA','Trey Parker','Trey Parker',1.22,false,false,false,'This year at the traditional Halloween get together, a witch casts a spell that terrorizes the town and ruins Halloween for the boys. Cartman sees a way to use the witch\'s power to his advantage.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2106.jpeg',7.3,['https://tv.apple.com/us/episode/sons-a-witches/umc.cmc.6o9ftgbpld1e77gsg0md25ymo?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,284,21,7,'Doubling Down',
        22,"2017-11-08",false,2107,false,'TV-MA','Trey Parker','Trey Parker',1.13,false,['Mike Pence','Mitch McConnell','Paul Ryan','Xi Jinping'],false,'Kyle doesn\'t understand why Heidi won\'t break up with Cartman. He\'s playing with fire when he gets in the middle of the school\'s most talked about couple.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2107.jpeg',7.5,['https://tv.apple.com/us/episode/doubling-down/umc.cmc.1a624hsibyvy11swt6i93wnde?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,285,21,8,'Moss Piglets',
        22,"2017-11-15",false,2108,false,'TV-MA','Trey Parker','Trey Parker',1.09,false,false,false,'Jimmy and Timmy\'s project has caught the attention of some very important people. Their experiment could have far reaching implications that could save the world… and they might even win first prize in this year\'s science fair.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2108.jpeg',7,['https://tv.apple.com/us/episode/moss-piglets/umc.cmc.5192phthehy1d79fqi34o3q60?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,286,21,9,'Super Hard PCness',
        22,"2017-11-29",false,2109,false,'TV-MA','Trey Parker','Trey Parker',0.90,false,false,false,'PC Principal is wrestling with some unfamiliar feelings. Meanwhile, boys will be boys except for Kyle who, for the first time, seems to see things differently from the rest of his friends.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2109.jpeg',7.7,['https://tv.apple.com/us/episode/super-hard-pcness/umc.cmc.3n7m1zeyzbdck5667lqr5zymm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,287,21,10,'Splatty Tomato',
        22,"2017-12-06",false,2110,false,'TV-MA','Trey Parker','Trey Parker',0.97,false,['Justin Trudeau'],false,'The children of South Park claim to have seen Mr. Garrison lurking around town and they\'re frightened. The town comes together to make the President go away.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2110.jpeg',7.2,['https://tv.apple.com/us/episode/splatty-tomato/umc.cmc.3nokd8yjnrftvzdom7nktmv1z?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,288,22,1,'Dead Kids',
        22,"2018-09-26",false,2201,false,'TV-MA','Trey Parker','Trey Parker',1.09,false,false,false,'Sharon is abnormally emotional and it\'s really getting Randy down.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2201.jpeg',8.1,['https://tv.apple.com/us/episode/dead-kids/umc.cmc.2nhk5p1aklwnygqneaosh7m6i?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,289,22,2,'A Boy and a Priest',
        22,"2018-10-03",false,2202,false,'TV-MA','Trey Parker','Trey Parker',0.93,false,false,false,'The town finds the church doors locked and there\'s no sign of Butters or the Pastor.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2202.jpeg',7.6,['https://tv.apple.com/us/episode/a-boy-and-a-priest/umc.cmc.793exrx2uk0zt8rbews0gpjtl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,290,22,3,'The Problem with a Poo',
        22,"2018-10-10",false,2203,false,'TV-MA','Trey Parker','Trey Parker',0.97,false,false,false,'Mr. Hankey\'s offensive behavior puts him in jeopardy of being fired as the Director of the Annual Christmas Pageant','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2203.jpeg',6.4,['https://tv.apple.com/us/episode/the-problem-with-a-poo/umc.cmc.57axreyqazc5zz6yoii1c24r0?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,291,22,4,'Tegridy Farms',
        22,"2018-10-17",false,2204,false,'TV-MA','Trey Parker','Trey Parker',0.71,false,false,false,'Randy moves the family to the country and he takes up farming.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2204.jpeg',7.8,['https://tv.apple.com/us/episode/episode-4/umc.cmc.17rxddrs5o1v8l4t6ixn3zs4d?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,292,22,5,'The Scoots',
        22,"2018-10-31",false,2205,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,false,false,'The kids plan to use the latest revolution in mobility to get more candy on Halloween than they have ever gotten before.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2205.jpeg',8,['https://tv.apple.com/us/episode/the-scoots/umc.cmc.4q8046nfunhjxf9085byfv4sw?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,293,22,6,'Time to Get Cereal',
        22,"2018-11-07",false,2206,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,['Al Gore','George W. Bush','Hillary Clinton'],false,'South Park citizens are in danger and the boys realize that only Al Gore can help.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2206.jpeg',7.7,['https://tv.apple.com/us/episode/time-to-get-cereal/umc.cmc.50homuglwrvr7cwssqsn55a25?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,294,22,7,'Nobody Got Cereal?',
        22,"2018-11-14",false,2207,false,'TV-MA','Trey Parker','Trey Parker',0.82,false,['Al Gore'],false,'The boys break out of jail and are on the run from the police and ManBearPig.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2207.jpeg',7.7,['https://tv.apple.com/us/episode/nobody-got-cereal/umc.cmc.2cvloid3ll1n6ppancefx24hx?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,295,22,8,'Buddha Box',
        22,"2018-11-28",false,2208,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,false,['Michael James Scott'],'It starts first with Cartman but now everyone in town now has chronic anxiety. Meanwhile PC Principal and family discover their new freedom separated from society.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2208.jpeg',7.3,['https://tv.apple.com/us/episode/buddha-box/umc.cmc.497iil7utgfg7olf6sxavlxtj?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,296,22,9,'Unfulfilled',
        22,"2018-12-05",false,2209,false,'TV-MA','Trey Parker','Trey Parker',0.77,false,['Jeff Bezos'],['Casey Nicholaw'],'South Park is chosen to be the home for Amazon\'s newest Fulfillment Center.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2209.jpeg',7.6,['https://tv.apple.com/us/episode/unfulfilled/umc.cmc.3sv07nv4hwypldui3ksf15dd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,297,22,10,'Bike Parade',
        22,"2018-12-12",false,2210,false,'TV-MA','Trey Parker','Trey Parker',0.83,false,['Jeff Bezos'],['Casey Nicholaw'],'The boys\' chance of winning the Bike Parade is in jeopardy when Kenny quits.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2210.jpeg',7.6,['https://tv.apple.com/us/episode/bike-parade/umc.cmc.cz1m9qpyl73bc33mdh18cnue?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,298,23,1,'Mexican Joker',
        22,"2019-09-25",false,2301,false,'TV-MA','Trey Parker','Trey Parker',0.92,false,false,false,'Randy fights against home-grown weed. Meanwhile, Kyle goes to camp.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2301.jpeg',7.4,['https://tv.apple.com/us/episode/mexican-joker/umc.cmc.esfy658fuz9h2talt1zf5zdl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,299,23,2,'Band in China',
        19,"2019-10-02",false,2302,false,'TV-MA','Trey Parker','Trey Parker',0.73,false,false,false,'Randy sees an opportunity for Tegridy in China.[1] But the Airport security in China arrests him of illegally exporting weed in to the Chinese Mainland.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2302.jpeg',8.6,['https://tv.apple.com/us/episode/band-in-china/umc.cmc.2aq8iifllztdg7odis8xbct1r?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,300,23,3,'Shots!!!',
        22,"2019-10-09",false,2303,false,'TV-MA','Trey Parker','Trey Parker',0.95,false,false,false,'Randy celebrates the success of Tegridy Farms while Cartman refuses to get a shot.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2303.jpeg',7.5,['https://tv.apple.com/us/episode/shots/umc.cmc.77e455lsyidtud50aznr98ivt?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,301,23,4,'Let Them Eat Goo',
        22,"2019-10-16",false,2304,false,'TV-MA','Trey Parker','Trey Parker',0.77,false,false,false,'Cartman is sure the new plant-based diet in the school cafeteria gave him a heart attack.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2304.jpeg',7.9,['https://tv.apple.com/us/episode/let-them-eat-goo/umc.cmc.24kuf2clh75373wd65a333sjl?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,302,23,5,'Tegridy Farms Halloween Special',
        22,"2019-10-30",false,2305,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,false,false,'It\'s Halloween and Randy is dealing with his daughter\'s marijuana problem.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2305.jpeg',7.1,['https://tv.apple.com/us/episode/tegridy-farms-halloween-special/umc.cmc.1vduzdc6amkctr5fsyamcrx6m?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,303,23,6,'Season Finale',
        22,"2019-11-06",false,2306,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,['Rudy Giuliani'],false,'The citizens of South Park have had enough of Randy and Tegridy Farms and they just want to lock him up.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2306.jpeg',7.1,['https://tv.apple.com/us/episode/season-finale/umc.cmc.3xflzdjyg3i8svq3gk8t3y7my?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,304,23,7,'Board Girls',
        22,"2019-11-13",false,2307,false,'TV-MA','Trey Parker','Trey Parker',0.85,false,false,false,'The annual Strong Woman competition pushes everyone to their limits.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2307.jpeg',8.1,['https://tv.apple.com/us/episode/board-girls/umc.cmc.55lj08tag716l73vg3xr2x5h?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,305,23,8,'Turd Burglars',
        20,"2019-11-27",false,2308,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,['Tom Brady'],false,'Kyle\'s mom has a fecal transplant and the boys are on a quest for the best microbiome.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2308.jpeg',7.5,['https://tv.apple.com/us/episode/turd-burglars/umc.cmc.56q9zw0gz2hmmhcnkel6ox2jm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,306,23,9,'Basic Cable',
        20,"2019-12-04",false,2309,false,'TV-MA','Trey Parker','Trey Parker',0.80,false,false,false,'Scott Malkinson\'s desperate to impress the new girl in his class.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2309.jpeg',7.7,['https://tv.apple.com/us/episode/basic-cable/umc.cmc.6lh838sowlfd9w6hxl9bpc4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,307,23,10,'Christmas Snow',
        22,"2019-12-11",false,2310,false,'TV-MA','Trey Parker','Trey Parker',0.81,false,false,false,'Santa is stealing all the joy from the town\'s Holiday Season','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2310.jpeg',7.6,['https://tv.apple.com/us/episode/christmas-snow/umc.cmc.4rulrxpupjoazedbxnt0rmnoy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,308,24,1,'The Pandemic Special',
        48,"2020-09-30",false,2401,false,'TV-MA','Trey Parker','Trey Parker',2.27,false,['Dr. Anthony Fauci'],false,'Randy comes to terms with his role in the COVID-19 outbreak as the on-going pandemic presents continued challenges to the citizens of South Park. The kids happily head back to school but nothing resembles the normal that they once knew; not their teachers, not their homeroom, not even Eric Cartman.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2401.jpeg',8.1,['https://tv.apple.com/us/episode/the-pandemic-special/umc.cmc.1pen48w8qsckdr414mwprv5bm?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,309,24,2,'South ParQ Vaccination Special',
        47,"2021-03-10",false,2402,false,'TV-MA','Trey Parker','Trey Parker',1.74,false,['Jake Angeli','Jeffrey Epstein','Kanye West','Michael Moore','Brad Paisley','Al Gore','Barbra Streisand','Colonel Sanders','David Blaine','Jared Fogle'],false,'The citizens of South ParQ are clamoring for the COVID-19 Vaccine. A hilarious new militant group tries to stop the boys from getting their teacher vaccinated.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2402.jpeg',7.5,['https://tv.apple.com/us/episode/south-parq-vaccination-special/umc.cmc.g5g59ehy0mc2x2o4cpjzg75l?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,310,false,false,'South Park: Post COVID',
        59,"2021-11-25",true,2403,false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'In SOUTH PARK: POST COVID, we find out the answer to the question: what happened to the children who lived through the pandemic? Stan, Kyle, Cartman and Kenny survived, but will never be the same post COVID.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2403.jpeg',7.5,
        [
            'https://tv.apple.com/us/movie/south-park-post-covid/umc.cmc.4ysp9ku03vdflrh75xezzadoc',
            'https://www.amazon.com/gp/video/detail/B0C94684QB/ref=atv_dp_amz_c_yxuuUK_4_2',
            'https://www.youtube.com/watch?v=3dDTe-DpUOM'
        ]
    ],
    [false,311,false,false,'South Park: Post COVID: The Return of COVID',
        62,"2021-12-16",true,2404,false,'UNRATED','Trey Parker','Trey Parker',false,false,['Andrew Cuomo','LeBron James','Jake Angeli','Los Angeles Clippers'],false,'If Stan, Kyle and Cartman could just work together, they could go back in time to make sure Covid never happened and save Kenny\'s life. In SOUTH PARK: POST COVID: THE RETURN OF COVID, traveling back to the past seems to be the easy answer until they meet Victor Chaos.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2404.jpeg',7.5,
        [
            'https://tv.apple.com/us/movie/south-park-post-covid---the-return-of-covid/umc.cmc.6484t42zwdu8nefdgq39c5u77',
            'https://www.amazon.com/gp/video/detail/B0BZYBXPPS/ref=atv_dp_amz_c_yxuuUK_7_3',
            'https://www.youtube.com/watch?v=mmYC2EPQqEc'
        ]
    ],
    [false,312,25,1,'Pajama Day',
        22,"2022-02-02",false,2501,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,false,false,'After failing to show respect for their teacher, PC Principal revokes Pajama Day privileges for the entire 4th grade class. Cartman is distraught. The kids aren\'t going to stand for it but PC Principal refuses to back down.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2501.jpeg',7.2,['https://tv.apple.com/us/episode/pajama-day/umc.cmc.4yf0zj1qpwsuym82o4k1dkewq?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,313,25,2,'The Big Fix',
        22,"2022-02-09",false,2502,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,false,false,'Stan\'s horrified to realize he\'s misinterpreted some of the greatest writing of all time.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2502.jpeg',8,['https://tv.apple.com/us/episode/the-big-fix/umc.cmc.2g3anf1bug0hi0cqurmrsyrl4?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,314,25,3,'City People',
        22,"2022-02-16",false,2503,false,'TV-MA','Trey Parker','Trey Parker',0.66,false,false,false,'Cartman is furious with his mom when she tells him about her new job.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2503.jpeg',7.3,['https://tv.apple.com/us/episode/city-people/umc.cmc.21d3e89nshtweguikfdmevft3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,315,25,4,'Back to the Cold War',
        22,"2022-03-02",false,2504,false,'TV-MA','Trey Parker','Trey Parker',0.53,false,['Vladimir Putin'],false,'A lot is riding on Butters’s ability to crush the competition in the all-important dressage championship.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2504.jpeg',6.6,['https://tv.apple.com/us/episode/back-to-the-cold-war/umc.cmc.3cyo6aljifyzmz2vo4ols6a23?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,316,25,5,'Help, My Teenager Hates Me!',
        22,"2022-03-09",false,2505,false,'TV-MA','Trey Parker','Trey Parker',0.62,false,false,false,'The boys find out that the joys of playing Airsoft come with the challenges of dealing with teenagers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2505.jpeg',7.6,['https://tv.apple.com/us/episode/help-my-teenager-hates-me/umc.cmc.1elf8kuyvv5jlbozmgewl5eu2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,317,25,6,'Credigree Weed St. Patrick\'s Day Special',
        22,"2022-03-16",false,2506,false,'TV-MA','Trey Parker','Trey Parker',0.49,false,false,false,'Butters is shocked to learn that people in South Park don\'t understand what St. Patrick\'s Day is really about.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2506.jpeg',7.1,['https://tv.apple.com/us/episode/credigree-weed-st-patricks-day-special/umc.cmc.6utwxfyig0i6u9od51spclh57?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [false,318,false,false,'South Park: The Streaming Wars',
        50,"2022-06-01",true,'P2507',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'In South Park: The Streaming Wars, Cartman locks horns with his mom in a battle of wills while an epic conflict unfolds that threatens South Park\'s very existence.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2507.jpeg',6.7,
        [
            'https://tv.apple.com/us/movie/south-park-the-streaming-wars/umc.cmc.1gexhd7mkbbnmwhfpr5xuh0ce',
            'https://www.amazon.com/gp/video/detail/B0C8X8C4S3/ref=atv_sr_fle_c_sra5ba81_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0C8X8J9TD&qid=1776216156587',
            'https://www.youtube.com/watch?v=oRA82xwvkwo'
        ]
    ],
    [false,319,false,false,'South Park: The Streaming Wars Part 2',
        47,"2022-07-13",true,'P2508',false,'UNRATED','Trey Parker','Trey Parker',false,false,['Matt Damon','Gwyneth Paltrow','Larry David','Naomi Osaka','Reese Witherspoon','LeBron James','Judge Penney S. Azcarate','Tom Brady'],false,'In South Park: The Streaming Wars Part 2, a drought has brought the town of South Park to the brink of disaster.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2508.jpeg',6.7,
        [
            'https://tv.apple.com/us/movie/south-park-the-streaming-wars-part-2/umc.cmc.7drrx9el24glrhovt39xz14wh',
            'https://www.amazon.com/gp/video/detail/B0C8X3SQHH/ref=atv_dp_amz_c_yxuuUK_7_5',
            'https://www.youtube.com/watch?v=ZKPBCmd4ccE'
        ]
    ],
    [true,320,26,1,'Cupid Ye',
        22,"2023-02-08",false,2601,false,'TV-MA','Matt Stone','Matt Stone',0.48,false,['António Guterres','Anurag Saha Roy'],false,'Stan is jealous of the friendship that\'s developed between Kyle and Tolkien and Cartman decides to do something about it.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2601.jpeg',7.3,['https://tv.apple.com/us/episode/cupid-ye/umc.cmc.4vycpssepurhbyrs4r8yy1jo3?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,321,26,2,'The Worldwide Privacy Tour',
        22,"2023-02-15",false,2602,false,'TV-MA','Trey Parker','Trey Parker',0.56,false,false,false,'The prince of Canada and his wife try to find privacy and seclusion in a small mountain town.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2602.jpeg',8.3,['https://tv.apple.com/us/episode/the-world-wide-privacy-tour/umc.cmc.4d3v1ltkjt301d1ydx8zxckj2?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,322,26,3,'Japanese Toilet',
        22,"2023-03-01",false,2603,false,'TV-MA','Trey Parker','Trey Parker',0.48,false,false,false,'South Park learns about the wonders of Japanese toilets.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2603.jpeg',7.7,['https://tv.apple.com/us/episode/japanese-toilet/umc.cmc.4ed3ygxasm7nodp6ci0ankequ?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,323,26,4,'Deep Learning',
        22,"2023-03-08",false,2604,false,'TV-MA','Trey Parker','Trey Parker & ChatGPT',0.47,false,false,false,'Stan is reeling when a cheating scandal hits the school.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2604.jpeg',8.3,['https://tv.apple.com/us/episode/deep-learning/umc.cmc.18c3sz4k7mqtixjdj1ges90px?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,324,26,5,'DikinBaus Hot Dogs',
        22,"2023-03-22",false,2605,false,'TV-MA','Trey Parker','Trey Parker',0.43,false,false,false,'The South Park boys renovate and open an historic restaurant in Colorado.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2605.jpeg',7.8,['https://tv.apple.com/us/episode/dikinbaus-hot-dogs/umc.cmc.3bwal0s5brxbfj4hessrscxnn?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,325,26,6,'Spring Break',
        22,"2023-03-29",false,2606,false,'TV-MA','Trey Parker','Trey Parker',0.47,false,false,false,'Spring Break is an excuse for Garrison to jump back into his former depraved lifestyle.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2606.jpeg',6.6,['https://tv.apple.com/us/episode/spring-break/umc.cmc.4j8hzcttg6ckezhxbq73mqo9e?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,326,false,false,'South Park: Joining the Panderverse',
        49,"2023-10-27",true,'P2607',false,'UNRATED','Trey Parker','Trey Parker',false,false,['Kathleen Kennedy','Bob Iger'],false,'In South Park: Joining the Panderverse, Cartman\'s deeply disturbing dreams portend the end of the life he knows and loves. The adults in South Park are also wrestling with their own life decisions as the advent of AI is turning their world upside down.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2607.jpeg',7.8,
        [
            'https://tv.apple.com/us/movie/south-park-joining-the-panderverse/umc.cmc.5wfp8c226sloumxf2beka8a02',
            'https://www.amazon.com/gp/video/detail/B0FM3RJWKR/ref=atv_sr_fle_c_sra5ba81_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0FM3T9C6M&qid=1776216379369',
            'https://www.youtube.com/watch?v=4q13GpSHhc4'
        ]
    ],
    [false,327,false,false,'South Park: (Not Suitable For Children)',
        47,"2023-12-20",true,'P2608',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'After it\'s discovered that a teacher at South Park Elementary has an OnlyFans page, Randy is compelled to take a closer look at the seedy underbelly of the world of on-line influencers.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2608.jpeg',7.2,
        [
            'https://tv.apple.com/us/movie/south-park-not-suitable-for-children/umc.cmc.2wu6ocxa2sduf0ppqpzj9ain5',
            'https://www.amazon.com/gp/video/detail/B0CMC5H7WJ/ref=atv_dp_amz_c_yxuuUK_5_8',
            'https://www.youtube.com/watch?v=WaV8ZUtky9U'
        ]
    ],
    [true,328,false,false,'South Park: The End of Obesity',
        50,"2024-10-24",true,'P2609',false,'UNRATED','Trey Parker','Trey Parker',false,false,false,false,'The advent of new weight loss drugs has a huge impact on everyone in South Park. When Cartman is denied access to the life-changing medicine, the kids jump into action.','https://hosting.photobucket.com/images/i/lesaintdumech/SPEP2609.jpeg',7.1,
        [
            'https://tv.apple.com/us/movie/south-park-the-end-of-obesity/umc.cmc.4paa9o7e026b6btn2l2qjd4po',
            'https://www.amazon.com/gp/video/detail/B0CWSKT21M/ref=atv_dp_amz_c_yxuuUK_5_9',
            'https://www.youtube.com/watch?v=QWImkpPiAog'
        ]
    ],
    [true,329,27,1,'Sermon on the Mount',
        22,"2025-07-23",false,2701,false,'TV-MA','Trey Parker','Trey Parker',0.43,false,['Donald Trump','JD Vance','Karoline Leavitt'],false,'When the residents of South Park face their possible demise, Jesus returns to give them an important message','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2701.jpeg',9.3,['https://tv.apple.com/us/episode/sermon-on-the-mount/umc.cmc.4dr1yqwobkptmpl8fx0nd5qzy?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,330,27,2,'Got a Nut',
        22,"2025-08-06",false,2702,false,'TV-MA','Trey Parker','Trey Parker',0.84,false,['Donald Trump','Kristi Noem','J.D. Vance'],false,'When Mr. Mackey loses his job, he desperately tries to find a new way to make a living.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2702.jpeg',8.4,['https://tv.apple.com/us/episode/got-a-nut/umc.cmc.vjikwvw0x98i7grrcaunm6qi?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,331,27,3,'Sickofancy',
        22,"2025-08-20",false,2703,false,'TV-MA','Trey Parker','Trey Parker',0.85,false,['Donald Trump','JD Vance','Anna Paulina Luna','Tim Cook','Jeff Bezos','Jensen Huang','Mark Zuckerberg','Peter Thiel','Sundar Pichai'],false,'Sharon helps Randy come down from his Ketamine bender and the Marsh family sells Tegridy Farms.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2703.jpeg',7.4,['https://tv.apple.com/us/episode/sickofancy/umc.cmc.56xw77pz5jv05wron7dr4poy1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,332,27,4,'Wok is Dead',
        22,"2025-09-03",false,2704,false,'TV-MA','Trey Parker','Trey Parker',0.67,false,['Donald Trump','JD Vance','Kid Rock','Sean Hannity','Wing Han Tsang'],false,'Butters experiences the reality of tariffs when he has to buy a Labubu doll for his girlfriend\'s birthday.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2704.jpeg',7.6,['https://tv.apple.com/us/episode/wok-is-dead/umc.cmc.50hvwkiap96udm43uhloel4yp?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,333,27,5,'Conflict of Interest',
        22,"2025-09-24",false,2705,false,'TV-MA','Trey Parker','Trey Parker',0.55,false,['Donald Trump','J.D. Vance','Brendan Carr','Donald Trump Jr.','Benjamin Netanyahu'],false,'Kyle and Cartman are at odds when a prediction markets app gets popular with their fellow students','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2705.jpeg',7.5,['https://tv.apple.com/us/episode/conflict-of-interest/umc.cmc.3a26qgvv4wep366h46iycmhj5?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,334,28,1,'Twisted Christian',
        22,"2025-10-15",false,2801,false,'TV-MA','Trey Parker','Trey Parker',0.52,false,['Donald Trump','JD Vance','Peter Thiel'],false,'Cartman is possessed and may be the key to stopping the Antichrist.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2801.jpeg',6.7,['https://tv.apple.com/us/episode/twisted-christian/umc.cmc.6teort7tjpjn8e305sffug7i1?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,335,28,2,'The Woman in the Hat',
        22,"2025-10-31",false,2802,false,'TV-MA','Trey Parker','Trey Parker',0.31,false,['Donald Trump','JD Vance','Pam Bondi','Sephen Miller','Donald Trump Jr.','Karoline Leavitt','Melania Trump','Dan Scavino','Kristi Noem'],false,'The White House deals with a disruptive spirit from the east wing. While Stan worries that South Park has become too political.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2802.jpeg',7.1,['https://tv.apple.com/us/episode/the-woman-in-the-hat/umc.cmc.3bxesv89ahysqg4x3qs5kczb9?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,336,28,3,'Sora Not Sorry',
        22,"2025-11-12",false,2803,false,'TV-MA','Trey Parker','Trey Parker',0.53,false,['Donald Trump','JD Vance','Peter Thiel'],false,'Butters\' A.I. revenge plan backfires, igniting an epidemic of fake videos at school that leaves Detective Harris struggling to tell fantasy from reality.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2803.jpeg',7.3,['https://tv.apple.com/us/episode/sora-not-sorry/umc.cmc.3s91t2dgaw3aei51uklys8mzd?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,337,28,4,'Turkey Trot',
        22,"2025-11-26",false,2804,false,'TV-MA','Trey Parker','Trey Parker',0.37,false,['Donald Trump','JD Vance','Pete Hegseth','Kristi Noem','Peter Thiel','Wing Han Tsang'],false,'The town\'s annual Turkey Trot turns chaotic when Cartman uses questionable cutting-edge science to win the race.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2804.jpeg',7.3,['https://tv.apple.com/us/episode/turkey-trot/umc.cmc.49ih3ubk8oi4uiop310xqkfln?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
    ],
    [true,338,28,5,'The Crap Out',
        26,"2025-12-10",false,2805,false,'TV-MA','Trey Parker','Trey Parker',0.46,false,['Donald Trump','JD Vance','Peter Thiel','Pete Hegseth','Pam Bondi','Dan Scavino','Sean Hannity','Tim Cook','Brendan Carr','Donald Trump Jr.','Jeff Bezos','Karoline Leavitt','Kristi Noem','Mark Zuckerberg','Melania Trump','Stephen Miller'],false,'Satan\'s due, Stan\'s praying, and only a Christmas miracle can deliver the Antichrist on time.','https://hosting.photobucket.com/images/i/lesaintdumech/SPE2805.jpeg',6.8,['https://tv.apple.com/us/episode/the-crap-out/umc.cmc.3oadpvuka436zehh2zno8ge8e?showId=umc.cmc.1n9fnkfiemhayikewq5xitzn6',false,false]
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

    let completionRate = purchasedCt/array.length;
    let purchNode = document.getElementById(id+'Purch');
    let totalNode = document.getElementById(id+'Total');
    let completeNode = document.getElementById(id+'Comp');
    let seasonNode = document.getElementById(id+'Season');
    let seasonNodeJr = document.getElementById(id+'SeasonJr');

    let purchTextNode = document.createTextNode(purchasedCt+' ');
    purchNode.appendChild(purchTextNode);
    let totalTextNode = document.createTextNode(array.length);
    totalNode.appendChild(totalTextNode);
    let completeTextNode = document.createTextNode((completionRate*100).toFixed(2)+'%');
    completeNode.appendChild(completeTextNode);

    if (id!='ListPRMT' && id!='ListOTHER') {
        let seasonStatus = 0;
        let imgSrc = document.createAttribute('src');
        let imgSrcJr = document.createAttribute('src');
        let srcText = "img/SP/UncheckBox.png";
        let tooltipAtr = document.createAttribute('title');
        let tooltipAtrJr = document.createAttribute('title');
        let tooltipText = 'No Episodes Purchased';
        if (completionRate > 0) {
            seasonStatus = 1;
            srcText = "img/SP/CheckedBox2.png";
            tooltipText = 'Few episodes purchased. Season Incomplete.';
        }
        if (completionRate === 1) {
            seasonStatus = 2;
            srcText = "img/SP/CartmanDollarSigns.png";
            tooltipText='All episodes purchased. Season Complete!';
        }
        
        imgSrc.value=srcText;
        seasonNode.setAttributeNode(imgSrc);
        tooltipAtr.value=tooltipText;
        seasonNode.setAttributeNode(tooltipAtr);

        imgSrcJr.value=srcText;
        seasonNodeJr.setAttributeNode(imgSrcJr);
        tooltipAtrJr.value=tooltipText;
        seasonNodeJr.setAttributeNode(tooltipAtrJr);
    }
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

        if (EPISODES[i][0]===true) {
            let cartmanNode = document.createElement('img');
            let cartmanNodeSRC = document.createAttribute('src');
            cartmanNodeSRC.value = 'img/SP/CartmanDollarSigns.png';
            let cartmanNodeHeight = document.createAttribute('height');
            cartmanNodeHeight.value = '40px';
            let cartmanNodeSpace = document.createAttribute('class');
            cartmanNodeSpace.value = 'mr-1';
            cartmanNode.setAttributeNode(cartmanNodeSRC);
            cartmanNode.setAttributeNode(cartmanNodeHeight);
            cartmanNode.setAttributeNode(cartmanNodeSpace);
            div4Node.appendChild(cartmanNode);
        }
        else {
            let checkboxNode = document.createElement('img');
            let checkboxNodeSRC = document.createAttribute('src');
            checkboxNodeSRC.value = 'img/SP/UncheckBox.png';
            let checkboxNodeHeight = document.createAttribute('height');
            checkboxNodeHeight.value = '35px';
            let checkboxNodeSpace = document.createAttribute('class');
            checkboxNodeSpace.value = 'mr-2';
            checkboxNode.setAttributeNode(checkboxNodeSRC);
            checkboxNode.setAttributeNode(checkboxNodeHeight);
            checkboxNode.setAttributeNode(checkboxNodeSpace);
            div4Node.appendChild(checkboxNode);
        }

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

            let celebs = EPISODES[i][15].sort();
            for (let j=0;j<celebs.length;j++) {
                let celebLI = document.createElement('li');
                row4Col1ULNode.appendChild(celebLI);
                let celebLITextNode = document.createTextNode(celebs[j]);
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

            let guests = EPISODES[i][16].sort();
            for (let j=0;j<guests.length;j++) {
                let guestLI = document.createElement('li');
                row4Col2ULNode.appendChild(guestLI);
                let guestLITextNode = document.createTextNode(guests[j]);
                guestLI.appendChild(guestLITextNode);
                let guestLIWeight = document.createAttribute('class');
                guestLIWeight.value = "font-weight-normal";
                guestLI.setAttributeNode(guestLIWeight);
            }
        }

        if (EPISODES[i][21]) {
            let SPStudioRowNode = document.createElement('div');
            let SPStudioRowNodeClass = document.createAttribute('class');
            SPStudioRowNodeClass.value = 'row';
            SPStudioRowNode.setAttributeNode(SPStudioRowNodeClass);
            div6Node.appendChild(SPStudioRowNode);

            let SPStudioColNode = document.createElement('div');
            let SPStudioColNodeClass = document.createAttribute('class');
            SPStudioColNodeClass.value = 'col';
            SPStudioColNode.setAttributeNode(SPStudioColNodeClass);
            SPStudioRowNode.appendChild(SPStudioColNode);

            let SPStudioPara = document.createElement('p');
            let SPStudioParaClass = document.createAttribute('class');
            SPStudioParaClass.value = 'text-right';
            SPStudioPara.setAttributeNode(SPStudioParaClass);
            let SPStudioParaStyle = document.createAttribute('style');
            SPStudioParaStyle.value = 'font-weight:bold;color:black;font-size:150%;';
            SPStudioPara.setAttributeNode(SPStudioParaStyle);
            SPStudioColNode.appendChild(SPStudioPara);

            let SPStudioTextNode = document.createTextNode('Watch:');
            SPStudioPara.appendChild(SPStudioTextNode);

            let episodeLink = document.createElement('a');
            let episodeLinkURL = document.createAttribute('HREF');
            episodeLinkURL.value = EPISODES[i][21];
            episodeLink.setAttributeNode(episodeLinkURL);
            let episodeLinkClass = document.createAttribute('class');
            episodeLinkClass.value = 'mx-1';
            episodeLink.setAttributeNode(episodeLinkClass);
            SPStudioPara.appendChild(episodeLink);

            let episodeLogo = document.createElement('img');
            let episodeLogoSRC = document.createAttribute('src');
            episodeLogoSRC.value = 'img/SP/SPStudioLogo.jpeg';
            episodeLogo.setAttributeNode(episodeLogoSRC);
            let episodeLogoHeight = document.createAttribute('height');
            episodeLogoHeight.value = '50px';
            episodeLogo.setAttributeNode(episodeLogoHeight);
            episodeLink.appendChild(episodeLogo);
        }

        if (EPISODES[i][20]) {
            let purchaseRowNode = document.createElement('div');
            let purchaseRowNodeClass = document.createAttribute('class');
            purchaseRowNodeClass.value = 'row';
            purchaseRowNode.setAttributeNode(purchaseRowNodeClass);
            div6Node.appendChild(purchaseRowNode);

            let purchaseColNode = document.createElement('div');
            let purchaseColNodeClass = document.createAttribute('class');
            purchaseColNodeClass.value = 'col';
            purchaseColNode.setAttributeNode(purchaseColNodeClass);
            purchaseRowNode.appendChild(purchaseColNode);

            let purchPara = document.createElement('p');
            let purchParaClass = document.createAttribute('class');
            purchParaClass.value = 'text-right';
            purchPara.setAttributeNode(purchParaClass);
            let purchParaStyle = document.createAttribute('style');
            purchParaStyle.value = 'font-weight:bold;color:black;font-size:150%;';
            purchPara.setAttributeNode(purchParaStyle);
            purchaseColNode.appendChild(purchPara);

            let purchaseTextNode = document.createTextNode('Purchase:');
            purchPara.appendChild(purchaseTextNode);

            if (EPISODES[i][20][0]) {
                let appleLink = document.createElement('a');
                let appleLinkURL = document.createAttribute('HREF');
                appleLinkURL.value = EPISODES[i][20][0];
                appleLink.setAttributeNode(appleLinkURL);
                let appleLinkClass = document.createAttribute('class');
                appleLinkClass.value = 'mx-1';
                appleLink.setAttributeNode(appleLinkClass);
                purchPara.appendChild(appleLink);

                let appleLogo = document.createElement('img');
                let appleLogoSRC = document.createAttribute('src');
                appleLogoSRC.value = 'img/SP/appleTV2.png';
                appleLogo.setAttributeNode(appleLogoSRC);
                let appleLogoHeight = document.createAttribute('height');
                appleLogoHeight.value = '50px';
                appleLogo.setAttributeNode(appleLogoHeight);
                appleLink.appendChild(appleLogo);
            }

            if (EPISODES[i][20][1]) {
                let amazonLink = document.createElement('a');
                let amazonLinkURL = document.createAttribute('HREF');
                amazonLinkURL.value = EPISODES[i][20][1];
                amazonLink.setAttributeNode(amazonLinkURL);
                let amazonLinkClass = document.createAttribute('class');
                amazonLinkClass.value = 'mx-1';
                amazonLink.setAttributeNode(amazonLinkClass);
                purchPara.appendChild(amazonLink);

                let amazonLogo = document.createElement('img');
                let amazonLogoSRC = document.createAttribute('src');
                amazonLogoSRC.value = 'img/SP/amzPrime.png';
                amazonLogo.setAttributeNode(amazonLogoSRC);
                let amazonLogoHeight = document.createAttribute('height');
                amazonLogoHeight.value = '50px';
                amazonLogo.setAttributeNode(amazonLogoHeight);
                amazonLink.appendChild(amazonLogo);
                
            }

            if (EPISODES[i][20][2]) {
                let youTubeLink = document.createElement('a');
                let youTubeLinkURL = document.createAttribute('HREF');
                youTubeLinkURL.value = EPISODES[i][20][2];
                youTubeLink.setAttributeNode(youTubeLinkURL);
                let youTubeLinkClass = document.createAttribute('class');
                youTubeLinkClass.value = 'mx-1';
                youTubeLink.setAttributeNode(youTubeLinkClass);
                purchPara.appendChild(youTubeLink);

                let youTubeLogo = document.createElement('img');
                let youTubeLogoSRC = document.createAttribute('src');
                youTubeLogoSRC.value = 'img/SP/yTubeLogo.png';
                youTubeLogo.setAttributeNode(youTubeLogoSRC);
                let youTubeLogoHeight = document.createAttribute('height');
                youTubeLogoHeight.value = '50px';
                youTubeLogo.setAttributeNode(youTubeLogoHeight);
                youTubeLink.appendChild(youTubeLogo);
                
            }
        }

        if (EPISODES[i][7]) {
            let prmtRowNode = document.createElement('div');
            let prmtRowNodeClass = document.createAttribute('class');
            prmtRowNodeClass.value = 'row';
            prmtRowNode.setAttributeNode(prmtRowNodeClass);
            div6Node.appendChild(prmtRowNode);

            let prmtCol1Node = document.createElement('div');
            let prmtCol1NodeClass = document.createAttribute('class');
            prmtCol1NodeClass.value = 'col-4 d-none d-lg-block';
            prmtCol1Node.setAttributeNode(prmtCol1NodeClass);
            prmtRowNode.appendChild(prmtCol1Node);

            let prmtLinkA = document.createElement('a');
            let prmtLinkAHREF = document.createAttribute('href');
            prmtLinkAHREF.value = 'https://www.paramountplus.com/';
            prmtLinkA.setAttributeNode(prmtLinkAHREF);
            prmtCol1Node.appendChild(prmtLinkA);

            let prmtIMG = document.createElement('img');
            let prmtIMGSRC = document.createAttribute('src');
            prmtIMGSRC.value = 'img/SP/Paramount-Logo.jpg';
            prmtIMG.setAttributeNode(prmtIMGSRC);
            let prmtIMGClass = document.createAttribute('class');
            prmtIMGClass.value = 'rounded';
            prmtIMG.setAttributeNode(prmtIMGClass);
            let prmtIMGHeight = document.createAttribute('height');
            prmtIMGHeight.value = '70px';
            prmtIMG.setAttributeNode(prmtIMGHeight);
            prmtLinkA.appendChild(prmtIMG);

            let prmtCol2Node = document.createElement('div');
            let prmtCol2NodeClass = document.createAttribute('class');
            prmtCol2NodeClass.value = 'col';
            prmtCol2Node.setAttributeNode(prmtCol2NodeClass);
            prmtRowNode.appendChild(prmtCol2Node);

            let prmtLinkB = document.createElement('a');
            let prmtLinkBHREF = document.createAttribute('href');
            prmtLinkBHREF.value = 'https://www.paramountplus.com/';
            prmtLinkB.setAttributeNode(prmtLinkBHREF);
            prmtCol2Node.appendChild(prmtLinkB);

            let prmtPara = document.createElement('p');
            let prmtParaClass = document.createAttribute('class');
            prmtParaClass.value = 'text-right';
            prmtPara.setAttributeNode(prmtParaClass);
            let prmtParaStyle = document.createAttribute('style');
            prmtParaStyle.value = 'font-weight:bold;color:blue;font-size:160%;';
            prmtPara.setAttributeNode(prmtParaStyle);
            prmtLinkB.appendChild(prmtPara);

            let prmtLinkBTextNode = document.createTextNode('Subscribe to');
            prmtPara.appendChild(prmtLinkBTextNode);

            let prmtBanner = document.createElement('img');
            let prmtBannerSRC = document.createAttribute('src');
            prmtBannerSRC.value = 'img/SP/paramount.jpeg';
            prmtBanner.setAttributeNode(prmtBannerSRC);
            let prmtBannerClass = document.createAttribute('class');
            prmtBannerClass.value = 'rounded ml-2';
            prmtBanner.setAttributeNode(prmtBannerClass);
            let prmtBannerHeight = document.createAttribute('height');
            prmtBannerHeight.value = '70px';
            prmtBanner.setAttributeNode(prmtBannerHeight);
            prmtPara.appendChild(prmtBanner);
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