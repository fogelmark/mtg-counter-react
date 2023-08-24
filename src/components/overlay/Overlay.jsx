import React from 'react'

const Overlay = ({isMenuOpen, closeMenu}) => {

  return (
    <div className={`overlay ${isMenuOpen ? '' : 'hidden'}`} onClick={closeMenu}></div>
  )
}

export default Overlay