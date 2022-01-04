import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSock, updateSock } from '../../services/socks'
import Layout from '../Layout/Layout'
import './SockEdit.css'


export default function SockEdit() {

  let navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    imgURL: '',
    sock1: '',
    sock2: ''
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getSock(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateSock(id, product)
    navigate(`/socks/${id}`)
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          className='edit-name'
          placeholder='Name'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='edit-price'
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='edit-description'
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='edit-imageURL'
          placeholder='Image Link'
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
          <input
          className='edit-sock1'
          placeholder='sock1'
          value={product.sock1}
          name='sock1'
          required
          onChange={handleChange}
        />
          <input
          className='edit-sock2'
          placeholder='sock2'
          value={product.sock2}
          name='sock2'
          required
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
  
}
