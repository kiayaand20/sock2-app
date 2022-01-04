import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import AboutUs from './screens/AboutUs/AboutUs'
import AllSocks from './screens/AllSocks/AllSocks'
import AddSock from './screens/AddSock/AddSock'
import Sock from './screens/Sock/Sock'

function App(props) {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/socks' element={<AllSocks />} />
        <Route path='/new-arrivals' element={<AddSock />} />
        <Route path='/socks/:id' element={<Sock />} />
      </Routes>
    </div>
  )
}

export default App
