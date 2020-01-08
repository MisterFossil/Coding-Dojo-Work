import React from 'react';
// const Button = (props) => {
//     return (
//         <button onClick={props.handleClick}>Clicked {props.count} times</button>
//     );
// }

class ClickCounter extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.clickCount}</button>
            </div>
        );
    }
}
export default ClickCounter;