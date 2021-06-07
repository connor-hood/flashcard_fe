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
            </div>
        );
    }
}

export default App;