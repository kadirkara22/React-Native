import React, { useState } from "react";

export const FoodValueContext = React.createContext();

const FoodValueContextProvider = (props) => {
    const [foodValue, setFoodValue] = useState([])


    const methods = {
        foodValue, setFoodValue
    }

    return (
        <FoodValueContext.Provider value={methods}>
            {props.children}
        </FoodValueContext.Provider>
    )
}

export default FoodValueContextProvider;