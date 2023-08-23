import { useContext, useState } from 'react'
import { BsGearFill } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";
import Mana from '../mana/Mana';
import Counter from '../counter/Counter';
import { CountContext } from '../../context/countContext';

const Player = ({ className, colors, playerIndex }) => {

  const { 
    counts, 
    increment, 
    decrement 
  } = useContext(CountContext)

  const count = counts[playerIndex]

  const [clickCounter, setClickCounter] = useState(null)
  const [toggleColorPicker, setToggleColorPicker] = useState(true)
  const [isDecrementPressed, setIsDecrementPressed] = useState(false)
  const [isIncrementPressed, setIsIncrementPressed] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const [selectedColor, setSelectedColor] = useState(null);

  const handleDecrement = () => {
    decrement(playerIndex)
    setClickCounter(clickCounter - 1)
    setIsDecrementPressed(true)
  }
  
  const handleIncrement = () => {
    increment(playerIndex)
    setClickCounter(clickCounter + 1)
    setIsIncrementPressed(true)
  }

  const onMouseUp = () => {
    setTimeout(() => {
      setIsDecrementPressed(false);
      setIsIncrementPressed(false);
    }, 100)
  };

  const colorPicker = () => {
    setToggleColorPicker(!toggleColorPicker)
    setIsClicked(!isClicked)
  }

  const handleColorSelection = (selectedColor, clickedParentElement) => {
    setSelectedColor(selectedColor)
    const color = colors.find(color => color.name === selectedColor)
    clickedParentElement.style.setProperty('--color-1', color.gradient[0])
    clickedParentElement.style.setProperty('--color-2', color.gradient[1])
    clickedParentElement.style.color = color.textColor
    setToggleColorPicker(true)
  }

  return (
    <>
      <div className={`${className}`}>

        <div className={`color-picker ${toggleColorPicker ? 'hidden' : ''}`}>
          <Mana onColorSelected={handleColorSelection} />
        </div>

        <BsGearFill className={`gear-icon ${isClicked ? 'spin' : ''}`} onClick={colorPicker} size={30} />

        <div className={`controls ${!toggleColorPicker ? 'hidden' : ''}`}>
          <div className={`decrement ${isDecrementPressed ? 'selected' : ''}`} 
            onMouseDown={handleDecrement} 
            onMouseUp={onMouseUp}
            >
            <span><BiMinus /></span>
          </div>
          <div className={`health-points`}>
            <span className='life'>{count}</span>
            <Counter value={clickCounter} setClickCounter={setClickCounter} />
          </div>
          <div className={`increment ${isIncrementPressed ? 'selected' : ''}`} 
            onMouseDown={handleIncrement} 
            onMouseUp={onMouseUp}
            >
            <span><BiPlus /></span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Player