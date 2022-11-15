import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "./Button.style"
const Button = ({ onPress, iconName, theme, iconTheme }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles[theme].container}>
            <Icon name={iconName} size={30} color="#33B24B" style={styles[iconTheme].icon} />
        </TouchableOpacity>
    )
}

export default Button
