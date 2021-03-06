import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSock, updateSock } from '../../services/socks'
import Layout from '../Layout/Layout'
import './SockEdit.css'


export default function SockEdit(props) {

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
    <Layout user={props.user}>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
          <div className='input-section'>
            <label className='label'> Product Name:</label>
            <input
              className='input'
              value={product.name}
              name='name'
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'> Product Price:</label>
            <input
              className='input'
              value={product.price}
              name='price'
              required
              onChange={handleChange}
            />
          </div>

          <div className='input-section'>
            <label className='label'> Product Description:</label>
            <input
              className='input'
              rows={10}
              value={product.description}
              name='description'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'> Image URL:</label>
            <input
              className='input'
              value={product.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'> Sock 1:</label>
            <input
              className='input'
              value={product.sock1}
              name='sock1'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'> Sock 2:</label>
            <input
              className='input'
              value={product.sock2}
              name='sock2'
              required
              onChange={handleChange}
            />
          </div>
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>

  )

}
