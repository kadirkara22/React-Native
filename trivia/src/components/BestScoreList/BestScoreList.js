import React from 'react'
import { View, Text,FlatList } from 'react-native'
import BestScoreListCard from "./BestScoreListCard"
import styles from "./BestScoreList.style"
const BestScoreList = ({contentList}) => {

const renderList=({item})=><BestScoreListCard item={item}/>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
                <FlatList
                data={contentList}
                renderItem={renderList}
                keyExtractor={item=>item.id}
                />
        </View>
    ) 
}

export default BestScoreList
