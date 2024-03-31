/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import './Destination.css';

// eslint-disable-next-line react/prop-types
export function Destination({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedDestination = data.find((destination) => destination.slug === slug)
    console.log(selectedDestination)
    return (
        <div>
         <nav>
            <button><Link to="/">Return Home</Link></button>
         </nav>
         <div className="location-body">
            <h1>{selectedDestination.location}</h1>
            <h2>{selectedDestination.blurb}</h2>
            <p>{selectedDestination.description}</p>
            <h3>Not to miss</h3>
            <p>{selectedDestination.highlights}</p>
            <h3>Top food & beverage recs</h3>
            <p>{selectedDestination.food}</p>
        </div>
            <div className="grid">
                <img src={selectedDestination.cover} alt={selectedDestination.location} />
                <img src={selectedDestination.image2} alt={selectedDestination.location} />
                <img src={selectedDestination.image3} alt={selectedDestination.location} />
                <img src={selectedDestination.image4} alt={selectedDestination.location} />
            </div>
        </div>
    )
}