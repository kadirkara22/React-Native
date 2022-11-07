import { Formik } from 'formik'
import React from 'react'
import { View, Image } from 'react-native'
import auth from "@react-native-firebase/auth"
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import styles from "./Login.style"

const Login = ({ navigation }) => {

    const handleSignUp = () => {
        navigation.navigate("SignPage")
    }

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )

        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../../assets/codeTalks.png')} style={styles.logo} />
            </View>
            <Formik
                initialValues={{ usermail: '', password: "" }}
                onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, values, handleChange }) => (<View style={styles.form}>
                    <Input placeholder="e-postanızı giriniz.."
                        onType={handleChange("usermail")}
                        value={values.usermail}
                    />
                    <Input placeholder="şifrenizi giriniz.."
                        onType={handleChange("password")}
                        value={values.password}
                    />
                    <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} />
                    <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
                </View>)}

            </Formik>



        </View >
    )
}

export default Login
