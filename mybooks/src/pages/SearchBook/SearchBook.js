import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import axios from "axios"
import SearchBookCard from '../../components/HomeCard/SearchBookCard'
import styles from "./SearchBook.style"
const SearchBook = () => {
    const [text, setText] = useState("")
    const [searchBook, setSearchBook] = useState([])

    const fetch = async () => {
        try {
            await axios.get(`https://www.googleapis.com/books/v1/volumes?q=' + text + '&key=AIzaSyBwyJg2Rh_c1jVZFOT8CylvPlL5UuGRFOI` + '&maxResults=40').then((response) => {
                setData(response.data)
                setLoading(false)
                return response.data;
            })

        } catch (error) {
            if (error.response) {

                console.log(error.response)

            } else if (error.request) {

                console.log(error.request)

            } else if (error.message) {

                console.log(error.message)
            }
        }
    }
    useEffect(() => {
        fetch()
    }, [])

    const renderSearch = ({ item }) => <SearchBookCard books={item} />
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="MyBooks'ta Ara"
                value={text}
                onChangeText={setText}
            />
            <FlatList
                data={searchBook}
                renderItem={renderSearch}
            />
        </View>
    )
}

export default SearchBook
