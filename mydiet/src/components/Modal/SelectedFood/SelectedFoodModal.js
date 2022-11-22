import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import Modal from 'react-native-modal'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import styles from "./SelectedFoodModal.style"
import Config from 'react-native-config'
import axios from 'axios'
import SearchFoodCard from '../SearchFoodCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Loading from "../../Loading"
import Error from "../../Error"
const SelectedFoodModal = ({ visible, name, onClose }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const formattedDate = format(new Date(), "eeee d", { locale: tr })


    const handleClose = () => {
        setSearch("")
    }
    const fetch = async () => {

        try {

            await axios.get(`${Config.API_URL}?query=${search}&common=true&detailed=true`, {
                headers: {
                    'x-app-id': "909e2c13",
                    'x-app-key': "70e91eacda15bf8d786b2908b46bd087",
                    'x-remote-user-id': "0"
                }
            }).then((response) => {
                console.log(response.data)
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
                    onSubmitEditing={fetch}
                />
                {search && <Icon name="close" size={30} style={styles.close_icon} onPress={handleClose} />}
            </View>
            <View>
                {
                    <FlatList
                        data={data.branded}
                        renderItem={renderFood}
                    />
                }

            </View>
        </Modal>
    )
}

export default SelectedFoodModal
