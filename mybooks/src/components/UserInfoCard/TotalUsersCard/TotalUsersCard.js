import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./TotalUsersCard.style"
import parseContentData from '../../../utils/parseContentData'
import UsersCard from './UsersCard'
const TotalUsersCard = ({ userInfo, handleUserPage, handlefollowedUser }) => {
    const [userList, setUserList] = useState([])
    const [followedsList, setFollowedsList] = useState([])


    useEffect(() => {
        database().ref('users/').on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            const newUserList = [...parsedData]
            const index = parsedData.findIndex(item => item.email === userInfo[0].email)
            newUserList.splice(index, 1)
            setUserList(newUserList)
        })

    }, [])



    useEffect(() => {
        const [{ id }] = userInfo
        database().ref(`users/${id}/followeds`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setFollowedsList(parsedData)
            //console.log(parsedData)
        })
    }, [])


    const renderUsers = ({ item }) => <UsersCard user={item} handleUserPage={handleUserPage} handlefollowedUser={handlefollowedUser} followedsList={followedsList} />
    return (
        <View>
            <FlatList
                data={userList}
                renderItem={renderUsers}
            />
        </View>
    )
}

export default TotalUsersCard
