import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./aboutus.scss"


const AboutUs = () => {
  return (
    <div className='aboutus'>
      <Navbar />
      <div className="aboutContainer">
        <h1>About Us</h1>


      <div className="info">
        <p><span>JUST FOR U</span> - A premium kids store located in <span>51</span> places for Toddlers, Infant products, Clothing range for boys, girls and maternity wear.</p>

        <p>It has a range of diversified Stuffs starting from traditional wears, designer wears, formal wears, toys, articles and all utilities for children’s of all age groups. It is one of the exemplary stores which caters to all kinds of requirements under one roof and can be ideal for kids shopping. The store has a great appeal with a many loads of stuff for kids & new born.</p>
        </div>

        <img src="http://justforu.in/image/catalog/1%2031aug/PARTNERS.jpg" alt="" />

      </div>
      <Footer />
    </div>
  )
}

export default AboutUs