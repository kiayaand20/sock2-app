import './App.css';
// import Layout from './components/Layout/Layout';
import Home from './screens/Home/Home';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <h1>hello</h1>
    </div>
  );
}

export default App;
