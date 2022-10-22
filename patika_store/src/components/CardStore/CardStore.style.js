import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 10,
        padding: 10,
        width: '46%',
        height: Dimensions.get('window').height * 0.45,
    },
    image: {
        height: Dimensions.get('window').height * 0.27,
        width: Dimensions.get('window').width * 0.4,
        borderRadius: 10,
        alignSelf: 'center',
    },
    product_info: {
        marginTop: 5,
        marginBottom: 5
    },
    product_title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginBottom: 5
    },
    product_price: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5
    },
    product_isStock: {
        color: "red",
        fontWeight: "bold"
    },
    last_container: {
        paddingTop: 10,
        width: '95%',
        marginLeft: 10,
        marginBottom: 10,
        padding: 10,
        height: Dimensions.get('window').height * 0.40,
        borderRadius: 15,
        backgroundColor: '#e6e6e6',
    },
    last_product_image: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10
    },
    last_product: {
        height: Dimensions.get('window').height * 0.27,

        width: '52%',
        alignSelf: 'center',
    }
});