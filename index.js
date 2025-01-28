const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 }
];

const affichageProduit = document.getElementById("produit");
let produitsAffiches = [...produits];

// Fonction d'affichage des produits
const affichage = (produitsAafficher = produitsAffiches) => {
    const produitHTML = produitsAafficher.map(produit =>
        `<div>
            <p>${produit.nom}</p>
            <p>Prix: ${produit.prix}€</p>
            <button onclick="supprimerProduit(${produit.id})">Supprimer</button>
        </div>`
    );
    affichageProduit.innerHTML = produitHTML;

    afficherPrixTotal(produitsAafficher);
};

// Fonction pour supprimer un produit
const supprimerProduit = (id) => {
    produitsAffiches = produitsAffiches.filter(p => p.id !== id);
    affichage();
};

// Fonction pour calculer le prix total
const afficherPrixTotal = (produitsAafficher) => {
    const prixTotal = produitsAafficher.reduce((total, produit) => total + produit.prix, 0);
    const affichagePrixTotal = document.getElementById("prix-total");
    affichagePrixTotal.innerText = `Prix total : ${prixTotal.toFixed(2)}€`;
};

// Fonction de recherche
const rechercheProduits = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    produitsAffiches = produits.filter(produit =>
        produit.nom.toLowerCase().includes(searchTerm)
    );
    affichage(produitsAffiches);
};

// Fonction reset
const resetRecherche = () => {
    document.getElementById('recherche').value = '';
    produitsAffiches = [...produits];
    affichage();
};

// Ajout des écouteurs d'événements
document.getElementById('recherche').addEventListener('input', rechercheProduits);

// Affichage initial des produits
affichage();