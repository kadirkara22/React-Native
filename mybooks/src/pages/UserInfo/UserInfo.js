import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserProfileInfoCard from "../../components/UserInfoCard/UserProfileInfoCard"
import InfoValues from "../../components/UserInfoCard/InfoValues"
import styles from "./UserInfo.style"
const UserInfo = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>kadir kara</Text>
                <Icon name="logout" size={30} color="black" />
            </View>
            <UserProfileInfoCard />
            <InfoValues />
        </ScrollView>
    )
}

export default UserInfo
