import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 2,
        marginBottom: 5

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        width: Dimensions.get('window').width * 0.46,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})