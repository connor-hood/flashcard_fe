import React from 'react';

function Card(props){
    return(
        <div>
            <h2 className="question">{props.card.question}</h2>
        </div>
    )
}

export default Card