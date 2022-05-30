import { Link } from 'react-router-dom';
import { abort } from 'process'
import React from 'react'

const About = () => {
  return (
    <div className='green'>About
    <Link to= '/home'>Home</Link>
 </div>
  )
}

export default About