import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./CharDetailCardHeader.style"
const CharDetailCardHeader = ({ item }) => {

    return (
        <View style={styles.character_container}>
            <Image style={styles.character_image} source={{ uri: item?.thumbnail?.path + "." + item?.thumbnail?.extension }} />
            <View style={styles.character_info}>
                <Text style={styles.name}>{item?.name}</Text>
                <Text style={styles.description}>{item?.description}</Text>
            </View>

        </View>
    )
}

export default CharDetailCardHeader
