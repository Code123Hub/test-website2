



import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/About/About';


const App = () => {
  

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
           
          </Routes>
      </div>
      
    </Router>
  );
};

export default App;