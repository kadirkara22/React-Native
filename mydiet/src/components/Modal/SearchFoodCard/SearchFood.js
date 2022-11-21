import React from 'react'
import { View, Text } from 'react-native'
import Config from 'react-native-config'
import useFetch from '../../../hooks/useFetch'

const SearchFood = ({ food }) => {



    return (
        <View>
            <Text>{food.brand_name}</Text>
        </View>
    )
}

export default SearchFood
