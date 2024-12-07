import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ShopSection from "./Components/ShopSection";
import FooterSection from "./Components/FooterSection";
import { useClick } from "./Store/useClick";
function App() {
  const click = useClick((state) => state.click);
  return (
    <div className="app-container">
      <NavBar />
      <HeroSection />
      <ShopSection />
      <FooterSection />
    </div>
  );
}

export default App;
