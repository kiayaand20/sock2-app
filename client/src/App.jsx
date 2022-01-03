import './App.css';
import Home from './screens/Home/Home';
import { Routes, Route } from 'react-router-dom'
import SockAdd from './screens/SockAdd/SockAdd';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add-product" element={<SockAdd  /> }/>
      </Routes>
    </div>
  );
}


export default App;
