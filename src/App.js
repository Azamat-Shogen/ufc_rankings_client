import React from 'react';
import './App.css';
import Home from "./components/pages/home/Home";
import NavbarMenu from "./components/nav/NavbarMenu";

function App() {
  return (
      <div className="App">
        <NavbarMenu />
        <h1>ATHLETE RANKINGS</h1>
        <Home />
      </div>
  );
}

export default App;
