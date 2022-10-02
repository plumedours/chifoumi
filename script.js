let scorePlayer = 0;
let scoreOrdi = 0;
const playerScoreTxt = document.getElementById("scorePlayer");
const ordiScoreTxt = document.getElementById("scoreOrdi");
const playedImgPlayer = document.getElementById("imgPlayer");
const playedImgOrdi = document.getElementById("imgOrdi");
const btnPaper = document.getElementById("imgPaper");
const btnRock = document.getElementById("imgRock");
const btnNewGame = document.getElementById("btnNewGame");
const btnScissors = document.getElementById("imgScissors");
const images = ["./img/rock.png", "./img/paper.png", "./img/scissors.png"];
const btnList = [btnRock, btnPaper, btnScissors];
const musicBG = document.getElementById("music");
const iconOnOff = document.getElementById("iconOnOff");
const soundWin = document.getElementById("soundWin");
const soundLose = document.getElementById("soundLose");
const soundPlop = document.getElementById("soundPlop");
let onOff = false;

let nbrRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(btnList);
// console.log(playedImgPlayer.src);


// Fonction de la logique du jeu
btnList.forEach(function(item, index) {
    let idPlayer;
    let idOrdi;
    item.addEventListener("click", ({currentTarget}) => {
        if(currentTarget == btnPaper) {
            idPlayer = 1;
            // console.log("PAPIER");
            // console.log(item);
            // console.log(index);
        } else if(currentTarget == btnRock) {
            idPlayer = 0;
            // console.log("PIERRE");
            // console.log(item);
            // console.log(index);
        } else if(currentTarget === btnScissors) {
            idPlayer = 2;
            // console.log("CISEAUX");
            // console.log(item);
            // console.log(index);
        }
        playedImgPlayer.src = images[index];
        idOrdi = nbrRandom(0,2);
        playedImgOrdi.src = images[idOrdi];

        if(idPlayer == idOrdi) {
            // console.log("EGALITE");
            soundPlop.play();
        } else if(idPlayer == 0 && idOrdi == 2 || idPlayer == 1 && idOrdi == 0 || idPlayer == 2 && idOrdi == 1) {
            // console.log("JOUEUR GAGNE");
            scorePlayer += 1;
            soundWin.play();
            playerScoreTxt.textContent = scorePlayer;
        } else if(idOrdi == 0 && idPlayer == 2 || idOrdi == 1 && idPlayer == 0 || idOrdi == 2 && idPlayer == 1) {
            // console.log("ORDI GAGNE");
            scoreOrdi += 1;
            soundLose.play();
            ordiScoreTxt.textContent = scoreOrdi;
        }
        console.log(idOrdi, idPlayer);
    })
});

// Bouton New Game reset score
btnNewGame.addEventListener("click", () => {
    scoreOrdi = 0;
    scorePlayer = 0;
    ordiScoreTxt.textContent = scoreOrdi;
    playerScoreTxt.textContent = scorePlayer;
    playedImgOrdi.src = "./img/rpsGif.gif";
    playedImgPlayer.src = "./img/rpsGif.gif";
});

// Fonction play / pause music
iconOnOff.addEventListener("click", () => {
    musicBG.loop = true;
    if(onOff == true) {
        onOff = false;
        iconOnOff.src = "./img/off.svg";
        musicBG.pause();
    } else if(onOff == false) {
        onOff = true;
        iconOnOff.src = "./img/on.svg";
        musicBG.play();
    }
});