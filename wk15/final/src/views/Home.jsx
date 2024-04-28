import { Link } from "react-router-dom";
import issueData from "../assets/issue-list.json";
import "./Home.css";
import masthead from "/public/masthead-purple.png";

export function Home() {
    return (
        <>
            <img src={masthead} alt="Wayside masthead" />
            <h2>close looks at less-traveled places</h2>
            <div className="collection">
                {issueData.map((issue) => {
                    return (
                        <div className="location-card" key={issue.slug}>
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
            <div className="footer">
                <p>Copyright © 2024 Rural Design Studio</p>
            </div>
        </>
    );
}
