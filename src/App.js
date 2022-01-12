import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Rankings from "./components/pages/rankings/Rankings";
import NavbarMenu from "./components/nav/NavbarMenu";
import Athletes from "./components/pages/fighters/Athletes";
import Home from "./components/pages/home/Home";

function App() {
  return (
      <div className="App">
        <NavbarMenu />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/athletes/:pageId" element={<Athletes />} />
        {/*<Route path="/athletes/:athleteId" element={<Athletes />} />*/}
        {/*<Route path="/athletes/*" element={<Athletes />} />*/}
       </Routes>
      </div>
  );
}

export default App;
