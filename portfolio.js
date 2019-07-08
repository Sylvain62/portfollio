// Permet de saisir uniquement des chiffres dans un input

function verif_nombre(champ) {
    var chiffres = new RegExp("[0-9]");
    var verif;
    var points = 0;

    for (x = 0; x < champ.value.length; x++) {
        verif = chiffres.test(champ.value.charAt(x));
        if (champ.value.charAt(x) == ".") { points++; }
        if (points > 1) { verif = false; points = 1; }
        if (verif == false) { champ.value = champ.value.substr(0, x) + champ.value.substr(x + 1, champ.value.length - x + 1); x--; }
    }
}

// function click() {
//     var projets = document.querySelectorAll("#milieu a");

//     projets.forEach(projet => {
//         projet.addEventListener("click", function () {
//         projet.classList.toggle("opacite");
//         })
//     });


// }

