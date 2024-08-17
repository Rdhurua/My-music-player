// Write your javascript here
let defaultImage="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

tracks = [
    
    {
        name: "Bujji Theme",
        artist: "Priya Ragu",
        cover: "https://www.drivespark.com/img/2024/06/kalki-2898-bujji-robot-car-cover-1719471662.jpg",
        source: "./music/Bujji Theme Music.mp3",
    },

    {
        name: "Forever",
        artist: "Gryffin ",
        cover: "./audiopic/Griffyn_(43228990201).jpg",
        source: "./music/Gryffin Elley Duhé - Forever (Official Music Video) [TubeRipper.com].m4a",
    },
    
    {
        name: "Just for a moment",
        artist: "Gryffin ",
        cover: "./audiopic/Griffyn_(43228990201).jpg",
        source: "./music/Gryffin - Just For A Moment ft. Iselin [TubeRipper.com].m4a",
    },

    {
        name: "Jolly O Gymkhana",
        artist: " Vijay, Anirudh Ravichander",
        cover: "https://images.ottplay.com/images/beast-929.jpg",
        source: "./music/Jolly O Gymkhana.mp3",
    },
    {
        name: "Varram",
        artist: "Nakash Aziz ",
        cover: "./audiopic/varram.jpg",
        source: "./music/Vaaram BGM RingtoneBGM Ringtonebgm ringtone 2023Love RingtoneLove Status Ringtone [TubeRipper.com].mp3",
    },
    {
        name: "PEACE",
        artist: "devotion",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpWr7Met3co_CyyFqcyqbDtKlpV94zjmFGw&s",
        source: "./music/PEACE  RINGTONE.mp3",
    },
    {
        name: "Kaththi X Jawan",
        artist: "Fans ",
        cover: "./audiopic/kaithi.jpg",
        source: "./music/Kaththi X Jawan Ahmed Musical Thalapathy Vijay Shah Rukh Khan Anirudh [TubeRipper.com].m4a",
    },
    {
        name: "Ringtone",
        artist: "Unknown",
        cover: "",
        source: "./music/Ringtone.mp3",
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


//to change the playbtn 
let changeIcon = () => {
      console.log("icon is changed");
    if (cntrlIcon.classList.contains("fa-play")) {
        cntrlIcon.classList.remove("fa-play");
        cntrlIcon.classList.add("fa-pause");
        cntrlIcon.classList.add("p");

    }
    else {
        cntrlIcon.classList.remove("fa-pause");
        cntrlIcon.classList.remove("p");

        cntrlIcon.classList.add("fa-play");
    }
}



//displaying 
const music = (t) => {
    img.src = tracks[t].cover?tracks[t].cover:defaultImage;
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
    if(btn=="paused"){

        changeIcon();
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
    if (btn == "running") {
        stop();
        console.log("for the next music")
        btn = "running";
    }
    
     if(btn=="paused"){

         changeIcon();
          btn="running";
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

        if (audio.currentTime ==audio.duration) {
            btn = "paused";
            console.log("hiii");
            changeIcon();
            clearInterval(n);
        }

    }, 1000);

    

}








