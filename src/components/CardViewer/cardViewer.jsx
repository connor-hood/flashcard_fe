import React from 'react';
import '../CardViewer/cardViewer.css'

function CardViewer(props){
    return(
      <div>
          <div className="col-md-4">
                <button onClick={() => props.previousCard()}>&lt;</button>
            </div>
        <div className="col-md-4">
        <div className="flashcard">
            <h2>Question</h2>
            <br></br>
            <h4>Answer</h4>
            </div>
        </div>
        <div className="col-md-4">
                <button onClick={() => props.nextCard()}>&gt;</button>
            </div>
      </div>
    )
}

export default CardViewer;