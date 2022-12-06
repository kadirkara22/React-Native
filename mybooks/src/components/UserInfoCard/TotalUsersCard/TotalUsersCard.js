import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./TotalUsersCard.style"
import parseContentData from '../../../utils/parseContentData'
import UsersCard from './UsersCard'
const TotalUsersCard = () => {
    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {
        database().ref('users/').on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setUserInfo(parsedData)
        })

    }, [])

    const renderUsers = ({ item }) => <UsersCard user={item} />
    return (
        <View>
            <FlatList
                data={userInfo}
                renderItem={renderUsers}
            />
        </View>
    )
}

export default TotalUsersCard
