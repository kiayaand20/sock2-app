import { useState, useEffect } from 'react'
import './Sock.css'
import Layout from '../../components/Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import {getSock, deleteSock } from '../../services/socks'

export default function Sock(props) {
  const [sock, setSock] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()
  
    useEffect(() => {
      const fetchSock = async () => {
        const sock = await getSock(id)
        setSock(sock)
        setLoaded(true)
      }
      fetchSock()
    }, [id])
  
    if (!isLoaded) {
      return <h1>Loading...</h1>
    }
  
    return (
      <Layout user={props.user}>
        <div className='sock-detail'>
          <img
            className='sock-detail-image'
            src={sock.imgURL}
            alt={sock.name}
          />
          <div className='detail'>
            <div className='sock-name'>{sock.name}</div>
            <div className='price'>{`$${sock.price}`}</div>
            <div className='description'>{sock.description}</div>
            <div className='sock1'>Sock 1: {sock.sock1}</div>
            <div className='sock2'>Sock 2: {sock.sock2}</div>
            <div className='button-container'>
              <Link className='edit-button' to={`/socks/${sock._id}/edit`}>
                Edit
              </Link>
              <Link to={'/socks'}>
              <button
                className='delete-button'
                onClick={() => deleteSock(sock._id)}
              >
                Delete
                </button>
                </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }