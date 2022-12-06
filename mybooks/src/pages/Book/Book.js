import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BookCardHeader from '../../components/BookCard/BookCardHeader'
import SelectCategory from '../../components/BookCard/SelectCategory'
import styles from "./Book.style"
const Book = ({ route, navigation }) => {
    const { book, page } = route.params

    const handleBack = () => {
        if (page) {
            navigation.navigate(page)
        }
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.arrow_back} onPress={handleBack}>
                <Icon name="keyboard-arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <BookCardHeader book={book} />
            <SelectCategory book={book} />
        </View>
    )
}

export default Book
