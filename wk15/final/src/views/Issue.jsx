/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import './Issue.css';
import masthead from "/public/masthead-purple.png";

// eslint-disable-next-line react/prop-types
export function Issue({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedIssue = data.find((issue) => issue.slug === slug)
    console.log(selectedIssue)
    return (
        <div>
            <nav>
                <h1>{selectedIssue.location}</h1>
                <Link to="/">
                    <img className="issue-masthead" src={masthead} alt="Wayside masthead" />
                </Link>
            </nav>
            <div className="location-body">
                <img className="mockup" src={selectedIssue.mockup} alt={selectedIssue.location} />
                <h2>{selectedIssue.blurb}</h2>
                <p>{selectedIssue.description}</p>
                <h3>Not to miss</h3>
                <p>{selectedIssue.highlights}</p>
                <h3>Where to eat</h3>
                <p>{selectedIssue.food}</p>
            </div>
            <div className="grid">
                <img src={selectedIssue.cover} alt={selectedIssue.location} />
                <img src={selectedIssue.image2} alt={selectedIssue.location} />
                <img src={selectedIssue.image3} alt={selectedIssue.location} />
                <img src={selectedIssue.image4} alt={selectedIssue.location} />
            </div>
            <div className="Footer">
                <button><Link to="/">Return Home</Link></button>
            </div>
        </div>
    )
}