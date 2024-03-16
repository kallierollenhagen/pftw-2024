import PropTypes from "prop-types"
import "./ItemCard.css"
import trophy from "../assets/icons/trophy_icon.svg";
import trash from "../assets/icons/can_trash_icon.svg";
import copy from "../assets/icons/bxs_copy_icon.svg";
import star from "../assets/icons/star.svg";

export default function ItemCard({
    restaurant,
    link,
    location,
    about,
    rating,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="restaurantCard">
            {rating > 4 &&
            <div className="highRating"> 
                <img src={star} title="highly rated" /> 
            </div>
            }
            <div className="cardImg">
                <img src={image} alt={restaurant} />
            </div>
            <div className="cardTitle">
                <a href={link}>{restaurant}</a>
            </div>
            <div className="cardAbout">
                <p>{about} | {rating}</p>
            </div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                      evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy} /></a></div>
        </div>
    )
}
ItemCard.propTypes = {
    restaurant: PropTypes.string,
    link: PropTypes.string,
    location: PropTypes.string,
    about: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}