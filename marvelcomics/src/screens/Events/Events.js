import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Config from 'react-native-config'
import EventCard from '../../components/EventCard'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useFetch'
import styles from "./Events.style"
const Events = ({ url }) => {

    const { data, loading } = useFetch(url)
    const renderData = ({ item }) => <EventCard event={item} />

    if (loading) {
        return <Loading />;
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderData}
                keyExtractor={item => item.id}
                numColumns={2}
            />

        </View>
    )
}

export default Events
