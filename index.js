//Appel de l'Api
const url = "http://localhost:3000/api/teddies";

//Récupération des données en JSON
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
        console.log(response[4]);
    };
};
request.open("GET", url);
request.send();


