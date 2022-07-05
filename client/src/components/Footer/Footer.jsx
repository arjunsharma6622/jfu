import React from 'react'
import "./footer.scss"
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div className='footer'>

      <div className="left">
        <Link to={"/about"} className="link">
        <span>About Us</span>
        </Link>
        <span>Contact : +91 9700812822</span>
      </div>

      <div className="center">
        <Link to={"/stores"} className="link">
        <span>Stores</span>
        </Link>
        <span>Brands</span>
      </div>
      
      <div className="right">
        <Link className='lnk' to={"/contact"}>
        <p>Be our Franchise</p>
        </Link>
      </div>


    </div>
  )
}

export default Footer