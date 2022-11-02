import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import RenderHTML from 'react-native-render-html'
import styles from "./DetailCard.styles"
const DetailCard = ({ detail }) => {
    const source = {
        html: `${detail.contents}`
    }
    const { width } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.name}>{detail.name.length > 30 ? detail.name.slice(0, 30) + "..." : detail.name}</Text>
                <View style={styles.location_info}>
                    <Text style={styles.location_title}>Locations: </Text><Text style={styles.location}> {detail.locations[0].name}</Text>
                </View>
                <View style={styles.level_info}>
                    <Text style={styles.level_title}>Job Level: </Text><Text style={styles.level}> {detail.levels[0].name}</Text>
                </View>
                <Text style={styles.detail_title}>Job Detail</Text>
            </View>
            <ScrollView style={styles.detail_body} showsVerticalScrollIndicator={false}>
                <RenderHTML source={source} contentWidth={width} />
            </ScrollView>
        </View>
    )
}

export default DetailCard
