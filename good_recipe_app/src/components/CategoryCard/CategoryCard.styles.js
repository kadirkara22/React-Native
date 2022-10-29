import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ECEFF1",
        margin: 7,
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: "gray"

    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 45,
        resizeMode: "contain"
    },
    title: {
        fontSize: 25,
        color: "black",
        marginLeft: 10
    }
})