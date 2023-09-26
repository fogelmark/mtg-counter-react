import React, { createContext, useState } from 'react'
import Spinner from '../components/spinner/Spinner';

export const CountContext = createContext()

const CountContextProvider = ({ children }) => {

  const [playerCount, setPlayerCount] = useState(2);
  const initialCounts = [40, 40, 40, 40];
  const [isLoading, setIsLoading] = useState(false)

  const [counts, setCounts] = useState(initialCounts);

  const increment = (playerIndex) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts]
      newCounts[playerIndex] = prevCounts[playerIndex] + 1
      return newCounts
    })
  }

  const decrement = (playerIndex) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts]
      newCounts[playerIndex] = prevCounts[playerIndex] - 1
      return newCounts
    })
  }

  const value = {
    counts,
    setCounts,
    increment,
    decrement,
    playerCount,
    setPlayerCount
  }

  return (
    <CountContext.Provider value={value}>
      {isLoading ? <Spinner /> : children}
    </CountContext.Provider>
  )
}

export default CountContextProvider