import './App.css'
import Home from './screens/Home/Home'
import AboutUs from './screens/AboutUs/AboutUs'
import AllSocks from './screens/AllSocks/AllSocks'
import AddSock from './screens/AddSock/AddSock'
import Sock from './screens/Sock/Sock'
import { Routes, Route } from 'react-router-dom'
import SignUp from './screens/SignUp/SignUp'

function App(props) {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/socks' element={<AllSocks />} />
        <Route path='/new-arrivals' element={<AddSock />} />
        <Route path='/socks/:id' element={<Sock />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
