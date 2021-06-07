import React, { Component } from 'react';


const LanguageDetail = ({ language }) => {
    return(
    <div className="row justify-content-center">
        <div className="col-4">
            <button type="button" className="btn btn-secondary">Create a card</button>
        </div>
        <div className="col-4">
        <button type="button" className="btn btn-secondary">View Flashcards</button>
        </div>
    </div>
    )
}

export default LanguageDetail;