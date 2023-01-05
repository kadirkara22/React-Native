import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'
import Title from '../components/Title'

const Result = ({ navigation, route }) => {
    const { score } = route.params
    const scoreBanner = score > 10 ? 'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png' : "https://cdni.iconscout.com/illustration/premium/thumb/businessman-dealing-with-business-failure-5623858-4678583.png"

    const handleHome = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <Title title="RESULTS" />
            <Text style={styles.score_values}>{score}</Text>
            <View style={styles.banner_container}>
                <Image
                    source={{ uri: scoreBanner }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View >
                <TouchableOpacity onPress={handleHome} style={styles.button}>
                    <Text style={styles.button_text}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Result

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
    },
    score_values: {
        fontSize: 26,
        alignSelf: "center",
        fontWeight: "800",
        color: "black"
    }
})
