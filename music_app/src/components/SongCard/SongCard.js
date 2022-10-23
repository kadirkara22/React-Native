import React from 'react'
import { View, Image, Text } from "react-native"
import styles from "./SongCard.style"
const SongCard = ({ song }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{song.artist}</Text>
                        <Text style={styles.year}>{song.year}</Text>
                    </View>
                    {song.isSoldOut &&
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>Tükendi</Text>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

export default SongCard