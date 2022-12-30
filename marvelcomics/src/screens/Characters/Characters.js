import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Config from 'react-native-config'
import CharacterCard from '../../components/CharacterCard'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useFetch'
import styles from "./Characters.style"
const Characters = ({ url,handleCharSelect }) => {

    const { data, loading } = useFetch(url)



    const renderData = ({ item }) => <CharacterCard character={item} onSelect={() => handleCharSelect(item.id)} />

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

export default Characters
