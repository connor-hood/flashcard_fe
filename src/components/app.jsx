import React, { Component } from 'react'
import TitleBar from './TitleBar/titleBar'
import CardCreator from './CardCreator/cardCreator'
import LanguageDetail from './LanguageDetail/languageDetail'
import CardViewer from './CardViewer/cardViewer'
import axios from 'axios'
import './app.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            languages: [],
            cards: []
        }
        this.card = {
            question: '',
            answer: '',
            cardNumber: 0
        }
    }

    componentDidMount(){
        console.log("Mount")
        this.getAllCards();
    }

    async getAllCards(){
        let response = await axios.get('http://127.0.0.1:8000/cards/');
        this.setState({
            question: response.data,
            answer: response.data,
        })
    }

    goToNextCard(){
        let tempCardNumber = this.card.cardNumber;
        tempCardNumber++;
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <button className="jsbutton" onClick={this.handleClick} id="JS">
                    <h2>JS</h2>
                    <h4>{this.card.cardNumber}</h4>
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
                <LanguageDetail />
                <CardCreator />
                <CardViewer />
            </div>
        );
    }
}

export default App;