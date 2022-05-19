import React, { useEffect, useState } from 'react';
import './App.css';
import './view/compenents/Form';

function App() {
  const [joke, serJoke] = useState('a juke')
 
return (
    <div className="App">
      <button type="submit" color='red'>button</button>
      <input type="color" />
    
      <header className="App-header">

      </header>
    </div>
  );
}
export default App;
