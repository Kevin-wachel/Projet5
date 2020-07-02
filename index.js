// Appel de l'Api
const url = "http://localhost:3000/api/teddies";
// Séléction de la balise ul
const ul = document.querySelector('ul');

//Fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { //Vérification si c'est bon
            let response = JSON.parse(this.responseText);                   //Récupération des données en JSON.parse
            console.log(response);

            function oursEnPeluche() {                                      // Fonction pour intégrer les élèments dans le Html
                for(let i = 0; i < response.length; i++) {                  // La boucle i
                    const myLi = document.createElement('li');              // Création des élèments
                    const myH3 = document.createElement('h3');
                    const myImg = document.createElement('img');
                    const myDescription = document.createElement('p');
                    const myPrice = document.createElement('p');
                    const myLien = document.createElement('a');
                    const myButton = document.createElement('button');
                    myH3.textContent = response[i].name;
                    myImg.setAttribute("src", response[i].imageUrl);
                    myDescription.textContent = response[i].description;
                    myPrice.textContent = response[i].price/100 + " €";
                    myLien.textContent = "Lien vers le produit";
                    myLien.setAttribute("href", "produit.html#" + response[i]._id);
                    myButton.classList.add("btn_lien");

                    myLi.appendChild(myH3);                                 // Intégration des élèments dans la balise li
                    myLi.appendChild(myImg);
                    myLi.appendChild(myDescription);
                    myLi.appendChild(myPrice);
                    myButton.appendChild(myLien);
                    myLi.appendChild(myButton);

                    ul.appendChild(myLi);                                   // Intégration des élèments dans la balise ul
                };
            };
            oursEnPeluche();                                                // Appel de la fonction
            
        };
    };
};
request.open("GET", url);
request.send();

