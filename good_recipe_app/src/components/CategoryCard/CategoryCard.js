import React from "react"
import { Text, TouchableWithoutFeedback, View } from "react-native"

const Categories = ({ category, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View>
                <Text>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Categories;