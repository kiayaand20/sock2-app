import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import FeaturedCarousel from '../../components/Carousel/Carousel' 

export default function Home(props) {
  return (
    <div>
      <Layout user={props.user}>
      <div className='logo-small'>Funky, Creative, Stylish.</div>

      <div className='home-intro'>Sock² is reinventing the boring sock. 
          Checkout the new, funky designs that 
          add a touch of creativity and inspiration 
          to any outfit.</div>
        
        <h2 className='featured'>Featured Designs</h2>
        
        <div className='carousel'>
          <FeaturedCarousel />
        </div>

        <div className='btn'>
          <Link to={`/socks`}>
            <button className='view-btn' style={{textDecoration: "none"}}>View All Socks</button>
          </Link>
        </div>

       <h2 className='explore'>More to Explore</h2>

       <div className='quizzes'>
        <div className='dot1'>
          <div className='quiz'>
            <a href="https://sayitwithasock.com/blogs/sock/13-random-fun-and-useless-facts-about-socks" style={{  textDecoration: 'none', color: 'black' }}>
              13 Random, Fun, and Useless Facts About Socks 
            </a>
          </div>
        </div>
        
        <div className='dot2'>
          <div className='quiz'>
            <a href="https://www.buzzfeed.com/tough_tootin_baby/which-type-of-socks-matches-your-personality-desi-9m1v9cy5tz" style={{ textDecoration: 'none', color: 'black' }}>
            What type of Socks are you? <br /> Take the Quiz!
            </a>
          </div>
        </div>

        <div className='dot3'>
          <div className='quiz'>
            <a href="https://mysocietysocks.com/blogs/news/how-to-wear-colorful-socks" style={{  textDecoration: 'none', color: 'black' }}>
            Curious how to style colorful socks? Let's find out! </a>
          </div>
          </div>
        </div>
        
        <h2 className='reviews'>Popular Reviews</h2>

        <div className='review-pics'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641399554/project3/Beige_Product_Review_Fashion_Instagram_Post_sapvtw.png"
            alt="review 1" width="450" height="410" className='review1'/>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641399555/project3/Beige_Product_Review_Fashion_Instagram_Post_1_lu1s9x.png"
            alt="review 2"  width="450" height="410" className='review2'/>
        </div>
        <div className='review-pics2'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641400920/project3/Beige_Product_Review_Fashion_Instagram_Post_2_hz3c8v.png"
            alt="review 3" width="450" height="410" className='review3' />
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641400906/project3/Beige_Product_Review_Fashion_Instagram_Post_3_tx6xmt.png"
            alt="review 4"  width="450" height="410" className='review4'/>
        </div>
      </Layout>
    </div>
  )
}
