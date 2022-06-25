import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";

import "./App.css";

const App = () => {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  );
};
export default App;
