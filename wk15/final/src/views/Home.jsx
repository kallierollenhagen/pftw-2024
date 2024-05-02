// Home.jsx

import { Link } from 'react-router-dom';
import issueData from "../assets/issue-list.json";
import "./Home.css";
import masthead from "/public/masthead-purple.png";
import emailIcon from "/public/email-icon.png";
import instagramIcon from "/public/instagram-icon.png";

export function Home() {
  return (
    <>
      <div className="masthead">
        <img src={masthead} alt="Wayside masthead" />
        <h2>close looks at less-traveled places</h2>
      </div>
      <div className="sticky-nav">
        <Link to="/Magazine" className="sticky-nav-item">Printed Issues</Link>
        <Link to="/About" className="sticky-nav-item">About</Link>
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