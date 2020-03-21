import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Home/>
          <About/>
      </header>
    </div>
  );
}

export default App;
