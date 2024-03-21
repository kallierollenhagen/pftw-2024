import { forwardRef, useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm () {
    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        state: "Minnesota",
        country: "",
        colors: [],
    }
    const states = [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming"
    ]

    const[formObject, setFormObject] = useState(initialFormData);
    const [errorObject, setErrorObject] = useState({
        firstName: "",
        lastName: ""
    })

    function validateErrors () {
        let errors = {};
        if (!formObject.firstName.trim()) {
            errors.firstName = "First name is required";
        }
        if (!formObject.lastName.trim()) {
            errors.lastName = "Last name is required";
        }
        setErrorObject(errors);
        return Object.keys(errors).length === 0; // Return true if there are no errors
    }    

    function changeHandler(event) {
        console.log(event.target.value);
        if(event.target.name === "colors") {
        const colorName = event.target.id;
        if(formObject.colors.includes(colorName)) {
            setFormObject({
            ...formObject,
            colors: formObject.colors.filter ((color) => color !== colorName)
            })
        } else {
            setFormObject({
            ...formObject,
            colors: [...formObject.colors, colorName]
            })
        }
        } else {
        setFormObject((previousForm) => {
        console.log(event.target.name)

            return {
            ...previousForm,
            [event.target.name]: event.target.value
            }
        })
        }
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        const isValid = validateErrors();
        if (isValid) {
            // Form submission logic goes here
            console.log("Form submitted successfully!");
        } else {
            console.log("Form submission failed due to validation errors.");
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Information</legend>
                <div className="formgroup">
                <label htmlFor="firstName" className="required">
                    First Name
                </label>
                <input // first, created an input with a value and changeHanlder (so every time a change happened it gets read by the function) to hook it up to React 
                    type="text"
                    name="firstName" 
                    id="firstName" 
                    value={formObject.firstName} 
                    onChange={changeHandler}
                    onBlur={validateErrors}
                />
                {errorObject.firstName && (
                    <>
                    <br />
                    <small>{errorObject.firstName}</small>
                    </>
                )}
                </div>
                <div className="formgroup">
                <label htmlFor="lastName" className="required">
                    Last Name
                </label>
                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={formObject.lastName} 
                onChange={changeHandler}
                onBlur={validateErrors}
                />
                    {errorObject.lastName && (
                    <>
                    <br />
                    <small>{errorObject.lastName}</small>
                    </>
                )}
                </div>
                <div className="formgroup">
                <label htmlFor="lastName">
                    Street Address
                </label>
                <input 
                type="text" 
                name="street" 
                id="street" 
                value={formObject.street} 
                onChange={changeHandler}
                />
                </div>
                <div className="formgroup">
                <label htmlFor="state">State</label>
                <select 
                name="state" 
                id="state"
                value={formObject.state} 
                onChange={changeHandler}
                >
                    {states.map((singleState, index) => {
                        return (
                            <option key={index} value={singleState}>{singleState}</option>
                        )
                    })}
                </select>
                </div>
                <div className="formgroup">
                <label htmlFor="country">Country</label>
                <input 
                type="text" 
                name="country" 
                id="country" 
                value={formObject.country} 
                onChange={changeHandler}
                onBlur={validateErrors}
                />
                </div>
            </fieldset>
            <fieldset>
                <legend>Tell us about your Alpaca interests</legend>
                <p>Favorite alpaca colors</p>
                <div className="formgroup">
                <label htmlFor="white">
                    White
                    <input type="checkbox" 
                    name="colors" 
                    id="white" 
                    checked={formObject.colors.includes("white")}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="brown">
                    Brown
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="brown" 
                    checked={formObject.colors.includes("brown")}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="black">
                    Black
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="black"
                    checked={formObject.colors.includes("black")}
                    onChange={changeHandler} 
                    />
                </label>
                <label htmlFor="spotted">
                    Spotted
                    <input 
                    type="checkbox" 
                    name="colors" 
                    id="spotted" 
                    checked={formObject.colors.includes("spotted")}
                    onChange={changeHandler}
                    />
                </label>
                </div>
            </fieldset>
            <button type="submit">
                Sign me up
            </button>
            </form>
        </>
    )
}
    