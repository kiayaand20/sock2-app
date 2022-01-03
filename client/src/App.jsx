import './App.css';
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs/AboutUs';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
