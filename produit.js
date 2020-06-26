// Appel de l'Api
const url = "http://localhost:3000/api/teddies";

// Récupération de l'id via l'URL
const hash = window.location.hash;
const idHash = hash.replace('#', '/');
const nomUrl = url + idHash;

// Balise div séléctionner 
const div = document.querySelector('div');

// Requete + fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { //Vérification si c'est bon
            let response = JSON.parse(this.responseText);                   //Récupération des données en JSON.parse
            console.log(response);

            function ours() {
                // Création des balises
                const myDiv = document.createElement('div');
                const myH3 = document.createElement('h3');
                const myImg = document.createElement('img');
                const myDescription = document.createElement('p');
                const myForm = document.createElement('form');
                const myListe = document.createElement('select');
                const myPrice = document.createElement('p');
                const myLabel = document.createElement('label');
                const myImput = document.createElement('input');
                const myButton = document.createElement('button');

                // 
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
                myLabel.textContent = "Quantité";
                
                //Création de la fonction pour envoyé au panier le produit
                /*myButton.textContent = "Ajouter au panier";
                myButton.setAttribute("href", "panier.html");
                myForm.appendChild(myButton);
                */

                // Insertion des résultats
                myDiv.appendChild(myH3);                                 
                myDiv.appendChild(myImg);
                myDiv.appendChild(myDescription);
                
                myForm.appendChild(myListe);
                myForm.appendChild(myPrice);
                myLabel.appendChild(myImput);
                myForm.appendChild(myLabel);
                myDiv.appendChild(myForm);

                div.appendChild(myDiv);
            };         
            ours();
        };
    };
};
request.open("GET", nomUrl);
request.send();

