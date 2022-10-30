import React from "react"
import { Image, View } from "react-native"
import Input from "../../components/Input"
import Button from "../../components/Button"
import styles from "./Login.styles"
import { Formik } from "formik"

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/shopping_logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values11) => console.log(values11)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı Adınızı giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input
                            placeholder="Şifrenizi giriniz..."
                            value={values.username}
                            onType={handleChange('password')}
                            iconName="key"
                        />
                        <Button text="Giriş yap" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Login;