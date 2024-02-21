function App() {
  const happy = true;
  return (
    <div>
      Hi this is a React App that I made!
      {happy ? (<div>I am happy</div>) : (<div>I am not so happy.</div>)}
    </div>
  )
}

export default App
