import React, {Component} from 'react';

export default class Cell extends Component {

    constructor(props){
        super(props) // required since we're using this.state
        
        this.state = {
            color: props.value,
        }; // define initial state with a key of 'color' set to the 'value' prop

        // Binding this keyword
        this.changeColor = this.changeColor.bind(this)
    }

    // Update color
    changeColor() {
        this.setState({color: '#333'});
    }

    render() {
        // debugger
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>;
    }
}