import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./CharacterDetailCard.style"
const CharacterDetailCard = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
                    }}
                />
                <Text style={styles.title}>{item.name}</Text>

            </View>
        </View>
    )
}

export default CharacterDetailCard
