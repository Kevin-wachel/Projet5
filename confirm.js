// Récupération du localStorage
const myReponse = JSON.parse(localStorage.getItem("commande"));
const myTotal = JSON.parse(localStorage.getItem("total"));

// Selection 
const nomClient = document.querySelector(".nom_client");
const numCommande = document.querySelector(".num_commande");
const totalCommande = document.querySelector(".total_commande");

// Mise en page 
nomClient.textContent = myReponse.contact.firstName;
numCommande.textContent = "Numéro de commande : " + myReponse.orderId;
totalCommande.textContent = "Total de la commande : " + myTotal + " €";