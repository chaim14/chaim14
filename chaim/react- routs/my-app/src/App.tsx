

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vanilla from './pages/Vanilla';
import Shokolate from './pages/Shokolate';
import Layout from './pages/Layout';
function App() {
 
  
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/vanilla' element ={<Vanilla/>}></Route>
        <Route path='/shokolate' element ={<Shokolate/>}></Route>
       

      </Routes>
    </BrowserRouter>
         
      
  );
}

export default App;
