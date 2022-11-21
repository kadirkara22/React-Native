import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
export default StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        margin: 0,
        padding: 0
    },
    modal_header: {
        backgroundColor: "#dcedc8",
        height: 60,
        flexDirection: "row",

        alignItems: "center"
    },
    header_left: {
        flex: 3,
        padding: 10,

    },
    name: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,

    },
    date: {
        color: "black"
    },
    close_container: {
        flex: 1,
        alignItems: "center"

    },
    close: {
        color: colors.darkGreen,
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingLeft: 20,
        fontSize: 20,
    },
    close_icon: {
        position: "absolute",
        top: 22,
        right: 30,
    }
})