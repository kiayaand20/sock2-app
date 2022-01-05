import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/user'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'


const SignIn = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button className='signinsubmit' type='submit' className={toggleForm} >
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className='signinsubmit' type='submit'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <Layout>
    <div className='signin-container'>
      <h1 className='welcome'>Welcome Back!</h1>
      <form onSubmit={onSignIn}>
      <h3 className='signinpromptone'>Email:</h3>
      <div className='signinsection'>
      
          <input
          className='signininput'
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
          />
        </div>
        <h3 className='signinprompt'> Password:</h3>
        <div className='signinsection'>
        
          <input
          className='signininput'
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
          />
          </div>
          <Link className='signuptodaylink'to='/sign-up'>
            <h3 className='signuptoday'>Don't have an account? Sign-up today!</h3>
            </Link>
        {renderError()}
      </form>
      
      </div>
      </Layout>
  )
}

export default SignIn