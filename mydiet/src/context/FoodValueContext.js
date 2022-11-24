import React, { useState } from "react";

export const FoodValueContext = React.createContext();

const FoodValueContextProvider = (props) => {
    const [foodValue, setFoodValue] = useState([])


    const [breakFat, setBreakFat] = useState(0)
    const [breakPro, setBreakPro] = useState(0)
    const [breakCarb, setBreakCarb] = useState(0)
    const [breakTgd, setBreakTgd] = useState(0)
    const [breakCalori, setBreakCalori] = useState(0)

    const methods = {
        foodValue, setFoodValue, breakFat, setBreakFat, breakPro, setBreakPro, breakCarb,
        setBreakCarb, breakTgd, setBreakTgd, breakCalori, setBreakCalori
    }

    return (
        <FoodValueContext.Provider value={methods}>
            {props.children}
        </FoodValueContext.Provider>
    )
}

export default FoodValueContextProvider;