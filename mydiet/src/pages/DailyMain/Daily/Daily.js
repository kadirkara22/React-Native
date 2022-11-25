import React, { useContext } from 'react'
import { View, Text, FlatList,ScrollView } from 'react-native'
import DailyHeader from "../../../components/DailyCard/DailyHeader"

import BreakfastCard from '../../../components/DailyCard/FeedCard/BreakfastCard'
import DinnerCard from '../../../components/DailyCard/FeedCard/DinnerCard'
import LunchCard from '../../../components/DailyCard/FeedCard/LunchCard'
import { FoodValueContext } from '../../../context/FoodValueContext'

const Daily = ({ navigation }) => {
  
    const feedTime = ["Kahvaltı", "Öğle Yemeği", "Akşam Yemeği"]

    const handleNext = (name,id) => {
        navigation.navigate("selectFoodPage", { name})
    }


  
    return (
        <View>
            <DailyHeader />
           
            <BreakfastCard name="Kahvaltı" onNext={() => handleNext("Kahvaltı")} />
            <LunchCard name="Öğle Yemeği" onNext={() => handleNext("Öğle Yemeği")} />
            <DinnerCard name="Akşam Yemeği" onNext={() => handleNext("Akşam Yemeği")} />
          

        </View>
    )
}

export default Daily
