import { Formik } from 'formik'
import React from 'react'
import { View, Image } from 'react-native'
import auth from "@react-native-firebase/auth"
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import styles from "./Sign.style"

const Sign = ({ navigation }) => {
    //const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        navigation.goBack()
    }

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )
            navigation.navigate("LoginPage")
            //setLoading(false)
        } catch (error) {
            //setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../../assets/codeTalks.png')} style={styles.logo} />
            </View>
            <Formik
                initialValues={{ usermail: '', password: "", repassword: "" }}
                onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, handleChange, values }) => (<View style={styles.form}>
                    <Input placeholder="e-postanızı giriniz.."
                        onType={handleChange("usermail")}
                        value={values.usermail}
                    />
                    <Input placeholder="şifrenizi giriniz.."
                        onType={handleChange("password")}
                        value={values.password}
                    />
                    <Input placeholder="şifrenizi tekrar giriniz.."
                        onType={handleChange("repassword")}
                        value={values.repassword}
                    />
                    <Button text="Kayıt Ol" theme="primary" onPress={handleSubmit} />
                    <Button text="Geri" theme="secondary" onPress={handleLogin} />
                </View>)}
            </Formik>



        </View>
    )
}

export default Sign
