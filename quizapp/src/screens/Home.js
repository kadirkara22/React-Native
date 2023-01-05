import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from '../components/Title'

const Home = ({ navigation }) => {
    const handleStart = () => {
        navigation.navigate("Quiz")
    }
    return (
        <View style={styles.container}>
            <Title title="QUİZZ APP" />
            <View style={styles.banner_container}>
                <Image
                    source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png' }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleStart}>
                    <Text style={styles.button_text}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    container: {
        padding: 12,
        height: "100%",

    },
    banner_container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    button: {
        width: "100%",
        backgroundColor: "#1A759F",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 10
    },
    button_text: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    }
})
