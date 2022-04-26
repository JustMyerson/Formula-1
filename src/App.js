import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Drivers from "./Components/Drivers/Drivers";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Drivers />
      <Footer />
    </div>
  );
}

export default App;
