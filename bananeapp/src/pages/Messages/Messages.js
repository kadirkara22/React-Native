import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/Modal/ContentInput'
import styles from "./Messages.style"
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import ParseContentData from '../../utils/ParseContentData'
import MessageCard from '../../components/card/MessageCard'

const Messages = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database().ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = ParseContentData(contentData || {})
                setContentList(parsedData)
            })
    }, [])

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }
    const handleSendContent = (content) => {
        sendContent(content)
    }
    const sendContent = (content) => {
        const userMail = auth().currentUser.email
        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
            dislike: 0,
        }
        database().ref('messages/').push(contentObject)
    }

    const handledislike = (item) => {
        database()
            .ref(`messages/${item.id}/`)
            .update({ dislike: item.dislike + 1 })
    }
    const renderContent = ({ item }) => (<MessageCard message={item} onDislike={() => handledislike(item)} />)

    return (
        <View style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
        </View>
    )
}

export default Messages
