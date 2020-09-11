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
            const myTotal = localStorage.setItem("total", total);          
        };      
        totalCommande();
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

function checkInput() {
    // Regex
    let checkString = /^[A-Z]{1}[a-zéèêàçî]/;
    let checkMail = /.+@.+\..+/;
    let checkAdresse = /^[^@&"()!_$*€£`%+=\/;?#]+$/;
  
    // Inputs de l'utilisateur
    let formPrenom = document.querySelector('#firstName').value;
    let formNom = document.querySelector('#lastName').value;
    let formAdresse = document.querySelector('#address').value;
    let formVille = document.querySelector('#city').value;
    let formMail = document.querySelector('#email').value;
  
    // Vérifier les inputs de l'utilisateur
    if (checkString.test(formPrenom) == false) {
        alert("Votre prénom doit commencer par une majuscule suivis de minuscules");
        return false;
    } else if (checkString.test(formNom) == false) {
        alert("Votre nom doit commencer par une majuscule suivis de minuscules");
        return false;
    } else if (checkAdresse.test(formAdresse) == false) {
        alert(
            `Votre adresse contient un ou plusieurs des caractères interdits suivants : ` +
            '[^@&"()!_$*€£`%+=/;?#]' +
            " ou n'est pas renseignée."
        );
        return false;
    } else if (checkString.test(formVille) == false) {
        alert(
            "Le nom de votre ville doit commencer par une majuscule suivis de minuscules"
        );
        return false;
    } else if (checkMail.test(formMail) == false) {
        alert("Votre email doit être au format xxx@yyy.zzz");
        return false;
    } else {
        return true;
    }
};


myButtonSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    if (checkInput() == true) {
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
        let dataPanier = { contact, products };

        // Création de la methode 
        const envoiePost = fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            body: JSON.stringify(dataPanier),    
            headers: {
                "Content-Type": "application/json"
            }       
        });

        // Envoie des données au serveur
        envoiePost.then ( async response => {
            try {
                console.log(response);
                const body = await response.json();
                console.log(body);
                const myReponse = JSON.stringify(body);
                localStorage.setItem("commande", myReponse);
                window.location.href = "confirm.html";
            }catch(e) {
                console.log(e);
            }
        }); 
    }; 
});

    



