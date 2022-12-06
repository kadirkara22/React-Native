import React, { useState, useEffect } from 'react'
import database from "@react-native-firebase/database"
import parseContentData from '../utils/parseContentData'
export const UserInfoContext = React.createContext();

const UserInfoContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const [userMail, setUserMail] = useState("")
    const [backgroundProfileImageChange, setBackgroundProfileImage] = useState("")
    const [profileImageChange, setProfileImage] = useState("")

    useEffect(() => {
        database().ref('users/').on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            for (var i = 0; i < parsedData.length; i++) {
                if (parsedData[i].email === userMail) {
                    //console.log(parsedData)
                    userInfo[0] = parsedData[i]
                    setBackgroundProfileImage(parsedData[i].backgroundProfileImage)
                    setProfileImage(parsedData[i].profileImage)

                }
            }
        })

    }, [userMail])

    const methods = {
        userInfo, setUserInfo, userMail, setUserMail,
        backgroundProfileImageChange, setBackgroundProfileImage, profileImageChange, setProfileImage
    }

    return (
        <UserInfoContext.Provider value={methods}>
            {props.children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContextProvider;