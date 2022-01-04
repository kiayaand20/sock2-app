import './App.css'
import Home from './screens/Home/Home'
import AboutUs from './screens/AboutUs/AboutUs'
import AllSocks from './screens/AllSocks/AllSocks'
import AddSock from './screens/AddSock/AddSock'
import { Routes, Route } from 'react-router-dom'
import SockEdit from './components/Edit/SockEdit'
import Sock from './screens/Sock/Sock'

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/socks' element={<AllSocks />} />
        <Route path='/new-arrivals' element={<AddSock />} />
        <Route path='/socks/${sock._id}/edit' element={<SockEdit />} />
        <Route path='/socks/:id' element={<Sock/>} />
      </Routes>
    </div>
  )
}

export default App
