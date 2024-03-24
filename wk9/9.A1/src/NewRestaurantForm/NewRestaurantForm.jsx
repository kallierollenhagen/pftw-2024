import { useState } from "react";
import PropTypes from "prop-types";
import "./NewRestaurantForm.css";
import clsx from "clsx";

export function NewRestaurantForm({ addCardFn }) {
    const initialCardSetting = {
        restaurant: "",
        link: "",
        location: "",
        about: "",
        rating: "",
        highlyRated: false,
        // stars: [],
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
        // if (newCard.stars.length === 0) {
        //     errors.rating = "You must choose at least one rating";
        //     valid = false;
        // }

        if (!newCard.stars) { // Validate single star selection
            errors.stars = "You must choose a star rating";
            valid = false;
        }
        // set message error for all of the above if left blank
        setErrorObj(errors);
        return valid;
    }

    function changeHandler(event) {
        console.log(event.target.value);
        if (event.target.name === "stars") {
            // figure out what star to add or remove
            const newStar = event.target.id;
            if (newCard.stars.includes(newStar)) {
                const filteredArray = newCard.stars.filter((star) => {
                    return star !== newStar;
                });
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        stars: filteredArray,
                    };
                });
            } else {
                // we need to add the star rating
                const addedStars = [...newCard.stars, newStar];
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        stars: addedStars,
                    };
                });
            }
        } else {
            const needsBoolean = ["highlyRated"];
            const updatedTarget = needsBoolean.includes(event.target.name)
                ? !!event.target.checked
                : event.target.value;
            setNewCard((prevCard) => {
                return {
                    ...prevCard,
                    [event.target.name]: updatedTarget,
                };
            });
        }
    }


    function submitHandler(event) {
        event.preventDefault(); // prevents the page from reloading (default behavior) due to precense of a button
        console.log({ newCard });
        if (validateForm(newCard)) {
            // send card to app
            addCardFn(newCard);
            // reset values
            setNewCard(initialCardSetting);
        }
    }

    // function submitHandler(event) {
    //     event.preventDefault();
    //     if (validateForm(newCard)) {
    //         addCardFn(newCard);
    //         setNewCard(initialCardSetting);
    //     }
    // }
    
    return (
        <form className="new-restaurant-form-wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>Restaurant Details</legend>
                <div className={{"form-group": true, "error": errorObj.restaurant}}>
                    <label className="required" htmlFor="restaurant">
                        Restaurant Name
                    </label>
                    <input 
                        type="text" 
                        name="restaurant" 
                        id="restaurant" 
                        value={newCard.restaurant}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.restaurant) {
                                setErrorObj ((preErrorObj) => {
                                    return {
                                        ...preErrorObj,
                                        restaurant: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.restaurant && (
                        <>
                            <br />
                            <small className="errorFeedback">{errorObj.restaurant}</small>
                        </>
                    )}
                </div>

                {/* <div className={`form-group ${errorObj.restaurant && "error"}`}>
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
                </div> */}

                <div className="formgroup">
                    <label htmlFor="link">
                        Link
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
                        Rating
                    </label>
                    <input 
                        type="text" 
                        name="rating" 
                        id="rating" 
                        onChange={changeHandler}
                        value={newCard.rating}
                    />
                </div>
                </fieldset>

                {/* <fieldset>
                    <legend>Stars</legend>
                    {errorObj.rating && (
                        <>
                            <br />
                            <small className="errorFeedback">{errorObj.rating}</small>
                        </>
                    )}
                    <div className="formGroup checkbox-group">
                        <label htmlFor="1">1
                            <input 
                                type="checkbox" 
                                name="stars" 
                                id="1" 
                                onChange={changeHandler}
                                checked={newCard.stars.includes("1")}
                                onBlur={() => {
                                    if(newCard.stars.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="2">2
                            <input 
                                type="checkbox" 
                                name="stars"  
                                id="2" 
                                onChange={changeHandler}
                                checked={newCard.stars.includes("2")}
                                onBlur={() => {
                                    if(newCard.stars.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="3">3
                            <input 
                                type="checkbox" 
                                name="stars"  
                                id="3" 
                                onChange={changeHandler}
                                checked={newCard.stars.includes("3")}
                                onBlur={() => {
                                    if(newCard.stars.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="4">4
                            <input 
                                type="checkbox" 
                                name="stars" 
                                id="4"
                                onChange={changeHandler}
                                checked={newCard.stars.includes("4")} 
                                onBlur={() => {
                                    if(newCard.stars.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="5">5
                            <input 
                                type="checkbox" 
                                name="stars" 
                                id="5" 
                                onChange={changeHandler}
                                checked={newCard.stars.includes("5")}
                                onBlur={() => {
                                    if(newCard.stars.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                    </div>
                </fieldset>
                <div className={{"form-group": true, "error": errorObj.image}}>
                    <label className="required" htmlFor="image">
                        Image URL
                    </label>
                    <input 
                        type="text" 
                        name="image" 
                        id="image" 
                        onChange={changeHandler}
                        value={newCard.image}
                        onBlur={() => {
                            if(newCard.image) {
                                setErrorObj ((preErrorObj) => {
                                    return {
                                        ...preErrorObj,
                                        image: ""
                                    }
                                })
                            }
                        }}
                    />
                     {errorObj.image && (
                        <>
                            <br />
                            <small className="errorFeedback">{errorObj.image}</small>
                        </>
                    )}
                </div>
            </fieldset>
            <button type="submit" disabled={errorObj.restaurant || errorObj.rating || errorObj.image}>
                Add Restaurant
            </button>
        </form> */}

        <fieldset>
                <legend>Stars</legend>
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
        </fieldset>
            <button type="submit" disabled={Object.values(errorObj).some(Boolean)}>
                Add Restaurant
            </button>
        </form>
        );
}

NewRestaurantForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
};