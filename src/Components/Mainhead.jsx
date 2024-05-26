import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Mainhead = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Mainhead