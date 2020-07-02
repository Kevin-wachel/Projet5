// Récupéré les données du localStorage
let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);
//alert(objJson.id);

// Appel de l'Api
const url = "http://localhost:3000/api/teddies";

// Requete 
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { //Vérification si c'est bon
            let response = JSON.parse(this.responseText);                   //Récupération des données en JSON.parse          
        };
    };
};
request.open("GET", url);
request.send();