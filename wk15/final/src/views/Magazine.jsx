import { Link, useParams } from "react-router-dom";
import './Purchase.css';
import masthead from "/public/masthead-purple.png";
import issueData from "../assets/issue-list.json";

export function Magazine() {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedMagazine = data.find((magazine) => magazine.slug === slug)
    console.log(selectedMagazine);
    
    return (
        <>
        <div className="masthead">
            <img src={masthead} alt="Wayside masthead" />
            <h2>close looks at less-traveled places</h2>
        </div>
        <div className="about">
            <p>
                Pick your next home-away-from-home. Read profiles of local legands, experience a place with documentary photo essays, and get insider tips on where to eat, swim, explore.
            </p>
        </div>
            <div className="collection-magazine">
                {issueData.map((magazine) => {
                    return (
                        <div className="magazine-card" key={magazine.slug}>
                            <div className="container">
                            <Link to={issue.slug}>
                                <img style={{ borderColor: issue.color1, borderWidth: '15px' }} src={issue.cover} alt={issue.location} />
                            </Link>
                            <Link to={issue.slug}>
                                <h2 className="centered" style={{ backgroundColor: issue.color2 }}>
                                    <strong>{issue.location}</strong>
                                </h2>
                            </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Rural Design Studio</p>
            </div>
        </>
    );
}