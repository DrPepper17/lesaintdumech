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
        'img/blogphotos/jun6launchdayscreenshotMedium.jpeg',
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
        ['* A Reviews Section where I watch through different seasons of Gundam and summarize/review each episide'],
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
    ]
]

//Functions
function frenchDate(arrayDate) {
    let date = new Date(arrayDate);
    let day = dayFR(date.getDate()+1);
    let month = monthFR(date.getMonth());
    return day+month+date.getFullYear();
}

function numericDate(arrayDate) {
    let date = new Date(arrayDate);
    let day = date.getDate()+1;
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

        let h3Node = document.createElement('h3');
        let h3Class = document.createAttribute('class');
        h3Class.value = 'card-header';
        h3Node.setAttributeNode(h3Class);
        let h3Text = document.createTextNode(blogArray[i][1]);
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
