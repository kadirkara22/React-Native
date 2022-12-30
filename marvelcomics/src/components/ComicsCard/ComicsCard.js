import React from 'react'
import { View, Text, Image } from 'react-native'
import Loading from '../Loading'
import styles from "./ComicsCard.style"

const ComicsCard = ({comics }) => {

    return (
        <View style={styles.container}>

            <Image source={{ uri: comics?.thumbnail?.path + '.' + comics?.thumbnail?.extension }} style={styles.image} />
            <View style={styles.name_container}>
                <Text style={styles.name}>{comics?.title?.length > 15 ? comics.title.slice(0, 35) + "..." : comics.title}</Text>
            </View>

        </View>
    )
}

export default ComicsCard
