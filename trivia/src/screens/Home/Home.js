import React from 'react'
import { View, Text } from 'react-native'
import { signOut } from '../../utils/auth'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Text onPress={signOut}>Logout</Text>
        </View>
    )
}

export default Home
