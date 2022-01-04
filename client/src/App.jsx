import './App.css';
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs/AboutUs';
import AllSocks from './screens/AllSocks/AllSocks';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/socks' element={<AllSocks />} />
      </Routes>
    </div>
  );
}

export default App;
