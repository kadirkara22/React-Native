import React, { useState, useEffect } from 'react'
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [readBook, setReadBook] = useState([])
    const [favoriBook, setFavoriBook] = useState([])
    const [myLibraryBook, setMyLibrary] = useState([])
    const [readingBook, setReadingBook] = useState([])
     const [willReadBook, setWillReadBook] = useState([])
    const methods = {
        readBook, setReadBook, favoriBook, setFavoriBook,myLibraryBook,
         setMyLibrary,readingBook, setReadingBook,willReadBook, setWillReadBook
    }

    return (
        <BookContext.Provider value={methods}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;