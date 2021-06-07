import React from 'react'

function LanguageSelection(props){
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col align-self-center">
                    <h2>Language Selected!</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <button type="button" className="btn btn-secondary">Create a card</button>
                </div>
                <div className="col-4">
                <button type="button" className="btn btn-secondary">View Flashcards</button>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelection;