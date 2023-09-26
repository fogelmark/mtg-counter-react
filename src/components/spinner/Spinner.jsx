import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner