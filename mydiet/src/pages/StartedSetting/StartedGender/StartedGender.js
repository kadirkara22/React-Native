import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../components/Button'
import styles from "./StartedGender.style"
const StartedInfo = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate("StartedLevel")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cinsiyetin ne?</Text>
            <View style={styles.gender_male}>
                <Icon name="face-man-outline" size={170} color="blue" />
            </View>
            <View style={styles.gender_female}>
                <Icon name="face-woman-outline" size={170} color="red" />
            </View>
            <View style={styles.button}>
                <Button iconName="arrow-right" onPress={handleNext} theme="started" iconTheme="arrow" />
            </View>
        </View>
    )
}

export default StartedInfo
