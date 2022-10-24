import React from 'react'
import { View, Text } from 'react-native'
import styles from "./TodoList.styles"
const TodoList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.todo_content}>
                <Text style={styles.todoItem}>Çöpler atılacak</Text>
            </View>
            <View style={styles.todo_content}>
                <Text style={styles.todoItem}>Ev temizlenecek</Text>
            </View>
            <View style={styles.todo_false}>
                <Text style={styles.todoItem_false}>Kitap okundu</Text>
            </View>
        </View>
    )
}
export default TodoList;