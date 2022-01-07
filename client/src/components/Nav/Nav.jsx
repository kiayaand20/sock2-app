import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const alwaysRender = (
  <>
    <NavLink className="nav-link" to='/about-us'> About Us </NavLink>
    <NavLink className="nav-link" to='/socks'>All Socks </NavLink>

  </>

)

const authenticated = (
  <>
    <NavLink className="nav-link" to='/new-arrivals'> New Arrivals </NavLink>
    <NavLink className="nav-link" to='/sign-out'> Sign Out </NavLink>
  </>
)

const unauthenticated = (
  <>
    <NavLink className="nav-link" to='/sign-up'> Sign Up </NavLink>
    <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
  </>
)


export default function Nav({ user }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/">Sock²</NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          {alwaysRender}
          {user ? authenticated : unauthenticated}
        </div>
        {/* mobile - dropdown */}
        <div className="curtain">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          <button className='curtainBtn'> Menu </button>
          <div className='overlay'>
            <button className='overlayBtn'> Close </button>
            <div className='overlay-content'>
              {alwaysRender}
              {user ? authenticated : unauthenticated}
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}