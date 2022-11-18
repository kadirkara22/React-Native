import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from "./UserInfo.style"
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        database()
            .ref('/userinfo')
            .once('value')
            .then(snapshot => {
                const userInfoData = snapshot.val();
                const parsedInfoData = parseContentData(userInfoData || {})
                setUserInfo(parsedInfoData)
            });
    }, [])

    return (
        <View>

            <Text>{userInfo.map(item => item.age)}</Text>
            <Text>{userInfo.map(item => item.gender)}</Text>


        </View>
    )
}

export default UserInfo
