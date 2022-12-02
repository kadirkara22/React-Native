import React from 'react'
import { View, Text } from 'react-native'
import HomeHeader from '../../components/HomeCard/HomeHeader'
import styles from "./Home.style"
const Home = ({ navigation }) => {
    const searchbook = () => {
        navigation.navigate("SearchBookPage")
    }
    return (
        <View style={styles.container}>
            <HomeHeader onPress={searchbook} />
        </View>
    )
}

export default Home
