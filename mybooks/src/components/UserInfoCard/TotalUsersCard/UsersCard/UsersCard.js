import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./UsersCard.style"
import Button from "../../../Button"
const UsersCard = ({ user, handleUserPage, handlefollowedUser, followedsList }) => {
    const [isFollowed, setIsFollowed] = useState({})



    const userFollowedUser = (user) => {
        handlefollowedUser(user)


    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleUserPage([user])} style={styles.container_touch}>
                <Image source={{ uri: user.profileImage }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.fullname}>{user.fullName}</Text>
                    <Text style={styles.username}>@{user.userName}</Text>
                </View>
            </TouchableOpacity>
            <Button text={user?.isfollowed ? "Takiptesin" : "Takip Et"} theme={user?.isfollowed ? "follow" : "unfollow"} onPress={() => userFollowedUser([user])} />
        </View>
    )
}

export default UsersCard
