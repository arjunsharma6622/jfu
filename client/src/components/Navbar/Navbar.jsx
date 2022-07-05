import React, { useState } from "react";
import "./navbar.scss";
import { Link,useLocation } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="navbar">
      <div className="center">
        <Link to={"/"}>
          <img src="./assets/Images/JFU_Logo.png" alt="" />
        </Link>
      </div>

      <div className="right">
        <div className="home">
          <Link to={"/"} className={splitLocation[1] === "" ? "link active" : "link"}>
            <span>Home</span>
          </Link>
        </div>

        <div className="about">
          <Link to={"/about"} className={splitLocation[1] === "about" ? "link active" : "link"}>
            <span>About Us</span>
          </Link>
        </div>

        <div className="newBorn">
          <div className="newbornIcon">
            <Link to={"/kids"} className={splitLocation[1] === "kids" ? "link active" : "link"}>
              <span>New Born</span>
            </Link>
          </div>
          <div className="options">
            <span>Toys</span>
            <span>Clothes</span>
            <span>Footwear</span>
          </div>
        </div>

        <div className="store">
          <Link to={"/stores"} className={splitLocation[1] === "stores" ? "link active" : "link"}>
            <span>Stores</span>
          </Link>
        </div>

        <div className="contact">
          <Link className={splitLocation[1] === "contact" ? "link active" : "link"} to={"/contact"}>
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="navbar_menu">
        <Menu
          onClick={() => {
            setToggle(true);
          }}
          className="toggle"
        />

        {toggle && (
          <div className="toggle_wrapper">
            <Close
              onClick={() => {
                setToggle(false);
              }}
              className="toggle"
            />

            <div className="toggle_items">
              <div className="home">
                <Link to={"/"} className="link">
                  <span>Home</span>
                </Link>
              </div>

              <div className="about">
                <Link to={"/about"} className="link">
                  <span>About Us</span>
                </Link>
              </div>

              <div className="newBorn">
                <div className="newbornIcon">
                  <Link to={"/kids"} className="link">
                    <span>New Born</span>
                  </Link>
                </div>
                <div className="options">
                  <span>Toys</span>
                  <span>Clothes</span>
                  <span>Footwear</span>
                </div>
              </div>

              <div className="store">
                <Link to={"/stores"} className="link">
                  <span>Stores</span>
                </Link>
              </div>

              <div className="contact">
                <Link className="link" to={"/contact"}>
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
