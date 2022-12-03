import React from 'react'
import { View, Text } from 'react-native'
import styles from "./InfoValues.style"
const InfoValues = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_info}>
                <Text style={styles.value}>57</Text>
                <Text style={styles.book}> Kitap</Text>
            </View>
            <View style={styles.container_info}>
                <Text style={styles.value}>3</Text>
                <Text style={styles.followeds}> Takip edilen</Text>
            </View>
            <View style={styles.container_info}>
                <Text style={styles.value}>4</Text>
                <Text style={styles.followers}> Takipçi</Text>
            </View>
            <View style={styles.container_info}>
                <Text style={styles.value}>10</Text>
                <Text style={styles.comments}> Yorum</Text>
            </View>




        </View>
    )
}

export default InfoValues
