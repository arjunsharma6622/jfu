import React from 'react'
import SliderContent from "./SliderContent"
import ImageSlider from "./ImageSlider"
import Arrows from "./Arrows"
import { useState } from 'react'
import "./slider.css"
import { useEffect } from 'react'

const len = ImageSlider.length - 1

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [activeIndex])
  return (
        <div className="slider-container">
            <SliderContent 
            activeIndex = {activeIndex} 
            imageSlider={ImageSlider}
            />
            <Arrows 
            prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)} 
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />


        </div>
  )
}

export default Slider