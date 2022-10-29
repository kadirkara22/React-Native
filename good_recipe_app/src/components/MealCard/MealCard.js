import React from "react"
import { Image, Text, TouchableWithoutFeedback, View } from "react-native"

import styles from "./MealCard.styles"
const MealCard = ({ meal, onSelectMeal }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelectMeal} >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.title_container}>
                    <Text style={styles.title}>{meal.strMeal.length > 22 ? meal.strMeal.slice(0, 22) + "..." : meal.strMeal.slice(0, 22)}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;