import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import AboutUs from './screens/AboutUs/AboutUs'
import AllSocks from './screens/AllSocks/AllSocks'
import AddSock from './screens/AddSock/AddSock'
import SockEdit from './components/Edit/SockEdit'
import Sock from './screens/Sock/Sock'
import SignUp from './screens/SignUp/SignUp'
import { verifyUser } from './services/user'
import SignIn from './screens/SignIn/SignIn'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/about-us' element={<AboutUs user={user}/>} />
        <Route path='/socks' element={<AllSocks user={user}/>} />
        <Route path='/new-arrivals' element={<AddSock user={user}/>} />
        <Route path='/socks/:id/edit' element={<SockEdit/>} />
        <Route path='/socks/:id' element={<Sock user={user}/>} />
        <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
        <Route path='/sign-in' element={<SignIn setUser={setUser}/>}/>
      </Routes>
    </div>
  )
}

export default App
