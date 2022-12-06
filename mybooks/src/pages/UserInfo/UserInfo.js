import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserProfileInfoCard from "../../components/UserInfoCard/UserProfileInfoCard"
import InfoValues from "../../components/UserInfoCard/InfoValues"
import styles from "./UserInfo.style"
import MyLibrary from './MyLibrary'
import Mypage from './Mypage'
import MyComments from './MyComments'
import MenuHeader from '../../components/UserInfoCard/MenuHeader'
import { UserInfoContext } from '../../context/UserInfoContext'

const UserInfo = ({ navigation }) => {
    const { userInfo } = useContext(UserInfoContext)
    const [{ fullName }] = userInfo
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
        navigation.navigate("UserValuesPage", { select })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{fullName}</Text>
                <Icon name="logout" size={30} color="black" onPress={() => auth().signOut()} />
            </View>
            <UserProfileInfoCard />
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
