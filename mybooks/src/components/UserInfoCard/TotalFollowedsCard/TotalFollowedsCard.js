import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import parseContentData from '../../../utils/parseContentData'
import FollowedsCard from './FollowedsCard'

const TotalFollowedsCard = ({ userInfo, handleUserPage, followedsList, followersList }) => {


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
