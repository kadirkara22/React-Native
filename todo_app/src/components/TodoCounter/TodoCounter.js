import React from 'react'
import { View, Text } from 'react-native'
import styles from "./TodoCounter.styles"
const TodoCounter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.counter}>2</Text>
        </View>
    )
}
export default TodoCounter;