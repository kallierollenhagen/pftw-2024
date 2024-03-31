import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Destination } from "./views/Destination";
import './App.css';
import './index.css';
import destinationData from "./assets/destination-list.json"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Destination data={destinationData}/>} />
      </Routes>
    </>
  )
}

export default App