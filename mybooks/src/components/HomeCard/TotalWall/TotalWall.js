import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { WallPageContext } from '../../../context/WallPageContext'

const TotalWall = () => {
    const { totalWall } = useContext(WallPageContext)
    return (
        <View>
            <Text>wall</Text>
        </View>
    )
}

export default TotalWall
