// Je crée la div en JS
// J'ajoute "l'enfant" CARRE au body
// J'ajoute une class à la div "carre"
// je crée toutes les var qui me seront utile:
// Je crée une div
// Je la met "enfant" du body
// je donne une class à "l'enfant"


var maintheme = new Audio('maintheme.mp3');
maintheme.play();

var explosion = new Audio('saut.wav')

var globaldiv = document.createElement("div");
document.body.appendChild(globaldiv);
globaldiv.classList.add("globaldiv");

var timer = document.createElement("div");
document.body.appendChild(timer);
timer.classList.add("timer");

var compteur = document.createElement("div");
document.body.appendChild(compteur);
compteur.classList.add("compteur");


var menu = document.createElement("div");
menu.id = "menu";
var btnnoob = document.createElement("BUTTON");
btnnoob.classList.add("btnnoob");
var btnhard = document.createElement("BUTTON");
btnhard.classList.add("btnhard");
var btnultra = document.createElement("BUTTON");
btnultra.classList.add("btnultra");
var btnaccueil = document.createElement("button");
btnaccueil.classList.add("btnaccueil");

menu.appendChild(btnnoob);
menu.appendChild(btnhard);
menu.appendChild(btnultra);
globaldiv.appendChild(menu);

var noobg = document.createElement("span");
btnnoob.appendChild(noobg).textContent = "L " ;
noobg.classList.add("noobg");
var noobTxt = document.createElement("span");
noobTxt.textContent = "NOOB";
btnnoob.appendChild(noobTxt);
var noobd = document.createElement("span");
btnnoob.appendChild(noobd).textContent = " L" ;
noobd.classList.add("noobd");

var hardg = document.createElement("span");
btnhard.appendChild(hardg).textContent = "e " ;
hardg.classList.add("hardg");
var hardTxt = document.createElement("span");
hardTxt.textContent = "HARD";
btnhard.appendChild(hardTxt);
var hardd = document.createElement("span");
btnhard.appendChild(hardd).textContent = " e" ;
hardd.classList.add("hardd");

var ultrag = document.createElement("span");
btnultra.appendChild(ultrag).textContent = "a " ;
ultrag.classList.add("ultrag");
var ultraTxt = document.createElement("span");
ultraTxt.textContent = "ULTRA";
btnultra.appendChild(ultraTxt);
var ultrad = document.createElement("span");
btnultra.appendChild(ultrad).textContent = " a" ;
ultrad.classList.add("ultrad")

var score = 0;

var timerInterval = null;
var themenoob = new Audio('themenoob.mp3');
themenoob.volume = 0.3;
var themehard = new Audio('themehard.mp3');
var themeultra = new Audio('themeultra.mp3');
var points = new Audio('piece.wav');

btnnoob.addEventListener("click", function () {
    prepare(17, 3, 60);
    let hide = document.querySelector('#menu');
    hide.style.display = "none";
    maintheme.pause();
    themenoob.play();
    clearPlay();
});

btnhard.addEventListener("click", function () {
    prepare(60, 20, 45);
    let hide = document.querySelector('#menu');
    hide.style.display = "none";
    maintheme.pause();
    themehard.play();
    clearPlay()
});

btnultra.addEventListener("click", function () {
    prepare(130, 70, 30);
    let hide = document.querySelector('#menu');
    hide.style.display = "none";
    maintheme.pause();
    themeultra.play();
    clearPlay()
});

var play = document.createElement("div");
globaldiv.appendChild(play).innerHTML = "POUNTA CLICK" + "<br/>" + "Prepare to die !!!";
play.classList.add("play")


function prepare(nbCibles, nbBombes, time) {

    for (var i = 0; i < nbCibles; i++) {

        var target1 = document.createElement("div");
        startPosX = random(5, 95);
        startPosY = random(5, 95);
        endPosX = random(5, 95);
        endPosy = random(5, 95);
        target1.animate([
            { // from
                left: random(5, 95) + "%",
                top: random(5, 95) + "%"

            },
            { // to
                left: random(5, 95) + "%",
                top: random(5, 95) + "%"

            }
        ], { duration: 2500, iterations: Infinity, direction: "alternate" });

        globaldiv.appendChild(target1);
        target1.classList.add("target1");

        var couleurs = ['#FF5733', '#6EFF33', '#FF33E6', '#FFEC33',];
        var couleursRdm = couleurs[Math.floor(Math.random() * couleurs.length)];
        target1.style.backgroundColor = couleursRdm;


        var pos_x = random(5, 95);
        var pos_y = random(5, 95);
        var taille = random(25, 75);

    
        target1.style.width = taille + "px";
        target1.style.height = taille + "px";


        // j'attribue des fonctionnalité à chaque click sur une div
        // - la div en question disparait
        // - les autres div changent de place
        target1.addEventListener("click", function (event) {
            event.target.style.display = "none";
            score++;
            explosion.play();
            explosion.volume = 0.5;
            document.querySelector('.compteur').textContent = "SCORE: " + score;
            var all = document.querySelectorAll(".target1");
            all.forEach(function (a) {
                position(a);
            })
            function position(e) {
                var pos_x = Math.round(Math.random() * 90);
                var pos_y = Math.round(Math.random() * 90);
                e.style.left = pos_x + "%";
                e.style.top = pos_y + "%";
            }
            if (score == nbCibles) {
                var audio = new Audio('ff7win.mp3');
                audio.play();
                clearInterval(timerInterval);
                themenoob.pause();
                themehard.pause();
                themeultra.pause();
                alert("YOU WIN !!!!" + " Tu a réussi le niveau en " + (60 - document.querySelector('.timer').textContent) + " secondes");
                clearAll();

            }
        });
    }

    for (var i = 0; i < nbBombes; i++) {
        var target1 = document.createElement("div");
        globaldiv.appendChild(target1);
        target1.classList.add("target1");
        var black = ['#000000',];
        target1.style.backgroundColor = black;
        var pos_x = random(5, 95);
        var pos_y = random(5, 95);
        target1.style.left = pos_x + "%";
        target1.style.top = pos_y + "%";

        startPosX = random(5, 95);
        startPosY = random(5, 95);
        endPosX = random(5, 95);
        endPosy = random(5, 95);
        target1.animate([
            { // from
                left: random(5, 95) + "%",
                top: random(5, 95) + "%"

            },
            { // to
                left: random(5, 95) + "%",
                top: random(5, 95) + "%"

            }
        ], { duration: 3500, iterations: Infinity, direction: "alternate" });

        target1.addEventListener("click", function (event) {
            event.target.style.display = "none";
            themenoob.pause();
            themehard.pause();
            themeultra.pause();
            var audio = new Audio('deathsong.mp3');
            audio.play();
            alert("YOU LOOSE !!!" + " Ton score est de " + score + " point(s)");
            clearInterval(timerInterval);
            clearAll();
            let none = document.querySelector('.timer');
            none.style.display = "none";
            document.getElementsByClassName('btnaccueil');
            
        });
    }
    timer.textContent = time;
    timerInterval = setInterval(updateTimer, 1000);
}

function clearPlay() {
    var divRestant = document.querySelectorAll(".play")
    for (i = 0; i < divRestant.length; i++) {
        divRestant[i].remove();
    }
}

function clearAll() {
    var divRestant = document.querySelectorAll(".globaldiv div")
    for (i = 0; i < divRestant.length; i++) {
        divRestant[i].remove();
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateTimer() {
    let time = parseInt(document.querySelector('.timer').textContent);
    time--;
    document.querySelector('.timer').textContent = time;
    document.getElementsByClassName(timer).textContent = timer;
    if (time == 0) {
        clearInterval(timerInterval);
        themenoob.pause();
        themehard.pause();
        themeultra.pause();
        var audio = new Audio('deathsong.mp3');
        audio.play();
        alert("TIME'S UP !!!! YOU LOOSE " + "Ton score est de " + score + " point(s)");
        clearAll();
    }
}

// var save = localStorage.setItem("score")
