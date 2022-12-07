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
    }),
    addBook: StyleSheet.create({
        container: {
            ...base_style.container,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "#039be5",
            width: Dimensions.get("window").width * 0.8,
            alignSelf: "center",
            borderRadius: 20
        },
        title: {
            ...base_style.title,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,


        }
    }),

    selectCategory: StyleSheet.create({
        container: {
            ...base_style.container,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderColor: "#039be5",
            alignSelf: "center",
            borderRadius: 20,
            borderWidth: 1
        },
        title: {
            ...base_style.title,
            color: "#039be5",
            fontSize: 15,


        }
    }),
    icon_button: StyleSheet.create({
        container: {
            ...base_style.container,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignSelf: "center"

        },
        title: {
            ...base_style.title,
            fontSize: 15,
            color: "black"

        }
    }),
    follow: StyleSheet.create({
        container: {
            ...base_style.container,
            paddingVertical: 10,
            marginRight: 10,
            paddingHorizontal: 20,
            backgroundColor: "#039be5",
            borderRadius: 30

        },
        title: {
            ...base_style.title,
            fontSize: 17,
            color: "white",
            fontWeight: "bold"

        }
    }),
    unfollow: StyleSheet.create({
        container: {
            ...base_style.container,
            paddingVertical: 10,
            marginRight: 10,
            paddingHorizontal: 20,
            backgroundColor: "#eeeee",
            borderRadius: 30

        },
        title: {
            ...base_style.title,
            fontSize: 17,
            color: "black",
            fontWeight: "bold"

        }
    }),


}