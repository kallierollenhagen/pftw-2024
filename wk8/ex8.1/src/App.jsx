import { useState } from "react";
import './App.css';
import './index.css';

//import images
import alpacasImage from './assets/alpacas.png';
import llamaImage from './assets/llama.png';

function App() {
  const [selected, setSelected] = useState('llama');

  function changeToAlpacas() {
    setSelected('alpacas');
  }

  function changeToLlama() {
    setSelected('llama');
  }

  return (
    <div>
      <h1>Which is your favorite camelid?</h1>
      <div>
        <img src={selected === 'alpacas' ? alpacasImage : llamaImage} alt='cameldid' />
        <div>
          <button onClick={changeToAlpacas}>Alpaca</button>
          <button onClick={changeToLlama}>Llama</button>
        </div>
      </div>
    </div>
  );
}

export default App;