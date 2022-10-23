import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from "./SortProduct.style"
const SortProduct = () => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.text}>Artan fiyata göre</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => { }}>
                <Text style={styles.text}>Azalan fiyata göre</Text>
            </Pressable>
        </View>
    )
}

export default SortProduct;
