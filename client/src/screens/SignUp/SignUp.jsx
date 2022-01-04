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
      return <button type='submit'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout>
    <div className='form-container'>
      <div className='call-to-action'>
        <h3>Sign-up Today!</h3>
        <p>Create your profile and get access to all our New Arrivals.</p>
      </div>
        <form onSubmit={onSignUp}>
        <label>Username</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
        />
        <label>E-mail</label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
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
