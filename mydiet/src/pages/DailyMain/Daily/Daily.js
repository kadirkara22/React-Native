import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import DailyHeader from "../../../components/DailyCard/DailyHeader"

import BreakfastCard from '../../../components/DailyCard/FeedCard/BreakfastCard'
import DinnerCard from '../../../components/DailyCard/FeedCard/DinnerCard'
import LunchCard from '../../../components/DailyCard/FeedCard/LunchCard'
import { FoodValueContext } from '../../../context/FoodValueContext'

const Daily = ({ navigation }) => {
    const { foodValue } = useContext(FoodValueContext)
    const feedTime = ["Kahvaltı", "Öğle Yemeği", "Akşam Yemeği"]

    const handleNext = (name) => {
        navigation.navigate("selectFoodPage", { name })
    }


    //const renderFeed = ({ item }) => <FeedCard name={item} onNext={() => handleNext(item)} />
    return (
        <View>
            <DailyHeader />
            {/*   <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={feedTime}
                renderItem={renderFeed}
            /> */}
            <BreakfastCard name="Kahvaltı" onNext={() => handleNext("Kahvaltı")} />
            <LunchCard name="Öğle Yemeği" onNext={() => handleNext("Öğle Yemeği")} />
            <DinnerCard name="Akşam Yemeği" onNext={() => handleNext("Akşam Yemeği")} />


        </View>
    )
}

export default Daily
