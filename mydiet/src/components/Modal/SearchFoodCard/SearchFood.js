import React from 'react'
import { View, Text } from 'react-native'


const SearchFood = ({ food }) => {



    return (
        <View>
            <Text>{food.brand_name}</Text>
        </View>
    )
}

export default SearchFood
