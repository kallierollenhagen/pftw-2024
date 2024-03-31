import { Link } from "react-router-dom";
import destinationData from "../assets/destination-list.json";
import "./Home.css";

export function Home() {
    return (
        <>
            <h1>Backroads: Top Travel Recs</h1>
            <h2>Detour-worthy spots to add to your trip list.</h2>
            <div className="collection">
                {destinationData.map((destination) => {
                    return (
                        <div className="location-card" key={destination.slug}>
                            <div className="container">
                            <Link to={destination.slug}>
                                <img src={destination.cover} alt={destination.location} />
                            </Link>
                            <Link to={destination.slug}>
                                <h2 className="centered">
                                    <strong>{destination.location}</strong>
                                </h2>
                            </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
