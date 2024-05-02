
import { Link, useParams } from "react-router-dom";
import './About.css';
import masthead from "/public/masthead-purple.png";
import mockup from "/public/mockup-square.png";
import cliff from "/public/cliff.jpg";
import emailIcon from "/public/email-icon.png";
import instagramIcon from "/public/instagram-icon.png";


export function About() {
    return (
        <div>
            <nav>
                <Link to="/">
                    <img className="issue-masthead" src={masthead} alt="Wayside masthead" />
                </Link>
            </nav>
            <div className="sticky-nav">
                <Link to="/Magazine" className="sticky-nav-item">Printed Issues</Link>
                <Link to="/" className="sticky-nav-item">Home</Link> {/* Changed link destination to "/" */}
            </div>
            <div className="about">
                <div className="about-head">
                    <img src={cliff} alt="person on cliff" />  
                </div>
                <div className="about-block">
                    <img src={mockup} alt="Wayside magazine" />
                    <h2>
                        Wayside is a quarterly magazine focused on discovering what gives a particular place its character.
                    </h2>
                    <p>
                        For each issue, the Wayside team embeds itself in a special destination — from the stunning shorelines of the Upper Midwest to the eastern edge of Iceland to South Carolina's lowcountry — to really get to know a place. This site contains our top highlight. Want more? Order the print magazine for a full exploration, including local profiles, beloved cafes, and geographical histories.
                    </p>
                </div>
            </div>
            <div className="footer">
                <a href="mailto:dummy@example.com">
                <img src={emailIcon} alt="Email icon" />
                </a>
                <a href="https://www.instagram.com/dummy/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram icon" />
                </a>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Rural Design Studio</p>
            </div>
        </div>
    );
}
