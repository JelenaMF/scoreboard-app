import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = (props) => {
  return (
    <React.Fragment>
    <Consumer> 
      {context.map( (player, index) =>
        <Player 
          {...player}
          key={player.id.toString()} 
          index={index}
          changeScore={props.changeScore}
          removePlayer={props.removePlayer}           
        />
      )}
    </Consumer>
    </React.Fragment>
  );
}

PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;