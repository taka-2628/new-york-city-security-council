import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import { UserContext } from '../context/user';

import Home from './Home';
import About from './About';
import MapContainer from './MapContainer';
import Contribute from './Contribute';
import LoginSignup from './LoginSignup';
import Community from './Community';
import MyPage from './MyPage';

function App() {
  const { setUser } = useContext(UserContext);

  const [cameras, setCameras] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    Promise.all([
      fetch('/cameras'),
      fetch('/neighborhoods'),
      fetch('/social_media_platforms'),
      
    ]).then(function(responses){
      return Promise.all(responses.map(function (response) {
        return response.json();
      }))
    }).then(function(data){
      const cameras = data[0];
      const neighborhoods = data[1];
      const socialMedia = data[2];

      setCameras(cameras);
      setNeighborhoods(neighborhoods);
      setSocialMedia(socialMedia);
    })
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
            <Route exact path="/contribute" element={
                <Contribute />
              }
            />
            <Route exact path="/community" element={
                <Community />
              }
            />
            <Route exact path="/signin" element={
                <LoginSignup neighborhoods={neighborhoods} socialMedia={socialMedia}/>
              }
            />
            <Route exact path="/profile" element={
                <MyPage />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;