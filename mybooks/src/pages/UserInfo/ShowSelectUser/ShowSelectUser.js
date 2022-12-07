import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialIcons'
import UserProfileInfoCard from "../../../components/UserInfoCard/UserProfileInfoCard"
import InfoValues from "../../../components/UserInfoCard/InfoValues"
import styles from "./ShowSelectUser.style"
import MyLibrary from '../MyLibrary'
import Mypage from '../Mypage'
import MyComments from '../MyComments'
import MenuHeader from '../../../components/UserInfoCard/MenuHeader'
import { UserInfoContext } from '../../../context/UserInfoContext'

const UserInfo = ({ navigation, route }) => {
    const { userInfo, previousUser } = route.params
    console.log(route.params)
    const menus = [
        { name: "Kitaplık" },
        { name: "Duvar" },
        { name: "Yorumlar" },
    ]
    const [active, setActive] = useState("Kitaplık")
    const handleMenuClick = (name) => {
        setActive(name)
    }

    const handleSelectedBook = (book, page) => {
        navigation.navigate("SelectedBookPage", { book, page })
    }
    const handleSelectValue = (select) => {
        navigation.navigate("UserValuesPage", { userInfo, select, previousUser })
    }
    const handleBackPage = () => {
        navigation.navigate("UserValuesPage", { userInfo: previousUser })
    }
    return (
        <ScrollView style={styles.container} >
            <TouchableOpacity style={styles.header} onPress={handleBackPage}>
                <Icon name="keyboard-arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <UserProfileInfoCard userInfo={userInfo} />
            <InfoValues handleSelectValue={handleSelectValue} />
            <View style={styles.menu_container}>
                {
                    menus.map(({ name }) => (
                        <MenuHeader name={name} key={name} active={active} handleMenuClick={handleMenuClick} />
                    ))
                }
            </View>
            {
                active === "Kitaplık" ? <MyLibrary userInfo={userInfo} handleSelectedBook={handleSelectedBook} />
                    : active === "Duvar" ? <Mypage />
                        : <MyComments />

            }

        </ScrollView>
    )
}

export default UserInfo
