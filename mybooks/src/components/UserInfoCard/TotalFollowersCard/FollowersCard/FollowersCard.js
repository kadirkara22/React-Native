import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Button from '../../../Button'
import styles from "./FollowersCard.style"
const FollowersCard = ({ handlefollowedUser, handleUserPage, user }) => {
    const [followed, setFollowed] = useState(false)

    const userFollowedUser = (user) => {
        handlefollowedUser(user)
        setFollowed(true)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleUserPage([user?.followerUser])} style={styles.container_touch}>
                <Image source={{ uri: user?.followerUser?.profileImage }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.fullname}>{user?.followerUser?.fullName}</Text>
                    <Text style={styles.username}>@{user?.followerUser?.userName}</Text>
                </View>
            </TouchableOpacity>
            <Button text="Takip Et" theme={followed ? "unfollow" : "follow"} onPress={() => userFollowedUser([user])} />
        </View>
    )
}

export default FollowersCard
