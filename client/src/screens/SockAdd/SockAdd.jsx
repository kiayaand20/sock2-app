import { useState } from 'react'
import './SockAdd.css'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { createSock } from '../../services/socks'

const SockAdd = (props) => {

  let navigate = useNavigate()

    const [product, setProduct] = useState({
            name: '',
            price: '',
            description: '',
            imgURL: '',
            sock1: '',
            sock2: ''
    })
    const handleChange = (event) => {
      const { name, value } = event.target
      setProduct({
              ...product,
              [name]: value
      })
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      await createSock(product)
      navigate('/')
  }
  
  
  return (
    <Layout user={props.user}>
      <form onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Name'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-price'
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='input-description'
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='input-imageURL'
          placeholder='Image Link'
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
          <input
          className='input-sock1'
          placeholder='sock1'
          value={product.sock1}
          name='sock1'
          required
          onChange={handleChange}
        />
          <input
          className='input-sock2'
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

export default SockAdd