import './App.css'
import { RestaurantRow } from './RestaurantRow';
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap')
</style>

function App() {

  const restaurantRecs = [
    {
      name: "Hai Hai",
      link: "https://www.haihaimpls.com/",
      location: "Minneapolis, MN",
      about: "Colorful spot serving modern Vietnamese street food & craft cocktails in trendy, lively surrounds.",
      rating: 5,
      image: "./hai-hai.png"
    },
    {
      name: "Tenant",
      link: "http://tenantmpls.com/",
      location: "Minneapolis, MN",
      about: "Homey, snug eatery for seasonal, prix fixe New American fare, plus wine & beer.",
      rating: 4.5,
      image: "./tenant.png"
    },
    {
      name: "Herbst Eatery & Farm Stand",
      link: "https://www.herbstsaintpaul.com/",
      location: "St. Paul, MN",
      about: "Chef-driven, neighborhood restaurant and market.",
      rating: 4,
      image: "./herbst.png"
    },
    {
      name: "Cardamom",
      link: "https://www.cardamommpls.com/",
      location: "Minneapolis, MN",
      about: "A casual Aegean & Mediterranean restaurant located in the Walker Art Center.",
      rating: 4.5,
      image: "./cardamom.png"
    },
    {
      name: "The Bungalow Club",
      link: "https://www.thebungalowclubmpls.com//",
      location: "Minneapolis, MN",
      about: "A neighborhood restaurant with a focus on handmade pasta.",
      rating: 5,
      image: "./tbc.png"
    },
    {
      name: "Spoon and Stable",
      link: "https://www.spoonandstable.com/",
      location: "Minneapolis, MN",
      about: "Hip choice for a French-inspired menu in a cozy, rustic-chic former horse stable. Setting surpasses the food, in our experience.",
      rating: 3.5,
      image: "./spoon-stable.png"
    }
  ]

  return (
    <>
      <h1>Twin Cities Restaurant Recommendations</h1>
      <p>A running list of places to try for your next date night or friend hang</p>
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>Restaurant*</th>
            <th>Location</th>
            <th>About</th>
            <th>Rating (5=highest)</th>
            <th>Glimpse Inside</th>
          </tr>
        </thead>
        <tbody>
        {restaurantRecs.map((name, index) => {
          return (
          <RestaurantRow
            key={name.image} 
            odd={index % 2 === 0}
            name={name.name}
            location={name.location}
            about={name.about}
            rating={name.rating}
            image={name.image}
            />
            )
        })}
        </tbody>
      </table>
      <p>*We recommend starting with those in bold</p>
    </>
  )
}

export default App;
