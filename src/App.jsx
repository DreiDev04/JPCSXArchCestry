// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* Add more sections and components as needed */}
    </div>
  );
}

export default App;