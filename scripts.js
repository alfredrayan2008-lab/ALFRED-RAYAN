// =============================
// ALFRED RAYAN - SCRIPT
// =============================

// Numéro WhatsApp
const numeroWhatsApp = "237652726390";

// =============================
// COMMANDE WHATSAPP
// =============================

function commanderProduit(nomProduit, prixProduit) {

    let message =
`Bonjour ALFRED RAYAN,

Je souhaite commander :

🛍 Produit : ${nomProduit}
💰 Prix : ${prixProduit}

Nom : alfred rayan
Ville : douala
Adresse : leeyor57@gmail.com

Merci.`;

    let url =
`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// =============================
// MESSAGE DE BIENVENUE
// =============================

window.addEventListener("load", () => {

    afficherNotification(
        "Bienvenue chez ALFRED RAYAN ✨"
    );

});

// =============================
// NOTIFICATIONS
// =============================

function afficherNotification(message) {

    const notif = document.createElement("div");

    notif.innerText = message;

    notif.style.position = "fixed";
    notif.style.top = "20px";
    notif.style.right = "20px";
    notif.style.background = "gold";
    notif.style.color = "black";
    notif.style.padding = "15px";
    notif.style.borderRadius = "10px";
    notif.style.fontWeight = "bold";
    notif.style.zIndex = "9999";

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// =============================
// ANIMATION PRODUITS
// =============================

const produits =
document.querySelectorAll(".produit");

produits.forEach((produit) => {

    produit.addEventListener("mouseenter", () => {
        produit.style.transform =
        "translateY(-10px)";
    });

    produit.addEventListener("mouseleave", () => {
        produit.style.transform =
        "translateY(0)";
    });

});

// =============================
// BOUTON RETOUR EN HAUT
// =============================

const btnTop =
document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.borderRadius = "50%";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";
btnTop.style.cursor = "pointer";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =============================
// COMPTEUR PANIER
// =============================

let nombreProduits = 0;

function ajouterAuPanier() {

    nombreProduits++;

    let compteur =
    document.getElementById("compteur-panier");

    if(compteur){
        compteur.innerText = nombreProduits;
    }

}

// =============================
// RECHERCHE PRODUITS
// =============================

function rechercherProduit() {

    let input =
    document.getElementById("recherche");

    if(!input) return;

    let filtre =
    input.value.toUpperCase();

    let produits =
    document.querySelectorAll(".produit");

    produits.forEach((produit) => {

        let titre =
        produit.querySelector("h3");

        if(!titre) return;

        let texte =
        titre.innerText.toUpperCase();

        if (texte.indexOf(filtre) > -1) {
            produit.style.display = "";
        } else {
            produit.style.display = "none";
        }

    });

}

// =============================
// APPARITION AU SCROLL
// =============================

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

});

document
.querySelectorAll(".produit")
.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform =
    "translateY(40px)";
    element.style.transition =
    "0.8s";

    observer.observe(element);

});

// =============================
// DATE AUTOMATIQUE FOOTER
// =============================

const annee =
new Date().getFullYear();

const footerDate =
document.getElementById("annee");

if(footerDate){
    footerDate.innerText = annee;
}
