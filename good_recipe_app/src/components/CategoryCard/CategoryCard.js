import React from "react"
import { Image, Text, TouchableWithoutFeedback, View } from "react-native"
import styles from "./CategoryCard.styles"
const CategoryCard = ({ category, onSelectCategory }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelectCategory} >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;