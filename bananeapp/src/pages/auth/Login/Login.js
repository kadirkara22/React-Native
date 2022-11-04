import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from "./Login.style"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { Formik } from 'formik'
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser'
const initialFormValues = {
    usermail: "",
    password: ""
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const handleSignUp = () => {
        navigation.navigate("SignPage")
    }

    const handleFormSubmit = async (formValues) => {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            showMessage({
                message: "başarılı şekilde giriş yapıldı",
                type: "success",
            });
            setLoading(false)
        } catch (error) {
            console.log(error)
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
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
                        <Button text="Giriş yap" theme="primary" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Kayıt ol" theme="secondary" onPress={handleSignUp} />
        </View>
    )
}

export default Login
