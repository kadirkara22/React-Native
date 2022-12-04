import React from 'react'
import { View, Text } from 'react-native'
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeHeader from '../../components/HomeCard/HomeHeader'
import styles from "./Home.style"
const Home = ({ navigation }) => {
    const searchbook = () => {
        navigation.navigate("SearchBookPage")
    }
    return (
        <View style={styles.container}>
            <HomeHeader onPress={searchbook} />
            <Icon name="logout" size={30} color="black" onPress={() => auth().signOut()} />
        </View>
    )
}

export default Home
