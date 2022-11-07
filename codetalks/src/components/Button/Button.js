import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./Button.style"
const Button = ({ onPress, text, theme }) => {
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
