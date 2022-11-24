import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 70,
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 15
    },
    container_foodValue: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 70,
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
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
    },
    foodValue_container: {
        flexDirection: "row",
        marginHorizontal: 10,
        height: 40,
        backgroundColor: "#c8e6c9",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,

    },
    foodValue_text: {
        flex: 4,
        color: "black",
        textAlign: "center",
        alignSelf: "center"

    },
    foodValue_icon: {
        flex: 2,
        textAlign: "center",
        alignSelf: "center"
    }

})