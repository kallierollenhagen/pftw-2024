import { useState } from "react";
import PropTypes from "prop-types";
import "./NewRestaurantForm.css";
import star from "../assets/icons/star.svg";
import clsx from "clsx";

export function NewRestaurantForm({ addCardFn }) {
    const initialCardSetting = {
        restaurant: "",
        link: "",
        location: "",
        about: "",
        rating: "",
        highlyRated: false,
        stars: "",
        image: "",
    }
    const [newCard, setNewCard] = useState(initialCardSetting);
    // first step in validating is creating a new state variable
    const [errorObj, setErrorObj] = useState({
        restaurant: "",
        image: "",
        stars: ""
    });

    // create a function to validate our form
    function validateForm() {
        let valid = true;
        const errors = {};

        if (!newCard.restaurant) {
            errors.restaurant = "The Restaurant Field is required";
            valid = false;
        }
        if (!newCard.image) {
            errors.image = "The Image Field is required";
            valid = false;
        }
        if (!newCard.stars) { // Validate single star selection
            errors.stars = "You must choose a star rating";
            valid = false;
        }
        // set message error for all of the above if left blank
        setErrorObj(errors);
        return valid;
    }

    // function changeHandler(event) {
    //     console.log(event.target.id);
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    //     if (event.target.name === "stars") {
    //         // figure out what star to add or remove
    //         const newStar = event.target.id;
    //         if (newCard.stars.includes(newStar)) {
    //             const filteredArray = newCard.stars.filter((star) => {
    //                 return star !== newStar;
    //             });
    //             setNewCard((prevCard) => {
    //                 return {
    //                     ...prevCard,
    //                     stars: filteredArray,
    //                 };
    //             });
    //         } else {
    //             // we need to add the star rating
    //             const addedStars = [...newCard.stars, newStar];
    //             setNewCard((prevCard) => {
    //                 return {
    //                     ...prevCard,
    //                     stars: addedStars,
    //                 };
    //             });
    //         }
    //     } else {
    //         const needsBoolean = ["highlyRated"];
    //         const updatedTarget = needsBoolean.includes(event.target.name)
    //             ? !!event.target.checked : event.target.value;
    //         setNewCard((prevCard) => {
    //             return {
    //                 ...prevCard,
    //                 [event.target.name]: updatedTarget,
    //             };
    //         });
    //     }
    // }

    // //     function changeHandler(event) {
    // //     console.log(event.target.value);
    // //     if (event.target.name === "stars") {
    // //         // figure out what star to add or remove
    // //         const newStar = event.target.id;
    // //         if (newCard.stars.includes(newStar)) {
    // //             const filteredArray = newCard.stars.filter((star) => {
    // //                 return star !== newStar;
    // //             });
    // //             setNewCard((prevCard) => {
    // //                 return {
    // //                     ...prevCard,
    // //                     stars: filteredArray,
    // //                 };
    // //             });
    // //         } else {
    // //             // we need to add the star rating
    // //             const addedStars = [...newCard.stars, newStar];
    // //             setNewCard((prevCard) => {
    // //                 return {
    // //                     ...prevCard,
    // //                     stars: addedStars,
    // //                 };
    // //             });
    // //         }
    // //     } else {
    // //         const needsBoolean = ["highlyRated"];
    // //         const updatedTarget = needsBoolean.includes(event.target.name)
    // //             ? !!event.target.checked
    // //             : event.target.value;
    // //         setNewCard((prevCard) => {
    // //             return {
    // //                 ...prevCard,
    // //                 [event.target.name]: updatedTarget,
    // //             };
    // //         });
    // //     }
    // // }

    function changeHandler(event) {
        const { name, value } = event.target;
        setNewCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (validateForm(newCard)) {
            addCardFn(newCard);
            setNewCard(initialCardSetting);
        }
    }
    
    return (
        <form className="new-restaurant-form-wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend className="fieldsetHead">Restaurant Details</legend>
                <div className={`form-group ${errorObj.restaurant && "error"}`}>
                    <label className="required" htmlFor="restaurant">
                        Restaurant Name
                    </label>
                    <input 
                        type="text" 
                        name="restaurant" 
                        id="restaurant" 
                        value={newCard.restaurant}
                        onChange={changeHandler}
                    />
                    {errorObj.restaurant && <small className="errorFeedback">{errorObj.restaurant}</small>}
                </div>
                <div className="formgroup">
                    <label htmlFor="link">
                        Website URL
                    </label>
                    <input 
                        type="text" 
                        name="link" 
                        id="link" 
                        onChange={changeHandler}
                        value={newCard.link}
                    />
                </div>
                <div className="formgroup">
                    <label htmlFor="about">
                        About
                    </label>
                    <input 
                        type="text" 
                        name="about" 
                        id="about" 
                        onChange={changeHandler}
                        value={newCard.about}
                    />
                </div>
                <div className="formgroup">
                    <label htmlFor="rating">
                        Rating (from 1-5)
                    </label>
                    <input 
                        type="text" 
                        name="rating" 
                        id="rating" 
                        onChange={changeHandler}
                        value={newCard.rating}
                    />
                </div>
                <div className={`form-group ${errorObj.image && "error"}`}>
                    <label className="required" htmlFor="image">
                        Restaurant Image (square)
                    </label>
                    <input 
                        type="text" 
                        name="image" 
                        id="image" 
                        value={newCard.image}
                        onChange={changeHandler}
                    />
                    {errorObj.image && <small className="errorFeedback">{errorObj.restaurant}</small>}
                </div>
        </fieldset>
        <fieldset>
                <legend className="errorFeedback">Stars</legend>
                {errorObj.stars && <small className="errorFeedback">{errorObj.stars}</small>}
                <div className="formGroup radio-group">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} htmlFor={star}>
                            {star}
                            <input 
                                type="radio" 
                                name="stars" 
                                id={star} 
                                value={star}
                                onChange={changeHandler}
                                checked={newCard.stars === String(star)}
                            />
                        </label>
                    ))}
                </div>
        </fieldset>
        {/* <fieldset>
            <legend>Stars</legend>
            {errorObj.stars && <small className="errorFeedback">{errorObj.stars}</small>}
            <div className="formGroup radio-group">
                {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} htmlFor={star}>
                        <input 
                            type="radio" 
                            name="stars" 
                            id={star} 
                            value={star}
                            onChange={changeHandler}
                            checked={newCard.stars === String(star)}
                        />
                        <FontAwesomeIcon icon={faStar} className={newCard.stars >= star ? "star-selected" : "star-unselected"} />
                        <div> 
                            <img src={star} className={newCard.stars >= star ? "star-selected" : "star-unselected"} /> 
                        </div>
                    </label>
                ))}
            </div>
        </fieldset> */}

        <fieldset>
                <legend>Collection Details</legend>
                <div className="form-group">
                    <label htmlFor="highRating">
                        Highly rated
                    </label>
                    <input 
                        type="checkbox" 
                        name="highlyRated" 
                        id="highlyRated" 
                        onChange={changeHandler}
                        value={newCard.highlyRated}
                    />
                </div>
            </fieldset>
            <button type="submit" /*disabled={Object.values(errorObj).some(Boolean)}*/>
                Add Restaurant
            </button>
        </form>
        );
}

NewRestaurantForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
};