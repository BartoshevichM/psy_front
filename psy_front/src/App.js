import React from 'react';
import './App.css';
import Landing from './pages/Landing'
import Navigation from './components/Navigation'

function App() {
    return (
        <div className="App">
            <Navigation/>
                <Landing/>
        </div>
    );
}

export default App;
