//fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

//fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

//fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

//fonction pour diviser
function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

do {
    var choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n")); // parseInt
} while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

let premierNombre;
let deuxiemeNombre;

do {
    premierNombre = Number(prompt("Entrez un premier nombre :"));
    deuxiemeNombre = Number(prompt("Entrez un deuxieme nombre :"));
} while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

try {
    switch(choix) {
        case 1 :
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2 :
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3 :
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4 :
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default :
            throw new error("Une erreur est survenue.")
    }
    alert("Voici le résultat : " + resultat);
}
catch (error) {
    alert(error);
}

