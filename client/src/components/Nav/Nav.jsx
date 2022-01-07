import { React, useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { width } from '@mui/system'

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

// const Dropdown = () =>
//   <div> style={{ visibility: none }}</div>

export default function Nav({ user }) {

  const [navbarOpen, setNavbarOpen] = useState(false)
  // const handleToggle = () => {
  //   setNavbarOpen(prev => !prev)
  // }


  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/">Sock²</NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          <nav className='navBar'>
            <button onClick={!navbarOpen}>{navbarOpen ? "close" : "open"}</button>
            {alwaysRender}
            {user ? authenticated : unauthenticated}
          </nav>
        </div>

        {/* <div className='curtain'>
          <button onClick={handleToggle}>Menu</button>
          <div className="curtain-links">
            {user && <div className="link-welcome">Welcome, {user.username}!</div>}
            <div show={navbarOpen.state}>
              {alwaysRender}
              {user ? authenticated : unauthenticated}
            </div>
          </div>
        </div> */}

      </div>
    </nav >
  )
}