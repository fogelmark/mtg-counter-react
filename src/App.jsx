import React, { useContext, useState } from 'react';
import Player from './components/player/Player';
import Options from './components/options/Options';
import { CountContext } from './context/countContext';
import colors from './components/colors';

const App = () => {

  const { playerCount, setPlayerCount } = useContext(CountContext)

  let playerMode = ''
  
  switch(playerCount) {
    case 2:
      playerMode = 'mode-2'
      break;
    case 3:
      playerMode = 'mode-3'
      break;
    case 4:
      playerMode = 'mode-4'
      break;
    default:
      break;
  }

  const getPlayerGradientClass = (playerIndex, playerCount) => {
    if (playerCount === 2) {
      return playerIndex === 0 ? 'to-top' : 'to-bottom';
    }
  
    if (playerCount === 3 && playerIndex === 2) {
      return 'to-bottom';
    }
  
    return playerIndex % 2 === 0 ? 'to-left' : 'to-right';
  }

  
  return (
    <div className='main-grid-content'>
        {[...Array(playerCount)].map((_, index) => (
          <Player key={index}
          playerIndex={index}
          className={`player player-${index + 1} ${playerMode} ${getPlayerGradientClass(index, playerCount)}`}
          colors={colors}
          />
        ))}
        <Options setPlayerCount={setPlayerCount} />
    </div>
  );
};

export default App;
