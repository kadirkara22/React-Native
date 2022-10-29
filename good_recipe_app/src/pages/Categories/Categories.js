import React from "react"
import { FlatList, Text, View } from "react-native"
import Config from "react-native-config"
import CategoryCard from "../../components/CategoryCard"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import useFetch from "../../hooks/useFetch"

import styles from "./Categories.styles"

const Categories = ({ navigation }) => {
    const { data, error, loading } = useFetch(Config.API_CATEGORIES);

    const handleCategorySelect = (strCategory) => {
        navigation.navigate("MealsPage", { strCategory })
    }

    const renderCategory = ({ item }) => (
        <CategoryCard category={item} onSelectCategory={() => handleCategorySelect(item.strCategory)} />
    )

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.idCategory}
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    )
}

export default Categories;