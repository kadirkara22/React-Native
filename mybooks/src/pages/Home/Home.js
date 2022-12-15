import React from 'react'
import { View, } from 'react-native'
import HomeHeader from '../../components/HomeCard/HomeHeader'
import styles from "./Home.style"
import TotalWall from '../../components/HomeCard/TotalWall'

const Home = ({ navigation }) => {

    const searchbook = () => {
        navigation.navigate("SearchBookPage")
    }
    return (
        <View style={styles.container}>
            <HomeHeader onPress={searchbook} />
            <TotalWall />
        </View>
    )
}

export default Home
