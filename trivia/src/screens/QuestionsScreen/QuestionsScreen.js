import React from 'react'
import { View, Text } from 'react-native'

const QuestionsScreen = ({ navigation, route }) => {
    const { item } = route.params
    console.log(item)
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default QuestionsScreen
