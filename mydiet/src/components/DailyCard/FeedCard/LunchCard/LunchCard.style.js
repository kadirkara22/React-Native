import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 70,
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderRadius: 15
    },
    container_right: {
        flexDirection: "row",
        flex: 2,
    },
    title: {
        flex: 4,
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20

    },
    total_cal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    cal: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    cal_title: {
        color: "black"
    }
})