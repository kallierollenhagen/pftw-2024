function App() {
  // array of facts as objects
  const llamaFacts = [
    {
      id: 0,
      fact: "I got married on a llama farm.",
    },
    {
      id: 1,
      fact: "Llamas can run 35 to 40 mph!",
    },
    {
      id: 2,
      fact: "Llama will spit at you, but only if they're very pissed off.",
    },
    {
      id: 3, 
      fact: "Llamas are one of the six members of the camelid family, which includes camels and alpacas.",
    }
  ]
  
  /* mapping the facts into a new aary of JSX noes as arrayDataItems */
    const arrayDataItems = llamaFacts.map(fact =>
      <li key={fact.id}>
      <p>{fact.fact}</p>
      </li>
    )
  
  /* conditions for ternerary */
    const llamaConditionTrue = "Rojo the Llama, a therapy animal based in the Pacific Northwest, is considered Portland's most famous therapy animal.";
    const llamaConditionFalse = "Llamas make very good house pets.";
    const llamaPet = "pet worthiness";
  
  return (
    /* return a list of facts from the dataArray */
    <div>
      <h1>Llamas Facts</h1>
      <ul>
        <li>{arrayDataItems}</li>
        <li>
          {llamaPet !== "pet worthiness" ? (<>{llamaConditionTrue}</>) : (<>{llamaConditionFalse}</>)}
        </li>
        </ul>
    </div>
  )
}
export default App
