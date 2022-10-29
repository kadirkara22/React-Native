import { FlatList, Linking, View } from "react-native";
import Config from "react-native-config";
import DetailCard from "../../components/DetailCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch"
import styles from "./Detail.styles"
const Detail = ({ route }) => {
    const { idMeal } = route.params
    const { data, error, loading } = useFetch(`${Config.API_DETAIL}${idMeal}`);



    const renderDetailMeal = ({ item }) => (
        <DetailCard mealDetail={item}
            onSelectDetail={() => { Linking.openURL(item.strYoutube) }}
        />)
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
                renderItem={renderDetailMeal}
            />
        </View>
    )
}

export default Detail;