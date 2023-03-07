import React from 'react'
import { View, Button } from 'react-native'
import Box from '../components/Box'
import BoxCenter from "../components/Box-center"
import { Logo } from '../components/icons'



const SearchView = ({ navigation }) => {
    return (
        <BoxCenter bg="atasozleriLight">
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Logo color="red" />
        </BoxCenter>
    )
}

export default SearchView
