import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./FollowedsCard.style"
import Button from "../../../Button"
const FollowedsCard = ({ user, handleUserPage }) => {
    const [followed, setFollowed] = useState(false)

    console.log(user)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleUserPage([user])} style={styles.container_touch}>
                <Image source={{ uri: user?.followUser?.profileImage }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.fullname}>{user?.followUser?.fullName}</Text>
                    <Text style={styles.username}>@{user?.followUser?.userName}</Text>
                </View>
            </TouchableOpacity>
            <Button text="Takip Et" theme={followed ? "unfollow" : "follow"} onPress={() => { }} />
        </View>
    )
}

export default FollowedsCard
