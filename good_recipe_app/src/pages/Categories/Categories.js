import React from "react"
import { FlatList, Text, View } from "react-native"
import Config from "react-native-config"
import CategoryCard from "../../components/CategoryCard"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import useFetch from "../../hooks/useFetch"
const Categories = ({ navigation }) => {
    const { data, error, loading } = useFetch(Config.API_CATEGORIES);

    const handleCategorySelect = (id) => {
        navigation.navigate("MealsPage", { id })
    }

    const renderCategory = ({ item }) => (
        <CategoryCard category={item} onSelect={() => handleCategorySelect(item.idCategory)} />
    )

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <View>
            <FlatList
                keyExtractor={item => item.idCategory}
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    )
}

export default Categories;