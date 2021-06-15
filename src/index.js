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
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" date_publication="11/06/2021" rating="4" text="Commentaire de Sam"/>
            </ApprovalCard>

            <ApprovalCard>
                <h1>Attention !</h1>
                <p>Êtes-vous sûre de vouloir supprimer ... ?</p>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Julien" date_publication="12/06/2021" rating="5" text="Commentaire de Julien"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Marie" date_publication="13/06/2021" rating="3" text="Commentaire de Marie"/>
            </ApprovalCard>
        </div>
    );
}

// Afficher à l'écran
ReactDOM.render(
    <App/>, // Sélecteur du projet créé au dessus.
    document.getElementById("root")
);