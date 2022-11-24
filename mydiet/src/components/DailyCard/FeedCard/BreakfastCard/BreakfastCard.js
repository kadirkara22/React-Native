import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { FoodValueContext } from '../../../../context/FoodValueContext'
import colors from '../../../../styles/colors'
import FoodDetailCard from '../../FoodDetailCard'
import styles from "./BreakfastCard.style"
const BreakfastCard = ({ name, onNext }) => {
    const { foodValue, breakFat, breakPro, breakCarb, breakTgd, breakCalori } = useContext(FoodValueContext)
    const handleInputToggle = () => {
        onNext()
    }
    console.log(foodValue)
    const renderFoodDetail = ({ item }) => <FoodDetailCard food={item} />
    return (
        <>
            <TouchableOpacity style={foodValue.length > 0 ? styles.container_foodValue : styles.container} onPress={handleInputToggle}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.container_right}>
                    <View style={styles.total_cal}>
                        {
                            breakCalori ?
                                <>
                                    <Text style={styles.cal}>{breakCalori.toString()}</Text>
                                    <Text style={styles.cal_title}>Kalori</Text>
                                </>
                                : null
                        }
                    </View>
                    <Icon name="plus" color={colors.darkGreen} size={30} />
                </View>
            </TouchableOpacity>
            {foodValue.length > 0 ?
                <View style={styles.foodValue_container}>
                    <Text style={styles.foodValue_text}>{breakFat.toString()}</Text>
                    <Text style={styles.foodValue_text}>{breakPro.toString()}</Text>
                    <Text style={styles.foodValue_text}>{breakCarb.toString()}</Text>
                    <Text style={styles.foodValue_text}>%{breakTgd.toString()}</Text>
                    <Icon name="arrow-down" size={20} style={styles.foodValue_icon} />
                </View>
                : null
            }

            <FlatList
                data={foodValue}
                renderItem={renderFoodDetail}
            />
        </>

    )
}

export default BreakfastCard
