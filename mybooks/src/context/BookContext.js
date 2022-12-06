import React, { useState, useEffect } from 'react'
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [readBook, setReadBook] = useState([])
    const [favoriBook, setFavoriBook] = useState([])

    const methods = {
        readBook, setReadBook, favoriBook, setFavoriBook
    }

    return (
        <BookContext.Provider value={methods}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;