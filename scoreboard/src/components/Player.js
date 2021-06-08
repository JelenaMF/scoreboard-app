import React, {PureComponent} from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const {
      name,
      removePlayer, 
      id, 
      score,
      index, 
      changeScore
    } = this.props;
  console.log(name + ' rendered ')
    return (
      <div className="player">
        <span className="player-name">
          <button 
          className="remove-player" 
          onClick={() => removePlayer(id)}>x
          </button>
          { name }
        </span>
  
        <Counter 
        score={score}
        index={index}
        changeScore={changeScore}
        />
      </div>
    );
  }
  
  }
  export default Player