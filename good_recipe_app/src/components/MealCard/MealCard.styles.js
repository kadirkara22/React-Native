import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: Dimensions.get("window").height / 4,
        margin: 10,
        justifyContent: "flex-end",

    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        position: "relative",

    },
    title_container: {
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "100%",
        alignItems: "flex-end",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        color: "#FAFAFA",
        fontSize: 28,
        fontWeight: "bold",
        padding: 10,

    }
})