import React from 'react'
import { View, Text } from 'react-native'
import styles from "./InfoValues.style"
const InfoValues = () => {
    return (
        <View style={styles.container}>
            <Text>57 Kitap</Text>
            <Text>3 Takip edilen</Text>
            <Text>4 Takipçi</Text>
            <Text>10 Yorum</Text>
        </View>
    )
}

export default InfoValues
