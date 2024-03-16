import { useState } from 'react';
import './App.css';
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";

function App() {
const [recs, setRecs] = useState ([
    {
      restaurant: "Hai Hai",
      link: "https://www.haihaimpls.com/",
      location: "Minneapolis, MN",
      about: "Colorful spot serving modern Vietnamese street food & craft cocktails in trendy, lively surrounds.",
      rating: 5,
      image: "./hai-hai.png",
      id: "1"
    },
    {
      restaurant: "Tenant",
      link: "http://tenantmpls.com/",
      location: "Minneapolis, MN",
      about: "Homey, snug eatery for seasonal, prix fixe New American fare, plus wine & beer.",
      rating: 4.5,
      image: "./tenant.png",
      id: "2"
    },
    {
      restaurant: "Herbst",
      link: "https://www.herbstsaintpaul.com/",
      location: "St. Paul, MN",
      about: "Chef-driven, neighborhood restaurant and market.",
      rating: 4,
      image: "./herbst.png",
      id: "3"
    },
    {
      restaurant: "Cardamom",
      link: "https://www.cardamommpls.com/",
      location: "Minneapolis, MN",
      about: "A casual Aegean & Mediterranean restaurant located in the Walker Art Center.",
      rating: 4.5,
      image: "./cardamom.png",
      id: "4"
    },
    {
      restaurant: "The Bungalow Club",
      link: "https://www.thebungalowclubmpls.com//",
      location: "Minneapolis, MN",
      about: "A neighborhood restaurant with a focus on handmade pasta.",
      rating: 5,
      image: "./tbc.png",
      id: "5"
    },
    {
      restaurant: "Spoon and Stable",
      link: "https://www.spoonandstable.com/",
      location: "Minneapolis, MN",
      about: "Hip choice for a French-inspired menu in a cozy, rustic-chic former horse stable. Setting surpasses the food, in our experience.",
      rating: 3.5,
      image: "./spoon-stable.png",
      id: "6"
    },
    {
      restaurant: "Martina",
      link: "https://www.martinarestaurant.com/",
      location: "Minneapolis, MN",
      about: "Modern Argentinian food & craft cocktails served in chic, airy surrounds.",
      rating: 4.5,
      image: "./martina.png",
      id: "7"
    }
  ]);

  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = recs.filter((restaurantRecs) => {
      return restaurantRecs.id !== id  // will not show card with "deleted" id in return array
    });
    setRecs(updatedArray)
  }

  function duplicateCard(id) {
    console.log("duplicate me", id); 
    const matchingRecs = recs.find((restaurantRecs) => {
      return restaurantRecs.id === id
    });
    const updatedDeck = {...matchingRecs, id: nanoid()}
    setRecs([...recs, updatedDeck]);
  }

  return (
    <div className="page">
      {/* masthead goes here */}
      <Masthead />
      <div className="collection">
        {/* restaurant recs map goes here */}
        {/* use ItemCard component in loop */}
        {recs.map((restaurantRecs) => {
          return(
            <ItemCard 
              key={restaurantRecs.id} 
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...restaurantRecs}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
