/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";
import './Issue.css';
import masthead from "/public/masthead-purple.png";
import emailIcon from "/public/email-icon.png";
import instagramIcon from "/public/instagram-icon.png";

export function Issue({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedIssue = data.find((issue) => issue.slug === slug)
    console.log(selectedIssue);
    
    return (
        <div>
            <nav>
                <Link to="/">
                    <img className="issue-masthead" src={masthead} alt="Wayside masthead" />
                </Link>
                {/* <h1 style={{ backgroundColor: selectedIssue.color2, padding: '12px' }}>{selectedIssue.location}</h1> */}
                <h1 style={{ color: selectedIssue.color2, padding: '10px' }}>{selectedIssue.location}</h1>
            </nav>
            <div className="sticky-nav">
                <Link to="/Magazine" className="sticky-nav-item">Printed Issues</Link>
                <Link to="/About" className="sticky-nav-item">About</Link>
            </div>

            <div className="location-body">
                <img className="mockup" src={selectedIssue.mockup} alt={selectedIssue.location} />
                <div className="body-text">
                    <h2>{selectedIssue.blurb}</h2>
                    <p>{selectedIssue.description}</p>
                    <h3>Not to miss</h3>
                    <p>{selectedIssue.highlights}</p>
                    <h3>Where to eat</h3>
                    <p>{selectedIssue.food}</p>
                </div>
            </div>
            <div className="grid">
                <img src={selectedIssue.image2} alt={selectedIssue.location} />
                <img src={selectedIssue.image3} alt={selectedIssue.location} />
                <img src={selectedIssue.image4} alt={selectedIssue.location} />
                <img src={selectedIssue.image5} alt={selectedIssue.location} />
            </div>
            <div className="footer">
                <button><Link to="/">Return Home</Link></button>
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
