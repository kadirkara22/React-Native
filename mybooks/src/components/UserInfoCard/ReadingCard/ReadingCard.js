import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import database from "@react-native-firebase/database"
import styles from "./ReadingCard.style"
import parseContentData from '../../../utils/parseContentData'

const ReadingCard = ({ userInfo }) => {
    const [readingBook, setReadingBook] = useState([])
    useEffect(() => {
        const [{ id }] = userInfo
        database().ref(`users/${id}/reading`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setReadingBook(parsedData)

        })
    }, [])


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.now_reading_container}>
            {
                readingBook.map(item => (
                    <View style={styles.now_reading} key={item.id}>
                        <Image style={styles.now_reading_image}
                            source={{ uri: item?.book?.imageLinks?.thumbnail }} />
                        <View style={styles.now_reading_info}>
                            <Text style={styles.now_reading_name}>{item?.book?.title.length > 20 ? item?.book?.title.slice(0, 20) : item?.book?.title}</Text>
                            <Text style={styles.now_reading_author}>{item?.book?.authors}</Text>
                        </View>
                    </View>
                ))
            }

        </ScrollView>
    )
}

export default ReadingCard
