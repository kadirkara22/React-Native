import React, { useState, useEffect, useContext } from 'react'
import database from "@react-native-firebase/database"
import parseContentData from '../utils/parseContentData'
export const UserInfoContext = React.createContext();

const UserInfoContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const [backgroundProfileImage, setBackgroundProfieImage] = useState("")
    const [profileImage, setProfieImage] = useState("")

    useEffect(() => {
        database().ref('users/').on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setUserInfo(parsedData)
            console.log(parsedData)
        })
    }, [])
    const methods = {
        userInfo, setUserInfo, backgroundProfileImage, setBackgroundProfieImage, profileImage, setProfieImage
    }

    return (
        <UserInfoContext.Provider value={methods}>
            {props.children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContextProvider;