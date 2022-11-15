import { StyleSheet } from "react-native";
const base_style = StyleSheet.create({
    container: {
    }

})

export default {
    started: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: 'center',
        },
    }),
    arrow: StyleSheet.create({
        ...base_style,
        icon: {
            ...base_style.container,
            fontWeight: "bold",
            fontSize: 40
        },
    })
}