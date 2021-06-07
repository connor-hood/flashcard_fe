import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-md-4" style={{paddingTop: 65}}>
                <div className="titlebar-nav">
                    <h1>Coding Flashcards</h1>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;