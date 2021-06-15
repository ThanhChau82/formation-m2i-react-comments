import React from 'react';
//import faker from 'faker';

const CommentDetail = props => {
    console.log(props); // "props" contient les paramètres passés par le composant parent dans 'index.js'
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src="" alt="Avatar de l'auteur"/>                
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">{props.date_publication}</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        {props.rating} Faves
                    </div>
                </div>

                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;