import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./ReadCard.style"
const ReadCard = ({ readbook }) => {
    console.log(readbook)
    return (
        <View style={styles.container}>
            {
                readbook?.book?.imageLinks ? <Image source={{ uri: readbook?.book.imageLinks.thumbnail }} style={styles.image} />
                    :
                    <View style={styles.icon_image}><Icon name="book" size={40} /></View>
            }
            <View style={styles.info_title}>
                <Text style={styles.title}>{`${readbook?.book.title.length > 25 ? readbook?.book.title.slice(0, 28) + '...' : readbook?.book.title} `}</Text>
                <Text style={styles.authors}>{`${readbook?.book.authors.length > 2 ? readbook?.book.authors.slice(0, 2) + '...' : readbook?.book.authors}`}</Text>
            </View>

        </View>
    )
}

export default ReadCard
