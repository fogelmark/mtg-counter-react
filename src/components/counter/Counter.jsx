import { useEffect, useState } from 'react'

const Counter = ({value, setClickCounter}) => {

  const [stillClicking, setStillClicking] = useState(false)

  useEffect(() => {
    if (value !== null) {
      setStillClicking(false)
      
      const fadeTimeOut = setTimeout(() => {
        setStillClicking(true)
        setClickCounter(value)
      }, 1500)

      const nullTimeOut = setTimeout(() => {
        setClickCounter(null)
      }, 2000)

      return () => {
        clearTimeout(fadeTimeOut)
        clearTimeout(nullTimeOut)
      }
    }

  }, [value])

  
  return (
    <span className={`counter ${stillClicking ? 'fade-out' : ''}`}>
      {value}
    </span>
  )
  
}

export default Counter