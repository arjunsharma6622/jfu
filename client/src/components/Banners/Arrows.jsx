import React from 'react'

const Arrows = ({prevSlide, nextSlide}) => {
  return (
    <div className='arrows'>
        <span className='prev' onClick={prevSlide}>
            ←
        </span>
        <span className='next' onClick={nextSlide}>
            →
        </span>

    </div>
  )
}

export default Arrows