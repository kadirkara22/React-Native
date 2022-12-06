import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from "react-native-modal";
import Button from '../../Button';
import styles from "./BookModalContent.style"
const BookModalContent = ({ visible, onClose, onSend, book, onSelectCategory }) => {

    return (
        <Modal style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container}>
                {
                    book.imageLinks ? <Image source={{ uri: book.imageLinks?.thumbnail }} style={styles.image} />
                        : <View style={styles.icon_image}><Icon name="book" size={40} /></View>
                }
                <Text style={styles.title}>{book.title}</Text>
                <View style={styles.button_container}>
                    <Button text="Okuyacağım" theme="selectCategory" onPress={() => onSelectCategory("willread")} />
                    <Button text="Okudum" theme="selectCategory" onPress={() => onSelectCategory("read")} />
                    <Button text="Okuyorum" theme="selectCategory" onPress={() => onSelectCategory("reading")} />
                </View>
                <View style={styles.favori_container} >
                    <Button text="Beğen" iconName="cards-heart-outline" theme="icon_button" onPress={() => onSelectCategory("favori")} />
                    <Button text="Kütüphanem" iconName="plus" theme="icon_button" onPress={() => onSelectCategory("myLibrary")} />
                </View>
            </View>

        </Modal>
    )
}

export default BookModalContent
