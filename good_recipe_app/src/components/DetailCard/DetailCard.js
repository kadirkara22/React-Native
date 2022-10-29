import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./DetailCard.styles"
const DetailCard = ({ mealDetail, onSelectDetail }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: mealDetail.strMealThumb }} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{mealDetail.strMeal}</Text>
                <Text style={styles.area}>{mealDetail.strArea}</Text>
            </View>
            <Text style={styles.instruction}>{mealDetail.strInstructions}</Text>
            <TouchableOpacity onPress={onSelectDetail} style={styles.button}>
                <Text style={styles.text_button}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard;