import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        borderRadius: 10,
        marginBottom: 10,
        width: '45%',
        height: Dimensions.get('window').height * 0.40,
    },
    image: {
        height: Dimensions.get('window').height * 0.27,
        width: Dimensions.get('window').width * 0.4,
        borderRadius: 10,
        alignSelf: 'center',
    }
});