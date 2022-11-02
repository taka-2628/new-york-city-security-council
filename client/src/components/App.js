import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import MapContainer from './MapContainer';
import LoginSignup from './LoginSignup';
import Contribute from './Contribute';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
    .then((r) => r.json())
    .then((data) => setCount(data.count))
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={
                <Home />
              }
            />
            <Route exact path="/about" element={
                <About />
              }
            />
            <Route exact path="/map" element={
                <MapContainer />
              }
            />
            <Route exact path="/signin" element={
                <LoginSignup />
              }
            />
            <Route exact path="/contibute" element={
                <Contribute />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;