import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BookContext } from '../../../context/BookContext'
import styles from "./InfoValues.style"
const InfoValues = ({ handleSelectValue }) => {
    const { readBook } = useContext(BookContext)

    return (
        <View style={styles.container}>
            <View style={styles.container_info}>
                <Text style={styles.value}>{readBook.length}</Text>
                <Text style={styles.book}> Kitap</Text>
            </View>
            <TouchableOpacity style={styles.container_info} onPress={() => handleSelectValue("Takip Edilen")}>
                <Text style={styles.value}>8</Text>
                <Text style={styles.followeds}> Takip edilen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_info} onPress={() => handleSelectValue("Takipçileri")}>
                <Text style={styles.value}>4</Text>
                <Text style={styles.followers}> Takipçi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_info} onPress={handleSelectValue}>
                <Text style={styles.value}>10</Text>
                <Text style={styles.comments}> Yorum</Text>
            </TouchableOpacity>




        </View>
    )
}

export default InfoValues
