function App() {
  const myString = "Llama Facts";
  const llamaFact1 = "fact 1";
  const llamaFact2 = "fact 2";
  const llamaFact3 = "fact 3";
  const llamaFact4 = "fact 4";
  const llamaFact5 = "fact 5";
  const llamaConditionTrue = "Llamas ...";
  const llamaConditionFalse = "Llamas ...";
  
  return (
    <div>
      <Header></Header>
      <h1> Llamas</h1>
      <ul>
        <li>{llamaFact1}</li>
        <li>{llamaFact2}</li>
        <li>{llamaFact3}</li>
        <li>{llamaFact4}</li>

      </ul>
    </div>
  )

}

export default App
