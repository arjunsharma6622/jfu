import React from 'react'

const SliderContent = ({activeIndex, imageSlider}) => {
  return (
    <section>
        {imageSlider.map((slide, index) => (
            <div 
                key={index} 
                className={index === activeIndex ? "slides active" : "inactive"}
            >
                <img src={`./assets/Images/Banners/${slide.url}.jpeg`} alt="" className="slide-image" />

            </div>
        ))}
    </section>
  )
}

export default SliderContent