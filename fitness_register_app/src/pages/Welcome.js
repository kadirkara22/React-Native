import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    const goToMemberSign = () => {
        navigation.navigate("MemberSignScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.header}>Fitness Salonu</Text>
                <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    }

})

export default Welcome;
