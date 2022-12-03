import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({

    now_reading_container: {
        width: Dimensions.get("window").width * 1,
        height: 100,
        flexDirection: "row",

    },
    now_reading_title: {
        fontWeight: "bold"
    },
    now_reading: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingLeft: 5,
        borderRightWidth: 1,
        borderRightColor: "#eeee"
    },
    now_reading_image: {
        width: 50,
        height: 75,
        borderRadius: 10,
        backgroundColor: "yellow"
    },
    now_reading_info: {
        paddingHorizontal: 5
    },
    now_reading_name: {

    },
    now_reading_author: {

    },


})