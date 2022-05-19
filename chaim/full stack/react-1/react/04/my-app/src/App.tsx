import { useState } from 'react';
import Ball from './view/compenents/Ball';
import './view/style/global.scss';
import counter from './view/compenents/counter';

interface App{
  handleClick:Function
}

function App() {
  
  const [counter, setCounter] = useState('0')
  function handleClick(ev: any) {
    const newCounter = counter+1
    setCounter(newCounter)
    console.log(newCounter);
  }

  return (
    <div className="App">
       <button className='Ball'>Ball</button>
        <button className='Ball'onClick={handleClick}>{counter}Ball</button>
    </div>
  );
}

export default App;