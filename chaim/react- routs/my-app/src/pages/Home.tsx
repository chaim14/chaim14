import React from 'react'
import { Link } from 'react-router-dom';
const  Home = () => {
  return (
    <div className='blue' >Home
     <Link to= '/shokolate'>Shokolate</Link>
    <Link to= '/vanilla'>Vanilla</Link>
    </div>
  )
}

export default  Home