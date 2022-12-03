import React, { useState, useEffect } from 'react'
import database from "@react-native-firebase/database"
import parseContentData from '../utils/parseContentData'
import { UserInfoContext } from './UserInfoContext';
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const [willReadBook, setwillReadBook] = useState([])
    const [readBook, setreadBook] = useState([])

    const [favoriBook, setFavoriBook] = useState([])
    const [myLibrary, setMyLibrary] = useState([])



    /* useEffect(() => {
        database().ref('users/').on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setUserInfo(parsedData)
            console.log(parsedData)
        })

        database().ref(`users/${parsedData.id}/willread`).on('value', snapshot => {
            const contentData = snapshot.val();
            console.log(contentData)

        })
        database().ref(`users/${parsedData.id}/read`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setreadBook(parsedData)
        })
      
        database().ref(`users/${parsedData.id}/favori`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setFavoriBook(parsedData)
        })
        database().ref(`users/${parsedData.id}/mylibrary`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setMyLibrary(parsedData)
        })
    }, []) */

    const methods = {

    }

    return (
        <BookContext.Provider value={methods}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;