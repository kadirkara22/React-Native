import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import parseContentData from '../../../utils/parseContentData'
import FollowedsCard from './FollowedsCard'

const TotalFollowedsCard = ({ userInfo, handleUserPage }) => {
    const [followedsList, setFollowedsList] = useState([])


    useEffect(() => {
        const [{ id }] = userInfo
        database().ref(`users/${id}/followeds`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setFollowedsList(parsedData)
            //console.log(parsedData)
        })
    }, [])


    const renderUsers = ({ item }) => <FollowedsCard user={item} handleUserPage={handleUserPage} />
    return (
        <View>
            <FlatList
                data={followedsList}
                renderItem={renderUsers}
            />
        </View>
    )
}

export default TotalFollowedsCard
