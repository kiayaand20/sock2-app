import { useState, useEffect } from 'react'
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

  const CARDS = socks.map((sock, index) =>
    index < 120 ? (
      <SockCard
        _id={sock._id}
        name={sock.name}
        imgURL={sock.imgURL}
        price={sock.price}
        description={sock.description}
        sock1={sock.sock1}
        sock2={sock.sock2}
        key={index}
      />
    ) : null
  )

  return (
    <div className='sock-cards'>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default SockCards
