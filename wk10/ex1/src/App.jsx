import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Llamas } from './views/Llamas';
import { Alpaca } from './views/Alpaca';
import './App.css'

function App() {


  return (
    <>
      {/* Navigation here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Lllamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>
      {/* Routes here, one for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llamas" element={<Llamas />} />
        <Route path="/alpacas" element={<Alpaca />} />
      </Routes>
    </>
  )
}

export default App
