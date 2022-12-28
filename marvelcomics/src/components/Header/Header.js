import React from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import styles from "./Header.style"
import HeaderCard from './HeaderCard'
const Header = ({ menus, handleMenuClick, active }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{active}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.title_container}>
                {
                    menus.map(({ name }) => (
                        <HeaderCard name={name} key={name} active={active} handleMenuClick={handleMenuClick} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Header
