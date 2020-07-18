// Séléction de la balise tbody
const tbody = document.querySelector('.commande');

// Séléction de la balise tfoot
const tfoot = document.querySelector('tfoot');
            
// Fonction d'intégration des élèments dans le tableau de notre panier
function commandeOursEnPeluche() {
    // Récupéré les données du localStorage
    let objLinea = localStorage.getItem("obj");
    let commande = JSON.parse(objLinea);
    
    for(let i = 0; i < commande.length; i++) {

        const myTr = document.createElement('tr');
        const myTd1 = document.createElement('td');
        const myTd2 = document.createElement('td');
        const myTd3 = document.createElement('td');
        const myTd4 = document.createElement('td');
        const myTd5 = document.createElement('td');

        myTd1.textContent = commande[i].name;
        myTd2.textContent = commande[i].colors;
        myTd3.textContent = commande[i].price/100 + " €";
        myTd4.textContent = commande[i].qte;
        myTd5.textContent = (commande[i].price/100) * commande[i].qte + " €";

        myTr.appendChild(myTd1);
        myTr.appendChild(myTd2);
        myTr.appendChild(myTd3);
        myTr.appendChild(myTd4);
        myTr.appendChild(myTd5);

        tbody.appendChild(myTr);

    };
};
commandeOursEnPeluche();