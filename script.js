// Write your javascript here

tracks = [
    {
        name: "celebration of Varisu",
        artist: "Thaman S",
        cover: "./audiopic/celebration.avif",
        source: "./music/Celebration of Varisu Ringtone [ Download Link ] [TubeRipper.com].m4a",
    },
    {
        name: "Crazy Crazy feeling",
        artist: "Devi Sri Prasad",
        cover: "./audiopic/crazy crazy.webp",
        source: "./music/𝐂𝐑𝐀𝐙𝐘 𝐅𝐄𝐄𝐋𝐈𝐍𝐆 𝐒𝐎𝐔𝐓𝐇 𝐌𝐎𝐕𝐈𝐄 𝐒𝐎𝐍𝐆 𝐑𝐈𝐍𝐆𝐓𝐎𝐍𝐄 𝐓𝐇𝐄 𝐔𝐒𝐄 𝐅𝐎𝐑 𝐌𝐎𝐁𝐈𝐋𝐄 [TubeRipper.com].m4a",
    },
    {
        name: "Jimmiki Ponnu ",
        artist: "Anirudh Ravichander and Jonita Gandhi",
        cover: "./audiopic/jimmiki ponnu.jpg",
        source: "./music/VARISU - Jimikki Ponnu Ringtone [ Download link ] [TubeRipper.com].m4a",
    },
    {
        name: "Varram",
        artist: "Nakash Aziz ",
        cover: "./audiopic/varram.jpg",
        source: "./music/Vaaram BGM RingtoneBGM Ringtonebgm ringtone 2023Love RingtoneLove Status Ringtone [TubeRipper.com].mp3",
    },
    {
        name: "Believe in yourself",
        artist: "A.R. Rahman",
        cover: "./audiopic/believe.png",
        source: "./music/Believe in You A R Rahman Motivational video GV Mediaworks [TubeRipper.com].m4a",
    },
    {
        name: "Kaththi X Jawan",
        artist: "Fans ",
        cover: "./audiopic/kaithi.jpg",
        source: "./music/Kaththi X Jawan Ahmed Musical Thalapathy Vijay Shah Rukh Khan Anirudh [TubeRipper.com].m4a",
    },

];


let len = tracks.length;





let playbtn = document.getElementById("btn1");
let prev = document.querySelector(".prev");
let next = document.querySelector(".skip-forward");



let cntrlIcon = document.getElementById("cntrlIcon");

let img = document.querySelector("img");
let title = document.querySelector(".audio-title");
let singer = document.querySelector(".audio-singer");

let curTime = document.querySelector(".current-time");
let duration = document.querySelector(".duration");
let bar2 = document.querySelector(".bar2");
let display = document.querySelector("#display");


let btn = "paused";
let p;
let q;
let m;//for the set interval


let i = 0;
let audio = new Audio(tracks[i].source); //initially accessed


let changeIcon = () => {
    if (cntrlIcon.classList.contains("fa-play")) {
        cntrlIcon.classList.remove("fa-play");
        cntrlIcon.classList.add("fa-pause");
    }
    else {
        cntrlIcon.classList.remove("fa-pause");
        cntrlIcon.classList.add("fa-play");
    }
}



//displaying 
const music = (t) => {
    img.src = tracks[t].cover;
    title.innerText = tracks[t].name;
    singer.innerText = tracks[t].artist;


}



const stop = () => {
    audio.pause();
    console.log("music is stopped");
    btn = "paused";
}



playbtn.addEventListener("click", () => {
   changeIcon();
    music(i);
    q = audio.duration;
    handleDur(audio);
    timeStatus();
    if (btn == "paused") {
        audio.play();
        console.log("music is started");
        btn = "running";

    }
    else {
        stop();
        console.log("it is playbtn");
    }
});



//for the prev button working 
prev.addEventListener("click", () => {

    if (btn == "running") {
        stop();
        console.log("for the prev music");
        btn = "running";
    }



    if (i == 0) {
        i = len - 1;
        audio = new Audio(tracks[i].source);
        q = audio.duration;
        music(i);

        m = setInterval(() => {
            console.log("hello rinku");
            handleDur(audio);
            clearInterval(m);
        }, 500);

        audio.play();
        btn = "running";
        timeStatus();
    }
    else {
        i--;
        audio = new Audio(tracks[i].source);
        music(i);
        q = audio.duration;
        m = setInterval(() => {
            console.log("hello rinku");
            handleDur(audio);
            clearInterval(m);
        }, 500);
        audio.play();
        btn = "running"
        timeStatus();
        console.log(p);
    }

});

//for the next buttom function
next.addEventListener("click", async () => {
    changeIcon();
    if (btn == "running") {
        stop();
        console.log("for the next music")
        btn = "running";
    }
    

    i++; //increment in ith value


    if (i == len) {
        i = 0;
    }
    audio = new Audio(tracks[i].source);
    q = audio.duration;
    music(i);//displaying artist song pic

    const time = setInterval(() => {
        // console.log("rinku")
        handleDur(audio);
        clearInterval(time);

    }, 100);
    audio.play();
    timeStatus();

});


//for handling the audio.duration
const handleDur = (song) => {
    if (song.duration > 60) {
        
        duration.innerText = "0" + parseInt(parseInt(song.duration) / 60) + ":" + parseInt((parseInt(song.duration) % 60) / 10) + parseInt((parseInt(song.duration) % 60) % 10);
        p = duration.innerText;

    }
    else {
        duration.innerText = "00:" + parseInt(song.duration);
        p = duration.innerText;
    }
}





const range = (curr) => {

    bar2.value = 0;
    bar2.max = q;


    bar2.value = curr;
    // display.innerText = bar2.value;
}



//for tracking the current time and displaying the data
const timeStatus = () => {
    console.log(duration.innerText);

    let n = setInterval(() => {


        p = duration.innerText;

        if (parseInt(audio.currentTime) > 60) {

            curTime.innerText = "0" + parseInt(parseInt(audio.currentTime) / 60) + ":" + parseInt((parseInt(audio.currentTime) % 60) / 10) + parseInt((parseInt(audio.currentTime) % 60) % 10);
            //   console.log(curTime.innerText);
            range(parseInt(audio.currentTime));
        }

        else {

            curTime.innerText = "00:" + parseInt((parseInt(audio.currentTime)) / 10) + (parseInt(audio.currentTime)) % 10;

            range(parseInt(audio.currentTime));


        }

        if (p == curTime.innerText) {
            btn = "paused";
            console.log("hiii");
            changeIcon();
            clearInterval(n);
        }

    }, 1000);

}








