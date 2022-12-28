import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Characters from '../Characters/Characters'
import MyList from '../MyList'
import styles from "./Home.style"
const Home = () => {
    const [search, setSearch] = useState("")
    const menus = [
        { name: "Home" },
        { name: "Characters" },
        { name: "Comics" },
        { name: "Creators" },
        { name: "Event" },
        { name: "Series" },
        { name: "Stories" },
    ]

    const [active, setActive] = useState("Home")
    const handleMenuClick = (name) => {
        setActive(name)
    }
    return (
        <View style={styles.contianer}>
            <Header menus={menus} handleMenuClick={handleMenuClick} active={active} />
            <View style={styles.input_container} >
                <Input style={styles.input}
                    placeholder={`Search Marvel ${active}`}
                    placeholderTextColor="black"
                    value={search}
                    onChangeText={setSearch}
                />
                <Icon name="search" size={25} style={styles.icon} />
            </View>

            {
                active === "Home" ? <MyList />
                    : active === "Characters" ? <Characters search={search} />
                        : null
            }
        </View>
    )
}

export default Home
