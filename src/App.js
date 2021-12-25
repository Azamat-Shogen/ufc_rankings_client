import React from 'react';
import './App.css';
import Home from "./components/pages/Home";
import NavbarMenu from "./components/nav/NavbarMenu";

function App() {
  return (
      <div className="App">
        <NavbarMenu />
        <Home />
      </div>
  );
}

export default App;
