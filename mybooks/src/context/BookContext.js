import React, { useState, useEffect } from 'react'
import database from "@react-native-firebase/database"
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [readBook, setReadBook] = useState([])
    const [favoriBook, setFavoriBook] = useState([])
    const [myLibraryBook, setMyLibrary] = useState([])
    const [readingBook, setReadingBook] = useState([])
    const [willReadBook, setWillReadBook] = useState([])
    const [userTotalWall, setUserTotalWall] = useState([])
    const [newReadBook, setNewReadBook] = useState()
    const [newReadingBook, setNewReadingBook] = useState()
    const [newWillReadBook, setNewWillReadBook] = useState()
    const [favoriCount, setFavoriCount] = useState(0)

    useEffect(() => {
        const userWall = readBook.concat(readingBook, willReadBook)
        userWall.sort(function (a, b) {
            return a.book.date > b.book.date ? -1 : a.book.date > b.book.date ? 1 : 0
        })
        setUserTotalWall(userWall)
    }, [readingBook, willReadBook, readBook])

    const handleShare = (item, text) => {
        console.log(item)

    }

    const handleFavoriCount = (item) => {

        if (item.book.isRead) {
            if (item.book.isFavori) {
                database().ref(`users/${item.book.userid}/read/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount - 1, isFavori: false })

            } else {
                database().ref(`users/${item.book.userid}/read/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount + 1, isFavori: true })

            }

        }
        if (item.book.isReading) {
            if (item.book.isFavori) {
                database().ref(`users/${item.book.userid}/reading/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount - 1, isFavori: false })
            } else {
                database().ref(`users/${item.book.userid}/reading/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount + 1, isFavori: true })
            }

        }
        if (item.book.isWillRead) {
            if (item.book.isFavori) {
                database().ref(`users/${item.book.userid}/willread/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount - 1, isFavori: false })


            } else {
                database().ref(`users/${item.book.userid}/willread/${item.id}/book`)
                    .update({ favoriCount: item.book.favoriCount + 1, isFavori: true })

            }
        }
    }

    const methods = {
        readBook, setReadBook, favoriBook, setFavoriBook, myLibraryBook,
        setMyLibrary, readingBook, setReadingBook, willReadBook, setWillReadBook,
        newReadBook, setNewReadBook, newReadingBook, setNewReadingBook, newWillReadBook, setNewWillReadBook,
        userTotalWall, handleFavoriCount, handleShare
    }

    return (
        <BookContext.Provider value={methods}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;