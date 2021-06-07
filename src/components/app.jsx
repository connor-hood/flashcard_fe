import React, { Component } from 'react'
import TitleBar from './TitleBar/titleBar'
import './app.css'


class App extends Component {
    state = { }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <button className="jsbutton">
                    <h1>JS</h1>
                </button>
                <button className="htcsbutton">
                    <h1>HTML/CSS</h1>
                </button>
                <button className="pybutton">
                    <h1>Python</h1>
                </button>
                <button className="sqlbutton">
                    <h1>SQL</h1>
                </button>
                <button className="djangobutton">
                    <h1>Django</h1>
                </button>
                <button className="reactbutton">
                    <h1>React</h1>
                </button>
            </div>
        );
    }
}

export default App;