import React, {Component} from 'react'; //a stateful component needs to be a class

//define class
class AddPlayerForm extends Component {
    //render the form element
    render() {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;