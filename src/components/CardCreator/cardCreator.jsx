import React, { Component } from 'react';

class CardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
         }

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.question);
        console.log(this.state.answer);
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Question:</label>
                            <input type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label>Answer:</label>
                            <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="add" />
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}

export default CardCreator;