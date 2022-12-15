import React, { useState, useEffect } from 'react'
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [readBook, setReadBook] = useState([])
    const [favoriBook, setFavoriBook] = useState([])
    const [myLibraryBook, setMyLibrary] = useState([])
    const [readingBook, setReadingBook] = useState([])
    const [willReadBook, setWillReadBook] = useState([])
    const [newReadBook, setNewReadBook] = useState()
    const [newReadingBook, setNewReadingBook] = useState()
    const [newWillReadBook, setNewWillReadBook] = useState()
    const methods = {
        readBook, setReadBook, favoriBook, setFavoriBook, myLibraryBook,
        setMyLibrary, readingBook, setReadingBook, willReadBook, setWillReadBook,
        newReadBook, setNewReadBook, newReadingBook, setNewReadingBook, newWillReadBook, setNewWillReadBook
    }

    return (
        <BookContext.Provider value={methods}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;