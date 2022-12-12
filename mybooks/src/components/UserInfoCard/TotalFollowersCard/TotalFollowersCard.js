import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./TotalFollowersCard.style"
import parseContentData from '../../../utils/parseContentData'
import FollowersCard from './FollowersCard'
import { UserInfoContext } from '../../../context/UserInfoContext'
const TotalFollowersCard = ({ handleUserPage, handlefollowedUser, userInfo, followedsList, followersList }) => {


    const renderUsers = ({ item }) => <FollowersCard user={item} handleUserPage={handleUserPage} handlefollowedUser={handlefollowedUser} followedsList={followedsList} />
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
