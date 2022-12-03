import React from 'react'
import { View } from 'react-native'
import BookCardHeader from '../../components/BookCard/BookCardHeader'
import SelectCategory from '../../components/BookCard/SelectCategory'
import styles from "./Book.style"
const Book = ({ route }) => {
    const { book } = route.params


    return (
        <View style={styles.container}>
            <BookCardHeader book={book} />
            <SelectCategory book={book} />
        </View>
    )
}

export default Book
