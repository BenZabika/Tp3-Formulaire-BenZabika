/* Constants */
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGEX_CODE_POSTAL = /^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$/;

/* Elements */
const refPrenom = document.getElementById("first-name");
const refNom = document.getElementById("last-name");
const refEmail = document.getElementById("email");
const refCodePostal = document.getElementById("postal-code");
const refTelephone = document.getElementById("telephone");

/* Événements */
refPrenom.addEventListener("blur", validerChampTexte);
refNom.addEventListener("blur", validerChampTexte);
refEmail.addEventListener("blur", validerEmail);
refCodePostal.addEventListener("blur", validerCodePostal);
refTelephone.addEventListener("blur", validerChampTexte);

/* IMPORTANT : ajoute id="form-brochure" dans ton <form> */
document.getElementById("form-brochure").addEventListener("submit", empecherFormSubmit);


/* Fonctions */
function estVide(valeur) {
    return valeur.trim().length === 0;
}

function validerChampTexte(e) {
    const champ = e.currentTarget;
    const erreur = document.getElementById(champ.id + "-required");

    if (estVide(champ.value)) {
        erreur.classList.add("visible");
    } else {
        erreur.classList.remove("visible");
    }
}

function validerEmail() {
    const valeur = refEmail.value;
    const erreurRequis = document.getElementById("email-required");
    const erreurInvalide = document.getElementById("email-invalid");

    if (estVide(valeur)) {
        erreurRequis.classList.add("visible");
    } else {
        erreurRequis.classList.remove("visible");

        if (!REGEX_EMAIL.test(valeur)) {
            erreurInvalide.classList.add("visible");
        } else {
            erreurInvalide.classList.remove("visible");
        }
    }
}

function validerCodePostal() {
    const valeur = refCodePostal.value.toUpperCase();
    const erreurRequis = document.getElementById("postal-code-required");
    const erreurInvalide = document.getElementById("postal-code-invalid");

    if (estVide(valeur)) {
        erreurRequis.classList.add("visible");
    } else {
        erreurRequis.classList.remove("visible");

        if (!REGEX_CODE_POSTAL.test(valeur)) {
            erreurInvalide.classList.add("visible");
        } else {
            erreurInvalide.classList.remove("visible");
        }
    }
}

function empecherFormSubmit(e) {
    e.preventDefault();
}