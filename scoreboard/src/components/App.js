// React import written like this is used when working with class components
import React, {Component} from 'react'; //this is called main-import
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
  
//using a main-import means the class can be written without React.Component 
class App extends Component {
  state = {
    players: [
      {
        name: "Laura",
        score: 0,
        id: 1
      },
      {
        name: "Aida",
        score: 0,
        id: 2
      },
      {
        name: "Jelena",
        score: 0,
        id: 3
      },
      {
        name: "Kyndal",
        score: 0,
        id: 4
      },
      {
        name: "Kristi",
        score: 0,
        id: 5
      }
    ]
  };
  //player id counter(creating a unique id for the player submitted in the form)
  prevPlayerId = 5;
  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }
//updates players state based on previous state
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
          players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;