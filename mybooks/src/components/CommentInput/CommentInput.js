import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import Button from '../Button'
import styles from "./CommentInput.style"
const CommentInput = ({ userInfo, handleShare, book }) => {
    const [text, setText] = useState("")
    const [{ profileImage }] = userInfo



    return (
        <View style={styles.input_container}>
            <View style={styles.top_container}>
                <Image source={{ uri: profileImage }} style={styles.input_image} />
                <TextInput
                    autoCapitalize="none"
                    style={styles.input}
                    placeholder="Bir yorum yazın..."
                    value={text}
                    onChangeText={setText}
                />
            </View>
            {
                text !== "" ?
                    <View style={styles.bottom_container}>
                        <Button text="Paylaş" theme="send_button" onPress={() => handleShare(book, text)} />
                    </View>
                    : null
            }
        </View>
    )
}

export default CommentInput
