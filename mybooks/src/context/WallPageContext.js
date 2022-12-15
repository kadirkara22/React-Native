import React, { useState, useEffect } from 'react'
export const WallPageContext = React.createContext();

const WallPageContextProvider = (props) => {
    const [totalWall, setTotalWall] = useState([])
    const [userTotalWall, setUserTotalWall] = useState([])
    const methods = {
        totalWall, setTotalWall, userTotalWall, setUserTotalWall
    }

    return (
        <WallPageContext.Provider value={methods}>
            {props.children}
        </WallPageContext.Provider>
    )
}

export default WallPageContextProvider;