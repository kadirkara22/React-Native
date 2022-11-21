import React from 'react'
import { View, Text, FlatList } from 'react-native'
import DailyHeader from "../../components/DailyCard/DailyHeader"
import FeedCard from '../../components/DailyCard/FeedCard/FeedCard'

const Daily = () => {
    const feedTime = ["Kahvaltı", "Öğle Yemeği", "Akşam Yemeği"]
    const renderFeed = ({ item }) => <FeedCard name={item} />
    return (
        <View>
            <DailyHeader />
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={feedTime}
                renderItem={renderFeed}
            />

        </View>
    )
}

export default Daily
