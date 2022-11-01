import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
                <p>Home</p>
              }
            />
            <Route exact path="/about" element={
                <p>About</p>
              }
            />
            <Route exact path="/Map" element={
                <p>Map</p>
              }
            />
            <Route exact path="/signin" element={
                <p>Signin</p>
              }
            />
            <Route exact path="/contibute" element={
                <p>Contribute</p>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;