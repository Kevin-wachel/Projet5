// Séléction de la balise tbody
const tbody = document.querySelector('.commande');

// Séléction de la balise tfoot
const tfoot = document.querySelector('tfoot');

//Déclaration total somme
let total = 0;

// Récupération des données du localStorage
let objLinea = localStorage.getItem("obj");
let commande = JSON.parse(objLinea);

// Fonction d'intégration des élèments dans le tableau de notre panier
function commandeOursEnPeluche() {
    
    for(let i = 0; i < commande.length; i++) {

        // Création des lignes du tableau 
        const myTr = document.createElement('tr');
        const myTd1 = document.createElement('td');
        const myTd2 = document.createElement('td');
        const myTd3 = document.createElement('td');
        const myTd4 = document.createElement('td');
        const myTd5 = document.createElement('td');
        const myDeleteButton = document.createElement('button');
        
        myTd1.textContent = commande[i].name;
        myTd2.textContent = commande[i].colors;
        myTd3.textContent = commande[i].price/100 + " €";
        myTd4.textContent = commande[i].qte;
        myTd5.textContent = (commande[i].price/100) * commande[i].qte + " €";
        myDeleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        myDeleteButton.classList.add('btn_supp');

        myTr.appendChild(myTd1);
        myTr.appendChild(myTd2);
        myTr.appendChild(myTd3);
        myTr.appendChild(myTd4);
        myTr.appendChild(myTd5);
        myTr.appendChild(myDeleteButton);

        tbody.appendChild(myTr);
        
        // Total de la commande
        function totalCommande() {           
            // Récupération du prix des articles
            let value = (commande[i].price/100) * commande[i].qte;
            // Addition des articles
            total = total + value;
            // Ajout du prix total des articles dans le formulaire d'achat
            let totalDeLaCommande = document.querySelector('.total_commande');
            totalDeLaCommande.textContent = total + " €";               
        };      
        totalCommande();
        
        // Supprime un article
        /*myDeleteButton.addEventListener('click', function (event) {
            function deleteItem() {
                localStorage.removeItem(commande.id);              
                window.location.reload();
            };
            deleteItem();
        });       
        myDeleteButton.setAttribute("onclick", "deleteItem()")*/
    };
    
    // Supprime tout les articles
    const myDeleteAllButton = document.querySelector('.btn_alldelete');
    
    myDeleteAllButton.addEventListener('click', function (event) {
        function deleteAllItem() {
            localStorage.removeItem("obj");             
            window.location.reload()
        };
        deleteAllItem();
    });       
    myDeleteAllButton.setAttribute("onclick", "deleteAllItem()")
};
commandeOursEnPeluche();

// Partie envoie des données 

const myButtonSubmit = document.querySelector('.btn');

myButtonSubmit.addEventListener('click', function (event) {
    // Récupération des données saisie par l'utilisateur
    let contact = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        address: document.querySelector('#address').value,
        city: document.querySelector('#city').value,
        email: document.querySelector('#email').value
    };

    // Récupération de la commande
    let products = [];
    for (let i = 0; i < commande.length; i++) {
        products.push(commande[i].id)
    };

    // Ajout des données de contact et produit dans data
    let data = { contact, products };

    // Envoi des données vers l'API
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/teddies/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
});

