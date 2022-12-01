import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserProfileInfoCard from '../../components/UserProfileInfoCard'
import styles from "./UserInfo.style"
const UserInfo = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>kadir kara</Text>
                <Icon name="logout" size={30} color="black" />
            </View>
            <UserProfileInfoCard />
        </ScrollView>
    )
}

export default UserInfo
