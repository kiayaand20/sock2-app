import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import FeaturedCarousel from '../../components/Carousel/Carousel' 
import FeaturedCarousel2 from '../../components/Carousel2/Carousel2' 
import FeaturedCarousel3 from '../../components/Carousel3/Carousel3' 

export default function Home(props) {
  return (
    <div className='home-div'>
      <Layout user={props.user}>
      <div className='logo-small'>Funky, Creative, Stylish.</div>

      <div className='home-intro'>Sock² is reinventing the boring sock. 
          Checkout the new, funky designs that 
          add a touch of creativity and inspiration 
          to any outfit.</div>
        
        <h2 className='featured'>Featured Designs</h2>
        
        <div className='carousel'>
          <div className='carousel1'>
            <FeaturedCarousel /> 
          </div>
            <FeaturedCarousel2 />
          <div className='carousel3'>
            <FeaturedCarousel3 /> 
          </div>
        </div>

        <div className='btn'>
          <Link to={`/socks`}>
            <button className='view-btn' style={{textDecoration: "none"}}>View All Socks</button>
          </Link>
        </div>

       <h2 className='explore'>More to Explore</h2>

      <div className='quizzes'>

        <a href="https://sayitwithasock.com/blogs/sock/13-random-fun-and-useless-facts-about-socks" style={{  textDecoration: 'none', color: 'black' }}> 
          <div className='dot1'>
            <div className='quiz'>
              13 Random, Fun, and Useless Facts About Socks 
            </div>
          </div>
        </a>
        
        <a href="https://www.buzzfeed.com/tough_tootin_baby/which-type-of-socks-matches-your-personality-desi-9m1v9cy5tz" style={{ textDecoration: 'none', color: 'black' }}>
          <div className='dot2'>
            <div className='quiz'>
              What type of Socks are you? <br /> Take the Quiz!
            </div>
          </div>
        </a>

        <a href="https://mysocietysocks.com/blogs/news/how-to-wear-colorful-socks" style={{  textDecoration: 'none', color: 'black' }}>
          <div className='dot3'>
            <div className='quiz'>
              Curious how to style colorful socks? Let's find out! 
            </div>
          </div>
        </a>
          
      </div>

        <h2 className='reviews'>Popular Reviews</h2>

        <div className='review-pics'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641399554/project3/Beige_Product_Review_Fashion_Instagram_Post_sapvtw.png"
            alt="review 1" width="450" height="410px" className='review1'/>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641399555/project3/Beige_Product_Review_Fashion_Instagram_Post_1_lu1s9x.png"
            alt="review 2"  width="450" height="410px" className='review2'/>
        </div>
        <div className='review-pics2'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641400920/project3/Beige_Product_Review_Fashion_Instagram_Post_2_hz3c8v.png"
            alt="review 3" width="450" height="410px" className='review3' />
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1641403320/project3/Beige_Product_Review_Fashion_Instagram_Post_4_yjmhpu.png"
            alt="review 4" width="450" height="410px"  className='review4'/>
        </div>
      </Layout>
    </div>
  )
}
