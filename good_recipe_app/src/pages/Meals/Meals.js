import React from "react"
import { FlatList, View } from "react-native"
import Config from "react-native-config"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import MealCard from "../../components/MealCard"
import useFetch from "../../hooks/useFetch"
import styles from "./Meals.styles"
const Meals = ({ navigation, route }) => {
    const { strCategory } = route.params
    const { data, error, loading } = useFetch(`${Config.API_MEALS}${strCategory}`);

    const handleMealsSelect = (idMeal) => {
        navigation.navigate("DetailPage", { idMeal })
    }

    const renderMeal = ({ item }) => <MealCard meal={item} onSelectMeal={() => handleMealsSelect(item.idMeal)} />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.idMeal}
                data={data.meals}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default Meals;