import React from 'react'
import { View, Text } from 'react-native'
import styles from "./DailyHeader.style"
const DailyHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
            <Text style={styles.item_title}>Yağ</Text>
            <Text style={styles.item_value}>14,33</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.item_title}>Karb</Text>
            <Text style={styles.item_value}>1,4</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.item_title}>Prot</Text>
            <Text style={styles.item_value}>22,3</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.item_title}>TGD</Text>
            <Text style={styles.item_value}>%75</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.item_cal}>Kalori</Text>
            <Text style={styles.item_value_cal}>200</Text>
            </View>
        </View>
    )
}

export default DailyHeader
