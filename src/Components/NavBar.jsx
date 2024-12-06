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
  return (
    <div className="navbar-section">
      {resize <= 360 ? (
        <div className="nav-bar-mobile"></div>
      ) : resize > 360 && resize < 600 ? (
        <div className="nav-bar-tablet"></div>
      ) : (
        <div className="nav-bar-desktop"></div>
      )}
    </div>
  );
}

export default NavBar;
