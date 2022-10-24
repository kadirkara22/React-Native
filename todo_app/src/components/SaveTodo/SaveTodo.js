import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import styles from "./SaveTodo.styles"
const SaveTodo = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputItem}
                placeholder="Yapılacak..."
                placeholderTextColor="#808080"
                onChangeText={() => { }}
            ></TextInput>
            <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.text}>Kaydet</Text>
            </Pressable>
        </View>
    )
}
export default SaveTodo;