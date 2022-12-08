import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./TotalFollowersCard.style"
import parseContentData from '../../../utils/parseContentData'
import FollowersCard from './FollowersCard'
const TotalFollowersCard = ({ handleUserPage, handlefollowedUser, userInfo }) => {
    const [followersList, setFollowersList] = useState([])


    useEffect(() => {
        const [{ id }] = userInfo
        database().ref(`users/${id}/followers`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setFollowersList(parsedData)
            console.log(parsedData)
        })
    }, [])


    const renderUsers = ({ item }) => <FollowersCard user={item} handleUserPage={handleUserPage} handlefollowedUser={handlefollowedUser} />
    return (
        <View>
            <FlatList
                data={followersList}
                renderItem={renderUsers}
            />
        </View>
    )
}

export default TotalFollowersCard
