import React from 'react'
import { Link } from 'react-router-dom';
const  Home = () => {
  return (
    <div className='blue' >Home
    <Link to= '/about'>About</Link>
    </div>
  )
}

export default  Home