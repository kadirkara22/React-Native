import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { BookContext } from '../../../../context/BookContext'
import ReadCard from './ReadCard'

const BookReadCard = () => {
    const { readBook } = useContext(BookContext)
    const renderBook = ({ item }) => <ReadCard readbook={item} />
    return (
        <View>
            <FlatList
                data={readBook}
                renderItem={renderBook}
            />
        </View>
    )
}

export default BookReadCard
