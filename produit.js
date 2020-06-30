// Appel de l'Api
const url = "http://localhost:3000/api/teddies";

// Récupération de l'id via l'URL
const hash = window.location.hash;
const idHash = hash.replace('#', '/');
const nomUrl = url + idHash;

// Balise div séléctionner 
const section = document.querySelector('section');

// Requete + fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { //Vérification si c'est bon
            let response = JSON.parse(this.responseText);                   //Récupération des données en JSON.parse
            console.log(response);

            function ours() {

                // Sélection des éléments
                const myH3 = document.querySelector('h3');
                const myImg = document.querySelector('img');
                const myDescription = document.querySelector('p');
                const myListe = document.querySelector('select');
                const myPrice = document.querySelector('.price');
                const mySubmit = document.querySelector('.btn');

                // Intégration des données
                myH3.textContent = response.name;
                myImg.setAttribute("src", response.imageUrl);
                myDescription.textContent = response.description;
                let colors = response.colors;
                for (let i = 0; i < colors.length; i++) {
                    const myOption = document.createElement('option');
                    myOption.textContent = colors[i];
                    myListe.appendChild(myOption);
                };
                myPrice.textContent = response.price/100 + " €";
                
               /* mySubmit.addEventListener('click', function (event) {
                    
                    const objJson = { // Au moment du clique sur le bouton : création d'une constante "order"
                      _id: id.textContent, // qui contient l'id du produit
                      color_ours: colors.value, // la valeur de la lentille selectionnée
                      qte: qte_ours.value // la quantité voulue
                    };
                    
                    const stringObjJson = JSON.stringify(objJson); // On transforme cet objet en chaine de caractère
                    localStorage.setItem("obj", stringObjJson);
                });*/
            };         
            ours();
        };
    };
};
request.open("GET", nomUrl);
request.send();

