import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import database from "@react-native-firebase/database"
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./ReadingCard.style"
import parseContentData from '../../../utils/parseContentData'

const ReadingCard = ({ userInfo, handleSelectedBook }) => {
    const [readingBook, setReadingBook] = useState([])
    useEffect(() => {
        const [{ id }] = userInfo
        database().ref(`users/${id}/reading`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setReadingBook(parsedData)
            //console.log(parsedData)

        })
    }, [])


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.now_reading_container}>
            {
                readingBook.map(item => (
                    <View style={styles.now_reading} key={item.id}>
                        {
                            item.book.imageLinks?.thumbnail ?
                                <TouchableOpacity onPress={() => handleSelectedBook(item.book)} key={item.id}>
                                    <Image style={styles.now_reading_image}
                                        source={{ uri: item.book.imageLinks.thumbnail }} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => handleSelectedBook(item.book)} key={item.id}>
                                    <View style={styles.icon_image}><Icon name="book" size={40} /></View>
                                </TouchableOpacity>
                        }
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
