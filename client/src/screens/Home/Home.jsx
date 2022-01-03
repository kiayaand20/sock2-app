import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import SockCards from '../../components/SockCards/SockCards'

export default function Home(props) {
  return (
    <div>
      <Layout user={props.user}>
      <div className='home'>
        <SockCards />
      </div>
      </Layout>
    </div>
  )
}
