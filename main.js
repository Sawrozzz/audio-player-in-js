let play = document.getElementById("play");
function music(){
    let audio =new Audio("Clair_De_Lune_-_Aurbanni.mp3")
    audio.play()

}
play.addEventListener("click", music);