import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import database from '@react-native-firebase/database'
import { UserInfoContext } from '../../../context/UserInfoContext'
import Button from '../../Button'
import BookModalContent from '../../Modal/BookModalContent'

const SelectCategory = ({ book }) => {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const { userInfo } = useContext(UserInfoContext)

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }
    console.log(book)
    const handlelistWillRead = (title) => {
        const [{ id }] = userInfo
        if (title == "willread") {
            const newReference = database().ref(`users/${id}/willread`).push();
            newReference
                .set({ book })
                .then(() => console.log('Data updated.'));
        }
        if (title == "read") {
            const newReference = database().ref(`users/${id}/read`).push();
            newReference
                .set({ book })
                .then(() => console.log('Data updated.'));
        }
        if (title == "reading") {
            const newReference = database().ref(`users/${id}/reading`).push();
            newReference
                .set({ book })
                .then(() => console.log('Data updated.'));
        }
        if (title == "favori") {
            const newReference = database().ref(`users/${id}/favori`).push();
            newReference
                .set({ book })
                .then(() => console.log('Data updated.'));
        }
        if (title == "myLibrary") {
            const newReference = database().ref(`users/${id}/mylibrary`).push();
            newReference
                .set({ book })
                .then(() => console.log('Data updated.'));
        }
    }


    return (
        <View>
            <Button text="Okuyacaklarıma Ekle" theme="addBook" onPress={handleInputToggle} />
            <BookModalContent
                book={book}
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSelectCategory={handlelistWillRead}
            /*  onSend={handleSendContent} */
            />
        </View>
    )
}

export default SelectCategory
