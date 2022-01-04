import React from 'react'
import './AllSocks.css'
import Layout from '../../components/Layout/Layout'
import SockCards from '../../components/SockCards/SockCards'
// import { Link } from 'react-router-dom'

export default function AllSocks(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className='all-socks'>
         <SockCards />
        </div>
      </Layout>
    </div>
  )
}