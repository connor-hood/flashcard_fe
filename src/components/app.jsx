import React, { Component } from 'react'
import TitleBar from './TitleBar/titleBar'
import CardCreator from './CardCreator/cardCreator'
import './app.css'


class App extends Component {
    constructor(){
        super();
        this.state = {
            languages: [],
            cards: [],
            cardCount: 0
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <button className="jsbutton" onClick={this.handleClick} id="JS">
                    <h2>JS</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <button className="htcsbutton" id="HTML/CSS">
                    <h2>HTML/CSS</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <button className="pybutton" id="Python">
                    <h2>Python</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <button className="sqlbutton" id="SQL">
                    <h2>SQL</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <button className="djangobutton" id="Django">
                    <h2>Django</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <button className="reactbutton" id="React">
                    <h2>React</h2>
                    <h4>{this.state.cardCount}</h4>
                </button>
                <CardCreator />
            </div>
        );
    }
}

export default App;