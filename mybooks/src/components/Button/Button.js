import { isValid } from 'date-fns'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from "./Button.style"
const Button = ({ onPress, theme, text, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles[theme].container} disabled={loading} >
            <Text style={styles[theme].title}>{text}</Text>
        </TouchableOpacity >
    )
}

export default Button
