import { Dimensions, StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    image_container: {
        height: Dimensions.get("window").height * 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",



    },
    left_logo: {
        width: 200,
        height: 100
    },
    right_logo: {
        alignItems: "center"
    },
    top_logo: {
        width: 50,
        height: 50
    },
    bottom_logo: {
        width: 100,
        height: 50
    },
    title: {
        textAlign: "center",
        color: "red",
        fontSize: 20,
    },
    input_container: {
        height: Dimensions.get("window").height * 0.4,

    },
    input: {
        borderWidth: 1,
        marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 7,
        paddingLeft: 15,
        borderColor: "#bdbdbd"
    },
    errors: {
        color: "red",
        fontWeight: "bold",
        fontSize: 14,

    },
    show_input: {
        borderWidth: 1,
        borderColor: "#bdbdbd",
        width: 30,
        height: 30
    }

})