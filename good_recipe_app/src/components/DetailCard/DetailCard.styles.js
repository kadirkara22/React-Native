import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: Dimensions.get('window').height / 3,
    },
    title_container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    title: {
        color: "#A62C2C",
        fontWeight: "bold",
        fontSize: 25
    },
    area: {
        color: "#A62C2C",
        fontWeight: "bold",
        fontSize: 20
    },
    instruction: {
        padding: 10,
        fontSize: 18,
        color: "black",
        textAlign: "justify"
    },
    button: {
        height: 50,
        backgroundColor: "#FF0000",
        borderRadius: 7,
        margin: 20,
        marginTop: -15,
        alignItems: "center",
        justifyContent: "center",
    },
    text_button: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
})