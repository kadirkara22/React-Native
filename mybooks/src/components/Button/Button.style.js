import { Dimensions, StyleSheet } from "react-native";
const base_style = StyleSheet.create({
    container: {

    },
    title: {

    }

})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "#eeeeee",
            paddingVertical: 5,
            paddingHorizontal: 10,
            width: Dimensions.get("window").width * 0.3,
            alignItems: "center",
            borderRadius: 20,
            alignSelf: "flex-end",
            marginVertical: 10
        },
        title: {
            ...base_style.title,
            fontWeight: "bold",
            color: "black",
            fontSize: 20
        }
    }),
    secondary: StyleSheet.create({
        container: {
            ...base_style.container,
            alignItems: "center",
            marginVertical: 10,
        },
        title: {
            ...base_style.title,
            color: "#039be5",
            fontWeight: "bold",
            fontSize: 20,


        }
    })
}