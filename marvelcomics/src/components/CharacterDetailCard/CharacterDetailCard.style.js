import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get("window").width / 2.2

        ,

    },
    title: {
        color: "black"
    },
    inner_container: {
        backgroundColor: "red"
    },
    image: {
        width: 170,
        height: 500,

    },

})