
import { TIMEOUT } from 'dns';
import { nextTick } from 'process';
import React, { useEffect, useState } from 'react';
import { setInterval } from 'timers/promises';

interface snake {
  snake: any
  apple: any
  setInterval: Function
  tick: Function
}
const [snake, setSnake] = useState()
const [apple, setApple] = useState()

useEffect(() => {
  const time = setInterval((function) => {

    setTimeout(() => {
      setSnake
      setApple
    }, 200);
    return function () {
      clearInterval(time)
    }
  } 
  
  export default App;