import React from 'react';

//set up provider and consumer using createContext giving an object with consumer and provider properties that are also objects 
const ScoreboardContext = React.createContext(); 

//assign provider and consumer to a variable and setting it to scoreboardContext property.
    //export provider and consumer to import them into other modules and components 
export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;


  