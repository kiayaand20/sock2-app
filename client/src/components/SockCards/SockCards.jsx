import { useState, useEffect } from 'react'
import './SockCards.css'
import SockCard from '../SockCard/SockCard'
import { getSocks } from '../../services/socks'

const SockCards = () => {
  const [socks, setSocks] = useState([])

  useEffect(() => {
    const fetchSocks = async () => {
      const allSocks = await getSocks()
      setSocks(allSocks)
    }
    fetchSocks()
  }, [])

  const CARDS = socks
    .reverse()
    .map((sock, index) =>
      index < 8 ? (
        <SockCard
          _id={sock._id}
          name={sock.name}
          imgURL={sock.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='sock-cards'>
      <div className='latest'>Featured</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default SockCards
