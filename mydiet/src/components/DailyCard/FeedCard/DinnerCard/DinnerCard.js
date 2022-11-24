import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { FoodValueContext } from '../../../../context/FoodValueContext'
import colors from '../../../../styles/colors'
import styles from "./DinnerCard.style"
const DinnerCard = ({ name, onNext }) => {

    const handleInputToggle = () => {
        onNext()
    }

    return (

        <TouchableOpacity style={styles.container} onPress={handleInputToggle}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.container_right}>
                <View style={styles.total_cal}>
                    <Text style={styles.cal}></Text>
                    <Text style={styles.cal_title}>Kalori</Text>
                </View>
                <Icon name="plus" color={colors.darkGreen} size={30} />
            </View>

        </TouchableOpacity>


    )
}

export default DinnerCard
