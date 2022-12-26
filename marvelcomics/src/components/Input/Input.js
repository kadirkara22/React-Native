import React from 'react'
import { View, TextInput } from 'react-native'
import styles from "./Input.style"
const Input = ({ placeholder, onChangeText, value, isSecure, placeholderTextColor, style }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={isSecure}
                style={style}
            />
        </View>
    )
}

export default Input
