import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FollowedsCard from '../../../components/UserInfoCard/FollowedsCard'
import FollowersCard from '../../../components/UserInfoCard/FollowersCard'
import MenuValueHeader from '../../../components/UserInfoCard/MenuValueHeader/MenuValueHeader'
import TotalUsersCard from '../../../components/UserInfoCard/TotalUsersCard'
import { UserInfoContext } from '../../../context/UserInfoContext'

import styles from "./UserValues.style"
const UserValues = ({ navigation, route }) => {
    const { userInfo } = useContext(UserInfoContext)
    const { select } = route.params
    const menus = [
        { name: "Takip Edilen" },
        { name: "Takipçileri" },
        { name: "Öneriler" },
    ]
    const [active, setActive] = useState(select)
    const handleMenuClick = (name) => {
        setActive(name)
    }
    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <TouchableOpacity onPress={handleBack} style={styles.arrow_back}>
                    <Icon name="keyboard-arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBack} style={styles.userinfo_container}>
                    <Image source={{ uri: userInfo[0].profileImage }} style={styles.image} />
                    <View style={styles.userinfo}>
                        <Text style={styles.fullName}>{userInfo[0].fullName}</Text>
                        <Text style={styles.userName}>@{userInfo[0].userName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.menu_container}>
                {
                    menus.map(({ name }) => (
                        <MenuValueHeader name={name} key={name} active={active} handleMenuClick={handleMenuClick} />
                    ))
                }
            </View>
            {
                active === "Takip Edilen" ? <FollowedsCard />
                    : active === "Takipçileri" ? <FollowersCard />
                        :
                        <TotalUsersCard />
            }




        </View>
    )
}

export default UserValues
