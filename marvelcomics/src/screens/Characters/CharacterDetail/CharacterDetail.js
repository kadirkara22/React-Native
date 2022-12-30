import React from 'react'
import { View, Text } from 'react-native'
import Config from 'react-native-config'
import useFetch from '../../../hooks/useFetch'

const CharacterDetail = ({ navigation, route }) => {
    const { id } = route.params

    const { data, loading } = useFetch(`${Config.API_URL}/characters/${id}`)

    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View>
            <Text onPress={handleBack}>back</Text>
        </View>
    )
}

export default CharacterDetail
