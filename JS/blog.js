/*  Template
[
    0. date
    1. Title
    2.photo url
    3.[paragraph one]
    4.[paragraph two]
    5.[paragraph three]
]
Each paragraph an array of segments, each segment either a string or a hyperlink array
hyperlink array: ['word(s),'url',outside link?]
*/

//Blog Array
const blogArray = [
    [
        '2023-06-24',
        'Launch Day',
        'https://hosting.photobucket.com/images/i/lesaintdumech/jun6launchdayscreenshotMedium.jpeg',
        ['So excited. Today\'s the launch day for the site. Still a work in progress though with more development yet to come. But I\'m still working on it and hope to have the full thing up and running as soon as possible.'],
        ['So please stick around and be part of the community as we develop and grow. I hope to have all sorts of cool new features on here very soon. I promise to make it worth all your while.']
    ],
    [
        '2023-07-03',
        'Happy Fourth !!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/oldglory15_eGREgFtS5ru7kwrr5vsofU.jpeg',
        [
            [
                'Just uploaded this week\'s post, and did so just in time for the July Fourth holiday. In honor of Independence Day and in Honor of freedom for all, this week\'s unveil is my USA themed MGSD Gundam Freedom, the ',
                ['Old Glory','Builds/Gundams/OldGlory.html']
            ]
        ],
        [
            [
                'Also, other news. Not counting Old Gory, since Launch Day last weekend, I\'ve uploaded around over 40 more projects from the backlog to the ',
                ['Builds','builds.html'],
                ' page. So be sure to check those out. I\'m still adding more but doing so is a time straining process and I do have quite the backlog to make my way through that it\'s going to take a while. So I beg for you patience as I work through this process.'
            ]
        ],
        ['But anyhow, wishing you all a happy Fourth of July and may all the blessings of heaven shine down upon you and your family this year.']
    ],
    [
        '2023-07-11',
        'Gone Totally Green',
        'https://hosting.photobucket.com/images/i/lesaintdumech/eZy_Watermark_18-11-2022_10-06-15AM_Large.jpeg',
        [
            [
                'Just posted this week\'s weekly unveil, the ',
                ['Strike Verde','Builds/Gundams/StrikeVerde.html'],
                '. Basically my green-thumb take on the Strike Noir. Go check that out. It\'s nothing too extraordinary. Just a basic SD build. But I like how the colors on this turned out.'
            ]
        ],
        ['Also in site news and updates: I am now up to 66 projects posted. And only 23 still remaining in back log left to go. So Yay !!! Almost done. I hope to have this wrapped up by this weekend. Then I cannot wait to get started on sprucing up some of the details like making the Home Page more formal rather than an Ipsum Lorem formatting test, as well as sprucing up the links and contact info. I am also brainstorming other other cool new features after that to possibly add. Who knows what all I will do on here. I am kind of playing along and learning too as I go along.'],
        ['Also, I am trying to think of other things to blog about on here. I do not want this to be just a once a week weekly thing where I say "Oh hey, here is my latest weekly thing, please go check it out!" That would be monotonous and boring. Nobody ants to read that. I\'m thinking maybe I might post progress pics now tthen here and there of current models in the works. Although problem is with all the effort I have been putting into getting this site off the ground and running, I have cut down on my amount of time painting. Last month it literally came to a complete stand still. Another thought I had was maybe doing weekly episode reviews of different Gundam series. In example watch through all of the original show Mobile Suit Gundam week by week and post a weekly review and synobpis of that episode. Not sure if anyone would be interested in that though. The show is quite outdated and I\'m guessing most of you have seen it by now. I am a rare person who still has not actually. I have watched pretty much all of the Gundam universe except for Turn-A and 98% of the Universal Century (UC). I am honestly pretty completely clueless on the U.C. Ask me any question on Seed or Wing or G though, and I am totally all over that. Oh another series in the Gundam Universe I have not even started yet is the Gundam Build Divers or whatever they\'re calling it now show. Build Divers, that though definitely is a hard pass for me. It\s just not hard core at all. Looks totally lame honestly. It\'s as if they took Gundam and swapped out the beam sabers for kiddie gloves. Not going to waste my time over that nonsense.']
    ],
    [
        '2023-07-14',
        'Meet Bea',
        'https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6436.jpg',
        ['Hi everyone meet Beatrice, the Gund-Puppy, our site\'s new official mascot. She is such a sweetheart and total little cutie.'],
        [''],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6434.jpg']
        ]
    ],
    [
        '2023-07-15',
        'Finally !! Backlog Finished !!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Screenshot_2023-07-16_at_12.50.35_AM_Large.jpeg',
        ['So I am happy to announce, the backlog is finally finished and all uploaded to the site. It took me three weeks to do but it\'s finally done.'],
        ['Of course I still have the Home and Links pages left to do. But it is such a relief to finally have this huge burden wrapped up. Before I continue on to the next portion of the site, I\'m just going to sit back and take it easy and relax for a moment.'],
        [
            [
                'In the meantime while I pour myself a drink, the rest of you please go check out my ',
                ['Builds page','builds.html'],
                ' and admire my work. Lord knows I\'ve worked hard enough for you all to go enjoy them.'
            ]
        ]
    ],
    [
        '2023-07-17',
        'Smoke On a Monday !!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/deeppurple10.jpeg',
        [
            [
                'Happy Monday!! Presenting this week\'s Monday post, ',
                ['Deep Purple','Builds/Gundams/DeepPurple.html'],
                '. Painted with near Fifty Shades of Purple and inspired by one of my favorite 60s/70s hard rock bands. Enjoy.'
            ],
        ],
        ['*** For clarification, the fifty shades of purple reference was a joke. It was more like three.']
    ],
    [
        '2023-07-20',
        'Mail Call',
        'https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_IMG_6628_Large.png',
        [
            [
                'So FedEX delivery today from P-Bandai just came in. Got me the ',
                ['MG Strike Launch and Sword Striker Packs','https://p-bandai.com/us/item/N2211440001008',true],
                ', ',
                ['HG Rose Gundam','https://p-bandai.com/us/item/N2619353001002',true],
                ', and two copies of the ',
                ['HG Deathscythe Hell Tv Version','https://p-bandai.com/us/item/N2554771001001',true],
                '. Cannot wait to paint and build these all.'
            ],
        ],
        ['Expect to see more magic things from me to come.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6629_Large.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6630_Large.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6631_Large.jpeg']
        ]
    ],
    [
        '2023-07-24',
        'Calling the Wolf Pack',
        'https://hosting.photobucket.com/images/i/lesaintdumech/dashhound34.jpeg',
        [
            [
                'Awoooooo !!!! This week\'s post goes out to all those with puppy fever. Presenting project ',
                ['Dash Hound','Builds/Zoids/DashHound.html'],
                '. My first Zoid build, this was inspired by cute little dachshund puppies everywhere. So without further ado, I present to you Dash Hound.'
            ]
        ]
    ],
    [
        '2023-07-25',
        'It Is Finished',
        'https://hosting.photobucket.com/images/i/lesaintdumech/finished.jpeg',
        ['So excited to announce, it is finally finished!!! The site is all done!!! It\'s now complete!!! The website is finished!!!'],
        ['Now granted, in fairness 98% of the website was already completed. The only remaining portion left to do was just write the site introduction for the home page. I had been procrastinating on that for over a week. But hey now, sometimes it can be hard to know what to say for these sorts of things.'],
        ['But anyhow, the home page is now done, and with that the webpage in its current iteration is now complete.'],
        ['Of course there will still be weekly posts and updates with each now project I upload and frequent blog posts as I write about new projects I start on and comment on other Gundam news.'],
        ['There also over time will be new updates and features added to the site, possibly including:'],
        ['* First Up: Site migration to React format'],
        ['* Retooling site infrastructure and cleaning up the Javascripts'],
        ['* A Reviews Section where I watch through different seasons of Gundam and summarize/review each episode'],
        ['* My own Gundam fan fiction'],
        ['* A section for my own original Gundam designs and drawings'],
        ['Not sure what all I am going to do. But this is going to be fun. So stick around.']
    ],
    [
        '2023-07-31',
        'Premium-Bleu!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pbyzakzaku12phantom.jpeg',
        ['Well it\'s that day of the week again. Time for another weekly project unveil. This week I\'m doing just a plain P-Bandai straight build. Nothing fancy nor custom painted here. Just all built exactly as is out of the box. Sometimes it does feel nice to take a break from the painting and just enjoy building somethign simple just for the joy of building and to relax the creative mucles, which is what I usually do with the P-Bandai kits. '],
        ['Besides, the P-Bandais are usually more expensive and they\'re limited editions that I do not want to risk messing them up with a paint job gone wrong.'],
        [
            [
                'Anyhow, presenting this week\'s project, the ',
                ['Slash Zaku Phantom','Builds/PBandai/PBPhantomZakuMG.html'],
                '.'
            ]
        ]
    ],
    [
        '2023-08-01',
        'Something new in the works',
        'https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6946.jpeg',
        [
            [
                'So happy first day of August. Starting on a new project tonight. Won\'t say what it is just yet. All I can say you all know just how much I love the ',
                ['Dagger L','Builds/Gundams/KingLeir.html'],
                '. So going to paint a whole lot more of them. Practically assembling my own little Dagger Army. Got a cool theme this time planned out for them which I cannot wait to share. In the meantime though you\'re all going to have to wait to be surprised. Cannot wait to reveal more details on this project soon.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6945.jpeg']
        ]
    ],
    [
        '2023-08-05',
        'New Paints',
        'https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_IMG_6996_Large.png',
        [
            'Got some new paint in the mail and they came are absolutely amazing. '
        ],
        [
            [
                'As part of my next oncoming projects I needed new shiny metallic colors. So for that I turned to the',
                ['Mr Hobby','https://www.mr-hobby.com/en/product1/category_7.html',true],
                ', Mr Metallic, line.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_6995_Large.jpeg']
        ],
        ['For colors I purchased Metallic Purple:'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_IMG_7001_Large.png']
        ],
        ['Bloody Red:'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_IMG_6997_Large.png']
        ],
        ['And Rough Gold:'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_IMG_7004_Large.png']
        ],
        ['After the first round these came out great.'], 
        ['The paint does have its difficulties. It requires a ton of paint thinner. The thinner for this brand appears to evaporate or something becausee after so many minutes the paint starts to thicken again that I have to add more thinner and dilute it down all over again. I had to constantly keep re-thinning the paint several times all throughout the paint process that it probably took me three times as long to paint everything as it normally would. Was definitely a big hurdle to overcome.'],
        ['But all in all these pieces look just amazing. Like absolutely astounding. This brand is hard to come by and often not in stock, but whenever I can come across it, this is definitely going to be my go to for metallic colors from now on.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_7005_Large.jpeg']
        ]
    ],
    [
        '2023-08-07',
        'Premium-Strike!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/sfdeac01.jpeg',
        [
            [
                'Second week in a row of posting a Premium-Bandai Straight Build. Am on bit of P-Bandai splurge lately. I have a large back stock of them I have to get through. This week is ',
                ['Strike-Freedom (Deactive Mode)','Builds/PBandai/PBStrikeFreedomDeactive.html'],
                '. A simple build but neat in concept. Enjoy!'
            ]
        ],
        ['However stay tuned, got more P-Bandai\'s and Strike-Freedom and Strike madness yet to come.  You will not want to miss out. There will be more content in the weeks to come.']
    ],
    [
        '2023-08-14',
        'MGEX Strike-Freedom, Pt I',
        'https://hosting.photobucket.com/images/i/lesaintdumech/mgexsfgoldframe67.jpeg',
        [
            [
                'Not a P-Bandai but another Straight Build. Today\'s post is the ',
                ['Master Grade Extreme Strike-Freedom','Builds/Specials/MGEXStrikeFreedom.html'],
                ', Gold Frame.'
            ]
        ],
        ['As I have stated before I normally do not post straight builds. But MGEX is a premier grade using metal infused plastic and highly detailed parts that I think this class deserves special exception.'],
        ['Also going to be unveiling this week\'s project in two parts. First up is the internal gold frame It is super shiny and has actual gold forged into the plastic. Considering that in the long run it is going to wind up hidden beneath the bulk of the kit\'s plastic to not be ever witnessed nor seen, I had to stop to do a photo shoot of it assembled as just the frame first before proceeding to building the rest of it.'],
        ['So proud to present to you now, the MGEX Strike-Freedom Straight Build Gold Frame. Be sure to stick around for the full build too later this week.']
    ],
    [
        '2023-08-17',
        'MGEX Strike-Freedom, Pt II',
        'https://hosting.photobucket.com/images/i/lesaintdumech/mgexstrikefreedom110.jpeg',
        [
            [
                'Time for part two of this week\'s post, ',
                ['Master Grade Extreme Strike-Freedom','Builds/Specials/MGEXStrikeFreedom.html'],
                ', Full Armor.'
            ]
        ],
        ['Monday I posted just the MGEX Strike-Freedom\'s inner frame underneath all the armor and accessories. But today I am now unveiling the fully assembled MGEX Strike Freedom. And boy is it a masterpiece. Enjoy!']
    ],
    [
        '2023-08-21',
        'Strike Perfect Grade',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pgstrikem16.jpeg',
        [
            [
                'This week another Straight Build. Don\'t worry, more paint jobs coming up very soon. Got Something special in the works. But as for this week I present to you the ',
                ['Strike Gundam','Builds/PG/PGStrike.html'],
                ', Perfect Grade.'
            ]
        ],
        [
            [
                'This was my first attempt at a Perfect Grade Gundam kit. However it\'s not my first Perfect Grade overall. I had built the Perfect Grade ',
                ['Skygrasper','Builds/PG/PGSkygasper.html'],
                ' back in October and it was amazing. Really showed me what the Perfect Grade line is all about. However of course the Skygrasper is not a Gundam, it\'s an aircraft. So this was my first official Gundam Perfect Grade, and wow it was so amazing. Like even the Skygrasper, as cool as it was, did not even come close So much detail goes into these Perfect Grade kits. They truly are the golden standard of what Gundams are meant to be.'
            ],
        ]
    ],
    [
        '2023-08-26',
        'All Bea\'d Out',
        'https://hosting.photobucket.com/images/i/lesaintdumech/IMG_7618.jpeg',
        ['Gosh it\'s been such a long day and my sweet little Bea is alll tuckered out. Sleep well little angel. You have a whole lot more of playing to do with the children who love you again tomorrow.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_7620.jpeg']
        ]
    ],
    [
        '2023-08-28',
        'I\'m Burnin, I\'m Burnin, I\'m Burnin for You!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/asterix16.jpeg',
        [
            [
                'That time of the calendar again when it\'s time for another weekly unveil. This week I present to you a fiery Charmander named ',
                ['Asterix','Builds/Pokemon/Asterix.html'],
                '.'
            ]
        ],
        ['My second time painting a Pokemon. And it really came out cute. Just that adorable little smile with those, shiny metallic scales, tiny little paws and fiery eyes beaming up at you, he instantly steals your heart with his flaming soul. Really makes me wish he were sorta real.']
    ],
    [
        '2023-09-04',
        'Enter The Dragon!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/vercezard24.jpeg',
        ['Happy Labor Day!! Today may be a fake holiday but that does not stop me from making another model unveil.'],
        [
            [
                'This week, and as for the first post of the month, I bring to you ',
                ['Vercingetorix','Builds/Pokemon/Vercingetorix.html'],
                '.'
            ]
        ],
        [
            [
                'Doing another Pokemon this week. Last week I gave you the Charmander, ',
                ['Asterix','Builds/Pokemon/Asterix.html'],
                '. But this week I bring you his final evolved form, a fiery Ferrari Red Charizard, Vercingetorix.'
            ]
        ],
        ['Both is he fierce and is he ferocious. This mighty fire dragon rules the skies and takes no prisoners, he is lord of all. Enjoy.']
    ],
    [
        '2023-09-12',
        'Enter the Dragon Part II',
        'https://hosting.photobucket.com/images/i/lesaintdumech/boudica08.jpeg',
        [
            [
                'Last week I presented my Charizard, but the Charizard pack is actually a double pack with the pieces for two Pokemon. The second being Dragonite. So naturally I had to paint that one too. So without much further ado, I present to you',
                ['Boudica','Builds/Pokemon/Boudica.html'],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_boudica14.png']
        ]
    ],
    [
        '2023-09-14',
        'Bookkeeping',
        'https://hosting.photobucket.com/images/i/lesaintdumech/IMG_8007.jpeg',
        ['Entering in all my latest hours into the database. Just wrapped up quite a few projects that I had been working on all last month. So got a lot of hours to enter to get the time spent on each model all tallied up.'], 
        ['But got a lot of cool new stuff to unveil to you all very soon. Not gonna lie, I have enough finished material now that I am going to be posting well into 2024.'],
        ['Hell I have got such a huge back log built up, that at this point I could take a vacation from modeling for the entire rest of the year and half of next if I absolutely wanted to. But of course I won\'t do that. Probably will slow down though to focus more on my compputer courses.']
    ],
    [
        '2023-09-16',
        'New Games Section',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Screenshot_2023-09-16_at_11.53.41_PM.jpeg',
        ['So new site news. Just added a new games section.'], 
        ['Nothing too complex or exciting. Just basic Javascript powered activities created as part of my practice in mastering the program language. Wrote them as assignments for my programming class and figured why not also share them here.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Screenshot_2023-09-17_at_12.00.34_AM.jpeg']
        ],
        ['So far all I have is just one number guessing game. But I will be uploading more soon. Again do not expect anythning complex. Just simple little ditties cause why not.']
    ],
    [
        '2023-09-18',
        'Need More Kroutrock',
        'https://hosting.photobucket.com/images/i/lesaintdumech/nena01.jpeg',
        [
            [
                'Time for this week\'s post. I present to you ',
                ['Nena','Builds/Gundams/Nena.html'],
                '.'
            ]
        ],
        [
            'No particular theme and inspiration here. I was going through an SD rush where I was painting a ton and needed a naming convention to tie them all together. And I ended up longing on 80s rock. Particularly Kroutrock. Long story short most the names I grabbed off of the Atomic Blonde movie official soundtrack.'
        ],
        [
            'As for how that theme influenced the design of this model, it did not. I pretty much the names of colors out of a hat.'
        ]
    ],
    [
        '2023-09-19',
        'Ne Touche',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Screen_Shot_2022-10-04_at_10.03.09_PM.png',
        ['You can look, but do not touch. :P']
    ],
    [
        '2023-09-25',
        'Bear of Persia',
        'https://hosting.photobucket.com/images/i/lesaintdumech/dobiel20.jpeg',
        [
            'Once again time for the weekly unveil. This week\'s post is special. Not only because it is the last post for the month of September but because it is also the first Gundam paint job for quite a while. Lately I\'ve had lots of P-Bandai straight builds and Pokemon posts that it feels good to get back to the main franchise that I love.'
        ],
        [
            [
                'This week I present to you ',
                ['Dobiel','Builds/Gundams/Dobiel.html'],
                ['.']
            ]
        ],
        [
            'Named of the Hebrew guardian angel of Persia, its name translates to \'God is my bear\'. This was a fun build and my second project from the new Witch from Mercury series. I had been waiting forever to build this since they first unveiled it in the anime, that soon as the kit became available I just had snatch it. Enjoy.'
        ]
    ],
    [
        '2023-10-02',
        'Charlemagne King of Roses',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pbcharlemagne29.jpeg',
        [
            [
                'Got something special for this week. One of the coolest Gundams from G Gundam and in a new P-Bandai enhanced kit I present to you ',
                ['Charlemange','Builds/PBandai/Charlemagne.html'],
                '.'
            ]
        ],
        [
            'Charlemagne is the new updated version of the HG kit of Gundam Rose. The original Rose HG kit was pretty lame. Very cheaply designed and very rudimentary. Basically just a front half mold and a back half mold slabbed together and called a Gundam kit. No special effects and especially not one of its signature feature, the Rose Bits.'
        ],
        ['However P-Bandai really stepped it up with this new kit. They added the rose bits, which are just cool. And made the cape panels come off and added a special display stand to feature Gundam Rose\'s signature move, Rose Hurricane, in action. This kit is truly one of a kind and I am excited to hear that they P-Bandai has announced plans to release another HG redesign of their G-Gundam, Gundam Maxter, coming out next sometime early next year. I will definitely be getting my hands on that one as well.'],
        ['These new G-Gundam redesigns are just too cool. I am impressed.']
    ],
    [
        '2023-10-10',
        'More PB (and J)',
        'https://hosting.photobucket.com/images/i/lesaintdumech/PBSDagger23.jpeg',
        [
            [
                'Happy Columbus Day and another Happy start to the week. This week is another P-Bandai kit. So with no time to waste, I present to you the ',
                ['Premium Bandai HG Strike Dagger straight build','Builds/PBandai/PBStrikeDaggers.html'],
                '.'
            ],
        ]
    ],
    [
        '2023-10-12',
        'Strike Dagger Pt II',
        'https://hosting.photobucket.com/images/i/lesaintdumech/PBSDagger35.jpeg',
        ['So of course I could not just build a straight build of the P-Bandai Strike Dagger without also wanting to paint it too. So without question I obviously did just that.'],
        [
            [
                'As part of part two of this week\'s reveal I have just uploaded the photos of the paint build I did for the ',
                ['Strike Dagger','Builds/PBandai/PBStrikeDaggers.html'],
                ' to the build\'s page.'
            ],
        ],
        ['Go check it out.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/PBSDagger53.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/PBSDagger49.jpeg']
        ]
    ],
    [
        '2023-10-16',
        'The God of Death',
        'https://hosting.photobucket.com/images/i/lesaintdumech/PBDScytheHell09.jpeg',
        [
            [
                'Doing another P-Bandai build this week. Starting off first with a straight build of the Gundam ',
                ['Deathscythe Hell','Builds/PBandai/PBAlucard.html'],
                '.'
            ],
        ],
        ['Specifically this model is the TV Version of Deathscythe Hell. The TV Version lately has become real hard to find due to the EW custom version having taken dominance. So this kti ware a real special and rare treat.']
    ],
    [
        '2023-10-19',
        'Son of Dracul',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pbaluc07.jpeg',
        [
            [
                'Once again this week\'s build is in two parts. Monday I posted the straight build. But today I now present to you, ',
                ['Alcuard','Builds/PBandai/PBAlucard.html'],
                ', my paint build of the HG Deathscythe Hell.'
            ]
        ],
        [
            [
                'For this I used a combination of ',
                ['TurboDork','https://turbodork.com',true],
                ' colors to add some shininess. For the wings I used their Black Ice to give that sharp deep black look. I also used one layer of their Rainbow Roll on the external sides of the wings to give it that glittery effect. to contrast the black I also used TurboDork\'s Sparkling Motion for the silver protion on the front wing panels and wow does it burst. ' 
            ]
        ],
        [
            [
                'This was also a special build because it was one of my first few builds to experiment with the Mr Hobby / Mr Color ',
                ['Mr Metallic','https://www.mr-hobby.com/en/product1/category_7/104.html',true],
                ' lineup of paints. Overwhelmingly, my first impression is astoundingly positive. These are really great paints. They go on smoothly, and when dry the quality is great. They just look really nice. Only thing is make sure you have a lot of their approved paint thinner. The paint goes through thinner fast.'
            ]
        ],
        ['For Alucard I used the Mr Metallic GX 217 Rough Gold for the gold portions of the chest rib bones and gold crest on the helmet. It\'s sooo shiny. This will be my go-to paint for gold going forward. I also used the Mr Metallic GX 215 Bloody Red for the red portions on the front wing panels and the shield. Quality of this red, it is just astounding. So shiny and so deep and rich. I love it.']
    ],
    [
        '2023-10-23',
        'Return of the Pocket Monsters',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Obelix_8910.jpeg',
        [
            [
                'Time for another Pokemon build. This week I present ',
                ['Obelix','Builds/Pokemon/Obelix.html'],
                ', the mighty, shiny Bulbasaur.'
            ]
        ]
    ],
    [
        '2023-10-25',
        'Toothpicks',
        'https://hosting.photobucket.com/images/i/lesaintdumech/IMG_8948.JPG',
        ['Trying something experimental tonight. Needed spikes for a project so decided to glue the tips of toothpicks. Bit nervous. Using plastic model cement, which as the name implies, is intended for plastic. But of course Toothpicks are made of wood so I don\'t know how well they\'ll adhere to the model. They\'re drying right now. I will see how in the morning well the cement holds up. fingers crossed.'],
        ['Hopefully it works. There are other cements meant for wood. But then the question becomes how well does that adhere to the plastic. So you can the conundrum I am in. I swear there really needs to be an adhesive marketed to work on both.'],
        ['Anyhow, one way or another I will figure it out. I cannot wait to reveal this project to you early 2024. Happy hobbying to all till then.'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_8949.JPG']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_8950.JPG']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/IMG_8951.JPG']
        ]
    ],
    [
        '2023-10-30',
        'Halloween Week: Part 1',
        'https://hosting.photobucket.com/images/i/lesaintdumech/VidarFrame27.jpeg',
        [
            [
                'This week is going to be another two parter. Just in time for Halloween is my take on the omninous Gundam Vidar from Iron blooded Ophans. Vidar to me has always been a dark and ominous, intimidating suit so I wanted to paint something that represented that. So inpsired by Nietzsche himself, I present to you ',
                ['Gundam \u00dcbermensch','Builds/Gundams/Ubermensch.html'],
                ', part 1, the gold frame.'
            ]
        ]
    ],
    [
        '2023-10-31',
        'Happy Halloween!!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/UbmenschArmor28.jpeg',
        [
            [
                'Happy Halloween and in honor of the holiday, time for part two of spooky',
                ['Gundam \u00dcbermensch','Builds/Gundams/Ubermensch.html'],
                '. Today I am unveiling \u00dcbermensch\'s armor form. '
            ]
        ],
        ['I really love how shiny this armor came out. This was my first time using the Mr Color, Mr Metallic line of paints. On this one I utilized the Mr Metallic GX-206 Metal Purple, GX-215 Bloody Red and GX-217 Rough Gold. They all are outstanding. I definitely achieved the vision I had in mind. I will be using Mr Color for metallic paints going forward.'],
        ['But without furter adieau, enjoy, Gundam \u00dcbermensch.']
    ],
    [
        '2023-11-07',
        'There\'s a Starman, Waiting in the Sky',
        'https://hosting.photobucket.com/images/i/lesaintdumech/starman11.JPG',
        [
            [
                'I\'m a day late at posting this week\'s unveil. What can I say, yesterday I was just so tired. But without further delay I present to you ',
                ['Starman','Builds/Gundams/Starman.html'],
                '.'
            ]
        ],
        ['Enjoy :)']
    ],
    [
        '2023-11-14',
        'Incoming Destiny',
        'https://hosting.photobucket.com/images/i/lesaintdumech/desimprg49.jpeg',
        [
            [
                'Another week another build. This week presenting Premium Bandai ',
                ['Destiny Impulse','Builds/PBandai/PBDestinyImpulseRG.html'],
                ', Real Grade.'
            ]
        ],
        ['I\'ve had quite the back log of Premium Bandai straight builds. With this week\'s post I am almost all the way through the backlog. Cannot wait to being posting nothing but paint builds for a while.'],
        ['Not going to lie, the more I paint the more I get bored with straight builds. I used to reserve paint builds only for the cool kits that I did not want to mess up with a bad paint. But more and more I am beginning to feel confident enough in my painting skill to no longer have that worry. I am even contemplating painting a perfect grade. Who knows what I may do next.']
    ],
    [
        '2023-11-20',
        'Ziggy Played Guitar',
        'https://hosting.photobucket.com/images/i/lesaintdumech/ziggy16.jpeg',
        [
            [
                'Was disappointed by the Starman so I decided to give it a second go. This time I now present to you my second SD Sazabi attempt, ',
                ['Ziggy','Builds/Gundams/Ziggy.html'],
                '.'
            ]
        ],
        [''],
        [
            [
                ['break','Now Ziggy played guitar'],
                ['break','Jamming good with Weird and Gilly'],
                ['break','And The Spiders from Mars'],
                ['break','He played it left hand'],
                ['break','But made it too far'],
                ['break','Became the special man'],
                'Then we were Ziggy\'s Band'
            ]
        ],
        [
            [
                ['break','Ziggy really sang'],
                ['break','Screwed-up eyes and screwed-down hairdo'],
                ['break','Like some cat from Japan'],
                ['break','He could lick \'em by smiling'],
                ['break','He could leave \'em to hang'],
                ['break','He came on so loaded man'],
                'Well-hung and snow-white tan'
            ]
        ],
        [
            [
                ['break','So where were the spiders'],
                ['break','While the fly tried to break our balls?'],
                ['break','Just the beer light to guide us'],
                ['break','So we bitched about his fans'],
                'And should we crush his sweet hands?'
            ]
        ],
        [
            [
                ['break','Ziggy played for time'],
                ['break','Jiving us that we were Voodoo'],
                ['break','The kids was just crass'],
                ['break','He was the nazz'],
                ['break','With the God-given ass'],
                ['break','He took it all too far'],
                'But boy could he play guitar'
            ]
        ],
        [
            [
                ['break','Making love with his ego'],
                ['break','Ziggy sucked up into his mind'],
                ['break','Like a leper messiah'],
                ['break','When the kids had killed a man'],
                'I had to break up the band'
            ]
        ],
        ['Ziggy Played Guitar !!!']
    ],
    [
        '2023-11-23',
        'Happy Turkey Day !!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/freedomturkey.jpeg',
        ['Wishing everyone a Happy Thanksgiving 2023!!!']
    ],
    [
        '2023-11-27',
        'Premium-Destiny Part Dieux',
        'https://hosting.photobucket.com/images/i/lesaintdumech/mgdesimpreg21.jpeg',
        [
            [
                'This week another Premium Bandai. I present the Master Grade ',
                ['Destiny Impulse Regenes','Builds/PBandai/PBDesintyImpulseREgenesMG.html'],
                '.'
            ]
        ],
        [
            [
                'Few weeks back I presented the Premium Bandai',
                ['Destiny Impulse','Builds/PBandai/PBDestinyImpulseRG.html'],
                ' Real Grade model. Well at the same time that kit was made available, Premium Bandai also released a Master Grade version of the Regenese model, a much similar mobile suit to the Destiny Impulse but with less weapons but a cooler name. So I naturally had to purchase the two of them together and build both.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/mgdesimpreg34.jpeg']
        ],
        ['Both models have their own unique strengths and differences. So you be the judge on which one you like better.']
    ],
    [
        '2023-11-30',
        'NewType Build of the Week',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Image_11-27-23_at_6.42_PM.jpeg',
        [
            [
                'OMG this was a surprise. But I am so stoked to announce that my project ',
                ['Fluorescent','Builds/Gundams/Fluorescent.html'],
                ' has been featured on the site ',
                ['NewType','https://newtype.us',true],
                ' as one of their builds of the week.'
            ],
        ],
        ['I did not see this coming but I am so moved and honored. Thank you so much NewType !!!'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Image_11-27-23_at_6.42_PM.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/fluor05.jpeg']
        ]
    ],
    [
        '2023-12-04',
        'Lady Stardust sang a song of Darkness and Dismay',
        'https://hosting.photobucket.com/images/i/lesaintdumech/stardust12.jpeg',
        [
            [
                'After painting two Sazabis, I of course had to also paint their Sucessor the Sinanju. I present to you ',
                ['Stardust','Builds/Gundams/Stardust.html'],
                '.'
            ]
        ]
    ],
    [
        '2023-12-11',
        'Time For A Blue Monday',
        'https://hosting.photobucket.com/images/i/lesaintdumech/bluemonday14.jpeg',
        [
            [
                'Happy Monday! And hope yours is Blue!! Inspired by the New Order Song, later covered by HEALTH for Atomic Blonde, today\'s unveil is ',
                ['Blue Monday','Builds/Gundams/BlueMonday.html'],
                '.'
            ]
        ],
        ['An SD LRX-077 Sisquiede, painted in several different shades of blue. I just love how this cute little guy turned out. This one I\'m definitely keeping in my personal collection for a long time.']
    ],
    [
        '2023-12-18',
        'Almost Christmas',
        'https://hosting.photobucket.com/images/i/lesaintdumech/SATO11.jpeg',
        ['We\'re officially now one week away from Christmas. And with the holidays upon us keeping us busy and the year soon drawing to a close, I\'ve been keeping things simple here in the studios at Le Saint Du Mech. So no big elaborate productions for a while. Just some small simple SDs to close things out as the year ends.'],
        [
            [
                'Therefore in that vein, this week I present to you ',
                ['SATO','Builds/Gundams/SATO.html'],
                '.'
            ]
        ],
        ['Nothing complicated. Just an SD Perfect Strike. No fancy color scheme or theme here. Just wanted to paint it a different set of colors than the standard Strike. And all colors complete chosen by drawing them out of a hat. This build could not have been any more random.']
    ],
    [
        '2023-12-25',
        'Merry Christmas!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Helios08.jpeg',
        [
            [
                'Merry Christmas!!! For the holiday, today wanted to post something colorful, bright, vibrant and festive. So with that in mind and in honor of the spirit of the holiday I present to you ',
                ['Gundam Helios','Builds/SDW/Helios.html'],
                '.'
            ]
        ]
    ],
    [
        '2024-01-01',
        'Happy New Year 2024!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/rocketman10.jpeg',
        [
            [
                'Bursting into the new with fireworks and rockets, I present to you ',
                ['Rocket Man','Builds/Gundams/RocketMan.html'],
                '!!!!'
            ]
        ],
        ['So excited to be celebrating the new year with you all. 2024 is going to be a blast. Got some exciting new projects to share and some exciting new changes coming to the site. Cannot wait to show you all soon.'],
        ['So Happy 2024!!! May the new year bring you Blessings and Joy. This year is going to be a blast!']
    ],
    [
        '2024-01-08',
        'I\'ll be Haro for the Holidays',
        'https://hosting.photobucket.com/images/i/lesaintdumech/haroblue01.jpeg',
        [
            [
                'For this week\'s unveil just a simple ',
                ['Blue Haro','Builds/Haro/HaroBlue.html'],
                '. Got big cool project posts for the new year coming very soon.'
            ]
        ]
    ],
    [
        '2024-01-15',
        'Polar Vortex Phoebe',
        'https://hosting.photobucket.com/images/i/lesaintdumech/sdphoebe10.jpeg',
        [
            [
                'So we are in the middle of an arctic front here in the midwest. Eight inches of snow, negative twelve degrees, was traepped/burried inside my house for the weekend and am currently dealing with a frozen pipe as I now write to you all this. Despite all the drama, still managed to get some painting in, even despite a frozen window that would not open to let the spray booth exhaust vent out. But enough of that drama, for this week\'s post I present to you ',
                ['Phoebe','Builds/Gundams/Phoebe.html'],
                '.'
            ]
        ],
        ['Inspired by the Greek titan whose name means, \'The Bright One\', Phoebe was an experiment in how well I could use masking tape to to blend regions of colors. With her sharp distinct corners where the brown stands out from the blue, I think I pulled it off.'],
        ['Anyhow, as I deal with solving all the issues with my house from this winter storm, hope you all enjoy Phoebe.']
    ],
    [
        '2024-01-22',
        'Can you paint with all the colors of the wind?',
        'https://hosting.photobucket.com/images/i/lesaintdumech/tethys03.jpeg',
        [
            [
                'Time once again for another weekly unveil. This week I present to you ',
                ['Tethys','Builds/SDW/Tethys.html'],
                ', my custom paint of the SD Cao Cao Wing Isei.'
            ]
        ],
        ['A lot of colors went into this but it did not turn out how I wanted. But oh well this was just an experimentation. Enjoy!']
    ],
    [
        '2024-01-29',
        'Build of the Week #2',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Screen_Shot_2024-01-29_at_9.10.25_AM.jpeg',
        [
            [
                'So once again I am proud to announce that ',
                ['NewType','https://newtype.us',true],
                ' has chosen me as of one their builds of the week. This time they chose my Shadow Gundam,',
                ['Red Baron','Builds/Gundams/RedBaron.html'],
                '.'
            ],
        ],
        ['This is now the second time this has happened and again I am so shocked and honored to have been chosen. Thank you NewType !!!'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Screen_Shot_2024-01-29_at_9.10.25_AM.jpeg']
        ],
        [
            [
                'Everyone be sure to go check it out. Both my Red Baron ',
                ['here','Builds/Gundams/RedBaron.html'],
                '. The Build Page on Newtype ',
                ['here','https://newtype.us/build/v9U65mqzvBLS4cnT1Q3W',true],
                '. And the Shadow Gundam product page ',
                ['here','https://newtype.us/p/RQuAYgB4XXkOwgZaWLOi/h/mg-gf13-021ng-gundam-spiegel',true],
                ['.']
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/rbaron42.jpg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/rbaron25.jpg']
        ]
    ],
    [
        '2024-01-30',
        'Flame Wings: Old Glory, New Twist',
        'https://hosting.photobucket.com/images/i/lesaintdumech/oldgloryblazewings03.jpeg',
        [
            [
                'For this week\'s unveil, it\'s not a new project but an update to a previous project ',
                ['Old Glory','Builds/Gundams/OldGlory.html'],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/wingsoflight.jpeg']
        ],
        ['Earlier this summer a special effects extra option set for the MGSD Freedom became available called the Wings of Light. Basically an energy trail glow affect for the Freedom Gundam quite similar in appearance to the Voiture Lumiere propulsion system of the Strike-Freedom Gundam. I had already by this point finshed and posted my Old Glory MGSD Freedom build, but I could not turn this special edition down so I immediately placed my pre-order for it.'],
        ['When the wings arrived I did not like how they looked in their default plastic translucent blue. Blue in general did not fit the color scheme of the Old Glory red tones in general. Plus, since when do I ever turn down an opportunity for a new paint job.'],
        ['With the Old GLory being primarily red and white, mostly red, I knew I had to make the wing effects a shiny red to compliment it. I then decide to add in an orange and yellow to make it a more fiery affect. And to make it shiny like a fire/energy propulsion I decided to go with a \'candy\' paint teqnique to add the glossy shininess.'],
        ['I am real proud how this turned out. And it brought the Old Glory all the more to life that it deserved. I can definitley say Old Glory was incomplete till I added this.'],
        ['Enjoy !'],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/oldgloryblazewings10.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/oldgloryblazewings13.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/oldgloryblazewings14.jpeg']
        ]
    ],
    [
        '2024-02-05',
        'Much Haro About Nothing',
        'https://hosting.photobucket.com/images/i/lesaintdumech/gharo11.jpeg',
        [
            [
                'Another Haro this week. I am getting some cool new builds wrapped up that I hope to start posting soon so consider this ',
                ['Green Haro','Builds/Haro/HaroGreen.html'],
                ' just a filler for now. I will have the cool new projects start posting in a few weeks.'
            ]
        ]
    ],
    [
        '2024-02-14',
        'Valentines Day 2024',
        'https://hosting.photobucket.com/images/i/lesaintdumech/rgodpbstr166.jpeg',
        [
            [
                'Happy Valentines Day!! In spirit of the Holiday I could not think of any more apt build than the ',
                ['King of Hearts','Builds/Specials/KHeart.html'],
                ', my Real Grade Burning/God Gundam straight build with the P-Bandai expansion pack and Kosmos light set. In spirit of the holiday, enjoy our new Cupid.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/rgodpbstr153.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/rgodpbstr142.jpeg']
        ]
    ],
    [
        '2024-02-20',
        'Titan of the Sea',
        'https://hosting.photobucket.com/images/i/lesaintdumech/oceanus11.jpeg',
        [
            [
                'Am a day late this week at posting. In fairness to me Monday was President\'s day and I was busy taking care of chores and attending festivities. But a day late aint that bad. For this week I present to you ',
                ['Oceanus','Builds/SDW/Oceanus.html'],
                ', the water titan who ruled over all the fresh waters of the Earth and the Seas. Enjoy.'
            ]
        ]
    ],
    [
        '2024-02-26',
        'Meet Missus Pink',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pinkharo03.jpg',
        [
            [
                'February is almost over and to wrap it up this week I\'m reveiling another Haro. This week is ',
                ['Pink','Builds/Haro/HaroPink.html'],
                '. Valentines was two weeks ago so I figured this could still be relevant.'
            ]
        ]
    ],
    [
        '2024-03-07',
        'King of the Southern Sun',
        'https://hosting.photobucket.com/images/i/lesaintdumech/coraust02.jpeg',
        [
            [
                'So super late posting this week. I have been having technical difficulties. But better late than never. This week I present to you ',
                ['Corona Australis','Builds/SDW/CoronaAustralis.html'],
                '.'
            ]
        ],
        [
            'Inspired by warm colors, I painted this Tallgeese I with red and orange Turbo Dark paint to try to create a shiny, warm glow. This build makes me imagine being in the Bahamas out tanning on the beach while watching the setting tropical sun.'
        ]
    ],
    [
        '2024-03-12',
        'Purple and Wields a Big Stick',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pharo08.jpeg',
        [
            [
                'Another Haro this week. I present to you ',
                ['Haro Purple','Builds/Haro/HaroPurple.html'],
                '.'
            ]
        ],
        [
            'So back story on all these Haros. Due to their spherical nature, last year for Easter 2023 I painted a ton of these and painted them separate colors to place in Easter Baskets as Gundam Easter Eggs. Anyhow, Easter 2024 is just a few weeks away from being upon us and I still have many of the Haros remaining in my backlog and still unposted that I just had to get them out of there.'
        ]
    ],
    [
        '2024-03-19',
        'King of the Northern Light',
        'https://hosting.photobucket.com/images/i/lesaintdumech/corborealis11.jpeg',
        [
            [
                'Few weeks back I posted the Tallgeese I ',
                ['Corona Australis','Builds/SDW/CoronaAustralis.html'],
                ' but this week I post its counterpart the Tallgeese III ',
                ['Corona Borealis','Builds/SDW/CoronaBorealis.html'],
                '.'
            ]
        ],
        [
            'Australis was inspired by the warmth and sun. But Borealis is inspired by cool and dark colors of the Arctic North. '
        ]
    ],
    [
        '2024-03-27',
        'Put the Lime in the ...',
        'https://hosting.photobucket.com/images/i/lesaintdumech/HLime06.jpeg',
        [
            [
                'Another Haro. Introducing ',
                ['Haro Lime','Builds/Haro/HaroLime.html'],
                '.'
            ]
        ]
    ],
    [
        '2024-04-04',
        'Soaring High in the Sky, With Haro in the Eye',
        'https://hosting.photobucket.com/images/i/lesaintdumech/HCloud03.jpeg',
        [
            [
                'Another Haro and another variant of Haro Green. This week is ',
                ['Haro Cloud','Builds/Haro/HaroCloud.html'],
                '.'
            ]
        ],
        [
            'This one I painted it blue at the base while experimenting a shade technique of sublte light brown cream swirls over the blue, giving it a sort of swirly cloud sort of feel. Oh and had some left over decals from prior projects so added the Volkswagen symbol cause just why not.'
        ]
    ],
    [
        '2024-04-10',
        'Final Haro',
        'https://hosting.photobucket.com/images/i/lesaintdumech/haronge02.jpeg',
        [
            [
                'Proud to announce, at last, the final Haro. This week is ',
                ['Haro Orange','Builds/Haro/HaroOrange.html'],
                '. Not just is it a Haro, but it\'s a total war machine and it\'s fierce. '
            ]
        ],
        [
            'So glad to be finished posting these. Don\'t think I\'ll be wanting to do any more Haros for quite a long while.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/haronge01.jpeg']
        ]
    ],
    [
        '2024-04-15',
        'Tax Day 2024',
        'https://hosting.photobucket.com/images/i/lesaintdumech/theia31.jpeg',
        [
            [
                'Well it\'s April 15, Tax Day. Hope you all got your taxes filed on time. But meanwhile it\'s Monday and time for another post. This week I present to you ',
                ['Theia','Builds/Gundams/Theia.html'],
                ', the Kshatriya, and her buddy Johnny-Five.'
            ]
        ],
        [
            'This project was mostly done as an experiment to test new TurboDork colors. Which other than probably yellow they all came out great. Especially loved the scarab green on the arms.'
        ],
        [
            'Also glad to finally be posting something this week that is not a Haro.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/theia29.jpeg']
        ]
    ],
    [
        '2024-04-22',
        'The Deku Knight',
        'https://hosting.photobucket.com/images/i/lesaintdumech/dekuK08.jpg',
        [
            [
                'Haros and SDs are finally over. Now starts the season of larger builds again. First up my MGSD Barbatos, the ',
                ['Deku Knight','Builds/Gundams/Deku.html'],
                '.'
            ]
        ],
        [
            'The MGDSDs are a really impressive line. Cannot wait for Bandai to make more. But for the meantime lets just all awe in amazement at the MGSD Barbatos. It\'s a really great piece of design and engineering. Bandai really outdid themselves on this one.s'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/dekuK09.jpg']
        ],
        [
            'PS Hang in. The start of something big starts next week.'
        ]
    ],
    [
        '2024-04-22',
        'YouTube Debut',
        'https://hosting.photobucket.com/images/i/lesaintdumech/dkyt.jpeg',
        [
            [
                'Coinciding with today\'s reveal the Deku Knight, I\'m also proud to announce today the launch of  my new ',
                ['YouTube','https://www.youtube.com/channel/UCs6aqwL743FZhK-GRg3m4iw',true],
                ' channel.'
            ]
        ],
        [
            'Same name as the site just another platform to create and post videos of all the builds I do. I will be using it regularly going forward.'
        ],
        [
            [
                'First up, check out my video for my new build ',
                ['Deku Knight','https://youtu.be/Ljdahpgy_4U'],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/ytpremier.jpeg']
        ]
    ],
    [
        '2024-04-29',
        'Rise of the Huntress',
        'https://hosting.photobucket.com/images/i/lesaintdumech/samvar28.jpeg',
        [
            [
                'With today\'s unveil I announnce the start of a new project. To launch Metroid Project, first up is the ',
                ['Samus Aran Varia Suit','Builds/Metroid/Varia.html'],
                '.'
            ]
        ],
        [
            'The first reveil is her suit that started it all, the Varia Suit. It was a fun challenge recreating her iconic suit, in the orange, red and yellow. I decided to spruce it up with the candy effect just to make it more shiny. I\'m quite proud how close to the source material this paint job came out. Once again another proud Dagger L that I cannot help but keep looking at. Enjoy.'
        ],
        [
            [
                'P.S. Also do not forget to also check out the accompanying ',
                ['Youtube','https://youtu.be/9wZVfwGWlKw',true],
                ' video.'
            ]
        ]
    ],
    [
        '2024-05-06',
        'Anti-Gravity Commencing',
        'https://hosting.photobucket.com/images/i/lesaintdumech/samgrav36.jpeg',
        [
            [
                'Officially week two of the Metroid project and this week I unveil Samus\' ',
                ['Gravity Suit','Builds/Metroid/Gravity.html'],
                '.'
            ]
        ],
        [
            'The Gravity Suit is one of the longest running original OGs in Metroid lore and I had a lot of fun adapting the design to Dagger L. Not to toot my own horn but I think I aced it.'
        ],
        [
            [
                'P.S. Also again, don\'t forget to check out our new ',
                ['Youtube','https://youtu.be/FfthpwsEwmg',true],
                ' channel and watch the Gravity Suit video.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samgrav25.jpeg']
        ]
    ],
    [
        '2024-05-13',
        'Phazon Contamination Imminent',
        'https://hosting.photobucket.com/images/i/lesaintdumech/samphaz27.jpeg',
        [
            [
                'Week three of the \'Faces of Samus\' and this week\'s unveil is her ',
                ['Phazon Suit','Builds/Metroid/Phazon.html'],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/3_PhazonSuit.webp']
        ],
        [
            'The sleek black elegant Phazon suit, created by a phazon-infused Omega Pirate collapsing on top of Samus and imbuing its phazon stores strength into her. The suit is one notably one of the strongest suits in the series and my favorite. As well as the final suit in the Metroid Prime I lineup.'
        ],
        [
            [
                'Meanwhile again do go check out the this week\'s ',
                ['Youtube','https://youtu.be/j8DI_MxWTek',true],
                ' video for the Phazon suit as well.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samphaz05.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samphaz25.jpeg']
        ]
    ],
    [
        '2024-05-20',
        'Echoe of the Dark Suit',
        'https://hosting.photobucket.com/images/i/lesaintdumech/4_DarkSuit.webp',
        [
            [
                'Entry number four in the Samus project. And this week it\'s the ',
                ['Dark Suit','Builds/Metroid/Dark.html'],
                '. Introduced in Metroid Prime Echoes, the Dark Suit is pretty cool looking and a major standout in the series appearing quite different than all her normal lineup of suits. It\'s truly one of a kind and a personal fave.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samdar13.jpg']
        ],
        [
            [
                'Also, don\'t forget the ',
                ['Youtube','https://youtu.be/x53rQPMHpE8',true],
                '.'
            ]
        ]
    ],
    [
        '2024-05-27',
        'Echoe of the Light Suit',
        'https://hosting.photobucket.com/images/i/lesaintdumech/5_LightSuit.jpeg',
        [
            [
                'First off check out the ',
                ['Youtube','https://youtu.be/fIUNxZdI2M8?si=y31ZWD5GbJU1pBqZ',true],
                '.'
            ]
        ],
        [
            [
                'This week number five in the Samus project: the ',
                ['Light Suit','Builds/Metroid/Light.html'],
                '. The final and ultimate suit presented in Metroid Prime Echoes, and the ultimate weapon in the aresenal of Luminoth Technology. Nothing was cooler than seeing Samus go up against the Emporer Ing all decked out in the Light Suit. Despite its simplicity, this one I probably put the most thought into out of all the Samus Daggers to try to capture the Light Suit\'s look.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samlight12.jpeg']
        ]
    ],
    [
        '2024-06-03',
        'Phazon Corruption Imminent',
        'https://hosting.photobucket.com/images/i/lesaintdumech/6_PEDSuit.jpeg',
        [
            [
                'Next up, the ',
                ['PED Suit','Builds/Metroid/PED.html'],
                ', entry number six in Project Samus. Introduced in Metroid Prime 3: Corruption, this suit is probably the dullest in Samus\'s lineup but due to its ability to utilize phazon and enter Samus into a hyper mode it one of the strongest. Likely second only to the ',
                ['Metroid Suit','Builds/Metroid/MetroidSuit.html'],
                '.'
            ]
        ],
        [
            'Due to its simple nature there was not much here for me to work with, but I still gave it my all. And I\'m quite proud how it turned out. If anything mine is much more shinier than the original. Maybe later in the future if for another build if I am feeling up to it I might paint this suit again in her hyper mode.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samped08.jpeg']
        ],
        [
            [
                'Also, ',
                ['Youtube','https://youtu.be/ftHaYYBLyWI',true],
                '.'
            ]
        ]
    ],
    [
        '2024-06-10',
        'Metroid DNA Fusion',
        'https://hosting.photobucket.com/images/i/lesaintdumech/7_FusionSuit.webp',
        [
            [
                'This week I bring you the ',
                ['Fusion Suit','Builds/Metroid/Fusion.html'],
                '. Prime is finally over. And next up is the Fusion story arc. After defeating the Metroid Prime / Dark Samus for good, thus ending the Prime Saga. Samus now moves on to eradicate all the Metroids on planet SR388. Just for have a run in with a whole new predator. Only way to enhacne her to combat this new threat was to inject her with Metroid DNA, creating a new fusion of human and alien, turning her into a whole new monster, the ultimate human-chozo-metroid fusion.'
            ]
        ],
        [
            [
                ['Youtube','https://youtu.be/1uz4guERqbk',true],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samfus25.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samfus38.jpeg']
        ]
    ],
    [
        '2024-06-17',
        'Just a little Dread to inpsire the Revolution',
        'https://hosting.photobucket.com/images/i/lesaintdumech/8_DreadSuit.webp',
        [
            [
                'This week is the ',
                ['Dread Suit','Builds/Metroid/Dread.html'],
                '. Despite its reveal so late in the project, this is actually the very first Samus I built and the one that inspired me to build all the others.'
            ]
        ],
        [
            [
                'Unlike the others, the Dread Suit was entirely unplanned. The idea sort of randomly stirred in the moment of trying what to do with an unused P-Bandai Strike Dagger kit. After it was finished I was very in awe with how it turned out, and with my love of Daggers sever since building my first one, ',
                ['King Leir','Builds/Gundams/KingLeir.html'],
                ' and my love of all things Metroid, I just knew I had to complete the arsenal and build all the Samus suits. And by all, I really do mean All of them.'
            ]
        ],
        [
            [
                'Visit the ',
                ['Youtube','https://youtu.be/hFDa8j-NscI',true],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samdread15.jpeg']
        ]
    ],
    [
        '2024-06-24',
        'Metroid Hybrid Form',
        'https://hosting.photobucket.com/images/i/lesaintdumech/MetroidSuit01.jpeg',
        [
            [
                'Finally Samus\' last suit, or at least the last known suit as of this time, the ',
                ['Metroid Suit','Builds/Metroid/MetroidSuit.html'],
                '. This one was a pleasure to build. I spent of lot of time planning the colors. Which in the end they came out looking great. But what I am most proud of are the metroid fangs effect.'
            ]
        ],
        [
            [
                'Also, this is the last known suit of Samus; for now. But Nintendo did just announce a whole new Metroid game ',
                ['Last Week','https://x.com/NintendoAmerica/status/1803076685723550204',true],
                ' due to come out 2025. Which with that there are due to be new suits presented to us. So stay tuned. I will naturally of course be painting those suits too soon as they are revieled to us. But til then, enjoy, the Metroid Suit.'
            ]
        ],
        [
            [
                ['Youtube','https://youtu.be/YZ-dzMfBmjg',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/sammet59.jpeg']
        ]
    ],
    [
        '2024-06-25',
        'Build of Week: Blue Angel',
        'https://hosting.photobucket.com/images/i/lesaintdumech/blueangels13.jpeg',
        [
            [
                'Once again I am so honored, ',
                ['NewType.US','https://newtype.us',true],
                ' has once again chose another of my builds, this time ',
                ['Blue Angels','Builds/Gundams/BlueAngels.html'],
                ' as their build of the week for the week of June 24, 2024.'
            ]
        ],
        [
            'Thanks so much NewType !!!'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/blueangelsbuildofweek.jpeg']
        ]
    ],
    [
        '2024-07-01',
        'Rise of the Worm',
        'https://hosting.photobucket.com/images/i/lesaintdumech/DarkSamusEchoes02.jpeg',
        [
            [
                'Now that all of Samus\' power suits are out of the way, obviously you cannot have a Metroid project without also painting Samus\' ultimate nemesis, ',
                ['Dark Samus','Builds/Metroid/Echoes.html'],
                '.'
            ]
        ],
        [
            'Now of course Dark Samus had two iterations, one in Metroid Prime Echoes and the second in Metroid Prime Corruption. So I am starting off this week with her form From Echoes. To pull this one off I used some pretty blues from TurboDork and to beef her up to make her look more intimidating than a Dagger I decided to use a Gundvolva as the base to paint her on. Overall I am very quite proud with this build.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/darksamecho46.jpeg']
        ],
        [
            [
                'Also do not forget to check out the ',
                ['Youtube','https://youtu.be/wE2XVpx50mA',true],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/darksamecho84.jpeg']
        ]
    ],
    [
        '2024-07-08',
        'Build of Week: Thor',
        'https://hosting.photobucket.com/images/i/lesaintdumech/thor24.jpeg',
        [
            [
                'So I believe this is now occurence number four, but once again I have been honored by ',
                ['NewType.US','https://newtype.us',true],
                ' one of their builds of the week. This week they chose my Digimon Gallantmon build ',
                ['Thor','Builds/Digimon/Thor.html'],
                '  for the week of July 8, 2024.'
            ]
        ],
        [
            'As always I am so humbled and so touched and so grateful. Thanks you so much NewType for choosing me and showcasing my build that I worked so hard on. Love you guys so much !!!'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Screenshot_2024-07-08_at_12.25.26_PM.jpeg']
        ]
    ],
    [
        '2024-07-08',
        'The Worm Pt II',
        'https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_DarkSamusCorruption01.png',
        [
            [
                'Last week I presented Dark Samus. But don\'t forget Dark Samus was featured in the franchise twice. First in Metroid Prime Echoes but then again for the final showdown with Samus in Metroid Prime Corruption. So this week I present to you Dark Samus\' ',
                ['Corruption','Builds/Metroid/Corruption.html'],
                ' form.'
            ]
        ],
        [
            'For her Corruption form I chose the Witch From Mercury Beguir-Pente suit. Unlike all the previous builds in the Metroid project which were suits I have already painted and built before, this was the first new suit in my lineup that I have not built yet before. And it was a lot of fun. Also pretty proud of the coloring here. I will admit that this build I do have my doubts how well it represents the source material. Primarily because the Beguir-Pente just does not feel very Samus-ish. But I can only do the best I can. Overall it is still a cool build.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/darksamcor22.jpeg']
        ],
        [
            [
                'Also do not forget to check out the ',
                ['Youtube','https://youtu.be/cy48mkY1eJs',true],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/darksamcor35.jpeg']
        ]
    ],
    [
        '2024-07-15',
        'Completion of Samus',
        'https://hosting.photobucket.com/images/i/lesaintdumech/SamusZeroSuit01.jpg',
        [
            [
                'This week I present the final Samus Suit. Tbe epic famous, least utilized but iconic ',
                ['Zero Suit','Builds/Metroid/ZeroSuit.html'],
                '. And with that I have now completed the entire Samus suit lineup.'
            ]
        ],
        [
            [
                'Again please do check out the ',
                ['Youtube','https://youtu.be/5PgQ0s4gvHY',true],
                '.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/samzero03.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/AllSams.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/AllSams2.jpeg']
        ]
    ],
    [
        '2024-07-22',
        'Federation Trooper',
        'https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_GFtrooper_trio.png',
        [
            [
                'Today is the big day. I present to you the final post of the Metroid Project. We went through all the Samus Suits. We did both renditions of Dark Samus. In order to keep painting Metroid I had to go further into the franchise and today I prent to you the ',
                ['Federation Trooper','Builds/Metroid/FedTrooper.html'],
                '.'
            ]
        ],
        [
            'And with that, the Metroid project is now coming to a pause. Not an end. But just a pause. There are of course other characters in the franchise. Other villains and monsters. And there is a whole new game in the series coming out next year which will naturally introduce whole new suits for Samus that I cannot wait to paint. There will be more to add to this project in the future. But for right now, presented to you all all the entries in this series that I have painted so far. '
        ],
        [
            [
                ['Youtube','https://youtu.be/jhEmwQ9XIQU',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/fedtroop04.jpeg']
        ]
    ],
    [
        '2024-07-29',
        'Welcome to Jurassic Park !!!',
        'https://hosting.photobucket.com/images/i/lesaintdumech/longqueen089.jpeg',
        [
            [
                'After three long months of Metroid, I am  excited to present to you today something different. Today is neither Samus nor a Gundam. But rather something a little more organic. I present to you',
                ['Queen of the Dinosaurs','Builds/Displays/JParkQueen.html'],
                ', the T-Rex of Jurassic Park.'
            ]
        ],
        [
            'This was my first attempt at doing a living lifeform. By that I mean actual realistic, living breathing life, adbiding by the laws of nature and physics and not some cartoon like Pokemon or Digimon. So it was a lot of pressure to get this right. I normally do machines. And for those you just have to paint individiaul panels one solid color. But for living animals there is so much more complexity of shading and texture and alternating of color, which I have never done that before. It was a challenge. But one I surprised myself and really pulled off quite well. I think as of this moment, July 29 2024, this is by far my most proudest project I\'ve done. I feel quite pleased with myself.'
        ],
        [
            [
                ['Youtube','https://youtu.be/2BTtcMxWnug',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/longqueen001.jpeg']
        ]
    ],
    [
        '2024-08-05',
        'Age of Aquarius',
        'https://hosting.photobucket.com/images/i/lesaintdumech/pontus20.jpeg',
        [
            [
                'When the moon is in the Seventh House and Jupiter aligns with Mars. Then peace will guide the planets and ',
                ['Pontus','Builds/Gundams/Pontus.html'],
                ' will steer the stars.'
            ]
        ],
        [
            'I love the Aquarius SD model. I had to build another.'
        ],
        [
            [
                ['Youtube','https://youtu.be/cyHP334NYec',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/pontus42.jpeg']
        ]
    ],
    [
        '2024-08-12',
        'Blue Falcon',
        'https://hosting.photobucket.com/images/i/lesaintdumech/mistral10.jpeg',
        [
            [
                'Took another break from Gundam to do a different franchise for a change again. This time I am finally tackling Star Wars with the smallest and cheapest Millennium Falcon model I could find. I present to you ',
                ['Mistral','Builds/Ships/Mistral.html'],
                '.'
            ]
        ],
        [
            [
                ['Youtube','https://youtu.be/kEN__YDH0iM',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/mistral12.jpeg']
        ]
    ],
    [
        '2024-08-19',
        'La\u00FCstic',
        'https://hosting.photobucket.com/images/i/lesaintdumech/nachtigall53.jpeg',
        [
            [
                'Inspired by Marie de France\'s famous lai, this week I present the ',
                ['Nachtigall','Builds/Gundams/Nachtigall.html'],
                '. Took Char\'s Nightingale and painted it all black and changed the name to German.'
            ]
        ],
        [
            'I think the black just makes it look even more dark and ominous. I am definitely now going to have to paint the larger model in the HG scale. Just wish they would make it in the MG or FM. The bigger the better. I feel so much potential in the Nightingale mobile suit. Or mobile armor. Cannot fully tell which one of the two it is.'
        ],
        [
            [
                ['Youtube','https://youtu.be/4wcdEav0u-A',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/nachtigall57.jpeg']
        ]
    ],
    [
        '2024-08-26',
        'The Nazarene',
        'https://hosting.photobucket.com/images/i/lesaintdumech/NAZARENE82.jpg',
        [
            [
                'This week\'s post is bit of a passion project to me. Inspired by the Nazarene Christians marked for death by ISIS in the Middle East I present to you ',
                ['The Nazarene','Builds/Gundams/TheNazarene.html'],
                '.'
            ]
        ],
        [
            'The Nazarenes are Middle Eastern Christians living in Lebanon, Syria and Iraq who have been in the land for over two thousand years. During the rise of Isis around 2015 the Nazarenes were marked for death and targeted for ethnic cleansing. Isis tried to wipe them out.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/famliyonrun.jpeg']
        ],
        [
            'Worse, even though both the U.N. and North American and European relief agencies sent in teams to assist and evacuate the targeted Muslim communities also being attacked by Isis, the Nazarene community was completely ignored and abandoned by the relief agencies and evenbarred entry by the relief agencies to their refugee camps solely due to their Christian status.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/refugees.jpg']
        ],
        [
            'So in response to this travesty and neglect of justice many private independent Christian charities as well as non-Christian concerned citizens throughout the west who care about humanity rallied together and raised money to put together relief and rescue operations of their own and get these targeted Nazarenes out of the Middle East and into host nations throughout Eastern Europe willing to provide them refuge and aslyum. When the world governments decided they would not act, and abondoned these poor people to be wiped out, we rose up and said \'Never Again\' means NEVER AGAIN and that under our watch we would not permit this genocide.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Christians-in-need-of-help.jpg']
        ],
        [
            'We successfully got the Nazarenes out. Over thousands of Middle Eastern Christians and other marked for death Middle Eastern religious minorities we rescued and got out of there. Around 2019 under new leadership the American armed forces finally destroyed much of Isis and made it safe for many Nazarenes to return to their homes and rebuild their lives again.Later in 2021 after the disasterous Afghanistan pullout when the Taliban began to with a swift fury take retake over all of Afghanistan and killing much of its population we rose again to help the Afghannis as well and rescued thousands who had allies of ours during the war and who were in hiding from the Taliban forces, including women and girls who had been marked for death simply for receiving an education. We helped them too and our charities continue to be active tryin to help out in Afghanistan.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/nazarenewoman.jpeg']
        ],
        [
            'However with the recent rise in instability in the Middle East, starting with the fall of Afghanistan, the October 7th Massacre on our friends in Israel, the Yemen Houthis obstructing trade though the gulf, and the continued proxy war between Israel and Iran, these war-torn disastrous times have enabled the rise of Isis again. They are quickly on the move and reclaiming much of their old territory that they had lost back in 2017-2019. With this new rise of Isis it is worrisome and unclear the future for the region\'s Nazarene community.'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/oldwomanworship.jpg']
        ],
        [
            'So I beg of you please educate yourself, read up, and get involved and help the Nazarene community. Please help prevent this new Genocide. I recommend you visit this links:'
        ],
        [
            [
                '* ',
                ['Nasarean.org','https://www.nasarean.org',true],
                ' ~ To learn more about the Nazarene community.'
            ]
        ],
        [
            [
                '* ',
                ['The Nazarene Fund','https://thenazarenefund.org',true],
                ' ~ Go here to learn how you can get involved and donate money to rescue targeted Middle Eastern minorities'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/isis.jpg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/sddefault-2.jpg']
        ],
        [
            [
                'Also, less important than the links above, but as always I ask that you check out this week\'s ',
                ['Youtube video','https://youtu.be/_RtNSbb1NNQ',true],
                ', but only after you\'ve checked out the above links first. Saving life is much more important.'
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/nazvideo.jpeg']
        ]
    ],
    [
        '2024-09-02',
        'My Cuz Jasper',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Japser13.jpeg',
        [
            [
                'I painted a Charmander before and I thought he was really cute. Just the little side-eye look in his face, total adorbs. But I gave that build away. And I started to miss it. So i just had to paint him again. I present to you ',
                ['Jasper','Builds/Pokemon/Jasper.html'],
                '.'
            ]
        ],
        [
            [
                ['Youtube','https://youtu.be/dSrjyUYPO5Q',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Japser05.jpeg']
        ]
    ],
    [
        '2024-09-09',
        'My Cuz Jade',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Jade03.jpeg',
        [
            [
                'Last week I repainted Charmander. This week it\'s my Bulbasaur repaint, ',
                ['Jade','Builds/Pokemon/Jade.html'],
                '.'
            ]
        ],
        [
            [
                'Using Mr Hobby\'s Metallics line, I created a beautiful metallic jade green to represent Bulby\'s body. Plus an experiment with different Vallejo olive, swampy and neon greens to create the lush green bulb on top. It\'s the perfect contrast to my previous Bulbasaur ',
                ['Obelix','Builds/Pokemon/Obelix.html'],
                ' which was shiny on top and flat on bottom.'
            ]
        ],
        [
            'Won\'t lie, these pokemon kits are so simple and basic it\'s sometimes a challenge to push yourself to be creative to do more than just basic paint them. Sometimes they feel like they need a little bit more. As I type this right now I\'m listening to Prince and imagining Jade wearing a little petit rasberry beret. If only they made them that small. Stay tuned, if I manage to find one I will repost.'
        ],
        [
            [
                ['Youtube','https://youtu.be/3SDwI7SFK1U',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Jade10.jpeg']
        ]
    ],
    [
        '2024-09-16',
        'My Cuz Cooper',
        'https://hosting.photobucket.com/images/i/lesaintdumech/Cooper10.jpeg',
        [
            [
                'This week is ',
                ['Cooper','Builds/Pokemon/Cooper.html'],
                '. I don\'t know why but Squirtle just gives me a Cooper vibe. And with Cooper I have now completed the Kanto starters trilogy.'
            ]
        ],
        [
            [
                ['Youtube','https://youtu.be/tB9dmy9CA50',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/Cooper14.jpeg']
        ]
    ],
    [
        '2024-09-23',
        'Height of Luxury',
        'https://hosting.photobucket.com/images/i/lesaintdumech/LUXEBALL57.jpeg',
        [
            [
                'Continuing this month\'s Pokemon theme, next up is a polypodball ',
                ['Luxury Ball','Builds/PBandai/LuxeBall.html'],
                '. Basically a Universal Century Ball painted with pokemon luxury ball colors.'
            ]
        ],
        [
            'Won\'t lie my first impression when I saw this kit was I thought it looked like a crab, I almost chose to paint it all red and name it Crabby. But I really liked its spherical nature and thought you know what, what if I painted that like a pokeball. And naturally I chose the Luxury Ball of all balls cause they\'re the most fancy. In the future though I want to get more ball kits and paint one for each of the different pokeball colors.'
        ],
        [
            [
                ['Youtube','https://youtu.be/AHB-3BSQa7U',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LUXEBALL58.jpeg']
        ]
    ],
    [
        '2024-09-24',
        'Build of Week: John Wayne',
        'https://hosting.photobucket.com/images/i/lesaintdumech/(edited)_buildofweek92324.png',
        [
            [
                'So this makes number 5. Thank you ',
                ['NewType.US','https://newtype.us',true],
                ' for choosing my build ',
                ['John Wayne','Builds/Gundams/JohnWayne.html'],
                '  for the your Build of the Week, week of September 23, 2024!!!!'
            ]
        ],
        [
            'It is always exciting whenever a build of mine gets chosen by NewType. I appreciate being chosen by you guys and given the opportunity to showcase my work to a larger audience. Thank you so much!!!'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/buildofweek92324.jpeg']
        ]
    ],
    [
        '2024-09-30',
        'XGF-02 Gundam LFrith',
        'https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr05.jpeg',
        [
            'Doing a straight build this week. XGF-02 Gundam LFrith, the precursor to Gundam Aerial. As you know I do not do build bages for straight builds. So posting the photos here in a blog post intsead. '
        ],
        [
            'The LFrith is a fairly simple build. The GUND-BITS were cool. The pink accents the white pretty well. The face has a blank ominous stare to it like a ghost. Overall the suit feels more like a drone than a Gundam. There is just something mysterious about it.'
        ],
        [
            'Also I have been trying forever to figure out the origin of the word LFrith. I am awfully curious how they named it that. It is such a weird word. Does anyone know?'
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr03.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr05.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr08.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr10.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr11.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr16.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr18.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr19.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr22.jpeg']
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/LFRStr24.jpeg']
        ]
    ],
    [
        '2024-10-03',
        'LFrith Week',
        'https://hosting.photobucket.com/images/i/lesaintdumech/adriel79.jpeg',
        [
            [
                'Of course I could not just release only a straight build this week. Where is the fun in that. So since I posted Moday the HG LFrith straight build, today I present to you my painted version the ',
                ['Adriel','Builds/Gundams/Adriel.html'],
                '.'
            ]
        ],
        [
            'As part of my angels project, and to kick off my Witch from Mercury lineup, I start off first with the angel of death Adriel. Painted entirely in Mr Hobby Metallics, I decided to make this LFrith all gold with purple highlights to respect the pink of the original design. And photographed in front of my new planets backdrop, it truly is quite stellar. Sort of like an astral heavenly warrior. Enjoy.'
        ],
        [
            [
                ['Youtube','https://youtu.be/eEVz6c2K-Ys',true]
            ]
        ],
        [
            ['img','https://hosting.photobucket.com/images/i/lesaintdumech/adriel15.jpeg']
        ]
    ]
]

//Functions
function constructDates() {
    for (let i=0; i<blogArray.length; i++) {
        blogArray[i][0] = new Date(blogArray[i][0]);
    }
}

function frenchDate(arrayDate) {
    let date = new Date(arrayDate);
    date.setDate(date.getDate()+1);
    let day = dayFR(date.getDate());
    let month = monthFR(date.getMonth());
    return day+month+date.getFullYear();
}

function numericDate(arrayDate) {
    let date = new Date(arrayDate);
    date.setDate(date.getDate()+1);
    let day = date.getDate();
    let month = date.getMonth()+1;
    return month+'-'+day+'-'+date.getFullYear();
}

function dayFR(day) {
    if (day === 1) {
        return 'Premier ';
    } 
    else if (day === 2) {
        return 'Deuxi\u00e8me ';
    }
    else if (day === 3) {
        return 'Troisi\u00e8me ';
    }
    else if (day === 4) {
        return 'Quatri\u00e8me ';
    }
    else if (day === 5) {
        return 'Cinqui\u00e8me ';
    }
    else if (day === 6) {
        return 'Sixi\u00e8me ';
    }
    else if (day === 7) {
        return 'Septi\u00e8me ';
    }
    else if (day === 8) {
        return 'Huiti\u00e8me ';
    }
    else if (day === 9) {
        return 'Neuvi\u00e8me ';
    }
    else if (day === 10) {
        return 'Dix\u00e8me ';
    }
    else if (day === 11) {
        return 'Onzi\u00e8me ';
    }
    else if (day === 12) {
        return 'Douzi\u00e8me ';
    }
    else if (day === 13) {
        return 'Treizi\u00e8me ';
    }
    else if (day === 14) {
        return 'Quatorzi\u00e8me ';
    }
    else if (day === 15) {
        return 'Quinzi\u00e8me ';
    }
    else if (day === 16) {
        return 'Seizi\u00e8me ';
    }
    else if (day === 17) {
        return 'Dix-Septi\u00e8me ';
    }
    else if (day === 18) {
        return 'Dix-Huiti\u00e8me ';
    }
    else if (day === 19) {
        return 'Dix-Neuvi\u00e8me ';
    }
    else if (day === 20) {
        return 'Vingti\u00e8me ';
    }
    else if (day === 21) {
        return 'Vingt-et-Uni\u00e8me ';
    }
    else if (day === 22) {
        return 'Vingt-Deuxi\u00e8me ';
    }
    else if (day === 23) {
        return 'Vingt-Troisi\u00e8me ';
    }
    else if (day === 24) {
        return 'Vingt-Quatri\u00e8me ';
    }
    else if (day === 25) {
        return 'Vingt-Cinqui\u00e8me ';
    }
    else if (day === 26) {
        return 'Vingt-Sixi\u00e8me ';
    }
    else if (day === 27) {
        return 'Vingt-Septi\u00e8me ';
    }
    else if (day === 29) {
        return 'Vingt-Neuvi\u00e8me ';
    }
    else if (day === 30) {
        return 'Trenti\u00e8me ';
    }
    else if (day === 31) {
        return 'Trente-et-Uni\u00e8me ';
    }
    else {
        return 'Vingt-Huiti\u00e8me ';
    }
}

function monthFR(month) {
    if (month === 0) {
        return 'Janvier ';
    }
    else if (month === 1) {
        return 'F\u00e9vrier ';
    }
    else if (month === 2) {
        return 'Mars ';
    }
    else if (month === 3) {
        return 'Avril ';
    }
    else if (month === 4) {
        return 'Mai ';
    }
    else if (month === 5) {
        return 'Juin ';
    }
    else if (month === 6) {
        return 'Juillet ';
    }
    else if (month === 7) {
        return 'Ao\u00fbt ';
    }
    else if (month === 8) {
        return 'Septembre ';
    }
    else if (month === 9) {
        return 'Octobre ';
    }
    else if (month === 10) {
        return 'Novembre ';
    }
    else {
        return 'D\u00e9cembre ';
    }
}

function constructParagraph(paragraphArray,anchorNode) {
    let pNode = document.createElement('p');
    for (let i=0;i<paragraphArray.length;i++) {
        if (Array.isArray(paragraphArray[i])) {
            if (paragraphArray[i][0] === 'img') {
                let pImgNode = document.createElement('img');
                let pImgClass = document.createAttribute('class');
                pImgClass.value = 'img-fluid img-thumbnail mb-3';
                pImgNode.setAttributeNode(pImgClass);
                let pImgSrc = document.createAttribute('src');
                pImgSrc.value = paragraphArray[i][1];
                pImgNode.setAttributeNode(pImgSrc);
                let styleAttribute = document.createAttribute('style');
                styleAttribute.value = 'width:100%;max-width:430px';
                pImgNode.setAttributeNode(styleAttribute);
                pNode.appendChild(pImgNode);

                anchorNode.removeAttribute('class');
                let centerColClass = document.createAttribute('class');
                centerColClass.value = 'col text-center';
                anchorNode.setAttributeNode(centerColClass); 
            }
            else {
                for (let j=0;j<paragraphArray[i].length;j++) {
                    if (Array.isArray(paragraphArray[i][j])) {
                        if (paragraphArray[i][j][0] === 'break') {
                            let lspanNode = document.createElement('span');
                            let lspanText = document.createTextNode(paragraphArray[i][j][1]);
                            lspanNode.appendChild(lspanText);
                            pNode.appendChild(lspanNode);
                            let lbrNode = document.createElement('br');
                            pNode.appendChild(lbrNode);
                            
                        }
                        else {
                            let aNode = document.createElement('a');
                            let hrefAttr = document.createAttribute('href');
                            hrefAttr.value = paragraphArray[i][j][1];
                            aNode.setAttributeNode(hrefAttr);
                            if (paragraphArray[i][j][2]) {
                                let aTargetAttr = document.createAttribute('target');
                                aTargetAttr.value = '_blank';
                                aNode.setAttributeNode(aTargetAttr);
                            }
                            let aText = document.createTextNode(paragraphArray[i][j][0]);
                            aNode.appendChild(aText);
                            pNode.appendChild(aNode);
                        }
                    }
                    else {
                        let pText = document.createTextNode(paragraphArray[i][j]+' ');
                        pNode.appendChild(pText);
                    }
                }
            }
        }
        else {
            let pText = document.createTextNode(paragraphArray[i]+' ');
            pNode.appendChild(pText);
        }
    }
    anchorNode.appendChild(pNode);
} 

function sortArray() {
    for (let i=0;i<blogArray.length;i++) {
        blogArray[i][0] = new Date(blogArray[i][0])
    }

    blogArray.sort((a,b) => b[0] - a[0]);
}

function constructBlogEntry(blogArray,entryN) {
    let titleNode = document.getElementById('title'+entryN);
    let titleText = document.createTextNode(blogArray[1]);
    titleNode.appendChild(titleText);
    
    let dateNode = document.getElementById('date'+entryN);
    let dateText = document.createTextNode(frenchDate(blogArray[0]));
    dateNode.appendChild(dateText); 
    
    if (blogArray[0]) {
        unhide('.imgHD'+entryN)
        let imgNode =  document.getElementById('img'+entryN);
        let imgSrc = document.createAttribute('src');
        imgSrc.value = blogArray[2];
        imgNode.setAttributeNode(imgSrc);
    }

    let paraOneNode = document.getElementById('paraOne'+entryN);
    constructParagraph(blogArray[3],paraOneNode);

    if (blogArray.length>4) {
        let blogNode = document.getElementById('blog'+entryN)
        for (let p=4;p<blogArray.length;p++) {

            let newDLNode = document.createElement('dl');
            let dlClass = document.createAttribute('class');
            dlClass.value = 'row';
            newDLNode.setAttributeNode(dlClass);

            let newDTNode = document.createElement('dt');
            let dtClass = document.createAttribute('class');
            dtClass.value = 'col-12';
            newDTNode.setAttributeNode(dtClass);
            newDLNode.appendChild(newDTNode);
            blogNode.appendChild(newDLNode);

            constructParagraph(blogArray[p],newDTNode);
        }
    }
}

function constructBlog() {
    sortArray();
    
    for (let entry=0;entry<blogArray.length;entry++) {
        if (entry<5) {
            let i = entry+1;
            unhide('.blogHD'+i);

            constructBlogEntry(blogArray[entry],i);
        } 
    }
}

function unhide(ID) {
    const section = document.querySelector(ID);
    section.style.display = 'block';
}

function constructArchiveEntry() {
    //sortArray();

    let startBlogNode = document.getElementById('startBlog');
    for (let i=0;i<blogArray.length;i++) {
        let div1 = document.createElement('div');
        let div1Class = document.createAttribute('class');
        div1Class.value = 'row row-content';
        div1.setAttributeNode(div1Class);

        let div2 = document.createElement('div');
        let div2Class = document.createAttribute('class');
        div2Class.value = 'col';
        div2.setAttributeNode(div2Class);
        div1.appendChild(div2);

        let div3 = document.createElement('div');
        let div3Class = document.createAttribute('class');
        div3Class.value = 'card';
        div3.setAttributeNode(div3Class);
        div2.appendChild(div3);

        let postNumber = i+1;
        let titleNumber = postNumber+'. ';

        let h3Node = document.createElement('h3');
        let h3Class = document.createAttribute('class');
        h3Class.value = 'card-header';
        h3Node.setAttributeNode(h3Class);
        let h3Text = document.createTextNode(titleNumber+blogArray[i][1]);
        h3Node.appendChild(h3Text);
        div3.appendChild(h3Node);

        let div4 = document.createElement('div');
        let div4Class = document.createAttribute('class');
        div4Class.value = 'card-body';
        div4.setAttributeNode(div4Class);
        div3.appendChild(div4);

        let dl1Node = document.createElement('dl');
        let dl1Class = document.createAttribute('class');
        dl1Class.value = 'row';
        dl1Node.setAttributeNode(dl1Class);
        div4.appendChild(dl1Node);

        let dt1Node = document.createElement('dt');
        let dt1Class = document.createAttribute('class')
        dt1Class.value = 'col text-right';
        dt1Node.setAttributeNode(dt1Class);
        let dateFRText = document.createTextNode(frenchDate(blogArray[i][0]));
        dt1Node.appendChild(dateFRText); 
        let breakNode = document.createElement('br');
        dt1Node.appendChild(breakNode);
        let dateNMText = document.createTextNode(numericDate(blogArray[i][0]));
        dt1Node.appendChild(dateNMText); 
        dl1Node.appendChild(dt1Node);

        let dl2Node = document.createElement('dl');
        let dl2Class = document.createAttribute('class');
        dl2Class.value = 'row align-items-center';
        dl2Node.setAttributeNode(dl2Class);
        div4.appendChild(dl2Node);

        if (blogArray[i][2]) {
            let dt3Node = document.createElement('dt');
            let dt3Class = document.createAttribute('class');
            dt3Class.value = 'col order-md-last';
            dt3Node.setAttributeNode(dt3Class);
            dl2Node.appendChild(dt3Node);
            
            let img1Node = document.createElement('img');
            let img1Class = document.createAttribute('class');
            img1Class.value = 'img-fluid img-thumbnail mb-3';
            img1Node.setAttributeNode(img1Class);
            let img1Src = document.createAttribute('src');
            img1Src.value = blogArray[i][2];
            img1Node.setAttributeNode(img1Src);
            dt3Node.appendChild(img1Node);
        }

        let dt2Node = document.createElement('dt');
        let dt2Class = document.createAttribute('class');
        dt2Class.value = 'col-md-7';
        dt2Node.setAttributeNode(dt2Class);
        dl2Node.appendChild(dt2Node);

        constructParagraph(blogArray[i][3],dt2Node);


        if (blogArray[i].length>4) {
                constructParagraph(blogArray[i][4],dt2Node);
        }

        if (blogArray[i].length>5) {
            let dl3Node = document.createElement('dl');
            let dl3Class = document.createAttribute('class');
            dl3Class.value = 'row';
            dl3Node.setAttributeNode(dl3Class);
            div4.appendChild(dl3Node);

            let dt4Node = document.createElement('dt');
            let dt4Class = document.createAttribute('class');
            dt4Class.value = 'col';
            dt4Node.setAttributeNode(dt4Class);
            dl3Node.appendChild(dt4Node);

            for (let p=5;p<blogArray[i].length;p++) {
                constructParagraph(blogArray[i][p],dt4Node);
            }
        }


        startBlogNode.appendChild(div1);
    }

}

function homepageBlog() {
    sortArray();

    //Blog One
    let homeBlog1TitleNode = document.getElementById('homeBlog1Title');
    let homeBlog1TitleText = document.createTextNode(blogArray[0][1]);
    homeBlog1TitleNode.appendChild(homeBlog1TitleText);

    let homeBlog1TextNode = document.getElementById('homeBlog1Text');
    constructParagraph(blogArray[0][3],homeBlog1TextNode);

    let homeBlog1IMGNode = document.getElementById('homeBlog1IMG');
    let homeBlog1SRC = document.createAttribute('src');
    homeBlog1SRC.value = blogArray[0][2];
    homeBlog1IMGNode.setAttributeNode(homeBlog1SRC);

    let homeBlog1Anchor = document.createElement('a');
    let homeBlog1AnchorHref = document.createAttribute('href');
    homeBlog1AnchorHref.value = 'blog.html#card1';
    let homeBlog1AnchorClass = document.createAttribute('class');
    homeBlog1AnchorClass.value = 'd-inline';
    homeBlog1Anchor.setAttributeNode(homeBlog1AnchorHref);
    homeBlog1Anchor.setAttributeNode(homeBlog1AnchorClass);
    homeBlog1TextNode.lastChild.appendChild(homeBlog1Anchor);
    let homeBlog1AnchorText = document.createTextNode('...\u003cKeep Reading\u003e');
    homeBlog1Anchor.appendChild(homeBlog1AnchorText);

    //Blog Two
    let homeBlog2TitleNode = document.getElementById('homeBlog2Title');
    let homeBlog2TitleText = document.createTextNode(blogArray[1][1]);
    homeBlog2TitleNode.appendChild(homeBlog2TitleText);

    let homeBlog2TextNode = document.getElementById('homeBlog2Text');
    constructParagraph(blogArray[1][3],homeBlog2TextNode);

    let homeBlog2IMGNode = document.getElementById('homeBlog2IMG');
    let homeBlog2SRC = document.createAttribute('src');
    homeBlog2SRC.value = blogArray[1][2];
    homeBlog2IMGNode.setAttributeNode(homeBlog2SRC);

    let homeBlog2Anchor = document.createElement('a');
    let homeBlog2AnchorHref = document.createAttribute('href');
    homeBlog2AnchorHref.value = 'blog.html#card2';
    let homeBlog2AnchorClass = document.createAttribute('class');
    homeBlog2AnchorClass.value = 'd-inline';
    homeBlog2Anchor.setAttributeNode(homeBlog2AnchorHref);
    homeBlog2Anchor.setAttributeNode(homeBlog2AnchorClass);
    homeBlog2TextNode.lastChild.appendChild(homeBlog2Anchor);
    let homeBlog2AnchorText = document.createTextNode('...\u003cKeep Reading\u003e');
    homeBlog2Anchor.appendChild(homeBlog2AnchorText);

    //Blog Three
    let homeBlog3TitleNode = document.getElementById('homeBlog3Title');
    let homeBlog3TitleText = document.createTextNode(blogArray[0][1]);
    homeBlog3TitleNode.appendChild(homeBlog3TitleText);

    let homeBlog3TextNode = document.getElementById('homeBlog3Text');
    constructParagraph(blogArray[0][3],homeBlog3TextNode);

    let homeBlog3IMGNode = document.getElementById('homeBlog3IMG');
    let homeBlog3SRC = document.createAttribute('src');
    homeBlog3SRC.value = blogArray[0][2];
    homeBlog3IMGNode.setAttributeNode(homeBlog3SRC);

    let homeBlog3Anchor = document.createElement('a');
    let homeBlog3AnchorHref = document.createAttribute('href');
    homeBlog3AnchorHref.value = 'blog.html#card1';
    let homeBlog3AnchorClass = document.createAttribute('class');
    homeBlog3AnchorClass.value = 'd-inline';
    homeBlog3Anchor.setAttributeNode(homeBlog3AnchorHref);
    homeBlog3Anchor.setAttributeNode(homeBlog3AnchorClass);
    homeBlog3TextNode.lastChild.appendChild(homeBlog3Anchor);
    let homeBlog3AnchorText = document.createTextNode('...\u003cKeep Reading\u003e');
    homeBlog3Anchor.appendChild(homeBlog3AnchorText);
}
