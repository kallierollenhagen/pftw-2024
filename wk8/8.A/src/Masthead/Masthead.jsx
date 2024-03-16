import mastheadImg from "../assets/masthead.png";
import "./Masthead.css"
import star from "../assets/icons/star.svg";

export default function Masthead() {
    return(
        <div className="masthead">
            <img src={mastheadImg} alt="Twin Cities Restaurant Recommendations"/>
            <h1>Twin Cities Restaurant Recommendations</h1>
            <p><img className="keyIcon" src={star} /> Start with these</p>
        </div>
    )
}