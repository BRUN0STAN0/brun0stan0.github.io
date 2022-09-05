
let playStop = false;
var audio = new Audio('music/Audio.mp3');

function playOrStop() {
    if(playStop == false) {
        playStop = true;
        audio.play();
        audio.volume = .1;
    } else {
        playStop = false;
        audio.pause();
        audio.currentTime = 0;
    }
}

/* WRITE  */

let typed = new Typed(".input", {
    strings: ["programming","Web Developer", "UX Design"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});