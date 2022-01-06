import React from 'react'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

export default function Layout(props) {
  return (
    <div className='layout'>
      <div className='header-nav'>
        <Header />
      <Nav user={props.user} />
      </div>
      <div className='layout-children'>{props.children}</div>
      <Footer />
    </div>
  )
}
