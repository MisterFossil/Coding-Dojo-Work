import React, { Component } from 'react';
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }

    handleClick = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render (){
        const {firstName, lastName, hairColor} = this.props;
        return (<div>
            <fieldset>
                <legend>{lastName}, {firstName}</legend>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick}>Happy Birthday {firstName}!</button>
            </fieldset>
        </div>);
    }
}
export default PersonCard;