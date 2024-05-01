import { Link } from "react-router-dom";
import issueData from "../assets/issue-list.json";
import "./Home.css";
import masthead from "/public/masthead-purple.png";
import mockup from "/public/mockup-square.png";

export function Home() {
    return (
        <>
        <div className="masthead">
            <img src={masthead} alt="Wayside masthead" />
            <h2>close looks at less-traveled places</h2>
        </div>
        <div className="about">
            <img src={mockup} alt="Wayside magazine" />
            <h2>
                Quarterly magazine discovering what gives a particular place its character.
            </h2>
            <p>
                For each issue, the Wayside team embeds itself in a special destination — from the stunning shorelines of the Upper Midwest to the eastern edge of Iceland to South Carolina's lowcountry — to really get to know a place. Read some highlights here, and order the magazine for a full exploration, including under-rated hikes, beloved local cafes, and surprising art installations.
            </p>
            <div className="footer">
                <button><Link to="/Magazine">Magazine</Link></button>
            </div>
        </div>
            <div className="collection">
                {issueData.map((issue) => {
                    return (
                        <div className="location-card" key={issue.slug}>
                            <div className="container">
                                <Link to={issue.slug}>
                                    <img style={{ border: `20px solid ${issue.color1}` }} src={issue.cover} alt={issue.location} />
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
