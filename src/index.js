// Importer les bibliothèques
import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Créer du composant
// Approche basée sur la fonction.
const App = () => { // Sélecteur du projet
    return (
        <div className="ui comments">
            <ApprovalCard></ApprovalCard>
            <CommentDetail author="Sam" date_publication="11/06/2021" rating="4" text="Commentaire de Sam"/>
            <CommentDetail author="Julien" date_publication="12/06/2021" rating="5" text="Commentaire de Julien"/>
            <CommentDetail author="Marie" date_publication="13/06/2021" rating="3" text="Commentaire de Marie"/>
        </div>
    );
}

// Afficher à l'écran
ReactDOM.render(
    <App/>, // Sélecteur du projet créé au dessus.
    document.getElementById("root")
);