import React, { useEffect, useContext, useState } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import { FoodValueContext } from '../../../context/FoodValueContext'
import styles from "./FoodInfo.style"

const FoodInfo = ({ route }) => {
    const [value, setValue] = useState({})
    const { foodValue, setFoodValue } = useContext(FoodValueContext)
    const { food } = route.params;

    const nutValue = []
    //console.log(foodValue)
    //console.log(food.full_nutrients)
    const Nutrients = () => {
        food.full_nutrients.forEach(item => {
            if (item.attr_id === 203) {
                nutValue.push(item)
            } else if (item.attr_id === 204) {
                nutValue.push(item)
            } else if (item.attr_id === 205) {
                nutValue.push(item)
            }
        })


    }
    console.log(nutValue)
    console.log(foodValue)
    useEffect(() => {
        Nutrients()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{food.brand_name}</Text>
            <View style={styles.value_container}>
                <View style={styles.value}>
                    <Text style={styles.value_title}>Kalori</Text>
                    <Text style={styles.value_count}>103 (%5)</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.value_title}>Yağ</Text>
                    <Text style={styles.value_count}>7,87g</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.value_title}>Karb</Text>
                    <Text style={styles.value_count}>0.7g</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.value_title}>Protein</Text>
                    <Text style={styles.value_count}>7.22g</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FoodInfo
