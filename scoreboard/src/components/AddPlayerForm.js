import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault(); //with out this the app state can be lost 
    this.props.addPlayer(this.state.value); //call the function that's going to be passed using props.
    this.setState({ value: '' }); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
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