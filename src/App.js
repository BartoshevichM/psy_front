import React from 'react';
import './App.css';
import Landing from './pages/Landing'
import Navigation from './components/Navigation'
import Footer from "./hoc/footer/Footer";

function App() {
    return (
        <div className="App" >
            <Navigation/>
                <Landing />
                {/*<Footer />*/}
        </div>
    );
}

export default App;
