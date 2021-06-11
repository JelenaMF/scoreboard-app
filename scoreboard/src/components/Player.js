import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  }

  render() {
    const {
      name,
      removePlayer, 
      id, 
      score,
      index, 
      changeScore
    } = this.props;
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