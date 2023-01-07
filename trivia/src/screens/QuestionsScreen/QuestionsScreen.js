import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Loading from '../../components/Loading/Loading'
import QuestionCard from '../../components/QuestionCard'
import useFetch from '../../hooks/useFetch'
import styles from "./QuestionsScreen.style"
const QuestionsScreen = ({ navigation, route }) => {
    const [ques, setQues] = useState(0)
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)

    const { item } = route.params
    const { data, loading } = useFetch(
        (item.id != 8 && item.type != null && item.difficulty != null)
            ? `${Config.API_URL}&category=${item.id}&difficulty=${item.difficulty}&type=${item.type}&encode=url3986`
            : (item.id != 8 && item.type == null && item.difficulty != null)
                ? `${Config.API_URL}&category=${item.id}&difficulty=${item.difficulty}&encode=url3986`
                : (item.id != 8 && item.type != null && item.difficulty == null)
                    ? `${Config.API_URL}&category=${item.id}&type=${item.type}&encode=url3986`
                    : (item.id != 8 && item.type == null && item.difficulty == null)
                        ? `${Config.API_URL}&category=${item.id}&encode=url3986`
                        : (item.id == 8 && item.type == null && item.difficulty == null)
                            ? `${Config.API_URL}&encode=url3986`
                            : (item.id == 8 && item.type != null && item.difficulty == null)
                                ? `${Config.API_URL}&type=${item.type}&encode=url3986`
                                : (item.id == 8 && item.type == null && item.difficulty != null)
                                    ? `${Config.API_URL}&difficulty=${item.difficulty}&encode=url3986`
                                    : (item.id == 8 && item.type != null && item.difficulty != null)
                                        ? `${Config.API_URL}&difficulty=${item.difficulty}&type=${item.type}&encode=url3986`
                                        : null
    )

    if (loading) {
        <Loading />
    }
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.ques_count}>1.</Text>
                <Text style={styles.category}>sport</Text>
                <View style={styles.header_right}>
                    <Text style={styles.time}>2</Text>
                    <Icon name="watch-later" size={30} color="white" />
                </View>
            </View>
            <QuestionCard questions={data} ques={ques} options={options} />



        </View>
    )
}

export default QuestionsScreen
