console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let audioElement = new Audio("2.mp3");
let audioElement = new Audio("3.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
audioElement.playbackRate = 1; // Normal speed
let songItems=Array.from(document.getElementsByClassName('songItems'));

let songs = [
    { songName: "We Rolling", filePath: "C:\Users\Prajjit Basu\OneDrive\Desktop\html\1.mp3", coverPath: "cover.jpg" },,
    { songName: "WHO?WHAT?", filePath: "C:\Users\Prajjit Basu\OneDrive\Desktop\html\2.mp3", coverPath: "cover1.jpg" },
    { songName: "52 BARS", filePath: "C:\Users\Prajjit Basu\OneDrive\Desktop\html\3.mp3", coverPath: "cover2.jpg" }
];
songItems.forEach(element ,i=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].filePath;
});

// Handle Play/Pause Click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = "&#x23F8;"; // Pause Icon
    } else {
        audioElement.pause();
        masterPlay.innerHTML = "&#x25B6;"; // Play Icon
    }
});

// Listen to Time Update for Progress Bar
audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Seek Song using Progress Bar
myProgressBar.addEventListener("input", () => {
    let seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

myProgressBar.addEventListener('change',(){
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})