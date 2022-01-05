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
import SignOut from './screens/SignOut/SignOut'
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
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/socks' element={<AllSocks />} />
        <Route path='/new-arrivals' element={<AddSock />} />
        <Route path='/socks/:id/edit' element={<SockEdit/>} />
        <Route path='/socks/:id' element={<Sock />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut setUser={setUser}/>} />
      </Routes>
    </div>
  )
}

export default App
