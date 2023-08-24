import { useContext, useState } from 'react'
import Overlay from '../overlay/Overlay'
import { MdRefresh } from "react-icons/md";
import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { TbSalt } from "react-icons/tb";
import { RiLayout4Fill, RiLayoutGridFill } from "react-icons/ri";
import { CountContext } from '../../context/countContext';

const Options = ({ setPlayerCount }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { setCounts } = useContext(CountContext)

  const options = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = e => {
    setIsMenuOpen(false)
  }

  const chooseTwo = () => {
    setPlayerCount(2)
    closeMenu()
  }
  const chooseThree = () => {
    setPlayerCount(3)
    closeMenu()
  }
  const chooseFour = () => {
    setPlayerCount(4)
    closeMenu()
  }

  const reset = () => {
    setCounts([40, 40, 40, 40])
    closeMenu()
  }

  return (
    <>
      <Overlay isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <div className={`logo-container ${isMenuOpen ? 'hidden' : ''}`} onClick={options}>
      </div>
      <div className={`menu ${isMenuOpen ? 'expand' : ''}`} onClick={closeMenu}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50px'}}>
          <div className="carousel-container">
            <div id="carouselExample" className='carousel slide'>
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                  <MdRefresh size={34} onClick={reset} />
                </div>
                <div className="carousel-item text-center">
                  <PiSquareSplitVerticalFill onClick={chooseTwo} size={34} className='icon' />
                  <RiLayout4Fill onClick={chooseThree} size={34} className='icon' />
                  <RiLayoutGridFill onClick={chooseFour} size={34} className='icon' />
                </div>
                <div className="carousel-item text-center">
                  <TbSalt size={34} className='icon' />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={(e) => { e.stopPropagation(); }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={(e) => { e.stopPropagation(); }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Options