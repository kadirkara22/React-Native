import { StyleSheet } from "react-native"

export default {
    primary: StyleSheet.create({
        container: {
            backgroundColor: "blue",
            margin: 10,
            padding: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"

        },
        title: {
            fontWeight: "bold",
            color: "white",
        }
    }),
    secondary: StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: "blue",
            margin: 10,
            padding: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"

        },
        title: {
            fontWeight: "bold",
            color: "blue",
        }
    })
}