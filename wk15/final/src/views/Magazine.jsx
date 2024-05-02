/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import './Magazine.css';
import masthead from "/public/masthead-purple.png";
import emailIcon from "/public/email-icon.png";
import instagramIcon from "/public/instagram-icon.png";

export function Magazine({ data }) {
    return (
        <>
            <div className="masthead">
                <Link to="/"><img src={masthead} alt="Wayside masthead" /></Link>
                <h2>close looks at less-traveled places</h2>
            </div>
            <div className="sticky-nav">
                <Link to="/About" className="sticky-nav-item">About</Link>
                <Link to="/" className="sticky-nav-item">Home</Link> 
            </div>
            <div className="about">
                <p>
                    Pick your next home-away-from-home. Read profiles of local legends, experience a place with documentary photo essays, and get insider tips on where to eat, swim, explore.
                </p>
            </div>
            <div className="collection-magazine">
                {data.map((magazine, index) => (
                    <div className="magazine-card" key={index}>
                        <Link to={`/${magazine.slug}`}>
                            <img src={magazine.mockup} alt={magazine.location} />
                        </Link>
                        <Link to={`/${magazine.slug}`}>
                            <p className="magazine-link">{magazine.location}  |  $20</p>
                        </Link>
                    </div>
                ))}
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
        </>
    );
}
