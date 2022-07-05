import React from 'react'
import Banners from '../../components/Banners/Banners'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Brands from '../../components/Brands/Brands'
import "./home.scss"



const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Banners />
        <div className="brandHead">
          <h1>Working with the most popular brands</h1>
        </div>
        <Brands />
        <Footer />
    </div>
  )
}

export default Home