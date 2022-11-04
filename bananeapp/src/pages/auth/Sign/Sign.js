import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from "./Sign.style"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { Formik } from 'formik'
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser'
const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
}

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        navigation.goBack()
    }
    const handleFormSubmit = async (formValues) => {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "şifreler uyuşmuyor",
                type: "danger"
            })
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
            showMessage({
                message: "Kullanıcı oluşturuldu",
                type: "success",
            });
            navigation.navigate("LoginPage")
            setLoading(false)
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "info",
            });
            setLoading(false)
        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input placeholder="e-pastanızı giriniz..."
                            value={values.usermail}
                            onType={handleChange("usermail")}
                        />
                        <Input placeholder="sifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange("password")}
                            isSecure
                        />
                        <Input placeholder="sifrenizi tekrar giriniz..."
                            value={values.repassword}
                            onType={handleChange("repassword")}
                            isSecure
                        />
                        <Button text="Giriş yap" theme="primary" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
        </View>
    )
}

export default Sign
