import React, {Component} from 'react'; //a stateful component needs to be a class

//define class
class AddPlayerForm extends Component {
    //add a component state with a value property set to an empty string
    state = {
        value: ""
    };
    //a change function that will update the value state
    handleValueChange = (e) => {
        this.setState({ value: e.target.value});
    }
    //render the form element
    render() {
        console.log(this.state.value);
        return (
            <form>
            {/* set inputs value property 
            to state to ensure the content 
            in the text field is always in 
            sync with the state*/}
                <input 
                    type="text"   
                    value= {this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
            {/* submit button */}
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;