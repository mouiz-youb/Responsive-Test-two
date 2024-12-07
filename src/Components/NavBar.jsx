import React, { useEffect, useState } from "react";
import "../App.css";
import { useClick } from "../Store/useClick";
import { VscThreeBars } from "react-icons/vsc";
function NavBar() {
  const [resize, setResize] = useState(window.innerWidth);
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);
  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(click);
  return (
    <div className="navbar-section">
      {resize <= 360 ? (
        <div className="nav-bar-mobile">
          <div className="logo-nav">logo</div>
          <div className="icon-nav">
            <VscThreeBars
              onClick={() => setClick((prev) => !prev)}
              className={click ? `white` : `black`}
            />
            {click ? (
              <div className="menu">
                <div className="menu-items">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </div>
                <div className="menu-btn">
                  <button>Sign up</button>
                  <button>Log In </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : resize > 360 && resize <= 600 ? (
        <div className="nav-bar-tablet">
          <div className="logo-section-navbar "></div>
          <div className="link-section"></div>
          <div className="btn-section-auth"></div>
        </div>
      ) : (
        <div className="nav-bar-desktop">big screen </div>
      )}
    </div>
  );
}

export default NavBar;
