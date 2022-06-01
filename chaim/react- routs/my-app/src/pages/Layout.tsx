import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='Layout'>
         <Link to= '/home'>Home</Link>
    <Link to= '/shokolate'>Shokolate</Link>
    <Link to= '/vanilla'>Vanilla</Link>
    <Outlet/>
    </div>
  )
}

export default Layout
