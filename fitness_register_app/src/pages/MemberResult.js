import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Button from "../components/Button"


const MemberResult = ({ navigation, route }) => {

    const { user } = route.params

    return (
        <SafeAreaView>
            <View >
                <Text style={styles.message}>Kayıt Başarılı</Text>
                <Text style={styles.label}>Üye SoyAdı : {user.userName}</Text>
                <Text style={styles.label}>Üye Yaşı : {user.userSurname}</Text>
                <Text style={styles.label}>Üye Adı : {user.userAge}</Text>
                <Text style={styles.label}>Üye Email : {user.userMail}</Text>
                <Text style={styles.label}>Üye Boy : {user.userHeight}</Text>
                <Text style={styles.label}>Üye Kilo : {user.userWeight}</Text>
                <Button text="Kayıt ekranına geri dön" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 5
    },
    message: {
        fontWeight: "bold",
        fontSize: 15,
        color: "green"
    }

})

export default MemberResult;