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
hyperlink array: ['word(s),'url']
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
            for (let j=0;j<paragraphArray[i].length;j++) {
                if (Array.isArray(paragraphArray[i][j])) {
                    let aNode = document.createElement('a');
                    let hrefAttr = document.createAttribute('href');
                    hrefAttr.value = paragraphArray[i][j][1];
                    aNode.setAttributeNode(hrefAttr);
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

        let p1Node = document.createElement('p');
        constructParagraph(blogArray[i][3],p1Node);
        dt2Node.appendChild(p1Node);


        if (blogArray[i].length>4) {
                let P2Node = document.createElement('p');
                constructParagraph(blogArray[i][4],P2Node);
                dt2Node.appendChild(P2Node);
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
                let newPNode = document.createElement('p');
                constructParagraph(blogArray[i][p],newPNode);
                dt4Node.appendChild(newPNode);
            }
        }


        startBlogNode.appendChild(div1);
    }

}