// Récupéré les données du localStorage
let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);

// Appel de l'Api
const url = "http://localhost:3000/api/teddies";

// Séléction de la balise tbody
const tbody = document.querySelector('.commande');

// Séléction de la balise tfoot
const tfoot = document.querySelector('tfoot');
            
// Fonction d'intégration des élèments dans le tableau de notre panier
function commandeOursEnPeluche() {

    const myTr = document.createElement('tr');
    const myTd1 = document.createElement('td');
    const myTd2 = document.createElement('td');
    const myTd3 = document.createElement('td');
    const myTd4 = document.createElement('td');
    const myTd5 = document.createElement('td');

    myTd1.textContent = objJson.name;
    myTd2.textContent = objJson.colors;
    myTd3.textContent = objJson.price/100 + " €";
    myTd4.textContent = objJson.qte;
    myTd5.textContent = (objJson.price/100) * objJson.qte + " €";

    myTr.appendChild(myTd1);
    myTr.appendChild(myTd2);
    myTr.appendChild(myTd3);
    myTr.appendChild(myTd4);
    myTr.appendChild(myTd5);

    tbody.appendChild(myTr);

};
commandeOursEnPeluche();