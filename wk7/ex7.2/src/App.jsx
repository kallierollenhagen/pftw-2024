import "./assets/styles.css";
import "./index.css";

function App() {
  // array of facts as objects
  const llamaFacts = [
    {
      id: 0,
      fact: "I got married on a llama farm.",
      color: ["pink"],
    },
    {
      id: 1,
      fact: "Llamas can run 35 to 40 mph!",
      color: ["blue"],
    },
    {
      id: 2,
      fact: "Llama will spit at you, but only if they're very pissed off.",
      color: ["red"],
    },
    {
      id: 3, 
      fact: "Llamas are one of the six members of the camelid family, which includes camels and alpacas.",
      color: ["green"],
    }
  ]

  return (
    <div>
      <h1>Llamas Facts</h1>
      {
        llamaFacts.map((fact) => {
          return (
            <div key={fact.fact}>
              <h3>{fact.fact}</h3>
              <ul>
                {fact.color.map((color) => {
                return (
                  <li key={color} style={{backgroundColor: color}} />
                  )
                })}
                </ul>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;