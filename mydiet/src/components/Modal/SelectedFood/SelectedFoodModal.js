import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import Modal from 'react-native-modal'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import styles from "./SelectedFoodModal.style"
import Config from 'react-native-config'
import useFetch from '../../../hooks/useFetch'
import SearchFoodCard from '../SearchFoodCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const SelectedFoodModal = ({ visible, name, onClose }) => {
    const [search, setSearch] = useState("")
    const [food, setFood] = useState("")
    const formattedDate = format(new Date(), "eeee d", { locale: tr })

    const { data, error, loading } = useFetch(`${Config.API_URL}?query=${food}&common=true&detailed=true`)

    console.log(data)
    const handleClose = () => {
        setFood("")
        setSearch("")
    }

    const handleSelectFood = () => {
        setFood(search)
    }

    const renderFood = ({ item }) => <SearchFoodCard food={item} />
    return (
        <Modal style={styles.modal}
            isVisible={visible}
        >
            <View style={styles.modal_header}>
                <View style={styles.header_left}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>

                <View style={styles.close_container}>
                    <Text onPress={onClose} style={styles.close}>İptal</Text>
                </View>
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="yemek ara..."
                    value={search}
                    onChangeText={setSearch}
                    onSubmitEditing={handleSelectFood}
                />
                {food && <Icon name="close" size={30} style={styles.close_icon} onPress={handleClose} />}
            </View>
            <View>
                {
                    food && <FlatList
                        data={data.branded}
                        renderItem={renderFood}
                    />
                }

            </View>
        </Modal>
    )
}

export default SelectedFoodModal
