import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RootPage() {
  return (
    <div>
        <ul>
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
            
        </ul>
        <Outlet/>

    </div>
  )
}

export default RootPage