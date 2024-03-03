
import "./index.css";
import "./components/camelid.css";
import Camelid from "./components/Camelid";

// import images
import imageLlama from './assets/baby-llama.jpeg';
import imageAlpaca from './assets/alpaca-turtleneck.jpeg';

// array of camelid facts

function App() {
  const camelidsObjects = [
    {
      name: "Llama",
      fact: "Baby llamas are called crias, as are baby alpacas.",
      img: <img src={imageLlama} alt="baby llama" />,
    },
    {
      name: "Alpaca",
      fact: "Turns out alpacas look great in turtlenecks.",
      img: <img src={imageAlpaca} alt="alpaca in turtleneck" />,
    }
  ]
// pass parent component to child props
  return (
    <div>
      <h1>Camelid Facts</h1>
      <Camelid 
        name={camelidsObjects[0].name} 
        fact={camelidsObjects[0].fact} 
        img={camelidsObjects[0].img} 
      />
      <Camelid 
        name={camelidsObjects[1].name} 
        fact={camelidsObjects[1].fact} 
        img={camelidsObjects[1].img} 
      />
    </div>
  )
}

export default App;