import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const greeting = 'Hello, World! 👋'
  const goodbye = '🌍 Goodbye, World 🌍'
  return (
    <>
      <div className="header">
        <h1>{greeting}</h1>
        <h2>Kallie here, finally.</h2>
        </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            # of tries to get your files set up {count}
        </button>
      </div>
    <div>
      <h2>{goodbye}</h2>
    </div>
    </>
  )
}

export default App
