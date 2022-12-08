import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Button from '../../../Button'
import styles from "./FollowersCard.style"
const FollowersCard = ({ handlefollowedUser, handleUserPage, user }) => {
    const [followed, setFollowed] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleUserPage([user])} style={styles.container_touch}>
                <Image source={{ uri: user.fol.profileImage }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.fullname}>{user.fullName}</Text>
                    <Text style={styles.username}>@{user.userName}</Text>
                </View>
            </TouchableOpacity>
            <Button text="Takip Et" theme={followed ? "unfollow" : "follow"} onPress={() => handlefollowedUser(user)} />
        </View>
    )
}

export default FollowersCard
