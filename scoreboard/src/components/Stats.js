import React from 'react';
import {Consumer} from './Context';
const Stats = () => {
    return(
        <Consumer>
            { context => {
                    //gets the total of players to pass to the players table 
                    const totalPlayers = context.length;
                    //iterate over each player getting the score to add the score value
                    //using the reduce method to add up the return value and the current item being processed
                    const totalPoints = context.reduce((total, player) => {
                    //the value of total gets passed to each iteration to produce the final cumulative value
                    //then pass the totalPoints variable to the table with a JSX expression 
                    return total + player.score;
                    }, 0); //the total is initialized to 0
                return(
                    <table className="stats">
                    <tbody>
                        <tr>
                        <td>Players:</td>
                        <td>{totalPlayers}</td>
                        </tr>
                        <tr>
                        <td>Total Points:</td>
                        <td>{totalPoints}</td>
                        </tr>
                    </tbody>
                    </table>
                );
            }}
        </Consumer>
 
    );
}

export default Stats;