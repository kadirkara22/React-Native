import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        minHeight: "65%",

    },
    todo_content: {
        margin: 10,
        padding: 15,
        backgroundColor: "#7DA453",
        borderRadius: 10
    },
    todoItem: {
        color: "white",
        fontSize: 20
    },
    todo_true: {
        backgroundColor: "#37474F",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        color:"#808080",
        fontSize: 20,
        textDecorationLine: "line-through",
    },
    todoItem_true: {
        color: "#37474F",
        
    }
})