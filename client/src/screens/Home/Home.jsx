import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <Layout>
        <h2 className='featured'>Featured Designs</h2>
       
        <div className='featured-imgs'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1640200910/project3/Sock2%20Photos/07a_rpegfu.jpg" alt="icecream-sock" width="300" height="315"/>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1640200926/project3/Sock2%20Photos/12-2_cnoasf.jpg" alt="resonance-sock" width="300" height="315"/>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1640200916/project3/Sock2%20Photos/06B_j6tgf8.jpg" alt="pushit-sock" width="300" height="315"/>
        </div>

        <Link to={`/socks`} className='view-btn'>View All Socks</Link>
         
        <label className='home-intro'>Sock² is reinventing the boring sock. 
          Checkout the new, funky designs that 
          add a touch of creativity and inspiration 
          to any outfit.</label>
        
        <div className='dot1'>
          <div className='quiz1'>
            <a href="https://sayitwithasock.com/blogs/sock/13-random-fun-and-useless-facts-about-socks" style={{  textDecoration: 'none', color: 'black' }}>
              13 Random, Fun, and Useless Facts About Socks 
            </a>
          </div>
        </div>
        
        <div className='dot2'>
          <div className='quiz1'>
            <a href="https://www.buzzfeed.com/tough_tootin_baby/which-type-of-socks-matches-your-personality-desi-9m1v9cy5tz" style={{ textDecoration: 'none', color: 'black' }}>
            What type of Socks are you? <br /> Take the Quiz!
            </a>
          </div>
        </div>

        <div className='dot3'>
          <div className='quiz1'>
            <a href="https://mysocietysocks.com/blogs/news/how-to-wear-colorful-socks" style={{  textDecoration: 'none', color: 'black' }}>
            Curious how to style colorful socks? Let's find out! </a>
          </div>
        </div>

      </Layout>
    </div>
  )
}
