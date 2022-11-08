import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/Modal/ContentInput'
import styles from "./ChatRooms.style"
const ChatRooms = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }

    const sendContent = () => {


    }

    return (
        <View style={styles.container}>
            <FlatList />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}

            />
        </View>
    )
}

export default ChatRooms
