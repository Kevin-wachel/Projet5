//Appel de l'Api
const url = "http://localhost:3000/api/teddies";
let ul = document.querySelector('ul');

//Fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { //Vérification si c'est bon
            let response = JSON.parse(this.responseText);                   //Récupération des données en JSON.parse
            console.log(response);
            response.forEach(function (response) {                          //Du javascript vers le HTML, en boucle
                let elt = document.getElementById('produit');               //Sélection de l'id produit
                elt.innerHTML += '<li>  </li>';                             //Création du li
                elt.innerHTML += '<p>' + response.name + '</p>';            //Création du nom de l'article
                elt.innerHTML += '<img src="' + response.imageUrl + '"/>';  //Création de l'image
                elt.innerHTML += '<p>' + response.description + '<p>';      //Création de la description
                elt.innerHTML += '<p>' + response.price/100 + ' €</p>';     //Création du prix
                elt.innerHTML += '<a href="produit.html">Page produit</a>'; //Lien vers la page produit
            });
        };
    };
};
request.open("GET", url);
request.send();


