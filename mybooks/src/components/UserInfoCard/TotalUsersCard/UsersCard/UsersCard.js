import React from 'react'
import { View, Text } from 'react-native'
import styles from "./UsersCard.style"
const UsersCard = ({ user }) => {

    return (
        <View>
            <Text>{user.userName}</Text>
        </View>
    )
}

export default UsersCard
