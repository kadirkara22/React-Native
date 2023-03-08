import React from 'react'
import { View, Button } from 'react-native'
import Box from '../components/Box'
import { Logo } from '../components/icons'
import Search from '../components/Search'



const SearchView = ({ navigation }) => {
    return (
        <Box>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Box py={20}>
            <Logo color="blue" /> 
            </Box>
            <Search/>
        </Box>
    )
}

export default SearchView
