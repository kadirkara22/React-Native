import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import styles from "./UserInfo.style"
import { UserInfoContext } from '../../context/UserInfoContext'
const UserInfo = () => {
    const { userInfo, setUserInfo } = useContext(UserInfoContext)

    return (
        <View>
            <Text>{userInfo.age}</Text>
        </View>
    )
}

export default UserInfo
