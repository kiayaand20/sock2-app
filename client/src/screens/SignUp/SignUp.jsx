import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/user'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className='sign-up-btn'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout>
    <div className='form-container'>
      <div className='call-to-action'>
        <p className='sign-up-title'>Sign-up Today!</p>
        <div className='call-to-action-p'>
          <p>Create your user profile and get first access to all new arrivals and style inspiration.</p>
        </div>
        <div className='sign-up-img'>
          <img src="https://res.cloudinary.com/kacloud20/image/upload/v1640200926/project3/Sock2%20Photos/12-2_cnoasf.jpg"
            alt="sock-img" width="315px" height="320px" />
        </div>
          
        </div>
        <form onSubmit={onSignUp} className='form'>
        <label className='label'>Username</label>
          <input
          className='input'
          required
          type='text'
          name='username'
          value={username}
          placeholder='ex: SocksFan420'
          onChange={handleChange}
        />
        <label className='label'>E-mail</label>
          <input
            className='input'
          required
          type='email'
          name='email'
          value={email}
          placeholder='ex: tubesRus@netscape.net'
          onChange={handleChange}
        />
        <label className='label'>Password</label>
          <input
            className='input'
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <label className='label'>Confirm Password</label>
          <input
            className='input'
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      </div>
      </Layout>
  )
}

export default SignUp
