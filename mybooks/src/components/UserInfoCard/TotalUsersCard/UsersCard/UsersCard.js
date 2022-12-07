import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./UsersCard.style"
import Button from "../../../Button"
const UsersCard = ({ user, handleUserPage }) => {
    const [followed, setFollowed] = useState(false)



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleUserPage([user])} style={styles.container_touch}>
                <Image source={{ uri: user.profileImage }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.fullname}>{user.fullName}</Text>
                    <Text style={styles.username}>@{user.userName}</Text>
                </View>
            </TouchableOpacity>
            <Button text="Takip Et" theme={followed ? "unfollow" : "follow"} onPress={() => { }} />
        </View>
    )
}

export default UsersCard
