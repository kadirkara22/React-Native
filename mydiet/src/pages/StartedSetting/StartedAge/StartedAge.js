import React, { useState, useContext } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '../../../components/Button'
import database from '@react-native-firebase/database'
import { showMessage } from 'react-native-flash-message'
import { UserInfoContext } from '../../../context/UserInfoContext'
import styles from "./StartedAge.style"
const StartedAge = ({ navigation }) => {
    const [text, userText] = useState()
    const { userInfo, setUserInfo } = useContext(UserInfoContext)

    const handleNext = () => {
        if (text) {
            createUserAge(text)

        } else {
            showMessage({
                message: "Yaşınızı giriniz",
                type: "danger",
            })
        }

    }

    const createUserAge = (text) => {
        try {
            setUserInfo({ ...userInfo, age: text })

        } catch (error) {
            showMessage({
                message: error,
                type: "danger",
            });
        }
        if (userInfo.age) {
            database().ref(`userinfo/`).push(userInfo)
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yaşınız kaç?</Text>
            <View style={styles.input_info}>
                <TextInput
                    placeholder="yaşını gir"
                    placeholderTextColor="white"
                    style={styles.input}
                    value={text}
                    onChangeText={userText}
                />
                <Text style={styles.cm_title}>yaş</Text>
            </View>
            <View style={styles.button}>
                <Button iconName="arrow-right" onPress={handleNext} theme="started" iconTheme="arrow" />
            </View>
        </View>
    )
}

export default StartedAge
