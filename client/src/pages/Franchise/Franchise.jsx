import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./franchise.scss"

const Franchise = () => {
  return (
    <div className='franchise'>
        <Navbar />
        <div className="franchiseContainer">
        <div className="info">
            <h1>Be Our Franchise</h1>
            <p className='q'>Want to become a Franchise?</p>
            <p>Buying a franchise can be a good way to get your own business up</p>
            <div className="contact">
            <p>Call Us for more details</p>
            <p>ARVIND SHARMA - 9848023545</p>
            </div>

        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Franchise