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
                    <h2>JS</h2>
                </button>
                <button className="htcsbutton">
                    <h2>HTML/CSS</h2>
                </button>
                <button className="pybutton">
                    <h2>Python</h2>
                </button>
                <button className="sqlbutton">
                    <h2>SQL</h2>
                </button>
                <button className="djangobutton">
                    <h2>Django</h2>
                </button>
                <button className="reactbutton">
                    <h2>React</h2>
                </button>
            </div>
        );
    }
}

export default App;