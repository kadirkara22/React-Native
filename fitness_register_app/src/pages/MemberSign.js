import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';


const MemberSign = ({ navigation }) => {
    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userHeight, setUserHeight] = useState(null)
    const [userWeight, setUserWeight] = useState(null)

    const handleSubmit = () => {
        if (!userName || !userSurname || !userAge || !userMail || !userHeight || !userWeight) {
            Alert.alert("Fitness Salonu", "Bilgiler boş bırakılamaz");
            return
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHeight,
            userWeight
        }
        navigation.navigate("MemberResultScreen", { user })
    }

    return (
        <SafeAreaView >
            <View >
                <Input label="Üye adı" placeholder="Üyenin ismini giriniz" onChangeText={setUserName} />
                <Input label="Üye soyadı" placeholder="Üyenin soyadını giriniz" onChangeText={setUserSurname} />
                <Input label="Üye yaş" placeholder="Üyenin yaşını giriniz" onChangeText={setUserAge} />
                <Input label="Üye e-posta" placeholder="Üyenin e-postasını giriniz" onChangeText={setUserMail} />
                <Input label="Üye boy" placeholder="Üyenin boyunu giriniz" onChangeText={setUserHeight} />
                <Input label="Üye kilo" placeholder="Üyenin kilosunu giriniz" onChangeText={setUserWeight} />
                <Button text="Kaydı Tamamla" onPress={handleSubmit} />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({


})

export default MemberSign;
