import whitemanasymbol from '../../assets/images/whitemana-removebg-preview.png'
import bluemanasymbol from '../../assets/images/bluemana-removebg-preview.png'
import blackmanasymbol from '../../assets/images/blackmana-removebg-preview.png'
import redmanasymbol from '../../assets/images/redmana-removebg-preview.png'
import greenmanasymbol from '../../assets/images/greenmana-removebg-preview.png'

const Mana = ({ onColorSelected }) => {

  const pickColor = (e) => {
    const clickedColor = e.target.className;
    const clickedParentElement = e.target.parentElement.parentElement.parentElement.parentElement;
    onColorSelected(clickedColor, clickedParentElement)
  };

  return (
      <div className='mana-symbols-wrapper'>
        <div className='symbols-container'>
          <img src={whitemanasymbol} className='white' onClick={pickColor} />
          <img src={bluemanasymbol} className='blue' onClick={pickColor} />
          <img src={blackmanasymbol} className='black' onClick={pickColor} />
          <img src={redmanasymbol} className='red' onClick={pickColor} />
          <img src={greenmanasymbol} className='green' onClick={pickColor} />
        </div>
      </div>
  )
}

export default Mana