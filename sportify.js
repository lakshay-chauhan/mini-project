var count_color=0;
var count_pause_play=0;
var auto_next=0;
var time_played=0;
const home=document.getElementById("home");
home.addEventListener("click",()=>{
    location.reload();
});
const favourite_btn=document.getElementById("hero-left-favourite");
favourite_btn.addEventListener("click",()=>{
 
    document.getElementById("hero-left").style.display = "none";
    document.getElementById("hero-right").style.display = "none";
    document.getElementById("favourite").style.display = "block";
});
const favourite_cls=document.getElementById("favourite-close");
favourite_cls.addEventListener("click",()=>{

    document.getElementById("hero-left").style.display = "flex";
    document.getElementById("hero-right").style.display = "flex";
    document.getElementById("favourite").style.display = "none";
});
const hours_btn=document.getElementById("hero-left-hours");
hours_btn.addEventListener("click",()=>{
   
    document.getElementById("hero-left").style.display = "none";
    document.getElementById("hero-right").style.display = "none";
    document.getElementById("hours").style.display = "block";
});
const hours_cls=document.getElementById("hours-close");
hours_cls.addEventListener("click",()=>{
   
    document.getElementById("hero-left").style.display = "flex";
    document.getElementById("hero-right").style.display = "flex";
    document.getElementById("hours").style.display = "none";
});

const theme=document.getElementById("theme");
theme.addEventListener("click",()=>{
    if(count_color%2==0){
    document.getElementById("hero-left").style.backgroundColor ="#2C2C34";
    document.getElementById("hero-right").style.backgroundColor = "#494850";
    document.getElementById("footer1").style.backgroundColor = "#2C2C34";
    document.getElementById("header1").style.backgroundColor = "#2C2C34";
    document.querySelectorAll("#hero-right-album").forEach(element => {
        element.style.backgroundColor = "#494850"; 
    });
    count_color++;
}
else{
    location.reload();
    count_color++;
}


    
})
const song_list_close=document.getElementById("album-top-close");
song_list_close.addEventListener('click',()=>{
    document.getElementById("hero-left").style.display = "flex";
    document.getElementById("hero-right").style.display = "flex";
    document.getElementById("album").style.display = "none";
});
const song_list=document.getElementById("album");
const album_open=document.querySelectorAll(".hero-right-album");
album_open.forEach(div => {
    div.addEventListener('click', () => {
        document.getElementById("hero-left").style.display = "none";
    document.getElementById("hero-right").style.display = "none";
        song_list.style.display="block";
    });
});


const song = document.querySelectorAll(".album-middle-song");
let audio = new Audio(); 
var name_song=0;
song.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hu");
        name_song=div.getAttribute("name");
        audio.src = `${name_song}.mp3`; // Adjust the path
        playAudio()
    });
});

const play_pause=document.getElementById("masterplay");
play_pause.addEventListener("click",()=>{
    if(count_pause_play==0){
        pauseAudio();
       
    }
    else{
        playAudio();
        
    }
});
const prev_btn=document.getElementById("prev");
prev_btn.addEventListener("click",()=>{
    prev();
});

const next_btn=document.getElementById("next");
next_btn.addEventListener("click",()=>{
    next();
});

const randomNumber = Math.floor(Math.random() * 10) + 1;
const random_song=document.getElementById("random");
random_song.addEventListener("click",()=>{
    audio.src = `${randomNumber}.mp3`;
    playAudio();
});
const auto=document.getElementById("auto");
auto.addEventListener("click",()=>{
    auto_next=~auto_next;
    console.log(auto_next);
});
audio.addEventListener("ended", function () {
    console.log("Audio has finished playing.");
    console.log(auto_next);
    if(auto_next==-1){
    next(); 
    }
});

const favourite_add=document.getElementById("favourite-btn");
favourite_add.addEventListener("click",()=>{
    if(audio.src){
        var audioSrc=audio.src;
        var audioName = audioSrc.substring(audioSrc.lastIndexOf("/") + 1);
        console.log("hi");
        document.getElementById("favourite-middle").innerHTML=`<p>${audioName}</p>`;
    }
})
var time_played_temp;
audio.addEventListener("timeupdate", function () {
     time_played_temp=audio.currentTime;
    document.getElementById("hours-middle-play").innerText=`Played time:  ${ time_played.toFixed(2)}   seconds`
});

const lib=document.getElementById("library");
lib.addEventListener("click",()=>{
    document.getElementById("hero-left-nothidden").style.display="none";
    document.getElementById("hero-left-hidden").style.display="flex";
    document.getElementById("hero-left").style.width="5%";
   
    document.getElementById("hero-right").style.width="95%";
})

const lib_change=document.getElementById("library-change");
lib_change.addEventListener("click",()=>{
    document.getElementById("hero-left-nothidden").style.display="flex";
    document.getElementById("hero-left-hidden").style.display="none";
    document.getElementById("hero-left").style.width="20%";
   
    document.getElementById("hero-right").style.width="80%";
})

let volumeControl = document.getElementById("volumeControl");
volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
});

const radio=document.getElementById("radio-btn");
radio.addEventListener("click",()=>{
    audio.src="radio.mp3";
    playAudio();
})
const search=document.getElementById("search-btn");
search.addEventListener("click",()=>{
    var txt=document.getElementById("text").value;
    let pattern = /^song-(10|[1-9])$/;
    let match = txt.match(pattern);
    if(match){
        alert("audio is present");
    }
    else{
        alert("audio is absent");
    }
})

const reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    time_played=0;
     document.getElementById("hours-middle-play").innerText=`Played time:  ${ time_played.toFixed(2)}   seconds`
})
const progress=document.getElementById("myProgressBar");
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressValue = (currentTime / duration) * 100;
    progress.value = progressValue;
});
progress.addEventListener('input', () => {
    const percentage = progress.value;
    const duration = audio.duration;
    audio.currentTime = (percentage / 100) * duration;
});

function playAudio() {
    audio.play();
    count_pause_play=0;
}

function pauseAudio() {
    audio.pause();
    count_pause_play=1;
    time_played+=time_played_temp;
} 

function next(){
    if(name_song==10){
        name_song=0;
    }
    else{
    name_song++;
    }

    audio.src = `${name_song}.mp3`;
    playAudio();
}
function prev(){
    if(name_song==0){
        name_song=10;
    }
    else{
    name_song--;
    }

    audio.src = `${name_song}.mp3`;
    playAudio();
}
