import React from 'react'
import { View, Text, Image } from 'react-native'
import Loading from '../Loading'
import styles from "./CharacterCard.style"

const CharacterCard = ({ character }) => {

    return (
        <View style={styles.container}>

            <Image source={{ uri: character?.thumbnail?.path + '.' + character?.thumbnail?.extension }} style={styles.image} />
            <View style={styles.name_container}>
                <Text style={styles.name}>{character?.name?.length > 12 ? character.name.slice(0, 12) + "..." : character.name}</Text>
            </View>

        </View>
    )
}

export default CharacterCard
