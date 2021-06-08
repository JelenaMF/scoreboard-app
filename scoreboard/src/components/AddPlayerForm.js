import React, { Component } from 'react';

class AddPlayerForm extends Component {

  playerInput = React.createRef();

  handleSubmit = (e) => {
    const {addPlayer} = this.props;
    e.preventDefault(); //with out this the app state can be lost 
    addPlayer(this.playerInput.current.value); //call the function that's going to be passed using props.
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          ref={this.playerInput}
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