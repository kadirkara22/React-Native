import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
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
            paddingVertical: 10,

            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 5,

        },
        title: {
            ...base_style.title,
            textAlign: "center",
            fontSize: "18",



        }
    }),
    secondary: StyleSheet.create({
        container: {
            ...base_style.container,

        },
        title: {
            ...base_style.title,



        }
    }),




}