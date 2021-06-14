// Importer les bibliothèques
import React from 'react';
import ReactDOM from 'react-dom';

// Créer du composant
// Approche basée sur la fonction.
const App = () => { // Sélecteur du projet
    return <div>Comments</div>;
}

// Afficher à l'écran
ReactDOM.render(
    <App/>, // Sélecteur du projet créé au dessus.
    document.getElementById("root")
);