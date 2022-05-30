import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
function App() {
  return ( 
  
     <BrowserRouter>
      {/* the navigation system / the conditiona rendering of routes */}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/about' element ={<About/>}></Route>
       
        

      </Routes>
    </BrowserRouter>
         
      
  );
}

export default App;
