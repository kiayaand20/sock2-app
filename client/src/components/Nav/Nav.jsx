import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const alwaysRender = (
  <>
    <NavLink className="nav-link" to='/about-us'>About Us</NavLink>
    <NavLink className="nav-link" to='/socks'>All Socks</NavLink>

  </>

)

const authenticated = (
  <>
    <NavLink className="nav-link" to='/new-arrivals'>New Arrivals</NavLink>
    <NavLink className="nav-link" to='/sign-out'>Sign Out</NavLink>
  </>
)




export default function Nav() {
  return (
    <div>
      <h1>nav</h1>
    </div>
  )
}
