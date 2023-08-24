import React, { useContext, useState } from 'react';
import Player from './components/player/Player';
import Options from './components/options/Options';
import { CountContext } from './context/countContext';

const App = () => {

  const { playerCount, setPlayerCount } = useContext(CountContext)

  const colors = [
    {
      name: 'red',
      gradient: ['#85182A', '#B21E35'],
      textColor: '#fff'
    },
    {
      name: 'blue',
      gradient: ['#0077B6', '#00B4D8'],
      textColor: '#fff'
    },
    {
      name: 'black',
      gradient: ['#343A40', '#6C757D'],
      textColor: '#fff'
    },
    {
      name: 'green',
      gradient: ['#2D6A4F', '#52B788'],
      textColor: '#fff'
    },
    {
      name: 'white',
      gradient: ['#FFF2B2', '#FFFAE5'],
      textColor: '#000'
    },
  ]

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
