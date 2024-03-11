



import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


const App = () => {
  

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
           
          </Routes>
      </div>
      
    </Router>
  );
};

export default App;