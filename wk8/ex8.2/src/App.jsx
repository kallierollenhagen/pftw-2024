import { useState } from 'react'
import './App.css'
import AnimalComponent from './AnimalComponent';

function App() {
  // animal variable, function that allows us to update animal variable, and (useState) allows us to update variable
  const [headline, setHeadline] = useState("List of Animals");

  // array of animals, ability to change array of animals
  const [animal, setAnimal] = useState([
    "Alligator",
    "Alpaca",
    "Beaver",
    "Bird",
    "Bison",
    "Cuttlefish",
    "Duck",
    "Emu",
    "Frog",
    "Gopher",
    "Hen",
    "Inchworm",
  ]);

  // function to delete an animal, a function inside of a function
  function deleteAnimal(animalName) {
    const updatedArray = animal.filter((animal) => {
      return animal !== animalName;
    });
    setAnimal(updatedArray);
  }
  function focusAnimal(animalName) {
    setHeadline(animalName)
  }

  return (
    <>
      <h1>{headline}</h1>
      {animal.map((myAnimal) => {
        return <AnimalComponent 
        key={myAnimal} 
        animalName={myAnimal}
        deleteFn={deleteAnimal}
        focusFn={focusAnimal} />
      })}
    </>
  )
}

export default App
